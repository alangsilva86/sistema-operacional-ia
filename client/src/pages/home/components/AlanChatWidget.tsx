import { useEffect, useMemo, useState } from "react";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import { MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const DEVICE_ID_STORAGE_KEY = "alan-ia-chat-device-id";
const CHATKIT_SCRIPT_SRC = "https://cdn.platform.openai.com/deployments/chatkit/chatkit.js";
const DOMAIN_KEY = "domain_pk_69290b0418488194bc48a2660b0d57fc084f1760513e8648";

function getOrCreateDeviceId() {
  if (typeof window === "undefined" || typeof crypto === "undefined" || !crypto.randomUUID) {
    return `anon-${Math.random().toString(36).slice(2)}`;
  }

  const existing = window.localStorage.getItem(DEVICE_ID_STORAGE_KEY);
  if (existing) return existing;

  const newId = crypto.randomUUID();
  window.localStorage.setItem(DEVICE_ID_STORAGE_KEY, newId);
  return newId;
}

export function AlanChatWidget() {
  const [lastError, setLastError] = useState<string | null>(null);
  const [isScriptReady, setIsScriptReady] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return Boolean(window.customElements?.get("openai-chatkit"));
  });
  const deviceId = useMemo(() => getOrCreateDeviceId(), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.customElements?.get("openai-chatkit")) {
      setIsScriptReady(true);
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-chatkit-script="true"]');

    const handleLoad = () => setIsScriptReady(true);
    const handleError = () => {
      setLastError("Não foi possível carregar o chat. Recarregue a página ou tente novamente.");
      setIsScriptReady(false);
    };

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });
      return () => {
        existingScript.removeEventListener("load", handleLoad);
        existingScript.removeEventListener("error", handleError);
      };
    }

    const script = document.createElement("script");
    script.src = CHATKIT_SCRIPT_SRC;
    script.async = true;
    script.dataset.chatkitScript = "true";
    script.dataset.openaiDomainKey = DOMAIN_KEY;
    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
    };
  }, []);

  const { control, focusComposer } = useChatKit({
    api: {
      async getClientSecret(existing) {
        setLastError(null);

        try {
          const response = await fetch("/api/chatkit/session", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: deviceId, existing })
          });

          if (!response.ok) {
            const message = await response.text();
            throw new Error(message || "Não foi possível iniciar a sessão com a Alan IA.");
          }

          const payload = await response.json();

          if (payload?.user && payload.user !== deviceId) {
            window.localStorage.setItem(DEVICE_ID_STORAGE_KEY, payload.user);
          }

          return payload.client_secret as string;
        } catch (error) {
          setLastError(error instanceof Error ? error.message : "Erro ao conectar com a Alan IA.");
          throw error;
        }
      }
    },
    theme: "dark",
    header: {
      title: { text: "Alan IA" }
    },
    startScreen: {
      greeting: "Converse com a Alan IA e veja como instalamos IA na sua operação.",
      prompts: [
        { label: "Funciona no meu negócio?", prompt: "Esse método funciona para meu segmento e tamanho de time?" },
        { label: "Como é a implantação?", prompt: "Quais são as etapas do método P→P→S para começar agora?" },
        { label: "ROI e tempo", prompt: "Quanto tempo até reduzir retrabalho e ter respostas padrão com IA?" }
      ]
    },
    composer: {
      placeholder: "Envie sua pergunta e receba a resposta da Alan IA"
    }
  });

  useEffect(() => {
    if (isScriptReady) {
      focusComposer();
    }
  }, [isScriptReady, focusComposer]);

  return (
    <Card className="bg-white/5 border border-white/10 backdrop-blur">
      <CardContent className="p-4 sm:p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge className="bg-white/10 border border-white/20 text-white uppercase tracking-[0.18em]">Alan IA</Badge>
              <span className="text-xs text-gray-400">Tira dúvidas em tempo real</span>
            </div>
            <p className="text-sm text-gray-300">
              Faça perguntas sobre o sistema operacional de IA e veja respostas e ações do fluxo em tempo real.
            </p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b35]/15 text-[#ff6b35]">
            <MessageCircle className="w-5 h-5" />
          </div>
        </div>

        {lastError ? (
          <div className="rounded-lg border border-red-500/40 bg-red-500/10 text-red-100 text-sm p-3">{lastError}</div>
        ) : (
          <p className="text-xs text-gray-400">
            Dica: clique nos prompts iniciais ou{" "}
            <button type="button" className="underline" onClick={() => focusComposer()}>
              abra o campo
            </button>{" "}
            para enviar sua pergunta.
          </p>
        )}

        <div className="rounded-xl border border-white/10 overflow-hidden">
          {isScriptReady ? (
            <ChatKit control={control} className="h-[520px] w-full bg-transparent" />
          ) : (
            <div className="h-[520px] w-full flex items-center justify-center text-sm text-gray-300">
              Carregando Alan IA...
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

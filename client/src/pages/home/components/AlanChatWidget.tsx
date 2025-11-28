import { useEffect, useMemo, useState } from "react";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import { MessageCircle, Zap } from "lucide-react";

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

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad, { once: true });
      return () => existingScript.removeEventListener("load", handleLoad);
    }

    const script = document.createElement("script");
    script.src = CHATKIT_SCRIPT_SRC;
    script.async = true;
    script.dataset.chatkitScript = "true";
    script.dataset.openaiDomainKey = DOMAIN_KEY;
    script.addEventListener("load", handleLoad, { once: true });
    document.body.appendChild(script);
  }, []);

  const { control, focusComposer } = useChatKit({
    api: {
      async getClientSecret(existing) {
        setLastError(null);
        try {
          const response = await fetch("/api/chatkit/session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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
          setLastError("Erro de conexão.");
          throw error;
        }
      }
    },
    theme: {
      colorScheme: "dark",
      radius: "pill",
      density: "compact",
      typography: {
        baseSize: 15,
        fontFamily: '"Inter", sans-serif'
      }
    },
    header: { title: { text: "ALAN IA | Momentum" } },
    startScreen: {
      greeting: "Sou a inteligência do Alan. Qual processo operacional está travando o crescimento da sua empresa hoje?",
      prompts: [
        { label: "Vendas travadas", prompt: "Minha operação de vendas está travada e faltam leads. Como resolvo?" },
        { label: "Caos Operacional", prompt: "Não tenho tempo e minha equipe depende de mim para tudo." },
        { label: "Equipe com erros", prompt: "Minha equipe comete muitos erros repetitivos e o treinamento não funciona." },
        { label: "Sobre o Workshop", prompt: "Quero saber detalhes, data e valor do Workshop Presencial." }
      ]
    },
    composer: { placeholder: "Descreva seu gargalo operacional..." }
  });

  useEffect(() => {
    if (isScriptReady) focusComposer();
  }, [isScriptReady, focusComposer]);

  return (
    <Card className="bg-[#0a192f] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col h-[700px] w-full max-w-4xl mx-auto">
      <style>{`
        openai-chatkit {
          height: 100% !important;
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          min-height: 500px !important;
          pointer-events: auto !important;
          z-index: 10 !important;
          --ck-accent: #ff6b35 !important;
          --ck-accent-hover: #e55a2b !important;
          --ck-body-bg: #050b14 !important;
          --ck-secondary-bg: #0a192f !important;
          --ck-border-radius: 4px !important;
          --ck-font-family: "Inter", sans-serif !important;
        }
        :host(openai-chatkit) {
          height: 100%;
        }
        textarea {
          color: white !important;
        }
      `}</style>

      <CardContent className="p-0 flex-1 flex flex-col relative z-10 h-full">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a192f]">
          <div className="flex items-center gap-3">
            <Badge className="bg-[#ff6b35] text-white border-0 font-bold">ALAN IA</Badge>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Conectado
            </div>
          </div>
          <Zap className="w-5 h-5 text-[#ff6b35]" />
        </div>

        <div className="flex-1 w-full bg-[#050b14] relative">
          {isScriptReady ? (
            <div style={{ height: "100%", width: "100%", position: "absolute", inset: 0 }}>
              <ChatKit control={control} />
            </div>
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center text-gray-500 gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ff6b35]" />
              <span className="font-mono text-xs">CARREGANDO SISTEMA...</span>
            </div>
          )}

          {lastError && (
            <div className="absolute bottom-4 left-4 right-4 bg-red-900/80 text-white p-3 rounded text-xs border border-red-500">
              {lastError}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

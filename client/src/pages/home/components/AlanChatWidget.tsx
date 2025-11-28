import { useMemo, useState } from "react";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import { MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const DEVICE_ID_STORAGE_KEY = "alan-ia-chat-device-id";

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
  const deviceId = useMemo(() => getOrCreateDeviceId(), []);

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
          <ChatKit control={control} className="h-[520px] w-full bg-transparent" />
        </div>
      </CardContent>
    </Card>
  );
}

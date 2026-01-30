"use client";

import { MessageSquare } from "lucide-react";
import { trackInterest } from "@/lib/analytics";

import { FadeIn } from "@/app/components/Motion";
import { Section } from "@/app/components/Section";

export function ConciergeSection() {
  const handleOpen = () => {
    window.dispatchEvent(new CustomEvent("concierge:open", { detail: { location: "post-faq" } }));
  };

  return (
    <Section id="duvidas">
      <FadeIn>
        <div className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_55%),linear-gradient(120deg,rgba(59,130,246,0.12),rgba(255,255,255,0.03))] p-8 shadow-[0_0_45px_rgba(59,130,246,0.18)] backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Ainda com dúvidas?</p>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Tire sua dúvida direto com o Alan
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                Se ainda restou algum detalhe antes de confirmar sua inscrição, mande sua pergunta e receba uma resposta
                pessoal.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                try {
                  trackInterest("hero_button");
                } catch (error) {
                  // não bloquear o fluxo principal se analytics falhar
                  // eslint-disable-next-line no-console
                  console.warn("trackInterest failed:", error);
                }
                window.dispatchEvent(new CustomEvent("concierge:open", { detail: { location: "post-faq" } }));
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-blue-600/40 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              <MessageSquare className="h-4 w-4" />
              Falar com o Alan agora
            </button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

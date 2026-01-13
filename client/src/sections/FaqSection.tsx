import { HelpCircle } from "lucide-react";

import { trackEvent } from "@/lib/analytics";
import { Section } from "@/sections/Section";

const faqs = [
  {
    q: "Preciso saber programar?",
    a: "Nao. O foco e explicar o processo e aplicar a rotina. A configuracao e guiada durante os encontros."
  },
  {
    q: "Serve para meu nicho?",
    a: "Se voce tem processos repetitivos, atendimento comercial e precisa de previsibilidade, adaptamos o sistema para a sua realidade."
  },
  {
    q: "O que exatamente eu levo pronto?",
    a: "Agente de triagem comercial, motor de reativacao de base, dashboard com 5 KPIs e o blueprint documentado."
  },
  {
    q: "E se eu nao conseguir aplicar?",
    a: "Voce sai com checklist e uma sessao online de ajustes. Se ainda nao fizer sentido, a garantia cobre ate o 2o encontro."
  },
  {
    q: "Como funciona a garantia?",
    a: "Participe ate o 2o encontro. Se nao perceber valor pratico, devolvemos 100% do investimento."
  }
];

export function FaqSection() {
  return (
    <Section id="faq">
      <div className="space-y-6 max-w-4xl">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Perguntas frequentes</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white">FAQ sem enrolacao</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[#222] bg-[#0b0b0b]"
              onToggle={(event) => {
                const target = event.currentTarget;
                if (target.open) {
                  trackEvent("faq_open", { question: item.q });
                }
              }}
            >
              <summary className="flex items-center justify-between cursor-pointer text-base font-semibold px-5 py-4 gap-3 text-white">
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-[#FF4500]" />
                  {item.q}
                </span>
                <span className="text-[#FF4500] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-5 pb-5 text-sm text-[#BDBDBD]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

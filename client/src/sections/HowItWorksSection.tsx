import { Lightbulb, PlugZap, Sparkles, Wrench } from "lucide-react";

import { Section } from "@/sections/Section";

const schedule = [
  {
    title: "Diagnostico e blueprint",
    date: "13/12 – 10h00 • Atrium – Escritorio Prospera | Fatorcard",
    bullets: [
      "Mapa do problema principal e objetivo claro",
      "Base de conhecimento inicial para treinar a IA",
      "Blueprint da ferramenta 1"
    ],
    output: "Problema mapeado + desenho da primeira solucao.",
    icon: <Lightbulb className="h-5 w-5 text-[#FF4500]" />
  },
  {
    title: "Construcao rapida da ferramenta 1.0",
    date: "18/12 – 10h00 • Atrium – Escritorio Momentum | Acessus",
    bullets: ["Ferramentas no-code escolhidas", "IA plugada como cerebro", "Versao 1.0 pronta e testada"],
    output: "Ferramenta 1.0 rodando na pratica.",
    icon: <Wrench className="h-5 w-5 text-[#FF4500]" />
  },
  {
    title: "Automacao e integracoes reais",
    date: "20/12 – 18h30 • Atrium – Escritorio Prospera | Fatorcard",
    bullets: ["WhatsApp, e-mail e planilhas conectados", "Gatilhos e rotas configurados", "Evolucao da solucao"],
    output: "Fluxo ligado a rotina real com automacao minima.",
    icon: <PlugZap className="h-5 w-5 text-[#FF4500]" />
  },
  {
    title: "Sessao online de ajustes",
    date: "Agendada apos os encontros • Online",
    bullets: ["Ajustes finos e expansao", "Plano de treinamento interno", "Checklist para seguir sozinho"],
    output: "Plano personalizado de expansao segura.",
    icon: <Sparkles className="h-5 w-5 text-[#FF4500]" />
  }
];

const deliveryFacts = [
  { label: "Local", value: "Maringa (presencial) + sessao online" },
  { label: "Datas", value: "13/12, 18/12, 20/12 + sessao online agendada" },
  { label: "Duracao", value: "[preencher com dados reais]" },
  { label: "Vagas", value: "6 vagas presenciais" },
  { label: "Para quem e", value: "Socios e gestores operacionais de PMEs" }
];

export function HowItWorksSection() {
  return (
    <Section id="como-funciona">
      <div className="space-y-10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Como funciona</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white">O que voce recebe + como funciona</h2>
          <p className="text-[#BDBDBD]">Agenda objetiva com entregas e aplicacao imediata.</p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8">
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#222] bg-[#0b0b0b] p-6 space-y-4">
              <p className="text-sm uppercase tracking-[0.18em] text-[#8A8A8A]">Informacoes do encontro</p>
              <dl className="space-y-3 text-sm text-[#BDBDBD]">
                {deliveryFacts.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <dt className="text-[#8A8A8A]">{item.label}</dt>
                    <dd className="text-white">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl border border-[#222] bg-[#0b0b0b] p-6 space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-[#8A8A8A]">Voce recebe</p>
              <ul className="space-y-2 text-sm text-[#BDBDBD]">
                <li>4 encontros praticos com instalacao guiada</li>
                <li>3 entregaveis rodando + blueprint documentado</li>
                <li>Checklist de continuidade e ajustes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-[#8A8A8A]">Agenda dos 4 encontros</p>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={item.title} className="rounded-2xl border border-[#222] bg-[#0b0b0b] p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#222] bg-black/40">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-[#8A8A8A]">Encontro {index + 1}</p>
                      <p className="text-lg font-semibold text-white">{item.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#BDBDBD]">{item.date}</p>
                  <ul className="space-y-2 text-sm text-[#BDBDBD]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-white/40" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-[#222] bg-black/30 p-3 text-sm text-[#BDBDBD]">
                    <span className="text-[#8A8A8A]">Voce sai com:</span> {item.output}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

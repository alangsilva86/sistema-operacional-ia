import { LayoutDashboard, MessageCircle, RotateCcw } from "lucide-react";

import { Section } from "@/sections/Section";

const deliverables = [
  {
    title: "Agente de Triagem Comercial",
    subtitle: "WhatsApp -> CRM",
    description: "Qualifica, responde e encaminha leads com criterios claros.",
    output: "Fluxo de qualificacao + tags no CRM",
    timing: "Ate o 2o encontro",
    location: "WhatsApp + CRM",
    icon: <MessageCircle className="h-5 w-5 text-[#FF4500]" />
  },
  {
    title: "Motor de Reativacao de Base",
    subtitle: "Follow-up automatico",
    description: "Recupera contatos frios com sequencias e gatilhos simples.",
    output: "Sequencia de reativacao + gatilhos",
    timing: "Ate o 3o encontro",
    location: "WhatsApp/e-mail + planilha ou CRM",
    icon: <RotateCcw className="h-5 w-5 text-[#FF4500]" />
  },
  {
    title: "Dashboard de Controle",
    subtitle: "5 KPIs e alertas simples",
    description: "Visao diaria do que importa, sem complexidade.",
    output: "Painel com 5 KPIs + alertas basicos",
    timing: "Ate o 4o encontro",
    location: "Planilha + painel web",
    icon: <LayoutDashboard className="h-5 w-5 text-[#FF4500]" />
  }
];

export function DeliverablesSection() {
  return (
    <Section id="entregaveis">
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">O que vamos instalar</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white">Entregaveis concretos, sem teoria solta</h2>
          <p className="text-[#BDBDBD]">Cada item sai configurado para rodar na sua rotina.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {deliverables.map((item) => (
            <div key={item.title} className="rounded-2xl border border-[#222] bg-[#0b0b0b] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#222] bg-black/40">
                  {item.icon}
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8A8A8A]">{item.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-[#BDBDBD]">{item.description}</p>
              <div className="space-y-2 text-sm text-[#BDBDBD]">
                <div>
                  <span className="text-[#8A8A8A]">Sai pronto com:</span> {item.output}
                </div>
                <div>
                  <span className="text-[#8A8A8A]">Tempo para rodar:</span> {item.timing}
                </div>
                <div>
                  <span className="text-[#8A8A8A]">Onde roda:</span> {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

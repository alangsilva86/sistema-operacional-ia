import { PrimaryCta } from "@/components/PrimaryCta";
import { Section } from "@/sections/Section";

const caseStudies = [
  {
    title: "Conversao +[X]% em [Y] semanas",
    before: "[baseline: taxa de conversao antes da instalacao]",
    after: "[resultado: taxa apos a instalacao]",
    period: "[periodo/data]",
    installed: "Agente de triagem comercial com regras de qualificacao",
    note: "[limite do case]"
  },
  {
    title: "Reativacao +[X]% em [Y] dias",
    before: "[baseline: contatos parados/sem resposta]",
    after: "[resultado: contatos reativados]",
    period: "[periodo/data]",
    installed: "Motor de reativacao com follow-up automatico",
    note: "[limite do case]"
  },
  {
    title: "Tempo de resposta -[X]% em [Y] semanas",
    before: "[baseline: tempo medio de resposta]",
    after: "[resultado: tempo apos o fluxo]",
    period: "[periodo/data]",
    installed: "Dashboard + alertas para controle diario",
    note: "[limite do case]"
  }
];

interface CaseStudiesSectionProps {
  ctaLabel: string;
  checkoutUrl: string;
  onCtaClick: () => void;
  ctaLocation?: string;
}

export function CaseStudiesSection({
  ctaLabel,
  checkoutUrl,
  onCtaClick,
  ctaLocation = "hero"
}: CaseStudiesSectionProps) {
  return (
    <Section id="prova">
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Prova com contexto</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white">Case studies auditaveis</h2>
          <p className="text-[#BDBDBD]">
            Sem slogans. Cada case mostra baseline, resultado, periodo e o que foi instalado.
          </p>
          <p className="text-xs text-[#8A8A8A]">Preencher com dados reais antes da campanha.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((item) => (
            <div key={item.title} className="rounded-2xl border border-[#222] bg-[#0b0b0b] p-6 space-y-3">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <div className="space-y-2 text-sm text-[#BDBDBD]">
                <div>
                  <span className="text-[#8A8A8A]">Antes:</span> {item.before}
                </div>
                <div>
                  <span className="text-[#8A8A8A]">Depois:</span> {item.after}
                </div>
                <div>
                  <span className="text-[#8A8A8A]">Periodo:</span> {item.period}
                </div>
                <div>
                  <span className="text-[#8A8A8A]">O que foi instalado:</span> {item.installed}
                </div>
                <div>
                  <span className="text-[#8A8A8A]">Observacao:</span> {item.note}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <PrimaryCta href={checkoutUrl} label={ctaLabel} onClick={onCtaClick} location={ctaLocation} />
          <span className="text-xs text-[#8A8A8A]">Vagas presenciais limitadas.</span>
        </div>
      </div>
    </Section>
  );
}

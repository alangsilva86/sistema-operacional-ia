import { CtaButton } from "@/app/components/CtaButton";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

const layoutClasses = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2"];

export function CaseStudiesSection() {
  return (
    <Section id="cases">
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Prova com contexto</p>
          <h2 className="font-heading text-3xl text-white md:text-4xl">{content.cases.title}</h2>
          <p className="text-sm text-[#8A8A8A]">Cada case inclui antes, depois, periodo e limite.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {content.cases.items.map((item, index) => (
            <div
              key={item.company}
              className={`rounded-[20px] border border-[#222] bg-[#0b0b0b] p-6 space-y-4 ${
                layoutClasses[index] ?? ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8A8A8A]">{item.company}</span>
                <span className="rounded-full border border-[#222] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]">
                  {content.cases.badge}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <div className="space-y-2 text-sm text-[#BDBDBD]">
                <p>
                  <span className="text-[#8A8A8A]">Antes:</span> {item.before}
                </p>
                <p>
                  <span className="text-[#8A8A8A]">Depois:</span> {item.after}
                </p>
                <p>
                  <span className="text-[#8A8A8A]">Periodo:</span> {item.period}
                </p>
                <p>
                  <span className="text-[#8A8A8A]">Instalado:</span> {item.installed}
                </p>
                <p>
                  <span className="text-[#8A8A8A]">Observacao:</span> {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaButton label={content.ctaLabel} baseUrl={content.checkoutUrl} location="proof" />
          <p className="text-xs text-[#8A8A8A]">Somente {content.header.badge} presenciais.</p>
        </div>
      </div>
    </Section>
  );
}

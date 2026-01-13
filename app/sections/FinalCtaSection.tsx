import { CtaButton } from "@/app/components/CtaButton";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

export function FinalCtaSection() {
  return (
    <Section id="cta-final">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Turma presencial em Maringa</p>
        <h2 className="font-heading text-3xl text-white md:text-4xl">
          Pronto para instalar seu Sistema Operacional com IA?
        </h2>
        <p className="text-[#BDBDBD]">
          Clique no botao para ir ao checkout. Garanta sua vaga e finalize o cadastro em seguida.
        </p>
        <div className="flex flex-col items-center gap-3">
          <CtaButton label={content.ctaLabel} baseUrl={content.checkoutUrl} location="footer" />
          <p className="text-xs text-[#8A8A8A]">{content.pricing.microcopy}</p>
        </div>
      </div>
    </Section>
  );
}

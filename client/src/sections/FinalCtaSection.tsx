import { PrimaryCta } from "@/components/PrimaryCta";
import { Section } from "@/sections/Section";

interface FinalCtaSectionProps {
  ctaLabel: string;
  checkoutUrl: string;
  onCtaClick: () => void;
  seatsLabel: string;
}

export function FinalCtaSection({ ctaLabel, checkoutUrl, onCtaClick, seatsLabel }: FinalCtaSectionProps) {
  return (
    <Section id="cta-final">
      <div className="space-y-6 text-center max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Imersao presencial em Maringa</p>
        <h2 className="font-heading text-3xl md:text-4xl text-white">Pronto para instalar seu Sistema Operacional?</h2>
        <p className="text-[#BDBDBD]">
          Clique no botao e va direto ao checkout. Garanta sua vaga e finalize o cadastro depois.
        </p>
        <div className="flex flex-col items-center gap-3">
          <PrimaryCta href={checkoutUrl} label={ctaLabel} onClick={onCtaClick} location="footer" />
          <p className="text-xs text-[#8A8A8A]">Risco zero ate o 2o encontro. {seatsLabel}.</p>
        </div>
      </div>
    </Section>
  );
}

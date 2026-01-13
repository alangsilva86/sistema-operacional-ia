import { useEffect, useRef } from "react";
import { ShieldCheck } from "lucide-react";

import { PrimaryCta } from "@/components/PrimaryCta";
import { trackEvent } from "@/lib/analytics";
import { Section } from "@/sections/Section";

interface PricingSectionProps {
  ctaLabel: string;
  checkoutUrl: string;
  onCtaClick: () => void;
}

const installmentCount = 12;
const installmentValue = 250;
const installmentTotal = installmentCount * installmentValue;
const formatCurrency = (value: number) => value.toLocaleString("pt-BR");

export function PricingSection({ ctaLabel, checkoutUrl, onCtaClick }: PricingSectionProps) {
  const pricingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!pricingRef.current) return;
    let fired = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !fired) {
            fired = true;
            trackEvent("pricing_view", { section: "investimento" });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(pricingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="investimento">
      <div ref={pricingRef} className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Oferta e investimento</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white">Preco transparente, sem surpresa</h2>
          <p className="text-[#BDBDBD]">Parcelamento mostra o total. Sem letra miuda.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#222] bg-[#0b0b0b] p-6 space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8A8A8A]">A vista</p>
            <p className="text-4xl font-semibold text-white">R$ 1.997</p>
            <p className="text-sm text-[#BDBDBD]">Transferencia ou cartao.</p>
          </div>
          <div className="rounded-2xl border border-[#222] bg-[#0b0b0b] p-6 space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8A8A8A]">Parcelado</p>
            <p className="text-4xl font-semibold text-white">
              {installmentCount}x de R$ {formatCurrency(installmentValue)}
            </p>
            <p className="text-sm text-[#BDBDBD]">Total: R$ {formatCurrency(installmentTotal)}</p>
            <p className="text-xs text-[#8A8A8A]">Parcelamento inclui taxas do meio de pagamento.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#222] bg-[#0b0b0b] p-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#222] bg-black/40 text-[#FF4500]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Risco Zero: 100% ate o 2o encontro</p>
              <p className="text-sm text-[#BDBDBD]">
                Participe ate o 2o encontro. Se nao fizer sentido para sua operacao, devolvemos 100% do investimento.
              </p>
            </div>
          </div>
        </div>

        <PrimaryCta href={checkoutUrl} label={ctaLabel} onClick={onCtaClick} location="pricing" />
      </div>
    </Section>
  );
}

import { ShieldCheck } from "lucide-react";

import { CtaButton } from "@/app/components/CtaButton";
import { PricingObserver } from "@/app/components/PricingObserver";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

const formatCurrency = (value: number) => value.toLocaleString("pt-BR");

export function PricingSection() {
  return (
    <Section id="pricing">
      <div className="space-y-8">
        <PricingObserver />
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Investimento</p>
          <h2 className="font-heading text-3xl text-white md:text-4xl">{content.pricing.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[20px] border border-[#222] bg-[#0b0b0b] p-6 space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A8A8A]">A vista</p>
            <p className="text-4xl font-semibold text-white">{content.pricing.oneTime}</p>
          </div>
          <div className="rounded-[20px] border border-[#222] bg-[#0b0b0b] p-6 space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A8A8A]">Parcelado</p>
            <p className="text-4xl font-semibold text-white">
              {content.pricing.installments.count}x de R$ {formatCurrency(content.pricing.installments.value)}
            </p>
            <p className="text-sm text-[#BDBDBD]">
              Total: R$ {formatCurrency(content.pricing.installments.total)}
            </p>
            <p className="text-xs text-[#8A8A8A]">{content.pricing.note}</p>
          </div>
        </div>
        <div className="rounded-[20px] border border-[#222] bg-[#0b0b0b] p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#222] bg-black/40 text-[#FF4500]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">{content.pricing.guaranteeTitle}</p>
              <p className="text-sm text-[#BDBDBD]">{content.pricing.guaranteeText}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaButton label={content.ctaLabel} baseUrl={content.checkoutUrl} location="pricing" />
          <p className="text-xs text-[#8A8A8A]">{content.pricing.microcopy}</p>
        </div>
      </div>
    </Section>
  );
}

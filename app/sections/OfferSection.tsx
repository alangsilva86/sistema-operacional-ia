import { CheckCircle2, XCircle } from "lucide-react";

import { CtaButton } from "@/app/components/CtaButton";
import { FadeIn, Stagger, StaggerItem } from "@/app/components/Motion";
import { SecondaryCtaLink } from "@/app/components/SecondaryCtaLink";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

const guaranteeHighlight = "100% do seu dinheiro";

export function OfferSection() {
  const priceLabel = content.offer.price.startsWith("Por:") ? "Por:" : "";
  const priceValue = content.offer.price.replace("Por:", "").trim();
  const [installmentsRaw, cashRaw] = priceValue.split("(ou");
  const installments = installmentsRaw.trim();
  const cash = cashRaw ? cashRaw.replace(")", "").trim() : "";
  const guaranteeParts = content.offer.guaranteeText.split(guaranteeHighlight);
  const hasGuaranteeHighlight = content.offer.guaranteeText.includes(guaranteeHighlight);
  const installmentParts = installments.split("de");
  const installmentPrefix = installmentParts.length > 1 ? `${installmentParts[0].trim()} de` : "";
  const installmentValue = installmentParts.length > 1 ? installmentParts.slice(1).join("de").trim() : installments;

  return (
    <Section id="oferta">
      <div className="space-y-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">{content.offer.title}</h2>
        </FadeIn>

        <FadeIn>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Comparativo rápido</p>
            <div className="mt-4 space-y-3">
              {content.offer.priceAnchors?.map((item) => {
                const isPositive = item.tone === "positive";
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
                  >
                    {isPositive ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                    ) : (
                      <XCircle className="mt-0.5 h-5 w-5 text-rose-400" />
                    )}
                    <p className={`text-sm leading-relaxed ${isPositive ? "text-emerald-100" : "text-slate-200"}`}>
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <Stagger className="grid gap-6 lg:grid-cols-3">
          <StaggerItem className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-slate-400 line-through decoration-slate-400">{content.offer.anchor}</p>
            <div className="mt-4 space-y-2">
              {priceLabel ? <p className="text-xs text-slate-400">{priceLabel}</p> : null}
              <p className="flex flex-wrap items-baseline gap-2 text-4xl tracking-tight text-white md:text-5xl">
                {installmentPrefix ? (
                  <span className="text-2xl font-semibold text-slate-200 md:text-3xl">{installmentPrefix}</span>
                ) : null}
                <span className="font-bold">{installmentValue}</span>
              </p>
              {cash ? <p className="text-base text-slate-400">{cash}</p> : null}
            </div>
          </StaggerItem>
          <StaggerItem className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-2">
            <p className="text-sm font-semibold text-white">{content.offer.includedTitle}</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {content.offer.includedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>

        <FadeIn className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <SecondaryCtaLink
            label={content.hero.secondaryCta}
            baseUrl={content.diagnosticUrl}
            location="offer-secondary"
            className="h-11 px-5 text-xs sm:text-sm"
          />
          <p className="max-w-md text-xs text-slate-400 sm:text-sm">
            Prefere começar pelo diagnóstico estratégico? Veja o que sua operação pode automatizar antes de investir.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="rounded-[28px] border border-emerald-400/25 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_55%),linear-gradient(120deg,rgba(16,185,129,0.12),rgba(255,255,255,0.04),rgba(56,189,248,0.12))] p-6 shadow-[0_0_50px_rgba(16,185,129,0.12)] backdrop-blur">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-100">
                {content.offer.guaranteeTitle}
              </p>
              <p className="text-sm leading-relaxed text-slate-200">
                {hasGuaranteeHighlight ? (
                  <>
                    {guaranteeParts[0]}
                    <span className="font-semibold text-emerald-100">{guaranteeHighlight}</span>
                    {guaranteeParts.slice(1).join(guaranteeHighlight)}
                  </>
                ) : (
                  content.offer.guaranteeText
                )}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <CtaButton label={content.offer.cta} baseUrl={content.checkoutUrl} location="offer" />
          <p className="text-sm text-slate-400">{content.offer.seats}</p>
        </FadeIn>
      </div>
    </Section>
  );
}

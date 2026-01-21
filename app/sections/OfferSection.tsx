import { CtaButton } from "@/app/components/CtaButton";
import { FadeIn, Stagger, StaggerItem } from "@/app/components/Motion";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

export function OfferSection() {
  const priceLabel = content.offer.price.startsWith("Por:") ? "Por:" : "";
  const priceValue = content.offer.price.replace("Por:", "").trim();
  const [installmentsRaw, cashRaw] = priceValue.split("(ou");
  const installments = installmentsRaw.trim();
  const cash = cashRaw ? cashRaw.replace(")", "").trim() : "";

  return (
    <Section id="oferta">
      <div className="space-y-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">{content.offer.title}</h2>
        </FadeIn>

        <Stagger className="grid gap-6 lg:grid-cols-3">
          <StaggerItem className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-slate-600 line-through decoration-slate-600">{content.offer.anchor}</p>
            <div className="mt-4 space-y-2">
              {priceLabel ? <p className="text-xs text-slate-400">{priceLabel}</p> : null}
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">{installments}</p>
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

        <FadeIn>
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-cyan-300/10 via-white/5 to-blue-500/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold text-white">{content.offer.guaranteeTitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{content.offer.guaranteeText}</p>
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

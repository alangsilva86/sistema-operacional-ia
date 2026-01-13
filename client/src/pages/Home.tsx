import { useEffect, useState } from "react";

import { PrimaryCta } from "@/components/PrimaryCta";
import { TrustBar } from "@/components/TrustBar";
import { trackEvent, useScrollDepthTracking, useTrackView } from "@/lib/analytics";
import {
  CaseStudiesSection,
  DeliverablesSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  HowItWorksSection,
  IcpFilterSection,
  PricingSection,
  UrgencySection
} from "@/sections";

const BASE_CHECKOUT_URL = "https://pay.kiwify.com.br/eeAM4On";
const CTA_LABEL = "Quero garantir minha vaga";
const SEATS_LABEL = "6 vagas";

function buildCheckoutUrl(baseUrl: string) {
  if (typeof window === "undefined") return baseUrl;
  const url = new URL(baseUrl);
  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    if (!url.searchParams.has(key)) {
      url.searchParams.set(key, value);
    }
  });
  return url.toString();
}

export default function Home() {
  useTrackView("view_lp_sistema_operacional");
  useScrollDepthTracking();

  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    setCheckoutUrl(buildCheckoutUrl(BASE_CHECKOUT_URL));
  }, []);

  const handleCheckoutClick = (location: string) => {
    trackEvent("cta_click", { location });
    trackEvent("checkout_open", { location });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-body">
      <div className="sticky top-0 z-50">
        <div className="bg-[#0b0b0b] border-b border-white/5">
          <div className="container flex items-center justify-between py-2 text-xs uppercase tracking-[0.2em] text-[#8A8A8A]">
            <span>Turma presencial em Maringa</span>
            <span>{SEATS_LABEL}</span>
          </div>
        </div>
        <header className="border-b border-white/10 bg-[#050505]/80 backdrop-blur">
          <div className="container flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF4500] text-[#050505] font-black">
                IA
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Sistema Operacional</span>
                <span className="text-lg font-semibold">IA na Pratica</span>
              </div>
            </div>
            <div className="hidden sm:flex">
              <PrimaryCta
                href={checkoutUrl}
                label={CTA_LABEL}
                onClick={() => handleCheckoutClick("hero")}
                location="hero"
              />
            </div>
          </div>
        </header>
      </div>

      <main className="pb-24 sm:pb-0">
        <HeroSection
          ctaLabel={CTA_LABEL}
          checkoutUrl={checkoutUrl}
          onCtaClick={() => handleCheckoutClick("hero")}
          onVideoPlay={() => trackEvent("video_play", { location: "hero" })}
          seatsLabel={SEATS_LABEL}
        />
        <IcpFilterSection />
        <TrustBar />
        <CaseStudiesSection
          ctaLabel={CTA_LABEL}
          checkoutUrl={checkoutUrl}
          onCtaClick={() => handleCheckoutClick("hero")}
        />
        <DeliverablesSection />
        <HowItWorksSection />
        <UrgencySection />
        <PricingSection
          ctaLabel={CTA_LABEL}
          checkoutUrl={checkoutUrl}
          onCtaClick={() => handleCheckoutClick("pricing")}
        />
        <FaqSection />
        <FinalCtaSection
          ctaLabel={CTA_LABEL}
          checkoutUrl={checkoutUrl}
          onCtaClick={() => handleCheckoutClick("footer")}
          seatsLabel={SEATS_LABEL}
        />
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#050505]/85 backdrop-blur sm:hidden">
        <div className="container flex items-center gap-3 py-3">
          <div className="flex flex-col text-xs text-[#8A8A8A]">
            <span>Turma presencial</span>
            <span className="text-white">{SEATS_LABEL}</span>
          </div>
          <PrimaryCta
            href={checkoutUrl}
            label={CTA_LABEL}
            onClick={() => handleCheckoutClick("sticky")}
            location="sticky"
            fullWidth
            className="text-sm py-3"
          />
        </div>
      </div>

      <footer className="py-8 bg-[#050505] border-t border-white/10">
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-[#8A8A8A]">
          <span>Sistema Operacional – IA na Pratica • Momentum Aceleradora</span>
          <span>Atendimento humano para fechar vaga</span>
        </div>
      </footer>
    </div>
  );
}

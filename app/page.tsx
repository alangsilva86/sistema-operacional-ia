import { Header } from "@/app/components/Header";
import { ScrollDepthTracker } from "@/app/components/ScrollDepthTracker";
import { StickyCta } from "@/app/components/StickyCta";
import {
  AgendaSection,
  CaseStudiesSection,
  DeliverablesSection,
  FaqSection,
  FinalCtaSection,
  FooterSection,
  HeroSection,
  HowItWorksSection,
  IcpSection,
  LogosSection,
  PricingSection,
  UrgencySection
} from "@/app/sections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <ScrollDepthTracker />
      <Header />
      <main className="pb-24 sm:pb-0">
        <HeroSection />
        <IcpSection />
        <LogosSection />
        <CaseStudiesSection />
        <DeliverablesSection />
        <HowItWorksSection />
        <AgendaSection />
        <UrgencySection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
      <StickyCta />
    </div>
  );
}

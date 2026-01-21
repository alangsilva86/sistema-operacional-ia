import { Header } from "@/app/components/Header";
import { ScrollDepthTracker } from "@/app/components/ScrollDepthTracker";
import { StickyCta } from "@/app/components/StickyCta";
import {
  FaqSection,
  HeroSection,
  JourneySection,
  LogoWallSection,
  OfferSection,
  PainSection,
  ProofSection,
  SolutionSection
} from "@/app/sections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#06070d] text-white">
      <ScrollDepthTracker />
      <Header />
      <main className="relative isolate overflow-hidden pb-24 sm:pb-0">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_45%),radial-gradient(circle_at_70%_20%,rgba(94,234,212,0.12),transparent_40%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_65%)] blur-3xl" />
        <HeroSection />
        <LogoWallSection />
        <PainSection />
        <SolutionSection />
        <ProofSection />
        <JourneySection />
        <OfferSection />
        <FaqSection />
      </main>
      <StickyCta />
    </div>
  );
}

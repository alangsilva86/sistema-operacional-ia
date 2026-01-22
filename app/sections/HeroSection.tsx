import { ArrowRight } from "lucide-react";

import { CtaButton } from "@/app/components/CtaButton";
import { FadeIn, Stagger, StaggerItem } from "@/app/components/Motion";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

const subtitleHighlight = "Sem precisar programar uma linha de código.";
const supportingLines = content.hero.supporting
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

export function HeroSection() {
  const subtitleParts = content.hero.subtitle.split(subtitleHighlight);
  const subtitleHasHighlight = content.hero.subtitle.includes(subtitleHighlight);
  const subtitleIntro = subtitleParts[0] ?? "";
  const subtitleOutro = subtitleParts.slice(1).join(subtitleHighlight);

  return (
    <Section id="hero" className="pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
          <div className="pointer-events-none absolute -left-12 top-6 h-64 w-64 rounded-full bg-blue-500 opacity-20 blur-[120px]" />
          <Stagger className="relative z-10 space-y-8">
            <StaggerItem>
              <span className="glow-pulse inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 shadow-[0_0_25px_rgba(16,185,129,0.18)] backdrop-blur">
                {content.hero.badge}
              </span>
            </StaggerItem>
            <StaggerItem className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-transparent md:text-6xl md:leading-[1.05] bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text">
                {content.hero.title}
              </h1>
              <p className="max-w-xl whitespace-pre-line text-base leading-relaxed text-slate-300 md:text-lg">
                {subtitleHasHighlight ? (
                  <>
                    {subtitleIntro}
                    <span className="font-semibold italic text-slate-200">{subtitleHighlight}</span>
                    {subtitleOutro}
                  </>
                ) : (
                  content.hero.subtitle
                )}
              </p>
            </StaggerItem>
            <StaggerItem className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaButton label={content.hero.primaryCta} baseUrl={content.checkoutUrl} location="hero" />
              <a
                href="#prova"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-white/30 hover:text-white"
              >
                {content.hero.secondaryCta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-3">
                {supportingLines.map((line) => {
                  const isGuarantee = line.toLowerCase().includes("risco zero");

                  return (
                    <div
                      key={line}
                      className={`rounded-2xl border px-4 py-3 text-sm backdrop-blur ${
                        isGuarantee
                          ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100 shadow-[0_0_35px_rgba(16,185,129,0.2)]"
                          : "border-white/10 bg-white/5 text-slate-200"
                      }`}
                    >
                      <span className="leading-relaxed">{line}</span>
                    </div>
                  );
                })}
              </div>
            </StaggerItem>
          </Stagger>
        </div>

        <FadeIn className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(94,234,212,0.18),transparent_50%)] blur-2xl" />
          <div className="relative space-y-4 rounded-[28px] border border-white/10 bg-white/10 p-4 backdrop-blur">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                <span className="h-2 w-6 rounded-full bg-white/30" />
                <span className="h-2 w-10 rounded-full bg-white/15" />
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="h-full w-full object-cover"
              >
                <source src="/video-alan-ia.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

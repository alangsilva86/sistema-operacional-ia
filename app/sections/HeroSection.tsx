import { Check } from "lucide-react";

import { CtaButton } from "@/app/components/CtaButton";
import { HeroVideo } from "@/app/components/HeroVideo";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

export function HeroSection() {
  return (
    <Section id="hero" className="pt-12">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-[#222] bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#8A8A8A]">
            {content.header.left} - {content.header.badge}
          </div>
          <div className="space-y-3">
            <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl">
              {content.hero.title}
            </h1>
            <p className="text-lg text-[#BDBDBD]">{content.hero.subtitle}</p>
          </div>
          <ul className="space-y-3 text-sm text-[#BDBDBD]">
            {content.hero.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-[#FF4500]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaButton label={content.ctaLabel} baseUrl={content.checkoutUrl} location="hero" />
            <p className="text-xs text-[#8A8A8A]">{content.hero.ctaMicrocopy}</p>
          </div>
          <a
            href="#video"
            className="text-sm text-[#BDBDBD] underline decoration-[#FF4500]/60 underline-offset-4 hover:text-white"
          >
            {content.hero.secondaryLink}
          </a>
        </div>

        <div id="video">
          <HeroVideo
            src={content.hero.video.src}
            poster={content.hero.video.poster}
            caption={content.hero.video.caption}
          />
        </div>
      </div>
    </Section>
  );
}

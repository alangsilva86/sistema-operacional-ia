import { FadeIn } from "@/app/components/Motion";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

const logos = [...content.logos.items, ...content.logos.items];

export function LogoWallSection() {
  return (
    <Section id="logos" className="py-12">
      <div className="space-y-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{content.logos.title}</p>
          {content.logos.intro ? (
            <p className="mt-2 text-center text-sm text-gray-400">{content.logos.intro}</p>
          ) : null}
        </FadeIn>
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 px-6 py-6 backdrop-blur">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#06070d]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#06070d]/80 to-transparent" />
          <div className="logo-ticker flex w-max items-center gap-10">
            {logos.map((logo, index) => (
              <img
                key={`${logo.name}-${index}`}
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

import { MapPin } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/app/components/Motion";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

const badgeStyles: Record<string, string> = {
  blue: "border-blue-400/30 bg-blue-500/15 text-blue-200",
  purple: "border-purple-400/30 bg-purple-500/15 text-purple-200",
  green: "border-emerald-400/30 bg-emerald-500/15 text-emerald-200",
  orange: "border-amber-400/30 bg-amber-500/15 text-amber-200"
};

export function JourneySection() {
  return (
    <Section id="jornada">
      <div className="space-y-10">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">{content.journey.title}</h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4" />
            <span>{content.journey.location}</span>
          </div>
        </FadeIn>

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.journey.items.map((item, index) => (
            <StaggerItem
              key={`${item.theme}-${item.date}`}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Encontro {index + 1}
                </span>
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                    badgeStyles[item.badgeTone] ?? badgeStyles.blue
                  }`}
                >
                  {item.date}
                </span>
              </div>
              <p className="mt-4 text-lg font-semibold text-white">{item.theme}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

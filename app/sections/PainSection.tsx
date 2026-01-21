import { Clock, Database, MessageSquareWarning, UserX } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/app/components/Motion";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

const icons = [UserX, Database, Clock, MessageSquareWarning];
const iconStyles = ["text-orange-400", "text-sky-300", "text-amber-300", "text-red-400"];
const layout = ["md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-4"];

export function PainSection() {
  return (
    <Section id="dor">
      <div className="space-y-10">
        <FadeIn className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">{content.pain.title}</h2>
        </FadeIn>

        <Stagger className="grid gap-6 md:grid-cols-6">
          {content.pain.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem
                key={card.title}
                className={`group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 ${
                  layout[index]
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center rounded-lg border border-white/5 bg-white/5 p-2">
                    <Icon className={`h-5 w-5 ${iconStyles[index] ?? "text-slate-200"}`} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white">{card.title}</p>
                    <p className="text-sm leading-relaxed text-slate-400">{card.description}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn>
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-cyan-300/10 via-white/5 to-blue-500/10 p-6 text-center text-base text-slate-200 backdrop-blur">
            {content.pain.transition}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

import { FadeIn, Stagger, StaggerItem } from "@/app/components/Motion";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

export function JourneySection() {
  return (
    <Section id="jornada">
      <div className="space-y-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">{content.journey.title}</h2>
        </FadeIn>

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.journey.items.map((item) => (
            <StaggerItem
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-base font-semibold text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

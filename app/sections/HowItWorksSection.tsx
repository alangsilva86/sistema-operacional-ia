import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

export function HowItWorksSection() {
  return (
    <Section id="como-funciona">
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Como funciona</p>
          <h2 className="font-heading text-3xl text-white md:text-4xl">{content.howItWorks.title}</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {content.howItWorks.cards.map((card) => (
            <div key={card.label} className="rounded-[20px] border border-[#222] bg-[#0b0b0b] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A8A8A]">{card.label}</p>
              <p className="mt-2 text-sm text-white">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

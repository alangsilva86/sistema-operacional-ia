import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

export function UrgencySection() {
  return (
    <Section id="urgencia">
      <div className="rounded-[20px] border border-[#222] bg-[#0b0b0b] p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Contexto de mercado</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{content.urgency.title}</h3>
        <p className="mt-3 text-sm text-[#BDBDBD]">{content.urgency.text}</p>
      </div>
    </Section>
  );
}

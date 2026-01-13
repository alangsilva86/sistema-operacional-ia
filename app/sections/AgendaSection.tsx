import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

export function AgendaSection() {
  return (
    <Section id="agenda">
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Agenda</p>
          <h2 className="font-heading text-3xl text-white md:text-4xl">{content.agenda.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {content.agenda.items.map((item, index) => (
            <div key={item.title} className="rounded-[20px] border border-[#222] bg-[#0b0b0b] p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A8A8A]">Encontro {index + 1}</p>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <ul className="space-y-2 text-sm text-[#BDBDBD]">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/40" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

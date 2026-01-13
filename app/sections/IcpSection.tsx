import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

export function IcpSection() {
  return (
    <Section id="icp">
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Filtro de perfil</p>
          <h2 className="font-heading text-3xl text-white md:text-4xl">{content.icp.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[20px] border border-[#222] bg-[#0b0b0b] p-6 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8A8A8A]">Para voce</p>
            <ul className="space-y-3 text-sm text-[#BDBDBD]">
              {content.icp.yes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#FF4500]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[20px] border border-[#222] bg-[#0b0b0b] p-6 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8A8A8A]">Nao e para voce</p>
            <ul className="space-y-3 text-sm text-[#BDBDBD]">
              {content.icp.no.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

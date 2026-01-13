import { LayoutDashboard, MessageCircle, RotateCcw } from "lucide-react";

import { Section } from "@/app/components/Section";
import { content } from "@/app/content";

const icons = [
  <MessageCircle key="triage" className="h-5 w-5 text-[#FF4500]" />,
  <RotateCcw key="reactivation" className="h-5 w-5 text-[#FF4500]" />,
  <LayoutDashboard key="dashboard" className="h-5 w-5 text-[#FF4500]" />
];

export function DeliverablesSection() {
  return (
    <Section id="entregaveis">
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Entregaveis</p>
          <h2 className="font-heading text-3xl text-white md:text-4xl">{content.deliverables.title}</h2>
          <p className="text-[#BDBDBD]">{content.deliverables.subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {content.deliverables.items.map((item, index) => (
            <div key={item.title} className="rounded-[20px] border border-[#222] bg-[#0b0b0b] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#222] bg-black/40">
                  {icons[index]}
                </div>
                <p className="text-lg font-semibold text-white">{item.title}</p>
              </div>
              <div className="space-y-2 text-sm text-[#BDBDBD]">
                <p className="text-xs uppercase tracking-[0.18em] text-[#8A8A8A]">Sai pronto com</p>
                <ul className="space-y-2">
                  {item.outputs.map((output) => (
                    <li key={output} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#FF4500]" />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs uppercase tracking-[0.18em] text-[#8A8A8A]">Tempo para rodar</p>
                <p>{item.timing}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-[#8A8A8A]">Onde roda</p>
                <p>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

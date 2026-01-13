import { Section } from "@/sections/Section";

const icpYes = [
  "Socios e gestores operacionais de PMEs",
  "Quer autonomia e rotina rodando sem apagar incendio",
  "Tem processos repetitivos e equipe para aplicar",
  "Busca sistema, nao apenas ferramentas"
];

const icpNo = [
  "Curiosos por hacks rapidos",
  "Quem quer milagre sem processo",
  "Nao quer medir dados ou seguir rotina",
  "Nao tem disponibilidade para aplicar"
];

export function IcpFilterSection() {
  return (
    <Section id="icp">
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Filtro de perfil</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white">Para quem e / Para quem nao e</h2>
          <p className="text-[#BDBDBD]">Se voce se encaixa aqui, seguimos. Se nao, melhor evitar perda de tempo.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#222] bg-[#0b0b0b] p-6 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8A8A8A]">Para quem e</p>
            <ul className="space-y-3 text-sm text-[#BDBDBD]">
              {icpYes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#FF4500]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#222] bg-[#0b0b0b] p-6 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8A8A8A]">Para quem nao e</p>
            <ul className="space-y-3 text-sm text-[#BDBDBD]">
              {icpNo.map((item) => (
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

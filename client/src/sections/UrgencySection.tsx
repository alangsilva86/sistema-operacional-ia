import { Section } from "@/sections/Section";

export function UrgencySection() {
  return (
    <Section id="urgencia">
      <div className="rounded-2xl border border-[#222] bg-[#0b0b0b] p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">Contexto de mercado</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">CAC tende a subir em 2026. Eficiencia virou defesa de margem.</h3>
        <p className="mt-3 text-sm text-[#BDBDBD]">
          Midia mais cara e operacoes complexas pressionam custo. Quem instala rotina e automacao tende a proteger margem mais cedo.
        </p>
      </div>
    </Section>
  );
}

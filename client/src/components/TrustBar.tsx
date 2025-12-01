import { Building2 } from "lucide-react";

const logos = [
  { name: "Fatorcard", src: "/fatorcard.png" },
  { name: "Acessus", src: "/acessus.png" },
  { name: "Próspera", src: "/prospera.png" },
  { name: "Opta", src: "/opta.png" },
  { name: "Flycost", src: "/flycost.png" },
  { name: "Dafnee", src: "/dafnee.png" },
  { name: "Momentum", src: "/momentum.png" }
];

export function TrustBar() {
  return (
    <section className="border-t border-white/5 bg-[#050b14]">
      <div className="container py-10 flex flex-col gap-6">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
          <Building2 size={14} />
          Aplico e crio soluções diariamente nas seguintes empresas:
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 place-items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center h-14 w-full">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

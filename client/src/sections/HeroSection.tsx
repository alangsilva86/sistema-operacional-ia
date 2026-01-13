import { motion } from "framer-motion";
import { Check, Play } from "lucide-react";

import { PrimaryCta } from "@/components/PrimaryCta";
import { Section } from "@/sections/Section";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
};

const heroBullets = [
  "Para socios e gestores operacionais de PMEs",
  "4 encontros (3 presenciais + 1 sessao online)",
  "3 entregaveis instalados: triagem, reativacao e dashboard"
];

interface HeroSectionProps {
  ctaLabel: string;
  checkoutUrl: string;
  onCtaClick: () => void;
  onVideoPlay: () => void;
  seatsLabel: string;
}

export function HeroSection({ ctaLabel, checkoutUrl, onCtaClick, onVideoPlay, seatsLabel }: HeroSectionProps) {
  return (
    <Section id="hero" className="pt-12 md:pt-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#BDBDBD]">
            Turma presencial em Maringa • {seatsLabel}
          </div>
          <div className="space-y-3">
            <h1 className="font-heading text-4xl md:text-5xl leading-tight text-white">
              Instale um Sistema Operacional com IA para sua PME operar sem depender de pessoas-chave.
            </h1>
            <p className="text-lg text-[#BDBDBD] leading-relaxed">
              Imersao pratica para socios e gestores que precisam de autonomia, previsibilidade e rotina rodando com IA.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-[#BDBDBD]">
            {heroBullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-[#FF4500]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <PrimaryCta href={checkoutUrl} label={ctaLabel} onClick={onCtaClick} location="hero" />
            <p className="text-xs text-[#8A8A8A] max-w-xs">
              Risco zero: 100% de reembolso ate o 2o encontro se nao fizer sentido para sua operacao.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="relative rounded-[24px] overflow-hidden border border-[#222] bg-[#0b0b0b] shadow-[0_25px_70px_rgba(0,0,0,0.5)]"
        >
          <div className="relative aspect-[16/9] w-full">
            <video
              className="h-full w-full object-cover"
              poster="/alanh.jpeg"
              controls
              preload="metadata"
              playsInline
              onPlay={onVideoPlay}
            >
              <source src="/video-alan-ia.mp4" type="video/mp4" />
              Seu navegador nao suporta a reproducao de videos.
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white">
              <Play size={12} />
              Assista antes de aplicar
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

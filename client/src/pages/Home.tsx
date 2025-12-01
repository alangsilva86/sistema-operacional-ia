import { useState } from "react";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrustBar } from "@/components/TrustBar";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Check,
  CheckCircle2,
  Clock,
  Cog,
  Cpu,
  Droplets,
  Dumbbell,
  Flame,
  HelpCircle,
  Lightbulb,
  MessageCircle,
  PhoneCall,
  Play,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench
} from "lucide-react";

import { trackEvent, useTrackView } from "@/lib/analytics";

const credibilidade = [
  "3 encontros presenciais",
  "Método aplicado em Próspera, Fatorcard, FlyCost, Opta",
  "Garantia incondicional até o 2º encontro"
];

const heroSteps = [
  { label: "Diagnóstico guiado", icon: <Lightbulb size={16} /> },
  { label: "Mapa + IA plugada", icon: <PlugZap size={16} /> },
  { label: "Ferramenta rodando", icon: <Cog size={16} /> }
];

const dores = [
  { title: "Dependência de pessoas", desc: "“Se o João faltar, o setor para.”", icon: <Users className="w-5 h-5" /> },
  { title: "Lucro evaporando", desc: "“Faturamos bem, mas o dinheiro nunca sobra.”", icon: <Droplets className="w-5 h-5" /> },
  { title: "Tech que não resolve", desc: "“ChatGPT dá texto bonito, não opera.”", icon: <Cpu className="w-5 h-5" /> }
];

const pilares = [
  {
    title: "O Cérebro",
    desc: "Base de conhecimento viva",
    bullets: ["Centralização do que sua equipe sabe", "Prompts da sua operação", "IA treinada na sua realidade"]
  },
  {
    title: "O Músculo",
    desc: "Processos repetitivos mapeados",
    bullets: ["Fluxos visíveis, sem depender da memória", "Checklists acionáveis", "Integrações com ferramentas diárias"]
  },
  {
    title: "O Sistema",
    desc: "IA aplicada para escalar",
    bullets: ["Automação amarrada a resultado", "Gatilhos e entregas claras", "Monitoramento simples"]
  }
];

const entregaveis = {
  imediato: ["1 ferramenta funcional no ar", "Retrabalho cortado na primeira semana"],
  estrutural: ["Base de conhecimento consultável pela equipe e pela IA", "Blueprint para qualquer problema recorrente"],
  operacional: ["Método replicável sem terceiros", "Plano de treinamento da equipe + rotinas de uso"]
};

const demos = [
  { title: "WhatsApp respondendo sozinho", desc: "Lead filtrado e respondido pela IA em segundos.", img: "/alan.jpeg" },
  { title: "Fluxo rodando", desc: "Blueprint visual com etapas e gatilhos conectados.", img: "/alan2.jpeg" },
  { title: "Automação funcionando", desc: "Entrada → IA → saída entregue em múltiplos canais.", img: "/alan.jpeg" }
];

const socialProof = [
  { name: "Acessus", stat: "3x+", desc: "Conversão filtrando leads com IA" },
  { name: "Fatorcard", stat: "24/7", desc: "URA cognitiva + simuladores" },
  { name: "Opta", stat: "2x", desc: "Automação e URA cognitiva" },
  { name: "Flycost", stat: "30%", desc: "Otimização de economia na aviação" }
];

const cronograma = [
  {
    titulo: "Pensar como engenheiro de soluções",
    data: "13/12 – 10h00 • Atrium – Escritório Próspera | Fatorcard",
    bullets: ["Problema quebrado em etapas simples", "Base de Conhecimento pronta para treinar a IA", "Blueprint da 1ª ferramenta"],
    saida: "Problema principal mapeado + desenho da ferramenta.",
    icon: <Lightbulb className="w-5 h-5" />
  },
  {
    titulo: "Construção rápida: ferramenta 1.0",
    data: "18/12 – 10h00 • Atrium – Escritório Momentum | Acessus",
    bullets: ["Ferramentas no-code escolhidas", "IA plugada como cérebro", "Versão 1.0 pronta e testada"],
    saida: "Ferramenta 1.0 rodando e usável.",
    icon: <Wrench className="w-5 h-5" />
  },
  {
    titulo: "Automação e integração com a realidade",
    data: "20/12 – 18h30 • Atrium – Escritório Próspera | Fatorcard",
    bullets: ["WhatsApp, e-mail, planilhas conectados", "Gatilhos e rotas configurados", "Segunda solução ou evolução da primeira"],
    saida: "Solução ligada à rotina real com automação mínima.",
    icon: <PlugZap className="w-5 h-5" />
  },
  {
    titulo: "Sessão extra — mentoria individual",
    data: "Agendada após os encontros • Online",
    bullets: ["Ajustes finos e expansão", "Plano de treinamento interno", "Checklist para seguir sozinho"],
    saida: "Plano personalizado de expansão segura.",
    icon: <Sparkles className="w-5 h-5" />
  }
];

const comparativo = {
  sem: [
    "Funcionário extra: R$ 36.000/ano",
    "Perda de leads: ≥ R$ 5.000/mês",
    "Consultorias: R$ 10.000 + mensalidade"
  ],
  com: ["Automação permanente", "Cobertura 24h", "Autonomia total"]
};

const faqs = [
  { q: "Preciso saber programar?", a: "Não. Você só precisa saber explicar como seu processo funciona. A tecnologia faz o resto." },
  { q: "Serve para meu nicho?", a: "Se você tem clientes, rotinas repetitivas e WhatsApp, funciona." },
  { q: "Posso levar meu sócio?", a: "Sim, condições especiais no WhatsApp." },
  { q: "Posso parcelar?", a: "Sim, em até 12x." }
];

const checkoutUrl = "https://pay.kiwify.com.br/eeAM4On";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }
  }
};

function Section({
  id,
  children,
  className = ""
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-[#050507] via-[#0a0c14] to-[#050507] ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_15%,rgba(255,92,57,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(245,196,81,0.08),transparent_28%)]" />
      <div className="container relative py-24 md:py-32">{children}</div>
    </section>
  );
}

function CTAButton({
  id,
  label,
  onClick,
  variant = "primary"
}: {
  id: string;
  label: string;
  onClick: () => void;
  variant?: "primary" | "ghost";
}) {
  const base = "rounded-full px-7 py-4 text-base font-semibold transition-all flex items-center gap-2";
  if (variant === "primary") {
    return (
      <Button
        id={id}
        data-analytics={`click-cta-${id}`}
        className={`${base} bg-[#ff5c39] text-[#0b0909] hover:bg-[#ff754f] shadow-[0_10px_35px_rgba(255,92,57,0.35)]`}
        onClick={onClick}
      >
        {label}
        <ArrowUpRight size={18} />
      </Button>
    );
  }
  return (
    <Button
      id={id}
      data-analytics={`click-cta-${id}`}
      variant="outline"
      className={`${base} border border-white/30 text-white hover:bg-white/10`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

function GuaranteeRibbon() {
  return (
    <div className="w-full flex justify-start">
      <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#ff5c39]/30 bg-[#ff5c39]/10 px-4 py-3 backdrop-blur-sm max-w-2xl">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff5c39]/20 text-[#ff5c39] shadow-[0_0_18px_rgba(255,92,57,0.35)]">
          <ShieldCheck size={20} strokeWidth={2.4} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ffb99f]">Protocolo Risco Zero</span>
          <p className="text-xs sm:text-sm text-gray-100 leading-snug">
            Participe até o <span className="font-semibold text-white">2º encontro</span>. Se não sentir valor real e imediato,{" "}
            <span className="font-semibold text-emerald-300">devolvo 100% do investimento</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useTrackView("view_lp_workshop");

  const [selectedPlan, setSelectedPlan] = useState<"parcelado" | "avista">("parcelado");

  const handleCta = (id: string, target = "#cta-final") => {
    trackEvent(`click_cta_${id}`);
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const selectPlan = (plan: "parcelado" | "avista") => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-foreground font-body">
      <div className="sticky top-0 z-50 shadow-lg">
        <div className="bg-gradient-to-r from-[#9f1d16] via-[#ff5c39] to-[#d28a1f] text-white text-sm font-semibold">
          <div className="container flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-300 animate-pulse" aria-hidden />
              ⚠️ Turma Presencial em Maringá • Restam 6 vagas
            </div>
            <span className="hidden sm:inline text-xs uppercase tracking-[0.16em]">Decida rápido — alta demanda</span>
          </div>
        </div>

        <header className="backdrop-blur bg-[#050507]/85 border-b border-white/10">
          <div className="container flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#ff5c39] to-[#f5c451] flex items-center justify-center text-[#0b0909] font-black shadow-[0_10px_35px_rgba(255,92,57,0.35)]">
                IA
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs uppercase tracking-[0.24em] text-gray-400">Sistema Operacional</span>
                <span className="text-lg font-semibold">IA na Prática</span>
              </div>
            </div>
            <CTAButton id="cta-header" label="QUERO GARANTIR MINHA VAGA" onClick={() => handleCta("header")} />
          </div>
        </header>
      </div>

      <main>
        <Section id="hero" className="pt-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-5 order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5c39]/15 border border-[#ff5c39]/40 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white">
                <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" aria-hidden />
                Turma presencial Maringá | Apenas 6 vagas restantes
              </div>
              <div className="space-y-3">
                <h1 className="font-heading text-4xl md:text-5xl leading-tight text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
                  APRENDA E CRIE SOLUÇÕES DE VERDADE <span className="text-[#ff754f]">COM I.A.</span>
                </h1>
                <h2 className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Se sua empresa dobrar de tamanho amanhã... ela lucra ou ela quebra?
                </h2>
              </div>

              <div className="hidden lg:flex flex-col gap-4">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent("click_cta_checkout_hero")}
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-all bg-[#ff5c39] text-[#0b0909] hover:bg-[#ff754f] shadow-[0_20px_50px_rgba(255,92,57,0.4)]"
                >
                  GARANTIR UMA DAS 6 VAGAS
                  <ArrowUpRight size={18} className="ml-2" />
                </a>
                <p className="text-sm text-[#f5c451] font-semibold">🔒 Risco Zero: Devolução de 100% até o 2º encontro.</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#f5c451]" />
                    <span>Pare de ser o <span className="font-semibold text-white">Bombeiro de Luxo</span> da operação.</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#f5c451]" />
                    <span>Crie ferramentas reais, não teoria.</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#f5c451]" />
                    <span>3 encontros presenciais de imersão e prática.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1 }}
              className="relative order-2 lg:order-2 rounded-[28px] overflow-hidden border border-white/10 bg-[#0f121d] shadow-[0_25px_70px_rgba(0,0,0,0.5)] w-full"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,92,57,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(245,196,81,0.15),transparent_40%)]" />
              <div className="relative aspect-[16/9] w-full">
                <img src="/alanh.jpeg" alt="Alan Silva" className="w-full h-full object-cover opacity-95" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-[#ff5c39] text-[#0b0909] flex items-center justify-center shadow-[0_20px_55px_rgba(255,92,57,0.45)]">
                    <Play size={28} />
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] border border-white/10">
                  Assista antes de aplicar
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:hidden space-y-4 mt-6">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("click_cta_checkout_hero_mobile")}
              className="inline-flex items-center justify-center rounded-full w-full px-8 py-4 text-base font-semibold transition-all bg-[#ff5c39] text-[#0b0909] hover:bg-[#ff754f] shadow-[0_20px_50px_rgba(255,92,57,0.4)]"
            >
              GARANTIR UMA DAS 6 VAGAS
              <ArrowUpRight size={18} className="ml-2" />
            </a>
            <p className="text-sm text-[#f5c451] font-semibold">🔒 Risco Zero: Devolução de 100% até o 2º encontro.</p>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200">
                <Check className="w-4 h-4 text-[#f5c451]" />
                <span>Pare de ser o <span className="font-semibold text-white">Bombeiro de Luxo</span> da operação.</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200">
                <Check className="w-4 h-4 text-[#f5c451]" />
                <span>Crie ferramentas reais, não teoria.</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200">
                <Check className="w-4 h-4 text-[#f5c451]" />
                <span>3 encontros presenciais de imersão e prática.</span>
              </div>
            </div>
      </div>
    </Section>

    <TrustBar />

    <Section id="identificacao">
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.24em] text-gray-400">Espelhamento da ruminação</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white">O ciclo que prende empresários no operacional</h2>
              <p className="text-gray-300">Se isso aqui parece que foi escrito sobre você, não é coincidência.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {dores.map((dor) => (
                <Card key={dor.title} className="bg-[#0d0f16]/80 border border-white/10 backdrop-blur shadow-[0_25px_65px_rgba(0,0,0,0.4)]">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#f5c451]">
                        {dor.icon}
                      </div>
                      <p className="text-lg font-semibold text-white">{dor.title}</p>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{dor.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200 italic">
              Se você disse “sim” para pelo menos uma… o problema não é você. O problema é que{" "}
              <span className="font-semibold text-white">sua empresa não tem um Sistema Operacional.</span>
            </blockquote>
          </motion.div>
        </Section>

        <Section id="o-que-leva">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-heading text-3xl md:text-4xl text-white">
                O que vamos juntos “instalar” na sua empresa em 3 encontros
              </h2>
              <p className="text-gray-300">Não é curso. É construção do seu sistema.</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d0f16] p-6 md:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
              <p className="text-sm uppercase tracking-[0.18em] text-gray-400 mb-4">Método PPS em fluxo</p>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 lg:gap-6">
                {[
                  { title: "Cérebro", icon: <Brain className="w-10 h-10 text-[#f5c451]" />, desc: "Base de conhecimento" },
                  { title: "Músculo", icon: <Dumbbell className="w-10 h-10 text-[#f5c451]" />, desc: "Processos repetitivos" },
                  { title: "Sistema", icon: <Cog className="w-10 h-10 text-[#f5c451]" />, desc: "IA aplicada e integrada" }
                ].map((item, idx, arr) => (
                  <div key={item.title} className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
                    <Card className="flex-1 bg-[#0f121d] border border-white/10 backdrop-blur">
                      <CardContent className="p-4 space-y-1">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-white">{item.title}</p>
                            <p className="text-xs uppercase tracking-[0.16em] text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    {idx < arr.length - 1 && (
                      <>
                        <div className="hidden sm:flex items-center justify-center w-10">
                          <ArrowRight className="text-[#ff5c39]" />
                        </div>
                        <div className="sm:hidden flex items-center justify-center w-full">
                          <ArrowRight className="text-[#ff5c39] rotate-90" />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {pilares.map((pilar) => (
                  <div key={pilar.title} className="space-y-3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#f5c451]">
                      <Sparkles size={14} />
                      Pilar
                    </div>
                    <p className="text-lg font-semibold text-white">{pilar.title}</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {pilar.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#ff5c39] mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <h3 className="font-heading text-2xl text-white">O que você leva no fim da imersão</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Imediato", items: entregaveis.imediato },
                  { title: "Estrutural", items: entregaveis.estrutural },
                  { title: "Operacional", items: entregaveis.operacional }
                ].map((block) => (
                  <Card key={block.title} className="bg-[#0f121d] border border-white/10 backdrop-blur">
                    <CardContent className="p-4 space-y-2">
                      <p className="text-sm uppercase tracking-[0.18em] text-[#f5c451]">{block.title}</p>
                      <ul className="space-y-2 text-sm text-gray-200">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#ff5c39] mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-gray-300">Processo para colocar solução de pé, não teoria.</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0a0d18] p-8 md:p-10 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Demonstração visual</p>
                  <h4 className="font-heading text-2xl text-white">Veja em 5–7 segundos o que já está rodando</h4>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5c39] text-[#0b0909] px-4 py-2 text-xs font-bold shadow-[0_10px_32px_rgba(255,92,57,0.35)]">
                  <Play size={14} />
                  Preview ao vivo
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {demos.map((demo) => (
                  <div
                    key={demo.title}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#111829,#0c1022)] p-5 shadow-[0_26px_60px_rgba(0,0,0,0.5)] min-h-[210px]"
                  >
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#ff5c39]/10 blur-3xl" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,196,81,0.12),transparent_40%)]" />
                    <div
                      className="absolute inset-0 opacity-40 blur-sm"
                      style={{ backgroundImage: `url(${demo.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                    <div className="relative flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-gray-400">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Fluxo real
                    </div>
                    <p className="relative mt-3 text-white font-semibold">{demo.title}</p>
                    <p className="relative mt-2 text-sm text-gray-300">{demo.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Section>

        <Section id="social-proof">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-10">
            <div className="space-y-2">
              <h2 className="font-heading text-3xl md:text-4xl text-white">Empresas que já usam meu Sistema na prática</h2>
              <p className="text-gray-300">Casos reais e números mensuráveis.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {socialProof.map((item) => (
                <Card key={item.name} className="bg-[#f5f5f5] text-[#0b0909] border border-transparent shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-[#0b0909] text-white text-sm font-bold flex items-center justify-center">
                          {item.name[0]}
                        </div>
                        <span className="text-sm uppercase tracking-[0.16em]">{item.name}</span>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-[#ff5c39]" />
                    </div>
                    <p className="text-4xl font-black leading-tight text-[#ff5c39]">{item.stat}</p>
                    <p className="text-sm text-[#1b1b1b]">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </Section>

        <Section id="cronograma">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-white">Como funcionam os 4 encontros</h2>
                <p className="text-gray-300">Encontros práticos, direto ao que gera entrega.</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 text-xs uppercase tracking-[0.18em] border border-white/10">
                Máximo 10 participantes
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" aria-hidden />
              <div className="space-y-8">
                {cronograma.map((item, idx) => (
                  <div key={item.titulo} className="relative pl-12">
                    <div className="absolute left-2 top-2 h-6 w-6 rounded-full bg-[#ff5c39] shadow-[0_10px_30px_rgba(255,92,57,0.4)] flex items-center justify-center text-[#0b0909] font-bold text-xs">
                      {idx + 1}
                    </div>
                    <Card className="bg-[#0d0f16] border border-white/10 backdrop-blur shadow-[0_28px_65px_rgba(0,0,0,0.45)]">
                      <CardContent className="p-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f5c451]">
                            {item.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-[0.18em] text-gray-400">Linha do tempo</span>
                            <p className="text-lg font-semibold text-white">{item.titulo}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">{item.data}</p>
                        <ul className="space-y-2 text-sm text-gray-200">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#ff5c39] mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-gray-200">
                          <span className="text-[#f5c451] font-semibold">Você sai com:</span> {item.saida}
                        </div>
                      </CardContent>
                    </Card>
                    {idx < cronograma.length - 1 && (
                      <div className="absolute left-[22px] -bottom-7 w-px h-7 bg-white/10" aria-hidden />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Section>

        <Section id="anti-custo">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl text-white">Quanto custa continuar no caos?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-[#120f0f] border border-red-900/40">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-white">
                    <p className="text-lg font-semibold">Sem Sistema</p>
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <ul className="space-y-2 text-sm text-red-100">
                    {comparativo.sem.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#0f1610] border border-emerald-700/30">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-white">
                    <p className="text-lg font-semibold">Com Sistema IA</p>
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <ul className="space-y-2 text-sm text-emerald-100">
                    {comparativo.com.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-300">
              Você não compra conhecimento. <span className="font-semibold text-white">Compra tempo, lucro e liberdade.</span>
            </p>
          </motion.div>
        </Section>

        <Section id="investimento">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-white">Investimento para a Turma 1 (Preço Especial)</h2>
                <p className="text-gray-300">Valores para quem decide agora.</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] border border-white/10">
                Bônus inclusos
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card
                role="button"
                tabIndex={0}
                onClick={() => selectPlan("parcelado")}
                onKeyDown={(e) => e.key === "Enter" && selectPlan("parcelado")}
                className={`cursor-pointer transition-all ${
                  selectedPlan === "parcelado"
                    ? "border-[#ff5c39] shadow-[0_20px_50px_rgba(255,92,57,0.25)] scale-[1.02]"
                    : "border-white/10"
                } bg-[#0d0f16]`}
              >
                <CardContent className="p-6 space-y-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Plano recomendado</p>
                  <p className="text-5xl font-black text-white leading-none">R$ 250</p>
                  <p className="text-sm text-gray-400">12x no cartão</p>
                </CardContent>
              </Card>

              <Card
                role="button"
                tabIndex={0}
                onClick={() => selectPlan("avista")}
                onKeyDown={(e) => e.key === "Enter" && selectPlan("avista")}
                className={`cursor-pointer transition-all ${
                  selectedPlan === "avista"
                    ? "border-[#ff5c39] shadow-[0_20px_50px_rgba(255,92,57,0.25)] scale-[1.02]"
                    : "border-white/10"
                } bg-[#0d0f16]`}
              >
                <CardContent className="p-6 space-y-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">À vista</p>
                  <p className="text-4xl font-black text-white leading-none">R$ 1.997</p>
                  <p className="text-sm text-gray-400">Transferência ou cartão</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0d0f16] border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Bônus inclusos</p>
                  <ul className="space-y-2 text-sm text-gray-200">
                    {["Biblioteca de prompts", "Mentoria individual pós-imersão", "Grupo exclusivo no WhatsApp"].map((bonus) => (
                      <li key={bonus} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#f5c451] mt-0.5" />
                        <span>{bonus}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("click_cta_checkout")}
              className="inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold transition-all bg-[#ff5c39] text-[#0b0909] hover:bg-[#ff754f] shadow-[0_18px_45px_rgba(255,92,57,0.35)] animate-pulse"
            >
              QUERO GARANTIR MINHA VAGA
              <ArrowUpRight size={18} className="ml-2" />
            </a>
          </motion.div>
        </Section>

        <Section id="garantia">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl text-white">Protocolo Risco Zero</h2>
            <Card className="bg-[#0d0f16] border border-white/10">
              <CardContent className="p-6 space-y-3">
                <p className="text-lg text-white font-semibold">Participe sem medo.</p>
                <p className="text-gray-200">
                  Participe dos dois primeiros encontros. Aplique a IA na sua empresa. Se não sentir valor real e imediato…
                  <span className="font-semibold text-white"> devolvo 100% do seu investimento.</span> Sem culpas, sem perguntas, sem
                  burocracia.
                </p>
                <GuaranteeRibbon />
              </CardContent>
            </Card>
          </motion.div>
        </Section>

        <Section id="faq">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6 max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl text-white">FAQ – Quebra de Objeções</h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5">
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold px-5 py-4 gap-3">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#f5c451]" />
                      {item.q}
                    </span>
                    <span className="text-[#ff5c39] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-sm text-gray-300">{item.a}</p>
                </details>
              ))}
            </div>
          </motion.div>
        </Section>

        <Section id="cta-final" className="border-b border-white/10">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6 text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Turma presencial • Alta intensidade</p>
            <h2 className="font-heading text-3xl md:text-4xl text-white">[ QUERO GARANTIR MINHA VAGA NA TURMA ]</h2>
            <p className="text-gray-300">
              Clique no botão abaixo e vá direto para o checkout. Você decide rápido, garante a vaga e só então preenche os dados.
            </p>
            <p className="text-sm text-[#f5c451] font-semibold">Risco zero até o 2º encontro. Se não sentir valor, devolvo 100%.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("click_cta_checkout_final")}
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-all bg-[#ff5c39] text-[#0b0909] hover:bg-[#ff754f] shadow-[0_20px_50px_rgba(255,92,57,0.4)] animate-[pulse_2s_ease-in-out_infinite]"
              >
                GARANTIR VAGA AGORA
                <ArrowUpRight size={18} className="ml-2" />
              </a>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white">
                Restam 4 vagas
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-gray-200">
                <Sparkles size={14} />
                Turma presencial em Maringá
              </div>
            </div>
          </motion.div>
        </Section>
      </main>

      <div
        id="whatsapp-flutuante"
        className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3 drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
      >
        <a
          href="https://wa.me/5544999999999?text=Quero%20saber%20se%20serve%20para%20minha%20empresa"
          target="_blank"
          rel="noreferrer"
          id="cta-whatsapp"
          data-analytics="click-cta-whatsapp"
          className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-xl hover:shadow-2xl transition-all"
          onClick={() => {
            trackEvent("checkout_start", { channel: "whatsapp" });
            trackEvent("click_cta_whatsapp");
          }}
        >
          <MessageCircle className="w-4 h-4" />
          Quero saber se serve para minha empresa
        </a>
      </div>

      <footer className="py-8 bg-[#050507] border-t border-white/10">
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-gray-500">
          <span>Sistema Operacional – IA na Prática • Momentum Aceleradora</span>
          <span className="flex items-center gap-2 text-gray-400">
            <PhoneCall size={12} />
            Atendimento humano para fechar vaga
          </span>
        </div>
      </footer>
    </div>
  );
}

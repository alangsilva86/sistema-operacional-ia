import { useMemo, useState } from "react";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";

import { trackEvent, useTrackView } from "@/lib/analytics";
import { AlanChatWidget } from "./home/components/AlanChatWidget";
import { InscricaoForm, type InscricaoFormData } from "./home/components/InscricaoForm";

const logos = [
  { name: "Acessus", src: "/acessus.png" },
  { name: "Dafnee", src: "/dafnee.png" },
  { name: "Flycost", src: "/flycost.png" },
  { name: "Momentum", src: "/momentum.png" },
  { name: "Opta", src: "/opta.png" },
  { name: "Paramettrus", src: "/paramettrus.png" },
  { name: "Próspera", src: "/prospera.png" }
];
const dores = [
  { title: "O Caos", desc: "Sua equipe depende de você e da sua cabeça para tudo. Nada fica registrado de forma inteligente." },
  { title: "A Ilusão", desc: "Você tenta usar IA, mas só gera textos genéricos que ninguém lê." },
  {
    title: "O Custo",
    desc: "Você responde as mesmas coisas todos os dias. Sua equipe trava e a margem de lucro é devorada pela ineficiência operacional."
  }
];
const pps = [
  { title: "Prompt", desc: "Engenharia real, não dicas prontas. Base de conhecimento centralizada e viva." },
  { title: "Processo", desc: "IA encaixada no fluxo de trabalho e nas rotinas diárias que já existem." },
  { title: "Sistema", desc: "Automação sem programar, integrada à IA, escalando com controle e padrão." }
];
const resultados = [
  "Redução de 40h/mês de retrabalho",
  "Velocidade 10x maior nas operações",
  "Padrão de atendimento replicável",
  "Equipe treinada automaticamente"
];
const checklistOferta = [
  "4 encontros presenciais intensivos",
  "Mapas de processo aplicáveis",
  "Base de conhecimento pronta para replicar",
  "Biblioteca de prompts para seu negócio",
  "Ferramentas instaladas",
  "Rotina diária estruturada",
  "Suporte e acompanhamento"
];
const paraQuem = [
  "Está sobrecarregado",
  "Quer eficiência real",
  "Quer IA integrada na rotina",
  "Lidera equipes pequenas ou médias"
];
const naoPara = ["Quer “prompt mágico”", "Acha que IA é modinha", "Não quer mudar processo nenhum"];
const faqs = [
  { q: "Preciso saber programar?", a: "Não. Você instala o sistema com ferramentas no-code e fluxos guiados." },
  { q: "Vai funcionar no meu negócio?", a: "Sim, desde que exista rotina e repetição. Ajustamos o método ao seu processo." },
  { q: "Quanto tempo exige por dia?", a: "Durante a turma, foco nos encontros. Depois, rotinas curtas e consistentes." },
  { q: "Posso levar alguém da equipe?", a: "Pode. Idealmente quem vai operar/implantar para ganhar velocidade." },
  { q: "E se eu já fiz cursos de IA e não funcionou?", a: "Aqui não é curso. É implantação orientada a processo e sistema." }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }
  }
};

function GuaranteeRibbon() {
  return (
    <div className="w-full flex justify-start">
      <div className="mt-4 flex items-center gap-4 rounded-lg border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-4 py-3 backdrop-blur-sm max-w-xl">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b35]/20 text-[#ff6b35] shadow-[0_0_18px_rgba(255,107,53,0.35)]">
          <ShieldCheck size={20} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ffb28f]">Protocolo de Risco Zero</span>
          <p className="text-xs sm:text-sm text-gray-100 leading-snug">
            Assista até o <span className="font-semibold text-white">2º encontro</span>. Se não fizer sentido para a sua realidade,
            <span className="font-semibold text-emerald-300"> devolvemos 100% do valor investido</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

function BonusMentoria() {
  return (
    <div className="w-full flex justify-start">
      <div className="mt-3 flex items-center gap-4 rounded-lg border border-emerald-400/25 bg-emerald-400/5 px-4 py-3 backdrop-blur-sm max-w-xl">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.45)]">
          🎧
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300/90">Bônus Exclusivo</span>
          <p className="text-xs sm:text-sm text-gray-100 leading-snug">
            Você recebe <span className="font-semibold text-white">1 hora de mentoria individual</span> após o curso para garantir sua
            implementação e tirar dúvidas estruturais.
          </p>
        </div>
      </div>
    </div>
  );
}

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
      className={`relative overflow-hidden py-16 md:py-24 border-b border-white/10 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f14] to-[#0a0a0a] ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,53,0.07),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(79,179,255,0.07),transparent_35%)]" />
      <div className="container relative">{children}</div>
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
  const base = "rounded-full px-8 py-4 text-base font-semibold transition-all";
  if (variant === "primary") {
    return (
      <Button
        id={id}
        data-analytics={`click-cta-${id}`}
        className={`${base} bg-[#ff6b35] text-black hover:bg-[#ff8a5a] shadow-[0_0_40px_rgba(255,107,53,0.25)]`}
        onClick={onClick}
      >
        {label}
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

export default function Home() {
  useTrackView("view_lp_workshop");

  const initialFormData = useMemo<InscricaoFormData>(
    () => ({
      nome: "",
      email: "",
      whatsapp: "",
      perfil: "",
      caos: "",
      plano: "parcelado"
    }),
    []
  );
  const [formData, setFormData] = useState<InscricaoFormData>(initialFormData);
  const [selectedPlan, setSelectedPlan] = useState<"parcelado" | "avista">("parcelado");

  const handleCta = (id: string, target = "#cta-final") => {
    trackEvent(`click_cta_${id}`);
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (data: InscricaoFormData) => {
    trackEvent("submit_form_lead", data);
    toast.success("Pronto. Você está na pré-lista. Vamos falar com você no WhatsApp para confirmar pagamento e vaga.");
    setFormData(initialFormData);
  };

  const selectPlan = (plan: "parcelado" | "avista") => {
    setSelectedPlan(plan);
    setFormData((prev) => ({ ...prev, plano: plan }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-body">
      <header className="sticky top-0 z-50 backdrop-blur bg-[#0a0a0a]/80 border-b border-white/10">
        <div className="container flex items-center justify-between py-3">
          <div className="flex flex-col gap-1">
            <div className="text-sm font-semibold tracking-[0.18em] uppercase">Sistema Operacional | IA na Prática</div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-300 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-[#ff6b35] animate-pulse" />
              Desenvolvido 100% com IA
            </span>
          </div>
          <CTAButton id="cta-header" label="Garantir minha vaga" onClick={() => handleCta("header")} />
        </div>
      </header>

      <Section id="hero" className="border-b border-white/10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
            <Badge className="w-fit bg-white/10 text-white border border-white/20 uppercase tracking-[0.2em]">
              Workshop Presencial Exclusivo
            </Badge>
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl leading-tight">
                A I.A. NÃO VAI SUBSTITUIR VOCÊ. QUEM USA I.A. COMO <span className="text-[#4fb3ff]">SISTEMA OPERACIONAL </span>
                VAI.
              </h1>
              <p className="text-lg text-gray-300">
                Transforme sua operação caótica em uma máquina de eficiência com o Método P→P→S. Pare de brincar de ChatGPT e
                construa um negócio que roda sem você.
              </p>
            </div>
            <div className="space-y-2">
              <CTAButton
                id="cta-hero"
                label="QUERO INSTALAR O SISTEMA OPERACIONAL"
                onClick={() => handleCta("hero", "#oferta")}
              />
              <p className="text-sm text-gray-400">Turma Presencial | Aplicação sujeita a aprovação.</p>
              <GuaranteeRibbon />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,53,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(79,179,255,0.2),transparent_45%)]" />
            <img src="/alan.jpeg" alt="Alan Silva" className="relative w-full h-full object-cover opacity-90" loading="lazy" />
            <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase border border-white/10">
              Do caos à criação
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-200 border border-white/15">
              <span className="h-2 w-2 rounded-full bg-[#ff6b35] animate-pulse" />
              Desenvolvido 100% com IA
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="border-b border-white/10">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-gray-400">Estratégia aplicada nas operações de:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {logos.map((logo) => (
              <div key={logo.name} className="rounded-xl px-3 py-2 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section id="problema">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">Você virou um Bombeiro de Luxo?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {dores.map((item) => (
              <Card
                key={item.title}
                className="bg-white/5 border border-white/10 backdrop-blur shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              >
                <CardContent className="p-6 space-y-3">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section id="metodo">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">Conheça o Método P→P→S:</h2>
          <p className="text-gray-300">Não é sobre ferramentas. É sobre arquitetura de negócios.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {pps.map((item, idx) => (
              <Card key={item.title} className="bg-white/5 border border-white/10 backdrop-blur">
                <CardContent className="p-6 space-y-2">
                  <div className="text-sm text-gray-400">Passo {idx + 1}</div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section id="resultados">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">Resultados reais</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resultados.map((res) => (
              <Card key={res} className="bg-white/5 border border-white/10 backdrop-blur">
                <CardContent className="p-4 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ff6b35] mt-1" />
                  <p className="text-sm text-gray-200">{res}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section id="especialista">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-5 lg:pr-6">
            <Badge className="w-fit bg-white/10 text-white border border-white/20 uppercase tracking-[0.18em]">
              Fundador Momentum
            </Badge>
            <div className="space-y-3">
              <h3 className="font-heading text-2xl md:text-3xl font-semibold">Especialista em sistemas operacionais de IA</h3>
              <p className="text-gray-300">
                Transformo operações caóticas em sistemas previsíveis. Implementação em campo, não em slides. Criador do método
                P→P→S aplicado em PMEs, corbans e times enxutos.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "20 anos empreendendo e liderando operação",
                "IA integrada em Próspera, Flycost, Fatorcard, Opta, Acessus",
                "Método P→P→S: pessoas, processos, sistemas",
                "ICP: PMEs, correspondentes bancários, times sobrecarregados"
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-200 bg-white/5 border border-white/10 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b35] mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <CTAButton id="cta-sobre" label="Quero aprender IA com quem aplica todo dia" onClick={() => handleCta("sobre")} />
          </div>

          <div className="relative max-w-md w-full lg:justify-self-end">
            <div className="absolute -inset-5 bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,53,0.1),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(79,179,255,0.12),transparent_35%)] blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <img src="/alan2.jpeg" alt="Alan Silva" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-semibold tracking-[0.12em] uppercase">Alan Silva</div>
              <div className="absolute top-3 right-3 rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] border border-white/20">
                P→P→S
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section id="oferta">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">O fim do caos operacional começa aqui.</h2>
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-start">
            <Card className="bg-white/5 border border-white/10 backdrop-blur">
              <CardContent className="p-6 space-y-3">
                <p className="text-sm uppercase tracking-[0.18em] text-gray-400">Checklist</p>
                <ul className="space-y-2">
                  {checklistOferta.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b35] mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <Card
                  role="button"
                  tabIndex={0}
                  onClick={() => selectPlan("parcelado")}
                  onKeyDown={(e) => e.key === "Enter" && selectPlan("parcelado")}
                  className={`border ${selectedPlan === "parcelado" ? "border-[#ff6b35]" : "border-white/10"} bg-white/5 backdrop-blur cursor-pointer transition-all`}
                >
                  <CardContent className="p-5 space-y-1">
                    <p className="text-sm text-gray-400 uppercase tracking-[0.18em]">Parcelado</p>
                    <p className="text-3xl font-bold">10x de R$ 250</p>
                    <p className="text-xs text-gray-400">no cartão</p>
                  </CardContent>
                </Card>
                <Card
                  role="button"
                  tabIndex={0}
                  onClick={() => selectPlan("avista")}
                  onKeyDown={(e) => e.key === "Enter" && selectPlan("avista")}
                  className={`border ${selectedPlan === "avista" ? "border-[#ff6b35]" : "border-white/10"} bg-white/5 backdrop-blur cursor-pointer transition-all`}
                >
                  <CardContent className="p-5 space-y-1">
                    <p className="text-sm text-gray-400 uppercase tracking-[0.18em]">À vista</p>
                    <p className="text-3xl font-bold">R$ 1.997</p>
                    <p className="text-xs text-gray-400">pagamento único</p>
                  </CardContent>
                </Card>
              </div>

              <CTAButton id="cta-oferta" label="GARANTIR MINHA VAGA NO PRESENCIAL" onClick={() => handleCta("oferta")} />
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <BonusMentoria />
                <GuaranteeRibbon />
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section id="perfil">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">Para quem é / Para quem não é</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-white/5 border border-white/10 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <p className="text-lg font-semibold">É para quem:</p>
                <ul className="space-y-2 text-sm text-gray-200">
                  {paraQuem.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b35] mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border border-white/10 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <p className="text-lg font-semibold">Não é para quem:</p>
                <ul className="space-y-2 text-sm text-gray-200">
                  {naoPara.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b35] mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </Section>

      <Section id="alan-ia" className="border-b border-white/10">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 items-start">
          <div className="space-y-4">
            <Badge className="w-fit bg-white/10 text-white border border-white/20 uppercase tracking-[0.18em]">
              Alan IA • Agente Comercial
            </Badge>
            <div className="space-y-2">
              <h3 className="font-heading text-3xl font-semibold">Converse agora com a Alan IA</h3>
              <p className="text-gray-300">
                Tire dúvidas sobre o método, confira como o fluxo funciona e veja a IA reagir em tempo real antes de se inscrever.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                "Perguntas frequentes respondidas pelo próprio workflow que usamos nas turmas.",
                "Veja diagnósticos e sugestões sob medida para o seu caos operacional.",
                "Experimente a experiência que levamos para o seu time ao instalar o sistema."
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b35] mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <AlanChatWidget />
        </motion.div>
      </Section>

      <Section id="faq" className="border-b border-white/10">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-xl border border-white/10 bg-white/5 p-4">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold">
                  {item.q}
                  <span className="text-[#4fb3ff] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pt-3 text-sm text-gray-300">{item.a}</p>
              </details>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section id="cta-final" className="border-t border-white/10">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold">Pronto para transformar IA em rotina diária?</h2>
            <p className="text-gray-300">
              Se você quer sair do improviso e montar ferramentas reais usando IA na operação, essa é a próxima etapa lógica.
            </p>
            <CTAButton id="cta-final" label="Quero entrar na próxima turma" onClick={() => handleCta("final", "#cta-final")} />
            <p className="text-sm text-gray-400">Sistema Operacional – IA na Prática</p>
          </div>

          <InscricaoForm
            formData={formData}
            onChange={(field, value) => setFormData((prev) => ({ ...prev, [field]: value }))}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(formData);
            }}
          />
        </motion.div>
      </Section>

      <div className="fixed bottom-6 right-4 md:right-8 z-40">
        <a
          href="https://wa.me/5544999999999?text=Quero%20entrar%20na%20pr%C3%B3xima%20turma%20do%20Workshop%20IA%20na%20Pr%C3%A1tica"
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
          Tirar dúvida no WhatsApp
        </a>
      </div>

      <footer className="py-8 bg-[#0a0a0a] border-t border-white/10">
        <div className="container text-center text-xs text-gray-500">
          Sistema Operacional – IA na Prática • Momentum Aceleradora
        </div>
      </footer>
    </div>
  );
}

import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Calendar, CheckCircle2, LineChart, MapPin, MessageCircle, Quote, Shield, Target, Users, Zap } from "lucide-react";

import { AgendaSection } from "./home/components/AgendaSection";
import { FaqSection } from "./home/components/FaqSection";
import { HeroSection } from "./home/components/HeroSection";
import { InscricaoForm, type InscricaoFormData } from "./home/components/InscricaoForm";
import { SideNav } from "./home/components/SideNav";
import { benefits, encontros, exampleSections, gapPainPoints, paraQuemItems, testimonials } from "./home/homeData";
import { useHomeNavigation } from "./home/useHomeNavigation";

const whatsappLink =
  "https://wa.me/5544999999999?text=Quero%20construir%20minha%201%C2%AA%20ferramenta%20de%20IA%20na%20turma%20presencial";

export default function Home() {
  const [formData, setFormData] = useState<InscricaoFormData>({
    nome: "",
    email: "",
    whatsapp: ""
  });

  const { navItems, mobileNavItems, activeSection, navExpanded, toggleNavExpanded, handleNavClick } =
    useHomeNavigation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(
      "Pronto. Você está na pré-lista. Vamos falar com você no WhatsApp para confirmar pagamento e vaga."
    );
    setFormData({ nome: "", email: "", whatsapp: "" });
  };

  const scrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  const impactoStats = [
    { label: "63% usam IA diariamente", desc: "Pequenas empresas já automatizando rotinas.", accent: "Dados SBA/2024" },
    { label: "20h+ salvas/mês", desc: "Média de economia entre quem implanta IA na operação.", accent: "Pesquisa Thryv" },
    { label: "3,5x ROI médio", desc: "Retorno citado em estudos da Microsoft/McKinsey sobre automação.", accent: "ROI esperado" }
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-foreground">
      <SideNav
        navItems={navItems}
        mobileNavItems={mobileNavItems}
        activeSection={activeSection}
        navExpanded={navExpanded}
        onToggle={toggleNavExpanded}
        onNavClick={handleNavClick}
      />

      <HeroSection onCtaClick={scrollToForm} />

      {/* Gap da IA */}
      <section id="gap-ia" className="relative overflow-hidden py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-[#f7f0e4] blur-3xl" />
        </div>
        <div className="container relative space-y-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
              O gap da IA
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Todo mundo fala de IA. Menos de 15% coloca algo útil rodando no próprio negócio.
            </h2>
            <p className="text-lg text-muted-foreground">
              O obstáculo não é falta de ideia ou ferramenta. É método, clareza do processo e confiança para implantar sem travar a operação.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-6 items-start">
            <Card className="bg-gradient-to-br from-[#fdfaf5] to-white border-primary/20 shadow-sm">
              <CardContent className="p-7 space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  <LineChart className="w-4 h-4" />
                  Onde a maioria trava
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Sabe que IA é inevitável, mas não consegue sair do “teste de prompt”.",
                    "Compra ferramentas e planos, mas nada conecta com os processos que importam.",
                    "Sem método para quebrar o problema e construir algo usável.",
                    "Medo de parar operação, errar na implantação ou depender de dev."
                  ].map((text) => (
                    <div key={text} className="rounded-xl bg-white border border-border/70 p-3 text-sm text-muted-foreground">
                      {text}
                    </div>
                  ))}
                </div>
                <p className="text-base font-semibold text-foreground">
                  O treinamento existe para atravessar esse vácuo e sair com algo funcionando, não com mais teoria.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground shadow-xl border-none">
              <CardContent className="p-7 space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/80">Dado cru</p>
                <div className="flex items-baseline gap-3">
                  <p className="text-6xl font-black leading-none">15%</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/80">usam de forma efetiva</p>
                </div>
                <p className="text-lg font-semibold">
                  O resto fica no uso superficial: gerar texto, testar prompts, fazer “mais do mesmo” e seguir com retrabalho.
                </p>
                <div className="rounded-xl bg-white/15 border border-white/30 p-4 text-sm space-y-2">
                  <p className="font-semibold">O que fazemos aqui</p>
                  <p className="text-primary-foreground/90">
                    Escolhemos um processo real, construímos junto e implantamos. O foco é destravar o primeiro case e deixar o método pronto para repetir.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {gapPainPoints.map((item) => (
              <Card
                key={item.title}
                className="bg-[#f9f7f3] border-border/70 hover:-translate-y-1 hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute inset-x-4 top-0 h-1 rounded-b-full bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <p className="font-semibold text-foreground">{item.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-5xl mx-auto bg-primary/10 border-primary/30">
            <CardContent className="p-6 text-center space-y-2">
              <p className="text-lg font-semibold text-foreground">
                Este treinamento é para quem quer destravar logo a primeira ferramenta e criar um efeito bola de neve.
              </p>
              <p className="text-primary font-bold">Menos slides, mais construção com acompanhamento real.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impacto em números */}
      <section className="py-14 md:py-20 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container space-y-6">
          <div className="max-w-4xl mx-auto text-center space-y-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
              Impacto e ROI
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">O que quem usa IA já está colhendo</h2>
            <p className="text-muted-foreground">
              Referências reais para empresários: economia de tempo, redução de custo e ROI rápido.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {impactoStats.map((item) => (
              <Card
                key={item.label}
                className="bg-white border-primary/25 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <CardContent className="p-5 space-y-2">
                  <p className="text-xl font-bold text-primary leading-tight">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground/60">{item.accent}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white border-dashed border-2 border-primary/40">
            <CardContent className="p-5 text-center space-y-1">
              <p className="text-base font-semibold text-foreground">
                Se 10 horas economizadas por mês a R$ 150/h já pagam a turma em menos de 2 meses, imagine repetir isso em vários
                processos.
              </p>
              <p className="text-sm text-muted-foreground">Vamos mapear juntos quais fluxos geram mais retorno primeiro.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Para quem é */}
      <section id="para-quem-e" className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container space-y-10">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
              Para quem é
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Perfis que mais colhem resultado rápido</h2>
            <p className="text-lg text-muted-foreground">
              Gente que vive operação e não pode esperar um “projeto futuro”. Quer algo rodando já.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {paraQuemItems.map((item) => (
              <Card
                key={item.title}
                className="bg-white border-border/80 hover:-translate-y-1 hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-primary/10 blur-xl" />
                <CardContent className="p-5 space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#efe9de] border-border/70">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center md:text-left">
                <p className="font-semibold">
                  Se você quer só “entender o que é IA” ou colecionar certificado, essa turma não é para você.
                </p>
                <p className="text-primary font-bold">Aqui é ferramenta rodando, processo claro e método replicável.</p>
              </div>
              <Badge className="bg-primary text-primary-foreground border-none">Mão na massa</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* O que você vai ter */}
      <section id="beneficios" className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container space-y-12">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
              O que você leva
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ao final dos 4 encontros, você tem ferramenta rodando e método replicável
            </h2>
            <p className="text-lg text-muted-foreground">
              Saídas práticas, documentação clara e segurança para seguir construindo novos fluxos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((item) => (
              <Card
                key={item.text}
                className="bg-gradient-to-br from-[#f9f7f3] to-white border-border/70 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-left text-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#f9f7f3] border-border/70 shadow-sm">
            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Entrega final</Badge>
                  <span className="text-sm uppercase tracking-[0.15em]">Você sai com</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>Ferramenta de IA rodando em operação real (geralmente mais de uma).</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>Roteiro de implantação + materiais para treinar a equipe.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>Método para repetir o processo em qualquer outro gargalo.</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Badge variant="secondary" className="bg-white text-primary border-primary/20">Por que funciona</Badge>
                  <span className="text-sm uppercase tracking-[0.15em]">Formato das sessões</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>Foco em problemas reais, não em teoria.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>Acompanhamento de perto para ajustar cada caso.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>Ferramentas no-code que aceleram a construção.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Exemplos práticos */}
      <section id="exemplos" className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container space-y-10">
          <div className="max-w-5xl mx-auto text-center space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
              Exemplos prontos para rodar
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Algumas soluções que você pode levar</h2>
            <p className="text-lg text-muted-foreground">
              Ideias reais que saem do papel logo após o treinamento. Escolha o que dói mais hoje.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {exampleSections.map((categoria) => (
              <Card
                key={categoria.title}
                className="bg-white border-border/80 hover:-translate-y-1 hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
                <CardContent className="p-6 space-y-4 relative">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-primary text-primary-foreground border-none">{categoria.title}</Badge>
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Possibilidades</span>
                  </div>
                  <ul className="space-y-2 text-left">
                    {categoria.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white border-dashed border-2 border-primary/40 shadow-sm">
            <CardContent className="p-6 text-center text-lg space-y-1">
              <p>
                Se existe um processo, repetição ou decisão que segue sempre a mesma lógica,{" "}
                <span className="text-primary font-bold">provavelmente dá para transformar em ferramenta com IA.</span>
              </p>
              <p className="text-sm text-muted-foreground">Leve essa lista para o treinamento: vamos priorizar juntos.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <AgendaSection encontros={encontros} onCtaClick={scrollToForm} />

      {/* Sobre quem vai te conduzir */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container space-y-10">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
              Quem conduz
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Sobre quem vai te conduzir</h2>
            <p className="text-muted-foreground">
              Instrutor que usa IA diariamente em operações reais e conecta estratégia, operação e tecnologia.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-center">
            <Card className="bg-white border-primary/30 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-primary/15 blur-md" />
                  <div className="relative w-24 h-24 rounded-full bg-primary/15 flex items-center justify-center text-3xl font-bold text-primary">
                    AS
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-lg">Alan Silva</p>
                  <p className="text-sm text-muted-foreground">Construtor de soluções com IA em operações reais</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Fintech e crédito", "Automação comercial", "Operações financeiras"].map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-primary/30 shadow-md">
              <CardContent className="p-6 space-y-3">
                {[
                  "Usa IA diariamente para resolver problemas concretos em operações reais (fintech, crédito, consultoria, automação, crescimento de negócios).",
                  "Constrói fluxos, sistemas e automações que estão rodando hoje em empresas de verdade, atendendo times comerciais, operações financeiras e equipes de atendimento.",
                  "Tem formação prática em operação, estratégia e tecnologia, conectando visão de negócio com execução.",
                  "Aprende no campo de batalha e traz isso de forma didática e direta para sala."
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}

                <Card className="bg-primary/10 border-primary/30 mt-4">
                  <CardContent className="p-4 text-center font-semibold">
                    “Se não resolve um problema real de negócio, não entra no treinamento.”
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investimento e garantia */}
      <section id="investimento" className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container space-y-10">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
              Investimento e garantia
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Valor para retornar rápido</h2>
            <p className="text-muted-foreground">
              Pensado para se pagar com horas economizadas, menos retrabalho e decisões melhores em poucas semanas.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-2 border-primary bg-[#f9f7f3] shadow-sm relative overflow-hidden">
                  <div className="absolute top-3 right-3 text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                    Mais escolhido
                  </div>
                  <CardContent className="p-6 text-center space-y-1">
                    <p className="text-sm text-muted-foreground">Parcelado</p>
                    <p className="text-3xl font-bold text-primary">10x de R$ 250,00</p>
                    <p className="text-sm text-muted-foreground">no cartão</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/70 bg-white shadow-sm">
                  <CardContent className="p-6 text-center space-y-1">
                    <p className="text-sm text-muted-foreground">À vista</p>
                    <p className="text-3xl font-bold text-primary">R$ 1.997,00</p>
                    <p className="text-sm text-muted-foreground">pagamento único</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-[#f9f7f3] border-border/70 shadow-sm">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-bold">Você está investindo para:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {[
                      "Economizar horas de trabalho manual todos os meses;",
                      "Reduzir retrabalho e erro;",
                      "Ganhar clareza na operação;",
                      'Destravar melhorias que hoje não saem do papel porque "falta tempo" ou "falta alguém técnico".'
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground shadow-md">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-bold">Retorno do investimento</h3>
                  <p>
                    Se a ferramenta que você construir economizar 10 horas por mês (ou da sua equipe), o treinamento se paga em
                    menos de 2 meses.
                  </p>
                  <p className="text-xl font-semibold">
                    Considerando R$ 150 por hora, 10 horas valem R$ 1.500 mensais — mais que o valor da turma.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-4 border-primary bg-[#fefbf6] shadow-lg">
              <CardContent className="p-8 space-y-5">
                <div className="flex flex-col items-start gap-3">
                  <Badge className="bg-primary text-primary-foreground border-none">Garantia total</Badge>
                  <div className="flex items-center gap-3">
                    <Shield className="w-10 h-10 text-primary" />
                    <h3 className="text-2xl font-bold">Até o 2º encontro</h3>
                  </div>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>Participe, aprenda, construa e teste.</p>
                  <p>
                    Se até o fim do segundo encontro sentir que não faz sentido para você ou não está útil para sua realidade,
                    <span className="font-semibold text-foreground"> devolvo 100% do valor.</span>
                  </p>
                  <p className="text-primary font-bold text-lg">Sem discussão, sem letra miúda.</p>
                </div>
                <Card className="bg-white border-primary/30">
                  <CardContent className="p-4 text-center text-sm font-semibold">
                    Prefiro ter 10 pessoas alinhadas e aplicando do que alguém na turma só por estar ali.
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O que está incluído */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container space-y-10">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
              O que está incluído
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Tudo o que você precisa para construir</h2>
            <p className="text-muted-foreground">E para continuar construindo depois do treinamento.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Calendar, title: "4 encontros presenciais", description: "Sessões práticas focadas em construção de soluções reais." },
              { icon: CheckCircle2, title: "Gravações completas", description: "Acesso para rever e compartilhar com quem precisa executar." },
              { icon: Target, title: "Material completo", description: "Todo o material do curso disponível para download." },
              { icon: Zap, title: "Modelos e estruturas", description: "Prompts, checklists e fluxos prontos para reaplicar." },
              { icon: MapPin, title: "Blueprint do método", description: "Passo a passo para seguir construindo novas ferramentas." },
              { icon: Users, title: "Comunidade fechada", description: "Troca direta com outros empresários aplicando IA." }
            ].map((item) => (
              <Card
                key={item.title}
                className="bg-white border-border/70 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#f9f7f3] border-border/70">
            <CardContent className="p-6 grid md:grid-cols-3 gap-4 items-center">
              <div className="md:col-span-2 space-y-2">
                <p className="text-lg font-bold text-primary">Construímos e conectamos à vida real da sua empresa</p>
                <p className="text-muted-foreground">
                  O objetivo é que você saia com algo funcionando, pronto para usar, com gravações e material de apoio para seguir
                  evoluindo.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white border-border/80 px-4 py-3 rounded-lg w-fit">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">Apenas 10 vagas</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FaqSection />

      {/* Social proof */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container space-y-8">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold uppercase tracking-[0.18em]">
              Social proof
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">O que empresários dizem</h2>
            <p className="text-muted-foreground">Gente que estava na mesma situação que você e saiu com solução rodando.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white border-primary/30 h-full shadow-sm hover:-translate-y-1 transition-all">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <Quote className="w-6 h-6 text-primary" />
                  <p className="text-muted-foreground flex-1 leading-relaxed">“{testimonial.quote}”</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border bg-[#f9f7f3]">
                      {testimonial.image ? (
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      ) : (
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ objetções rápidas */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container space-y-8">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
              Perguntas rápidas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Respostas diretas para decidir</h2>
            <p className="text-muted-foreground">Sem rodeio: o que você precisa saber antes de entrar.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[
              { question: "Preciso saber programar?", answer: "Não. Vamos usar ferramentas no-code e IA para construir sua solução." },
              { question: "E se eu não tiver ideia do que construir?", answer: "Mapeamos juntos o problema principal e já desenhamos a primeira solução." },
              { question: "Tem suporte depois da turma?", answer: "Você sai com material e gravações para continuar; suporte extra pode ser combinado à parte." },
              { question: "Posso levar alguém do time?", answer: "Sim, desde que faça sentido para acelerar a construção e implantação." }
            ].map((item) => (
              <Card key={item.question} className="bg-[#f9f7f3] border border-border/70 rounded-lg px-4 hover:-translate-y-0.5 hover:shadow-md transition-all">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span className="text-xs uppercase tracking-[0.2em] bg-primary/10 px-2 py-1 rounded-full">Pergunta</span>
                    <p>{item.question}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inscrição */}
      <section
        id="inscricao"
        className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#f4ede1] to-[#f7f4ef]"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-10 top-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute left-0 -bottom-12 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container relative">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
                Inscrição
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Pré-lista para a 1ª turma presencial</h2>
              <p className="text-muted-foreground">
                Responda para garantir sua vaga. Falamos com você pelo WhatsApp para confirmar pagamento e detalhes.
              </p>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 bg-white border border-border/80 px-4 py-3 rounded-lg">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Início</p>
                    <span className="text-sm font-semibold">06/12</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white border border-border/80 px-4 py-3 rounded-lg">
                  <Shield className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Garantia</p>
                    <span className="text-sm font-semibold">até o 2º encontro</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white border border-border/80 px-4 py-3 rounded-lg">
                  <Users className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Vagas</p>
                    <span className="text-sm font-semibold">10 participantes</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                onClick={scrollToForm}
              >
                Quero reservar minha vaga
              </Button>
              <p className="text-sm text-muted-foreground">Responda e retornamos para finalizar sua inscrição.</p>
            </div>

            <InscricaoForm
              formData={formData}
              onChange={(field, value) => setFormData((prev) => ({ ...prev, [field]: value }))}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>

      {/* CTA Fixo Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 shadow-2xl md:hidden z-50 border-t border-primary/40">
        <Button
          size="lg"
          variant="secondary"
          className="w-full font-bold shadow-xl hover:shadow-2xl transition-all"
          onClick={scrollToForm}
        >
          Reservar minha vaga
        </Button>
      </div>

      {/* Botão flutuante WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40"
      >
        <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-semibold whitespace-nowrap">Tirar dúvida no WhatsApp</span>
        </div>
      </a>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-border/60">
        <div className="container">
          <div className="text-center text-sm text-muted-foreground">
            © 2025 Sistema Operacional - Alan Silva. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

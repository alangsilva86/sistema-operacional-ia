import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      <section id="gap-ia" className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container space-y-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr,1.1fr] gap-10 items-start">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">O gap da IA</p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Hoje quase todo mundo fala de IA. Menos de 15% aplica de forma útil dentro do negócio.
              </h2>
              <p className="text-lg text-muted-foreground">
                A maioria paga ferramentas, mas fica presa entre curiosidade, medo de errar e falta de método para colocar algo
                para rodar na operação. É aqui que o negócio trava.
              </p>
            </div>
            <Card className="bg-[#f9f7f3] border-border/70">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <LineChart className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">Estatística brutal</p>
                  <p className="text-xl font-bold text-foreground">
                    Menos de 15% dos empresários usam IA de forma realmente efetiva hoje.
                  </p>
                  <p className="text-muted-foreground">
                    O resto fica no uso superficial: gerar texto, testar prompts, fazer “mais do mesmo” e seguir com retrabalho.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {gapPainPoints.map((item) => (
              <Card key={item.title} className="bg-[#f9f7f3] border-border/70 hover:-translate-y-1 hover:shadow-md transition-all">
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

          <Card className="max-w-5xl mx-auto bg-primary text-primary-foreground border-none">
            <CardContent className="p-6 text-center text-lg font-semibold">
              Este treinamento foi criado para quem já entendeu que IA é inevitável, mas ainda não encontrou método para aplicar
              dentro da própria empresa.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Para quem é */}
      <section id="para-quem-e" className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Para quem é este treinamento</h2>
            <p className="text-lg text-muted-foreground">Se você vive operação e precisa de resultado rápido, é para você.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {paraQuemItems.map((item) => (
              <Card
                key={item.title}
                className="bg-white border-border/80 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <CardContent className="p-5 space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <p className="font-semibold text-foreground">{item.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-[#efe9de] border-border/70">
            <CardContent className="p-6 text-center space-y-2">
              <p className="font-semibold">
                Se você quer só “entender o que é IA” ou colecionar certificado, essa turma não é para você.
              </p>
              <p className="text-primary font-bold">Aqui é ferramenta rodando, processo claro e método replicável.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* O que você vai ter */}
      <section id="beneficios" className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">O que você vai ter ao final dos 4 encontros</h2>
            <p className="text-lg text-muted-foreground">Saídas práticas, método replicável e clareza do próximo passo.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {benefits.map((item) => (
              <Card
                key={item.text}
                className="bg-[#f9f7f3] border-border/70 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-left text-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-10 bg-[#f9f7f3] border-border/70">
            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="flex-1 space-y-2">
                <p className="font-semibold text-primary text-lg">Você terá:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>Ferramenta de IA rodando em operação real (ou mais de uma).</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>Roteiro para implementar e treinar equipe.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>Método que dá para reaplicar em outros problemas.</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 space-y-2">
                <p className="font-semibold text-primary text-lg">Por que funciona:</p>
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
        <div className="container">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Exemplos do que você poderá construir</h2>
            <p className="text-lg text-muted-foreground">
              Possibilidades reais para diferentes operações logo após o treinamento.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {exampleSections.map((categoria) => (
              <Card
                key={categoria.title}
                className="bg-white border-border/80 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">{categoria.title}</h3>
                  <ul className="space-y-2 text-left">
                    {categoria.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-white border-dashed border-2 border-primary/40">
            <CardContent className="p-5 text-center text-lg">
              Se existe um processo, repetição ou decisão que segue sempre a mesma lógica,{" "}
              <span className="text-primary font-bold">provavelmente dá para transformar em ferramenta com IA.</span>
            </CardContent>
          </Card>
        </div>
      </section>

      <AgendaSection encontros={encontros} onCtaClick={scrollToForm} />

      {/* Sobre quem vai te conduzir */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Sobre quem vai te conduzir</h2>
            <p className="text-muted-foreground">
              Instrutor que usa IA diariamente em operações reais e conecta estratégia, operação e tecnologia.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-[1fr,2fr] gap-6 items-center">
            <Card className="bg-white border-border/80">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                <div className="w-24 h-24 rounded-full bg-primary/15 flex items-center justify-center text-3xl font-bold text-primary">
                  AS
                </div>
                <div>
                  <p className="font-semibold">Alan Silva</p>
                  <p className="text-sm text-muted-foreground">Construtor de soluções com IA em operações reais</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-border/80">
              <CardContent className="p-6 space-y-3">
                {["Usa IA diariamente para resolver problemas concretos em operações reais (fintech, crédito, consultoria, automação, crescimento de negócios).",
                  "Constrói fluxos, sistemas e automações que estão rodando hoje em empresas de verdade, atendendo times comerciais, operações financeiras e equipes de atendimento.",
                  "Tem formação prática em operação, estratégia e tecnologia, conectando visão de negócio com execução.",
                  "Aprende no campo de batalha e traz isso de forma didática e direta para sala."].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <p>{item}</p>
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
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Investimento e condições</h2>
                <p className="text-muted-foreground">
                  Valor pensado para retornar rápido com horas economizadas, menos retrabalho e decisões melhores.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-2 border-primary bg-[#f9f7f3]">
                  <CardContent className="p-6 text-center space-y-1">
                    <p className="text-sm text-muted-foreground">Parcelado</p>
                    <p className="text-3xl font-bold text-primary">10x de R$ 250,00</p>
                    <p className="text-sm text-muted-foreground">no cartão</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/70 bg-white">
                  <CardContent className="p-6 text-center space-y-1">
                    <p className="text-sm text-muted-foreground">À vista</p>
                    <p className="text-3xl font-bold text-primary">R$ 1.997,00</p>
                    <p className="text-sm text-muted-foreground">pagamento único</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-[#f9f7f3] border-border/70">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-bold">Você está investindo para:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {["Economizar horas de trabalho manual todos os meses;",
                      "Reduzir retrabalho e erro;",
                      "Ganhar clareza na operação;",
                      'Destravar melhorias que hoje não saem do papel porque "falta tempo" ou "falta alguém técnico".'].map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
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

            <Card className="border-4 border-primary bg-[#fefbf6]">
              <CardContent className="p-8 space-y-5">
                <div className="flex flex-col items-start gap-3">
                  <Shield className="w-10 h-10 text-primary" />
                  <h3 className="text-2xl font-bold">Garantia total até o 2º encontro</h3>
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
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">O que está incluído</h2>
            <p className="text-muted-foreground">Tudo o que você precisa para construir e continuar construindo.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[{ icon: Calendar, title: "4 encontros presenciais", description: "Sessões práticas e focadas em construção de soluções reais." },
              { icon: CheckCircle2, title: "Gravações completas", description: "Acesso às gravações para rever quando quiser." },
              { icon: Target, title: "Material completo", description: "Todo o material do curso disponível para download." },
              { icon: Zap, title: "Modelos e estruturas", description: "Prompts e estruturas para reaplicar em outros problemas." },
              { icon: MapPin, title: "Blueprint do método", description: "Passo a passo para seguir construindo novas ferramentas." },
              { icon: Users, title: "Comunidade fechada", description: "Troca direta com outros empresários aplicando IA." }].map((item) => (
              <Card key={item.title} className="bg-white border-border/70 hover:-translate-y-1 hover:shadow-md transition-all">
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <p className="font-semibold text-foreground">{item.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-10 bg-[#f9f7f3] border-border/70">
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
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Social proof</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">O que empresários dizem</h2>
            <p className="text-muted-foreground">Gente que estava na mesma situação que você e saiu com solução rodando.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white border-border/70 h-full">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <Quote className="w-6 h-6 text-primary" />
                  <p className="text-muted-foreground flex-1">“{testimonial.quote}”</p>
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
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Perguntas rápidas</h2>
            <p className="text-muted-foreground">Respostas diretas para você decidir.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[{ question: "Preciso saber programar?", answer: "Não. Vamos usar ferramentas no-code e IA para construir sua solução." },
              { question: "E se eu não tiver ideia do que construir?", answer: "Mapeamos juntos o problema principal e já desenhamos a primeira solução." },
              { question: "Tem suporte depois da turma?", answer: "Você sai com material e gravações para continuar; suporte extra pode ser combinado à parte." },
              { question: "Posso levar alguém do time?", answer: "Sim, desde que faça sentido para acelerar a construção e implantação." }].map((item) => (
              <Card key={item.question} className="bg-[#f9f7f3] border border-border/70 rounded-lg px-4">
                <CardContent className="p-6 space-y-2">
                  <p className="font-semibold text-primary">{item.question}</p>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inscrição */}
      <section id="inscricao" className="py-16 md:py-24 bg-[#f0ebe0]">
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Inscrição</p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Pré-lista para a 1ª turma presencial</h2>
              <p className="text-muted-foreground">
                Responda para garantir sua vaga. Falamos com você pelo WhatsApp para confirmar pagamento e detalhes.
              </p>

              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-2 bg-white border border-border/80 px-4 py-3 rounded-lg w-fit">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">Início 06/12</span>
                </div>
                <div className="flex items-center gap-2 bg-white border-border/80 px-4 py-3 rounded-lg w-fit">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">Garantia até o 2º encontro</span>
                </div>
                <div className="flex items-center gap-2 bg-white border-border/80 px-4 py-3 rounded-lg w-fit">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">Apenas 10 vagas</span>
                </div>
              </div>

              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                onClick={scrollToForm}
              >
                Quero participar da 1ª turma
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
          Garantir minha vaga
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
          <span className="text-sm font-semibold whitespace-nowrap">Falar no WhatsApp</span>
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

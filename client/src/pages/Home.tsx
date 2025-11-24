import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
<<<<<<< Updated upstream
import { Calendar, Clock, MapPin, CheckCircle2, Users, Target, Zap, Shield, Play, Quote } from "lucide-react";
=======
import {
  AlertTriangle,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Play,
  Quote,
  Shield,
  Target,
  Users,
  Workflow,
  Zap
} from "lucide-react";
>>>>>>> Stashed changes
import { useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    cargo: ""
  });

  const testimonials = [
    {
      name: "Amanda Costa",
      role: "Head de Operações • Momentum",
      quote: "Em poucas horas colocamos no ar um fluxo que tirou a equipe do retrabalho.",
      initials: "AC"
    },
    {
      name: "Bruno Martins",
      role: "CEO • Fatorcard",
      quote: "Conseguimos testar rápido e medir impacto antes de envolver o time de dev.",
      initials: "BM",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Carla Ribeiro",
      role: "Diretora Comercial • Grupo Acessus",
      quote: "A clareza do passo a passo deixou fácil evoluir a solução depois das sessões.",
      initials: "CR"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Formulário enviado com sucesso! Em breve entraremos em contato.");
    setFormData({ nome: "", email: "", whatsapp: "", empresa: "", cargo: "" });
  };

  const scrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  const agenda = [
    { num: 1, data: "06/12", hora: "10h00", local: "Atrium – Escritório Próspera | Fatorcard" },
    { num: 2, data: "13/12", hora: "10h00", local: "Atrium – Escritório Momentum | Acessus" },
    { num: 3, data: "18/12", hora: "18h30", local: "Atrium – Escritório Próspera | Fatorcard" },
    { num: 4, data: "20/12", hora: "10h00", local: "Atrium – Escritório Momentum | Acessus" }
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-[#f4f0ea]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-primary">
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/25">
                  1ª turma presencial • Maringá • Dezembro/2025
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/25">
                  Até 10 vagas
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-lg uppercase tracking-[0.2em] text-muted-foreground">
                  Sistema Operacional – IA na prática
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Crie ferramentas reais de IA para o seu negócio em 4 encontros presenciais.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Pensado para empresários e gestores: prático, enxuto e 100% focado em colocar uma solução rodando, mesmo sem programar.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { icon: MapPin, label: "Presencial em Maringá" },
                  { icon: Users, label: "Turma reduzida, até 10 empresários" },
                  { icon: Calendar, label: "4 encontros com entregas claras" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl border border-border/80 bg-white px-4 py-3 shadow-sm"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                  onClick={scrollToForm}
                >
                  Quero construir minha 1ª ferramenta com IA
                </Button>
                <p className="text-sm text-muted-foreground">Turma limitada a 10 vagas • Início em 06/12</p>
              </div>

              <Card className="bg-white border-border/70">
                <CardContent className="p-6 flex items-start gap-3">
                  <Target className="w-6 h-6 text-primary mt-1" />
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">Não é um curso para “entender IA”.</p>
                    <p className="text-muted-foreground">
                      É um treinamento para criar soluções reais para o seu negócio com IA, rápido e de forma simples.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-white to-primary/10">
                <CardContent className="p-0">
                  <div className="relative aspect-video flex items-center justify-center bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_55%)]">
                    <div className="absolute inset-0 border border-white/60 rounded-xl m-6" />
                    <Button
                      variant="secondary"
                      size="lg"
                      className="rounded-full bg-white/90 text-primary border border-primary/30 hover:-translate-y-0.5 transition-transform"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Assistir prévia (2 min)
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground">Entenda em 2 minutos o que você vai construir nos encontros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gap da IA */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                O problema hoje não é falta de IA. É não saber usar de forma útil.
              </h2>
              <p className="text-lg text-muted-foreground">
                A rotina real das PME está cheia de pedidos, planilhas improvisadas e retrabalho. A IA só vira resultado quando
                entra em um fluxo pensado para o seu negócio.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { icon: AlertTriangle, text: "E-mails e demandas se acumulando, sem prioridade clara." },
                { icon: Workflow, text: "Processos críticos rodando em planilhas e mensagens soltas." },
                { icon: BarChart3, text: "Equipes gastando horas em tarefas repetitivas que poderiam ser automatizadas." },
                { icon: Target, text: "Ideias boas que não andam porque sempre “falta alguém de tecnologia” para executar." }
              ].map((item) => (
                <Card key={item.text} className="bg-[#f9f7f3] border-border/70">
                  <CardContent className="p-5 flex gap-3 items-start">
                    <item.icon className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Para quem é este treinamento</h2>
            <p className="text-lg text-muted-foreground">Desenhado para quem já vive operação e precisa de resultado rápido.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {[
              "Empresários e gestores de pequenas e médias empresas.",
              "Sobrecarregados com operação, planilhas e retrabalho.",
              "Quem já ouviu falar de IA, talvez use ChatGPT, mas ainda não transformou em ferramenta de verdade.",
              "Quem quer automatizar processos, organizar informação, vender melhor ou atender melhor sem depender de programador.",
              "Quem entende que dominar construção com IA é vantagem nos próximos anos."
            ].map((item) => (
              <Card key={item} className="bg-white border-border/80 hover:-translate-y-1 hover:shadow-md transition-all">
                <CardContent className="p-5 flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p>{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-[#efe9de] border-border/70">
            <CardContent className="p-6 text-center space-y-2">
              <p className="font-semibold">Se você busca teoria e certificado bonito, não é aqui.</p>
              <p className="text-primary font-bold">Aqui é ferramenta, processo e resultado aplicado.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* O que você vai ter */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">O que você vai ter ao final dos 4 encontros</h2>
            <p className="text-lg text-muted-foreground">Saídas práticas, método replicável e clareza do próximo passo.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                text: "Pelo menos uma ferramenta funcional criada para a sua empresa (geralmente mais de uma)."
              },
              {
                icon: Target,
                text: "Capacidade de pegar qualquer problema recorrente e transformar em um fluxo estruturado."
              },
              {
                icon: CheckCircle2,
                text: 'Entender IA como "motor invisível" por trás de sistemas, formulários, bots e decisões.'
              },
              {
                icon: Users,
                text: "Método replicável para criar novas soluções sem depender totalmente de terceiros."
              },
              {
                icon: MapPin,
                text: "Plano claro de implementação e de treinamento da equipe."
              }
            ].map((item) => (
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

          <Card className="mt-8 bg-primary text-primary-foreground">
            <CardContent className="p-7 text-center space-y-1">
              <p>Não é um “curso para abrir a cabeça”.</p>
              <p className="text-xl font-bold">É um processo para colocar solução de pé.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Exemplos práticos */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Exemplos do que você poderá construir</h2>
            <p className="text-lg text-muted-foreground">
              Possibilidades reais para diferentes operações logo após o treinamento.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Para quem vende serviços ou produtos",
                items: [
                  "Funil inteligente que qualifica leads, faz perguntas certas e organiza respostas.",
                  "Ferramenta que registra contatos, organiza oportunidades e gera follow-ups automáticos."
                ]
              },
              {
                title: "Para quem tem equipe operacional",
                items: [
                  "Sistema simples que recebe informações da equipe, organiza, resume e gera relatórios prontos.",
                  "Checklist inteligente que orienta o passo a passo e registra tudo no final."
                ]
              },
              {
                title: "Para quem lida com muitos clientes",
                items: [
                  "Assistente com IA para responder dúvidas frequentes, coletar informações e encaminhar para a pessoa certa.",
                  "Robô que lê formulários, contratos ou e-mails e extrai só o que importa."
                ]
              },
              {
                title: "Para quem precisa de controle interno",
                items: [
                  "Painel que consolida dados de várias fontes e gera visão resumida de indicadores.",
                  "Ferramenta para organizar demandas, prazos e responsáveis sem depender de dezenas de planilhas."
                ]
              }
            ].map((categoria) => (
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

      {/* Agenda */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Agenda da 1ª turma – Dezembro/2025</h2>
            <p className="text-muted-foreground">Todas as sessões são presenciais e gravadas.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {agenda.map((encontro) => (
              <Card
                key={encontro.num}
                className="bg-[#f9f7f3] border-border/80 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground font-bold flex items-center justify-center">
                      {encontro.num}
                    </div>
                    <div className="flex gap-3 text-sm font-semibold">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{encontro.data}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{encontro.hora}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary mt-1" />
                    <span>{encontro.local}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como funcionam os 4 encontros */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Como funcionam os 4 encontros</h2>
            <p className="text-muted-foreground">Práticos, diretos e com acompanhamento real para cada negócio.</p>
            <p className="text-primary font-semibold">Turma reduzida: máximo de 10 participantes.</p>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  num: 1,
                  title: "PENSAR COMO ENGENHEIRO DE SOLUÇÕES",
                  date: "06/12 – 10h00",
                  location: "Atrium – Escritório Próspera | Fatorcard",
                  points: [
                    "Como sair do uso superficial da IA e passar a pensar como construtor de soluções.",
                    "Como quebrar qualquer problema em etapas simples e automatizáveis.",
                    "Estrutura de prompts que tira você do \"texto genérico\" e vai para saídas úteis para o seu contexto.",
                    "Mapeamento do seu problema principal: qual ferramenta vamos construir primeiro para o seu negócio.",
                    "Definição do blueprint da solução: entradas, lógica, saídas, integrações."
                  ],
                  takeaway: "Seu problema principal mapeado e o desenho da ferramenta que vamos construir juntos."
                },
                {
                  num: 2,
                  title: "CONSTRUÇÃO RÁPIDA: SUA 1ª FERRAMENTA FUNCIONANDO",
                  date: "13/12 – 10h00",
                  location: "Atrium – Escritório Momentum | Acessus",
                  points: [
                    "Escolha das ferramentas no-code que vamos usar.",
                    "Conexão da IA como \"cérebro\" por trás da solução.",
                    "Montagem do fluxo lógico: o que entra, o que a IA faz, o que sai.",
                    "Criação da primeira versão da sua ferramenta, já usável.",
                    "Testes, ajustes e correções em grupo."
                  ],
                  takeaway: "Sua ferramenta 1.0 funcionando, pronta para ser testada e usada."
                },
                {
                  num: 3,
                  title: "AUTOMAÇÃO E INTEGRAÇÃO COM A REALIDADE",
                  date: "18/12 – 18h30",
                  location: "Atrium – Escritório Próspera | Fatorcard",
                  points: [
                    "Como conectar sua ferramenta ao que você já usa (WhatsApp, e-mail, planilhas, sistemas).",
                    "Gatilhos e automações: o que dispara o quê e quando.",
                    "Criação de uma segunda solução OU evolução avançada da primeira, dependendo do seu caso.",
                    "Visualização básica de dados e acompanhamento do uso."
                  ],
                  takeaway: "Sua solução ligada à rotina real da empresa, com automação mínima já rodando."
                },
                {
                  num: 4,
                  title: "IMPLEMENTAÇÃO NA EMPRESA E ESCALA",
                  date: "20/12 – 10h00",
                  location: "Atrium – Escritório Momentum | Acessus",
                  points: [
                    "Como inserir a ferramenta no dia a dia da empresa sem travar o time.",
                    "Como treinar pessoas a usarem o que foi criado, mesmo sem entender nada de IA.",
                    "Como medir impacto e retorno das soluções.",
                    "Como definir os próximos processos a serem automatizados.",
                    "Roteiro para você continuar construindo novas ferramentas sozinho."
                  ],
                  takeaway:
                    "Ferramentas implantadas, equipe pronta para usar e um método para seguir expandindo o uso de IA na sua empresa."
                }
              ].map((encontro) => (
                <AccordionItem
                  key={encontro.num}
                  value={`encontro-${encontro.num}`}
                  className="overflow-hidden rounded-xl border-2 border-border/80 bg-white transition-all duration-300 data-[state=open]:border-primary/60 data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="px-6 py-5 md:px-8 md:py-6 hover:no-underline">
                    <div className="flex w-full items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-lg w-12 h-12 md:w-14 md:h-14 flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                        {encontro.num}
                      </div>
                      <div className="flex-1 text-left space-y-2">
                        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-semibold text-foreground/80">{encontro.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-foreground/80">{encontro.location}</span>
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold leading-snug text-foreground">
                          {encontro.title}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 md:px-8">
                    <ul className="space-y-2 mb-6">
                      {encontro.points.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-primary/10 rounded-lg p-4">
                      <p className="font-semibold text-foreground">Você sai com:</p>
                      <p className="text-muted-foreground">{encontro.takeaway}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Turma pequena */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Turma pequena, acompanhamento real</h2>
            <p className="text-muted-foreground">Tempo dedicado para cada negócio, sem deixar ninguém para trás.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <Card className="md:col-span-3 bg-primary text-primary-foreground">
              <CardContent className="p-7 text-center space-y-2">
                <Users className="w-10 h-10 mx-auto" />
                <p className="text-xl font-bold">Máximo de 10 participantes</p>
                <p className="text-primary-foreground/90">Construção, revisão e ajustes em tempo real.</p>
              </CardContent>
            </Card>

            {[
              {
                title: "Dinâmica do treinamento",
                items: [
                  "Explicação curta e direta ao ponto.",
                  "Tempo focado em construir, revisar e melhorar.",
                  "Você constrói junto, não fica só assistindo."
                ]
              },
              {
                title: "Suporte individual",
                items: [
                  "Travou em qualquer parte? Voltamos e destravamos.",
                  "Objetivo é sair com solução real, não com anotações."
                ]
              }
            ].map((item) => (
              <Card key={item.title} className="bg-[#f9f7f3] border-border/70">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {item.items.map((sub) => (
                      <li key={sub} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                {[
                  "Usa IA diariamente para resolver problemas concretos em operações reais (fintech, crédito, consultoria, automação, crescimento de negócios).",
                  "Constrói fluxos, sistemas e automações que estão rodando hoje em empresas de verdade, atendendo times comerciais, operações financeiras e equipes de atendimento.",
                  "Tem formação prática em operação, estratégia e tecnologia, conectando visão de negócio com execução.",
                  "Aprende no campo de batalha e traz isso de forma didática e direta para sala."
                ].map((item) => (
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
      <section className="py-16 md:py-24 border-b border-border/60 bg-white">
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

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-bold">Retorno do investimento</h3>
                  <p>
                    Um único processo automatizado que economize 10 horas mensais já começa a pagar o investimento em poucos meses.
                  </p>
                  <p className="text-xl font-semibold">
                    Se a hora do seu trabalho vale R$ 100,00, essas 10 horas representam R$ 1.000,00 por mês.
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
            {[
              {
                icon: Calendar,
                title: "4 encontros presenciais",
                description: "Sessões práticas e focadas em construção de soluções reais."
              },
              {
                icon: CheckCircle2,
                title: "Gravações completas",
                description: "Acesso às gravações para rever quando quiser."
              },
              { icon: Target, title: "Material completo", description: "Todo o material do curso disponível para download." },
              { icon: Zap, title: "Modelos e estruturas", description: "Prompts e estruturas para reaplicar em outros problemas." },
              {
                icon: MapPin,
                title: "Blueprint do método",
                description: "Passo a passo para seguir construindo novas ferramentas."
              }
            ].map((item) => (
              <Card key={item.title} className="bg-white border-border/70">
                <CardContent className="p-5 space-y-2 text-left">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O que você precisa ter */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">O que você precisa ter para participar</h2>
            <p className="text-muted-foreground">Pré-requisitos simples para aproveitar ao máximo.</p>
          </div>

          <Card className="mt-10 bg-[#f9f7f3] border-border/70">
            <CardContent className="p-8 space-y-4">
              <ul className="space-y-3 text-left">
                {[
                  "Notebook próprio para usar nos encontros.",
                  "E-mail ativo.",
                  "Cartão de crédito (para testes e integrações, quando necessário).",
                  "Conta paga no ChatGPT (as outras ferramentas que utilizarmos serão em período gratuito ou plano básico)."
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Card className="bg-white border-primary/30">
                <CardContent className="p-4 text-center space-y-1">
                  <p className="font-semibold">Não é necessário saber programar.</p>
                  <p className="text-muted-foreground">O foco é: pensar, estruturar e construir.</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prova social */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Social proof</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Quem já construiu solução comigo</h2>
            <p className="text-muted-foreground">
              Casos reais de operação e liderança que precisavam tirar ideias do papel com rapidez.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="bg-white border-border/70 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-12 w-12 border bg-[#f9f7f3]">
                      {testimonial.image && <AvatarImage src={testimonial.image} alt={testimonial.name} />}
                      <AvatarFallback className="font-semibold text-primary bg-primary/10">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 text-left">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-muted-foreground text-left">
                    <Quote className="w-5 h-5 text-primary mt-1" />
                    <p className="leading-relaxed">“{testimonial.quote}”</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Perguntas frequentes</h2>
            <p className="text-muted-foreground">Tire dúvidas rápidas antes de garantir sua vaga.</p>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  value: "item-1",
                  question: "E se eu não tiver nenhuma ideia clara do que quero fazer?",
                  answer:
                    "No primeiro encontro, vamos mapear e escolher o problema certo para virar ferramenta. Você não vem com tudo pronto, vem com disposição para resolver algo real."
                },
                {
                  value: "item-2",
                  question: "Sou funcionário, não dono. Faz sentido para mim?",
                  answer:
                    "Sim, se você tem espaço de influência no processo (coordenação, gestão, liderança, operação chave). Quem traz solução pronta para dentro da empresa sobe de nível."
                },
                {
                  value: "item-3",
                  question: "Nunca usei IA direito, vou acompanhar?",
                  answer:
                    "Vai. Partimos do básico necessário, sempre com foco em aplicação. O ritmo é prático e você terá suporte durante os encontros."
                },
                {
                  value: "item-4",
                  question: "Posso mandar alguém da minha equipe no meu lugar?",
                  answer:
                    "Pode, desde que essa pessoa esteja no dia a dia da operação e tenha liberdade para propor mudanças e aplicar o que for construído."
                }
              ].map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="bg-[#f9f7f3] border border-border/70 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Chamada final + formulário */}
      <section id="inscricao" className="py-16 md:py-24 bg-[#f0ebe0]">
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Chegou a hora de construir sua 1ª ferramenta com IA
              </h2>
              <div className="space-y-3 text-lg text-foreground">
                <p className="font-semibold">Você entra com um problema real.</p>
                <p className="font-semibold">Sai com solução funcionando e com o método para seguir evoluindo.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 bg-white border-border/80 px-4 py-3 rounded-lg w-fit">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">Presencial em Maringá</span>
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

            <Card className="bg-white border-2 border-primary/30 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Garanta sua vaga na 1ª turma</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-sm font-semibold">
                        Nome completo *
                      </Label>
                      <Input
                        id="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="h-12 text-base"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 text-base"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-sm font-semibold">
                        WhatsApp *
                      </Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="h-12 text-base"
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa" className="text-sm font-semibold">
                        Empresa
                      </Label>
                      <Input
                        id="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="h-12 text-base"
                        placeholder="Nome da sua empresa (opcional)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cargo" className="text-sm font-semibold">
                        Cargo/Função
                      </Label>
                      <Input
                        id="cargo"
                        type="text"
                        value={formData.cargo}
                        onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                        className="h-12 text-base"
                        placeholder="Seu cargo ou função (opcional)"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-base py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Quero garantir minha vaga
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar este formulário, você concorda em receber informações sobre o treinamento.
                    </p>
                  </form>
                </div>
              </CardContent>
            </Card>
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

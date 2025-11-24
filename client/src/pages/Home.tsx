import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Compass,
  CreditCard,
  LineChart,
  MapPin,
  MessageCircle,
  Play,
  Quote,
  Shield,
  Sparkles,
  Target,
  Type,
  Users,
  Zap,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Encontro = {
  num: number;
  date: string;
  time: string;
  location: string;
  title: string;
  points: string[];
  takeaway: string;
};

type RoadmapProps = {
  steps: Encontro[];
  onCtaClick: () => void;
};

function Roadmap({ steps, onCtaClick }: RoadmapProps) {
  return (
    <div className="mt-12">
      <div className="relative">
        <div className="hidden md:block absolute top-7 left-0 right-0 h-1 bg-primary/10" />
        <div className="flex flex-col gap-6 md:flex-row md:gap-5">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative flex flex-1">
              <div className="flex flex-col items-center mr-4 md:mr-0">
                <div className="relative">
                  <div className="hidden md:block absolute -inset-1 rounded-full bg-primary/20 blur-sm" />
                  <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-lg">
                    {step.num}
                  </div>
                </div>
                {idx < steps.length - 1 && <div className="mt-2 flex-1 w-px bg-primary/20 md:hidden" />}
              </div>

              <Card className="flex-1 bg-white/80 border-primary/15 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-4 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-semibold text-foreground/90">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{step.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{step.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-foreground/80">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{step.location}</span>
                    </div>
                  </div>

                  <p className="text-base md:text-lg font-bold text-foreground leading-snug">{step.title}</p>

                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-3">
                    <p className="text-xs uppercase font-semibold text-primary tracking-wide">Takeaway</p>
                    <p className="text-sm text-foreground mt-1">{step.takeaway}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          size="lg"
          className="rounded-full px-8 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={onCtaClick}
        >
          Quero minha vaga
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: ""
  });
  const [navExpanded, setNavExpanded] = useState(false);

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
    toast.success("Pronto. Você está na pré-lista. Vamos falar com você no WhatsApp para confirmar pagamento e vaga.");
    setFormData({ nome: "", email: "", whatsapp: "" });
  };

  const scrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  const encontros: Encontro[] = [
    {
      num: 1,
      title: "PENSAR COMO ENGENHEIRO DE SOLUÇÕES",
      date: "06/12",
      time: "10h00",
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
      date: "13/12",
      time: "10h00",
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
      date: "18/12",
      time: "18h30",
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
      date: "20/12",
      time: "10h00",
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
  ];

  const whatsappLink =
    "https://wa.me/5544999999999?text=Quero%20construir%20minha%201%C2%AA%20ferramenta%20de%20IA%20na%20turma%20presencial";

  const navItems = useMemo(
    () => [
      { label: "Para quem é", href: "#para-quem-e", icon: Users },
      { label: "O que você leva", href: "#beneficios", icon: Zap },
      { label: "Exemplos", href: "#exemplos", icon: Sparkles },
      { label: "Agenda", href: "#agenda", icon: Calendar },
      { label: "Como funciona", href: "#processo", icon: Brain },
      { label: "Investimento", href: "#investimento", icon: Shield },
      { label: "FAQ", href: "#faq", icon: Type },
      { label: "Inscrição", href: "#inscricao", icon: MessageCircle }
    ],
    []
  );
  const mobileNavItems = useMemo(
    () =>
      navItems.filter((item) =>
        ["#para-quem-e", "#agenda", "#processo", "#inscricao"].includes(item.href)
      ),
    [navItems]
  );
  const [activeSection, setActiveSection] = useState(mobileNavItems[0]?.href ?? "");

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(href);
  };

  useEffect(() => {
    const sections = mobileNavItems
      .map((item) => {
        const element = document.querySelector(item.href);
        return element ? { id: item.href, element } : null;
      })
      .filter(Boolean) as { id: string; element: Element }[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          const matched = sections.find((section) => section.element === visibleEntry.target);
          if (matched) {
            setActiveSection(matched.id);
          }
        }
      },
      {
        threshold: 0.25,
        rootMargin: "-40% 0px -45% 0px"
      }
    );

    sections.forEach(({ element }) => observer.observe(element));

    return () => observer.disconnect();
  }, [mobileNavItems]);

  useEffect(() => {
    const handleScroll = () => setNavExpanded(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-foreground">
      {/* Navegação lateral fixa */}
      <aside
        className={`hidden lg:flex flex-col gap-2 fixed top-24 left-4 z-40 rounded-2xl border border-border/70 bg-white shadow-lg transition-[width] duration-300 ${
          navExpanded ? "w-64" : "w-12 items-center"
        }`}
      >
        <button
          onClick={() => setNavExpanded((prev) => !prev)}
          className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          {navExpanded ? <ChevronsLeft className="w-5 h-5" /> : <ChevronsRight className="w-5 h-5" />}
          {navExpanded && <span>Menu</span>}
        </button>
        <div className="px-2 pb-3 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`group flex items-center gap-3 w-full text-left px-3 py-2 rounded-xl border border-transparent hover:border-primary/40 hover:bg-primary/10 transition-all ${
                navExpanded ? "justify-start" : "justify-center"
              }`}
            >
              <item.icon className="w-5 h-5 text-primary" />
              {navExpanded && <span className="text-sm font-semibold text-foreground">{item.label}</span>}
            </button>
          ))}
        </div>
      </aside>

      {/* Navegação móvel sticky */}
      <div className="lg:hidden sticky top-0 z-40 border-b border-border/60 bg-[#f7f4ef]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f7f4ef]/80">
        <div className="container py-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            {mobileNavItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors shrink-0 ${
                  activeSection === item.href
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-white/90 text-foreground border-border hover:border-primary/50"
                }`}
                aria-pressed={activeSection === item.href}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-border/60 bg-[#f4f0ea]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-sm font-semibold text-primary bg-white px-4 py-2 rounded-full border border-primary/25 shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>1ª turma presencial • Maringá • Dezembro/2025 • 10 vagas</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Sistema Operacional — IA na prática
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Construa sua 1ª ferramenta de IA para o seu negócio em 4 encontros presenciais — mesmo sem programar.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Para empresários que já ouviram falar de IA (até pagam o ChatGPT), mas ainda não têm nenhuma ferramenta rodando na operação.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { icon: MapPin, label: "Presencial em Maringá" },
                  { icon: Users, label: "Turma reduzida, até 10 empresários" },
                  { icon: Calendar, label: "4 encontros e você sai com solução funcionando" }
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
                <p className="text-sm text-muted-foreground">Início em 06/12 • Vagas limitadas</p>
              </div>

              <Card className="bg-white border-border/70">
                <CardContent className="p-6 flex items-start gap-3">
                  <Target className="w-6 h-6 text-primary mt-1" />
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">Não é “introdução à IA”.</p>
                    <p className="text-muted-foreground">
                      É um treinamento prático para criar uma ferramenta real que resolva um problema da sua empresa em 4 encontros.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="overflow-hidden border-none shadow-lg bg-linear-to-br from-white to-primary/10">
                <CardContent className="p-0">
                  <div className="relative aspect-video flex items-center justify-center bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_55%)]">
                    <div className="absolute inset-0 border border-white/60 rounded-xl m-6" />
                    <Button
                      variant="secondary"
                      size="lg"
                      className="rounded-full bg-white/90 text-primary border border-primary/30 hover:-translate-y-0.5 transition-transform"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Ver prévia de 2 min
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-primary" />
                  <span>Mostro o passo a passo e exemplos reais.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Turma pequena para ajustar cada caso.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

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
            {[
              { icon: Type, title: "Uso IA só para gerar texto", desc: "Posts, e-mails, respostas prontas… mas nenhuma automação rodando." },
              { icon: CreditCard, title: "Pago ChatGPT, mas nada roda", desc: "Assinatura em dia e zero ferramenta conectada à operação." },
              { icon: Compass, title: "Quero usar, mas não sei por onde começar", desc: "Não tem método, passo a passo ou alguém puxando a mão." }
            ].map((item) => (
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
              Este treinamento foi criado para quem já entendeu que IA é inevitável, mas ainda não encontrou método para aplicar dentro da própria empresa.
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
            {[
              { icon: Briefcase, title: "Empresários e gestores", desc: "Pequenas e médias empresas que precisam ganhar eficiência." },
              { icon: ClipboardCheck, title: "Quem está sobrecarregado", desc: "Operação, retrabalho, planilhas demais e nada automatizado." },
              { icon: Sparkles, title: "Já testou IA, mas nada roda", desc: "Quer transformar ideia em sistema real, sem depender de programador." }
            ].map((item) => (
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
            {[
              { icon: Zap, text: "Pelo menos uma ferramenta de IA funcionando na sua empresa (geralmente mais de uma)." },
              { icon: Target, text: "Método simples para transformar qualquer problema recorrente em fluxo automatizável." },
              { icon: CheckCircle2, text: 'Capacidade de usar IA como "motor invisível" atrás de atendimentos, relatórios e decisões.' },
              { icon: Users, text: "Roteiro para treinar a equipe e implementar sem travar ninguém." },
              { icon: MapPin, text: "Lista clara dos próximos processos candidatos a virar solução com IA." },
              { icon: Calendar, text: "Agenda de evolução para continuar construindo depois da turma." }
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

          <div className="mt-6 flex justify-center">
            <Button variant="outline" size="lg" className="px-6" onClick={scrollToForm}>
              Quero sair dessa turma com uma solução pronta
            </Button>
          </div>
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
            {[
              {
                title: "Vendas e marketing",
                items: [
                  "Funil inteligente que qualifica leads e faz as perguntas certas.",
                  "Follow-up automático com respostas personalizadas.",
                  "Qualificação de leads com critérios claros para o time comercial."
                ]
              },
              {
                title: "Operação",
                items: [
                  "Checklist inteligente que orienta o passo a passo e registra tudo no final.",
                  "Consolidação automática de informações que hoje estão espalhadas.",
                  "Relatórios que se geram sozinhos a partir do que sua equipe envia."
                ]
              },
              {
                title: "Atendimento",
                items: [
                  "Bot assistido por IA para dúvidas frequentes e coleta de informações.",
                  "Triagem de demanda que encaminha para a pessoa certa.",
                  "Respostas frequentes com histórico e registro automático."
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
      <section id="agenda" className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Agenda da 1ª turma – Dezembro/2025</h2>
            <p className="text-muted-foreground">Todas as sessões são presenciais e gravadas.</p>
          </div>

          <div className="mt-12 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-5">
              {encontros.map((encontro) => (
                <div key={encontro.num} className="relative pl-16 md:pl-24">
                  <div className="absolute left-4 md:left-6 top-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-sm">
                    {encontro.num}
                  </div>
                  <Card className="bg-[#f9f7f3] border-border/80">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{encontro.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{encontro.time}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary mt-1" />
                        <span>{encontro.location}</span>
                      </div>
                      <p className="text-sm text-foreground font-semibold">
                        Encontro {encontro.num}: foco em construir e evoluir sua solução.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <Card className="bg-white border-border/70">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <p className="font-semibold text-foreground">Todos os encontros são gravados.</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Se precisar faltar em algum, você acompanha depois e continua a construção sem ficar para trás.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#f9f7f3] border-border/70">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <p className="font-semibold text-foreground">E se eu não acompanhar o ritmo?</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Turma reduzida, revisões constantes e suporte durante os encontros para garantir que a sua ferramenta saia do papel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como funcionam os 4 encontros */}
      <section id="processo" className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Como funcionam os 4 encontros</h2>
            <p className="text-muted-foreground">Práticos, diretos e com acompanhamento real para cada negócio.</p>
            <p className="text-primary font-semibold">Turma reduzida: máximo de 10 participantes.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-3">
            {[
              "Mapear problema",
              "Construir 1ª versão",
              "Integrar e automatizar",
              "Implantar e escalar"
            ].map((step, idx) => (
              <div
                key={step}
                className="flex items-center gap-2 rounded-xl bg-white border border-primary/40 px-4 py-3 text-sm font-semibold"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <span>{step}</span>
              </div>
            ))}
          </div>

          <Roadmap steps={encontros} onCtaClick={scrollToForm} />

          <div className="mt-10">
            <Accordion type="single" collapsible className="space-y-4">
              {encontros.map((encontro) => (
                <AccordionItem
                  key={encontro.num}
                  value={`encontro-${encontro.num}`}
                  className="overflow-hidden rounded-xl border-2 border-border/80 bg-white transition-all duration-300 data-[state=open]:border-primary/60 data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="px-6 py-5 md:px-8 md:py-6 hover:no-underline">
                    <div className="flex w-full items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-lg w-12 h-12 md:w-14 md:h-14 flex items-center justify-center font-bold text-xl md:text-2xl shrink-0">
                        {encontro.num}
                      </div>
                      <div className="flex-1 text-left space-y-2">
                        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-semibold text-foreground/80">{`${encontro.date} – ${encontro.time}`}</span>
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
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
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
      <section id="faq" className="py-16 md:py-24 border-b border-border/60 bg-white">
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

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-base py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Quero garantir minha vaga na 1ª turma
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

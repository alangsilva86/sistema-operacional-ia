import {
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  CreditCard,
  MapPin,
  MessageCircle,
  Shield,
  Sparkles,
  Target,
  Type,
  Users,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Encontro = {
  num: number;
  date: string;
  time: string;
  location: string;
  title: string;
  points: string[];
  takeaway: string;
};

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
  image?: string;
};

export const navItems: NavItem[] = [
  { label: "Para quem é", href: "#para-quem-e", icon: Users },
  { label: "O que você leva", href: "#beneficios", icon: Zap },
  { label: "Exemplos", href: "#exemplos", icon: Sparkles },
  { label: "Agenda", href: "#agenda", icon: Calendar },
  { label: "Como funciona", href: "#processo", icon: Brain },
  { label: "Investimento", href: "#investimento", icon: Shield },
  { label: "FAQ", href: "#faq", icon: Type },
  { label: "Inscrição", href: "#inscricao", icon: MessageCircle }
];

export const mobileNavHrefs = ["#para-quem-e", "#agenda", "#processo", "#inscricao"];

export const heroHighlights = [
  { icon: MapPin, label: "Presencial em Maringá" },
  { icon: Users, label: "Turma reduzida, até 10 empresários" },
  { icon: Calendar, label: "4 encontros e você sai com solução funcionando" }
];

export const gapPainPoints = [
  { icon: Type, title: "Uso IA só para gerar texto", desc: "Posts, e-mails, respostas prontas… mas nenhuma automação rodando." },
  { icon: CreditCard, title: "Pago ChatGPT, mas nada roda", desc: "Assinatura em dia e zero ferramenta conectada à operação." },
  { icon: Compass, title: "Quero usar, mas não sei por onde começar", desc: "Não tem método, passo a passo ou alguém puxando a mão." }
];

export const paraQuemItems = [
  { icon: Briefcase, title: "Empresários e gestores", desc: "Pequenas e médias empresas que precisam ganhar eficiência." },
  { icon: ClipboardCheck, title: "Quem está sobrecarregado", desc: "Operação, retrabalho, planilhas demais e nada automatizado." },
  { icon: Sparkles, title: "Já testou IA, mas nada roda", desc: "Quer transformar ideia em sistema real, sem depender de programador." }
];

export const benefits = [
  { icon: Zap, text: "Pelo menos uma ferramenta de IA funcionando na sua empresa (geralmente mais de uma)." },
  { icon: Target, text: "Método simples para transformar qualquer problema recorrente em fluxo automatizável." },
  { icon: CheckCircle2, text: 'Capacidade de usar IA como "motor invisível" atrás de atendimentos, relatórios e decisões.' },
  { icon: Users, text: "Roteiro para treinar a equipe e implementar sem travar ninguém." },
  { icon: MapPin, text: "Lista clara dos próximos processos candidatos a virar solução com IA." },
  { icon: Calendar, text: "Agenda de evolução para continuar construindo depois da turma." }
];

export const exampleSections = [
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
];

export const processoSteps = ["Mapear problema", "Construir 1ª versão", "Integrar e automatizar", "Implantar e escalar"];

export const faqHighlights = [
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
];

export const encontros: Encontro[] = [
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

export const testimonials: Testimonial[] = [
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

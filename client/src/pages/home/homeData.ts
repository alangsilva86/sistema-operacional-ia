import { AlertTriangle, CheckCircle2, ClipboardCheck, CreditCard, HelpCircle, MessageCircle, Shield, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Encontro = {
  num: number;
  date: string;
  time: string;
  location: string;
  title: string;
  points: string[];
  takeaway: string;
};

export const navItems: NavItem[] = [
  { label: "Para quem", href: "#para-quem", icon: Users },
  { label: "Dor & realidade", href: "#dor-realidade", icon: AlertTriangle },
  { label: "Resultados", href: "#resultado", icon: Zap },
  { label: "Sobre", href: "#sobre-alan", icon: Users },
  { label: "Prova social", href: "#prova-social", icon: MessageCircle },
  { label: "Oferta", href: "#oferta", icon: CreditCard },
  { label: "Segurança", href: "#seguranca", icon: Shield },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
  { label: "Inscrição", href: "#cta-final", icon: ClipboardCheck }
];

export const mobileNavHrefs = ["#para-quem", "#dor-realidade", "#resultado", "#oferta", "#cta-final"];

export const heroBullets = [
  "Feito para empreendedores, donos de pequenas e médias empresas, gestores, correspondentes e consultores.",
  "Foco em processo e execução, não em hype.",
  "Baseado em casos reais das operações Momentum Aceleradora de Negócios."
];

export const heroMetrics = [
  { label: "10–20h/mês", desc: "Horas salvas quando IA vira rotina." },
  { label: "Serviços • Comércio • Fintech • Agências • Crédito", desc: "Setores que já aplicaram." },
  { label: "Execução", desc: "Foco em colocar para rodar, não teoria." }
];

export const audienceCards = [
  {
    title: "Donos de PMEs & gestores",
    desc: "Quem vive apagando incêndio e precisa de rotinas claras, checklists e processos com IA integrada."
  },
  {
    title: "Empreendedores de serviços",
    desc: "Consultorias, agências, especialistas e negócios B2B que precisam organizar entrega, atendimento e bastidor com IA."
  },
  {
    title: "Corbans & promotoras",
    desc: "Operações de crédito consignado e financeiro que querem IA para simulação, argumentos, follow-up e rotina comercial."
  }
];

export const painPoints = [
  "Conhecimento perdido e retrabalho constante.",
  "Ferramentas assinadas e pouco usadas.",
  "Equipe sem padrão e sem orientação.",
  "Operação travada no improviso e na memória."
];

export const methodShifts = [
  "Base de Conhecimento centraliza com IA.",
  "Fluxos e processos claros para todos.",
  "Biblioteca organizada de prompts por contexto.",
  "Ferramentas com IA integrada ao seu jeito de trabalhar.",
  "Sistema que você e seu time conseguem criar e manter."
];

export const processoSteps = ["Mapear problema", "Construir 1ª versão", "Integrar e automatizar", "Implantar e escalar"];

export const capabilities = [
  {
    title: "Criar e treinar sua IA com sua base de conhecimento própria",
    desc: "Você e sua equipe com acesso ao conhecimento TOTAL do seu negócio o tempo todo, treine mais rápido, acabe com a dependência por você."
  },
  {
    title: "Desenhar fluxos completos com IA",
    desc: "Lead → atendimento → follow-up → fechamento → pós-venda, com IA em cada etapa certa."
  },
  {
    title: "Criar prompts reutilizáveis",
    desc: "Biblioteca estruturada por objetivo, canal, produto e persona, pronta para ser reaplicada."
  },
  {
    title: "Rodar rotinas diárias com IA",
    desc: "Checklists, cadências e scripts para que IA entre todo dia, sem fricção."
  },
  {
    title: "Integrar IA no seu time",
    desc: "Acordos claros de uso, revisão e limite, para ninguém virar refém da ferramenta."
  }
];

export const proofVideos = [
  { title: "Depoimento 1", subtitle: "Empreendedor • Serviços" },
  { title: "Depoimento 2", subtitle: "Gestor • Operação" },
  { title: "Depoimento 3", subtitle: "Corban • Crédito" }
];

export const proofPrints = [
  "Base de conhecimento que treina equipe.",
  "Simulação automatizada reduzindo tempo manual.",
  "Rotinas organizadas e menos retrabalho."
];

export const offerBullets = ["4 encontros presenciais", "Grupo reduzido (máx. 10 participantes)", "Materiais, fluxos e modelos incluídos"];

export const securityBullets = [
  "Suporte online entre encontros para dúvidas.",
  "Materiais para revisar depois da turma.",
  "Aplicação imediata em casos reais do seu negócio.",
  "Método testado em operações reais.",
  "Bônus: Mentoria individual de acompanhamento e implementação pós curso 1hr."
];

export const faqItems: FAQItem[] = [
  {
    question: "E se eu não entender nada de IA?",
    answer:
      "Começamos a partir da sua realidade de negócio, não da teoria técnica. Você vai aprender o necessário para conversar bem com a IA e encaixá-la na rotina."
  },
  {
    question: "Serve para negócio pequeno, só eu ou eu + 1 pessoa?",
    answer: "Sim. Negócios pequenos sentem mais rápido o ganho de tempo e clareza quando organizam IA por fluxo e rotina."
  },
  {
    question: "Vai ter material de apoio?",
    answer: "Você terá acesso as gravções, fluxos, checklists, prompts-base e modelos para seguir usando após a turma."
  }
];

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

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, MapPin, CheckCircle2, Users, Target, Zap, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    cargo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Formulário enviado com sucesso! Em breve entraremos em contato.");
    setFormData({ nome: "", email: "", whatsapp: "", empresa: "", cargo: "" });
  };

  const scrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-5 py-2.5 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4 border border-primary/20 shadow-sm">
              Presencial em Maringá • Turma limitada a 10 pessoas
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              Sistema Operacional – IA NA PRÁTICA
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground font-medium leading-relaxed">
              Em 4 encontros presenciais, você vai construir ferramentas reais e úteis para o seu negócio usando IA.
            </p>
            
            <p className="text-xl md:text-2xl font-bold text-foreground">
              Mesmo sem saber programar.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-card px-5 py-3 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Presencial em Maringá</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-5 py-3 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-5 h-5 text-primary" />
                <span>Turma limitada a 10 pessoas</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-5 py-3 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <Calendar className="w-5 h-5 text-primary" />
                <span>4 encontros</span>
              </div>
            </div>

            <div className="pt-6">
              <Button size="lg" className="text-xl px-12 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" onClick={scrollToForm}>
                Garantir minha vaga na 1ª turma
              </Button>
            </div>

            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="font-semibold text-foreground mb-2">
                      Não é um curso para "entender IA".
                    </p>
                    <p className="text-muted-foreground">
                      É um treinamento para criar soluções <strong>reais para o seu negócio com IA, rápido e de forma simples.</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight">
              Agenda da 1ª turma – Dezembro/2025
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { num: 1, data: "06/12", hora: "10h00", local: "Atrium – Escritório Próspera | Fatorcard" },
                { num: 2, data: "13/12", hora: "10h00", local: "Atrium – Escritório Momentum | Acessus" },
                { num: 3, data: "18/12", hora: "18h30", local: "Atrium – Escritório Próspera | Fatorcard" },
                { num: 4, data: "20/12", hora: "10h00", local: "Atrium – Escritório Momentum | Acessus" }
              ].map((encontro) => (
                <Card key={encontro.num} className="hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {encontro.num}
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-semibold">{encontro.data}</span>
                          <Clock className="w-4 h-4 text-primary ml-2" />
                          <span className="font-semibold">{encontro.hora}</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{encontro.local}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">
                  Todos os encontros serão gravados e você terá acesso às gravações e a todo o material do curso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Para quem é Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
              Para quem é este treinamento
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Este programa foi desenhado para você que:
            </p>
            
            <div className="space-y-4">
              {[
                "É empresário, dono ou gestor de pequena ou média empresa.",
                "Está sobrecarregado com operação, planilhas, retrabalho e tarefas repetitivas.",
                "Já ouviu falar de IA, talvez até use o ChatGPT, mas não conseguiu transformar isso em ferramenta de verdade na sua empresa.",
                "Quer automatizar processos, organizar informação, melhorar vendas ou atendimento, mas não quer depender de programador para cada ajuste.",
                "Entende que quem souber construir soluções com IA terá uma vantagem enorme nos próximos anos."
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-muted border-border">
              <CardContent className="p-6 text-center">
                <p className="text-foreground font-medium">
                  Se você está buscando teoria, certificado bonito e pouca prática, este treinamento não é para você.
                </p>
                <p className="text-lg font-bold text-primary mt-2">
                  Aqui é ferramenta, processo e resultado aplicado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O Problema Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
              O problema hoje não é falta de IA. É não saber usar de forma útil.
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground">
                A realidade de quem vive empresa é mais ou menos assim:
              </p>
              
              <ul className="space-y-3">
                {[
                  "E-mails, mensagens e demandas se acumulando.",
                  "Processos importantes rodando em planilhas improvisadas.",
                  "Equipe gastando horas com tarefas que poderiam ser automatizadas.",
                  "Ideias boas de melhoria… paradas, porque sempre \"falta alguém de tecnologia\" para executar."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Card className="bg-card border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground italic">
                    "Um dia vamos implementar alguma coisa…"
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-4 pt-4">
                <p className="text-lg text-foreground">
                  O que falta não é mais um conteúdo explicando "o que é IA".
                </p>
                <p className="text-xl font-bold text-primary">
                  O que falta é saber usar IA para construir soluções específicas para o seu negócio.
                </p>
                <p className="text-lg text-foreground">
                  É exatamente isso que você vai aprender e praticar neste treinamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai ter Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
              O que você vai ter ao final dos 4 encontros
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Ao concluir a turma, você:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Zap,
                  text: "Terá pelo menos uma ferramenta funcional criada para a sua empresa (e, na prática, muitas vezes mais de uma)."
                },
                {
                  icon: Target,
                  text: "Vai saber pegar qualquer problema recorrente (demanda, relatório, processo, atendimento) e transformar em um fluxo estruturado, pronto para ser automatizado."
                },
                {
                  icon: CheckCircle2,
                  text: "Vai entender como usar IA como \"motor invisível\" por trás de sistemas, formulários, bots, relatórios e tomadas de decisão."
                },
                {
                  icon: Users,
                  text: "Vai ter um método replicável, para criar novas soluções sempre que precisar, sem depender totalmente de terceiros."
                },
                {
                  icon: MapPin,
                  text: "Vai sair com um plano claro de implementação na sua operação e de treinamento da sua equipe."
                }
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-foreground pt-2">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <p className="text-lg mb-2">
                  Não é um "curso para abrir a cabeça".
                </p>
                <p className="text-2xl font-bold">
                  É um processo para colocar solução de pé.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exemplos do que você poderá construir */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
              Exemplos do que você poderá construir
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Algumas possibilidades reais, que você vai ser capaz de criar depois do treinamento:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Para quem vende serviços ou produtos",
                  items: [
                    "Funil de atendimento inteligente que qualifica leads, faz perguntas certas e organiza respostas.",
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
                    "Ferramenta para organizar demandas, prazos e responsáveis sem depender de dezenas de planilhas soltas."
                  ]
                }
              ].map((categoria, idx) => (
                <Card key={idx} className="hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">{categoria.title}</h3>
                    <ul className="space-y-3">
                      {categoria.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-card border-2 border-primary">
              <CardContent className="p-6 text-center">
                <p className="text-lg text-foreground font-medium">
                  Se existe um processo, repetição ou decisão que segue sempre a mesma lógica,{" "}
                  <span className="text-primary font-bold">provavelmente dá para transformar em ferramenta com IA.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Intermediário */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Pronto para transformar IA em soluções reais?
            </h3>
            <Button size="lg" variant="secondary" className="text-xl px-12 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" onClick={scrollToForm}>
              Quero participar da 1ª turma
            </Button>
          </div>
        </div>
      </section>

      {/* Como funcionam os 4 encontros */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
              Como funcionam os 4 encontros
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-4">
              Cada encontro é prático, direto e focado em construção.
            </p>
            <p className="text-center text-primary font-semibold text-lg mb-12">
              Turma reduzida, máximo de 10 participantes, para garantir atenção real a cada negócio.
            </p>
            
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
                  takeaway:
                    "Seu problema principal mapeado e o desenho da ferramenta que vamos construir juntos."
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
                  takeaway:
                    "Sua solução ligada à rotina real da empresa, com automação mínima já rodando."
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
                  className="overflow-hidden rounded-xl border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
                >
                  <AccordionTrigger className="px-6 py-5 md:px-8 md:py-6 hover:no-underline">
                    <div className="flex w-full items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                        {encontro.num}
                      </div>
                      <div className="flex-1 text-left space-y-2">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-semibold text-foreground/80">{encontro.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-foreground/80">{encontro.location}</span>
                          </div>
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold leading-snug text-foreground">
                          {encontro.title}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 md:px-8">
                    <ul className="space-y-2 mb-6">
                      {encontro.points.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
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
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight">
              Turma pequena, acompanhamento real
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-3 bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-2xl font-bold">Máximo de 10 pessoas na turma.</p>
                  <p className="mt-2 text-primary-foreground/90">
                    Isso garante tempo para olhar o caso de cada participante, ajudar na construção e ajustar detalhes.
                  </p>
                </CardContent>
              </Card>

              {[
                {
                  title: "Dinâmica do treinamento",
                  items: [
                    "Parte rápida de explicação.",
                    "Restante do tempo focado em construção, revisão e melhoria.",
                    "Você não vai ficar só \"assistindo\": vai construir junto, na hora."
                  ]
                },
                {
                  title: "Suporte individual",
                  items: [
                    "Se você travar em qualquer parte, não vai \"ficar para trás\".",
                    "O objetivo é fazer você sair com solução real, não com anotação bonita."
                  ]
                }
              ].map((item, idx) => (
                <Card key={idx} className={idx === 0 ? "md:col-span-2" : ""}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((subitem, subidx) => (
                        <li key={subidx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{subitem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre quem vai te conduzir */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight">
              Sobre quem vai te conduzir
            </h2>
            
            <Card className="border-2">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Você vai ser guiado por alguém que:
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Usa IA diariamente para resolver problemas concretos em operações reais (fintech, crédito, consultoria, automação, crescimento de negócios).",
                    "Constrói fluxos, sistemas e automações que estão rodando hoje em empresas de verdade, atendendo times comerciais, operações financeiras e equipes de atendimento.",
                    "Tem formação prática em operação, estratégia e tecnologia, conectando visão de negócio com execução.",
                    "Aprende no campo de batalha, não só em livro, e traz isso de forma didática e direta para sala."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <p className="text-lg font-semibold text-foreground text-center">
                      "Se não resolve um problema real de negócio, não entra no treinamento."
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight">
              Investimento, condições e retorno
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2 border-primary">
                <CardContent className="p-8 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Parcelado</p>
                  <p className="text-4xl font-bold text-primary mb-2">10x de R$ 250,00</p>
                  <p className="text-sm text-muted-foreground">no cartão</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="p-8 text-center">
                  <p className="text-sm text-muted-foreground mb-2">À vista</p>
                  <p className="text-4xl font-bold text-primary mb-2">R$ 1.997,00</p>
                  <p className="text-sm text-muted-foreground">pagamento único</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Você está investindo para:</h3>
                <ul className="space-y-3">
                  {[
                    "Economizar horas de trabalho manual todos os meses;",
                    "Reduzir retrabalho e erro;",
                    "Ganhar clareza na operação;",
                    "Destravar melhorias que hoje não saem do papel porque \"falta tempo\" ou \"falta alguém técnico\"."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Retorno do investimento</h3>
                <p className="mb-4">
                  Um único processo automatizado que economize, por exemplo, 10 horas mensais suas ou da sua equipe, já começa a <strong>pagar o investimento em poucos meses</strong>.
                </p>
                <p className="text-lg">
                  Se a hora do seu trabalho vale R$ 100,00, essas 10 horas já representam <strong className="text-2xl">R$ 1.000,00 por mês</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-primary">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <Shield className="w-16 h-16 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Garantia de satisfação
                  </h2>
                  
                  <div className="space-y-4 text-lg text-muted-foreground max-w-2xl">
                    <p>
                      Você participa, aprende, constrói, testa.
                    </p>
                    <p>
                      Se até o fim do segundo encontro você sentir que o treinamento <strong className="text-foreground">não faz sentido para você</strong>, que não está sendo útil para a sua realidade,
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      basta me avisar e eu devolvo 100% do seu dinheiro.
                    </p>
                    <p>
                      Sem discussão, sem letra miúda.
                    </p>
                  </div>

                  <Card className="bg-muted w-full">
                    <CardContent className="p-6">
                      <p className="text-foreground font-medium text-center">
                        Prefiro ter <strong className="text-primary">10 pessoas alinhadas e aplicando</strong> do que alguém na turma só por estar ali.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O que está incluído */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight">
              O que está incluído
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "4 encontros presenciais",
                  description: "Sessões práticas e focadas em construção de soluções reais"
                },
                {
                  icon: CheckCircle2,
                  title: "Gravações completas",
                  description: "Acesso a todas as gravações dos encontros para rever quando quiser"
                },
                {
                  icon: Target,
                  title: "Material completo",
                  description: "Todo o material do curso disponível para download"
                },
                {
                  icon: Zap,
                  title: "Modelos e estruturas",
                  description: "Modelos de prompts e estruturas para reaplicar em outros problemas"
                },
                {
                  icon: MapPin,
                  title: "Blueprint do método",
                  description: "Método completo para você continuar construindo novas ferramentas"
                }
              ].map((item, idx) => (
                <Card key={idx} className="hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que você precisa ter */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight">
              O que você precisa ter para participar
            </h2>
            
            <Card className="border-2">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Para aproveitar de verdade o treinamento, é necessário:
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Notebook próprio para usar nos encontros.",
                    "E-mail ativo.",
                    "Cartão de crédito (para testes e integrações, quando necessário).",
                    "Conta paga no ChatGPT (as outras ferramentas que utilizarmos serão em período gratuito ou plano básico)."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <p className="text-lg font-semibold text-foreground mb-2">
                      Não é necessário saber programar.
                    </p>
                    <p className="text-muted-foreground">
                      O foco é: você saber <strong>pensar, estruturar e construir</strong>.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight">
              Perguntas frequentes
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  E se eu não tiver nenhuma ideia clara do que quero fazer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No primeiro encontro, vamos mapear e escolher <strong>o problema certo</strong> para virar ferramenta. Você não vem com tudo pronto, vem com disposição para resolver algo real.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Sou funcionário, não dono. Faz sentido para mim?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim, se você tem espaço de influência no processo (coordenação, gestão, liderança, operação chave). Quem traz solução pronta para dentro da empresa sobe de nível.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Nunca usei IA direito, vou acompanhar?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Vai. Vamos partir do básico necessário, sempre com foco em aplicação. O ritmo é prático e você terá suporte durante os encontros.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Posso mandar alguém da minha equipe no meu lugar?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Pode, desde que essa pessoa esteja no dia a dia da operação e tenha liberdade para propor mudanças e aplicar o que for construído.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section id="inscricao" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Garanta sua vaga na 1ª turma
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário abaixo e entraremos em contato para finalizar sua inscrição.
              </p>
            </div>

            <Card className="border-2 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <Label htmlFor="nome" className="text-base font-semibold">
                      Nome completo *
                    </Label>
                    <Input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="h-14 text-base"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base font-semibold">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-14 text-base"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="whatsapp" className="text-base font-semibold">
                      WhatsApp *
                    </Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="h-14 text-base"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="empresa" className="text-base font-semibold">
                      Empresa
                    </Label>
                    <Input
                      id="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="h-14 text-base"
                      placeholder="Nome da sua empresa (opcional)"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="cargo" className="text-base font-semibold">
                      Cargo/Função
                    </Label>
                    <Input
                      id="cargo"
                      type="text"
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      className="h-14 text-base"
                      placeholder="Seu cargo ou função (opcional)"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-xl py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    Quero participar da 1ª turma
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Ao enviar este formulário, você concorda em receber informações sobre o treinamento.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Sistema Operacional – IA NA PRÁTICA
            </h2>
            
            <div className="space-y-4 text-lg md:text-xl">
              <p className="font-semibold">
                Se você sente que:
              </p>
              <ul className="space-y-2 max-w-2xl mx-auto text-left">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Já passou da hora de usar IA de forma útil na sua empresa,</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Não quer ficar preso no modelo antigo,</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>E entende que <strong>ter a capacidade de construir suas próprias ferramentas</strong> é uma vantagem enorme…</span>
                </li>
              </ul>
              <p className="font-bold text-2xl pt-4">
                Então este treinamento é para você.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-6 py-3 rounded-lg">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Presencial em Maringá</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-6 py-3 rounded-lg">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Apenas 10 participantes</span>
              </div>
            </div>

            <div className="pt-6">
              <Button size="lg" variant="secondary" className="text-xl px-12 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" onClick={scrollToForm}>
                Garantir minha vaga agora
              </Button>
            </div>

            <div className="pt-8 space-y-2 text-lg">
              <p className="font-semibold">
                Você entra com um problema real.
              </p>
              <p className="font-bold text-xl">
                Sai com solução funcionando e com o conhecimento para construir as próximas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Fixo Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-4 shadow-2xl md:hidden z-50 border-t-2 border-primary-foreground/20">
        <Button size="lg" variant="secondary" className="w-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300" onClick={scrollToForm}>
          Garantir minha vaga
        </Button>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t">
        <div className="container">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Sistema Operacional - Alan Silva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

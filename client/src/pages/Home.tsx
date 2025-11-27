import { useMemo, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle2, MessageCircle } from "lucide-react";

import { trackEvent, useTrackView } from "@/lib/analytics";
import { HeroSection } from "./home/components/HeroSection";
import { InscricaoForm, type InscricaoFormData } from "./home/components/InscricaoForm";
import { SideNav } from "./home/components/SideNav";
import {
  audienceCards,
  capabilities,
  faqItems,
  methodShifts,
  mobileNavHrefs,
  offerBullets,
  painPoints,
  proofPrints,
  proofVideos,
  securityBullets
} from "./home/homeData";
import { useHomeNavigation } from "./home/useHomeNavigation";

export default function Home() {
  const [formData, setFormData] = useState<InscricaoFormData>({
    nome: "",
    email: "",
    whatsapp: "",
    perfil: "",
    caos: ""
  });

  useTrackView("view_lp_workshop");

  const { navItems: navConfig, mobileNavItems, activeSection, navExpanded, toggleNavExpanded, handleNavClick } =
    useHomeNavigation();

  const scrollToId = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePrimaryHero = () => {
    trackEvent("click_cta_hero");
    scrollToId("#cta-final");
  };

  const handleSecondaryHero = () => {
    trackEvent("click_cta_hero_secondary");
    scrollToId("#resultado");
  };

  const handleOferta = () => {
    trackEvent("click_cta-oferta");
    scrollToId("#cta-final");
  };

  const handleSobreAlan = () => {
    trackEvent("click_cta-sobre-alan");
    scrollToId("#sobre-alan");
  };

  const handleFinalCta = () => {
    trackEvent("click_cta-final");
    scrollToId("#cta-final");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trackEvent("submit_form_lead", {
      nome: formData.nome,
      email: formData.email,
      whatsapp: formData.whatsapp,
      perfil: formData.perfil,
      caos: formData.caos
    });
    toast.success("Pronto. Você está na pré-lista. Vamos falar com você no WhatsApp para confirmar pagamento e vaga.");
    setFormData({ nome: "", email: "", whatsapp: "", perfil: "", caos: "" });
  };

  const safeMobileNav = useMemo(
    () =>
      mobileNavItems?.length
        ? mobileNavItems
        : (mobileNavHrefs
            .map((href) => navConfig.find((n) => n.href === href))
            .filter(Boolean) as typeof navConfig),
    [mobileNavItems, navConfig]
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SideNav
        navItems={navConfig}
        mobileNavItems={safeMobileNav}
        activeSection={activeSection}
        navExpanded={navExpanded}
        onToggle={toggleNavExpanded}
        onNavClick={(href) => {
          handleNavClick(href);
        }}
      />

      <HeroSection onPrimaryClick={handlePrimaryHero} onSecondaryClick={handleSecondaryHero} />

      <section id="para-quem" className="py-16 md:py-24 border-b border-border/60 bg-background">
        <div className="container space-y-10">
          <div className="space-y-3 text-center max-w-4xl mx-auto">
            <Badge className="bg-[#1f1b2d] text-white border border-border uppercase tracking-[0.18em]">
              Para quem é
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Para quem este workshop foi criado</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {audienceCards.map((item) => (
              <Card key={item.title} className="bg-[#111118] border border-border/70">
                <CardContent className="p-6 space-y-2">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="dor-realidade" className="py-16 md:py-24 border-b border-border/60 bg-background">
        <div className="container grid lg:grid-cols-2 gap-8">
          <Card className="bg-[#111118] border border-border/70">
            <CardContent className="p-6 space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">
                Se a IA virou só mais uma aba aberta… isso tem custo.
              </h2>
              <ul className="space-y-2">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                Isso custa dinheiro, tempo e decisões ruins tomadas no escuro.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#13131c] border border-border/70">
            <CardContent className="p-6 space-y-3">
              <h3 className="font-heading text-xl font-semibold text-white">O que muda com método</h3>
              <ul className="space-y-2">
                {methodShifts.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="resultado" className="py-16 md:py-24 border-b border-border/60 bg-background">
        <div className="container space-y-10">
          <div className="space-y-3 text-center max-w-4xl mx-auto">
            <Badge className="bg-[#1f1b2d] text-white border border-border uppercase tracking-[0.18em]">
              Resultados
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Ao final da turma, você será capaz de…</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <Card key={cap.title} className="bg-[#111118] border border-border/70">
                <CardContent className="p-6 space-y-2">
                  <p className="text-lg font-semibold text-white">{cap.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-alan" className="py-16 md:py-24 border-b border-border/60 bg-background">
        <div className="container space-y-10">
          <div className="space-y-3 max-w-4xl">
            <Badge className="bg-[#1f1b2d] text-white border border-border uppercase tracking-[0.18em]">
              Facilitador
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Quem vai te guiar</h2>
          </div>

          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 items-start">
            <Card className="bg-[#111118] border border-border/70">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <Avatar className="h-20 w-20 border border-border/80 bg-[#1a1a24]">
                    <AvatarImage src="/alan.jpeg" alt="Alan Silva" className="object-cover" />
                    <AvatarFallback className="bg-primary/20 text-primary font-semibold text-xl">AS</AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-white">Alan Silva</p>
                  <p className="text-sm text-muted-foreground">Founder Momentum Aceleradora • Método P → P → S</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                  {["Próspera Pagamentos", "Flycost", "Fatorcard", "Opta", "Acessus", "Dafnee Cosméticos", "Momentum"].map(
                    (logo) => (
                      <span key={logo} className="rounded-full border border-border/70 px-3 py-1 bg-[#1a1a24]">
                        {logo}
                      </span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#13131c] border border-border/70">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  Empreendedor há quase 20 anos. Fundador da Momentum Aceleradora. Criador do método P → P → S (Pessoas → Processos
                  → Sistemas). Atuo diariamente em operações reais: Próspera Pagamentos, Flycost, Fatorcard, Opta, Acessus e outras.
                </p>
                <p className="text-muted-foreground">
                  Minha missão é simples: tirar a IA do campo da curiosidade e transformar em ferramenta útil, organizada, que
                  sustenta crescimento e reduz caos.
                </p>
                <Button
                  id="cta-sobre-alan"
                  data-analytics="cta-sobre-alan"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-[#ff8640] px-6"
                  onClick={handleSobreAlan}
                >
                  Quero aprender IA com quem aplica todo dia
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prova-social" className="py-16 md:py-24 border-b border-border/60 bg-background">
        <div className="container space-y-8">
          <div className="space-y-3 text-center max-w-4xl mx-auto">
            <Badge className="bg-[#1f1b2d] text-white border border-border uppercase tracking-[0.18em]">
              Prova social
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Prova social: resultados de quem aplicou</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {proofVideos.map((video) => (
              <Card key={video.title} className="bg-[#111118] border border-border/70">
                <CardContent className="p-4 space-y-3">
                  <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#5a4be3]/30 to-[#ff6b06]/25 flex items-center justify-center text-sm text-muted-foreground border border-border/60">
                    Vídeo depoimento
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-white">{video.title}</p>
                    <p className="text-xs text-muted-foreground">{video.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-[#13131c] border border-border/70">
              <CardContent className="p-4 space-y-3 h-full">
                <p className="font-semibold text-white">Prints de resultados: mensagens, relatórios, ganhos de tempo, fechamentos etc.</p>
                <ul className="space-y-2">
                  {proofPrints.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="oferta" className="py-16 md:py-24 border-b border-border/60 bg-background">
        <div className="container space-y-8">
          <div className="space-y-3 text-center max-w-4xl mx-auto">
            <Badge className="bg-[#1f1b2d] text-white border border-border uppercase tracking-[0.18em]">
              Oferta
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Turma Presencial – IA na Prática</h2>
          </div>

          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-start">
            <Card className="bg-[#111118] border border-border/70">
              <CardContent className="p-6 space-y-3">
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Formato</p>
                <ul className="space-y-2">
                  {offerBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#13131c] border border-border/70">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Investimento</p>
                  <p className="text-3xl font-bold text-white">R$ 1.997</p>
                  <p className="text-muted-foreground">ou 10× de R$ 250</p>
                </div>
                <Button
                  id="cta-oferta"
                  data-analytics="cta-oferta"
                  className="w-full rounded-full bg-primary text-primary-foreground hover:bg-[#ff8640]"
                  onClick={handleOferta}
                >
                  Quero garantir minha vaga
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="seguranca" className="py-16 md:py-24 border-b border-border/60 bg-background">
        <div className="container space-y-6">
          <div className="space-y-3 max-w-3xl">
            <Badge className="bg-[#1f1b2d] text-white border border-border uppercase tracking-[0.18em]">
              Segurança
            </Badge>
            <h3 className="font-heading text-2xl md:text-3xl font-bold">Segurança na decisão</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {securityBullets.map((item) => (
              <Card key={item} className="bg-[#111118] border border-border/70">
                <CardContent className="p-4 flex gap-2 items-start text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                  <span>{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24 border-b border-border/60 bg-background">
        <div className="container space-y-8">
          <div className="space-y-3 text-center max-w-4xl mx-auto">
            <Badge className="bg-[#1f1b2d] text-white border border-border uppercase tracking-[0.18em]">
              Perguntas frequentes
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-xl border border-border/70 bg-[#111118] p-4">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="font-semibold text-white">{item.question}</span>
                  <span className="text-secondary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pt-3 text-sm text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta-final" className="py-16 md:py-24 border-t border-border/60 bg-gradient-to-br from-[#0e0e11] via-[#161524] to-[#1f1533]">
        <div className="container grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
          <div className="space-y-5">
            <Badge className="bg-[#1f1b2d] text-white border border-border uppercase tracking-[0.18em]">
              Inscrição
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Pronto para transformar IA em rotina diária?</h2>
            <p className="text-muted-foreground max-w-2xl">
              Se você quer sair do improviso e montar ferramentas reais usando IA na operação, essa é a próxima etapa lógica.
            </p>
            <Button
              id="cta-final"
              data-analytics="cta-final"
              className="rounded-full bg-primary text-primary-foreground hover:bg-[#ff8640] px-8 py-4 text-base w-fit"
              onClick={handleFinalCta}
            >
              Quero entrar na próxima turma
            </Button>
            <p className="text-sm text-muted-foreground">Sistema Operacional – IA na Prática</p>
          </div>

          <InscricaoForm
            formData={formData}
            onChange={(field, value) => setFormData((prev) => ({ ...prev, [field]: value }))}
            onSubmit={handleSubmit}
          />
        </div>
      </section>

      <div className="fixed bottom-6 right-4 md:right-8 z-40">
        <a
          href="https://wa.me/5544999999999?text=Quero%20entrar%20na%20pr%C3%B3xima%20turma%20do%20Workshop%20IA%20na%20Pr%C3%A1tica"
          target="_blank"
          rel="noreferrer"
          id="cta-whatsapp"
          data-analytics="cta-whatsapp"
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

      <footer className="py-8 bg-[#0e0e11] border-t border-border/60">
        <div className="container text-center text-xs text-muted-foreground">
          Sistema Operacional – IA na Prática • Momentum Aceleradora
        </div>
      </footer>
    </div>
  );
}

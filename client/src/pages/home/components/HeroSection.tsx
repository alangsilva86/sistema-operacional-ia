import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Play } from "lucide-react";

import { heroBullets, heroMetrics } from "../homeData";

type HeroSectionProps = {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
};

export function HeroSection({ onPrimaryClick, onSecondaryClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-16 md:py-24 border-b border-border/60 bg-gradient-to-br from-[#0e0e11] via-[#141420] to-[#1b1330] text-foreground"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#ff6b06]/25 blur-3xl" />
        <div className="absolute right-0 -bottom-20 h-72 w-72 rounded-full bg-[#5a4be3]/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
          <div className="space-y-8">
            <Badge className="w-fit bg-[#1f1b2d] text-foreground border border-border uppercase tracking-[0.18em]">
              Workshop presencial para empreendedores
            </Badge>

            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Transforme IA em ferramenta real para seu negócio em 4 encontros
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                O workshop que tira você da curiosidade sobre IA e te leva para o uso real aplicado em suporte, vendas, operação,
                gestão etc... do jeito que pequenas e médias empresas precisam.
              </p>
            </div>

            <Card className="bg-[#13131c]/80 border border-border shadow-xl backdrop-blur">
              <CardContent className="p-6 space-y-4">
                <div className="grid sm:grid-cols-3 gap-3">
                  {heroBullets.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 rounded-xl bg-[#1a1a24] border border-border/70 p-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                id="cta-hero"
                data-analytics="cta-hero"
                className="text-base md:text-lg px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-[#ff8640] transition-all shadow-lg"
                onClick={onPrimaryClick}
              >
                Quero entrar na próxima turma
              </Button>
              <Button
                size="lg"
                id="cta-hero-secondary"
                data-analytics="cta-hero-secondary"
                variant="outline"
                className="text-base md:text-lg px-6 py-4 rounded-full border border-primary/50 text-primary bg-transparent hover:bg-primary/10"
                onClick={onSecondaryClick}
              >
                Ver o que vou aprender
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Vagas limitadas • Turma presencial em Maringá – PR</p>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden border border-border bg-[#13131c]/80 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative aspect-video flex items-center justify-center bg-[radial-gradient(circle_at_35%_35%,rgba(90,75,227,0.25),transparent_55%)]">
                  <div className="absolute inset-0 border border-border/60 rounded-[1.5rem] m-4" />
                  <div className="absolute top-4 left-4 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-white">
                    Vídeo curto: por que IA só funciona quando vira sistema.
                  </div>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full bg-white/90 text-foreground border border-border hover:-translate-y-0.5 transition-transform shadow-lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Assistir prévia
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-3 gap-3">
              {heroMetrics.map((metric) => (
                <Card key={metric.label} className="bg-[#1a1a24] border border-border/70">
                  <CardContent className="p-4 space-y-2">
                    <p className="text-lg font-semibold text-white">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">{metric.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

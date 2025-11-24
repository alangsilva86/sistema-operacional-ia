import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Play, Brain, Users as UsersIcon } from "lucide-react";

import { heroHighlights } from "../homeData";

type HeroSectionProps = {
  onCtaClick: () => void;
};

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
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
              {heroHighlights.map((item) => (
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
                onClick={onCtaClick}
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
                <UsersIcon className="w-4 h-4 text-primary" />
                <span>Turma pequena para ajustar cada caso.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Calendar, MapPin, Play, Sparkles, Target, Users as UsersIcon } from "lucide-react";

import { heroHighlights } from "../homeData";

type HeroSectionProps = {
  onCtaClick: () => void;
};

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const logistics = [
    { icon: Calendar, label: "Dez/2025", desc: "4 encontros presenciais" },
    { icon: MapPin, label: "Maringá", desc: "Atrium • Zona 07" },
    { icon: UsersIcon, label: "10 vagas", desc: "Acompanhamento individual" }
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-border/60 bg-gradient-to-b from-[#f6f1e9] via-white to-[#f7f4ef]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 -bottom-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/90 border-primary/20 text-primary font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                1ª turma presencial
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
                Vagas super limitadas
              </Badge>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Sistema Operacional — IA na prática
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Construa sua 1ª ferramenta de IA em{" "}
                <span className="rounded-md bg-primary/15 px-2 py-1 text-primary">4 encontros presenciais</span> —
                mesmo sem programar.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Para empresários que já ouviram falar de IA (até pagam o ChatGPT), mas ainda não têm nenhuma ferramenta rodando na operação.
              </p>
            </div>

            <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
              <CardContent className="p-5 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {heroHighlights.map((item) => (
                    <Badge
                      key={item.label}
                      variant="secondary"
                      className="bg-primary/10 border-primary/20 text-foreground font-semibold"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      {item.label}
                    </Badge>
                  ))}
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {logistics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-border/70 bg-gradient-to-br from-white to-primary/5 px-4 py-3 shadow-sm"
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <item.icon className="w-4 h-4 text-primary" />
                        {item.label}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-primary to-[#f4975e] border-none"
                onClick={onCtaClick}
              >
                Quero reservar minha vaga
              </Button>
              <p className="text-sm text-muted-foreground">Início em 06/12 • Vagas limitadas</p>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <Card className="bg-white border-primary/20 shadow-sm">
                <CardContent className="p-5 flex items-start gap-3">
                  <Target className="w-6 h-6 text-primary mt-1" />
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">Não é “introdução à IA”.</p>
                    <p className="text-muted-foreground">
                      Você vai construir algo que resolve um gargalo real do seu negócio e volta com isso funcionando.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary text-primary-foreground border-none shadow-lg">
                <CardContent className="p-5 space-y-1">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary-foreground/80">Entrega</p>
                  <p className="text-lg font-semibold">Blueprint claro + ferramenta 1.0 implantada</p>
                  <p className="text-sm text-primary-foreground/80">
                    Com roteiro para seguir evoluindo depois da turma.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-br from-white/95 via-white to-primary/10">
              <CardContent className="p-0">
                <div className="relative aspect-video flex items-center justify-center bg-[radial-gradient(circle_at_35%_35%,rgba(228,107,52,0.14),transparent_50%)]">
                  <div className="absolute inset-0 border border-white/70 rounded-[1.6rem] m-5 shadow-inner" />
                  <div className="absolute top-4 left-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Prévia do método
                  </div>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full bg-white/90 text-primary border border-primary/30 hover:-translate-y-0.5 transition-transform shadow-lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Ver prévia de 2 min
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-primary/20 shadow-sm">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Brain className="w-4 h-4" />
                  Linha do que acontece em cada encontro
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {["Mapear e escolher o processo certo", "Construir com IA + no-code", "Implantar e medir resultado"].map(
                    (item, idx) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-xs font-bold text-primary mt-0.5">{idx + 1}</span>
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 bg-white/80 border border-border/70 px-3 py-2 rounded-full shadow-sm">
                <Brain className="w-4 h-4 text-primary" />
                <span>Mostro o passo a passo e exemplos reais.</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-border/70 px-3 py-2 rounded-full shadow-sm">
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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, CheckCircle2, Clock, MapPin, Users } from "lucide-react";

import type { Encontro } from "../homeData";
import { processoSteps } from "../homeData";

type AgendaSectionProps = {
  encontros: Encontro[];
  onCtaClick: () => void;
};

function Roadmap({ steps, onCtaClick }: { steps: Encontro[]; onCtaClick: () => void }) {
  return (
    <div className="mt-12 space-y-6">
      <div className="relative">
        <div className="hidden md:block absolute top-7 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
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

              <Card className="flex-1 bg-white/90 border-primary/20 shadow-md hover:-translate-y-0.5 transition-all">
                <CardContent className="p-5 space-y-3">
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
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Encontro {step.num}
                    </Badge>
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

      <div className="flex justify-center">
        <Button
          size="lg"
          className="rounded-full px-8 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={onCtaClick}
        >
          Quero reservar minha vaga
        </Button>
      </div>
    </div>
  );
}

export function AgendaSection({ encontros, onCtaClick }: AgendaSectionProps) {
  return (
    <>
      <section id="agenda" className="py-16 md:py-24 border-b border-border/60 bg-white">
        <div className="container space-y-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
              Dezembro/2025 — Maringá
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Agenda da 1ª turma presencial</h2>
            <p className="text-muted-foreground">Sessões gravadas, turma pequena e acompanhamento de perto.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-primary text-primary-foreground border-none">
                <Calendar className="w-3.5 h-3.5" />
                4 encontros presenciais
              </Badge>
              <Badge variant="secondary" className="bg-white text-foreground border-border">
                <Users className="w-3.5 h-3.5" />
                Máx. 10 participantes
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Clock className="w-3.5 h-3.5" />
                Gravação liberada
              </Badge>
            </div>
          </div>

          <div className="mt-12 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-5">
              {encontros.map((encontro) => (
                <div key={encontro.num} className="relative pl-16 md:pl-24">
                  <div className="absolute left-4 md:left-6 top-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-sm">
                    {encontro.num}
                  </div>
                  <Card className="bg-[#f9f7f3] border-primary/30 shadow-sm hover:-translate-y-0.5 transition-all">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{encontro.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{encontro.time}</span>
                        </div>
                        <Badge variant="secondary" className="bg-white text-foreground border-border">
                          Encontro {encontro.num}
                        </Badge>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary mt-1" />
                        <span>{encontro.location}</span>
                      </div>
                      <p className="text-base text-foreground font-semibold">
                        Foco em construir e evoluir sua solução.
                      </p>
                      <div className="text-sm bg-white border border-border/70 rounded-lg p-3 text-muted-foreground">
                        <span className="font-semibold text-primary">Saída: </span>
                        {encontro.takeaway}
                      </div>
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

      <section id="processo" className="py-16 md:py-24 border-b border-border/60 bg-[#f7f4ef]">
        <div className="container space-y-8">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
              Método na prática
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Como funcionam os 4 encontros</h2>
            <p className="text-muted-foreground">Práticos, diretos e com acompanhamento real para cada negócio.</p>
            <p className="text-primary font-semibold">Turma reduzida: máximo de 10 participantes.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-3">
            {processoSteps.map((step, idx) => (
              <Card key={step} className="bg-white border-primary/30 shadow-sm">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-semibold">{step}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <Roadmap steps={encontros} onCtaClick={onCtaClick} />

          <div className="mt-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
              <p className="font-semibold text-foreground">Detalhe do que acontece em cada encontro</p>
              <Badge variant="secondary" className="bg-white text-foreground border-border">
                Playbook aberto durante a turma
              </Badge>
            </div>
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
                        <h3 className="text-lg md:text-xl font-bold leading-snug text-foreground">{encontro.title}</h3>
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
    </>
  );
}

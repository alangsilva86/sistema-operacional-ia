import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users } from "lucide-react";

import { faqHighlights } from "../homeData";

type FaqSectionProps = {
  id?: string;
};

export function FaqSection({ id = "faq" }: FaqSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 border-b border-border/60 bg-white">
      <div className="container space-y-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 font-semibold">
            Formato da turma
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Turma pequena, acompanhamento real</h2>
          <p className="text-muted-foreground">Tempo dedicado para cada negócio, sem deixar ninguém para trás.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <Card className="md:col-span-3 bg-gradient-to-r from-primary to-[#f4975e] text-primary-foreground shadow-xl border-none">
            <CardContent className="p-7 text-center space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                <Users className="w-4 h-4" />
                Turma enxuta
              </div>
              <p className="text-2xl font-bold">Máximo de 10 participantes</p>
              <p className="text-primary-foreground/90">Construção, revisão e ajustes em tempo real.</p>
            </CardContent>
          </Card>

          {faqHighlights.map((item) => (
            <Card
              key={item.title}
              className="bg-[#f9f7f3] border-border/70 hover:-translate-y-1 hover:shadow-md transition-all"
            >
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
  );
}

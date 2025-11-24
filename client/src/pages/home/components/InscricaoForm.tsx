import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type InscricaoFormData = {
  nome: string;
  email: string;
  whatsapp: string;
};

type InscricaoFormProps = {
  formData: InscricaoFormData;
  onChange: (field: keyof InscricaoFormData, value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function InscricaoForm({ formData, onChange, onSubmit }: InscricaoFormProps) {
  return (
    <Card className="bg-white border-2 border-primary/30 shadow-lg">
      <CardContent className="p-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Garanta sua vaga na 1ª turma</h3>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-sm font-semibold">
                Nome completo *
              </Label>
              <Input
                id="nome"
                type="text"
                required
                value={formData.nome}
                onChange={(e) => onChange("nome", e.target.value)}
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
                onChange={(e) => onChange("email", e.target.value)}
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
                onChange={(e) => onChange("whatsapp", e.target.value)}
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
  );
}

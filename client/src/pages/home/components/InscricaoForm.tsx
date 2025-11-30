import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export type InscricaoFormData = {
  nome: string;
  email: string;
  whatsapp: string;
  perfil?: string;
  caos?: string;
  plano?: string;
};

type InscricaoFormProps = {
  formData: InscricaoFormData;
  onChange: (field: keyof InscricaoFormData, value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function InscricaoForm({ formData, onChange, onSubmit }: InscricaoFormProps) {
  return (
    <Card className="bg-[#0d0f16] border border-white/10 shadow-lg">
      <CardContent className="p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/20 text-white border border-primary/40 font-semibold">
                Vagas limitadas
              </Badge>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Resposta rápida</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Garanta sua vaga na turma presencial</h3>
            <p className="text-sm text-muted-foreground">
              Preencha seus dados. Respondemos pelo WhatsApp para confirmar pagamento, datas e garantir sua cadeira.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-sm font-semibold text-white">
                Nome completo *
              </Label>
              <Input
                id="nome"
                type="text"
                required
                value={formData.nome}
                onChange={(e) => onChange("nome", e.target.value)}
                className="h-12 text-base bg-[#131522] border-white/10 text-foreground"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-white">
                E-mail *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => onChange("email", e.target.value)}
                className="h-12 text-base bg-[#131522] border-white/10 text-foreground"
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-sm font-semibold text-white">
                WhatsApp *
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => onChange("whatsapp", e.target.value)}
                className="h-12 text-base bg-[#131522] border-white/10 text-foreground"
                placeholder="(00) 00000-0000"
              />
              <p className="text-xs text-muted-foreground">Usamos só para confirmar vaga e pagamento.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="perfil" className="text-sm font-semibold text-white">
                Seu perfil
              </Label>
              <Select value={formData.perfil ?? ""} onValueChange={(value) => onChange("perfil", value)}>
                <SelectTrigger id="perfil" className="h-12 text-base bg-[#131522] border-white/10 text-foreground">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="servico">Serviço / Consultoria / Agência</SelectItem>
                  <SelectItem value="comercio">Comércio / PMEs</SelectItem>
                  <SelectItem value="corban">Corban / Promotora</SelectItem>
                  <SelectItem value="gestor">Gestor / Operações</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="caos" className="text-sm font-semibold text-white">
                Qual é hoje o maior caos na sua operação?
              </Label>
              <Textarea
                id="caos"
                value={formData.caos ?? ""}
                onChange={(e) => onChange("caos", e.target.value)}
                className="min-h-[90px] text-base bg-[#131522] border-white/10 text-foreground"
                placeholder="Ex.: follow-up perdido, retrabalho em contratos, atendimento sem padrão..."
              />
            </div>

            <div className="space-y-1 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.16em] text-gray-400">Plano escolhido</span>
                <span className="rounded-full bg-primary/20 text-primary px-2 py-0.5 text-xs font-semibold">
                  {formData.plano || "Não selecionado"}
                </span>
              </div>
              <input type="hidden" name="plano" value={formData.plano ?? ""} />
              <p className="text-xs text-gray-400">Você pode alterar na seção de investimento.</p>
            </div>

            <Button
              type="submit"
              size="lg"
              id="cta-form"
              data-analytics="click-cta-form"
              className="w-full text-base py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-[#ff5c39] text-[#0b0909] hover:bg-[#ff754f]"
            >
              Quero entrar na próxima turma
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

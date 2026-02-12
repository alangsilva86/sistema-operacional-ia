"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CalendarClock, CheckCircle2, ChevronRight, MapPin, ShieldCheck, X } from "lucide-react";

import { CtaButton } from "@/app/components/CtaButton";
import { FadeIn, Stagger, StaggerItem } from "@/app/components/Motion";
import { Section } from "@/app/components/Section";
import { content } from "@/app/content";
import { trackEvent } from "@/app/lib/analytics";

type DayId = "day1" | "day2" | "day3" | "day4";
type HeadlineVariant = "financial" | "operational";
type OutputsVariant = "artifacts" | "activities";

interface ModalData {
  title: string;
  objective: string;
  frameworks: string[];
  steps: string[];
  tools?: string[];
  prerequisites: string[];
  definitionOfDone: string[];
  deliverables: string[];
}

interface JourneyDay {
  id: DayId;
  badge: string;
  schedule: string;
  title: string;
  subtitle: string;
  outputsArtifacts: string[];
  outputsActivities: string[];
  secondaryCta: string;
  modal: ModalData;
}

const viewEmentaEvents: Record<DayId, string> = {
  day1: "click_view_ementa_day1",
  day2: "click_view_ementa_day2",
  day3: "click_view_ementa_day3",
  day4: "click_view_ementa_day4"
};

function resolveVariant<T extends string>(
  storageKey: string,
  queryKey: string,
  allowed: readonly T[],
  fallback: T
): T {
  if (typeof window === "undefined") return fallback;

  try {
    const params = new URLSearchParams(window.location.search);
    const forced = params.get(queryKey);
    if (forced && allowed.includes(forced as T)) {
      localStorage.setItem(storageKey, forced);
      return forced as T;
    }

    const stored = localStorage.getItem(storageKey);
    if (stored && allowed.includes(stored as T)) return stored as T;

    const selected = allowed[Math.floor(Math.random() * allowed.length)] ?? fallback;
    localStorage.setItem(storageKey, selected);
    return selected;
  } catch {
    return fallback;
  }
}

function buildJourneyDays(headlineVariant: HeadlineVariant): JourneyDay[] {
  return [
    {
      id: "day1",
      badge: "Dia 1 · I (Investigar)",
      schedule: "Encontro 1 · Sáb, 21/02 · 10:00",
      title:
        headlineVariant === "financial"
          ? "Você descobre o gargalo que mais dá dinheiro quando você resolve."
          : "Você descobre o gargalo operacional que mais trava sua escala hoje.",
      subtitle:
        "Frameworks + IA para investigar, priorizar e escolher UMA solução com maior impacto e menor esforço.",
      outputsArtifacts: [
        "Mapa do problema (claro, mensurável e com causa raiz)",
        "Matriz Eisenhower preenchida + prioridade definida",
        "Lista do que trazer no Dia 2: dados, acessos, pessoas e ferramentas"
      ],
      outputsActivities: [
        "Mapeia dores com causa raiz e impacto",
        "Prioriza com Eisenhower + Impacto x Esforço",
        "Fecha o escopo e os insumos do Dia 2"
      ],
      secondaryCta: "Ver ementa completa (modal)",
      modal: {
        title: "Dia 1 · Investigar: Diagnóstico que vira construção",
        objective: "Sair com 1 problema priorizado (alto impacto, baixo esforço).",
        frameworks: [
          "Levantamento estruturado de dores por área: processos, vendas, financeiro, atendimento e operação",
          "IA como board de especialistas para hipóteses e visões alternativas",
          "Eisenhower + Impacto x Esforço para priorizar com critério"
        ],
        steps: [
          "Leitura do cenário atual e identificação dos gargalos",
          "Validação de impacto financeiro e operacional do problema",
          "Priorização e definição do problema que vai virar MVP"
        ],
        prerequisites: [
          "Levar dados, acessos e responsáveis mapeados a partir do problema escolhido",
          "Confirmar quais ferramentas já existem e quais podem ser integradas"
        ],
        definitionOfDone: [
          "Problema descrito em 5W2H ou formato equivalente",
          "Métrica de sucesso definida (reduzir tempo, reduzir erro ou aumentar conversão)",
          "Prioridade confirmada (por que esse, por que agora)"
        ],
        deliverables: [
          "Mapa do problema (claro, mensurável e com causa raiz)",
          "Matriz Eisenhower preenchida + prioridade definida",
          "Lista do que trazer no Dia 2: dados, acessos, pessoas e ferramentas"
        ]
      }
    },
    {
      id: "day2",
      badge: "Dia 2 · O (Organizar)",
      schedule: "Encontro 2 · Qua, 25/02 · 18:30",
      title: "Você transforma caos em um plano executável (sem depender de ninguém).",
      subtitle:
        "Organização total: dados, fluxo, quem usa, onde roda, e qual saída o sistema precisa gerar.",
      outputsArtifacts: [
        "Blueprint do sistema (entrada → processamento → saída)",
        "Checklist de dados + fontes + permissões (100% pronto)",
        "Plano V1.0 do MVP (escopo fechado para construir no Dia 3)"
      ],
      outputsActivities: [
        "Mapeia entrada, processo e saída do fluxo",
        "Inventaria dados, formatos e permissões",
        "Define escopo V1.0 com limites claros"
      ],
      secondaryCta: "Ver ementa completa (modal)",
      modal: {
        title: "Dia 2 · Organizar: blueprint + dados + fluxo fechado",
        objective: "Sair com arquitetura funcional pronta para construir no encontro seguinte.",
        frameworks: [
          "Mapeamento de fluxo: entrada, processamento e saída",
          "Inventário de dados: origem, formato e acesso",
          "Definição de papéis: quem usa, quando usa e o que precisa enxergar"
        ],
        steps: [
          "Desenho do fluxo alvo ponta a ponta",
          "Validação das fontes e campos mínimos",
          "Fechamento de escopo V1.0 com o que entra e o que fica fora"
        ],
        prerequisites: [
          "Trazer acesso às fontes confirmadas no Dia 1",
          "Trazer exemplos reais de entrada e saída esperada"
        ],
        definitionOfDone: [
          "Fontes e acessos confirmados",
          "Campos mínimos definidos",
          "Saída do sistema definida (dashboard, mensagens, alertas, planilha, etc.)",
          "Escopo do MVP fechado"
        ],
        deliverables: [
          "Blueprint do sistema (entrada → processamento → saída)",
          "Checklist de dados + fontes + permissões (100% pronto)",
          "Plano V1.0 do MVP (escopo fechado para construir no Dia 3)"
        ]
      }
    },
    {
      id: "day3",
      badge: "Dia 3 · C (Construir)",
      schedule: "Encontro 3 · Sáb, 28/02 · 10:00",
      title: "Você coloca seu MVP no ar (rodando) com a sua lógica.",
      subtitle:
        "Vibe coding guiado: construir, publicar e sair com a solução funcionando no seu cenário real.",
      outputsArtifacts: [
        "MVP online e operacional (link publicado)",
        "Código organizado + versão inicial (GitHub/controle básico)",
        "Roteiro de próximos testes e melhorias (pra evoluir sozinho)"
      ],
      outputsActivities: [
        "Constrói o MVP com fluxo real",
        "Testa e publica com deploy assistido",
        "Prioriza backlog mínimo de evolução"
      ],
      secondaryCta: "Ver stack e rotina (modal)",
      modal: {
        title: "Dia 3 · Construir: publicar o MVP e sair rodando",
        objective: "Sair com MVP online, funcional e com rotina de melhoria contínua.",
        frameworks: [
          "Rotina de entrega: construir → testar → publicar",
          "Validação em cenário real com feedback rápido",
          "Backlog mínimo para evolução sem travar operação"
        ],
        steps: [
          "Implementar fluxo base do MVP",
          "Executar teste com caso real",
          "Publicar versão inicial e documentar próximos passos"
        ],
        tools: [
          "Google Studio IA / Manus (vibe coding)",
          "VS Code + Codex (refino/implementação)",
          "GitHub Desktop (versionamento simples)",
          "Vercel (deploy)",
          "ChatGPT/Gemini (apoio e revisão)"
        ],
        prerequisites: [
          "Chegar com blueprint e dados fechados do Dia 2",
          "Trazer credenciais dos ambientes que serão usados no deploy"
        ],
        definitionOfDone: [
          "MVP online acessível",
          "Funciona com um fluxo real (mesmo que simples)",
          "Próxima melhoria priorizada (backlog mínimo)"
        ],
        deliverables: [
          "MVP online e operacional (link publicado)",
          "Código organizado + versão inicial (GitHub/controle básico)",
          "Roteiro de próximos testes e melhorias (pra evoluir sozinho)"
        ]
      }
    },
    {
      id: "day4",
      badge: "Dia 4 · Sessão 1:1",
      schedule: "Encontro 4 · Agendamento 1:1",
      title: "Refinamento individual para acelerar resultado no seu caso real.",
      subtitle:
        "1 hora comigo para destravar, ajustar e evoluir o que você começou a usar no dia a dia.",
      outputsArtifacts: [
        "Ajustes e melhorias aplicadas (ou plano fechado)",
        "Próximos 14 dias de evolução (tarefas e priorização)",
        "Diagnóstico de novas automações possíveis na sua operação"
      ],
      outputsActivities: [
        "Audita o uso real do MVP no seu contexto",
        "Corrige gargalos com foco em impacto",
        "Define plano de 14 dias para acelerar resultado"
      ],
      secondaryCta: "Como funciona a sessão (modal)",
      modal: {
        title: "Sessão 1:1: ajustes e aceleração no seu caso",
        objective: "Consolidar tração com ajustes práticos e plano de evolução curto.",
        frameworks: [
          "Auditoria rápida do fluxo implementado",
          "Priorização por impacto imediato",
          "Plano de evolução em ciclos curtos (14 dias)"
        ],
        steps: [
          "Revisão do uso atual e dos gargalos mais críticos",
          "Aplicação de correções e melhorias de UX/fluxo",
          "Definição das próximas automações viáveis"
        ],
        prerequisites: [
          "Estar usando ou testando o MVP antes da sessão",
          "Levar dúvidas, falhas observadas e resultados obtidos"
        ],
        definitionOfDone: [
          "Ajustes aplicados ou prontos para aplicar",
          "Plano de 14 dias definido com prioridades",
          "Próximas automações mapeadas para a operação"
        ],
        deliverables: [
          "Ajustes e melhorias aplicadas (ou plano fechado)",
          "Próximos 14 dias de evolução (tarefas e priorização)",
          "Diagnóstico de novas automações possíveis na sua operação"
        ]
      }
    }
  ];
}

interface ModalSectionProps {
  title: string;
  items: string[];
}

function ModalSection({ title, items }: ModalSectionProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function JourneySection() {
  const [activeDay, setActiveDay] = useState<DayId | null>(null);
  const [headlineVariant, setHeadlineVariant] = useState<HeadlineVariant>("financial");
  const [outputsVariant, setOutputsVariant] = useState<OutputsVariant>("artifacts");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const modalOpenedAtRef = useRef<number | null>(null);
  const activeDayRef = useRef<DayId | null>(null);

  const days = useMemo(() => buildJourneyDays(headlineVariant), [headlineVariant]);
  const activeDayData = useMemo(() => days.find((item) => item.id === activeDay) ?? null, [activeDay, days]);

  const outputsLabel = outputsVariant === "artifacts" ? "Você sai com" : "O que você faz";
  const journeyLocation = content.journey.location.replace(/^📍\s*/, "");

  const closeModal = useCallback((reason: string) => {
    const openedDay = activeDayRef.current;
    if (!openedDay) return;

    const openedAt = modalOpenedAtRef.current;
    if (openedAt) {
      const durationMs = Date.now() - openedAt;
      trackEvent(`time_on_modal_${openedDay}`, {
        duration_ms: durationMs,
        duration_seconds: Number((durationMs / 1000).toFixed(1)),
        close_reason: reason
      });
    }

    setActiveDay(null);
    modalOpenedAtRef.current = null;
  }, []);

  useEffect(() => {
    activeDayRef.current = activeDay;
  }, [activeDay]);

  useEffect(() => {
    const nextHeadline = resolveVariant(
      "ab_4encontros_headline_day1",
      "ab_headline_day1",
      ["financial", "operational"],
      "financial"
    );
    const nextOutputs = resolveVariant(
      "ab_4encontros_outputs",
      "ab_outputs_label",
      ["artifacts", "activities"],
      "artifacts"
    );

    setHeadlineVariant(nextHeadline);
    setOutputsVariant(nextOutputs);

    trackEvent("ab_exposure_section_4encontros", {
      headline_day1_variant: nextHeadline,
      outputs_variant: nextOutputs
    });
  }, []);

  useEffect(() => {
    if (!activeDay) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal("escape");
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeDay, closeModal]);

  useEffect(() => {
    if (!activeDay) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeDay]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    let hasTracked = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || hasTracked) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          hasTracked = true;
          trackEvent("scroll_depth_section_4encontros", {
            intersection_ratio: Number(entry.intersectionRatio.toFixed(2))
          });
          observer.disconnect();
        }
      },
      { threshold: [0.2, 0.35, 0.6] }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      const openedDay = activeDayRef.current;
      const openedAt = modalOpenedAtRef.current;
      if (!openedDay || !openedAt) return;

      const durationMs = Date.now() - openedAt;
      trackEvent(`time_on_modal_${openedDay}`, {
        duration_ms: durationMs,
        duration_seconds: Number((durationMs / 1000).toFixed(1)),
        close_reason: "unmount"
      });
    };
  }, []);

  const handleOpenEmenta = (dayId: DayId) => {
    trackEvent(viewEmentaEvents[dayId], { section: "jornada" });
    setActiveDay(dayId);
    modalOpenedAtRef.current = Date.now();
  };

  return (
    <>
      <Section id="jornada">
        <div ref={sectionRef} className="space-y-8 md:space-y-10">
          <FadeIn className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">{content.journey.title}</h2>
            <p className="mt-4 text-base text-slate-200 md:text-lg">
              Em 4 encontros, você sai com 1 MVP rodando e um método replicável para criar novas soluções.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4" />
              <span>{journeyLocation}</span>
            </div>
          </FadeIn>

          <Stagger className="grid gap-5 lg:grid-cols-2">
            {days.map((day) => {
              const outputs = outputsVariant === "artifacts" ? day.outputsArtifacts : day.outputsActivities;

              return (
                <StaggerItem
                  key={day.id}
                  className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_35px_rgba(8,15,35,0.28)] backdrop-blur md:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                      {day.badge}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300">
                      <CalendarClock className="h-3.5 w-3.5 text-slate-400" />
                      {day.schedule}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{day.title}</h3>
                  <p className="mt-3 max-h-12 overflow-hidden text-sm leading-relaxed text-slate-300">{day.subtitle}</p>

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{outputsLabel}</p>
                    <ul className="mt-3 space-y-2">
                      {outputs.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                          <span className="block min-w-0 truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenEmenta(day.id)}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                  >
                    {day.secondaryCta}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </StaggerItem>
              );
            })}
          </Stagger>

          <FadeIn>
            <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-300">
              <p>Você não precisa saber programar. Você precisa saber decidir o que vale construir. O IOC faz isso por você.</p>
              <p className="mt-3 inline-flex items-center gap-2 font-semibold text-emerald-200">
                <ShieldCheck className="h-4 w-4" />
                Garantia até o 2º encontro (risco zero).
              </p>
            </div>
          </FadeIn>

          <div className="sticky bottom-4 z-20 pt-1">
            <div className="mx-auto max-w-2xl rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-3 backdrop-blur">
              <CtaButton
                label="Quero meu Diagnóstico / Garantir vaga"
                baseUrl={content.checkoutUrl}
                location="journey-primary"
                fullWidth
                className="text-sm sm:text-base"
                onClick={() => trackEvent("click_cta_primary_section", { section: "jornada" })}
              />
            </div>
          </div>
        </div>
      </Section>

      {activeDayData ? (
        <div className="fixed inset-0 z-[120] bg-slate-950/70 p-0 sm:p-6" onClick={() => closeModal("backdrop")}>
          <div className="flex h-full items-end justify-center sm:items-center">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`ementa-title-${activeDayData.id}`}
              onClick={(event) => event.stopPropagation()}
              className="flex h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-white/15 bg-[#090f19] shadow-[0_24px_80px_rgba(8,15,35,0.5)] sm:h-auto sm:max-h-[88vh] sm:rounded-3xl"
            >
              <div className="sticky top-0 z-10 border-b border-white/10 bg-[#090f19]/95 px-5 py-4 backdrop-blur sm:px-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">{activeDayData.badge}</p>
                    <h3 id={`ementa-title-${activeDayData.id}`} className="mt-2 text-lg font-semibold text-white sm:text-xl">
                      {activeDayData.modal.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => closeModal("close_button")}
                    className="rounded-full border border-white/15 p-2 text-slate-300 transition hover:border-white/40 hover:text-white"
                    aria-label="Fechar ementa"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-4 text-sm text-cyan-100">
                    <p className="font-semibold uppercase tracking-[0.16em] text-cyan-200">Objetivo do dia</p>
                    <p className="mt-2">{activeDayData.modal.objective}</p>
                  </div>

                  <ModalSection title="Frameworks usados" items={activeDayData.modal.frameworks} />
                  <ModalSection title="Passo a passo resumido" items={activeDayData.modal.steps} />

                  {activeDayData.modal.tools?.length ? (
                    <ModalSection title="Ferramentas (stack sugerida)" items={activeDayData.modal.tools} />
                  ) : null}

                  <ModalSection title="Pré-requisitos / próximo encontro" items={activeDayData.modal.prerequisites} />
                  <ModalSection title="Definition of Done" items={activeDayData.modal.definitionOfDone} />
                  <ModalSection title="Entregáveis do encontro" items={activeDayData.modal.deliverables} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

import { FadeIn, Stagger, StaggerItem } from "@/app/components/Motion";
import { Section } from "@/app/components/Section";
import { DashboardMock } from "@/app/components/DashboardMock";
import { content } from "@/app/content";

const deliverableLayout = ["lg:col-span-1", "lg:col-span-2", "lg:col-span-1"];

export function SolutionSection() {
  return (
    <Section id="solucao">
      <div className="space-y-12">
        <FadeIn className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">{content.solution.title}</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            {content.solution.subtitle}
          </p>
        </FadeIn>

        <Stagger className="grid gap-6 md:grid-cols-3">
          {content.solution.steps.map((step, index) => (
            <StaggerItem
              key={step.title}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-sm font-semibold text-white">{step.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.description}</p>
              <span className="pointer-events-none absolute bottom-4 right-4 text-9xl font-black text-white/5">
                {String(index + 1).padStart(2, "0")}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn>
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">
            {content.solution.deliverablesTitle}
          </h3>
        </FadeIn>

        <Stagger className="grid gap-6 lg:grid-cols-3">
          {content.solution.deliverables.map((deliverable, index) => (
            <StaggerItem
              key={deliverable.title}
              className={`rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur ${
                deliverableLayout[index]
              }`}
            >
              <div className="space-y-3">
                <p className="text-lg font-semibold text-white">{deliverable.title}</p>
                <p className="text-sm leading-relaxed text-slate-400">{deliverable.description}</p>
              </div>
              {deliverable.title.includes("Dashboard") ? (
                <div className="mt-6">
                  <DashboardMock />
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="h-2 w-16 rounded-full bg-white/20" />
                      <div className="h-2 w-24 rounded-full bg-white/10" />
                    </div>
                    <div className="h-9 w-9 rounded-full border border-white/10 bg-white/5" />
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="h-6 w-2 rounded-full bg-cyan-300/60" />
                    <span className="h-10 w-2 rounded-full bg-sky-300/70" />
                    <span className="h-4 w-2 rounded-full bg-white/30" />
                    <span className="h-8 w-2 rounded-full bg-cyan-200/60" />
                  </div>
                </div>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

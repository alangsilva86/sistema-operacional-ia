"use client";

import { HelpCircle } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/app/components/Motion";
import { trackEvent } from "@/app/lib/analytics";
import { content } from "@/app/content";

export function FaqSection() {
  return (
    <section id="faq" className="relative border-b border-white/5">
      <div className="container relative py-20 md:py-28">
        <div className="space-y-8">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">{content.faq.title}</h2>
          </FadeIn>
          <Stagger className="space-y-4">
            {content.faq.items.map((item) => (
              <StaggerItem key={item.q}>
                <details
                  className="group rounded-[24px] border border-white/10 bg-white/5 backdrop-blur"
                  onToggle={(event) => {
                    const target = event.currentTarget;
                    if (target.open) {
                      trackEvent("faq_open", { question: item.q });
                    }
                  }}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-cyan-200" />
                      {item.q}
                    </span>
                    <span className="text-cyan-200 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{item.a}</p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

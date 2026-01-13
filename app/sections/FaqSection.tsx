"use client";

import { HelpCircle } from "lucide-react";

import { trackEvent } from "@/app/lib/analytics";
import { content } from "@/app/content";

export function FaqSection() {
  return (
    <section id="faq" className="relative border-b border-white/5 bg-[#050505]">
      <div className="container relative py-20 md:py-24">
        <div className="space-y-6 max-w-3xl">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8A8A8A]">FAQ</p>
            <h2 className="font-heading text-3xl text-white md:text-4xl">{content.faq.title}</h2>
          </div>
          <div className="space-y-3">
            {content.faq.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-[20px] border border-[#222] bg-[#0b0b0b]"
                onToggle={(event) => {
                  const target = event.currentTarget;
                  if (target.open) {
                    trackEvent("faq_open", { question: item.q });
                  }
                }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4500]">
                  <span className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-[#FF4500]" />
                    {item.q}
                  </span>
                  <span className="text-[#FF4500] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm text-[#BDBDBD]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { CtaButton } from "@/app/components/CtaButton";
import { content } from "@/app/content";

export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#050505]/85 backdrop-blur sm:hidden">
      <div className="container flex items-center gap-3 py-3">
        <div className="flex flex-col text-xs text-[#8A8A8A]">
          <span>Turma presencial</span>
          <span className="text-white">{content.header.badge}</span>
        </div>
        <CtaButton
          label={content.ctaLabel}
          baseUrl={content.checkoutUrl}
          location="sticky"
          fullWidth
          className="py-3 text-sm"
        />
      </div>
    </div>
  );
}

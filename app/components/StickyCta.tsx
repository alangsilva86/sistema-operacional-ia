"use client";

import { CtaButton } from "@/app/components/CtaButton";
import { content } from "@/app/content";

export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0b0f18]/80 backdrop-blur-xl sm:hidden">
      <div className="container flex flex-col gap-2 py-3">
        <span className="text-xs text-slate-200">{content.offer.seats}</span>
        <CtaButton
          label="Blindar Operação"
          baseUrl={content.checkoutUrl}
          location="sticky"
          fullWidth
          className="py-3 text-sm"
        />
      </div>
    </div>
  );
}

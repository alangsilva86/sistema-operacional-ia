import { CtaButton } from "@/app/components/CtaButton";
import { content } from "@/app/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3 text-sm text-white">
          <span className="text-xs uppercase tracking-[0.22em] text-[#8A8A8A]">{content.header.left}</span>
          <span className="rounded-full border border-[#222] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white">
            {content.header.badge}
          </span>
        </div>
        <div className="hidden sm:flex">
          <CtaButton label={content.ctaLabel} baseUrl={content.checkoutUrl} location="hero" />
        </div>
      </div>
    </header>
  );
}

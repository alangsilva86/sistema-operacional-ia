import { CtaButton } from "@/app/components/CtaButton";
import { content } from "@/app/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f18]/70 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
          {content.hero.tag}
        </span>
        <div className="hidden sm:flex">
          <CtaButton label={content.hero.primaryCta} baseUrl={content.checkoutUrl} location="header" />
        </div>
      </div>
    </header>
  );
}

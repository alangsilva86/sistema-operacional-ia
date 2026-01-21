"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { getCheckoutUrl, trackEvent } from "@/app/lib/analytics";

interface CtaButtonProps {
  label: string;
  baseUrl: string;
  location: string;
  className?: string;
  fullWidth?: boolean;
}

export function CtaButton({ label, baseUrl, location, className = "", fullWidth = false }: CtaButtonProps) {
  const [href, setHref] = useState(baseUrl);

  useEffect(() => {
    setHref(getCheckoutUrl(baseUrl));
  }, [baseUrl]);

  const handleClick = () => {
    trackEvent("cta_click", { location });
    trackEvent("checkout_open", { location });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.35)] transition-all duration-200 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-cyan-300/40 before:via-sky-300/40 before:to-blue-400/40 before:opacity-0 before:blur-2xl before:transition-opacity before:content-[''] hover:translate-y-[-1px] hover:shadow-[0_24px_55px_rgba(56,189,248,0.45)] hover:before:opacity-100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-cyan-300 active:translate-y-0 active:scale-[0.98] ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {label}
      <ArrowUpRight size={18} />
    </a>
  );
}

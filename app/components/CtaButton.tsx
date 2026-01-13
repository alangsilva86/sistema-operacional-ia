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
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#FF4500] px-7 py-4 text-base font-semibold text-[#050505] shadow-[0_18px_45px_rgba(255,69,0,0.35)] transition-all duration-200 hover:bg-[#ff5f26] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#FF4500] active:scale-[0.98] ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {label}
      <ArrowUpRight size={18} />
    </a>
  );
}

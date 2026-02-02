"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { getCheckoutUrl, trackEvent } from "@/app/lib/analytics";

interface SecondaryCtaLinkProps {
  label: string;
  baseUrl: string;
  location: string;
  className?: string;
  fullWidth?: boolean;
}

export function SecondaryCtaLink({
  label,
  baseUrl,
  location,
  className = "",
  fullWidth = false
}: SecondaryCtaLinkProps) {
  const [href, setHref] = useState(baseUrl);

  useEffect(() => {
    setHref(getCheckoutUrl(baseUrl));
  }, [baseUrl]);

  const handleClick = () => {
    trackEvent("cta_click", { location, variant: "diagnostic" });
    trackEvent("diagnostic_open", { location });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      onClick={handleClick}
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-white/30 hover:text-white ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

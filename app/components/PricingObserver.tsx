"use client";

import { useEffect, useRef } from "react";

import { trackEvent } from "@/app/lib/analytics";

export function PricingObserver() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    let fired = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !fired) {
            fired = true;
            trackEvent("pricing_view", { section: "pricing" });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="h-px w-full" />;
}

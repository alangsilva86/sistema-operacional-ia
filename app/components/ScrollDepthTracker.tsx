"use client";

import { useEffect } from "react";

import { trackEvent } from "@/app/lib/analytics";

const DEFAULT_DEPTHS = [25, 50, 75, 90];

export function ScrollDepthTracker({ depths = DEFAULT_DEPTHS }: { depths?: number[] }) {
  const depthKey = depths.join(",");

  useEffect(() => {
    const sorted = [...depths].sort((a, b) => a - b);
    const fired = new Set<number>();
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (maxScroll <= 0) {
          ticking = false;
          return;
        }
        const percent = Math.round((window.scrollY / maxScroll) * 100);
        sorted.forEach((depth) => {
          if (percent >= depth && !fired.has(depth)) {
            fired.add(depth);
            trackEvent("scroll_depth", { depth });
          }
        });
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [depthKey]);

  return null;
}

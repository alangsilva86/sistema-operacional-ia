import { useEffect } from "react";

type AnalyticsPayload = Record<string, unknown>;

export function trackEvent(name: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const detail = { event: name, ...payload };

  try {
    (window as typeof window & { dataLayer?: unknown[] }).dataLayer?.push(detail);
    window.dispatchEvent(new CustomEvent("analytics", { detail }));
    if (import.meta.env.DEV) {
      console.debug("[analytics]", detail);
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("[analytics:error]", error);
    }
  }
}

export function useTrackView(name: string, payload: AnalyticsPayload = {}) {
  useEffect(() => {
    trackEvent(name, payload);
  }, [name, payload]);
}

export function useScrollDepthTracking(depths: number[] = [25, 50, 75, 90]) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const thresholds = [...depths].sort((a, b) => a - b);
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
        thresholds.forEach((depth) => {
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
  }, [depths.join(",")]);
}

// ---- Conversão / WhatsApp / Concierge ----

export function trackInterest(trigger: string) {
  trackEvent("interest_conversation", {
    trigger,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}

export function trackWhatsappStart(source: string = "concierge") {
  trackEvent("start_whatsapp_conversation", {
    source,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}

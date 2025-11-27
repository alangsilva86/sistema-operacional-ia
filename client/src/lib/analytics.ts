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

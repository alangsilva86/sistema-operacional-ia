export type AnalyticsPayload = Record<string, unknown>;

export function trackEvent(name: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const detail = { event: name, ...payload };

  try {
    (window as typeof window & { dataLayer?: unknown[] }).dataLayer?.push(detail);
    window.dispatchEvent(new CustomEvent("analytics", { detail }));
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", detail);
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.warn("[analytics:error]", error);
    }
  }
}

export function getCheckoutUrl(baseUrl: string) {
  if (typeof window === "undefined") return baseUrl;
  const url = new URL(baseUrl);
  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    if (!url.searchParams.has(key)) {
      url.searchParams.set(key, value);
    }
  });
  return url.toString();
}

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

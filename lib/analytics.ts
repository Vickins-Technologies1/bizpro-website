import { siteConfig } from "@/config/site";

export type AnalyticsEvent =
  | "apk_download_click"
  | "pricing_interaction"
  | "contact_click"
  | "whatsapp_click"
  | "hero_cta_click"
  | "feature_cta_click";

export function track(event: AnalyticsEvent, properties: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !siteConfig.analyticsEndpoint) {
    return;
  }

  const payload = JSON.stringify({
    event,
    properties,
    path: window.location.pathname,
    timestamp: new Date().toISOString()
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(siteConfig.analyticsEndpoint, new Blob([payload], { type: "application/json" }));
    return;
  }

  void fetch(siteConfig.analyticsEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: payload,
    keepalive: true
  });
}


export const GOOGLE_ADS_ID = "AW-18096010711";

// Conversion-Labels aus Google Ads eintragen (Format: "AW-18096010711/XXXXXXXX").
// Solange leer, wird nur ein dataLayer-Event für GTM ausgelöst (kein Ads-Conversion-Hit).
export const conversionLabels = {
  call: "",
  whatsapp: "",
  form: ""
} as const;

export type ConversionType = keyof typeof conversionLabels;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Meldet eine Conversion an GTM (immer) und – falls ein Label hinterlegt ist –
 * an Google Ads. Läuft nur clientseitig und schlägt nie hart fehl.
 */
export function trackConversion(type: ConversionType, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: `conversion_${type}`, ...params });

  const label = conversionLabels[type];
  if (label && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: label, ...params });
  }
}

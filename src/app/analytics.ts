export const GOOGLE_ADS_ID = "AW-18096010711";

// Conversion-Labels aus Google Ads eintragen (Format: "AW-18096010711/XXXXXXXX").
// Solange leer, wird nur ein dataLayer-Event für GTM ausgelöst (kein Ads-Conversion-Hit).
export const conversionLabels = {
  call: "",
  form: "",
  newsletter: ""
} as const;

export type ConversionType = keyof typeof conversionLabels;

/**
 * Nutzerdaten für Google Enhanced Conversions. Werte bleiben roh/plaintext —
 * das Hashing übernimmt das Google-Tag, nicht die Website.
 */
export type UserData = {
  email: string;
  phone_number: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    oaiq?: (...args: unknown[]) => void;
  }
}

/** Österreich — Nummern ohne Ländervorwahl werden hierauf normalisiert. */
const DEFAULT_COUNTRY_CODE = "43";

/**
 * Bringt eine Telefonnummer ins E.164-Format (z. B. "01 4171346" → "+4314171346").
 * Ohne Leerzeichen, Klammern oder Bindestriche — sonst sinkt die Match-Rate.
 */
export function normalizePhoneE164(value: unknown, countryCode = DEFAULT_COUNTRY_CODE): string {
  if (typeof value !== "string") return "";

  const trimmed = value.trim();
  if (!trimmed) return "";

  const hasCountryPrefix = trimmed.startsWith("+");
  let digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";

  if (!hasCountryPrefix) {
    if (digits.startsWith("00")) {
      digits = digits.slice(2);
    } else if (digits.startsWith("0")) {
      digits = `${countryCode}${digits.slice(1)}`;
    } else if (!digits.startsWith(countryCode)) {
      digits = `${countryCode}${digits}`;
    }
  }

  return `+${digits}`;
}

/** E-Mail getrimmt und in Kleinschreibung — plaintext, ohne Hashing. */
export function normalizeEmail(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase();
}

/**
 * Baut das user_data-Objekt für Enhanced Conversions. Beide Felder sind immer
 * vorhanden — fehlende Angaben werden als leerer String übergeben.
 */
export function buildUserData({ email, phone }: { email?: unknown; phone?: unknown }): UserData {
  return {
    email: normalizeEmail(email),
    phone_number: normalizePhoneE164(phone)
  };
}

/**
 * Meldet eine Conversion an GTM (immer) und – falls ein Label hinterlegt ist –
 * an Google Ads. Läuft nur clientseitig und schlägt nie hart fehl.
 *
 * Wichtig: Nur nach erfolgreicher Server-Bestätigung aufrufen, nicht beim Klick.
 * Anfrage-Formulare und Telefonklicks gehen zusätzlich an OpenAI Ads.
 */
export function trackConversion(type: ConversionType, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: `conversion_${type}`, ...params });

  const label = conversionLabels[type];
  if (label && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: label, ...params });
  }

  if (type === "call" || type === "form") {
    measureOpenAiAppointment();
  }
}

function measureOpenAiAppointment() {
  const fire = () => {
    if (typeof window.oaiq !== "function") return false;
    window.oaiq("measure", "appointment_scheduled", { type: "customer_action" });
    return true;
  };

  if (fire()) return;

  const interval = window.setInterval(() => {
    if (fire()) window.clearInterval(interval);
  }, 50);
  window.setTimeout(() => window.clearInterval(interval), 4000);
}

/**
 * Interaktion ohne Conversion-Charakter (z. B. Klick auf einen CTA, der nur
 * zum Formular scrollt). Bewusst getrennt, damit conversion_*-Events
 * ausschließlich echte Abschlüsse zählen.
 */
export function trackCtaClick(params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "cta_click", ...params });
}

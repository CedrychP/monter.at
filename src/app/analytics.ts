import { OPPREF_COOKIE, PIXEL_OBREF_COOKIE, PIXEL_OPPREF_COOKIE } from "./openaiAds";

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
    trackOpenAiEvent("appointment_scheduled", params);
  }
}

const OPENAI_EVENT_DATA = {
  appointment_scheduled: { type: "customer_action" },
  page_viewed: { type: "contents" }
} as const;

export type OpenAiEventName = keyof typeof OPENAI_EVENT_DATA;

function readCookie(name: string): string {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`));
  return match?.[1] ? decodeURIComponent(match[1]) : "";
}

function readUserData(params: Record<string, unknown>): { email?: string; phone?: string } {
  const userData = params.user_data;
  if (!userData || typeof userData !== "object") return {};

  const record = userData as Record<string, unknown>;
  return {
    email: typeof record.email === "string" ? record.email : undefined,
    phone: typeof record.phone_number === "string" ? record.phone_number : undefined
  };
}

function sendOpenAiServerEvent(
  eventName: OpenAiEventName,
  eventId: string,
  params: Record<string, unknown>
) {
  const user = readUserData(params);
  const oppref =
    readCookie(PIXEL_OPPREF_COOKIE) ||
    readCookie(OPPREF_COOKIE) ||
    new URLSearchParams(window.location.search).get("oppref") ||
    "";

  const body = JSON.stringify({
    event_id: eventId,
    type: eventName,
    source_url: window.location.href,
    oppref: oppref || undefined,
    obref: readCookie(PIXEL_OBREF_COOKIE) || undefined,
    email: user.email,
    phone: user.phone
  });

  try {
    const blob = new Blob([body], { type: "application/json" });
    if (navigator.sendBeacon("/api/openai-conversion", blob)) return;
  } catch {
    /* Fallback auf fetch */
  }

  void fetch("/api/openai-conversion", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true
  }).catch(() => undefined);
}

export function trackOpenAiEvent(eventName: OpenAiEventName, params: Record<string, unknown> = {}) {
  const eventId = crypto.randomUUID();
  sendOpenAiServerEvent(eventName, eventId, params);

  const fire = () => {
    if (typeof window.oaiq !== "function") return false;
    window.oaiq("measure", eventName, OPENAI_EVENT_DATA[eventName], { event_id: eventId });
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

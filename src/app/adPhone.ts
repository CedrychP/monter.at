import { siteConfig } from "./siteConfig";

export const AD_PHONE_COOKIE = "monter_ad_source";
export const AD_PHONE_COOKIE_MAX_AGE = 60 * 60 * 24 * 90;

export const AD_PHONE_SOURCES = ["meta", "chatgpt"] as const;
export type AdPhoneSource = (typeof AD_PHONE_SOURCES)[number];

export type AdPhone = {
  display: string;
  href: string;
  source: AdPhoneSource | "organic";
};

const META_UTM_SOURCE = /^(facebook|fb|instagram|ig|meta|an)([._-].*)?$/i;
const CHATGPT_UTM_SOURCE = /^(chatgpt|openai|oai)([._-].*)?$/i;
const META_UTM_MEDIUM = /^(facebook|fb|instagram|ig|meta|paid_social|paidsocial)$/i;

const LEGAL_PHONE_PATHS = [
  "/impressum",
  "/agb",
  "/dsgvo",
  "/barrierefreiheit",
  "/nutzungsbedingungen"
];

export function parseAdSource(value: string | undefined | null): AdPhoneSource | null {
  if (value === "meta" || value === "chatgpt") return value;
  return null;
}

export function isLegalPhonePath(pathname: string): boolean {
  const path = pathname.replace(/\/$/, "") || "/";
  return LEGAL_PHONE_PATHS.includes(path);
}

function envOrConfig(envValue: string | undefined, configValue: string): string {
  const fromEnv = envValue?.trim() ?? "";
  if (fromEnv) return fromEnv;
  return configValue.trim();
}

function phoneForSource(source: AdPhoneSource): { display: string; href: string } {
  if (source === "meta") {
    return {
      display: envOrConfig(process.env.NEXT_PUBLIC_PHONE_META_DISPLAY, siteConfig.adPhones.meta.display),
      href: envOrConfig(process.env.NEXT_PUBLIC_PHONE_META_HREF, siteConfig.adPhones.meta.href)
    };
  }

  return {
    display: envOrConfig(
      process.env.NEXT_PUBLIC_PHONE_CHATGPT_DISPLAY,
      siteConfig.adPhones.chatgpt.display
    ),
    href: envOrConfig(process.env.NEXT_PUBLIC_PHONE_CHATGPT_HREF, siteConfig.adPhones.chatgpt.href)
  };
}

export function getAdPhone(source: AdPhoneSource | null): AdPhone {
  const organic: AdPhone = {
    display: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
    source: "organic"
  };

  if (!source) return organic;

  const mapped = phoneForSource(source);
  if (!mapped.display || !mapped.href) {
    return { ...organic, source };
  }

  return {
    display: mapped.display,
    href: mapped.href,
    source
  };
}

export function detectAdSource(input: {
  searchParams: URLSearchParams;
  referrer?: string | null;
}): AdPhoneSource | null {
  const utmSource = input.searchParams.get("utm_source")?.trim() ?? "";
  const utmMedium = input.searchParams.get("utm_medium")?.trim() ?? "";

  if (CHATGPT_UTM_SOURCE.test(utmSource)) return "chatgpt";
  if (META_UTM_SOURCE.test(utmSource) || META_UTM_MEDIUM.test(utmMedium)) return "meta";

  const oppref = input.searchParams.get("oppref")?.trim() ?? "";
  if (oppref) return "chatgpt";

  const fbclid = input.searchParams.get("fbclid")?.trim() ?? "";
  if (fbclid) return "meta";

  return null;
}

export function adPhoneCookieHeader(source: AdPhoneSource): string {
  return `${AD_PHONE_COOKIE}=${source}; Path=/; Max-Age=${AD_PHONE_COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function writeAdSourceCookie(source: AdPhoneSource) {
  if (typeof document === "undefined") return;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${adPhoneCookieHeader(source)}${secure}`;
}

export function readAdSourceCookie(): AdPhoneSource | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${AD_PHONE_COOKIE}=([^;]*)`));
  return parseAdSource(match?.[1] ? decodeURIComponent(match[1]) : null);
}

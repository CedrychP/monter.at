/**
 * Google Consent Mode v2.
 *
 * Die Tags in layout.tsx laden weiterhin bei jedem Seitenaufruf, verhalten sich
 * aber ohne Einwilligung cookielos: Vor jedem Tag setzt ein Inline-Script alle
 * Consent-Typen auf "denied". Erst die Zustimmung im Banner schaltet per
 * gtag("consent", "update", ...) frei.
 *
 * Diese Variante ist Voraussetzung dafür, dass Google Ads im EWR Conversions
 * modellieren darf — ein reines Blockieren der Skripte liefert stattdessen
 * gar keine Daten.
 */

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export const CONSENT_STORAGE_KEY = "tcc-cookie-consent";

/** Event, auf das der Cookie-Banner aus dem Footer heraus geöffnet wird. */
export const OPEN_CONSENT_SETTINGS_EVENT = "tcc:open-cookie-settings";

/** Event für GTM, damit dort Trigger auf Consent-Änderungen reagieren können. */
export const CONSENT_UPDATE_EVENT = "cookie_consent_update";

export const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false
};

export const FULL_CONSENT: CookieConsent = {
  necessary: true,
  analytics: true,
  marketing: true
};

/**
 * Inline-Script für strategy="beforeInteractive" — muss vor gtm.js und gtag.js
 * laufen, sonst greifen die Defaults zu spät. Liest eine bereits gespeicherte
 * Einwilligung direkt aus dem localStorage, damit wiederkehrende Besucher nicht
 * erst die wait_for_update-Zeit in "denied" verbringen.
 */
export const consentDefaultScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
try {
  var stored = window.localStorage.getItem('${CONSENT_STORAGE_KEY}');
  if (stored) {
    var consent = JSON.parse(stored);
    gtag('consent', 'update', {
      ad_storage: consent.marketing ? 'granted' : 'denied',
      ad_user_data: consent.marketing ? 'granted' : 'denied',
      ad_personalization: consent.marketing ? 'granted' : 'denied',
      analytics_storage: consent.analytics ? 'granted' : 'denied'
    });
    window.dataLayer.push({
      event: '${CONSENT_UPDATE_EVENT}',
      consent_analytics: !!consent.analytics,
      consent_marketing: !!consent.marketing,
      consent_source: 'stored'
    });
  }
} catch (error) {
  /* Kein Storage-Zugriff (Private Mode, blockierte Cookies) — Defaults bleiben. */
}
`;

export function readStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as Partial<CookieConsent>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing)
    };
  } catch {
    return null;
  }
}

/**
 * Schreibt die Einwilligung, meldet sie an Google Consent Mode und legt ein
 * eigenes dataLayer-Event nach, auf das GTM-Trigger hören können.
 */
export function applyConsent(consent: CookieConsent) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    /* Ohne Storage bleibt die Wahl auf diese Sitzung beschränkt. */
  }

  const granted = (allowed: boolean) => (allowed ? "granted" : "denied");

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: granted(consent.marketing),
      ad_user_data: granted(consent.marketing),
      ad_personalization: granted(consent.marketing),
      analytics_storage: granted(consent.analytics)
    });
  }

  window.dataLayer.push({
    event: CONSENT_UPDATE_EVENT,
    consent_analytics: consent.analytics,
    consent_marketing: consent.marketing,
    consent_source: "banner"
  });
}

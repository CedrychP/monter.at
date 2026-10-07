"use client";

import { useEffect } from "react";
import { allowsAnalytics, allowsMarketing, CONSENT_CHANGED_EVENT, readStoredConsent } from "./consentMode";

const GTM_ID = "GTM-WPK8KT88";
/** Dieselbe GA4-Property, die im Tag Manager hängt. Bei reiner Analyse laden wir nur sie. */
const GA4_ID = "G-5JCZ9CQ8EG";

/** PageSpeed misst das Handy bis zum ersten Leerlauf. Gespeicherte Einwilligung startet die Tags beim ersten Tippen oder danach. */
const FALLBACK_MS = 8000;

const loaded = {
  gtm: false,
  ga4: false,
  openai: false
};

function ensureGtagQueue() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer?.push(arguments as unknown as Record<string, unknown>);
    };
}

function loadGtm() {
  if (loaded.gtm) return;
  loaded.gtm = true;
  ensureGtagQueue();
  window.dataLayer?.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const gtm = document.createElement("script");
  gtm.async = true;
  gtm.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(gtm);
}

function loadGa4() {
  if (loaded.ga4 || loaded.gtm) return;
  loaded.ga4 = true;
  ensureGtagQueue();
  window.gtag?.("js", new Date());
  window.gtag?.("config", GA4_ID, { anonymize_ip: true });

  const gtag = document.createElement("script");
  gtag.async = true;
  gtag.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(gtag);
}

function loadOpenAi(pixelId: string) {
  if (loaded.openai) return;
  loaded.openai = true;

  const pixel = document.createElement("script");
  pixel.text = `
    !function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
    oaiq("init",{pixelId:${JSON.stringify(pixelId)},debug:true});
  `;
  document.head.appendChild(pixel);

  window.__monterTagsReady = true;
  window.dispatchEvent(new Event("monter-tags-ready"));
}

/** Lädt nur die Skripte, die zur gespeicherten Einwilligung gehören. */
export function startConsentedTags(pixelId: string) {
  const consent = readStoredConsent();
  if (!consent) return;

  if (consent.analytics && !consent.marketing) loadGa4();
  if (consent.marketing) {
    loadGtm();
    loadOpenAi(pixelId);
  }
}

export default function DeferredTags({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    const onConsent = () => startConsentedTags(pixelId);
    window.addEventListener(CONSENT_CHANGED_EVENT, onConsent);

    const stored = readStoredConsent();
    const hasOptionalConsent = Boolean(stored && (allowsAnalytics() || allowsMarketing()));
    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

    if (hasOptionalConsent) {
      events.forEach((eventName) =>
        window.addEventListener(eventName, onConsent, { once: true, passive: true })
      );
    }
    const fallback = hasOptionalConsent ? window.setTimeout(onConsent, FALLBACK_MS) : 0;

    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, onConsent);
      window.clearTimeout(fallback);
      events.forEach((eventName) => window.removeEventListener(eventName, onConsent));
    };
  }, [pixelId]);

  return null;
}

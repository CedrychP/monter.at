"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  applyConsent,
  DEFAULT_CONSENT,
  FULL_CONSENT,
  OPEN_CONSENT_SETTINGS_EVENT,
  readStoredConsent,
  type CookieConsent
} from "./consentMode";

function Switch({
  checked,
  label,
  onChange
}: {
  checked: boolean;
  label: string;
  onChange: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
        checked ? "bg-[color:var(--accent)]" : "bg-[color:var(--border-strong)]"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function LegalLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-2 text-xs font-light text-[color:var(--muted)] ${className}`}>
      <a className="border-b border-current transition hover:text-[color:var(--ink)]" href="/dsgvo">
        Datenschutz
      </a>
      <a className="border-b border-current transition hover:text-[color:var(--ink)]" href="/impressum">
        Impressum
      </a>
    </div>
  );
}

const actionButtonClass = "cookie-action";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(DEFAULT_CONSENT);
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const openSettings = () => {
      restoreFocusTo.current = document.activeElement as HTMLElement | null;
      const stored = readStoredConsent();
      if (stored) setConsent(stored);
      setIsVisible(true);
      setShowSettings(true);
    };

    const timer = window.setTimeout(() => {
      const stored = readStoredConsent();

      if (stored) {
        setConsent(stored);
      } else {
        setIsVisible(true);
      }
    }, 0);

    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT, openSettings);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT, openSettings);
    };
  }, []);

  const saveConsent = useCallback((nextConsent: CookieConsent) => {
    setConsent(nextConsent);
    applyConsent(nextConsent);
    setIsVisible(false);
    setShowSettings(false);
    restoreFocusTo.current?.focus();
    restoreFocusTo.current = null;
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusable = () =>
      Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.getClientRects().length > 0);

    focusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        saveConsent(DEFAULT_CONSENT);
        return;
      }

      if (event.key !== "Tab") return;

      const elements = focusable();
      if (elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isVisible, showSettings, saveConsent]);

  if (!isVisible) {
    return null;
  }

  const acceptAll = (
    <button type="button" className={`cookie-action-primary ${actionButtonClass}`} onClick={() => saveConsent(FULL_CONSENT)}>
      Alle akzeptieren
    </button>
  );
  const necessaryOnly = (
    <button type="button" className={`cookie-action-ghost ${actionButtonClass}`} onClick={() => saveConsent(DEFAULT_CONSENT)}>
      Nur notwendige
    </button>
  );
  const toggleSettings = (
    <button
      type="button"
      className={`cookie-action-ghost ${actionButtonClass}`}
      onClick={() => setShowSettings((current) => !current)}
    >
      {showSettings ? "Zuklappen" : "Anpassen"}
    </button>
  );
  const saveSelection = (
    <button type="button" className={`cookie-action-primary ${actionButtonClass}`} onClick={() => saveConsent(consent)}>
      Auswahl speichern
    </button>
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-[color:var(--border)] bg-white pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-24px_60px_-28px_rgba(0,0,0,0.35)]">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-text"
        className="mx-auto flex w-full max-w-[88rem] flex-col max-h-[calc(100vh-4.25rem)]"
        style={{ maxHeight: "calc(100dvh - 4.25rem)" }}
      >
        <div className="overflow-y-auto overscroll-contain px-4 pt-4 sm:px-8 sm:pt-6">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Datenschutz</p>
            <h2
              id="cookie-banner-title"
              className="font-display mt-3 text-xl font-light leading-tight tracking-tight sm:mt-4 sm:text-3xl"
            >
              Cookies nur mit Ihrer Wahl.
            </h2>
            <p
              id="cookie-banner-text"
              className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)] sm:mt-3"
            >
              Die Seite, das Formular und die Telefonnummer laufen ohne Tracking. Analyse zählt
              Besuche. Marketing misst, ob ein Anruf oder eine Anfrage aus einer Anzeige kam.
              Beides bleibt aus, bis Sie es einschalten.
            </p>
          </div>

          {showSettings ? (
            <div className="mt-5 border-t border-[color:var(--border)] sm:mt-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 border-b border-[color:var(--border)] py-4">
                <p className="text-sm font-medium">Notwendig</p>
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[color:var(--accent)]">
                  Immer an
                </span>
                <p className="col-span-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  Hält die Seite bedienbar, merkt sich diese Auswahl und zeigt nach einem
                  Anzeigenklick die passende Telefonnummer.
                </p>
              </div>

              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 border-b border-[color:var(--border)] py-4">
                <p className="text-sm font-medium">Analyse</p>
                <Switch
                  label="Analyse"
                  checked={consent.analytics}
                  onChange={(analytics) => setConsent((current) => ({ ...current, analytics }))}
                />
                <p className="col-span-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  Lädt Google Analytics und zählt, welche Seiten besucht werden. Meta, Google Ads
                  und der ChatGPT-Anzeigenpixel bleiben aus.
                </p>
              </div>

              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 py-4">
                <p className="text-sm font-medium">Marketing</p>
                <Switch
                  label="Marketing"
                  checked={consent.marketing}
                  onChange={(marketing) => setConsent((current) => ({ ...current, marketing }))}
                />
                <p className="col-span-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  Lädt Google Ads, Meta, den ChatGPT-Anzeigenpixel und den Tag Manager. Nur dann
                  zählen Anrufe und Formulare als Kampagnenergebnis.
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="shrink-0 border-t border-[color:var(--border)] px-4 py-3 sm:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <LegalLinks className="order-last justify-center pt-1 md:order-first md:pt-0" />
            <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:items-center md:justify-end">
              <div className="col-span-2 md:col-span-1">{showSettings ? saveSelection : acceptAll}</div>
              {necessaryOnly}
              {toggleSettings}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

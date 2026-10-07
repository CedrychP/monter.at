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
      );

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

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-[color:var(--border)] bg-white shadow-[0_-24px_60px_-28px_rgba(0,0,0,0.35)]">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-text"
        className="mx-auto max-h-[calc(100vh-1rem)] max-w-[88rem] overflow-y-auto px-5 py-5 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Datenschutz</p>
            <h2
              id="cookie-banner-title"
              className="font-display mt-4 text-2xl font-light leading-tight tracking-tight sm:text-3xl"
            >
              Cookies nur mit Ihrer Wahl.
            </h2>
            <p
              id="cookie-banner-text"
              className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]"
            >
              Die Seite, das Formular und die Telefonnummer laufen ohne Tracking. Analyse zählt
              Besuche. Marketing misst, ob ein Anruf oder eine Anfrage aus einer Anzeige kam.
              Beides bleibt aus, bis Sie es einschalten.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button type="button" className="btn-primary px-5 py-3 text-[0.72rem]" onClick={() => saveConsent(FULL_CONSENT)}>
              Alle akzeptieren
            </button>
            <button type="button" className="btn-ghost px-5 py-3 text-[0.72rem]" onClick={() => saveConsent(DEFAULT_CONSENT)}>
              Nur notwendige
            </button>
            <button
              type="button"
              className="px-5 py-3 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
              onClick={() => setShowSettings((current) => !current)}
            >
              {showSettings ? "Auswahl zuklappen" : "Anpassen"}
            </button>
          </div>
        </div>

        {showSettings ? (
          <div className="mt-8 border-t border-[color:var(--border)]">
            <div className="grid gap-0 border-b border-[color:var(--border)] py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
              <div>
                <p className="text-sm font-medium">Notwendig</p>
                <p className="mt-1 max-w-xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  Hält die Seite bedienbar, merkt sich diese Auswahl und zeigt nach einem
                  Anzeigenklick die passende Telefonnummer. Immer an.
                </p>
              </div>
              <span className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)] sm:mt-0">
                Immer an
              </span>
            </div>

            <div className="grid gap-4 border-b border-[color:var(--border)] py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
              <div>
                <p className="text-sm font-medium">Analyse</p>
                <p className="mt-1 max-w-xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  Lädt Google Analytics und zählt, welche Seiten besucht werden. Meta, Google Ads
                  und der ChatGPT-Anzeigenpixel bleiben aus.
                </p>
              </div>
              <Switch
                label="Analyse"
                checked={consent.analytics}
                onChange={(analytics) => setConsent((current) => ({ ...current, analytics }))}
              />
            </div>

            <div className="grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
              <div>
                <p className="text-sm font-medium">Marketing</p>
                <p className="mt-1 max-w-xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  Lädt Google Ads, Meta, den ChatGPT-Anzeigenpixel und den Tag Manager. Nur dann
                  zählen Anrufe und Formulare als Kampagnenergebnis.
                </p>
              </div>
              <Switch
                label="Marketing"
                checked={consent.marketing}
                onChange={(marketing) => setConsent((current) => ({ ...current, marketing }))}
              />
            </div>

            <div className="flex flex-col gap-4 border-t border-[color:var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-6 text-xs font-light text-[color:var(--muted)]">
                <a className="border-b border-current transition hover:text-[color:var(--ink)]" href="/dsgvo">
                  Datenschutz
                </a>
                <a className="border-b border-current transition hover:text-[color:var(--ink)]" href="/impressum">
                  Impressum
                </a>
              </div>
              <button
                type="button"
                className="btn-primary px-5 py-3 text-[0.72rem]"
                onClick={() => saveConsent(consent)}
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex gap-6 text-xs font-light text-[color:var(--muted)]">
            <a className="border-b border-current transition hover:text-[color:var(--ink)]" href="/dsgvo">
              Datenschutz
            </a>
            <a className="border-b border-current transition hover:text-[color:var(--ink)]" href="/impressum">
              Impressum
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

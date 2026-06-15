"use client";

import { useEffect, useState } from "react";

type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const storageKey = "tcc-cookie-consent";
const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false
};

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);

  useEffect(() => {
    const openSettings = () => {
      setIsVisible(true);
      setShowSettings(true);
    };

    const timer = window.setTimeout(() => {
      const savedConsent = window.localStorage.getItem(storageKey);

      if (savedConsent) {
        try {
          setConsent(JSON.parse(savedConsent) as CookieConsent);
        } catch {
          setConsent(defaultConsent);
        }
      } else {
        setIsVisible(true);
      }
    }, 0);

    window.addEventListener("tcc:open-cookie-settings", openSettings);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("tcc:open-cookie-settings", openSettings);
    };
  }, []);

  const saveConsent = (nextConsent: CookieConsent) => {
    setConsent(nextConsent);
    window.localStorage.setItem(storageKey, JSON.stringify(nextConsent));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-h-[calc(100vh-2rem)] max-w-xl overflow-y-auto border border-[color:var(--border)] bg-white p-6 text-[color:var(--ink)] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)] sm:ml-auto sm:mr-0 sm:p-8">
        <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Datenschutz</p>
        <h2 className="font-display mt-6 text-2xl font-normal leading-tight tracking-tight sm:text-3xl">
          Cookies auf dieser Website
        </h2>
        <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
          Wir verwenden notwendige Cookies. Analyse und Marketing aktivieren wir nur mit
          Ihrer Zustimmung.
        </p>

        {showSettings ? (
          <div className="mt-6 space-y-0 border-t border-[color:var(--border)]">
            <div className="border-b border-[color:var(--border)] py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Notwendig</p>
                  <p className="mt-1 text-xs font-light leading-relaxed text-[color:var(--muted)]">
                    Immer aktiv für die korrekte Funktion der Website.
                  </p>
                </div>
                <span className="tracking-eyebrow text-[color:var(--accent)]">Aktiv</span>
              </div>
            </div>
            <label className="block cursor-pointer border-b border-[color:var(--border)] py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Analyse</p>
                  <p className="mt-1 text-xs font-light leading-relaxed text-[color:var(--muted)]">
                    Hilft uns zu verstehen, welche Inhalte relevant sind.
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4 cursor-pointer accent-[color:var(--accent)]"
                  checked={consent.analytics}
                  onChange={(event) =>
                    setConsent((current) => ({ ...current, analytics: event.target.checked }))
                  }
                />
              </div>
            </label>
            <label className="block cursor-pointer py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Marketing</p>
                  <p className="mt-1 text-xs font-light leading-relaxed text-[color:var(--muted)]">
                    Erlaubt spätere Kampagnen- und Conversion-Messung.
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4 cursor-pointer accent-[color:var(--accent)]"
                  checked={consent.marketing}
                  onChange={(event) =>
                    setConsent((current) => ({ ...current, marketing: event.target.checked }))
                  }
                />
              </div>
            </label>
          </div>
        ) : null}

        <div className="mt-7 flex flex-col gap-3 border-t border-[color:var(--border)] pt-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-light text-[color:var(--muted)]">
            <a className="transition hover:text-[color:var(--accent)]" href="/dsgvo">
              Datenschutz
            </a>
            <a className="transition hover:text-[color:var(--accent)]" href="/impressum">
              Impressum
            </a>
          </div>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            <button
              type="button"
              className="btn-ghost py-3 text-[0.7rem]"
              onClick={() => saveConsent(defaultConsent)}
            >
              Nur notwendige
            </button>
            <button
              type="button"
              className="btn-ghost py-3 text-[0.7rem]"
              onClick={() => setShowSettings((current) => !current)}
            >
              {showSettings ? "Schließen" : "Anpassen"}
            </button>
            <button
              type="button"
              className="btn-primary py-3 text-[0.7rem]"
              onClick={() =>
                saveConsent(
                  showSettings ? consent : { necessary: true, analytics: true, marketing: true }
                )
              }
            >
              {showSettings ? "Speichern" : "Akzeptieren"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

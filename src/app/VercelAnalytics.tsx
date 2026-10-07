"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { allowsAnalytics, CONSENT_CHANGED_EVENT } from "./consentMode";

/** Seitenaufrufe für Vercel. Nur nach der Statistik-Einwilligung, ohne Cookie. */
export default function VercelAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(allowsAnalytics());
    sync();
    window.addEventListener(CONSENT_CHANGED_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, sync);
  }, []);

  if (!enabled) return null;
  return <Analytics />;
}

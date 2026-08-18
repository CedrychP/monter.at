"use client";

import { useEffect } from "react";
import { normalizePhoneE164, trackConversion } from "./analytics";

/**
 * Erfasst Klicks auf sämtliche tel:-Links per Event-Delegation auf document.
 * Damit sind auch neu hinzugefügte Telefonlinks automatisch getrackt, ohne dass
 * an jedem Link ein onClick-Handler hängen muss.
 */
export default function TelClickTracker() {
  useEffect(() => {
    const resolveSource = (link: HTMLAnchorElement): string => {
      const explicit = link.dataset.telSource;
      if (explicit) return explicit;

      const section = link.closest<HTMLElement>("section[id]");
      if (section?.id) return section.id;

      if (link.closest("header")) return "header";
      if (link.closest("footer")) return "footer";

      const path = window.location.pathname.replace(/^\/|\/$/g, "");
      return path ? path.replace(/\//g, "_") : "startseite";
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;

      trackConversion("call", {
        source: resolveSource(link),
        phone_number: normalizePhoneE164(link.getAttribute("href")?.replace(/^tel:/, "")),
        page_path: window.location.pathname
      });
    };

    // Capture-Phase, damit der Klick auch dann zählt, wenn ein Handler weiter
    // innen die Propagation stoppt.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}

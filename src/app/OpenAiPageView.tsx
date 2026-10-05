"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackOpenAiEvent } from "./analytics";

/** Interne Suche und API — kein Content-PageView für OpenAI Ads. */
const SKIP_PREFIXES = ["/suche", "/api/"];

let lastMeasuredPath: string | null = null;

function shouldMeasure(pathname: string): boolean {
  return !SKIP_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix));
}

/**
 * OpenAI Ads: page_viewed auf jedem Content-Aufruf, Pixel + Conversions API.
 * Nicht im Init-Skript im Head — sonst zählt der erste Hit doppelt.
 */
export default function OpenAiPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || !shouldMeasure(pathname)) return;
    if (lastMeasuredPath === pathname) return;

    const measure = () => {
      if (lastMeasuredPath === pathname) return;
      lastMeasuredPath = pathname;
      trackOpenAiEvent("page_viewed");
    };

    if (window.__monterTagsReady) {
      measure();
      return;
    }

    window.addEventListener("monter-tags-ready", measure, { once: true });
    const fallback = window.setTimeout(measure, 9000);
    return () => {
      window.removeEventListener("monter-tags-ready", measure);
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}

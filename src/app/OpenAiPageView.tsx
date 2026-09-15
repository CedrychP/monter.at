"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Interne Suche und API — kein Content-PageView für OpenAI Ads. */
const SKIP_PREFIXES = ["/suche", "/api/"];

let lastMeasuredPath: string | null = null;

function shouldMeasure(pathname: string): boolean {
  return !SKIP_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix));
}

function measurePageView(pathname: string): boolean {
  if (typeof window.oaiq !== "function") return false;
  if (lastMeasuredPath === pathname) return true;

  lastMeasuredPath = pathname;
  window.oaiq("measure", "page_viewed", { type: "contents" });
  return true;
}

/**
 * OpenAI Ads: page_viewed auf jedem Content-Aufruf, auch bei Client-Navigation.
 * Nicht im Init-Skript im Head — sonst zählt der erste Hit doppelt.
 */
export default function OpenAiPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || !shouldMeasure(pathname)) return;

    if (measurePageView(pathname)) return;

    const interval = window.setInterval(() => {
      if (measurePageView(pathname)) window.clearInterval(interval);
    }, 50);
    const timeout = window.setTimeout(() => window.clearInterval(interval), 4000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}

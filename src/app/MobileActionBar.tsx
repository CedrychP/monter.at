"use client";

import Link from "next/link";

import { trackConversion } from "./analytics";
import { siteConfig } from "./siteConfig";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-white/10 bg-[color:var(--ink)] lg:hidden">
      <div className="mx-auto grid max-w-[88rem] grid-cols-2">
        <a
          href={`tel:${siteConfig.phoneHref}`}
          onClick={() => trackConversion("call", { source: "mobile_bar" })}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white transition active:bg-white/10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
          Anrufen
        </a>
        <Link
          href="/#kontakt"
          onClick={() => trackConversion("form", { source: "mobile_bar" })}
          className="flex items-center justify-center gap-2 bg-[color:var(--accent)] py-3.5 text-sm font-semibold text-white transition active:brightness-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
            <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
          Anfrage senden
        </Link>
      </div>
    </div>
  );
}

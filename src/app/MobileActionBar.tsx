"use client";

import Link from "next/link";

import { trackConversion } from "./analytics";
import { siteConfig } from "./siteConfig";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-white/10 bg-[color:var(--ink)] px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] lg:hidden">
      <div className="mx-auto grid max-w-[88rem] grid-cols-[minmax(0,1fr)_auto] items-stretch gap-2.5">
        <a
          href={`tel:${siteConfig.phoneHref}`}
          onClick={() => trackConversion("call", { source: "mobile_bar" })}
          className="flex min-w-0 items-center gap-3 rounded-sm border border-white/15 bg-white/[0.04] px-3 py-2.5 text-white transition active:border-white/30 active:bg-white/[0.08]"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="min-w-0 text-left leading-tight">
            <span className="block text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white/55">
              Anrufen
            </span>
            <span className="mt-0.5 block truncate font-display text-base tabular-nums tracking-tight text-white">
              {siteConfig.phoneDisplay}
            </span>
          </span>
        </a>

        <Link
          href="/#kontakt"
          onClick={() => trackConversion("form", { source: "mobile_bar" })}
          className="flex min-w-[9.75rem] items-center justify-center gap-2 rounded-sm bg-[color:var(--accent)] px-4 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-white transition active:bg-[color:var(--accent-hover)]"
        >
          Termin buchen
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M1 8h13M9 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

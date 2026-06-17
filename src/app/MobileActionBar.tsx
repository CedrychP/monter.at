"use client";

import { trackConversion } from "./analytics";
import { siteConfig } from "./siteConfig";

const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hallo MONTER, ich hätte gerne eine Reparatur bzw. einen Termin. "
)}`;

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
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion("whatsapp", { source: "mobile_bar" })}
          className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold text-white transition active:brightness-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.23-8.21 8.23Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}

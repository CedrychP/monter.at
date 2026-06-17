"use client";

import { useEffect, useRef, useState } from "react";
import { trackConversion } from "./analytics";
import { siteConfig } from "./siteConfig";

const quickReplies = [
  {
    label: "Haushaltsgerät reparieren",
    text: "Hallo MONTER, ich brauche eine Reparatur für mein Haushaltsgerät. "
  },
  {
    label: "Garagentor-Reparatur",
    text: "Hallo MONTER, mein Garagentor funktioniert nicht richtig. "
  },
  {
    label: "Termin / Rückruf",
    text: "Hallo MONTER, ich hätte gerne einen Termin bzw. einen Rückruf. "
  },
  {
    label: "Frage zu Preisen",
    text: "Hallo MONTER, ich habe eine Frage zu den Preisen. "
  }
];

function buildWaLink(text: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleReply = (text: string) => {
    trackConversion("whatsapp", { source: "widget" });
    window.open(buildWaLink(text), "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-[5.25rem] right-4 z-[60] flex flex-col items-end sm:right-6 lg:bottom-6"
    >
      {/* Chat-Karte */}
      <div
        className={`mb-3 w-[min(20rem,calc(100vw-2rem))] origin-bottom-right overflow-hidden rounded-2xl border border-black/10 bg-white text-[color:var(--ink)] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.45)] transition-all duration-300 ${
          open ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
        role="dialog"
        aria-label="WhatsApp Chat"
        aria-hidden={!open}
      >
        <div className="flex items-center gap-3 bg-[#075E54] px-5 py-4 text-white">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.23-8.21 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-tight">MONTER Service</p>
            <p className="text-xs font-light text-white/80">Antwort meist in wenigen Minuten</p>
          </div>
        </div>

        <div className="px-5 py-5">
          <p className="text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Hallo! Wie können wir helfen? Wählen Sie ein Thema – wir antworten direkt über WhatsApp.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply.label}
                type="button"
                onClick={() => handleReply(reply.text)}
                className="group flex items-center justify-between gap-3 rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-left text-sm font-medium text-[color:var(--ink)] transition hover:border-[#25D366] hover:bg-[#25D366]/5"
              >
                {reply.label}
                <span className="text-[#25D366] transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bubble */}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? "WhatsApp Chat schließen" : "WhatsApp Chat öffnen"}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.7)] transition hover:scale-105 active:scale-95"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.23-8.21 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
          </svg>
        )}
      </button>
    </div>
  );
}

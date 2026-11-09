"use client";

import { useEffect, useState, type ReactNode } from "react";
import { siteConfig } from "./siteConfig";

const whatsappWebHref = `https://web.whatsapp.com/send?phone=${siteConfig.whatsappPhone}`;
const whatsappAppHref = `https://wa.me/${siteConfig.whatsappPhone}`;

type WhatsAppLinkProps = {
  className?: string;
  children: ReactNode;
};

/** Computer: WhatsApp Web. Handy: die App, derselbe Chat. */
export function WhatsAppLink({ className, children }: WhatsAppLinkProps) {
  const [href, setHref] = useState(whatsappAppHref);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const apply = () => setHref(desktop.matches ? whatsappWebHref : whatsappAppHref);
    apply();
    desktop.addEventListener("change", apply);
    return () => desktop.removeEventListener("change", apply);
  }, []);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function WhatsAppButton() {
  return (
    <WhatsAppLink className="fixed right-4 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-14px_rgba(0,0,0,0.55)] transition hover:bg-[#1ebe5a] bottom-[calc(5.6rem+env(safe-area-inset-bottom,0px))] lg:bottom-6 lg:right-6 lg:flex lg:h-auto lg:w-auto lg:items-center lg:gap-2.5 lg:px-4 lg:py-3">
      <ChatMark />
      <span className="sr-only lg:hidden">Live Chat</span>
      <span className="hidden text-[0.78rem] font-medium uppercase tracking-[0.12em] lg:block">
        Live Chat
      </span>
    </WhatsAppLink>
  );
}

function ChatMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M6.4 16.2 4.7 19c-.3.48-1.02.26-1.02-.3V7.2A2.2 2.2 0 0 1 5.88 5h12.24A2.2 2.2 0 0 1 20.32 7.2v6.8a2.2 2.2 0 0 1-2.2 2.2H8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 10.6h.01M12 10.6h.01M15.8 10.6h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

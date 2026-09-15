"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { usePathname } from "next/navigation";
import {
  detectAdSource,
  getAdPhone,
  isLegalPhonePath,
  parseAdSource,
  readAdSourceCookie,
  writeAdSourceCookie,
  type AdPhone,
  type AdPhoneSource
} from "./adPhone";
import { normalizePhoneE164 } from "./analytics";
import { siteConfig } from "./siteConfig";

const AdPhoneContext = createContext<AdPhone>(getAdPhone(null));

type AdPhoneProviderProps = {
  initialSource: AdPhoneSource | null;
  children: ReactNode;
};

function isDefaultBusinessNumber(hrefOrDisplay: string): boolean {
  const current = normalizePhoneE164(hrefOrDisplay.replace(/^tel:/i, ""));
  const canonical = normalizePhoneE164(siteConfig.phoneHref);
  return Boolean(current) && current === canonical;
}

function applyTrackedPhone(root: ParentNode, phone: AdPhone, pathname: string) {
  if (phone.display === siteConfig.phoneDisplay && phone.href === siteConfig.phoneHref) {
    return;
  }

  const skipLegalMain = isLegalPhonePath(pathname);
  const links = Array.from(root.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]'));

  for (const link of links) {
    if (link.closest("[data-legal-phone]")) continue;
    if (skipLegalMain && link.closest("#inhalt")) continue;
    if (!isDefaultBusinessNumber(link.getAttribute("href") ?? "")) continue;

    link.setAttribute("href", `tel:${phone.href}`);

    const label = link.getAttribute("aria-label");
    if (label?.includes(siteConfig.phoneDisplay)) {
      link.setAttribute("aria-label", label.split(siteConfig.phoneDisplay).join(phone.display));
    }

    if (link.childElementCount === 0 && isDefaultBusinessNumber(link.textContent ?? "")) {
      link.textContent = phone.display;
      continue;
    }

    const numberNodes = link.querySelectorAll("[data-phone-number], .hero-phone-cta__number");
    numberNodes.forEach((node) => {
      if (isDefaultBusinessNumber(node.textContent ?? "") || node.textContent?.trim() === siteConfig.phoneDisplay) {
        node.textContent = phone.display;
      }
    });

    for (const child of Array.from(link.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE && isDefaultBusinessNumber(child.textContent ?? "")) {
        child.textContent = phone.display;
      }
    }
  }
}

export function AdPhoneProvider({ initialSource, children }: AdPhoneProviderProps) {
  const pathname = usePathname();
  const [source, setSource] = useState<AdPhoneSource | null>(initialSource);

  useEffect(() => {
    const fromUrl = detectAdSource({
      searchParams: new URLSearchParams(window.location.search)
    });

    if (fromUrl) {
      writeAdSourceCookie(fromUrl);
      setSource(fromUrl);
      return;
    }

    const fromCookie = readAdSourceCookie() ?? parseAdSource(initialSource);
    if (fromCookie) setSource(fromCookie);
  }, [initialSource]);

  const phone = useMemo(() => getAdPhone(source), [source]);

  useEffect(() => {
    applyTrackedPhone(document.body, phone, pathname);

    const observer = new MutationObserver(() => {
      applyTrackedPhone(document.body, phone, pathname);
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [phone, pathname]);

  return <AdPhoneContext.Provider value={phone}>{children}</AdPhoneContext.Provider>;
}

export function useAdPhone(): AdPhone {
  return useContext(AdPhoneContext);
}

type TrackedPhoneLinkProps = {
  className?: string;
  children?: ReactNode;
  "aria-label"?: string;
  "data-tel-source"?: string;
};

export function TrackedPhoneLink({
  className,
  children,
  "aria-label": ariaLabel,
  "data-tel-source": telSource
}: TrackedPhoneLinkProps) {
  const phone = useAdPhone();
  const resolvedAriaLabel = ariaLabel
    ? ariaLabel.split(siteConfig.phoneDisplay).join(phone.display)
    : undefined;

  return (
    <a
      href={`tel:${phone.href}`}
      className={className}
      aria-label={resolvedAriaLabel}
      data-tel-source={telSource}
    >
      {children ?? <span data-phone-number>{phone.display}</span>}
    </a>
  );
}

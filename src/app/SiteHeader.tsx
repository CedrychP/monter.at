"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import NavMonterAccount from "./NavMonterAccount";
import NavNewsletterSignup from "./NavNewsletterSignup";
import { siteConfig } from "./siteConfig";

const emergencyPhoneDisplay = siteConfig.phoneDisplay;
const emergencyPhoneHref = siteConfig.phoneHref;

type NavLink = {
  label: string;
  href: string;
  menuId?: string;
  gold?: boolean;
  external?: boolean;
};

type MegaMenuColumn = {
  eyebrow: string;
  items: NavLink[];
  note?: string;
};

type MegaMenuConfig = {
  id: string;
  label: string;
  columns: MegaMenuColumn[];
  feature?: {
    eyebrow: string;
    title: string;
    text: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  newsletter?: boolean;
  account?: boolean;
  showSpecialLinks?: boolean;
};

const householdSanitaerLinks: NavLink[] = [
  { label: "Waschmaschine", href: "/leistungen/waschmaschine-reparatur-wien" },
  { label: "Geschirrspüler", href: "/leistungen/geschirrspueler-reparatur-wien" },
  { label: "Trockner", href: "/leistungen/trockner-reparatur-wien" },
  { label: "Waschtrockner", href: "/leistungen/waschtrockner-reparatur-wien" }
];

const householdKuecheLinks: NavLink[] = [
  { label: "Kühlschrank", href: "/leistungen/kuehlschrank-reparatur-wien" },
  { label: "Gefrierschrank", href: "/leistungen/tiefkuehl-reparatur-wien" },
  { label: "Herd & Ceranfeld", href: "/leistungen/backofen-herd-reparatur-wien" },
  { label: "Backofen", href: "/leistungen/backofen-herd-reparatur-wien" },
  { label: "Dunstabzug", href: "/leistungen/dunstabzug-reparatur-wien" }
];

const repairDevices: NavLink[] = [
  ...householdSanitaerLinks,
  ...householdKuecheLinks
];

const repairBrandsNav: NavLink[] = [
  { label: "Bosch", href: "/marken/bosch-reparatur-wien" },
  { label: "Miele", href: "/marken/miele-reparatur-wien" },
  { label: "Siemens", href: "/marken/siemens-reparatur-wien" },
  { label: "AEG", href: "/marken/aeg-reparatur-wien" },
  { label: "Gorenje", href: "/marken/gorenje-reparatur-wien" }
];

const weitereMarkenAlphabetLinks: NavLink[] = [
  { label: "A – D", href: "/#marken" },
  { label: "E – H", href: "/#marken" },
  { label: "I – L", href: "/#marken" },
  { label: "M – P", href: "/#marken" },
  { label: "Q – Z", href: "/#marken" }
];

const additionalServiceLinks: NavLink[] = [
  { label: "Preise & Pauschalen", href: "/preise" },
  { label: "Einsatzgebiete", href: "/#anfahrt" },
  { label: "Ersatzteil gesucht?", href: "/ersatzteile" },
  { label: "Firmenkunden", href: "/firmenkunden" }
];

const serviceNavLinks: NavLink[] = [
  { label: "Reparatur buchen", href: "/#kontakt" },
  { label: "Ersatzteil gesucht?", href: "/ersatzteile" },
  { label: "Wartungsservice", href: "/wartungsservice" },
  { label: "Lieferung & Montage", href: "/lieferung-montage" }
];

const serviceInfoLinks: NavLink[] = [
  { label: "Preise & Pauschalen", href: "/preise" },
  { label: "Einsatzgebiete", href: "/#anfahrt" },
  { label: "Firmenkunden", href: "/firmenkunden" }
];

const geraetekaufExtraLinks: NavLink[] = [
  { label: "Lieferpreise", href: "/preise" },
  { label: "Montage & Installation", href: "/lieferung-montage" },
  { label: "Garantieverlängerung", href: "/garantieverlaengerung" },
  { label: "Altgeräteentsorgung", href: "/altgeraeteentsorgung" }
];

const customerVoiceLinks: NavLink[] = [
  {
    label: "Google Rezensionen ansehen",
    href: siteConfig.googleReviewsUrl,
    external: true
  },
  { label: "Kundenerfahrungen", href: "/#bewertungen" },
  {
    label: "Bewertung schreiben",
    href: siteConfig.googleReviewWriteUrl,
    external: true
  }
];

const customerNewsLinks: NavLink[] = [
  { label: "Blog & News", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kurse", href: "/kurse" },
  { label: "Veranstaltungen", href: "/veranstaltungen" }
];

const garageDoorAndServiceLinks: NavLink[] = [
  { label: "Sektionaltor", href: "/garagentor-reparatur-wien" },
  { label: "Rolltor", href: "/garagentor-reparatur-wien" },
  { label: "Wartung & Service", href: "/garagentor-reparatur-wien" },
  { label: "Sicherheitsüberprüfung", href: "/garagentor-reparatur-wien" }
];

const garageDriveLinks: NavLink[] = [
  { label: "Garagentorantrieb", href: "/garagentor-reparatur-wien" },
  { label: "Motor", href: "/garagentor-reparatur-wien" },
  { label: "Federbruch", href: "/garagentor-reparatur-wien" },
  { label: "Federwechsel", href: "/garagentor-reparatur-wien" },
  { label: "Rollentausch", href: "/garagentor-reparatur-wien" }
];

const geraetepflegeLinks: NavLink[] = [
  { label: "Gerätepflege & Reinigung", href: "/wartungsservice" },
  { label: "Geräte-Retter-Prämie", href: "/geraete-retter-praemie" },
  { label: "Wartungsempfehlung", href: "/wartungsservice" },
  { label: "Pflegeprodukte & Zubehör", href: "/ersatzteile" }
];

// Hauptnavigation — Dropdowns über menuId an megaMenus gekoppelt
const primaryNavGroup: NavLink[] = [
  { label: "Garagentore", href: "/garagentor-reparatur-wien", menuId: "garage" },
  { label: "Haushaltsgeräte", href: "/#leistungen", menuId: "service" },
  { label: "Marken", href: "/#marken", menuId: "marken" }
];

const customerNavLink: NavLink = {
  label: "Unsere Kunden",
  href: "/#bewertungen",
  menuId: "kunden"
};

const secondaryNavGroup: NavLink[] = [
  { label: "Service", href: "/wartungsservice", menuId: "nav-service" },
  { label: "Gerätekauf", href: "/geraetekauf", menuId: "geraetekauf" }
];

const companyLinks: NavLink[] = [
  { label: "Über MONTER", href: "/ueber-uns" },
  { label: "Unsere Arbeitsweise", href: "/ueber-uns#arbeitsweise" },
  { label: "Bewertungen", href: "/#bewertungen" }
];

const contentLinks: NavLink[] = [
  { label: "Blog & News", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Impressum", href: "/impressum" }
];

const dropdownSpecialLinks: NavLink[] = [
  { label: "Über Monter", href: "/ueber-uns" },
  { label: "MONTER GOLD", href: "/monter-gold", gold: true },
  { label: "Aktionskatalog", href: "/aktionskatalog" },
  { label: "Geräte-Retter-Prämie", href: "/geraete-retter-praemie" },
  { label: "Kaufberatung", href: "/kaufberatung" },
  { label: "Bewertungen", href: "/#bewertungen" }
];

function getDropdownSpecialLinkClassName(item: NavLink, light = false): string {
  const classes = ["nav-dropdown-special-link"];
  if (light) classes.push("nav-dropdown-special-link--light");
  if (item.gold) classes.push("nav-dropdown-special-link--gold");
  return classes.join(" ");
}

function isExternalNavLink(item: NavLink) {
  return item.external || item.href.startsWith("http");
}

function NavDropdownLink({
  item,
  className,
  onClick
}: {
  item: NavLink;
  className: string;
  onClick?: () => void;
}) {
  if (isExternalNavLink(item)) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} onClick={onClick} className={className}>
      {item.label}
    </Link>
  );
}

function getFeatureLinkLabel(label: string, href: string): string {
  if (href.startsWith("tel:") && label === emergencyPhoneDisplay) {
    return `Telefon: ${label}`;
  }
  return label;
}

const megaMenus: MegaMenuConfig[] = [
  {
    id: "garage",
    label: "Garagentore",
    columns: [
      { eyebrow: "Tore & Wartung", items: garageDoorAndServiceLinks },
      { eyebrow: "Antrieb & Reparatur", items: garageDriveLinks },
      { eyebrow: "Mehr Service", items: additionalServiceLinks }
    ],
    feature: {
      eyebrow: "Garagentor Reparaturdienst",
      title: "Garagentor klemmt in Wien?",
      text:
        "Telefon ist der schnellste Weg zu einer Einschätzung. Wir prüfen Fehlerbild, Termin und Aufwand direkt im Gespräch.",
      primaryLabel: "Jetzt anrufen",
      primaryHref: `tel:${emergencyPhoneHref}`,
      secondaryLabel: "Termin buchen",
      secondaryHref: "/reparatur-buchen"
    }
  },
  {
    id: "service",
    label: "Geräte",
    columns: [
      { eyebrow: "Sanitärgeräte", items: householdSanitaerLinks },
      { eyebrow: "Küchengeräte", items: householdKuecheLinks },
      { eyebrow: "Mehr Service", items: additionalServiceLinks }
    ],
    feature: {
      eyebrow: "Haushaltsgeräte Reparaturdienst",
      title: "Geräteausfall in Wien?",
      text:
        "Telefon ist der schnellste Weg zu einer Einschätzung. Wir prüfen Fehlerbild, Termin und Aufwand direkt im Gespräch.",
      primaryLabel: "Jetzt anrufen",
      primaryHref: `tel:${emergencyPhoneHref}`,
      secondaryLabel: "Termin buchen",
      secondaryHref: "/reparatur-buchen"
    }
  },
  {
    id: "marken",
    label: "Marken",
    columns: [
      {
        eyebrow: "Schwerpunkt-Marken",
        items: repairBrandsNav
      },
      {
        eyebrow: "Weitere Marken",
        items: weitereMarkenAlphabetLinks
      },
      {
        eyebrow: "Mehr Service",
        items: additionalServiceLinks
      }
    ],
    feature: {
      eyebrow: "Markenoffene Reparatur",
      title: "Wir reparieren über 60 Marken.",
      text:
        "Bosch, Siemens, Miele, AEG, Gorenje, Elektra Bregenz und viele mehr — markenoffen, mit ehrlicher Diagnose.",
      primaryLabel: "Jetzt anrufen",
      primaryHref: `tel:${emergencyPhoneHref}`,
      secondaryLabel: "Termin buchen",
      secondaryHref: "/reparatur-buchen"
    }
  },
  {
    id: "kunden",
    label: "Unsere Kunden",
    columns: [
      { eyebrow: "Kundenstimmen", items: customerVoiceLinks },
      { eyebrow: "Monter News", items: customerNewsLinks },
      { eyebrow: "Mehr Service", items: additionalServiceLinks }
    ],
    feature: {
      eyebrow: "Reparaturdienst",
      title: "Gerät defekt in Wien?",
      text:
        "Telefon ist der schnellste Weg zu einer Einschätzung. Wir prüfen Fehlerbild, Termin und Aufwand direkt im Gespräch.",
      primaryLabel: "Jetzt anrufen",
      primaryHref: `tel:${emergencyPhoneHref}`,
      secondaryLabel: "Termin buchen",
      secondaryHref: "/reparatur-buchen"
    }
  },
  {
    id: "nav-service",
    label: "Service",
    columns: [
      { eyebrow: "Service", items: serviceNavLinks },
      { eyebrow: "Informationen", items: serviceInfoLinks }
    ],
    account: true,
    newsletter: true
  },
  {
    id: "geraetekauf",
    label: "Gerätekauf",
    columns: [
      {
        eyebrow: "Neugerätekauf",
        items: [],
        note: "Der Neugerätekauf ist bei uns derzeit noch nicht verfügbar."
      },
      { eyebrow: "Zusatz", items: geraetekaufExtraLinks }
    ],
    account: true,
    newsletter: true
  },
  {
    id: "pflege",
    label: "Gerätepflege",
    columns: [
      { eyebrow: "Pflege & Wartung", items: geraetepflegeLinks },
      {
        eyebrow: "Geräte",
        items: repairDevices.slice(0, 4)
      },
      {
        eyebrow: "Service",
        items: [
          { label: "Preise & Pauschalen", href: "/preise" },
          { label: "Anfrage stellen", href: "/kontakt" },
          { label: "Alle Leistungen", href: "/#leistungen" }
        ]
      }
    ],
    feature: {
      eyebrow: "Gerätepflege",
      title: "Länger nutzen, besser pflegen.",
      text:
        "Reinigung, Wartung und klare Empfehlungen — damit Ihre Geräte zuverlässig bleiben und Reparaturen seltener werden.",
      primaryLabel: "Beratung anfragen",
      primaryHref: "/kontakt",
      secondaryLabel: emergencyPhoneDisplay,
      secondaryHref: `tel:${emergencyPhoneHref}`
    }
  },
  {
    id: "ueber",
    label: "Über Uns",
    columns: [
      { eyebrow: "Unternehmen", items: companyLinks },
      { eyebrow: "Inhalte", items: contentLinks }
    ],
    feature: {
      eyebrow: "Hintergrund",
      title: "MONTER Reparatur & Service",
      text:
        "Service-Auftritt der Tech Craft Consulting GmbH. Reparatur mit Technik, Hausverstand und klarer Haltung.",
      primaryLabel: "Mehr über uns",
      primaryHref: "/ueber-uns",
      secondaryLabel: "Direkt anrufen",
      secondaryHref: `tel:${emergencyPhoneHref}`
    }
  }
];

type SiteHeaderProps = {
  logoSrc: string;
};

export default function SiteHeader({ logoSrc }: SiteHeaderProps) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [navHidden, setNavHidden] = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);
  const accountPanelRef = useRef<HTMLDivElement | null>(null);
  const cartPanelRef = useRef<HTMLDivElement | null>(null);
  const lastScrollYRef = useRef(0);
  const scrollAccumRef = useRef(0);
  const scrollTickingRef = useRef(false);

  const updateScrollState = useCallback(() => {
    if (scrollTickingRef.current) return;
    scrollTickingRef.current = true;

    window.requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const previousY = lastScrollYRef.current;
      const delta = currentY - previousY;

      setIsAtTop(currentY < 12);

      if (currentY < 96) {
        scrollAccumRef.current = 0;
        setNavHidden(false);
      } else if (delta > 0) {
        scrollAccumRef.current += delta;
        if (scrollAccumRef.current > 28) {
          setNavHidden(true);
          setActiveMenu(null);
          scrollAccumRef.current = 0;
        }
      } else {
        scrollAccumRef.current = 0;
      }

      lastScrollYRef.current = currentY;
      scrollTickingRef.current = false;
    });
  }, []);

  const closeAllOverlays = useCallback(() => {
    setActiveMenu(null);
    setAccountOpen(false);
    setCartOpen(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    closeAllOverlays();
    setMobileMenuOpen(false);
    updateScrollState();
  }, [pathname, closeAllOverlays, updateScrollState]);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAllOverlays();
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAllOverlays]);

  useEffect(() => {
    const overlayOpen = Boolean(activeMenu) || mobileMenuOpen;
    if (typeof document === "undefined") return;
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeMenu, mobileMenuOpen]);

  useEffect(() => {
    if (!accountOpen) return;
    const onClick = (event: MouseEvent) => {
      if (
        accountPanelRef.current &&
        !accountPanelRef.current.contains(event.target as Node)
      ) {
        setAccountOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [accountOpen]);

  useEffect(() => {
    if (!cartOpen) return;
    const onClick = (event: MouseEvent) => {
      if (
        cartPanelRef.current &&
        !cartPanelRef.current.contains(event.target as Node)
      ) {
        setCartOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [cartOpen]);

  const showMegaMenu = (id: string) => {
    setAccountOpen(false);
    setActiveMenu(id);
  };

  const closeMegaMenu = () => {
    setActiveMenu(null);
  };

  const renderNavItemWithMenu = (link: NavLink) => (
    <Link
      key={link.label}
      href={link.href}
      className={`nav-item py-1 ${activeMenu === link.menuId ? "nav-item--active" : ""}`}
      onMouseEnter={() => showMegaMenu(link.menuId!)}
      onFocus={() => showMegaMenu(link.menuId!)}
      onClick={closeAllOverlays}
      aria-expanded={activeMenu === link.menuId}
      aria-controls={`mega-${link.menuId}`}
    >
      {link.label}
    </Link>
  );

  const renderMobileSubmenu = (menu: MegaMenuConfig) => (
    <div className="mt-4 grid gap-5">
      {menu.columns.map((column) => (
        <div key={`m-${menu.id}-${column.eyebrow}`}>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent-on-dark)]">
            {column.eyebrow}
          </p>
          {column.note ? (
            <p className="mt-2 text-sm font-light leading-relaxed text-white/70">{column.note}</p>
          ) : null}
          {column.items.length > 0 ? (
            <div className="mt-2 grid gap-1">
              {column.items.map((item) => (
                <NavDropdownLink
                  key={`m-${menu.id}-${column.eyebrow}-${item.label}`}
                  item={item}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium tracking-tight text-white/90 transition hover:text-white"
                />
              ))}
            </div>
          ) : null}
        </div>
      ))}
      {menu.account ? (
        <div className="border-t border-white/10 pt-5">
          <NavMonterAccount variant="dark" onNavigate={() => setMobileMenuOpen(false)} />
        </div>
      ) : null}
      {menu.newsletter ? (
        <div className="border-t border-white/10 pt-5">
          <NavNewsletterSignup variant="dark" />
        </div>
      ) : null}
      {menu.feature ? (
        <div className="border-t border-white/10 pt-5">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent-on-dark)]">
            {menu.feature.eyebrow}
          </p>
          <p className="mt-2 text-sm font-semibold tracking-tight text-white">{menu.feature.title}</p>
          <p className="mt-2 text-sm font-light leading-relaxed text-white/80">{menu.feature.text}</p>
          <div className="mt-4 grid gap-2">
            <a
              href={menu.feature.primaryHref}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-on-dark justify-center"
            >
              {getFeatureLinkLabel(menu.feature.primaryLabel, menu.feature.primaryHref)}
            </a>
            {menu.feature.secondaryLabel && menu.feature.secondaryHref ? (
              <Link
                href={menu.feature.secondaryHref}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-on-dark-ghost justify-center"
              >
                {getFeatureLinkLabel(menu.feature.secondaryLabel, menu.feature.secondaryHref)}
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );

  const headerBarSolid =
    isAtTop ||
    Boolean(activeMenu) ||
    mobileMenuOpen ||
    !navHidden;

  const headerBarBg = headerBarSolid
    ? "bg-[color:var(--ink)]"
    : "bg-[rgba(10,10,10,0.55)] backdrop-blur-md backdrop-saturate-150";

  const navVisible =
    !navHidden ||
    headerHovered ||
    Boolean(activeMenu) ||
    mobileMenuOpen;

  const onHeaderZoneLeave = () => {
    if (navHidden) {
      setHeaderHovered(false);
      setActiveMenu(null);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-[80] w-full">
        <div
          className="relative overflow-visible text-white"
          onMouseLeave={onHeaderZoneLeave}
        >
          {/* Ein durchgehender Hintergrund für Logo-Zeile + Navigation */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 top-0 z-0 transition-[height,background-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${headerBarBg} ${
              navVisible ? "h-full lg:h-[calc(100%+3.5rem)]" : "h-full"
            }`}
          />

          {/* Top row: Logo + Telefonnummer + Icons — Hover löst Nav aus */}
          <div
            className="relative z-40 mx-auto flex w-full max-w-[88rem] items-center justify-between gap-3 px-5 py-2.5 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:py-3"
            onMouseEnter={() => setHeaderHovered(true)}
          >
            <a
              href={`tel:${emergencyPhoneHref}`}
              className="order-2 col-start-1 row-start-1 hidden min-w-0 flex-col justify-self-start self-center sm:flex sm:max-w-none lg:order-none"
              aria-label={`Reparatur-Hotline ${emergencyPhoneDisplay}`}
            >
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-white/70 sm:text-[0.65rem] sm:tracking-[0.18em]">
                Reparatur
              </span>
              <span className="mt-0.5 text-[0.85rem] font-bold tracking-tight text-white transition hover:text-[color:var(--accent)] sm:text-lg">
                {emergencyPhoneDisplay}
              </span>
            </a>

            <Link
              href="/"
              className="order-1 flex shrink-0 items-center lg:order-none lg:col-auto lg:col-start-2 lg:justify-self-center"
              aria-label="MONTER Reparatur & Service Startseite"
              onClick={closeAllOverlays}
            >
              <Image
                src={logoSrc}
                alt="MONTER Reparatur & Service"
                width={300}
                height={80}
                priority
                unoptimized
                className="h-8 w-auto sm:h-9"
              />
            </Link>

            <div className="relative z-10 order-3 col-start-3 flex shrink-0 items-center justify-self-end gap-1 sm:gap-2 lg:order-none">
              <a
                href={`tel:${emergencyPhoneHref}`}
                aria-label={`Anrufen ${emergencyPhoneDisplay}`}
                className="grid h-10 w-10 place-items-center text-[color:var(--nav-text)] transition hover:text-[color:var(--nav-text-hover)] sm:hidden"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <Link
                href="/suche"
                onClick={() => {
                  setActiveMenu(null);
                  setAccountOpen(false);
                  setCartOpen(false);
                }}
                aria-label="Suche"
                className={`grid h-10 w-10 place-items-center transition ${
                  pathname === "/suche"
                    ? "text-[color:var(--nav-text-hover)]"
                    : "text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]"
                }`}
              >
                <svg width="22" height="22" viewBox="0 0 20 20" aria-hidden="true">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" fill="none" />
                  <path d="m13.5 13.5 4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </Link>

              <div className="relative" ref={accountPanelRef}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveMenu(null);
                    setCartOpen(false);
                    setAccountOpen((current) => !current);
                  }}
                  aria-label={accountOpen ? "Kontobereich schließen" : "Kontobereich öffnen"}
                  aria-expanded={accountOpen}
                  className={`hidden h-10 w-10 place-items-center transition sm:grid ${
                    accountOpen
                      ? "text-[color:var(--nav-text-hover)]"
                      : "text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]"
                  }`}
                >
                  <svg width="22" height="22" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.3" fill="none" />
                    <path
                      d="M3 17c.8-3.4 3.6-5.2 7-5.2s6.2 1.8 7 5.2"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {accountOpen ? (
                  <div
                    className="fixed inset-x-3 top-[4.5rem] z-[110] mx-auto w-auto max-w-[24rem] overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--ink)] text-white shadow-[0_28px_70px_-20px_rgba(0,0,0,0.65)] sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mx-0 sm:mt-3 sm:w-[22rem] sm:max-w-[calc(100vw-2rem)] sm:rounded-xl"
                  >
                    <div className="flex items-start gap-4 border-b border-white/10 px-6 py-5">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white">
                        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                          <circle cx="10" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.3" fill="none" />
                          <path
                            d="M3 17c.8-3.4 3.6-5.2 7-5.2s6.2 1.8 7 5.2"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="tracking-eyebrow text-[color:var(--accent-on-dark)]">Mein Monter</p>
                        <p className="mt-1.5 font-display text-lg font-normal leading-tight tracking-tight text-white">
                          Ihr Kundenbereich
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" aria-hidden="true" />
                        Bald verfügbar
                      </span>
                      <p className="mt-4 text-sm font-light leading-relaxed text-white/65">
                        Verlauf, Rechnungen und Termine an einem Ort — der Kundenbereich ist gerade in
                        Vorbereitung. Bis dahin erreichen Sie uns direkt:
                      </p>

                      <div className="header-panel-cta-list">
                        <a href={`tel:${emergencyPhoneHref}`} className="header-panel-cta header-panel-cta--primary">
                          {emergencyPhoneDisplay}
                        </a>
                        <Link
                          href="/kontakt"
                          onClick={() => setAccountOpen(false)}
                          className="header-panel-cta header-panel-cta--secondary"
                        >
                          Anfrage stellen
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="relative" ref={cartPanelRef}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveMenu(null);
                    setAccountOpen(false);
                    setCartOpen((current) => !current);
                  }}
                  aria-label={cartOpen ? "Warenkorb schließen" : "Warenkorb öffnen"}
                  aria-expanded={cartOpen}
                  className={`hidden h-10 w-10 place-items-center transition sm:grid ${
                    cartOpen
                      ? "text-[color:var(--nav-text-hover)]"
                      : "text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]"
                  }`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </button>

                {cartOpen ? (
                  <div
                    className="fixed inset-x-3 top-[4.5rem] z-[110] mx-auto w-auto max-w-[24rem] overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--ink)] text-white shadow-[0_28px_70px_-20px_rgba(0,0,0,0.65)] sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mx-0 sm:mt-3 sm:w-[22rem] sm:max-w-[calc(100vw-2rem)] sm:rounded-xl"
                  >
                    <div className="flex items-start gap-4 border-b border-white/10 px-6 py-5">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="9" cy="21" r="1" />
                          <circle cx="20" cy="21" r="1" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="tracking-eyebrow text-[color:var(--accent-on-dark)]">Warenkorb</p>
                        <p className="mt-1.5 font-display text-lg font-normal leading-tight tracking-tight text-white">
                          Bestellung &amp; Angebot
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" aria-hidden="true" />
                        Bald verfügbar
                      </span>
                      <p className="mt-4 text-sm font-light leading-relaxed text-white/65">
                        Die Bestellfunktion ist gerade in Vorbereitung. Für Leistungen und Ersatzteile
                        erstellen wir Ihnen gerne ein individuelles Angebot:
                      </p>

                      <div className="header-panel-cta-list">
                        <a href={`tel:${emergencyPhoneHref}`} className="header-panel-cta header-panel-cta--primary">
                          {emergencyPhoneDisplay}
                        </a>
                        <Link
                          href="/kontakt"
                          onClick={() => setCartOpen(false)}
                          className="header-panel-cta header-panel-cta--secondary"
                        >
                          Anfrage stellen
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((current) => !current)}
                aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                className="grid h-11 w-11 place-items-center border border-white/20 text-white transition hover:border-white lg:hidden"
              >
                <span className="sr-only">{mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}</span>
                <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                  <span
                    className={`h-px rounded-full bg-current transition ${
                      mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-px rounded-full bg-current transition ${
                      mobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-px rounded-full bg-current transition ${
                      mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Desktop navigation — klappt bei Hover über Logo-Zeile auf */}
          <div
            className={`absolute inset-x-0 top-[calc(100%-1px)] z-10 hidden lg:block transition-[max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              activeMenu ? "overflow-visible" : "overflow-hidden"
            } ${
              navVisible
                ? activeMenu
                  ? "max-h-[80vh]"
                  : "max-h-[3.5rem]"
                : "max-h-0 pointer-events-none"
            }`}
            onMouseEnter={() => setHeaderHovered(true)}
            onMouseLeave={closeMegaMenu}
            aria-hidden={!navVisible}
          >
            <div
              className={`relative transition-opacity ease-out ${
                navVisible
                  ? "opacity-100 duration-300 delay-100"
                  : "invisible opacity-0 duration-0"
              }`}
            >
            <nav
              className="mx-auto flex w-full max-w-[88rem] flex-wrap items-center justify-center gap-x-10 gap-y-1.5 px-5 pb-3 pt-3 sm:gap-x-12 sm:px-8"
              aria-label="Hauptnavigation"
            >
              {primaryNavGroup.map((link) =>
                link.menuId ? (
                  renderNavItemWithMenu(link)
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="nav-item py-1"
                    onMouseEnter={closeMegaMenu}
                    onClick={closeAllOverlays}
                  >
                    {link.label}
                  </Link>
                )
              )}
              {renderNavItemWithMenu(customerNavLink)}
              <span
                className="hidden h-4 w-px self-center bg-white/20 lg:block"
                aria-hidden="true"
              />
              {secondaryNavGroup.map((link) =>
                link.menuId ? (
                  renderNavItemWithMenu(link)
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="nav-item py-1"
                    onMouseEnter={closeMegaMenu}
                    onClick={closeAllOverlays}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {activeMenu ? <div className="nav-divider" aria-hidden="true" /> : null}

            {megaMenus.map((menu) => (
              <div
                key={menu.id}
                id={`mega-${menu.id}`}
                className={`nav-dropdown ${activeMenu === menu.id ? "block" : "hidden"}`}
                onMouseEnter={() => showMegaMenu(menu.id)}
                aria-hidden={activeMenu !== menu.id}
              >
                <div className="nav-dropdown-inner">
                  {menu.columns.length === 0 && !menu.feature && !menu.account && !menu.newsletter ? (
                    <div className="nav-dropdown-column nav-dropdown-column--special-only">
                      <div className="nav-dropdown-special-list">
                        {dropdownSpecialLinks.map((item) => (
                          <Link
                            key={`special-${menu.id}-${item.label}`}
                            href={item.href}
                            onClick={closeAllOverlays}
                            className={getDropdownSpecialLinkClassName(item)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                  {menu.showSpecialLinks !== false ? (
                  <div className="nav-dropdown-column nav-dropdown-column--special">
                    <div className="nav-dropdown-special-list">
                      {dropdownSpecialLinks.map((item) => (
                        <Link
                          key={`special-${item.label}`}
                          href={item.href}
                          onClick={closeAllOverlays}
                          className={getDropdownSpecialLinkClassName(item)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  ) : null}

                  {menu.columns.map((column) => (
                    <div key={column.eyebrow} className="nav-dropdown-column-group">
                      <div className="nav-dropdown-separator" aria-hidden="true" />
                      <div className="nav-dropdown-column">
                        <p className="nav-dropdown-eyebrow">{column.eyebrow}</p>
                        {column.note ? (
                          <p className="nav-dropdown-note">{column.note}</p>
                        ) : null}
                        {column.items.length > 0 ? (
                        <div className="nav-dropdown-list">
                          {column.items.map((item) => (
                            <NavDropdownLink
                              key={`${menu.id}-${item.label}`}
                              item={item}
                              onClick={closeAllOverlays}
                              className="nav-dropdown-link"
                            />
                          ))}
                        </div>
                        ) : null}
                      </div>
                    </div>
                  ))}

                  {menu.feature ? (
                  <div className="nav-dropdown-column-group">
                    <div className="nav-dropdown-separator" aria-hidden="true" />
                    <aside className="nav-dropdown-column nav-dropdown-column--feature">
                      <p className="nav-dropdown-eyebrow">{menu.feature.eyebrow}</p>
                      <p className="nav-dropdown-title mt-0 normal-case">
                        {menu.feature.title}
                      </p>
                      <p className="nav-dropdown-body mt-3">
                        {menu.feature.text}
                      </p>
                      <div className="nav-dropdown-cta-list">
                        <a
                          href={menu.feature.primaryHref}
                          onClick={closeAllOverlays}
                          className="nav-dropdown-cta nav-dropdown-cta--primary"
                        >
                          {getFeatureLinkLabel(menu.feature.primaryLabel, menu.feature.primaryHref)}
                        </a>
                        {menu.feature.secondaryLabel && menu.feature.secondaryHref ? (
                          <a
                            href={menu.feature.secondaryHref}
                            onClick={closeAllOverlays}
                            className="nav-dropdown-cta nav-dropdown-cta--secondary"
                          >
                            {getFeatureLinkLabel(
                              menu.feature.secondaryLabel,
                              menu.feature.secondaryHref
                            )}
                          </a>
                        ) : null}
                      </div>
                    </aside>
                  </div>
                  ) : null}

                  {menu.account ? (
                  <div className="nav-dropdown-column-group">
                    <div className="nav-dropdown-separator" aria-hidden="true" />
                    <aside className="nav-dropdown-column nav-dropdown-column--account">
                      <NavMonterAccount variant="dark" onNavigate={closeAllOverlays} />
                    </aside>
                  </div>
                  ) : null}

                  {menu.newsletter ? (
                  <div className="nav-dropdown-column-group">
                    <div className="nav-dropdown-separator" aria-hidden="true" />
                    <aside className="nav-dropdown-column nav-dropdown-column--newsletter">
                      <NavNewsletterSignup variant="dark" />
                    </aside>
                  </div>
                  ) : null}
                    </>
                  )}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-white/10 bg-[color:var(--ink)] text-white transition-[max-height,opacity] duration-300 lg:hidden ${
            mobileMenuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative max-h-[88vh] overflow-y-auto bg-[color:var(--ink)] px-5 pb-6 pt-5 text-white sm:px-8">
            {/* Standard-Links — immer sichtbar, nicht in den Untermenüs wiederholt */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 border-b border-white/10 pb-5">
              {dropdownSpecialLinks.map((item) => (
                <Link
                  key={`m-special-${item.label}`}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={getDropdownSpecialLinkClassName(item)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {primaryNavGroup.map((link) => {
              if (!link.menuId) {
                return (
                  <Link
                    key={`m-${link.label}`}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block border-b border-white/10 py-3 text-[1.05rem] font-semibold tracking-tight"
                  >
                    {link.label}
                  </Link>
                );
              }

              const menu = megaMenus.find((entry) => entry.id === link.menuId);
              if (!menu) return null;

              return (
                <details key={`m-${link.label}`} className="group border-b border-white/10 py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[1.05rem] font-semibold tracking-tight">
                    {link.label}
                    <svg className="ml-3 shrink-0 text-white/50 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  {renderMobileSubmenu(menu)}
                </details>
              );
            })}
            <details className="group border-b border-white/10 py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[1.05rem] font-semibold tracking-tight">
                {customerNavLink.label}
                <svg className="ml-3 shrink-0 text-white/50 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              {(() => {
                const menu = megaMenus.find((entry) => entry.id === customerNavLink.menuId);
                return menu ? renderMobileSubmenu(menu) : null;
              })()}
            </details>

            {secondaryNavGroup.map((link) =>
              link.menuId ? (
                <details key={`m-${link.label}`} className="group border-b border-white/10 py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[1.05rem] font-semibold tracking-tight">
                    {link.label}
                    <svg className="ml-3 shrink-0 text-white/50 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  {(() => {
                    const menu = megaMenus.find((entry) => entry.id === link.menuId);
                    return menu ? renderMobileSubmenu(menu) : null;
                  })()}
                </details>
              ) : (
                <Link
                  key={`m-${link.label}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block border-b border-white/10 py-3 text-[1.05rem] font-semibold tracking-tight"
                >
                  {link.label}
                </Link>
              )
            )}

            <details className="group border-b border-white/10 py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[1.05rem] font-semibold tracking-tight">
                Mein MONTER
                <svg className="ml-3 shrink-0 text-white/50 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/80">
                Der Kundenbereich ist noch nicht verfügbar. Bitte melden Sie sich vorerst
                telefonisch oder über das Anfrageformular.
              </p>
            </details>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white/60">
                    Direkt erreichbar
                  </p>
                  <a
                    href={`tel:${emergencyPhoneHref}`}
                    className="block truncate text-lg font-semibold tracking-tight text-white transition hover:text-[color:var(--accent-on-dark)]"
                  >
                    {emergencyPhoneDisplay}
                  </a>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <a href={`tel:${emergencyPhoneHref}`} className="btn-on-dark justify-center">
                  Anrufen
                </a>
                <Link
                  href="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-on-dark-ghost justify-center"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop while menus open */}
      <div
        className={`fixed inset-0 z-[70] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          activeMenu ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeAllOverlays}
      />
    </>
  );
}

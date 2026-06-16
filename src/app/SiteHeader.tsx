"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { blogPosts } from "./blog/posts";
import { brandPages } from "./marken/brands";
import { servicePages } from "./leistungen/services";
import { siteConfig } from "./siteConfig";

const emergencyPhoneDisplay = siteConfig.phoneDisplay;
const emergencyPhoneHref = siteConfig.phoneHref;

type NavLink = { label: string; href: string; menuId?: string };

type MegaMenuColumn = {
  eyebrow: string;
  items: NavLink[];
};

type MegaMenuConfig = {
  id: string;
  label: string;
  columns: MegaMenuColumn[];
  feature: {
    eyebrow: string;
    title: string;
    text: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

const repairDevices: NavLink[] = [
  { label: "Waschmaschine", href: "/leistungen/waschmaschine-reparatur-wien" },
  { label: "Geschirrspüler", href: "/leistungen/geschirrspueler-reparatur-wien" },
  { label: "Backofen & Herd", href: "/leistungen/backofen-herd-reparatur-wien" },
  { label: "Trockner", href: "/leistungen/trockner-reparatur-wien" },
  { label: "Kühlschrank", href: "/leistungen/kuehlschrank-reparatur-wien" },
  { label: "Tiefkühlgerät", href: "/leistungen/tiefkuehl-reparatur-wien" }
];

const repairBrandsNav: NavLink[] = [
  { label: "Bosch", href: "/marken/bosch-reparatur-wien" },
  { label: "Miele", href: "/marken/miele-reparatur-wien" },
  { label: "Siemens", href: "/marken/siemens-reparatur-wien" },
  { label: "AEG", href: "/marken/aeg-reparatur-wien" },
  { label: "Gorenje", href: "/marken/gorenje-reparatur-wien" },
  { label: "Beko", href: "/marken/beko-reparatur-wien" }
];

const additionalServiceLinks: NavLink[] = [
  { label: "Preise & Pauschalen", href: "/preise" },
  { label: "Anfahrtsgebiete", href: "/#anfahrt" },
  { label: "Geräte-Retter-Prämie", href: "/#kontakt" },
  { label: "Firmenkunden", href: "/#geschaeftskunden" }
];

const geraetepflegeLinks: NavLink[] = [
  { label: "Gerätepflege & Reinigung", href: "/kontakt" },
  { label: "Geräte-Retter-Prämie", href: "/#kontakt" },
  { label: "Wartungsempfehlung", href: "/kontakt" },
  { label: "Pflegeprodukte & Zubehör", href: "/kontakt" }
];

// Hauptnavigation — Dropdowns über menuId an megaMenus gekoppelt
const primaryNavGroup: NavLink[] = [
  { label: "Garagentore", href: "/garagentor-reparatur-wien" },
  { label: "Haushaltsgeräte", href: "/#leistungen", menuId: "service" },
  { label: "Marken", href: "/#marken", menuId: "marken" },
  { label: "Gerätereinigung", href: "/kontakt", menuId: "pflege" }
];

const customerNavLink: NavLink = { label: "Unsere Kunden", href: "/#bewertungen" };

const secondaryNavGroup: NavLink[] = [
  { label: "Service", href: "/kontakt" },
  { label: "Gerätekauf", href: "/kontakt" }
];

const companyLinks: NavLink[] = [
  { label: "Über MONTER", href: "/ueber-uns" },
  { label: "Unsere Arbeitsweise", href: "/ueber-uns#arbeitsweise" },
  { label: "Bewertungen", href: "/#bewertungen" }
];

const contentLinks: NavLink[] = [
  { label: "Blog & Ratgeber", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Impressum", href: "/impressum" }
];

const dropdownSpecialLinks: NavLink[] = [
  { label: "Über Monter", href: "/ueber-uns" },
  { label: "Monter Club", href: "/kontakt" },
  { label: "Aktionskatalog", href: "/kontakt" },
  { label: "Geräte-Retter-Prämie", href: "/#kontakt" },
  { label: "Kaufberatung", href: "/kontakt" }
];

const megaMenus: MegaMenuConfig[] = [
  {
    id: "service",
    label: "Geräte",
    columns: [
      { eyebrow: "Geräte", items: repairDevices },
      { eyebrow: "Mehr Service", items: additionalServiceLinks }
    ],
    feature: {
      eyebrow: "Notdienst",
      title: "Geräteausfall in Wien?",
      text:
        "Telefon ist der schnellste Weg zu einer Einschätzung. Wir prüfen Fehlerbild, Termin und Aufwand direkt im Gespräch.",
      primaryLabel: emergencyPhoneDisplay,
      primaryHref: `tel:${emergencyPhoneHref}`,
      secondaryLabel: "Anfrage stellen",
      secondaryHref: "/kontakt"
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
        eyebrow: "Weitere häufige Marken",
        items: [
          { label: "Elektra Bregenz", href: "/#marken" },
          { label: "Whirlpool", href: "/#marken" },
          { label: "Bauknecht", href: "/#marken" },
          { label: "Liebherr", href: "/#marken" },
          { label: "Samsung", href: "/#marken" },
          { label: "NEFF", href: "/#marken" }
        ]
      },
      {
        eyebrow: "Service",
        items: [
          { label: "Komplette Markenliste", href: "/#marken" },
          { label: "Marke nicht gefunden?", href: "/kontakt" },
          { label: "Ersatzteile prüfen", href: "/kontakt" }
        ]
      }
    ],
    feature: {
      eyebrow: "Markenoffen",
      title: "Wir reparieren über 60 Marken.",
      text:
        "Bosch, Siemens, Miele, AEG, Gorenje, Elektra Bregenz und viele mehr — markenoffen, mit ehrlicher Diagnose.",
      primaryLabel: "Alle Marken ansehen",
      primaryHref: "/#marken",
      secondaryLabel: "Anfrage stellen",
      secondaryHref: "/kontakt"
    }
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

type SearchEntry = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string;
};

const popularSearches = [
  "Waschmaschine",
  "Geschirrspüler",
  "Bosch Reparatur",
  "Notdienst",
  "Preise",
  "Geräte-Retter-Prämie"
];

const staticSegmentLabels: Record<string, string> = {
  leistungen: "Leistungen",
  marken: "Marken",
  blog: "Blog & Ratgeber",
  preise: "Preise",
  kontakt: "Kontakt",
  "ueber-uns": "Über Uns",
  impressum: "Impressum",
  agb: "AGB",
  dsgvo: "Datenschutz"
};

function buildBreadcrumbs(pathname: string): NavLink[] {
  if (!pathname || pathname === "/") return [];
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return [];

  const crumbs: NavLink[] = [{ label: "Start", href: "/" }];
  let path = "";
  segments.forEach((segment) => {
    path += `/${segment}`;
    let label = staticSegmentLabels[segment];
    if (!label) {
      const service = servicePages.find((s) => s.slug === segment);
      const brand = brandPages.find((b) => b.slug === segment);
      const post = blogPosts.find((p) => p.slug === segment);
      label = service?.title || (brand ? `${brand.brand} Reparatur` : undefined) || post?.title || segment;
    }
    crumbs.push({ label, href: path });
  });
  return crumbs;
}

type SiteHeaderProps = {
  logoSrc: string;
};

export default function SiteHeader({ logoSrc }: SiteHeaderProps) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);
  const [navHidden, setNavHidden] = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const accountPanelRef = useRef<HTMLDivElement | null>(null);
  const cartPanelRef = useRef<HTMLDivElement | null>(null);
  const lastScrollYRef = useRef(0);
  const scrollAccumRef = useRef(0);
  const scrollTickingRef = useRef(false);

  const breadcrumbs = useMemo(() => buildBreadcrumbs(pathname || "/"), [pathname]);

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
    setSearchOpen(false);
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
    if (searchOpen) {
      window.requestAnimationFrame(() => searchInputRef.current?.focus());
    }
  }, [searchOpen]);

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

  useEffect(() => {
    const overlayOpen = Boolean(activeMenu) || searchOpen || mobileMenuOpen;
    if (typeof document === "undefined") return;
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeMenu, searchOpen, mobileMenuOpen]);

  const searchIndex = useMemo<SearchEntry[]>(() => {
    const fromServices: SearchEntry[] = servicePages.map((service) => ({
      title: service.title,
      description: service.description,
      href: `/leistungen/${service.slug}`,
      category: "Leistung",
      keywords: `${service.title} ${service.description} ${service.category} reparatur`
    }));
    const fromBrands: SearchEntry[] = brandPages.map((brand) => ({
      title: `${brand.brand} Reparatur Wien`,
      description: brand.description,
      href: `/marken/${brand.slug}`,
      category: "Marke",
      keywords: `${brand.brand} marke reparatur ${brand.description}`
    }));
    const fromBlog: SearchEntry[] = blogPosts.map((post) => ({
      title: post.title,
      description: post.description,
      href: `/blog/${post.slug}`,
      category: "Blog",
      keywords: `${post.title} ${post.description} ${post.category}`
    }));
    const fromStatic: SearchEntry[] = [
      {
        title: "Preise & Pauschalen",
        description: "Anfahrt, Diagnose, Arbeitspauschale und Material — transparent.",
        href: "/preise",
        category: "Service",
        keywords: "preise pauschale anfahrt diagnose kosten"
      },
      {
        title: "Kontakt & Anfrage",
        description: "Telefonisch oder per Anfrageformular Termin abstimmen.",
        href: "/kontakt",
        category: "Service",
        keywords: "kontakt anfrage termin notdienst telefon"
      },
      {
        title: "Über MONTER Reparatur & Service",
        description: "Service-Auftritt der Tech Craft Consulting GmbH in Wien.",
        href: "/ueber-uns",
        category: "Unternehmen",
        keywords: "über uns unternehmen tcc tech craft"
      }
    ];
    return [...fromServices, ...fromBrands, ...fromBlog, ...fromStatic];
  }, []);

  const searchResults = useMemo<SearchEntry[]>(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    const tokens = query.split(/\s+/).filter(Boolean);
    return searchIndex
      .map((entry) => {
        const haystack = `${entry.title} ${entry.keywords}`.toLowerCase();
        let score = 0;
        tokens.forEach((token) => {
          if (haystack.includes(token)) score += 1;
          if (entry.title.toLowerCase().includes(token)) score += 2;
        });
        return { entry, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(({ entry }) => entry);
  }, [searchQuery, searchIndex]);

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchResults.length > 0) {
      window.location.href = searchResults[0].href;
    }
  };

  const onSearchKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setSearchOpen(false);
    }
  };

  const showMegaMenu = (id: string) => {
    setSearchOpen(false);
    setAccountOpen(false);
    setActiveMenu(id);
  };

  const closeMegaMenu = () => {
    setActiveMenu(null);
  };

  const headerBarSolid =
    isAtTop ||
    Boolean(activeMenu) ||
    searchOpen ||
    mobileMenuOpen ||
    !navHidden;

  const headerBarBg = headerBarSolid
    ? "bg-[color:var(--ink)]"
    : "bg-[rgba(10,10,10,0.55)] backdrop-blur-md backdrop-saturate-150";

  const navVisible =
    !navHidden ||
    headerHovered ||
    Boolean(activeMenu) ||
    searchOpen ||
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
              navVisible ? "h-[calc(100%+3.5rem)]" : "h-full"
            }`}
          />

          {/* Top row: Logo + Telefonnummer + Icons — Hover löst Nav aus */}
          <div
            className="relative z-40 mx-auto grid w-full max-w-[88rem] grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-2.5 sm:px-8 lg:py-3"
            onMouseEnter={() => setHeaderHovered(true)}
          >
            <a
              href={`tel:${emergencyPhoneHref}`}
              className="col-start-1 row-start-1 flex min-w-0 max-w-[42vw] flex-col justify-self-start self-center sm:max-w-none"
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
              className="col-start-1 col-end-[-1] row-start-1 flex shrink-0 items-center justify-self-center lg:col-auto lg:col-start-2"
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

            <div className="relative z-10 col-start-3 flex shrink-0 items-center justify-self-end gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => {
                  setActiveMenu(null);
                  setAccountOpen(false);
                  setCartOpen(false);
                  setSearchOpen((current) => !current);
                }}
                aria-label={searchOpen ? "Suche schließen" : "Suche öffnen"}
                aria-expanded={searchOpen}
                className={`grid h-10 w-10 place-items-center transition ${
                  searchOpen
                    ? "text-[color:var(--nav-text-hover)]"
                    : "text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]"
                }`}
              >
                {searchOpen ? (
                  <svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M2 2l12 12M14 2L2 14"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" fill="none" />
                    <path d="m13.5 13.5 4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                )}
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setActiveMenu(null);
                    setSearchOpen(false);
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
                    ref={accountPanelRef}
                    className="absolute right-0 top-full z-[110] mt-3 w-[22rem] max-w-[calc(100vw-2rem)] border border-[color:var(--border)] bg-white p-7 text-[color:var(--ink)] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.45)]"
                  >
                    <p className="tracking-eyebrow text-[color:var(--accent)]">Mein MONTER</p>
                    <h2 className="font-display mt-5 text-2xl font-normal leading-tight tracking-tight">
                      Noch nicht verfügbar
                    </h2>
                    <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                      Der Kundenbereich für Verlauf, Rechnungen und Termine ist aktuell in
                      Vorbereitung. Bitte melden Sie sich vorerst telefonisch oder über das
                      Anfrageformular.
                    </p>

                    <div className="mt-7 flex flex-col gap-3">
                      <a href={`tel:${emergencyPhoneHref}`} className="btn-primary w-full text-center">
                        {emergencyPhoneDisplay}
                      </a>
                      <Link
                        href="/kontakt"
                        onClick={() => setAccountOpen(false)}
                        className="inline-flex w-full items-center justify-center border-b border-[color:var(--ink)] py-2 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                      >
                        Anfrage stellen
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setActiveMenu(null);
                    setSearchOpen(false);
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
                    ref={cartPanelRef}
                    className="absolute right-0 top-full z-[110] mt-3 w-[22rem] max-w-[calc(100vw-2rem)] border border-[color:var(--border)] bg-white p-7 text-[color:var(--ink)] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.45)]"
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                      Warenkorb
                    </p>
                    <h3 className="mt-2 text-[1.35rem] font-medium leading-tight tracking-[-0.01em]">
                      Noch nicht verfügbar
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                      Die Bestellfunktion ist aktuell in Vorbereitung. Für Leistungen und
                      Ersatzteile erstellen wir Ihnen gerne ein individuelles Angebot — telefonisch
                      oder über das Anfrageformular.
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                      <a href={`tel:${emergencyPhoneHref}`} className="btn-primary w-full text-center">
                        {emergencyPhoneDisplay}
                      </a>
                      <Link
                        href="/kontakt"
                        onClick={() => setCartOpen(false)}
                        className="inline-flex w-full items-center justify-center border-b border-[color:var(--ink)] py-2 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                      >
                        Anfrage stellen
                      </Link>
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
                  <button
                    key={link.label}
                    type="button"
                    className={`nav-item py-1 ${activeMenu === link.menuId ? "nav-item--active" : ""}`}
                    onMouseEnter={() => showMegaMenu(link.menuId!)}
                    onFocus={() => showMegaMenu(link.menuId!)}
                    aria-expanded={activeMenu === link.menuId}
                    aria-controls={`mega-${link.menuId}`}
                  >
                    {link.label}
                  </button>
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
              <Link
                href={customerNavLink.href}
                className="nav-item py-1"
                onMouseEnter={closeMegaMenu}
                onClick={closeAllOverlays}
              >
                {customerNavLink.label}
              </Link>
              <span
                className="hidden h-4 w-px self-center bg-white/20 lg:block"
                aria-hidden="true"
              />
              {secondaryNavGroup.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="nav-item py-1"
                  onMouseEnter={closeMegaMenu}
                  onClick={closeAllOverlays}
                >
                  {link.label}
                </Link>
              ))}
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
                  <div className="nav-dropdown-column nav-dropdown-column--special">
                    <div className="nav-dropdown-special-list">
                      {dropdownSpecialLinks.map((item) => (
                        <Link
                          key={`special-${item.label}`}
                          href={item.href}
                          onClick={closeAllOverlays}
                          className="nav-dropdown-special-link"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {menu.columns.map((column) => (
                    <div key={column.eyebrow} className="nav-dropdown-column-group">
                      <div className="nav-dropdown-separator" aria-hidden="true" />
                      <div className="nav-dropdown-column">
                        <p className="nav-dropdown-eyebrow">{column.eyebrow}</p>
                        <div className="nav-dropdown-list">
                          {column.items.map((item) => (
                            <Link
                              key={`${menu.id}-${item.label}`}
                              href={item.href}
                              onClick={closeAllOverlays}
                              className="nav-dropdown-link"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

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
                      <div className="mt-5 flex flex-col gap-1">
                        <a
                          href={menu.feature.primaryHref}
                          onClick={closeAllOverlays}
                          className="nav-dropdown-link py-2"
                        >
                          {menu.feature.primaryLabel}
                        </a>
                        {menu.feature.secondaryLabel && menu.feature.secondaryHref ? (
                          <a
                            href={menu.feature.secondaryHref}
                            onClick={closeAllOverlays}
                            className="nav-dropdown-link py-2"
                          >
                            {menu.feature.secondaryLabel}
                          </a>
                        ) : null}
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Search overlay */}
          <div
            className={`absolute inset-x-0 top-full z-[95] border-b border-[color:var(--border)] bg-white text-[color:var(--ink)] shadow-[0_32px_60px_-30px_rgba(0,0,0,0.45)] ${
              searchOpen ? "block" : "hidden"
            }`}
            aria-hidden={!searchOpen}
          >
            <div className="mx-auto w-full max-w-[88rem] px-5 py-12 sm:px-8 lg:py-16">
              <form onSubmit={onSearchSubmit}>
                <label className="block">
                  <span className="cap-line tracking-eyebrow text-[color:var(--accent)]">Suche</span>
                  <div className="mt-6 flex items-center gap-4 border-b-2 border-[color:var(--ink)] pb-3">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="shrink-0 text-[color:var(--muted)]"
                    >
                      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4" fill="none" />
                      <path d="m13.5 13.5 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <input
                      ref={searchInputRef}
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      onKeyDown={onSearchKey}
                      placeholder="Was möchten Sie reparieren?"
                      className="font-display flex-1 bg-transparent text-2xl font-light tracking-tight text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted-soft)] sm:text-4xl"
                    />
                    {searchQuery ? (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
                      >
                        Zurücksetzen
                      </button>
                    ) : null}
                  </div>
                </label>
              </form>

              <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_22rem]">
                <div>
                  {searchQuery.trim() ? (
                    searchResults.length > 0 ? (
                      <div>
                        <p className="tracking-eyebrow text-[color:var(--muted)]">
                          {searchResults.length} Treffer
                        </p>
                        <div className="mt-6 grid gap-0">
                          {searchResults.map((result) => (
                            <Link
                              key={`${result.href}-${result.title}`}
                              href={result.href}
                              onClick={closeAllOverlays}
                              className="block border-b border-[color:var(--border)] py-5 transition hover:bg-[color:var(--bg-muted)]"
                            >
                              <div className="min-w-0">
                                <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                                  {result.category}
                                </p>
                                <h4 className="font-display mt-2 truncate text-xl font-normal tracking-tight text-[color:var(--ink)] sm:text-2xl">
                                  {result.title}
                                </h4>
                                <p className="mt-2 line-clamp-1 text-sm font-light text-[color:var(--muted)]">
                                  {result.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="border border-[color:var(--border)] bg-[color:var(--bg-muted)] p-8">
                        <p className="font-display text-2xl font-light tracking-tight">
                          Keine Treffer für &bdquo;{searchQuery}&ldquo;.
                        </p>
                        <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                          Rufen Sie uns kurz an — wir prüfen, ob die Reparatur möglich ist.
                        </p>
                        <a href={`tel:${emergencyPhoneHref}`} className="btn-primary mt-6">
                          {emergencyPhoneDisplay}
                        </a>
                      </div>
                    )
                  ) : (
                    <div>
                      <p className="tracking-eyebrow text-[color:var(--muted)]">Häufig gesucht</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {popularSearches.map((term) => (
                          <button
                            key={term}
                            type="button"
                            onClick={() => setSearchQuery(term)}
                            className="border border-[color:var(--border)] bg-white px-4 py-2.5 text-sm font-medium tracking-tight transition hover:border-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <aside className="bg-[color:var(--bg-muted)] p-8">
                  <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Direkt klären</p>
                  <h3 className="font-display mt-7 text-2xl font-light leading-tight tracking-tight">
                    Schneller per Anruf.
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    Bei dringenden Ausfällen oder unklarem Fehlerbild ist das Telefon der
                    schnellste Weg.
                  </p>
                  <a
                    href={`tel:${emergencyPhoneHref}`}
                    className="font-display mt-6 block text-3xl font-light tracking-tight text-[color:var(--accent)]"
                  >
                    {emergencyPhoneDisplay}
                  </a>
                  <Link href="/kontakt" onClick={closeAllOverlays} className="link-arrow mt-6">
                    Anfrageformular
                    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    </svg>
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumbs (Unterseiten) */}
        {breadcrumbs.length > 0 ? (
          <div className="border-b border-[color:var(--border)] bg-white">
            <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
              <nav aria-label="Breadcrumbs" className="py-3">
                <ol className="flex min-w-0 flex-wrap items-center gap-y-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
                  {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                      <li key={`${crumb.href}-${index}`} className="flex min-w-0 items-center">
                        {index > 0 ? (
                          <span aria-hidden="true" className="mx-3 text-[color:var(--border-strong)]">
                            /
                          </span>
                        ) : null}
                        {isLast ? (
                          <span className="truncate normal-case tracking-tight text-[color:var(--ink)]" aria-current="page">
                            {crumb.label}
                          </span>
                        ) : (
                          <Link
                            href={crumb.href}
                            className="truncate transition hover:text-[color:var(--accent)]"
                          >
                            {crumb.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </div>
        ) : null}

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-white/10 bg-[color:var(--ink)] text-white transition-[max-height,opacity] duration-300 lg:hidden ${
            mobileMenuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-h-[85vh] overflow-y-auto bg-white px-5 pb-8 pt-6 text-[color:var(--ink)] sm:px-8">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (searchResults.length > 0) {
                  window.location.href = searchResults[0].href;
                }
              }}
              className="mb-7"
            >
              <div className="flex items-center gap-3 border-b border-[color:var(--ink)] pb-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="shrink-0 text-[color:var(--muted)]"
                >
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4" fill="none" />
                  <path d="m13.5 13.5 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Suche · Was möchten Sie reparieren?"
                  className="flex-1 bg-transparent py-2 text-base font-medium tracking-tight text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted-soft)]"
                />
              </div>
              {searchQuery.trim() && searchResults.length > 0 ? (
                <div className="mt-4 grid gap-0">
                  {searchResults.slice(0, 5).map((result) => (
                    <Link
                      key={`m-${result.href}-${result.title}`}
                      href={result.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      className="block border-b border-[color:var(--border)] py-3"
                    >
                      <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                        {result.category}
                      </p>
                      <p className="mt-1 truncate text-sm font-medium tracking-tight">
                        {result.title}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : null}
            </form>

            {primaryNavGroup.map((link) => {
              if (!link.menuId) {
                return (
                  <Link
                    key={`m-${link.label}`}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block border-b border-[color:var(--border)] py-4 text-[1.05rem] font-semibold tracking-tight"
                  >
                    {link.label}
                  </Link>
                );
              }

              const menu = megaMenus.find((entry) => entry.id === link.menuId);
              if (!menu) return null;

              return (
                <details
                  key={`m-${link.label}`}
                  className="group border-b border-[color:var(--border)] py-4"
                >
                  <summary className="cursor-pointer list-none text-[1.05rem] font-semibold tracking-tight">
                    {link.label}
                  </summary>
                  <div className="mt-4 grid gap-5">
                    <div className="border-b border-[color:var(--border)] pb-5">
                      <div className="nav-dropdown-special-list">
                        {dropdownSpecialLinks.map((item) => (
                          <Link
                            key={`m-special-${item.label}`}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="nav-dropdown-special-link nav-dropdown-special-link--light"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {menu.columns.map((column) => (
                      <div key={column.eyebrow}>
                        <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                          {column.eyebrow}
                        </p>
                        <div className="mt-2 grid gap-1">
                          {column.items.map((item) => (
                            <Link
                              key={`m-${menu.id}-${item.label}`}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-sm font-medium tracking-tight text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              );
            })}
            <Link
              href={customerNavLink.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block border-b border-[color:var(--border)] py-4 text-[1.05rem] font-semibold tracking-tight"
            >
              {customerNavLink.label}
            </Link>

            <div className="my-2 h-px bg-[color:var(--border)]" aria-hidden="true" />

            {secondaryNavGroup.map((link) => (
              <Link
                key={`m-${link.label}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block border-b border-[color:var(--border)] py-4 text-[1.05rem] font-semibold tracking-tight"
              >
                {link.label}
              </Link>
            ))}

            <details className="group border-b border-[color:var(--border)] py-4">
              <summary className="cursor-pointer list-none text-[1.05rem] font-semibold tracking-tight">
                Mein MONTER
              </summary>
              <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Der Kundenbereich ist noch nicht verfügbar. Bitte melden Sie sich vorerst
                telefonisch oder über das Anfrageformular.
              </p>
            </details>

            <div className="mt-7 grid gap-3">
              <a href={`tel:${emergencyPhoneHref}`} className="btn-primary justify-center">
                {emergencyPhoneDisplay}
              </a>
              <Link
                href="/kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-ghost justify-center"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop while menus open */}
      <div
        className={`fixed inset-0 z-[70] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          activeMenu || searchOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeAllOverlays}
      />
    </>
  );
}

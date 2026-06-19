import Image from "next/image";
import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";
import NavNewsletterSignup from "./NavNewsletterSignup";
import { siteConfig } from "./siteConfig";

const emergencyPhoneDisplay = siteConfig.phoneDisplay;
const emergencyPhoneHref = siteConfig.phoneHref;

const footerHeadingClass =
  "text-[0.8rem] font-medium uppercase tracking-[0.2em] text-white/75";

const brandQuickLinks = [
  { label: "Blog & News", href: "/blog" },
  { label: "Warum Monter?", href: "/ueber-uns" },
  { label: "FAQ", href: "/#faq" },
  { label: "Firmenkunden", href: "/firmenkunden" },
  { label: "Karriere", href: "/karriere" },
  { label: "Bewertungen", href: "/#bewertungen" }
];

const garageLinks = [
  { label: "Garagentor Reparatur", href: "/garagentor-reparatur-wien" },
  { label: "Antrieb & Motor", href: "/garagentor-reparatur-wien" },
  { label: "Federwechsel", href: "/garagentor-reparatur-wien" },
  { label: "Wartung & Service", href: "/garagentor-reparatur-wien" }
];

const regionLinks = [
  { label: "Wien", href: "/#anfahrt" },
  { label: "Niederösterreich", href: "/#anfahrt" }
];

const applianceLinks = [
  { label: "Waschmaschine", href: "/leistungen/waschmaschine-reparatur-wien" },
  { label: "Geschirrspüler", href: "/leistungen/geschirrspueler-reparatur-wien" },
  { label: "Backofen & Herd", href: "/leistungen/backofen-herd-reparatur-wien" },
  { label: "Trockner", href: "/leistungen/trockner-reparatur-wien" },
  { label: "Kühlschrank", href: "/leistungen/kuehlschrank-reparatur-wien" }
];

const brandLinks = [
  { label: "Bosch", href: "/marken/bosch-reparatur-wien" },
  { label: "Miele", href: "/marken/miele-reparatur-wien" },
  { label: "Siemens", href: "/marken/siemens-reparatur-wien" },
  { label: "AEG", href: "/marken/aeg-reparatur-wien" },
  { label: "Beko", href: "/marken/beko-reparatur-wien" },
  { label: "Gorenje", href: "/marken/gorenje-reparatur-wien" },
  { label: "Alle Marken", href: "/#marken" }
];

const bottomBarLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "AGB", href: "/agb" },
  { label: "Datenschutz", href: "/dsgvo" },
  { label: "Nutzungsbedingungen", href: "/nutzungsbedingungen" }
];

const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    )
  },
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    label: "TikTok",
    href: siteConfig.social.tiktok,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.74-.01-9.47.02-14.21z" />
      </svg>
    )
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
      </svg>
    )
  },
  {
    label: "X",
    href: siteConfig.social.x,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    )
  }
] as const;

type SiteFooterProps = {
  logoSrc: string;
};

export default function SiteFooter({ logoSrc }: SiteFooterProps) {
  return (
    <footer className="bg-[color:var(--ink)] text-white max-lg:pb-[calc(5rem+env(safe-area-inset-bottom,0px))]">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid gap-12 sm:gap-14 xl:grid-cols-[1.25fr_2fr]">
          <div className="md:flex md:items-start md:justify-between md:gap-12 xl:block">
            <div className="md:max-w-md xl:max-w-none">
              <Link href="/" aria-label="MONTER Reparatur & Service Startseite" className="inline-block">
                <Image
                  src={logoSrc}
                  alt="MONTER Reparatur & Service"
                  width={300}
                  height={80}
                  unoptimized
                  className="h-11 w-auto sm:h-12"
                />
              </Link>

              <p className="mt-7 max-w-md text-base font-normal leading-relaxed text-white/80">
                Haushaltsgeräte- und Garagentor-Reparatur mit technischem Anspruch. Für
                Privathaushalte, Hausverwaltungen und Betriebe in Wien und Niederösterreich —
                ehrliche Einschätzung, faire Preise, saubere Arbeit.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-base font-normal text-white/90">
                {brandQuickLinks.map((item) => (
                  <Link
                    key={"quick" + item.label}
                    href={item.href}
                    className="border-b border-transparent transition hover:border-white hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-10 w-full max-w-md shrink-0 sm:max-w-sm md:mt-1 md:w-72 xl:mt-10 xl:w-auto xl:max-w-md">
              <NavNewsletterSignup variant="dark" compact />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 md:grid-cols-4 md:gap-x-8 lg:gap-10">
            <div className="flex flex-col gap-10">
              <div>
                <p className={footerHeadingClass}>Garagentore</p>
                <div className="mt-7 grid gap-3.5 text-base font-normal text-white/90">
                  {garageLinks.map((item) => (
                    <Link
                      key={"garage" + item.label}
                      className="w-fit border-b border-transparent transition hover:border-white hover:text-white"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className={footerHeadingClass}>Einsatzgebiete</p>
                <div className="mt-7 grid gap-3.5 text-base font-normal text-white/90">
                  {regionLinks.map((item) => (
                    <Link
                      key={"region" + item.label}
                      className="w-fit border-b border-transparent transition hover:border-white hover:text-white"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className={footerHeadingClass}>Haushaltsgeräte</p>
              <div className="mt-7 grid gap-3.5 text-base font-normal text-white/90">
                {applianceLinks.map((item) => (
                  <Link
                    key={"appliance" + item.label}
                    className="w-fit border-b border-transparent transition hover:border-white hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className={footerHeadingClass}>Marken</p>
              <div className="mt-7 grid gap-3.5 text-base font-normal text-white/90">
                {brandLinks.map((item) => (
                  <Link
                    key={"brand" + item.label}
                    className="w-fit border-b border-transparent transition hover:border-white hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className={footerHeadingClass}>Direkt klären</p>
              <a
                href={`tel:${emergencyPhoneHref}`}
                className="mt-7 block text-xl font-medium tracking-tight text-white transition hover:text-[color:var(--accent)]"
              >
                {emergencyPhoneDisplay}
              </a>
              <p className="mt-3.5 text-sm font-normal leading-relaxed text-white/65">
                Bei dringenden Ausfällen ist der Anruf der schnellste Weg.
              </p>
              <Link
                href="/reparatur-buchen"
                className="mt-5 inline-flex w-fit items-center gap-2 border-b border-white pb-1 text-sm font-medium uppercase tracking-[0.16em] text-white transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                Reparatur buchen
                <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8 sm:mt-16 sm:pt-10">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-sm font-normal text-white/75">
              {bottomBarLinks.map((link) => (
                <Link
                  key={link.href}
                  className="transition hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
              <CookieSettingsButton className="transition hover:text-white" />
              <Link href="/barrierefreiheit" className="transition hover:text-white">
                Barrierefreiheit
              </Link>
              <a href="/sitemap.xml" className="transition hover:text-white">
                Sitemap
              </a>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-1.5 self-start sm:gap-3 sm:self-auto sm:justify-end">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

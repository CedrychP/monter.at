import Image from "next/image";
import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";
import { siteConfig } from "./siteConfig";

const emergencyPhoneDisplay = "+43 1 4171346";
const emergencyPhoneHref = "+4314171346";

const footerHeadingClass =
  "text-[0.8rem] font-medium uppercase tracking-[0.2em] text-white/75";

const serviceLinks = [
  { label: "Waschmaschine", href: "/leistungen/waschmaschine-reparatur-wien" },
  { label: "Geschirrspüler", href: "/leistungen/geschirrspueler-reparatur-wien" },
  { label: "Backofen & Herd", href: "/leistungen/backofen-herd-reparatur-wien" },
  { label: "Trockner", href: "/leistungen/trockner-reparatur-wien" },
  { label: "Kühlschrank", href: "/leistungen/kuehlschrank-reparatur-wien" }
];

const companyLinks = [
  { label: "Über Uns", href: "/ueber-uns" },
  { label: "Preise", href: "/preise" },
  { label: "Bewertungen", href: "/#bewertungen" },
  { label: "Marken", href: "/#marken" },
  { label: "Blog", href: "/blog" }
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
  }
] as const;

type SiteFooterProps = {
  logoSrc: string;
};

export default function SiteFooter({ logoSrc }: SiteFooterProps) {
  return (
    <footer className="bg-[color:var(--ink)] text-white">
      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div>
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
            <p className="mt-7 max-w-md text-base font-normal leading-relaxed text-white/85">
              Haushaltsgeräte-Reparatur mit technischem Anspruch. Für Privathaushalte,
              Hausverwaltungen und Betriebe in Wien und Umgebung.
            </p>
            <div className="mt-8 space-y-1.5 text-base font-normal text-white/80">
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
              <p className="pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className={footerHeadingClass}>Leistungen</p>
            <div className="mt-7 grid gap-3.5 text-base font-normal text-white/90">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  className="w-fit border-b border-transparent transition hover:border-white hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className={footerHeadingClass}>Unternehmen</p>
            <div className="mt-7 grid gap-3.5 text-base font-normal text-white/90">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  className="w-fit border-b border-transparent transition hover:border-white hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className={footerHeadingClass}>Kontakt</p>
            <a
              href={`tel:${emergencyPhoneHref}`}
              className="mt-7 block text-[2rem] font-medium tracking-tight text-white sm:text-[2.5rem]"
            >
              {emergencyPhoneDisplay}
            </a>
            <p className="mt-5 max-w-sm text-base font-normal leading-relaxed text-white/80">
              Für dringende Geräteausfälle erreichen Sie uns am schnellsten telefonisch.
            </p>
            <Link
              href="/kontakt"
              className="mt-7 inline-flex border-b border-white py-1.5 text-sm font-medium uppercase tracking-[0.16em] text-white transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Anfrage stellen
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-normal text-white/75">
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
            </div>

            <div className="flex shrink-0 items-center gap-4 self-end sm:justify-end">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
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

import Image from "next/image";
import Link from "next/link";
import { englishNav, germanHrefFor } from "../../lib/englishPages";
import { siteConfig } from "../siteConfig";

export function EnglishHeader({ logoSrc, path }: { logoSrc: string; path: string }) {
  const germanHref = germanHrefFor(path);

  return (
    <header className="sticky top-0 z-[80] border-b border-white/10 bg-[color:var(--ink)] text-white">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/en" aria-label="MONTER appliance repair, English home" className="shrink-0">
          <Image src={logoSrc} alt="MONTER Reparatur & Service" width={300} height={80} className="h-8 w-auto sm:h-9" />
        </Link>
        <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark hidden sm:inline-flex">
          <span data-phone-number>{siteConfig.phoneDisplay}</span>
        </a>
        <Link href={germanHref} hrefLang="de-AT" lang="de-AT" className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/80 hover:text-white">
          Deutsch
        </Link>
      </div>
      <nav aria-label="English" className="mx-auto flex max-w-[88rem] gap-x-5 gap-y-2 overflow-x-auto px-5 pb-3 sm:px-8">
        {englishNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            hrefLang="en"
            aria-current={path === item.href ? "page" : undefined}
            className={`shrink-0 text-[0.72rem] font-medium uppercase tracking-[0.14em] ${
              path === item.href ? "text-white" : "text-white/65 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function EnglishFooter({ path }: { path: string }) {
  return (
    <footer className="bg-[color:var(--ink)] text-white">
      <div className="mx-auto grid max-w-[88rem] gap-10 px-5 pb-28 pt-14 sm:px-8 sm:py-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-2xl font-light">MONTER Reparatur & Service</p>
          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/70">
            Appliance, garage-door and air-conditioning repair in Vienna, Lower Austria and Linz. Prices include 20% VAT.
          </p>
          <p className="mt-6 text-sm font-light leading-relaxed text-white/70">
            {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}
            <br />
            <a href={`tel:${siteConfig.phoneHref}`} className="border-b border-white/30">
              <span data-phone-number>{siteConfig.phoneDisplay}</span>
            </a>
            <br />
            <a href={`mailto:${siteConfig.email}`} className="border-b border-white/30">
              {siteConfig.email}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm font-light text-white/75">
          <Link href="/en/about" className="hover:text-white">About</Link>
          <Link href="/en/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/impressum" hrefLang="de-AT" lang="de-AT" className="hover:text-white">
            Imprint (German)
          </Link>
          <Link href="/agb" hrefLang="de-AT" lang="de-AT" className="hover:text-white">
            Terms (German)
          </Link>
          <Link href={germanHrefFor(path)} hrefLang="de-AT" lang="de-AT" className="hover:text-white">
            German version of this page
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function EnglishMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-white/10 bg-[color:var(--ink)] px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] sm:hidden">
      <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark w-full">
        Call <span data-phone-number>{siteConfig.phoneDisplay}</span>
      </a>
    </div>
  );
}

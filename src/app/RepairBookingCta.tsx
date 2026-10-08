import Link from "next/link";
import { siteConfig } from "./siteConfig";

type RepairBookingCtaProps = {
  /** Auf Rechtsseiten bleibt die organische Nummer, auch bei Anzeigenbesuch. */
  legalPhone?: boolean;
};

export default function RepairBookingCta({ legalPhone = false }: RepairBookingCtaProps) {
  return (
    <section className="bg-[color:var(--ink)] text-white">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-6 px-5 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="min-w-0">
          <p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent-on-dark)]">
            <span aria-hidden="true" className="h-px w-8 bg-[color:var(--accent)]" />
            Termin
          </p>
          <h2 className="font-display mt-2 text-balance text-3xl font-light leading-none tracking-tight text-white sm:text-4xl">
            Reparaturtermin buchen.
          </h2>
          <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-white/75">
            Gerät und Fehlerbild angeben. Wir melden uns zur Abstimmung. Noch kein Auftrag.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row">
          <Link
            href="/reparatur-buchen"
            className="group inline-flex items-center justify-center bg-[color:var(--accent)] px-6 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.14em] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
          >
            <span className="inline-flex items-center gap-3 text-white group-hover:text-[color:var(--ink)]">
              Reparaturtermin buchen
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" />
              </svg>
            </span>
          </Link>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            {...(legalPhone ? { "data-legal-phone": true } : {})}
            className="group inline-flex items-center justify-center border border-white/70 bg-transparent px-6 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.14em] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
          >
            <span className="text-white group-hover:text-[color:var(--ink)]">{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

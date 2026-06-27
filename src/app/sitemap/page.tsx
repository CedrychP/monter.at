import Link from "next/link";
import type { Metadata } from "next";

import SitemapWeb from "../SitemapWeb";
import { sitemapGroups, sitemapHome } from "../sitemapTree";

const serviceName = "MONTER Reparatur & Service";

export const metadata: Metadata = {
  title: "Sitemap | MONTER Reparatur & Service",
  description:
    "Die komplette Seitenstruktur von MONTER Reparatur & Service in Wien — als interaktives Netzdiagramm und vollständige Übersicht aller Seiten.",
  alternates: {
    canonical: "/sitemap"
  }
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      {/* Intro */}
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:pt-20">
          <div className="reveal max-w-3xl">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Sitemap</p>
            <h1 className="font-display mt-8 text-balance text-4xl font-light leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              Die ganze Website auf einen Blick.
            </h1>
            <p className="mt-7 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Jede Seite von {serviceName} — verbunden wie ein Netz. Wählen Sie im Diagramm einen
              Bereich, um seine Seiten zu sehen, oder nutzen Sie die vollständige Übersicht darunter.
            </p>
          </div>
        </div>
      </section>

      {/* Spinnennetz */}
      <section className="relative isolate overflow-hidden bg-[color:var(--ink)] py-16 text-white sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full blur-[140px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.22)" }}
          />
          <div
            className="absolute -bottom-44 -left-32 h-[30rem] w-[30rem] rounded-full blur-[140px]"
            style={{ backgroundColor: "rgba(168, 17, 42, 0.14)" }}
          />
        </div>

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <SitemapWeb groups={sitemapGroups} home={sitemapHome} />
        </div>
      </section>

      {/* Vollständige Übersicht */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="cap-line tracking-eyebrow">Alle Seiten</p>
              <h2 className="font-display mt-6 text-balance text-3xl font-normal leading-[1.05] tracking-tight sm:text-4xl">
                Vollständige Übersicht.
              </h2>
            </div>
            <Link href={sitemapHome.href} className="link-arrow text-sm">
              Zur Startseite
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
              </svg>
            </Link>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {sitemapGroups.map((group) => (
              <div key={group.id} className="flex flex-col bg-white p-6 lg:p-8">
                <h3 className="font-display text-xl font-normal tracking-tight text-[color:var(--ink)]">
                  {group.label}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {group.description}
                </p>

                <ul className="mt-5 grid gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-normal text-[color:var(--ink)] transition hover:text-[color:var(--accent)]"
                      >
                        {link.label}
                      </Link>
                      {link.children && link.children.length > 0 ? (
                        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 border-l border-[color:var(--border)] pl-3">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="text-xs font-light text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

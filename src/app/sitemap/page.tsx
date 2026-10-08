import Link from "next/link";
import type { Metadata } from "next";

import RepairBookingCta from "../RepairBookingCta";
import SitemapWeb from "../SitemapWeb";
import { sitemapGroups, sitemapHome, type SitemapLink } from "../sitemapTree";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap | MONTER Reparatur & Service",
  description:
    "Alle Seiten von MONTER Reparatur & Service: Geräte, Marken, Einsatzgebiete, Service und Rechtliches.",
  path: "/sitemap"
});

function needsWidth(link: SitemapLink) {
  const children = link.children ?? [];
  return children.length > 6 || children.some((child) => (child.children?.length ?? 0) > 6);
}

function SitemapLinks({ links, muted = false }: { links: SitemapLink[]; muted?: boolean }) {
  return (
    <ul
      className={
        muted
          ? "mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2 xl:grid-cols-3"
          : "grid content-start gap-x-10 gap-y-7 sm:grid-cols-2 xl:grid-cols-3"
      }
    >
      {links.map((link) => {
        const wide = needsWidth(link);
        return (
          <li key={link.href} className={wide ? "sm:col-span-2 xl:col-span-3" : undefined}>
            <Link
              href={link.href}
              className={
                muted
                  ? "text-sm font-light text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
                  : "text-sm text-[color:var(--ink)] transition hover:text-[color:var(--accent)]"
              }
            >
              {link.label}
            </Link>
            {link.children?.length ? (
              wide ? (
                <SitemapLinks links={link.children} muted />
              ) : (
                <ul className="mt-2.5 grid gap-2 border-l border-[color:var(--border)] pl-3">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-sm font-light text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
                      >
                        {child.label}
                      </Link>
                      {child.children?.length ? (
                        <ul className="mt-1.5 grid gap-1">
                          {child.children.map((grandchild) => (
                            <li key={grandchild.href}>
                              <Link
                                href={grandchild.href}
                                className="text-xs font-light text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
                              >
                                {grandchild.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              )
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:pt-20">
          <div className="max-w-3xl">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Sitemap</p>
            <h1 className="font-display mt-8 text-balance text-4xl font-light leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              Die ganze Website auf einen Blick.
            </h1>
            <p className="mt-7 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Jeder Bereich von {siteConfig.serviceName}. Im Diagramm wählen Sie einen Bereich, darunter
              stehen alle Seiten.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--ink)] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <SitemapWeb groups={sitemapGroups} home={sitemapHome} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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

          <div className="mt-12 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
            {sitemapGroups.map((group) => (
              <div key={group.id} className="grid gap-6 py-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16 lg:py-12">
                <div>
                  <h3 className="font-display text-2xl font-light tracking-tight sm:text-3xl">
                    <Link href={group.href} className="transition hover:text-[color:var(--accent)]">
                      {group.label}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {group.description}
                  </p>
                </div>
                <SitemapLinks links={group.links} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RepairBookingCta />
    </main>
  );
}

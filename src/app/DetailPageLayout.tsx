import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "./siteConfig";
import { servedAreas, type ServedArea } from "./einsatzgebiete/regionPages";

type HubRef = {
  label: string;
  href: string;
};

type RelatedEntry = {
  category: string;
  title: string;
  href: string;
};

type DetailPageLayoutProps = {
  /** Elternseite des Detailbereichs — erzeugt Breadcrumb und Rücksprung. */
  hub: HubRef;
  /** Weitere Ebenen oberhalb des Hubs, z.B. Einsatzgebiete über einer Region. */
  ancestors?: HubRef[];
  category: string;
  h1: string;
  intro: string;
  contactNote: string;
  checklist: string[];
  sections: { title: string; body: string }[];
  relatedEyebrow: string;
  relatedTitle: string;
  related: RelatedEntry[];
  /** Für Service- und Breadcrumb-Markup. */
  jsonLd: { name: string; description: string; path: string };
  /** Standard sind alle bedienten Gebiete; Regionalseiten setzen ihr eigenes. */
  areaServed?: ServedArea | ServedArea[];
  /** Zusätzliche Blöcke unterhalb des Hauptteils, z.B. Ortslisten oder FAQ. */
  children?: ReactNode;
};

export default function DetailPageLayout({
  hub,
  ancestors = [],
  category,
  h1,
  intro,
  contactNote,
  checklist,
  sections,
  relatedEyebrow,
  relatedTitle,
  related,
  jsonLd,
  areaServed = servedAreas,
  children
}: DetailPageLayoutProps) {
  const areas = Array.isArray(areaServed) ? areaServed : [areaServed];
  const trail = [...ancestors, hub];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: jsonLd.name,
      description: jsonLd.description,
      areaServed: areas.map((area) => ({ "@type": area.type, name: area.name })),
      provider: {
        "@type": "LocalBusiness",
        name: siteConfig.serviceName,
        telephone: siteConfig.phoneHref,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          postalCode: siteConfig.address.postalCode,
          addressLocality: siteConfig.address.city,
          addressCountry: siteConfig.address.country
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.siteUrl },
        ...trail.map((step, index) => ({
          "@type": "ListItem",
          position: index + 2,
          name: step.label,
          item: `${siteConfig.siteUrl}${step.href}`
        })),
        {
          "@type": "ListItem",
          position: trail.length + 2,
          name: jsonLd.name,
          item: `${siteConfig.siteUrl}${jsonLd.path}`
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
              <li>
                <Link href="/" className="transition hover:text-[color:var(--accent)]">
                  Start
                </Link>
              </li>
              {trail.map((step) => (
                <Fragment key={step.href}>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href={step.href} className="transition hover:text-[color:var(--accent)]">
                      {step.label}
                    </Link>
                  </li>
                </Fragment>
              ))}
              <li aria-hidden="true">/</li>
              <li className="text-[color:var(--ink)]">{category}</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">{category}</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]">
                {h1}
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                {intro}
              </p>
            </div>

            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Direktkontakt</p>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="font-display mt-4 block break-words text-3xl font-light tracking-tight text-[color:var(--accent)] sm:text-4xl"
              >
                {siteConfig.phoneDisplay}
              </a>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                {contactNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <aside className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="cap-line tracking-eyebrow">Vorbereiten</p>
            <h2 className="font-display mt-7 text-2xl font-normal leading-tight tracking-tight">
              Daten für die Anfrage
            </h2>
            <div className="mt-8 grid gap-0 border-t border-[color:var(--border)]">
              {checklist.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-[color:var(--border)] py-4"
                >
                  <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                  <p className="text-sm font-light text-[color:var(--ink)]">{item}</p>
                </div>
              ))}
            </div>
            <Link href="/#kontakt" className="btn-primary mt-10 w-full">
              Anfrage stellen
            </Link>
            <Link
              href={hub.href}
              className="mt-4 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
            >
              Alle {hub.label}
            </Link>
          </aside>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="border-b border-[color:var(--border)] pb-12 last:border-0"
              >
                <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                <h2 className="font-display mt-6 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                  {section.body}
                </p>
              </section>
            ))}

            <section className="bg-[color:var(--ink)] p-10 text-white lg:p-14">
              <p className="cap-line-light tracking-eyebrow text-white/70">{relatedEyebrow}</p>
              <h2 className="font-display mt-7 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                {relatedTitle}
              </h2>
              <div className="mt-10 grid gap-px bg-white/15 sm:grid-cols-3">
                {related.map((entry) => (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    className="group bg-[color:var(--ink)] p-6 transition hover:bg-white/5"
                  >
                    <p className="tracking-eyebrow text-white/55">{entry.category}</p>
                    <h3 className="font-display mt-4 text-lg font-normal leading-snug tracking-tight">
                      {entry.title}
                    </h3>
                    <span className="mt-6 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white transition group-hover:text-[color:var(--accent)]">
                      Ansehen
                      <span className="ml-1 transition group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {children}
    </main>
  );
}

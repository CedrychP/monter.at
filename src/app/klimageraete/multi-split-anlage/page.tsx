import type { Metadata } from "next";
import Link from "next/link";
import { HubFaq } from "../../HubBlocks";
import { buildMetadata } from "../../pageMetadata";
import { klimaHref } from "../../serviceHrefs";
import { localBusinessProviderRef, siteConfig } from "../../siteConfig";
import { allKlimaPages, requireKlimaPage } from "../klimaPages";

const page = requireKlimaPage("multi-split-anlage");

const path = "/klimageraete/multi-split-anlage";

const related = (page.relatedSlugs ?? []).flatMap((slug) => {
  const match = allKlimaPages.find((item) => item.slug === slug);
  return match ? [match] : [];
});

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    url: `${siteConfig.siteUrl}${path}`,
    areaServed: [
      { "@type": "City", name: "Wien" },
      { "@type": "State", name: "Niederösterreich" }
    ],
    provider: localBusinessProviderRef
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Klimageräte", item: `${siteConfig.siteUrl}/klimageraete` },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `${siteConfig.siteUrl}${path}`
      }
    ]
  }
];

function BranchDiagram() {
  return (
    <svg viewBox="0 0 640 300" className="h-auto w-full" role="img" aria-label="Drei Innengeräte an einem gemeinsamen Außengerät">
      <text x="8" y="20" fill="currentColor" fontSize="12" letterSpacing="2.4">
        INNEN
      </text>
      <rect x="8" y="32" width="168" height="78" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="24" y="50" width="136" height="8" fill="currentColor" />
      <circle cx="148" cy="90" r="4.5" fill="var(--accent-on-dark)">
        <animate attributeName="opacity" values="1;0.25;1" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <rect x="236" y="32" width="168" height="78" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="252" y="50" width="136" height="8" fill="currentColor" />
      <circle cx="376" cy="90" r="4.5" fill="currentColor" opacity="0.28" />
      <rect x="464" y="32" width="168" height="78" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="480" y="50" width="136" height="8" fill="currentColor" />
      <circle cx="604" cy="90" r="4.5" fill="currentColor" opacity="0.28" />
      <path d="M92 110 V158 H320 V196" fill="none" stroke="var(--accent-on-dark)" strokeWidth="2.5" />
      <path d="M320 110 V196" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M548 110 V158 H320" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="418" y="188" fill="currentColor" fontSize="12" letterSpacing="2.4">
        AUSSEN
      </text>
      <rect x="230" y="196" width="180" height="88" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="320" cy="240" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M320 220 v40 M300 240 h40" fill="none" stroke="currentColor" strokeWidth="1.15" />
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path
});

export default function MultiSplitPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden border-b border-white/10 bg-[color:var(--ink)] text-white">
        <div className="relative mx-auto grid max-w-[88rem] items-end gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="max-w-xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/60">
                <li>
                  <Link href="/" className="hover:text-white">
                    Start
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/klimageraete" className="hover:text-white">
                    Klimageräte
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>{page.category}</li>
              </ol>
            </nav>
            <p className="mt-8 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent-on-dark)]">
              Ein Außengerät, mehrere Räume.
            </p>
            <h1 className="font-display mt-4 text-balance text-5xl font-light leading-[0.92] tracking-tight sm:text-6xl">{page.h1}</h1>
            <p className="mt-8 max-w-md text-[1.05rem] font-light leading-relaxed text-white/80">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark">
                <span>
                  Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
              <Link href="/reparatur-buchen" className="btn-on-dark-ghost">
                <span>Termin anfragen</span>
              </Link>
            </div>
          </div>
          <div className="border border-white/15 px-4 py-6 sm:px-8">
            <BranchDiagram />
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <ul className="grid gap-px bg-[color:var(--ink)] lg:grid-cols-2">
            {page.sections.slice(0, 2).map((section) => (
              <li key={section.title} className="bg-white px-6 py-8 sm:px-10 sm:py-10">
                <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{section.title}</h2>
                <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{section.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          {page.sections.slice(2).map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{section.title}</h2>
              <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <ul className="grid gap-px bg-[color:var(--ink)] lg:grid-cols-3">
          {related.map((item) => (
            <li key={item.slug} className="bg-white">
              <Link href={klimaHref(item.slug)} className="group block h-full px-6 py-7">
                <h3 className="font-display text-2xl font-light tracking-tight group-hover:text-[color:var(--accent)]">{item.category}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.short}</p>
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title={`${page.category}: kurz beantwortet.`} items={page.faq} />

      <section className="bg-[color:var(--bg-muted)] text-[color:var(--ink)]">
        <div className="mx-auto grid max-w-[88rem] gap-10 px-5 pb-20 pt-4 sm:px-8 sm:pb-28 sm:pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">Einschätzung</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
              Räume, Codes, Zugang außen.
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Damit sagen wir, ob ein Raum oder das ganze System betroffen ist. Die Anfrage ist noch kein Auftrag.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary min-h-16">
              <span>
                Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
              </span>
            </a>
            <Link href="/reparatur-buchen" className="btn-ghost min-h-16">
              <span>Termin anfragen</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

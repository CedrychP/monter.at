import type { Metadata } from "next";
import Link from "next/link";
import { HubFaq } from "../../HubBlocks";
import { buildMetadata } from "../../pageMetadata";
import { klimaHref } from "../../serviceHrefs";
import { localBusinessProviderRef, siteConfig } from "../../siteConfig";
import { allKlimaPages, getKlimaPage } from "../klimaPages";

const page = getKlimaPage("split-klimaanlage");

if (!page) {
  throw new Error("Split-Seite fehlt in den Klimainhalten.");
}

const path = "/klimageraete/split-klimaanlage";

const order = [
  {
    number: "01",
    title: "Innengerät",
    text: "Luftfilter und Verdampferlamellen. Dort sitzt der häufigste Verlust an Luftmenge."
  },
  {
    number: "02",
    title: "Außengerät",
    text: "Verflüssiger und Lüfter. Ein verstaubtes Gerät am Innenhofbalkon gibt die Wärme nicht ab."
  },
  {
    number: "03",
    title: "Kältemittel",
    text: "Erst danach. Ein geschlossener Kreis verbraucht nichts. Sinkt der Füllstand, liegt eine Undichtheit vor."
  }
];

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

function SplitPair() {
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Innengerät und Außengerät, verbunden durch die Kälteleitung">
      <text x="8" y="22" fill="currentColor" fontSize="12" letterSpacing="2.4">
        INNEN
      </text>
      <rect x="8" y="36" width="210" height="150" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="26" y="58" width="174" height="10" fill="currentColor" />
      <rect x="26" y="80" width="120" height="6" fill="currentColor" opacity="0.35" />
      <circle cx="174" cy="156" r="5" fill="var(--accent-on-dark)">
        <animate attributeName="opacity" values="1;0.25;1" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="194" cy="156" r="5" fill="currentColor" opacity="0.28" />
      <path d="M218 86 H400" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M218 126 H400" fill="none" stroke="var(--accent-on-dark)" strokeWidth="2.5" />
      <text x="268" y="72" fill="currentColor" fontSize="12" letterSpacing="2.4">
        LEITUNG
      </text>
      <text x="430" y="22" fill="currentColor" fontSize="12" letterSpacing="2.4">
        AUSSEN
      </text>
      <rect x="418" y="36" width="206" height="210" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="521" cy="150" r="52" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M521 110 v80 M481 150 h80 M492 121 l58 58 M492 179 l58-58" fill="none" stroke="currentColor" strokeWidth="1.15" />
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path
});

export default function SplitKlimaPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden border-b border-white/10 bg-[color:var(--ink)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1.2px)] [background-size:22px_22px]"
        />
        <div className="relative mx-auto grid max-w-[88rem] items-end gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
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
              Zwei Geräte, ein Kreis.
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
            <SplitPair />
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            {page.sections[0].title}
          </h2>
          <p className="mt-5 max-w-3xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[0].body}</p>
          <ol className="mt-12 grid gap-px bg-[color:var(--ink)] lg:grid-cols-3">
            {order.map((item) => (
              <li key={item.number} className="bg-white px-6 py-7">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">{item.number}</p>
                <h3 className="font-display mt-4 text-3xl font-light tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{page.sections[1].title}</h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[1].body}</p>
          </div>
          <div>
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{page.sections[2].title}</h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[2].body}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            {page.sections[3].title}
          </h2>
          <p className="mt-5 max-w-3xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[3].body}</p>
          <ul className="mt-12 grid gap-px bg-[color:var(--ink)] lg:grid-cols-2">
            <li className="bg-white px-6 py-8 sm:px-8">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">Notieren</p>
              <h3 className="font-display mt-4 text-3xl font-light tracking-tight">Blinkfolge oder Code</h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">
                LED am Innengerät oder Ziffern im Display. Bei Daikin oft zweistellig über die Fernbedienung. Der Code nennt den Bereich, nicht das Bauteil.
              </p>
            </li>
            <li className="bg-[color:var(--ink)] px-6 py-8 text-white sm:px-8">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-on-dark)]">Häufig</p>
              <h3 className="font-display mt-4 text-3xl font-light tracking-tight">Kommunikation</h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/70">
                Innen- und Außengerät sprechen nicht mehr. Oft sind es korrodierte Klemmen in der Außeneinheit, kein Verdichter.
              </p>
            </li>
          </ul>
          <ul className="mt-px grid gap-px bg-[color:var(--ink)] lg:grid-cols-3">
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
              Code, Filter, Zugang außen.
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Damit prüfen wir Innen- und Außengerät in einem Termin. Die Anfrage ist noch kein Auftrag.
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

import type { Metadata } from "next";
import Link from "next/link";
import { HubFaq } from "../../HubBlocks";
import { buildMetadata } from "../../pageMetadata";
import { klimaHref } from "../../serviceHrefs";
import { localBusinessProviderRef, siteConfig } from "../../siteConfig";
import { allKlimaPages, getKlimaPage } from "../klimaPages";

const page = getKlimaPage("monoblock-klimageraet");

if (!page) {
  throw new Error("Monoblock-Seite fehlt in den Klimainhalten.");
}

const path = "/klimageraete/monoblock-klimageraet";

const checks = [
  {
    number: "01",
    title: "Schlauch",
    text: "Kurz und gerade. Länge, Knick und Schlaufen stauen die Wärme, bevor das Gerät selbst defekt ist."
  },
  {
    number: "02",
    title: "Fenster",
    text: "Die Abdichtung muss dicht sein. Eine Kippfensterspalte zieht die warme Luft zurück in den Raum."
  },
  {
    number: "03",
    title: "Gerät",
    text: "Erst danach Entwässerung, Lüfter und Elektronik. Der Aufbau ist häufiger die Ursache als ein Defekt."
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

function HosePath() {
  return (
    <svg viewBox="0 0 640 300" className="h-auto w-full" role="img" aria-label="Monoblock im Raum, Abluftschlauch mit Knick zum Fenster">
      <text x="8" y="22" fill="currentColor" fontSize="12" letterSpacing="2.4">
        GERÄT
      </text>
      <rect x="8" y="36" width="196" height="168" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="28" y="58" width="156" height="10" fill="currentColor" />
      <rect x="28" y="80" width="110" height="6" fill="currentColor" opacity="0.35" />
      <rect x="28" y="148" width="156" height="34" fill="none" stroke="currentColor" strokeWidth="1.15" />
      <circle cx="160" cy="126" r="5" fill="var(--accent-on-dark)">
        <animate attributeName="opacity" values="1;0.25;1" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="126" r="5" fill="currentColor" opacity="0.28" />
      <path d="M204 110 H292" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M292 110 L348 176 H456" fill="none" stroke="var(--accent-on-dark)" strokeWidth="3" />
      <text x="318" y="102" fill="currentColor" fontSize="12" letterSpacing="2.4">
        KNICK
      </text>
      <text x="500" y="22" fill="currentColor" fontSize="12" letterSpacing="2.4">
        FENSTER
      </text>
      <rect x="500" y="36" width="124" height="228" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="562" y1="36" x2="562" y2="264" stroke="currentColor" strokeWidth="1.15" />
      <line x1="500" y1="150" x2="624" y2="150" stroke="currentColor" strokeWidth="1.15" />
      <line x1="456" y1="176" x2="500" y2="176" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path
});

export default function MonoblockPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden border-b border-white/10 bg-[color:var(--ink)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]"
        />
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
              Kein Außengerät.
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
            <HosePath />
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            {page.sections[0].title}
          </h2>
          <p className="mt-5 max-w-3xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[0].body}</p>
          <ul className="mt-12 grid gap-px bg-[color:var(--ink)] sm:grid-cols-3">
            {checks.map((item) => (
              <li key={item.number} className="bg-white px-6 py-7">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">{item.number}</p>
                <h3 className="font-display mt-4 text-3xl font-light tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
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
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">Lohnt sich</p>
              <h3 className="font-display mt-4 text-3xl font-light tracking-tight">Pumpe, Lüfter, Sensorik</h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Niveauschalter, Pumpe, Lüfter, Sensorik und Reinigung. Das klären wir, bevor jemand anrückt.
              </p>
            </li>
            <li className="bg-[color:var(--ink)] px-6 py-8 text-white sm:px-8">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-on-dark)]">Günstige Geräte</p>
              <h3 className="font-display mt-4 text-3xl font-light tracking-tight">Verdichter, Kältekreis</h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/70">
                Bei günstigen Mobilgeräten liegt der Aufwand über dem Neupreis. Fest eingebaute Anlagen rechnen wir getrennt, weil Montage und Wanddurchführung bleiben.
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
              Gerätetyp, Abluft, Fehlerbild.
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Damit sagen wir vorab, ob sich der Termin rechnet. Die Anfrage ist noch kein Auftrag.
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

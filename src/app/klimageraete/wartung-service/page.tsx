import type { Metadata } from "next";
import Link from "next/link";
import { HubFaq } from "../../HubBlocks";
import { buildMetadata } from "../../pageMetadata";
import { klimaHref } from "../../serviceHrefs";
import { localBusinessProviderRef, siteConfig } from "../../siteConfig";
import { allKlimaPages, requireKlimaPage } from "../klimaPages";

const page = requireKlimaPage("wartung-service");

const steps = [
  {
    number: "01",
    title: "Filter und Verdampfer",
    text: "Luftfilter und Lamellenpaket im Innengerät. Dort sitzt der größte Teil des verlorenen Luftdurchsatzes."
  },
  {
    number: "02",
    title: "Außengerät",
    text: "Verflüssiger und Lüfterrad. Pollen, Staub und Federn nehmen der Anlage die Wärmeabgabe."
  },
  {
    number: "03",
    title: "Kondensat",
    text: "Wanne und Leitung spülen, Pumpe, Schwingungsdämpfer und Befestigung prüfen."
  },
  {
    number: "04",
    title: "Messung",
    text: "Zu- und Ablufttemperatur, Stromaufnahme, Betriebsdrücke, Sichtprüfung auf Ölspuren."
  }
];

const intervals = [
  {
    title: "Haushalt",
    mark: "1×",
    text: "Ein Termin im Jahr, am besten im Frühjahr vor der Saison. Im Juli sind die Termine knapper."
  },
  {
    title: "Gewerbe",
    mark: "2×",
    text: "Bei Dauerbetrieb, Staub oder Küchenluft zwei Termine. Mehrere Innengeräte warten wir gesammelt."
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
    url: `${siteConfig.siteUrl}/klimageraete/wartung-service`,
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
        item: `${siteConfig.siteUrl}/klimageraete/wartung-service`
      }
    ]
  }
];

function SeasonMark() {
  const ticks = Array.from({ length: 12 }, (_, index) => {
    const angle = ((index / 12) * Math.PI * 2) - Math.PI / 2;
    const inner = 96;
    const outer = 108;
    return (
      <line
        key={index}
        x1={140 + Math.cos(angle) * inner}
        y1={140 + Math.sin(angle) * inner}
        x2={140 + Math.cos(angle) * outer}
        y2={140 + Math.sin(angle) * outer}
        stroke="currentColor"
        strokeWidth={index === 2 ? 2.4 : 1.15}
      />
    );
  });

  return (
    <svg viewBox="0 0 280 280" className="mx-auto h-auto w-full max-w-xs" role="img" aria-label="Ein Wartungstermin im Frühjahr, vor der Sommersaison">
      <circle cx="140" cy="140" r="108" fill="none" stroke="currentColor" strokeWidth="1.25" />
      {ticks}
      <path d="M233 86 A108 108 0 0 1 194 233" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="butt" />
      <text x="140" y="128" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="2.4">
        FRÜHJAHR
      </text>
      <text x="140" y="162" textAnchor="middle" fill="currentColor" fontSize="36">
        1×
      </text>
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: "/klimageraete/wartung-service"
});

export default function KlimaWartungPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden bg-[color:var(--ink)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle,rgba(255,255,255,0.22)_1px,transparent_1.2px)] [background-size:18px_18px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[28%] top-[-10%] hidden h-[120%] w-[42%] origin-top-right rotate-[18deg] bg-[color:var(--accent)] lg:block"
        />
        <div className="relative mx-auto grid max-w-[88rem] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="relative z-10 max-w-xl">
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
              Einmal im Jahr, vor der Hitze.
            </p>
            <h1 className="font-display mt-4 text-balance text-5xl font-light leading-[0.92] tracking-tight sm:text-6xl">
              {page.h1}
            </h1>
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
          <div className="relative z-10">
            <div className="bg-white px-6 py-8 text-[color:var(--ink)] sm:px-10">
              <SeasonMark />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            {page.sections[0].title}
          </h2>
          <p className="mt-5 max-w-3xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
            {page.sections[0].body}
          </p>
          <ul className="mt-12 grid gap-px bg-[color:var(--ink)] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number} className="bg-white px-6 py-7">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">{step.number}</p>
                <h3 className="font-display mt-4 text-3xl font-light tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{step.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              {page.sections[1].title}
            </h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[1].body}</p>
          </div>
          <div>
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              {page.sections[2].title}
            </h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[2].body}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            {page.sections[3].title}
          </h2>
          <p className="mt-5 max-w-3xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
            {page.sections[3].body}
          </p>
          <ul className="mt-12 grid gap-px bg-[color:var(--ink)] sm:grid-cols-2">
            {intervals.map((item) => (
              <li key={item.title} className="bg-white px-6 py-8 sm:px-8">
                <p className="font-display text-5xl font-light tracking-tight text-[color:var(--accent)]">{item.mark}</p>
                <h3 className="font-display mt-4 text-3xl font-light tracking-tight">{item.title}</h3>
                <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-px grid gap-px bg-[color:var(--ink)] lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="bg-white">
                <Link href={klimaHref(item.slug)} className="group block h-full px-6 py-7">
                  <h3 className="font-display text-2xl font-light tracking-tight group-hover:text-[color:var(--accent)]">
                    {item.category}
                  </h3>
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
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">Termin</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
              Anzahl, letzte Wartung, Zugang.
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Damit planen wir Innen- und Außengerät in einem Termin. Die Anfrage ist noch kein Auftrag.
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

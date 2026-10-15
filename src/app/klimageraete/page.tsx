import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { buildMetadata } from "../pageMetadata";
import { klimaHref } from "../serviceHrefs";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import { klimaPages, klimaProblemPages } from "./klimaPages";

const outdoorImage = "/assets/klimageraete-aussengeraet-fassade.webp";
const filterImage = "/assets/klimageraete-filter-lamellen.webp";

const systems = klimaPages.slice(0, 3);
const services = klimaPages.slice(3);

const checkOrder = [
  {
    number: "01",
    title: "Filter und Lamellen",
    text: "Verschmutzte Filter und der Verdampfer am Innengerät nehmen zuerst die Kühlleistung."
  },
  {
    number: "02",
    title: "Außengerät",
    text: "Ein zugesetzter Verflüssiger führt die Wärme nicht ab. Reinigung steht vor dem Teiletausch."
  },
  {
    number: "03",
    title: "Kältemittel",
    text: "Ein sinkender Füllstand ist eine Undichtigkeit. Wir suchen die Leckage, bevor befüllt wird."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Warum kühlt meine Klimaanlage plötzlich schlechter?",
    answer:
      "Am häufigsten sind verschmutzte Filter und Lamellen die Ursache — dann hilft eine Reinigung. Bleibt die Leistung danach schwach, kommen Kältemittelverlust, ein defekter Lüfter oder ein belasteter Verdichter in Frage. Das lässt sich nur mit Messung sauber unterscheiden."
  },
  {
    question: "Aus dem Innengerät tropft Wasser — ist das gefährlich?",
    answer:
      "Für das Gerät selbst meist nicht, für Wand und Boden schon. Ursache ist in der Regel eine blockierte Kondensatableitung oder eine falsche Neigung des Innengeräts. Schalten Sie das Gerät ab und melden sich zeitnah, bevor Feuchtigkeit ins Mauerwerk zieht."
  },
  {
    question: "Wie oft sollte eine Klimaanlage gewartet werden?",
    answer:
      "Bei normaler Nutzung im Wohnbereich einmal jährlich, am besten vor der Sommersaison. Bei gewerblichem Dauerbetrieb, in Gastronomie oder in Serverräumen empfehlen wir halbjährliche Kontrollen."
  },
  {
    question: "Darf Kältemittel einfach nachgefüllt werden?",
    answer:
      "Nein, und ein sinkender Füllstand ist immer ein Hinweis auf eine Undichtigkeit. Arbeiten am Kältemittelkreis unterliegen Vorschriften: Wir suchen zuerst die Leckage, beheben sie und befüllen erst danach — inklusive Dichtheitsprüfung und Dokumentation."
  },
  {
    question: "Montieren Sie auch neue Klimaanlagen?",
    answer:
      "Ja. Wir installieren Split- und Monoblock-Systeme inklusive Leitungsführung, Wanddurchführung, Vakuumierung, Dichtheitsprüfung und Inbetriebnahme. Beim Austausch prüfen wir vorab, ob bestehende Leitungen und Halterungen weiterverwendet werden können."
  },
  {
    question: "Was bedeutet der Fehlercode an meiner Klimaanlage?",
    answer:
      "Der Code nennt einen Bereich, nicht das defekte Bauteil. Bei Daikin steht U4 für eine fehlende Übertragung zwischen Innen- und Außengerät, U0 für Kältemittelmangel und A5 für Hochdruck oder Vereisungsschutz. Bei LG ist CH05 die Kommunikation, bei Mitsubishi Electric Mr. Slim sind P1 der Ansaugfühler und P6 der Vereisungsschutz. Dieselbe Zeichenfolge gilt nicht herstellerübergreifend. Notieren Sie Code, Marke und Modell, bevor ein Neustart die Meldung löscht."
  },
  {
    question: "Die Klimaanlage blinkt nur. Wo ist der Code?",
    answer:
      "Viele Wandgeräte haben kein Display. Die Betriebs-LED blinkt in Gruppen. Zählen Sie die Folgen, bevor Sie die Anlage vom Strom nehmen. Bei Daikin lässt sich der zweistellige Code oft über die Fernbedienung auslesen. Blinkfolge oder Code ordnen wir der Baureihe zu."
  }
];

function KlimaFieldGraphic() {
  return (
    <svg viewBox="0 0 460 400" className="h-auto w-full" role="img" aria-label="Innengerät, Kälteleitung und Außengerät">
      <text x="28" y="22" fill="currentColor" fontSize="12" letterSpacing="2.4">
        INNENGERÄT
      </text>
      <rect x="28" y="36" width="248" height="96" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="44" y="56" width="216" height="8" fill="currentColor" />
      <rect x="44" y="74" width="150" height="5" fill="currentColor" opacity="0.35" />
      <circle cx="214" cy="112" r="4.5" fill="var(--accent)">
        <animate attributeName="opacity" values="1;0.25;1" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="232" cy="112" r="4.5" fill="currentColor" opacity="0.22" />
      <circle cx="250" cy="112" r="4.5" fill="currentColor" opacity="0.22" />
      <path d="M150 132 C148 210 286 168 300 248" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <text x="188" y="176" fill="currentColor" fontSize="12" letterSpacing="2.4">
        LEITUNG
      </text>
      <text x="236" y="236" fill="currentColor" fontSize="12" letterSpacing="2.4">
        AUSSENGERÄT
      </text>
      <rect x="236" y="248" width="196" height="128" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="334" cy="312" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M334 280 v64 M302 312 h64 M311 289 l46 46 M311 335 l46-46" fill="none" stroke="currentColor" strokeWidth="1.15" />
    </svg>
  );
}

function SplitDiagram() {
  return (
    <svg viewBox="0 0 640 120" className="mt-10 h-auto w-full max-w-3xl" role="img" aria-label="Innengerät, Leitung und Außengerät als ein System">
      <rect x="8" y="28" width="168" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="24" y="48" width="136" height="10" fill="currentColor" opacity="0.85" />
      <rect x="24" y="66" width="136" height="6" fill="currentColor" opacity="0.35" />
      <text x="92" y="22" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.6">
        INNEN
      </text>
      <line x1="176" y1="60" x2="248" y2="60" stroke="var(--accent)" strokeWidth="2" />
      <line x1="392" y1="60" x2="464" y2="60" stroke="var(--accent)" strokeWidth="2" />
      <text x="320" y="52" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.6">
        LEITUNG
      </text>
      <rect x="464" y="22" width="168" height="76" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="548" cy="60" r="26" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="548" cy="60" r="6" fill="currentColor" />
      <text x="548" y="14" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.6">
        AUSSEN
      </text>
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: "Klimaanlage Service & Reparatur Wien | MONTER",
  description:
    "Klimaanlage reparieren in Wien: Split, Multi-Split, Monoblock, Fehlercodes, Wartung und Montage. Markenoffen, vor Ort in Wien und im näheren NÖ.",
  path: "/klimageraete"
});

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Klimaanlage Service und Reparatur in Wien",
    description:
      "Wartung, Reparatur und Montage von Split-, Multi-Split- und Monoblock-Klimaanlagen in Wien und im näheren Niederösterreich, einschließlich Zuordnung von Fehlercodes.",
    serviceType: "Klimaanlagenreparatur",
    url: `${siteConfig.siteUrl}/klimageraete`,
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
      { "@type": "ListItem", position: 2, name: "Klimageräte", item: `${siteConfig.siteUrl}/klimageraete` }
    ]
  }
];

export default function KlimageraeteHubPage() {
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
          className="pointer-events-none absolute -right-[22%] top-[-18%] hidden h-[140%] w-[58%] origin-top-right rotate-[16deg] bg-[color:var(--accent)] lg:block"
        />
        <div className="relative mx-auto grid max-w-[88rem] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-28">
          <div className="relative z-10 max-w-xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/60">
                <li>
                  <Link href="/" className="hover:text-white">
                    Start
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>Klimageräte</li>
              </ol>
            </nav>
            <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[0.9] tracking-tight sm:text-7xl">
              Klimaanlage
              <span className="mt-2 block pl-6 sm:pl-14">Service in Wien.</span>
            </h1>
            <p className="mt-8 max-w-md text-[1.05rem] font-light leading-relaxed text-white/80">
              Kühlt die Anlage nicht, tropft Wasser oder zeigt sie einen Fehlercode, prüfen wir Innen- und Außengerät als
              einen Kreis. Split, Multi-Split und Monoblock, markenoffen, in Wien und im näheren Niederösterreich.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark">
                <span>
                  Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
              <Link href="/reparatur-buchen" className="btn-on-dark-ghost">
                <span>Reparatur anfragen</span>
              </Link>
            </div>
          </div>
          <div className="relative z-10 mx-auto w-full max-w-lg lg:max-w-none lg:justify-self-end">
            <div className="bg-white px-5 py-6 text-[color:var(--ink)] sm:px-7 sm:py-8 lg:rotate-2">
              <KlimaFieldGraphic />
            </div>
            <Link
              href={klimaHref("fehlercodes")}
              className="relative z-10 -mt-10 ml-auto block w-[min(100%,18rem)] border border-white/20 bg-[color:var(--ink)] p-4 sm:-rotate-3 lg:-ml-6"
            >
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-on-dark)]">
                Fehlercodes
              </p>
              <p className="font-display mt-2 text-3xl font-light tracking-tight text-white">U4 · CH05 · P6</p>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/70">
                Dieselbe Zeichenfolge gilt nur innerhalb einer Marke.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section id="probleme" className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">Probleme</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
              Wonach die Anlage sucht.
            </h2>
            <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              Kühlt nicht, tropft, stinkt oder zeigt einen Code. Jede dieser Seiten sagt, was wir zuerst prüfen, und führt
              weiter zum passenden Auftrag.
            </p>
          </div>
          <ul className="mt-12 grid gap-px bg-[color:var(--ink)] sm:grid-cols-2 lg:grid-cols-4">
            {klimaProblemPages.map((page, index) => (
              <li key={page.slug} className="bg-white">
                <Link href={klimaHref(page.slug)} className="group flex h-full flex-col px-6 py-7">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    0{index + 1}
                  </p>
                  <h3 className="font-display mt-4 text-3xl font-light tracking-tight group-hover:text-[color:var(--accent)]">
                    {page.category}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{page.short}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Vereisung klären wir bei{" "}
            <Link href={klimaHref("kaeltemittel-dichtheit")} className="border-b border-current">
              <span className="text-[color:var(--ink)]">Kältemittel und Dichtheit</span></Link>. Eine Wartung im Frühjahr
            ist leichter zu bekommen als eine Reparatur in der ersten Hitzewelle. Die Sätze stehen bei den{" "}
            <Link href="/preise" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Preisen</span></Link>.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Drei Bauarten, ein Vorgehen.
          </h2>
          <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Ob ein Außengerät einen Raum versorgt oder mehrere: Diagnose vor dem Teiletausch.
          </p>
          <div className="text-[color:var(--ink)]">
            <SplitDiagram />
          </div>
          <ul className="mt-12 grid gap-px bg-[color:var(--border)] md:grid-cols-3">
            {systems.map((page, index) => (
              <li key={page.slug} className="bg-[color:var(--bg-muted)]">
                <Link href={klimaHref(page.slug)} className="group block h-full px-6 py-8 sm:px-8">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    0{index + 1}
                  </p>
                  <h3 className="font-display mt-4 text-3xl font-light tracking-tight group-hover:text-[color:var(--accent)]">
                    {page.category}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{page.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">Reihenfolge</p>
              <h2 className="font-display mt-4 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                Zuerst das Naheliegende.
              </h2>
            </div>
            <figure className="relative aspect-[16/7] overflow-hidden">
              <Image
                src={filterImage}
                alt="Geöffnetes Innengerät mit staubigem Filter und Lamellen dahinter."
                fill
                sizes="(min-width: 1024px) 48rem, 100vw"
                className="object-cover object-[center_60%]"
              />
            </figure>
          </div>
          <ol className="mt-10 grid gap-8 border-t border-[color:var(--ink)] pt-8 md:grid-cols-3">
            {checkOrder.map((step) => (
              <li key={step.number}>
                <p className="font-display text-2xl font-light text-[color:var(--accent)]">{step.number}</p>
                <h3 className="font-display mt-3 text-2xl font-light tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <figure>
            <Image
              src={outdoorImage}
              alt="Weißes Außengerät auf Konsolen an einer hellen Putzfassade."
              width={1168}
              height={880}
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="aspect-[4/3] w-full object-cover object-center"
            />
            <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">Beispielbild, kein Einsatzfoto.</figcaption>
          </figure>
          <div>
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Was am Gerät dazugehört.
            </h2>
            <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Wartung, Dichtheit, Verdichter, Steuerung, Reinigung und Montage. Für Wohnungen, Büros, Ordinationen,
              Gastronomie und Serverräume. Mehrere Innengeräte im selben Haus planen wir gebündelt.
            </p>
            <ul className="mt-8 border-t border-[color:var(--ink)]">
              {services.map((page) => (
                <li key={page.slug} className="border-b border-[color:var(--border)]">
                  <Link href={klimaHref(page.slug)} className="group grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-8">
                    <span className="font-display text-2xl font-light tracking-tight group-hover:text-[color:var(--accent)]">
                      {page.category}
                    </span>
                    <span className="text-sm font-light leading-relaxed text-[color:var(--muted)]">{page.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-light text-[color:var(--muted)]">
              Einsatz in Wien und im näheren{" "}
              <Link href="/einsatzgebiete" className="border-b border-current">
                <span className="text-[color:var(--ink)]">Niederösterreich</span>
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt, bevor Sie anrufen." items={faqs} />

      <section className="bg-[color:var(--bg-muted)] text-[color:var(--ink)]">
        <div className="mx-auto grid max-w-[88rem] gap-10 px-5 pb-20 pt-4 sm:px-8 sm:pb-28 sm:pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">Jetzt klären</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
              Gerätetyp, Fehlerbild, Standort.
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Damit sagen wir, ob eine Wartung reicht oder der Kreis gemessen werden muss. Die Anfrage ist noch kein
              Auftrag.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary min-h-16">
              <span>
                Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
              </span>
            </a>
            <Link href="/reparatur-buchen" className="btn-ghost min-h-16">
              <span>Reparatur anfragen</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

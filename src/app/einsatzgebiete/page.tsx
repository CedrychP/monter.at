import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";
import { getLocationsForRegion, locationHref } from "./locationPages";
import { regionPages } from "./regionPages";

const areas = [
  {
    slug: "wien",
    kicker: "23 Bezirke",
    fact: "Anfahrt 96 €"
  },
  {
    slug: "niederoesterreich",
    kicker: "Vom Standort in Floridsdorf",
    fact: "Anfahrt 120 €"
  },
  {
    slug: "linz",
    kicker: "15 Stadtteile",
    fact: "Techniker vor Ort"
  }
] as const;

const faqs: HubFaqItem[] = [
  {
    question: "Wo ist MONTER im Einsatz?",
    answer:
      "In Wien, in Niederösterreich und in Linz. Wien und Niederösterreich fahren wir vom Standort in Floridsdorf aus. In Linz arbeiten Techniker vor Ort. Außerhalb dieser drei Gebiete nehmen wir keine Aufträge an."
  },
  {
    question: "Was kostet die Anfahrt?",
    answer:
      "In Wien 96 € für Haushaltsgeräte und 132 € für Garagentore. In Niederösterreich 120 € beziehungsweise 180 €. Liegt die Fahrzeit für An- und Abfahrt über einer Stunde, gilt eine Pauschale von 240 €. In Linz nennen wir die Anfahrt am Telefon, bevor ein Termin steht. Alle festen Sätze sind brutto, inklusive 20 % MwSt."
  },
  {
    question: "Gibt es in jedem Wiener Bezirk eine eigene Seite?",
    answer:
      "Ja. Alle 23 Bezirke haben eine Seite mit Postleitzahl, Baubestand und dem, was an der Adresse typischerweise anders ist als im Nachbarbezirk. Der Anfahrtssatz ist in der ganzen Stadt derselbe."
  },
  {
    question: "Reparieren Sie in Linz auch Garagentore und Klimageräte?",
    answer:
      "In Wien und Niederösterreich gehören Haushaltsgeräte, Garagentore und Klimageräte zum Spektrum. In Linz liegt der Schwerpunkt bei Haushaltsgeräten. Ob für Tor oder Klima ein Termin möglich ist, klären wir bei der Anfrage."
  },
  {
    question: "Meine Gemeinde in Niederösterreich steht nicht in der Liste.",
    answer:
      "Die Ortsseiten sind die Orte, zu denen wir regelmäßig fahren. Steht Ihre Gemeinde nicht dabei, rufen Sie an. Ab etwa einer Stunde Fahrzeit gilt die Pauschale von 240 €, und wir sagen vorher, ob sich der Einsatz rechnet."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Reparatur in Wien, Niederösterreich und Linz | MONTER",
  description:
    "MONTER repariert Haushaltsgeräte in Wien, Niederösterreich und Linz. Alle 23 Bezirke, Anfahrt ab 96 € inkl. MwSt., in Linz Techniker vor Ort.",
  path: "/einsatzgebiete"
});

export default function EinsatzgebieteHubPage() {
  const bySlug = new Map(regionPages.map((region) => [region.slug, region]));

  return (
    <main className="bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Einsatzgebiete</p>
          <h1 className="font-display mt-6 max-w-4xl text-balance text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl">
            Wien, Niederösterreich und Linz.
          </h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
            Drei Gebiete, sonst keines. In Wien alle 23 Bezirke, in Niederösterreich das Umland
            mit festem Anfahrtssatz, in Linz Techniker vor Ort. Der Sitz ist die Rappgasse 1/6
            in 1210 Wien.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/reparatur-buchen" className="btn-primary">
              Reparatur anfragen
            </Link>
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-ghost">
              <span data-phone-number>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-label="Die drei Einsatzgebiete">
        <div className="mx-auto grid max-w-[88rem] gap-4 px-5 sm:px-8 lg:grid-cols-3">
          {areas.map((area) => {
            const region = bySlug.get(area.slug);
            if (!region) return null;
            return (
              <Link
                key={area.slug}
                href={`/einsatzgebiete/${region.slug}`}
                className="group flex flex-col border border-[color:var(--border)] bg-white"
              >
                <span className="relative block aspect-[4/3] bg-white">
                  <Image
                    src={region.image}
                    alt={region.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 28rem, 100vw"
                    className="object-contain"
                  />
                </span>
                <span className="flex flex-1 flex-col border-t border-[color:var(--border)] p-6">
                  <span className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                    {area.kicker}
                  </span>
                  <span className="font-display mt-3 text-3xl font-light tracking-tight text-[color:var(--ink)]">
                    {region.name}
                  </span>
                  <span className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {region.short}
                  </span>
                  <span className="mt-6 text-sm font-medium text-[color:var(--ink)]">{area.fact}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="cap-line tracking-eyebrow">Wien</p>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
              Alle 23 Bezirke.
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Der Anfahrtssatz ist in der Inneren Stadt derselbe wie in Liesing: 96 € für
              Haushaltsgeräte, 132 € für Garagentore, inklusive 20 % MwSt.
            </p>
          </div>
          <ul className="grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {getLocationsForRegion("wien").map((district, index) => (
              <li key={district.slug} className="bg-white">
                <Link href={locationHref(district)} className="group flex items-baseline gap-3 px-4 py-3">
                  <span className="font-display text-sm text-[color:var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-[color:var(--ink)] group-hover:text-[color:var(--accent)]">
                    {district.name}
                  </span>
                  <span className="ml-auto text-xs tabular-nums text-[color:var(--muted)]">
                    {district.postalCodes[0]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="cap-line tracking-eyebrow">Niederösterreich</p>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
              Umland mit festem Satz.
            </h2>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
              120 € Haushaltsgeräte, 180 € Garagentore. Ab einer Stunde Fahrzeit für An- und
              Abfahrt gilt 240 €. Diese Orte haben eine eigene Seite.
            </p>
            <ul className="mt-8 border-t border-[color:var(--border)]">
              {getLocationsForRegion("niederoesterreich").map((place) => (
                <li key={place.slug} className="border-b border-[color:var(--border)]">
                  <Link href={locationHref(place)} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-[color:var(--ink)]">{place.name}</span>
                    <span className="text-xs tabular-nums text-[color:var(--muted)]">{place.postalCodes[0]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="cap-line tracking-eyebrow">Linz</p>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">
              15 Stadtteile, Techniker vor Ort.
            </h2>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Nicht ganz Oberösterreich. Linz. Die Anfahrt nennen wir vor dem Termin. Schwerpunkt
              Haushaltsgeräte.
            </p>
            <ul className="mt-8 grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
              {getLocationsForRegion("linz").map((part) => (
                <li key={part.slug} className="bg-white">
                  <Link href={locationHref(part)} className="flex items-baseline justify-between gap-3 px-4 py-3">
                    <span className="text-sm text-[color:var(--ink)]">{part.name}</span>
                    <span className="text-xs tabular-nums text-[color:var(--muted)]">{part.postalCodes[0]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt: wo wir fahren." items={faqs} />
    </main>
  );
}

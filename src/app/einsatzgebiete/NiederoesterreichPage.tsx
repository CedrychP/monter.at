import Image from "next/image";
import Link from "next/link";
import { HubFaq } from "../HubBlocks";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import { findLocationByCityName, getLocationsForRegion, locationHref } from "./locationPages";
import type { RegionPage } from "./regionPages";


const services = [
  {
    label: "Haushaltsgeräte",
    href: "/haushaltsgeraete",
    text: "Waschmaschine, Geschirrspüler, Backofen, Kühlgerät, Trockner, Dunstabzug und Fernseher.",
    price: "Anfahrt 120 €"
  },
  {
    label: "Garagentore",
    href: "/garagentore",
    text: "Feder, Antrieb, Laufrollen und Sicherheitsprüfung. Im Umland das volle Spektrum.",
    price: "Anfahrt 180 €"
  },
  {
    label: "Klimageräte",
    href: "/klimageraete",
    text: "Split, Monoblock und Wartung. Ob der Termin sinnvoll ist, sagen wir zur Adresse.",
    price: "Im Spektrum"
  }
] as const;

export default function NiederoesterreichPage({ region }: { region: RegionPage }) {
  const places = getLocationsForRegion("niederoesterreich");
  const namedOnly = region.cities.filter(
    (city) => !findLocationByCityName("niederoesterreich", city.name)
  );
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Reparatur in Niederösterreich",
      description: region.description,
      areaServed: { "@type": "State", name: "Niederösterreich" },
      provider: localBusinessProviderRef,
      url: `${siteConfig.siteUrl}/einsatzgebiete/niederoesterreich`
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Einsatzgebiete",
          item: `${siteConfig.siteUrl}/einsatzgebiete`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Niederösterreich",
          item: `${siteConfig.siteUrl}/einsatzgebiete/niederoesterreich`
        }
      ]
    }
  ];

  return (
    <main className="bg-white text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-b border-[color:var(--border)]">
        <div className="mx-auto grid max-w-[88rem] items-end gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
                <li>
                  <Link href="/" className="transition hover:text-[color:var(--accent)]">
                    Start
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/einsatzgebiete" className="transition hover:text-[color:var(--accent)]">
                    Einsatzgebiete
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[color:var(--ink)]">Niederösterreich</li>
              </ol>
            </nav>
            <p className="cap-line tracking-eyebrow mt-8 text-[color:var(--accent)]">Niederösterreich</p>
            <h1 className="font-display mt-6 max-w-3xl text-balance text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl">
              {region.h1}
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Von der Rappgasse in Floridsdorf, nicht aus einer zweiten Werkstatt. Im Umland —
              Klosterneuburg, Mödling, Vösendorf, Perchtoldsdorf, Baden — ist die Fahrt Alltag. Nach
              St. Pölten, Krems oder Wiener Neustadt bündeln wir Termine. Liegen An- und Abfahrt
              zusammen über einer Stunde, kostet die Anfahrt 240 € statt 120 €.
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
          <figure className="overflow-hidden border border-[color:var(--border)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={region.image}
                alt={region.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-[color:var(--border)] px-4 py-3 text-sm font-light text-[color:var(--muted)]">
              {region.imageAlt} Beispielbild, kein Einsatzfoto.
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-label="Anfahrt in Niederösterreich" className="border-b border-[color:var(--border)] bg-[color:var(--bg-muted)]">
        <ul className="mx-auto grid max-w-[88rem] sm:grid-cols-3">
          <li className="border-b border-[color:var(--border)] px-5 py-10 sm:border-b-0 sm:border-r sm:px-8">
            <p className="font-display text-5xl font-light italic tracking-tight text-[color:var(--accent)]">120 €</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Haushaltsgeräte, solange An- und Abfahrt zusammen unter einer Stunde bleiben.
            </p>
          </li>
          <li className="border-b border-[color:var(--border)] px-5 py-10 sm:border-b-0 sm:border-r sm:px-8">
            <p className="font-display text-5xl font-light italic tracking-tight text-[color:var(--accent)]">180 €</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Garagentore, weil mehr Werkzeug und Material mitfährt. Ebenfalls inkl. 20 % MwSt.
            </p>
          </li>
          <li className="px-5 py-10 sm:px-8">
            <p className="font-display text-5xl font-light italic tracking-tight text-[color:var(--accent)]">240 €</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Statt 120 €, nicht obendrauf, sobald die Fahrzeit über einer Stunde liegt.
            </p>
          </li>
        </ul>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-20" aria-label="Leistungen in Niederösterreich">
        <div className="mx-auto grid max-w-[88rem] gap-4 px-5 sm:px-8 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col border border-[color:var(--border)] bg-white p-7"
            >
              <span className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                {service.price}
              </span>
              <span className="font-display mt-3 text-3xl font-light tracking-tight text-[color:var(--ink)]">
                {service.label}
              </span>
              <span className="mt-3 flex-1 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                {service.text}
              </span>
              <span className="mt-6 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)]">
                Zur Übersicht
                <span className="ml-1 inline-block transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-label="Orte in Niederösterreich">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow">Orte mit eigener Seite</p>
          <h2 className="font-display mt-6 max-w-3xl text-balance text-3xl font-light tracking-tight sm:text-4xl">
            Wo die Fahrt regelmäßig hingeht.
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Sechs Orte haben eine eigene Seite, weil sich Baubestand und Terminlage dort
            unterscheiden. Mödling und Vösendorf liegen an der Stadtgrenze, St. Pölten ist rund
            eine Stunde entfernt und wird gebündelt geplant.
          </p>
          <ul className="mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {places.map((place) => (
              <li key={place.slug} className="bg-white">
                <Link href={locationHref(place)} className="group flex h-full flex-col p-6">
                  <span className="flex items-baseline gap-3">
                    <span className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)] group-hover:text-[color:var(--accent)]">
                      {place.name}
                    </span>
                    <span className="ml-auto text-xs tabular-nums text-[color:var(--muted)]">
                      {place.postalCodes[0]}
                    </span>
                  </span>
                  <span className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {place.short}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="font-display mt-16 text-2xl font-light tracking-tight">
            Ebenfalls angefahren, ohne eigene Seite.
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Diese Orte gehören zum Einsatz. Eine eigene Seite hätten sie nur, wenn sich der
            Einsatz dort wirklich anders anfühlt. Den Anfahrtssatz nennen wir zur Adresse, bevor
            ein Termin steht.
          </p>
          <ul className="mt-8 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {namedOnly.map((city) => (
              <li
                key={`${city.plz}-${city.name}`}
                className="flex items-baseline justify-between gap-4 bg-white px-4 py-3"
              >
                <span className="text-sm text-[color:var(--ink)]">{city.name}</span>
                <span className="text-xs tabular-nums text-[color:var(--muted)]">{city.plz}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2">
          {region.sections.map((section, index) => (
            <article key={section.title}>
              <p className="font-display text-sm text-[color:var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display mt-4 text-3xl font-light tracking-tight">{section.title}</h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">{section.body}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 flex max-w-[88rem] flex-col gap-3 px-5 sm:flex-row sm:px-8">
          <Link href="/preise" className="btn-primary">
            Alle Preise
          </Link>
          <Link href="/einsatzgebiete/wien" className="btn-ghost">
            Zurück nach Wien
          </Link>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt: Niederösterreich." items={region.faq} />
    </main>
  );
}

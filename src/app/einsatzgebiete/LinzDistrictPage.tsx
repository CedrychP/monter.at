import Image from "next/image";
import Link from "next/link";
import { HubFaq } from "../HubBlocks";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import { AreaServiceLinks } from "./AreaServiceLinks";
import { getLocationsForRegion, locationHref, type LocationPage } from "./locationPages";
import type { RegionPage } from "./regionPages";

export default function LinzDistrictPage({
  location,
  region
}: {
  location: LocationPage;
  region: RegionPage;
}) {
  const districts = getLocationsForRegion("linz");
  const pageUrl = `${siteConfig.siteUrl}${locationHref(location)}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Reparatur in ${location.name}, Linz`,
      description: location.description,
      areaServed: [
        { "@type": "Place", name: `${location.name}, Linz` },
        { "@type": "City", name: "Linz" }
      ],
      provider: localBusinessProviderRef,
      url: pageUrl
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
          name: "Linz",
          item: `${siteConfig.siteUrl}/einsatzgebiete/linz`
        },
        { "@type": "ListItem", position: 4, name: location.name, item: pageUrl }
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
                <li>
                  <Link href="/einsatzgebiete/linz" className="transition hover:text-[color:var(--accent)]">
                    Linz
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[color:var(--ink)]">{location.name}</li>
              </ol>
            </nav>
            <p className="cap-line tracking-eyebrow mt-8 text-[color:var(--accent)]">{location.postalCodes[0]}</p>
            <h1 className="font-display mt-6 max-w-3xl text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
              {location.h1}
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              {location.intro}
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
              {region.imageAlt} Beispielbild von Linz, kein Foto dieses Stadtteils.
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-label={`Einsatz in ${location.name}`} className="border-b border-[color:var(--border)] bg-[color:var(--bg-muted)]">
        <ul className="mx-auto grid max-w-[88rem] lg:grid-cols-3">
          <li className="border-b border-[color:var(--border)] px-5 py-10 lg:border-b-0 lg:border-r lg:px-8">
            <p className="font-display text-5xl font-light italic leading-none tracking-tight text-[color:var(--accent)]">
              {location.postalCodes[0]}
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              {location.short}
            </p>
          </li>
          <li className="border-b border-[color:var(--border)] px-5 py-10 lg:border-b-0 lg:border-r lg:px-8">
            <p className="font-display text-4xl font-light italic leading-none tracking-tight text-[color:var(--accent)] sm:text-5xl">
              vor Ort
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Techniker in Linz. Die Fahrt startet nicht in Floridsdorf.
            </p>
          </li>
          <li className="px-5 py-10 lg:px-8">
            <p className="font-display text-4xl font-light italic leading-none tracking-tight text-[color:var(--accent)] sm:text-5xl">
              auf Anfrage
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Kein fester Anfahrtssatz. Den Betrag nennen wir, bevor der Termin steht.
            </p>
          </li>
        </ul>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-20" aria-label={`Baubestand in ${location.name}`}>
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow">Vor Ort</p>
          <h2 className="font-display mt-6 max-w-3xl text-balance text-3xl font-light tracking-tight sm:text-4xl">
            Was hier technisch anders ist.
          </h2>
          <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {location.character}
          </p>
          <ul className="mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
            {location.focus.map((item) => (
              <li key={item} className="bg-white p-6 text-sm font-light leading-relaxed text-[color:var(--ink)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2">
          {location.sections.map((section, index) => (
            <article key={section.title}>
              <p className="font-display text-sm text-[color:var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display mt-4 text-3xl font-light tracking-tight">{section.title}</h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">{section.body}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-[88rem] px-5 text-sm font-light leading-relaxed text-[color:var(--muted)] sm:px-8">
          Schwerpunkt sind Haushaltsgeräte. Garagentore und Klimageräte sind in Linz nicht das
          reguläre Spektrum.
        </p>
        <div className="mx-auto mt-8 flex max-w-[88rem] flex-col gap-3 px-5 sm:flex-row sm:px-8">
          <Link href="/preise" className="btn-primary">
            Alle Preise
          </Link>
          <Link href="/einsatzgebiete/linz" className="btn-ghost">
            Alle Linzer Stadtteile
          </Link>
        </div>
      </section>

      <AreaServiceLinks area="linz" />

      <section className="bg-white py-16 sm:py-20" aria-label="Weitere Linzer Stadtteile">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow">Stadtteile</p>
          <h2 className="font-display mt-6 max-w-3xl text-balance text-3xl font-light tracking-tight sm:text-4xl">
            Alle 15 Stadtteile.
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {location.name} ist markiert. Die anderen Stadtteile haben eigene Seiten, weil sich
            Bestand und Zugang unterscheiden.
          </p>
          <ul className="mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {districts.map((district) => {
              const current = district.slug === location.slug;
              const inner = (
                <>
                  <span className="flex items-baseline gap-3">
                    <span className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)] group-hover:text-[color:var(--accent)]">
                      {district.name}
                    </span>
                    <span className="ml-auto text-xs tabular-nums text-[color:var(--muted)]">
                      {district.postalCodes[0]}
                    </span>
                  </span>
                  <span className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {district.short}
                  </span>
                </>
              );

              return (
                <li key={district.slug} className="bg-white">
                  {current ? (
                    <div aria-current="page" className="flex h-full flex-col bg-[color:var(--bg-muted)] p-6">
                      {inner}
                    </div>
                  ) : (
                    <Link href={locationHref(district)} className="group flex h-full flex-col p-6">
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title={`Kurz geklärt: ${location.name}.`} items={location.faq} />
    </main>
  );
}

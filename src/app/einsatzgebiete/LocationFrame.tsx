import Link from "next/link";
import { HubFaq } from "../HubBlocks";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import { AreaClose, AreaSectionRows, AreaServiceLinks } from "./AreaParts";
import { locationHref, type LocationPage } from "./locationPages";
import type { RegionPage } from "./regionPages";

type Crumb = {
  label: string;
  href: string;
};

export function LocationFrame({
  location,
  region,
  crumbs,
  places,
  placesLabel,
  placesTitle = "Wo wir außerdem unterwegs sind."
}: {
  location: LocationPage;
  region: RegionPage;
  crumbs: Crumb[];
  places: LocationPage[];
  placesLabel: string;
  placesTitle?: string;
}) {
  const path = locationHref(location);
  const linz = region.slug === "linz";
  const placeName = linz ? `${location.name}, Linz` : location.name;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: location.h1.replace(/\.$/, ""),
      description: location.description,
      url: `${siteConfig.siteUrl}${path}`,
      areaServed: linz
        ? [
            { "@type": "Place", name: placeName },
            { "@type": "City", name: "Linz" }
          ]
        : region.slug === "niederoesterreich"
          ? [
              { "@type": "City", name: location.name },
              { "@type": "State", name: "Niederösterreich" }
            ]
          : [
              { "@type": "Place", name: `${location.name}, Wien` },
              { "@type": "City", name: "Wien" }
            ],
      provider: localBusinessProviderRef
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.siteUrl },
        ...crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 2,
          name: crumb.label,
          item: `${siteConfig.siteUrl}${crumb.href}`
        })),
        {
          "@type": "ListItem",
          position: crumbs.length + 2,
          name: location.metaTitle,
          item: `${siteConfig.siteUrl}${path}`
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
                <li>
                  <Link href="/" className="hover:text-[color:var(--ink)]">
                    Start
                  </Link>
                </li>
                {crumbs.map((crumb) => (
                  <li key={crumb.href} className="flex items-center gap-2">
                    <span aria-hidden="true">/</span>
                    <Link href={crumb.href} className="hover:text-[color:var(--ink)]">
                      {crumb.label}
                    </Link>
                  </li>
                ))}
                <li aria-hidden="true">/</li>
                <li className="text-[color:var(--ink)]">{location.name}</li>
              </ol>
            </nav>
            <p className="cap-line tracking-eyebrow mt-8 text-[color:var(--muted)]">{location.postalCodes.join(" · ")}</p>
            <h1 className="font-display mt-6 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">{location.h1}</h1>
            <p className="mt-6 text-lg font-light leading-8 text-[color:var(--muted)]">{location.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href={`tel:${siteConfig.phoneHref}`}>
                <span data-phone-number>{siteConfig.phoneDisplay}</span>
              </a>
              <Link className="btn-ghost" href="/reparatur-buchen">
                Termin anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display max-w-3xl text-3xl font-light tracking-tight sm:text-4xl">Was {location.name} ausmacht.</h2>
          <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-[color:var(--muted)]">{location.character}</p>
          {location.focus.length > 0 ? (
            <ul className="mt-10 max-w-3xl border-t border-[color:var(--border)]">
              {location.focus.map((item) => (
                <li key={item} className="border-b border-[color:var(--border)] py-4 text-base font-light leading-7 text-[color:var(--ink)]">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <AreaSectionRows sections={location.sections} />
      <AreaServiceLinks area={linz ? "linz" : "kern"} />

      {places.length > 0 ? (
        <section className="border-t border-[color:var(--border)]">
          <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8">
            <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">{placesLabel}</p>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl">{placesTitle}</h2>
            <ul className="mt-8 border-t border-[color:var(--border)]">
              {places.map((place) => {
                const current = place.slug === location.slug;
                const row = (
                  <>
                    <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      {place.postalCodes[0]}
                    </span>
                    <span className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)]">{place.name}</span>
                  </>
                );
                return (
                  <li key={place.slug} className="border-b border-[color:var(--border)]">
                    {current ? (
                      <div className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:items-baseline">{row}</div>
                    ) : (
                      <Link href={locationHref(place)} className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:items-baseline">
                        {row}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      {location.faq.length > 0 ? (
        <HubFaq eyebrow="Häufige Fragen" title={`${location.name}: kurz beantwortet.`} items={location.faq} />
      ) : null}
      <AreaClose linz={linz} />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { HubFaq } from "../HubBlocks";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import { AreaClose, AreaSectionRows, AreaServiceLinks } from "./AreaParts";
import { getLocationsForRegion, locationHref } from "./locationPages";
import type { RegionPage } from "./regionPages";

const services = [
  {
    label: "Haushaltsgeräte",
    href: "/haushaltsgeraete",
    text: "Waschmaschine, Geschirrspüler, Trockner, Kühlschrank, Backofen und Herd, dazu Dunstabzug und Fernseher.",
    price: "Anfahrt 96 €"
  },
  {
    label: "Garagentore",
    href: "/garagentore",
    text: "Feder, Antrieb, Laufrollen und Sicherheitsprüfung. In Wien das volle Spektrum.",
    price: "Anfahrt 132 €"
  },
  {
    label: "Klimageräte",
    href: "/klimageraete",
    text: "Split, Monoblock, Wartung. An geschützten Fassaden sagen wir vorher, was machbar ist.",
    price: "In ganz Wien"
  }
] as const;

export default function WienPage({ region }: { region: RegionPage }) {
  const districts = getLocationsForRegion("wien");
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Reparatur in Wien",
      description: region.description,
      areaServed: { "@type": "City", name: "Wien" },
      provider: localBusinessProviderRef,
      url: `${siteConfig.siteUrl}/einsatzgebiete/wien`
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
          name: region.metaTitle,
          item: `${siteConfig.siteUrl}/einsatzgebiete/wien`
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
        <div className="mx-auto grid max-w-[88rem] items-start gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
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
                <li className="text-[color:var(--ink)]">Wien</li>
              </ol>
            </nav>
            <p className="cap-line tracking-eyebrow mt-8 text-[color:var(--accent)]">Wien</p>
            <h1 className="font-display mt-6 max-w-3xl text-balance text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl">
              {region.h1}
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Haushaltsgeräte, Garagentore und Klimageräte in allen 23 Bezirken. Der Sitz ist die
              Rappgasse 1/6 in 1210 Floridsdorf. Die Anfahrt ist in der Inneren Stadt dieselbe wie
              in Liesing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href={`tel:${siteConfig.phoneHref}`}>
                <span data-phone-number>{siteConfig.phoneDisplay}</span>
              </a>
              <Link className="btn-ghost" href="/reparatur-buchen">
                Termin anfragen
              </Link>
            </div>
          </div>
          <figure className="overflow-hidden border border-[color:var(--border)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={region.image}
                alt={region.imageAlt}
                fill
                priority
                loading="eager"
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-[color:var(--border)] px-4 py-3 text-sm font-light text-[color:var(--muted)]">
              Beispielbild, kein Einsatzfoto.
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-label="Anfahrt in Wien" className="border-b border-[color:var(--border)] bg-[color:var(--bg-muted)]">
        <ul className="mx-auto grid max-w-[88rem] sm:grid-cols-3">
          <li className="border-b border-[color:var(--border)] px-5 py-10 sm:border-b-0 sm:border-r sm:px-8">
            <p className="font-display text-5xl font-light italic tracking-tight text-[color:var(--accent)]">96 €</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Anfahrt Haushaltsgeräte, in jedem Bezirk, inkl. 20 % MwSt.
            </p>
          </li>
          <li className="border-b border-[color:var(--border)] px-5 py-10 sm:border-b-0 sm:border-r sm:px-8">
            <p className="font-display text-5xl font-light italic tracking-tight text-[color:var(--accent)]">132 €</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Anfahrt Garagentore, ebenfalls einheitlich in ganz Wien.
            </p>
          </li>
          <li className="px-5 py-10 sm:px-8">
            <p className="font-display text-5xl font-light italic tracking-tight text-[color:var(--accent)]">23</p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Bezirke. Keine Staffelung nach Entfernung vom Standort.
            </p>
          </li>
        </ul>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-20" aria-label="Leistungen in Wien">
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

      <AreaServiceLinks area="kern" />

      <section className="bg-white py-16 sm:py-20" aria-label="Wiener Bezirke">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow">Bezirke</p>
          <h2 className="font-display mt-6 max-w-3xl text-balance text-3xl font-light tracking-tight sm:text-4xl">
            Alle 23 Bezirke.
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Jeder Bezirk hat eine eigene Seite. Der Anfahrtssatz bleibt gleich. Was sich ändert,
            ist der Baubestand: Altbau und Ladezone in der Inneren Stadt, Gemeindebau in Favoriten,
            Einfamilienhäuser in Liesing.
          </p>
          <ul className="mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {districts.map((district, index) => (
              <li key={district.slug} className="bg-white">
                <Link href={locationHref(district)} className="group flex h-full flex-col p-6">
                  <span className="flex items-baseline gap-3">
                    <span className="font-display text-sm text-[color:var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
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
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AreaSectionRows sections={region.sections} />

      <HubFaq eyebrow="Häufige Fragen" title="Wien: kurz beantwortet." items={region.faq} />
      <AreaClose />
    </main>
  );
}

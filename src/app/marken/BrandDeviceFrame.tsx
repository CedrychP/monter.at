import Image from "next/image";
import Link from "next/link";
import { servedAreas } from "../einsatzgebiete/regionPages";
import { localBusinessProviderRef, siteConfig } from "../siteConfig";
import type { BrandPage } from "./brands";
import type { BrandDeviceContent } from "./brandDeviceContent";
import type { BrandDeviceCategory } from "./devices";

export const brandDevicePhotos: Record<string, { src: string; alt: string }> = {
  waschmaschine: {
    src: "/assets/haushalt-foto-waschmaschine.webp",
    alt: "Weiße Frontlader-Waschmaschine in einer schmalen Waschküche, Tür geschlossen."
  },
  geschirrspueler: {
    src: "/assets/haushalt-foto-geschirrspueler.webp",
    alt: "Einbaugeschirrspüler mit Holzfront in einer Küchenzeile, Tür geschlossen."
  },
  trockner: {
    src: "/assets/haushalt-foto-trockner.webp",
    alt: "Weißer Trockner neben einem Wäschekorb, Tür geschlossen."
  },
  backofen: {
    src: "/assets/haushalt-foto-backofen.webp",
    alt: "Einbaubackofen unter einem schwarzen Glaskeramikfeld, Ofentür geschlossen."
  },
  herd: {
    src: "/assets/haushalt-foto-herd.webp",
    alt: "Schwarzes Glaskeramikkochfeld mit vier Zonen in einer Arbeitsplatte."
  },
  kuehlschrank: {
    src: "/assets/haushalt-foto-kuehlschrank.webp",
    alt: "Kühl-Gefrierkombination aus Edelstahl in einer Küchennische, Türen geschlossen."
  },
  tiefkuehlgeraet: {
    src: "/assets/haushalt-foto-tiefkuehl.webp",
    alt: "Weißer Gefrierschrank mit senkrechtem Griff neben einem Vorratsregal, Tür geschlossen."
  }
};

type RelatedEntry = {
  category: string;
  title: string;
  href: string;
};

function RelatedRows({ items }: { items: RelatedEntry[] }) {
  return (
    <ul className="mt-8 border-t border-[color:var(--border)]">
      {items.map((item) => (
        <li key={item.href} className="border-b border-[color:var(--border)]">
          <Link href={item.href} className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:items-baseline">
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">{item.category}</span>
            <span className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)]">{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function BrandDeviceFrame({
  brand,
  device,
  content,
  metaTitle,
  description,
  otherDevices,
  otherBrands
}: {
  brand: BrandPage;
  device: BrandDeviceCategory;
  content: BrandDeviceContent | undefined;
  metaTitle: string;
  description: string;
  otherDevices: RelatedEntry[];
  otherBrands: RelatedEntry[];
}) {
  const path = `/marken/${brand.slug}/${device.slug}`;
  const photo = brandDevicePhotos[device.slug];
  const sections = content?.sections ?? device.sections;
  const [lead, ...rest] = sections;
  const h1 = `${brand.brand} ${device.label} Reparatur in Wien.`;
  const showErrorCodes = Boolean(content?.errorCodesReviewed && content.errorCodes.length > 0);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: metaTitle,
      description,
      url: `${siteConfig.siteUrl}${path}`,
      serviceType: `${device.label} Reparatur`,
      brand: { "@type": "Brand", name: brand.brand },
      areaServed: servedAreas.map((area) => ({ "@type": area.type, name: area.name })),
      provider: localBusinessProviderRef
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.siteUrl },
        { "@type": "ListItem", position: 2, name: "Marken", item: `${siteConfig.siteUrl}/marken` },
        { "@type": "ListItem", position: 3, name: brand.brand, item: `${siteConfig.siteUrl}/marken/${brand.slug}` },
        { "@type": "ListItem", position: 4, name: metaTitle, item: `${siteConfig.siteUrl}${path}` }
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
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/marken" className="hover:text-[color:var(--ink)]">
                    Marken
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href={`/marken/${brand.slug}`} className="hover:text-[color:var(--ink)]">
                    {brand.brand}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[color:var(--ink)]">{device.label}</li>
              </ol>
            </nav>
            <p className="cap-line tracking-eyebrow mt-8 text-[color:var(--muted)]">{brand.brand}</p>
            <h1 className="font-display mt-6 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">{h1}</h1>
            <p className="mt-6 text-lg font-light leading-8 text-[color:var(--muted)]">
              {content?.intro ?? `${brand.brand} ${device.plural}: ${device.short}`}
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
        </div>
      </section>

      {lead ? (
        <section className="border-b border-[color:var(--border)]">
          <div className="mx-auto grid max-w-[88rem] items-start gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {photo ? (
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--bg-muted)]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 36rem, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">Beispielbild, kein Einsatzfoto.</figcaption>
              </figure>
            ) : null}
            <div>
              <h2 className="font-display text-4xl font-light tracking-tight sm:text-5xl">{lead.title}</h2>
              <p className="mt-6 text-lg font-light leading-8 text-[color:var(--muted)]">{lead.body}</p>
            </div>
          </div>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section>
          <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
            <ul className="border-t border-[color:var(--border)]">
              {rest.map((section) => (
                <li key={section.title} className="grid items-start gap-4 border-b border-[color:var(--border)] py-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
                  <h2 className="font-display text-2xl font-light tracking-tight sm:text-3xl">{section.title}</h2>
                  <p className="text-lg font-light leading-8 text-[color:var(--muted)]">{section.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {content ? (
        <section className="border-t border-[color:var(--border)]">
          <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
            <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">Reihen und Teile.</h2>
            <ul className="mt-8 border-t border-[color:var(--border)]">
              {content.modelSeries.map((series) => (
                <li key={series} className="border-b border-[color:var(--border)] py-4 text-lg font-light leading-8 text-[color:var(--ink)]">
                  {series}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-[color:var(--muted)]">{content.partsNote}</p>
          </div>
        </section>
      ) : null}

      {showErrorCodes && content ? (
        <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)]">
          <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
            <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
              Anzeigen an {brand.brand} {device.plural}.
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-[color:var(--muted)]">
              Ein Code benennt den Bereich, nicht das Bauteil. Dieselbe Nummer an einem anderen Gerät dieser Marke bedeutet etwas anderes.
            </p>
            <dl className="mt-8 border-t border-[color:var(--border)]">
              {content.errorCodes.map((entry) => (
                <div key={entry.code} className="grid gap-2 border-b border-[color:var(--border)] py-6 sm:grid-cols-[14rem_1fr] sm:gap-10">
                  <dt className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)]">{entry.code}</dt>
                  <dd className="text-lg font-light leading-8 text-[color:var(--muted)]">{entry.meaning}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">Weitere {brand.brand} Geräte.</h2>
          <RelatedRows items={otherDevices} />
          <h2 className="font-display mt-16 text-3xl font-light tracking-tight sm:text-4xl">{device.label} anderer Marken.</h2>
          <RelatedRows items={otherBrands} />
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Bevor Sie anrufen</p>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">Modellnummer, Anzeige, was es gerade tut.</h2>
          <ul className="mt-8 max-w-xl border-t border-[color:var(--border)]">
            {device.checklist.map((item) => (
              <li key={item} className="border-b border-[color:var(--border)] py-3 text-base font-light text-[color:var(--ink)]">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-[color:var(--muted)]">
            Den Aufwand nennen wir vor Ort, bevor ein Teil bestellt wird. Die Anfrage ist noch kein Auftrag.
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
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, clipMetaDescription } from "../../../pageMetadata";
import { localBusinessProviderRef, siteConfig } from "../../../siteConfig";
import { brandPages, getBrandPage } from "../../brands";
import { brandDeviceCategories, getBrandDeviceCategory } from "../../devices";
import { getBrandDeviceContent } from "../../brandDeviceContent";
import { servedAreasJsonLd } from "../../../einsatzgebiete/regionPages";

type BrandDevicePageProps = {
  params: Promise<{
    slug: string;
    geraet: string;
  }>;
};

export function generateStaticParams() {
  return brandPages.flatMap((brand) =>
    brandDeviceCategories.map((device) => ({
      slug: brand.slug,
      geraet: device.slug
    }))
  );
}

export async function generateMetadata({ params }: BrandDevicePageProps): Promise<Metadata> {
  const { slug, geraet } = await params;
  const brand = getBrandPage(slug);
  const device = getBrandDeviceCategory(geraet);

  if (!brand || !device) {
    return {
      title: "Seite nicht gefunden"
    };
  }

  const content = getBrandDeviceContent(brand.slug, device.slug);
  const title = `${brand.brand} ${device.label} Reparatur Wien | MONTER Service`;
  const description = content
    ? clipMetaDescription(
        `${brand.brand} ${device.label} Reparatur in Wien: ${content.intro}`
      )
    : `${brand.brand} ${device.label} Reparatur in Wien: ${device.short} Jetzt Termin anfragen.`;

  return buildMetadata({
    title,
    description,
    path: `/marken/${brand.slug}/${device.slug}`,
    // Kombiseiten ohne markenspezifischen Inhalt bleiben aus dem Index, bis sie
    // echten Text tragen — sichtbar und verlinkt bleiben sie trotzdem.
    robots: content?.enriched
      ? undefined
      : {
          index: false,
          follow: true
        }
  });
}

export default async function BrandDevicePage({ params }: BrandDevicePageProps) {
  const { slug, geraet } = await params;
  const brand = getBrandPage(slug);
  const device = getBrandDeviceCategory(geraet);

  if (!brand || !device) {
    notFound();
  }

  const content = getBrandDeviceContent(brand.slug, device.slug);
  const otherDevicesForBrand = brandDeviceCategories.filter((item) => item.slug !== device.slug);
  const otherBrandsForDevice = brandPages.filter((item) => item.slug !== brand.slug);

  const intro =
    content?.intro ??
    `${brand.brand} ${device.plural} sind in vielen Wiener Haushalten im Einsatz. ${device.short} Wir prüfen das Gerät, nennen den Aufwand und sagen offen, ob sich die Reparatur rechnet.`;
  const sections = content?.sections ?? device.sections;
  const showErrorCodes =
    content !== undefined && content.errorCodesReviewed && content.errorCodes.length > 0;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${brand.brand} ${device.label} Reparatur Wien`,
      description: `${brand.brand} ${device.label} Reparatur und Service durch MONTER Reparatur & Service in Wien und Umgebung.`,
      serviceType: `${device.label} Reparatur`,
      brand: {
        "@type": "Brand",
        name: brand.brand
      },
      areaServed: servedAreasJsonLd,
      provider: localBusinessProviderRef
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.siteUrl },
        { "@type": "ListItem", position: 2, name: "Marken", item: `${siteConfig.siteUrl}/marken` },
        {
          "@type": "ListItem",
          position: 3,
          name: brand.brand,
          item: `${siteConfig.siteUrl}/marken/${brand.slug}`
        },
        {
          "@type": "ListItem",
          position: 4,
          name: `${brand.brand} ${device.label} Reparatur Wien`,
          item: `${siteConfig.siteUrl}/marken/${brand.slug}/${device.slug}`
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
              <li>
                <Link href="/" className="transition hover:text-[color:var(--accent)]">
                  Start
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/marken" className="transition hover:text-[color:var(--accent)]">
                  Marken
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/marken/${brand.slug}`}
                  className="transition hover:text-[color:var(--accent)]"
                >
                  {brand.brand}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[color:var(--ink)]">{device.label}</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">
                {brand.brand} · {device.category}
              </p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.75rem]">
                {brand.brand} {device.label} Reparatur in Wien.
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                {intro}
              </p>
            </div>

            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Direktkontakt</p>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="font-display mt-4 block break-words text-3xl font-light tracking-tight text-[color:var(--accent)] sm:text-4xl"
              >
                {siteConfig.phoneDisplay}
              </a>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                {`Bitte Modellnummer und Fehlerbild der ${brand.brand} ${device.label} bereithalten — telefonisch geht es am schnellsten.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <aside className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="cap-line tracking-eyebrow">Vorbereiten</p>
            <h2 className="font-display mt-7 text-2xl font-normal leading-tight tracking-tight">
              Daten für die Anfrage
            </h2>
            <div className="mt-8 grid gap-0 border-t border-[color:var(--border)]">
              {device.checklist.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-[color:var(--border)] py-4"
                >
                  <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                  <p className="text-sm font-light text-[color:var(--ink)]">{item}</p>
                </div>
              ))}
            </div>
            <Link href="/kontakt" className="btn-primary mt-10 w-full">
              Anfrage stellen
            </Link>
            <Link
              href={`/marken/${brand.slug}`}
              className="mt-4 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
            >
              Alle {brand.brand} Geräte
            </Link>
          </aside>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="border-b border-[color:var(--border)] pb-12 last:border-0"
              >
                <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                <h2 className="font-display mt-6 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                  {section.body}
                </p>
              </section>
            ))}

            {content ? (
              <section className="grid gap-10 border-b border-[color:var(--border)] pb-12">
                <div>
                  <p className="tracking-eyebrow text-[color:var(--muted)]">
                    Verbreitete {brand.brand} Modellreihen
                  </p>
                  <ul className="mt-6 grid gap-0 border-t border-[color:var(--border)]">
                    {content.modelSeries.map((series) => (
                      <li
                        key={series}
                        className="border-b border-[color:var(--border)] py-4 text-sm font-light leading-relaxed"
                      >
                        {series}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[color:var(--bg-muted)] p-8 lg:p-10">
                  <p className="tracking-eyebrow text-[color:var(--muted)]">Ersatzteillage</p>
                  <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {content.partsNote}
                  </p>
                </div>
              </section>
            ) : null}

            {showErrorCodes ? (
              <section className="border-b border-[color:var(--border)] pb-12">
                <p className="tracking-eyebrow text-[color:var(--muted)]">
                  Fehlercodes und Anzeigen bei {brand.brand} {device.plural}
                </p>
                <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  Ein Code benennt den gestörten Bereich, nicht zwingend das defekte Bauteil, und die
                  Bedeutung kann je Baureihe abweichen. Wo der Hersteller für diese Gerätegattung
                  keine Codeliste im Klartext ausgibt, stehen hier die Anzeigen, die das Gerät zeigt.
                </p>
                <dl className="mt-8 grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
                  {content.errorCodes.map((entry) => (
                    <div key={entry.code} className="bg-white p-6">
                      <dt className="font-display text-xl font-normal tracking-tight text-[color:var(--accent)]">
                        {entry.code}
                      </dt>
                      <dd className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                        {entry.meaning}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            <section className="bg-[color:var(--bg-muted)] p-10 lg:p-14">
              <p className="cap-line tracking-eyebrow">Weitere {brand.brand} Geräte</p>
              <h2 className="font-display mt-7 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                {brand.brand} Service für den ganzen Haushalt.
              </h2>
              <div className="mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
                {otherDevicesForBrand.map((otherDevice) => (
                  <Link
                    key={otherDevice.slug}
                    href={`/marken/${brand.slug}/${otherDevice.slug}`}
                    className="group bg-white p-6 transition hover:bg-[color:var(--bg-strong)]"
                  >
                    <p className="tracking-eyebrow text-[color:var(--muted)]">
                      {otherDevice.category}
                    </p>
                    <h3 className="font-display mt-4 text-lg font-normal leading-snug tracking-tight">
                      {brand.brand} {otherDevice.label}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                      {otherDevice.short}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-[color:var(--ink)] p-10 text-white lg:p-14">
              <p className="cap-line-light tracking-eyebrow text-white/70">
                {device.label} — andere Marken
              </p>
              <h2 className="font-display mt-7 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                {device.label} Reparatur, markenoffen.
              </h2>
              <div className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
                {otherBrandsForDevice.map((otherBrand) => (
                  <Link
                    key={otherBrand.slug}
                    href={`/marken/${otherBrand.slug}/${device.slug}`}
                    className="group bg-[color:var(--ink)] p-6 transition hover:bg-white/5"
                  >
                    <p className="tracking-eyebrow text-white/55">{otherBrand.brand}</p>
                    <h3 className="font-display mt-4 text-lg font-normal leading-snug tracking-tight">
                      {otherBrand.brand} {device.label}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-20 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="cap-line tracking-eyebrow">Jetzt anfragen</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                {brand.brand} {device.label} — telefonisch am schnellsten.
              </h2>
              <p className="mt-8 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Mit Modellnummer und Fehlercode klären wir schon im Gespräch, welche Teile
                wahrscheinlich nötig sind und ob sich die Reparatur rechnet.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary">
                Anrufen
              </a>
              <Link href="/kontakt" className="btn-ghost">
                Formular nutzen
              </Link>
            </div>
          </div>

          <div className="mt-20 border-t border-[color:var(--border)] pt-12">
            <p className="tracking-eyebrow text-[color:var(--muted)]">Übersichtsseiten</p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm font-light">
              <Link
                href={`/marken/${brand.slug}`}
                className="border-b border-transparent py-1 transition hover:border-[color:var(--ink)]"
              >
                {brand.brand} Markenseite
              </Link>
              <Link
                href={`/haushaltsgeraete/${device.serviceSlug}`}
                className="border-b border-transparent py-1 transition hover:border-[color:var(--ink)]"
              >
                {device.label} Reparatur Wien
              </Link>
              <Link
                href="/haushaltsgeraete"
                className="border-b border-transparent py-1 transition hover:border-[color:var(--ink)]"
              >
                Alle Haushaltsgeräte
              </Link>
              <Link
                href="/marken"
                className="border-b border-transparent py-1 transition hover:border-[color:var(--ink)]"
              >
                Alle Marken
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

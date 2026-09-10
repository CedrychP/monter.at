import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "../../pageMetadata";
import { localBusinessProviderRef, siteConfig } from "../../siteConfig";
import { brandPages, getBrandPage } from "../brands";
import { brandDeviceCategories } from "../devices";
import { isBrandDeviceEnriched } from "../brandDeviceContent";
import { servedAreasJsonLd } from "../../einsatzgebiete/regionPages";

type BrandPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return brandPages.map((brand) => ({
    slug: brand.slug
  }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandPage(slug);

  if (!brand) {
    return {
      title: "Marke nicht gefunden"
    };
  }

  return buildMetadata({
    title: brand.metaTitle,
    description: brand.description,
    path: `/marken/${brand.slug}`
  });
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandPage(slug);

  if (!brand) {
    notFound();
  }

  const otherBrands = brandPages.filter((item) => item.slug !== brand.slug);
  const showErrorCodes = brand.errorCodesReviewed && brand.errorCodes.length > 0;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${brand.brand} Reparatur Wien`,
      description: brand.description,
      serviceType: `${brand.brand} Haushaltsgeräte Reparatur`,
      brand: { "@type": "Brand", name: brand.brand },
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
          name: `${brand.brand} Reparatur Wien`,
          item: `${siteConfig.siteUrl}/marken/${brand.slug}`
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
              <li className="text-[color:var(--ink)]">{brand.brand}</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Markenservice</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]">
                {brand.brand} Reparatur in Wien.
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                {brand.intro}
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
                Bitte Gerätetyp, Modellnummer und Fehlerbild bereithalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow">Hersteller im Profil</p>
              <h2 className="font-display mt-8 text-balance text-3xl font-light leading-[1.05] tracking-tight sm:text-4xl">
                Was {brand.brand} technisch ausmacht.
              </h2>
              <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                {brand.profile}
              </p>
            </div>

            <div className="reveal grid gap-10">
              <div>
                <p className="tracking-eyebrow text-[color:var(--muted)]">
                  Verbreitete Modellreihen
                </p>
                <ul className="mt-6 grid gap-0 border-t border-[color:var(--border)]">
                  {brand.modelSeries.map((series) => (
                    <li
                      key={series}
                      className="border-b border-[color:var(--border)] py-4 text-sm font-light leading-relaxed text-[color:var(--ink)]"
                    >
                      {series}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[color:var(--bg-muted)] p-8 lg:p-10">
                <p className="tracking-eyebrow text-[color:var(--muted)]">Ersatzteillage</p>
                <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {brand.partsNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showErrorCodes ? (
        <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-20 sm:py-24">
          <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
            <div className="reveal max-w-2xl">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Fehlercodes</p>
              <h2 className="font-display mt-6 text-balance text-3xl font-light tracking-tight sm:text-4xl">
                Häufige {brand.brand} Fehlercodes.
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Ein Code benennt den gestörten Bereich, nicht zwingend das defekte Bauteil. Die
                Bedeutung kann je Baureihe abweichen — als erste Orientierung hilft er trotzdem.
              </p>
            </div>
            <dl className="mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
              {brand.errorCodes.map((entry) => (
                <div key={entry.code} className="bg-white p-8">
                  <dt className="font-display text-2xl font-normal tracking-tight text-[color:var(--accent)]">
                    {entry.code}
                  </dt>
                  <dd className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {entry.meaning}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      <section className="border-t border-[color:var(--border)] bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <p className="cap-line tracking-eyebrow">Typische Fehlerbilder</p>
            <h2 className="font-display mt-8 text-balance text-3xl font-light leading-[1.05] tracking-tight sm:text-4xl">
              {brand.brand} in der Praxis.
            </h2>
          </div>
          <div className="mt-12 grid gap-px bg-[color:var(--border)] lg:grid-cols-3">
            {brand.sections.map((section, index) => (
              <article key={section.title} className="bg-white p-8 lg:p-10">
                <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                <h3 className="font-display mt-6 text-2xl font-normal leading-tight tracking-tight">
                  {section.title}
                </h3>
                <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">
                {brand.brand} Service in Wien & Umgebung
              </p>
              <h2 className="font-display mt-7 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                {brand.brand} Reparatur nach Gerät.
              </h2>
            </div>
            <p className="max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)] lg:justify-self-end">
              {`Eigene Seiten je ${brand.brand} Geräteart — von der Waschmaschine über Geschirrspüler, Trockner und Backofen bis zu Kühl- und Tiefkühlgerät. Dort finden Sie die gerätespezifischen Fehlerbilder und die Frage Reparatur oder Austausch im Detail.`}
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {brandDeviceCategories.map((device) => (
              <Link
                key={device.slug}
                href={`/marken/${brand.slug}/${device.slug}`}
                className="group bg-white p-8 transition hover:bg-[color:var(--bg-strong)]"
              >
                <p className="tracking-eyebrow text-[color:var(--muted)]">{device.category}</p>
                <h3 className="font-display mt-5 text-xl font-normal leading-snug tracking-tight sm:text-2xl">
                  {brand.brand} {device.label} Reparatur
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {device.short}
                </p>
                <span className="mt-7 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition group-hover:text-[color:var(--accent)]">
                  {isBrandDeviceEnriched(brand.slug, device.slug) ? "Ansehen" : "Details anfragen"}
                  <span className="ml-1 transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-20 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="cap-line tracking-eyebrow">Jetzt anfragen</p>
              <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                {brand.brand} Reparatur — telefonisch am schnellsten.
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
            <p className="tracking-eyebrow text-[color:var(--muted)]">Weitere Marken</p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {otherBrands.map((other) => (
                <Link
                  key={other.slug}
                  href={`/marken/${other.slug}`}
                  className="border-b border-transparent py-1 text-sm font-light text-[color:var(--muted)] transition hover:border-[color:var(--ink)] hover:text-[color:var(--ink)]"
                >
                  {other.brand}
                </Link>
              ))}
              <Link
                href="/marken"
                className="border-b border-transparent py-1 text-sm font-light text-[color:var(--accent)] transition hover:border-[color:var(--accent)]"
              >
                Alle Marken ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HubFaq } from "../../HubBlocks";
import { servedAreas } from "../../einsatzgebiete/regionPages";
import { buildMetadata } from "../../pageMetadata";
import { localBusinessProviderRef, siteConfig } from "../../siteConfig";
import { brandDeviceHref } from "../../serviceHrefs";
import { brandDevicePhotos } from "../BrandDeviceFrame";
import { brandPages, getBrandPage } from "../brands";
import { brandDeviceCategories } from "../devices";

type BrandPageProps = {
  params: Promise<{ slug: string }>;
};

const sanitaerOrder = ["waschmaschine", "geschirrspueler", "trockner"];
const kuecheOrder = ["backofen", "herd", "kuehlschrank", "tiefkuehlgeraet"];

export function generateStaticParams() {
  return brandPages.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandPage(slug);
  if (!brand) return { title: "Marke nicht gefunden" };
  return buildMetadata({
    title: brand.metaTitle,
    description: brand.description,
    path: `/marken/${brand.slug}`
  });
}

function DeviceCards({ slugs, brandSlug, brandName }: { slugs: string[]; brandSlug: string; brandName: string }) {
  const devices = slugs
    .map((slug) => brandDeviceCategories.find((device) => device.slug === slug))
    .filter((device) => Boolean(device));

  return (
    <ul className={`mt-14 grid gap-px border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 ${devices.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {devices.map((device) => {
        if (!device) return null;
        const photo = brandDevicePhotos[device.slug];
        return (
          <li key={device.slug} className="bg-white">
            <Link href={brandDeviceHref(brandSlug, device.slug)} className="block h-full">
              {photo ? (
                <div className="relative aspect-[4/3] border-b border-[color:var(--border)] bg-[color:var(--bg-muted)]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 22rem, 100vw" className="object-cover" />
                </div>
              ) : null}
              <div className="px-6 py-8">
                <h3 className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)]">
                  {brandName} {device.label}
                </h3>
                <span className="mt-4 block text-base font-light leading-7 text-[color:var(--muted)]">{device.short}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandPage(slug);
  if (!brand) notFound();

  const h1 = brand.h1 ?? `${brand.brand} Reparatur in Wien.`;
  const otherBrands = brandPages.filter((item) => item.slug !== brand.slug);
  const showErrorCodes = brand.errorCodesReviewed && brand.errorCodes.length > 0;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: brand.metaTitle,
      description: brand.description,
      url: `${siteConfig.siteUrl}/marken/${brand.slug}`,
      serviceType: `${brand.brand} Haushaltsgeräte Reparatur`,
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
        { "@type": "ListItem", position: 3, name: brand.metaTitle, item: `${siteConfig.siteUrl}/marken/${brand.slug}` }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20">
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
              <li className="text-[color:var(--ink)]">{brand.brand}</li>
            </ol>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Markenservice</p>
            <h1 className="font-display mt-6 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">{h1}</h1>
            <p className="mt-6 text-lg font-light leading-8 text-[color:var(--muted)]">{brand.intro}</p>
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

      <section>
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">Was {brand.brand} technisch ausmacht.</h2>
          <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-[color:var(--muted)]">{brand.profile}</p>
          <ul className="mt-10 border-t border-[color:var(--border)]">
            {brand.sections.map((section) => (
              <li key={section.title} className="grid items-start gap-4 border-b border-[color:var(--border)] py-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
                <h3 className="font-display text-2xl font-light tracking-tight">{section.title}</h3>
                <p className="text-lg font-light leading-8 text-[color:var(--muted)]">{section.body}</p>
              </li>
            ))}
          </ul>
          <h3 className="font-display mt-16 text-3xl font-light tracking-tight">Verbreitete Reihen.</h3>
          <ul className="mt-6 border-t border-[color:var(--border)]">
            {brand.modelSeries.map((series) => (
              <li key={series} className="border-b border-[color:var(--border)] py-4 text-lg font-light leading-8">
                {series}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-[color:var(--muted)]">{brand.partsNote}</p>
        </div>
      </section>

      {showErrorCodes ? (
        <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)]">
          <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
            <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">Häufige {brand.brand} Anzeigen.</h2>
            <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-[color:var(--muted)]">
              Ein Code benennt den Bereich, nicht das Bauteil. Auf der Geräteseite steht, für welches Gerät die Anzeige gilt.
            </p>
            <dl className="mt-8 border-t border-[color:var(--border)]">
              {brand.errorCodes.map((entry) => (
                <div key={entry.code} className="grid gap-2 border-b border-[color:var(--border)] py-6 sm:grid-cols-[10rem_1fr] sm:gap-10">
                  <dt className="font-display text-2xl font-light tracking-tight">{entry.code}</dt>
                  <dd className="text-lg font-light leading-8 text-[color:var(--muted)]">{entry.meaning}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Sanitärgeräte</p>
          <h2 className="font-display mt-6 text-4xl font-light tracking-tight sm:text-5xl">{brand.brand} an Wasser und Luft.</h2>
          <DeviceCards slugs={sanitaerOrder} brandSlug={brand.slug} brandName={brand.brand} />
          <p className="mt-4 text-sm font-light text-[color:var(--muted)]">Beispielbild, kein Einsatzfoto.</p>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)]">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Küche</p>
          <h2 className="font-display mt-6 text-4xl font-light tracking-tight sm:text-5xl">Backofen und Herd getrennt.</h2>
          <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-[color:var(--muted)]">
            Eine kalte Kochzone und ein Ofen, der nicht heizt, sind zwei Geräte. Kühlschrank und Tiefkühlgerät ebenso.
          </p>
          <DeviceCards slugs={kuecheOrder} brandSlug={brand.slug} brandName={brand.brand} />
          <p className="mt-4 text-sm font-light text-[color:var(--muted)]">Beispielbild, kein Einsatzfoto.</p>
        </div>
      </section>

      {brand.faq && brand.faq.length > 0 ? (
        <HubFaq eyebrow="Häufige Fragen" title={`${brand.brand}: kurz beantwortet.`} items={brand.faq} />
      ) : null}

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-light tracking-tight">Weitere Marken.</h2>
          <ul className="mt-8 border-t border-[color:var(--border)]">
            {otherBrands.map((other) => (
              <li key={other.slug} className="border-b border-[color:var(--border)]">
                <Link href={`/marken/${other.slug}`} className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:items-baseline">
                  <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">Marke</span>
                  <span className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)]">{other.brand}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--muted)]">Bevor Sie anrufen</p>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">Modellnummer und was es gerade tut.</h2>
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

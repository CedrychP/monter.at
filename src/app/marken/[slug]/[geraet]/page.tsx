import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "../../../siteConfig";
import { brandPages, getBrandPage } from "../../brands";
import { brandDeviceCategories, getBrandDeviceCategory } from "../../devices";

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

  const title = `${brand.brand} ${device.label} Reparatur Wien & Umgebung | MONTER Service`;
  const description = `${brand.brand} ${device.label} Reparatur in Wien und Umgebung: schnelle Einschätzung, klare Diagnose und telefonische Terminabstimmung. Auch für Waschmaschine, Geschirrspüler, Trockner, Backofen & Herd, Kühlschrank und Tiefkühlgerät.`;

  return {
    title,
    description,
    keywords: [
      `${brand.brand} ${device.label} Reparatur Wien`,
      `${brand.brand} Reparatur Wien & Umgebung`,
      `${brand.brand} Waschmaschine Reparatur Wien`,
      `${brand.brand} Geschirrspüler Reparatur Wien`,
      `${brand.brand} Trockner Reparatur Wien`,
      `${brand.brand} Backofen Reparatur Wien`,
      `${brand.brand} Kühlschrank Reparatur Wien`,
      `${brand.brand} Tiefkühlgerät Reparatur Wien`
    ],
    alternates: {
      canonical: `/marken/${brand.slug}/${device.slug}`
    },
    openGraph: {
      title,
      description,
      type: "website"
    }
  };
}

export default async function BrandDevicePage({ params }: BrandDevicePageProps) {
  const { slug, geraet } = await params;
  const brand = getBrandPage(slug);
  const device = getBrandDeviceCategory(geraet);

  if (!brand || !device) {
    notFound();
  }

  const otherDevicesForBrand = brandDeviceCategories.filter(
    (item) => item.slug !== device.slug
  );
  const otherBrandsForDevice = brandPages.filter((item) => item.slug !== brand.slug);

  const headline = `${brand.brand} ${device.label} Reparatur in Wien & Umgebung`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brand.brand} ${device.label} Reparatur Wien & Umgebung`,
    description: `${brand.brand} ${device.label} Reparatur und Service durch MONTER Reparatur & Service in Wien und Umgebung. Markenoffen für Waschmaschine, Geschirrspüler, Trockner, Backofen & Herd, Kühlschrank und Tiefkühlgerät.`,
    serviceType: `${device.label} Reparatur`,
    brand: {
      "@type": "Brand",
      name: brand.brand
    },
    areaServed: [
      { "@type": "City", name: "Wien" },
      { "@type": "AdministrativeArea", name: "Wien & Umgebung" }
    ],
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.serviceName,
      telephone: siteConfig.phoneHref,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        postalCode: siteConfig.address.postalCode,
        addressLocality: siteConfig.address.city,
        addressCountry: siteConfig.address.country
      }
    }
  };

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">
                {brand.brand} · {device.category}
              </p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]">
                {headline}.
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                {`${brand.brand} ${device.plural} sind in vielen Wiener Haushalten und Objektküchen im Einsatz. ${device.short} MONTER Reparatur & Service hilft bei ${brand.brand} ${device.label} Reparatur in Wien und Umgebung — markenoffen auch für Waschmaschine, Geschirrspüler, Trockner, Backofen & Herd, Kühlschrank und Tiefkühlgerät.`}
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
                {`Bitte ${brand.brand} ${device.label} Modellnummer und Fehlerbild bereithalten — telefonisch geht es am schnellsten.`}
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
              Daten für die {brand.brand} {device.label} Reparatur Anfrage
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
          </aside>

          <div className="space-y-12">
            {device.sections.map((section, index) => (
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
                <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {`Für die ${brand.brand} ${device.label} Reparatur in Wien und Umgebung gelten die gleichen Prinzipien wie für Waschmaschine, Geschirrspüler, Trockner, Backofen & Herd, Kühlschrank und Tiefkühlgerät: klare Daten, ehrliche Einschätzung, transparente Entscheidung.`}
                </p>
              </section>
            ))}

            <section className="bg-[color:var(--bg-muted)] p-10 lg:p-14">
              <p className="cap-line tracking-eyebrow">Weitere {brand.brand} Reparaturen in Wien & Umgebung</p>
              <h2 className="font-display mt-7 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                {brand.brand} Service für alle Haushalts­geräte.
              </h2>
              <p className="mt-5 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                {`MONTER Reparatur & Service unterstützt in Wien und Umgebung bei der ${brand.brand} ${device.label} Reparatur sowie bei den weiteren ${brand.brand} Haushalts­geräten — von Waschmaschine bis Tiefkühlgerät.`}
              </p>
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
                      {brand.brand} {otherDevice.label} Reparatur Wien
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                      {otherDevice.short}
                    </p>
                    <span className="mt-6 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition group-hover:text-[color:var(--accent)]">
                      Ansehen
                      <span className="ml-1 transition group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-[color:var(--ink)] p-10 text-white lg:p-14">
              <p className="cap-line-light tracking-eyebrow text-white/70">
                {device.label} Reparatur — alle Marken
              </p>
              <h2 className="font-display mt-7 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                {device.label} Reparatur in Wien & Umgebung — markenoffen.
              </h2>
              <p className="mt-5 max-w-2xl text-[1.05rem] font-light leading-relaxed text-white/70">
                {`Neben ${brand.brand} ${device.label} Reparatur unterstützen wir auch bei anderen Marken — und ebenso bei Waschmaschine, Geschirrspüler, Trockner, Backofen & Herd, Kühlschrank und Tiefkühlgerät Reparatur in Wien und Umgebung.`}
              </p>
              <div className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
                {otherBrandsForDevice.map((otherBrand) => (
                  <Link
                    key={otherBrand.slug}
                    href={`/marken/${otherBrand.slug}/${device.slug}`}
                    className="group bg-[color:var(--ink)] p-6 transition hover:bg-white/5"
                  >
                    <p className="tracking-eyebrow text-white/55">
                      {otherBrand.brand}
                    </p>
                    <h3 className="font-display mt-4 text-lg font-normal leading-snug tracking-tight">
                      {otherBrand.brand} {device.label} Reparatur Wien
                    </h3>
                    <span className="mt-6 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white transition group-hover:text-[color:var(--accent)]">
                      Ansehen
                      <span className="ml-1 transition group-hover:translate-x-1">→</span>
                    </span>
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
                {brand.brand} {device.label} Reparatur — telefonisch am schnellsten.
              </h2>
              <p className="mt-8 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                {`Wir prüfen gemeinsam, ob eine ${brand.brand} ${device.label} Reparatur in Wien oder Umgebung sinnvoll ist und welche Daten für die Vorbereitung helfen — egal ob Waschmaschine, Geschirrspüler, Trockner, Backofen & Herd, Kühlschrank oder Tiefkühlgerät.`}
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

          <div className="mt-20 grid gap-12 border-t border-[color:var(--border)] pt-12 lg:grid-cols-2">
            <div>
              <p className="tracking-eyebrow text-[color:var(--muted)]">Übersichtsseiten</p>
              <ul className="mt-6 space-y-3 text-sm font-light text-[color:var(--ink)]">
                <li>
                  <Link
                    href={`/marken/${brand.slug}`}
                    className="border-b border-transparent transition hover:border-[color:var(--ink)] hover:text-[color:var(--ink)]"
                  >
                    {brand.brand} Markenseite — alle Geräte
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/leistungen/${device.serviceSlug}`}
                    className="border-b border-transparent transition hover:border-[color:var(--ink)] hover:text-[color:var(--ink)]"
                  >
                    {device.label} Reparatur Wien — allgemeine Leistung
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leistungen"
                    className="border-b border-transparent transition hover:border-[color:var(--ink)] hover:text-[color:var(--ink)]"
                  >
                    Alle Reparatur­leistungen
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="tracking-eyebrow text-[color:var(--muted)]">Weitere Marken</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {otherBrandsForDevice.map((otherBrand) => (
                  <Link
                    key={otherBrand.slug}
                    href={`/marken/${otherBrand.slug}`}
                    className="border-b border-transparent py-1 text-sm font-light text-[color:var(--muted)] transition hover:border-[color:var(--ink)] hover:text-[color:var(--ink)]"
                  >
                    {otherBrand.brand}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

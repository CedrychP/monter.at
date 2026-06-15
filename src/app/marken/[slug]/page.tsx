import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "../../siteConfig";
import { brandPages, getBrandPage } from "../brands";
import { brandDeviceCategories } from "../devices";

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

  return {
    title: brand.metaTitle,
    description: brand.description,
    alternates: {
      canonical: `/marken/${brand.slug}`
    }
  };
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandPage(slug);

  if (!brand) {
    notFound();
  }

  const otherBrands = brandPages.filter((item) => item.slug !== brand.slug);

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
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
          <div className="grid gap-px bg-[color:var(--border)] md:grid-cols-3">
            {[
              "Fehlercode und Gerätedaten aufnehmen",
              "Wirtschaftlichkeit der Reparatur prüfen",
              "Termin oder nächsten Schritt telefonisch klären"
            ].map((item, index) => (
              <article key={item} className="bg-white p-8 lg:p-10">
                <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                <h2 className="font-display mt-6 text-xl font-normal leading-tight tracking-tight sm:text-2xl">
                  {item}
                </h2>
                <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  Bei {brand.brand} Haushaltsgeräten hilft eine klare Beschreibung, damit
                  Diagnose, Ersatzteilbedarf und Aufwand sinnvoll eingeschätzt werden können.
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
                {brand.brand} Reparatur für alle Haushalts­geräte.
              </h2>
            </div>
            <p className="max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)] lg:justify-self-end">
              {`Eigene SEO-Seiten zu jeder ${brand.brand} Geräteart in Wien und Umgebung — von ${brand.brand} Waschmaschine Reparatur über Geschirrspüler, Trockner, Backofen & Herd bis Kühlschrank und Tiefkühlgerät Reparatur.`}
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {brandDeviceCategories.map((device) => (
              <Link
                key={device.slug}
                href={`/marken/${brand.slug}/${device.slug}`}
                className="group bg-white p-8 transition hover:bg-[color:var(--bg-strong)]"
              >
                <p className="tracking-eyebrow text-[color:var(--muted)]">
                  {device.category}
                </p>
                <h3 className="font-display mt-5 text-xl font-normal leading-snug tracking-tight sm:text-2xl">
                  {brand.brand} {device.label} Reparatur Wien & Umgebung
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {device.short}
                </p>
                <span className="mt-7 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition group-hover:text-[color:var(--accent)]">
                  Ansehen
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
                Wir prüfen gemeinsam, ob eine Reparatur sinnvoll ist und welche Informationen
                für die Vorbereitung wichtig sind.
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

          {otherBrands.length ? (
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
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}

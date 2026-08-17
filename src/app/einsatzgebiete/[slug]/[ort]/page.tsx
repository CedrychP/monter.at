import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DetailPageLayout from "../../../DetailPageLayout";
import { HubFaq } from "../../../HubBlocks";
import { requireRegionPage, getRegionPage } from "../../regionPages";
import {
  getLocationPage,
  getLocationsForRegion,
  locationPages,
  locationHref,
  type LocationPage
} from "../../locationPages";

type LocationPageProps = {
  params: Promise<{
    slug: string;
    ort: string;
  }>;
};

const anfrageChecklist = [
  "Adresse & Stockwerk",
  "Marke & Modellnummer",
  "Fehlercode",
  "Fehlerbild",
  "Erreichbarkeit"
];

export function generateStaticParams() {
  return locationPages.map((location) => ({
    slug: location.regionSlug,
    ort: location.slug
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug, ort } = await params;
  const location = getLocationPage(slug, ort);

  if (!location) {
    return {
      title: "Seite nicht gefunden"
    };
  }

  return {
    title: location.metaTitle,
    description: location.description,
    alternates: {
      canonical: locationHref(location)
    },
    openGraph: {
      title: location.metaTitle,
      description: location.description,
      type: "website"
    },
    // Orte ohne eigenen Inhalt bleiben aus dem Index, sind aber erreichbar.
    ...(location.enriched ? {} : { robots: { index: false, follow: true } })
  };
}

function LocationProfile({ location }: { location: LocationPage }) {
  const region = requireRegionPage(location.regionSlug);

  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-20 sm:py-24">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Vor Ort</p>
            <h2 className="font-display mt-6 text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Was {location.name} technisch ausmacht.
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              {location.character}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {location.postalCodes.map((code) => (
                <span
                  key={code}
                  className="border border-[color:var(--border)] bg-white px-3 py-1.5 text-[0.72rem] font-medium tabular-nums tracking-[0.16em] text-[color:var(--muted)]"
                >
                  {code}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="cap-line tracking-eyebrow">Typische Einsätze</p>
            <ul className="mt-7">
              {location.focus.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-[color:var(--border)] py-4 text-sm font-light leading-relaxed"
                >
                  <span aria-hidden="true" className="text-[color:var(--accent)]">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href={`/einsatzgebiete/${region.slug}`}
                className="inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]"
              >
                Einsatzgebiet {region.name}
                <span className="ml-1">→</span>
              </Link>
              <Link
                href="/preise"
                className="inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]"
              >
                Preise und Anfahrt
                <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug, ort } = await params;
  const location = getLocationPage(slug, ort);
  const region = getRegionPage(slug);

  if (!location || !region) {
    notFound();
  }

  const related = getLocationsForRegion(region.slug)
    .filter((item) => item.slug !== location.slug)
    .slice(0, 3);

  return (
    <DetailPageLayout
      ancestors={[{ label: "Einsatzgebiete", href: "/einsatzgebiete" }]}
      hub={{ label: region.name, href: `/einsatzgebiete/${region.slug}` }}
      category={location.name}
      h1={location.h1}
      intro={location.intro}
      contactNote="Nennen Sie Adresse, Stockwerk und Fehlerbild — wir sagen Ihnen, wann ein Termin möglich ist."
      checklist={anfrageChecklist}
      sections={location.sections}
      relatedEyebrow={region.slug === "wien" ? "Weitere Bezirke" : `Weitere Orte in ${region.name}`}
      relatedTitle="Wo wir außerdem unterwegs sind."
      related={related.map((item) => ({
        category: item.postalCodes[0],
        title: item.name,
        href: locationHref(item)
      }))}
      jsonLd={{
        name: `Reparatur und Service ${location.name}`,
        description: location.description,
        path: locationHref(location)
      }}
      areaServed={[
        { type: "City", name: location.name },
        { type: region.slug === "wien" ? "City" : "State", name: region.name }
      ]}
    >
      <LocationProfile location={location} />
      <HubFaq
        eyebrow="Häufige Fragen"
        title={`Kurz geklärt: ${location.name}.`}
        items={location.faq}
      />
    </DetailPageLayout>
  );
}

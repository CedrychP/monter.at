import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPageLayout from "../../../../DetailPageLayout";
import { HubFaq } from "../../../../HubBlocks";
import { buildMetadata } from "../../../../pageMetadata";
import LocationProfile from "../../../LocationProfile";
import { getRegionPage } from "../../../regionPages";
import {
  getDistrictPage,
  getDistrictsFor,
  getLocationPage,
  locationPages,
  locationHref
} from "../../../locationPages";

type DistrictPageProps = {
  params: Promise<{
    slug: string;
    ort: string;
    stadtteil: string;
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
  return locationPages
    .filter((location) => location.parentSlug)
    .map((location) => ({
      slug: location.regionSlug,
      ort: location.parentSlug as string,
      stadtteil: location.slug
    }));
}

export async function generateMetadata({ params }: DistrictPageProps): Promise<Metadata> {
  const { slug, ort, stadtteil } = await params;
  const district = getDistrictPage(slug, ort, stadtteil);

  if (!district) {
    return {
      title: "Seite nicht gefunden"
    };
  }

  return buildMetadata({
    title: district.metaTitle,
    description: district.description,
    path: locationHref(district),
    robots: district.enriched ? undefined : { index: false, follow: true }
  });
}

export default async function DistrictDetailPage({ params }: DistrictPageProps) {
  const { slug, ort, stadtteil } = await params;
  const district = getDistrictPage(slug, ort, stadtteil);
  const city = getLocationPage(slug, ort);
  const region = getRegionPage(slug);

  if (!district || !city || !region) {
    notFound();
  }

  // Die nächsten Stadtteile in Listenreihenfolge statt immer derselben drei.
  const siblings = getDistrictsFor(city);
  const index = siblings.findIndex((item) => item.slug === district.slug);
  const related = [1, 2, 3]
    .map((offset) => siblings[(index + offset) % siblings.length])
    .filter((item) => item.slug !== district.slug);

  return (
    <DetailPageLayout
      ancestors={[
        { label: "Einsatzgebiete", href: "/einsatzgebiete" },
        { label: region.name, href: `/einsatzgebiete/${region.slug}` }
      ]}
      hub={{ label: city.name, href: locationHref(city) }}
      category={district.name}
      h1={district.h1}
      intro={district.intro}
      contactNote="Nennen Sie Adresse, Stockwerk und Fehlerbild — wir sagen Ihnen, wann ein Termin möglich ist."
      checklist={anfrageChecklist}
      sections={district.sections}
      relatedEyebrow={`Weitere Stadtteile in ${city.name}`}
      relatedTitle="Wo wir außerdem unterwegs sind."
      related={related.map((item) => ({
        category: item.postalCodes[0],
        title: item.name,
        href: locationHref(item)
      }))}
      jsonLd={{
        name: `Reparatur und Service ${city.name}-${district.name}`,
        description: district.description,
        path: locationHref(district)
      }}
      areaServed={[
        { type: "City", name: city.name },
        { type: "State", name: region.name }
      ]}
    >
      <LocationProfile
        location={district}
        parent={{ label: `Übersicht ${city.name}`, href: locationHref(city) }}
      />
      <HubFaq
        eyebrow="Häufige Fragen"
        title={`Kurz geklärt: ${district.name}.`}
        items={district.faq}
      />
    </DetailPageLayout>
  );
}

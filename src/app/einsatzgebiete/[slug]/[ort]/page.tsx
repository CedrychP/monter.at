import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPageLayout from "../../../DetailPageLayout";
import { HubDetailLinks, HubFaq } from "../../../HubBlocks";
import { buildMetadata } from "../../../pageMetadata";
import type { AppliancePage } from "../../../haushaltsgeraete/appliancePages";
import { linzAppliancePages } from "../../../haushaltsgeraete/linzAppliancePages";
import LocationProfile from "../../LocationProfile";
import { getRegionPage } from "../../regionPages";
import {
  getDistrictsFor,
  getLocationPage,
  getLocationsForRegion,
  locationPages,
  locationHref
} from "../../locationPages";

type LocationPageProps = {
  params: Promise<{
    slug: string;
    ort: string;
  }>;
};

const cityAppliancePages: Record<string, AppliancePage[]> = {
  "oberoesterreich/linz": linzAppliancePages
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
    .filter((location) => !location.parentSlug)
    .map((location) => ({
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

  return buildMetadata({
    title: location.metaTitle,
    description: location.description,
    path: locationHref(location),
    // Orte ohne eigenen Inhalt bleiben aus dem Index, sind aber erreichbar.
    robots: location.enriched ? undefined : { index: false, follow: true }
  });
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
  const districts = getDistrictsFor(location);
  const appliances = cityAppliancePages[`${region.slug}/${location.slug}`] ?? [];

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
      <LocationProfile
        location={location}
        parent={{ label: `Einsatzgebiet ${region.name}`, href: `/einsatzgebiete/${region.slug}` }}
      />
      {appliances.length > 0 ? (
        <HubDetailLinks
          eyebrow="Reparatur nach Gerät"
          title={`Haushaltsgeräte in ${location.name}.`}
          intro="Typische Fehlerbilder, Fehlercodes und die Frage Reparatur oder Austausch — je Gerät eine eigene Seite."
          links={appliances.map((page) => ({
            label: page.category,
            href: `/haushaltsgeraete/${page.slug}`,
            text: page.short
          }))}
        />
      ) : null}
      {districts.length > 0 ? (
        <HubDetailLinks
          eyebrow="Stadtteile"
          title={`${location.name} im Detail.`}
          intro={`Vom Gründerzeitblock bis zur Siedlung am Stadtrand: Baubestand und Zugang unterscheiden sich zwischen den Stadtteilen von ${location.name} deutlich. Diese Seiten sagen, worauf es an Ihrer Adresse ankommt.`}
          links={districts.map((item) => ({
            label: item.name,
            href: locationHref(item),
            text: item.short
          }))}
        />
      ) : null}
      <HubFaq
        eyebrow="Häufige Fragen"
        title={`Kurz geklärt: ${location.name}.`}
        items={location.faq}
      />
    </DetailPageLayout>
  );
}

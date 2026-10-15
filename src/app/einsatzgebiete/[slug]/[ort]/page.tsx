import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "../../../pageMetadata";
import { siteConfig } from "../../../siteConfig";
import { LocationFrame } from "../../LocationFrame";
import { getRegionPage } from "../../regionPages";
import {
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

  const region = getRegionPage(slug);

  return buildMetadata({
    title: location.metaTitle,
    description: location.description,
    path: locationHref(location),
    images:
      region?.slug === "linz"
        ? [`${siteConfig.siteUrl}${region.image}`]
        : undefined,
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

  const siblings = getLocationsForRegion(region.slug);
  const index = siblings.findIndex((item) => item.slug === location.slug);
  const nearby =
    region.slug === "linz"
      ? siblings
      : [1, 2, 3]
          .map((offset) => siblings[(index + offset) % siblings.length])
          .filter((item) => item && item.slug !== location.slug);

  return (
    <LocationFrame
      location={location}
      region={region}
      crumbs={[
        { label: "Einsatzgebiete", href: "/einsatzgebiete" },
        { label: region.name, href: `/einsatzgebiete/${region.slug}` }
      ]}
      places={nearby}
      placesLabel={
        region.slug === "wien" ? "Weitere Bezirke" : region.slug === "linz" ? "Stadtteile" : "Weitere Orte"
      }
      placesTitle={region.slug === "linz" ? "Alle 15 Stadtteile." : undefined}
    />
  );
}

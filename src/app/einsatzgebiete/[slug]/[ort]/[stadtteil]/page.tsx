import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "../../../../pageMetadata";
import { LocationFrame } from "../../../LocationFrame";
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

  const siblings = getDistrictsFor(city);
  const index = siblings.findIndex((item) => item.slug === district.slug);
  const nearby = [1, 2, 3]
    .map((offset) => siblings[(index + offset) % siblings.length])
    .filter((item) => item && item.slug !== district.slug);

  return (
    <LocationFrame
      location={district}
      region={region}
      crumbs={[
        { label: "Einsatzgebiete", href: "/einsatzgebiete" },
        { label: region.name, href: `/einsatzgebiete/${region.slug}` },
        { label: city.name, href: locationHref(city) }
      ]}
      places={nearby}
      placesLabel={`Weitere Stadtteile in ${city.name}`}
    />
  );
}

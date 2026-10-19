import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, clipMetaDescription } from "../../../pageMetadata";
import { applianceHref, brandDeviceHref, brandHref } from "../../../serviceHrefs";
import { BrandDeviceFrame } from "../../BrandDeviceFrame";
import { getBrandDeviceContent } from "../../brandDeviceContent";
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
    return { title: "Seite nicht gefunden" };
  }

  const content = getBrandDeviceContent(brand.slug, device.slug);
  const title = `${brand.brand} ${device.label} Reparatur Wien | MONTER Service`;
  const description = content
    ? clipMetaDescription(`${brand.brand} ${device.label} Reparatur in Wien: ${content.intro}`)
    : `${brand.brand} ${device.label} Reparatur in Wien: ${device.short} Jetzt Termin anfragen.`;

  return buildMetadata({
    title,
    description,
    path: `/marken/${brand.slug}/${device.slug}`,
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
  const title = `${brand.brand} ${device.label} Reparatur Wien | MONTER Service`;
  const description = content
    ? clipMetaDescription(`${brand.brand} ${device.label} Reparatur in Wien: ${content.intro}`)
    : `${brand.brand} ${device.label} Reparatur in Wien: ${device.short}`;

  const otherDevices = brandDeviceCategories
    .filter((item) => item.slug !== device.slug)
    .map((item) => ({
      category: item.category,
      title: `${brand.brand} ${item.label}`,
      href: brandDeviceHref(brand.slug, item.slug)
    }));

  const otherBrands = [
    ...brandPages
      .filter((item) => item.slug !== brand.slug)
      .map((item) => ({
        category: item.brand,
        title: `${item.brand} ${device.label}`,
        href: brandDeviceHref(item.slug, device.slug)
      })),
    {
      category: "Gerät",
      title: `${device.label} markenoffen`,
      href: applianceHref(device.serviceSlug)
    },
    {
      category: "Marke",
      title: `${brand.brand} im Überblick`,
      href: brandHref(brand.slug)
    }
  ];

  return (
    <BrandDeviceFrame
      brand={brand}
      device={device}
      content={content}
      metaTitle={title}
      description={description}
      otherDevices={otherDevices}
      otherBrands={otherBrands}
    />
  );
}

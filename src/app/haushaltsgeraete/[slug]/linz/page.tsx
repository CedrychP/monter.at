import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPageLayout from "../../../DetailPageLayout";
import { HubFaq } from "../../../HubBlocks";
import { buildMetadata } from "../../../pageMetadata";
import { applianceHref } from "../../../serviceHrefs";
import {
  getAppliancePage,
  getLinzAppliancePage,
  relatedApplianceSlugs,
  type AppliancePage
} from "../../appliancePages";
import { linzAppliancePages } from "../../linzAppliancePages";

type LinzAppliancePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return linzAppliancePages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: LinzAppliancePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLinzAppliancePage(slug);

  if (!page) {
    return {
      title: "Seite nicht gefunden"
    };
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.description,
    path: applianceHref(page.slug, "linz")
  });
}

export default async function LinzApplianceDetailPage({ params }: LinzAppliancePageProps) {
  const { slug } = await params;
  const page = getLinzAppliancePage(slug);

  if (!page) {
    notFound();
  }

  const parent = getAppliancePage(slug);
  const preferred = relatedApplianceSlugs[slug] ?? [];
  const siblings = [
    ...preferred
      .map((itemSlug) => linzAppliancePages.find((item) => item.slug === itemSlug))
      .filter((item): item is AppliancePage => Boolean(item)),
    ...linzAppliancePages.filter((item) => item.slug !== page.slug && !preferred.includes(item.slug))
  ]
    .slice(0, 2)
    .map((item) => ({
      category: item.category,
      title: item.title,
      href: applianceHref(item.slug, "linz")
    }));

  const related = [
    ...(parent
      ? [
          {
            category: "Übersicht",
            title: parent.title,
            href: applianceHref(parent.slug)
          }
        ]
      : []),
    { category: "Einsatzgebiet", title: "Reparatur in Linz", href: "/einsatzgebiete/linz" },
    ...siblings
  ];

  return (
    <DetailPageLayout
      ancestors={[{ label: "Haushaltsgeräte", href: "/haushaltsgeraete" }]}
      hub={{ label: page.category, href: applianceHref(page.slug) }}
      category="Linz"
      h1={page.h1}
      intro={page.intro}
      contactNote="Nennen Sie Adresse, Gerät und Fehlerbild — wir sagen Ihnen Anfahrt und Termin in Linz."
      areaServed={[{ type: "City", name: "Linz" }]}
      checklist={page.checklist}
      sections={page.sections}
      relatedEyebrow="Verwandte Leistungen"
      relatedTitle="Weitere Reparaturen in Linz."
      related={related}
      jsonLd={{
        name: page.title,
        description: page.description,
        path: applianceHref(page.slug, "linz")
      }}
    >
      <HubFaq
        eyebrow="Häufige Fragen"
        title={`${page.category}: kurz beantwortet.`}
        items={page.faq}
      />
    </DetailPageLayout>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPageLayout from "../../DetailPageLayout";
import { HubFaq } from "../../HubBlocks";
import { buildMetadata } from "../../pageMetadata";
import { garagePages, getGaragePage } from "../garagePages";

type GaragePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return garagePages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: GaragePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getGaragePage(slug);

  if (!page) {
    return {
      title: "Seite nicht gefunden"
    };
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.description,
    path: `/garagentore/${page.slug}`
  });
}

export default async function GarageDetailPage({ params }: GaragePageProps) {
  const { slug } = await params;
  const page = getGaragePage(slug);

  if (!page) {
    notFound();
  }

  const related = garagePages.filter((item) => item.slug !== page.slug).slice(0, 3);

  return (
    <DetailPageLayout
      hub={{ label: "Garagentore", href: "/garagentore" }}
      category={page.category}
      h1={page.h1}
      intro={page.intro}
      contactNote="Für schnelle Einschätzung, Terminabstimmung und blockierte Tore."
      checklist={page.checklist}
      sections={page.sections}
      relatedEyebrow="Weitere Leistungen"
      relatedTitle="Mehr rund um Garagentore."
      related={related.map((item) => ({
        category: item.category,
        title: item.title,
        href: `/garagentore/${item.slug}`
      }))}
      jsonLd={{
        name: page.title,
        description: page.description,
        path: `/garagentore/${page.slug}`
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

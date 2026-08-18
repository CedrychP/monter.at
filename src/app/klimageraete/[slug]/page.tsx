import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPageLayout from "../../DetailPageLayout";
import { HubFaq } from "../../HubBlocks";
import { buildMetadata } from "../../pageMetadata";
import { getKlimaPage, klimaPages } from "../klimaPages";

type KlimaPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return klimaPages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: KlimaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getKlimaPage(slug);

  if (!page) {
    return {
      title: "Seite nicht gefunden"
    };
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.description,
    path: `/klimageraete/${page.slug}`
  });
}

export default async function KlimaDetailPage({ params }: KlimaPageProps) {
  const { slug } = await params;
  const page = getKlimaPage(slug);

  if (!page) {
    notFound();
  }

  const related = klimaPages.filter((item) => item.slug !== page.slug).slice(0, 3);

  return (
    <DetailPageLayout
      hub={{ label: "Klimageräte", href: "/klimageraete" }}
      category={page.category}
      h1={page.h1}
      intro={page.intro}
      contactNote="Für schnelle Einschätzung, Terminabstimmung und dringende Ausfälle."
      checklist={page.checklist}
      sections={page.sections}
      relatedEyebrow="Weitere Leistungen"
      relatedTitle="Mehr rund um Klimageräte."
      related={related.map((item) => ({
        category: item.category,
        title: item.title,
        href: `/klimageraete/${item.slug}`
      }))}
      jsonLd={{
        name: page.title,
        description: page.description,
        path: `/klimageraete/${page.slug}`
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

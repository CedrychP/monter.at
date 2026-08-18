import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPageLayout from "../../DetailPageLayout";
import { HubFaq } from "../../HubBlocks";
import { buildMetadata } from "../../pageMetadata";
import { appliancePages, getAppliancePage } from "../appliancePages";

type AppliancePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return appliancePages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: AppliancePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getAppliancePage(slug);

  if (!page) {
    return {
      title: "Seite nicht gefunden"
    };
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.description,
    path: `/haushaltsgeraete/${page.slug}`
  });
}

export default async function ApplianceDetailPage({ params }: AppliancePageProps) {
  const { slug } = await params;
  const page = getAppliancePage(slug);

  if (!page) {
    notFound();
  }

  const related = appliancePages.filter((item) => item.slug !== page.slug).slice(0, 3);

  return (
    <DetailPageLayout
      hub={{ label: "Haushaltsgeräte", href: "/haushaltsgeraete" }}
      category={page.category}
      h1={page.h1}
      intro={page.intro}
      contactNote="Für schnelle Einschätzung, Terminabstimmung und Notdienst-Kontakt."
      checklist={page.checklist}
      sections={page.sections}
      relatedEyebrow="Verwandte Leistungen"
      relatedTitle="Weitere Reparaturen im Service."
      related={related.map((item) => ({
        category: item.category,
        title: item.title,
        href: `/haushaltsgeraete/${item.slug}`
      }))}
      jsonLd={{
        name: page.title,
        description: page.description,
        path: `/haushaltsgeraete/${page.slug}`
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

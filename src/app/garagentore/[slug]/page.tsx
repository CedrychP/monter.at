import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "../../pageMetadata";
import { GarageFrame } from "../GarageFrame";
import { allGaragePages, getGaragePage } from "../garagePages";

type GaragePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return allGaragePages.map((page) => ({
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

  return <GarageFrame page={page} />;
}

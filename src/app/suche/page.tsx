import type { Metadata } from "next";
import { Suspense } from "react";
import { listGrowthArticles } from "../blog/growth";
import SearchPage from "./SearchPage";
import { buildMetadata } from "../pageMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Suche | MONTER Reparatur & Service",
  description:
    "Leistungen, Marken und Ratgeber durchsuchen — MONTER Reparatur & Service in Wien.",
  path: "/suche",
  robots: {
    index: false,
    follow: true
  }
});

export default async function SuchePage() {
  const growth = await listGrowthArticles();

  return (
    <Suspense>
      <SearchPage
        extraEntries={growth.map((article) => ({
          title: article.title,
          description: article.meta_description || article.excerpt,
          href: `/blog/${article.slug}`,
          category: "Blog",
          keywords: `${article.title} ${article.excerpt} ratgeber`
        }))}
      />
    </Suspense>
  );
}

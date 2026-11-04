import { BlogClient, type BlogArticle, type BlogArticleSummary } from "babylovegrowth-next-js-blog";
import { blogPosts } from "./posts";

const client = new BlogClient({ revalidate: 86400 });

const localSlugs = new Set(blogPosts.map((post) => post.slug));

/** Eigene Beiträge gewinnen bei gleichem Slug. Ohne Schlüssel bleibt die Liste leer. */
export async function listGrowthArticles(): Promise<BlogArticleSummary[]> {
  if (!process.env.BABYLOVEGROWTH_BLOG_API_KEY) {
    return [];
  }

  try {
    const articles = await client.getAllArticles();
    return articles.filter((article) => article.published && !localSlugs.has(article.slug));
  } catch (error) {
    console.error("BabyLoveGrowth-Artikel nicht geladen", error);
    return [];
  }
}

export async function getGrowthArticle(slug: string): Promise<BlogArticle | null> {
  if (!process.env.BABYLOVEGROWTH_BLOG_API_KEY || localSlugs.has(slug)) {
    return null;
  }

  try {
    const article = await client.getArticleBySlug(slug);
    if (!article?.published) {
      return null;
    }
    return article;
  } catch (error) {
    console.error("BabyLoveGrowth-Artikel nicht geladen", error);
    return null;
  }
}

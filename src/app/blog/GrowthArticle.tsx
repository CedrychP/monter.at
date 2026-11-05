import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../siteConfig";
import { getGrowthArticle } from "./growth";
import "./blog-content.css";

const formatDate = (isoDate: string) => isoDate.slice(0, 10).split("-").reverse().join(".");

const imagePath = (value: string) => {
  const decoded = value.replaceAll("&amp;", "&").trim();

  try {
    return decodeURIComponent(new URL(decoded).pathname);
  } catch {
    return decoded.split("?")[0];
  }
};

// Der Artikelkopf zeigt das Hero bereits. BabyLoveGrowth setzt dasselbe Bild noch einmal an den Anfang des HTML.
const withoutDuplicateHero = (html: string, heroUrl: string) => {
  if (!html || !heroUrl) return html;

  const heroPath = imagePath(heroUrl);
  const match = html.match(/<p>\s*<img\b([^>]*?)>\s*<\/p>/i);

  if (!match || match.index === undefined) return html;

  const src = match[1].match(/\bsrc=["']([^"']+)["']/i)?.[1] ?? "";

  if (imagePath(src) !== heroPath) return html;

  return `${html.slice(0, match.index)}${html.slice(match.index + match[0].length)}`;
};

export default async function GrowthArticle({ slug }: { slug: string }) {
  const article = await getGrowthArticle(slug);

  if (!article) {
    notFound();
  }

  const published = article.published_at || article.created_at;

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      {article.jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article.jsonLd) }}
        />
      ) : null}
      {article.faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article.faqJsonLd) }}
        />
      ) : null}

      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto grid max-w-[88rem] items-end gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
              <Link href="/blog" className="border-b border-transparent hover:border-current hover:text-[color:var(--ink)]">
                Blog & News
              </Link>
              <span aria-hidden="true"> · </span>
              <span className="text-[color:var(--accent)]">Ratgeber</span>
            </p>
            <h1 className="font-display mt-6 text-balance text-4xl font-light leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            {article.excerpt ? (
              <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                {article.excerpt}
              </p>
            ) : null}
            {published ? (
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
                Veröffentlicht · {formatDate(published)}
              </p>
            ) : null}
          </div>
          {article.hero_image_url ? (
            <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--bg-muted)]">
              <Image
                src={article.hero_image_url}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          ) : null}
        </div>
      </section>

      <article className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="cap-line tracking-eyebrow">Direkt</p>
            <h2 className="font-display mt-7 text-2xl font-normal tracking-tight">Lieber anrufen.</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Gerät, Fehlerbild und Standort reichen für eine Einschätzung. Die Anfrage ist noch kein Auftrag.
            </p>
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary mt-8 w-full">
              <span data-phone-number>{siteConfig.phoneDisplay}</span>
            </a>
          </aside>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: withoutDuplicateHero(article.content_html, article.hero_image_url) }}
          />
        </div>
      </article>
    </main>
  );
}

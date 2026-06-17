import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const phoneDisplay = "01 4171346";
const phoneHref = "+4314171346";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blogartikel nicht gefunden"
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "MONTER Reparatur & Service"
    }
  };

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-4xl px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">
            {post.category}
          </p>
          <h1 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-8 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
            {post.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[color:var(--border)] pt-6 text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
            <span>Lesedauer · {post.readingTime}</span>
            <span>Aktualisiert · {post.date.split("-").reverse().join(".")}</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <aside className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="cap-line tracking-eyebrow">Checkliste</p>
            <h2 className="font-display mt-7 text-2xl font-normal tracking-tight">
              Vor dem Anruf
            </h2>
            <div className="mt-8 border-t border-[color:var(--border)]">
              {post.checklist.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-[color:var(--border)] py-4"
                >
                  <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                  <p className="text-sm font-light text-[color:var(--ink)]">{item}</p>
                </div>
              ))}
            </div>
            <a href={`tel:${phoneHref}`} className="btn-primary mt-10 w-full">
              {phoneDisplay}
            </a>
          </aside>

          <div className="space-y-12">
            {post.sections.map((section, index) => (
              <section
                key={section.title}
                className="border-b border-[color:var(--border)] pb-12 last:border-0"
              >
                <span className="numeral text-[color:var(--accent)]">0{index + 1}</span>
                <h2 className="font-display mt-6 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                  {section.body}
                </p>
              </section>
            ))}

            <section className="bg-[color:var(--ink)] p-10 text-white lg:p-14">
              <p className="cap-line-light tracking-eyebrow text-white/70">Unsicher?</p>
              <h2 className="font-display mt-7 text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                Rufen Sie kurz an, bevor unnötige Kosten entstehen.
              </h2>
              <p className="mt-6 max-w-2xl text-[1rem] font-light leading-relaxed text-white/75">
                Mit Gerätetyp, Marke, Fehlerbild und Standort lässt sich der nächste sinnvolle
                Schritt meist schnell einschätzen.
              </p>
              <a href={`tel:${phoneHref}`} className="btn-on-dark mt-8">
                {phoneDisplay}
              </a>
            </section>
          </div>
        </div>
      </article>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-20 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow">Weitere Artikel</p>
          <h2 className="font-display mt-8 text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Vielleicht auch interessant.
          </h2>

          <div className="mt-12 grid gap-px bg-[color:var(--border)] md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group flex h-full flex-col justify-between bg-white p-8 transition hover:bg-[color:var(--bg-muted)] lg:p-10"
              >
                <div>
                  <p className="tracking-eyebrow text-[color:var(--accent)]">
                    {relatedPost.category}
                  </p>
                  <h3 className="font-display mt-5 text-xl font-normal leading-tight tracking-tight">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {relatedPost.description}
                  </p>
                </div>
                <span className="link-arrow mt-8">
                  Lesen
                  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

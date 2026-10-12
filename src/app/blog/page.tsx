import type { Metadata } from "next";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";
import BlogDirectory from "./BlogDirectory";
import { blogPosts } from "./posts";

export const metadata: Metadata = buildMetadata({
  title: "Haushaltsgeräte Reparatur Blog Wien | MONTER",
  description:
    "Blog zur Reparatur in Wien: Tipps zu Waschmaschine, Geschirrspüler, Kühlschrank, Trockner, Garagentor und Klimaanlage. Jetzt Ratgeber lesen.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto grid max-w-[88rem] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Blog & News</p>
            <h1 className="font-display mt-6 text-balance text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Erst das Fehlerbild.
              <span className="mt-2 block italic text-[color:var(--accent)]">Dann der Beitrag.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Zehn Ratgeber zu Waschmaschine, Geschirrspüler, Trockner, Kühlschrank, Backofen,
              Garagentor und Klimagerät. Zum Orientieren in Wien, bevor der Termin steht.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#beitraege" className="btn-primary">
                <span>Zum Verzeichnis</span>
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-ghost">
                <span>
                  Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </div>

          <div className="border border-[color:var(--border)] bg-[color:var(--bg-muted)] p-6 sm:p-8" aria-hidden="true">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">Inhalt</p>
              <p className="font-display text-sm font-light text-[color:var(--muted)]">
                {String(blogPosts.length).padStart(2, "0")}
              </p>
            </div>
            <ol className="mt-6 border-t border-[color:var(--border)]">
              {blogPosts.map((post, index) => (
                <li
                  key={post.slug}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-[color:var(--border)] py-2.5"
                >
                  <span
                    className={`font-display text-sm tracking-[0.16em] ${
                      index === 0 ? "text-[color:var(--accent)]" : "text-[color:var(--muted)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-light tracking-tight">{post.category}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <BlogDirectory posts={blogPosts} />
    </main>
  );
}

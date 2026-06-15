import Link from "next/link";
import { blogPosts } from "./posts";

export const metadata = {
  title: "Haushaltsgeräte Reparatur Blog Wien | MONTER",
  description:
    "Blog zur Haushaltsgeräte Reparatur in Wien: Tipps zu Waschmaschine, Geschirrspüler, Kühlschrank und Trockner. Jetzt Ratgeber lesen.",
  alternates: {
    canonical: "/blog"
  }
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <div className="max-w-4xl reveal">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Blog & Ratgeber</p>
            <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]">
              Ratgeber für <span className="font-display-italic">Haushaltsgeräte-Reparatur.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Praktische Orientierung zu Fehlerbildern, Reparaturentscheidungen und sinnvoller
              Vorbereitung vor dem Anruf.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="reveal group grid gap-0 border border-[color:var(--border)] transition hover:border-[color:var(--ink)] lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="bg-white p-8 lg:p-14">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">
                Empfohlen · {featuredPost.category}
              </p>
              <h2 className="font-display mt-8 text-balance text-3xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                {featuredPost.title}
              </h2>
              <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                {featuredPost.description}
              </p>
              <span className="link-arrow mt-10">
                Artikel lesen
                <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                </svg>
              </span>
            </div>
            <div className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] p-8 lg:border-l lg:border-t-0 lg:p-14">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Lesedauer</p>
              <p className="font-display mt-6 text-6xl font-light tracking-tight text-[color:var(--ink)] sm:text-7xl">
                {featuredPost.readingTime}
              </p>
              <p className="mt-6 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Aktualisiert am {featuredPost.date.split("-").reverse().join(".")}
              </p>
            </div>
          </Link>

          <div className="stagger mt-12 grid gap-px bg-[color:var(--border)] md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col justify-between bg-white p-8 transition hover:bg-[color:var(--bg-muted)] lg:p-10"
              >
                <div>
                  <p className="tracking-eyebrow text-[color:var(--accent)]">{post.category}</p>
                  <h2 className="font-display mt-6 text-2xl font-normal leading-tight tracking-tight sm:text-[1.75rem]">
                    {post.title}
                  </h2>
                  <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                    {post.description}
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-[color:var(--border)] pt-5 text-[0.72rem] font-medium uppercase tracking-[0.16em]">
                  <span className="text-[color:var(--muted)]">{post.readingTime}</span>
                  <span className="text-[color:var(--ink)] transition group-hover:text-[color:var(--accent)]">
                    Lesen →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

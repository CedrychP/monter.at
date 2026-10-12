"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { siteConfig } from "../siteConfig";
import type { BlogPost } from "./posts";

const pageSize = 10;

const formatDate = (isoDate: string) => isoDate.split("-").reverse().join(".");

const countLabel = (count: number) => (count === 1 ? "1 Beitrag" : `${count} Beiträge`);

export default function BlogDirectory({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(
    () => [...new Set(posts.map((post) => post.category))],
    [posts]
  );
  const [active, setActive] = useState<string>("Alle");
  const [page, setPage] = useState(1);
  const visible = active === "Alle" ? posts : posts.filter((post) => post.category === active);
  const pageCount = Math.max(1, Math.ceil(visible.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const pagePosts = visible.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const selectCategory = (category: string) => {
    setActive(category);
    setPage(1);
  };

  const selectPage = (nextPage: number) => {
    setPage(nextPage);
    document.getElementById("beitraege")?.scrollIntoView();
  };

  return (
    <div id="beitraege" className="scroll-mt-28">
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg-muted)]" aria-labelledby="blog-filter">
        <div className="mx-auto max-w-[88rem] px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p id="blog-filter" className="shrink-0 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Filtern
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Kategorie">
              {["Alle", ...categories].map((category) => {
                const selected = active === category;
                const count = category === "Alle" ? posts.length : posts.filter((post) => post.category === category).length;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => selectCategory(category)}
                    className={`inline-flex items-center gap-2 border px-3 py-2 text-sm font-light tracking-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ink)] ${
                      selected
                        ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white"
                        : "border-[color:var(--border)] bg-white text-[color:var(--ink)] hover:border-[color:var(--ink)]"
                    }`}
                  >
                    {category}
                    <span className={selected ? "text-[color:var(--accent-on-dark)]" : "text-[color:var(--muted)]"}>
                      {String(count).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Das Verzeichnis.
            </h2>
            <p className="text-sm font-light text-[color:var(--muted)]" aria-live="polite">
              {countLabel(visible.length)}
              {active === "Alle" ? "" : ` · ${active}`}
            </p>
          </div>
          <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
            Jeder Beitrag bleibt bei einem Fehlerbild: was Sie selbst prüfen können, und wann der
            Anruf die klarere Entscheidung ist.
          </p>

          {visible.length > 0 ? (
            <ol className="mt-12 border-t border-[color:var(--border)]">
              {pagePosts.map((post, index) => (
                <li key={post.slug} className="border-b border-[color:var(--border)]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid grid-cols-[5.75rem_1fr] items-center gap-4 py-6 sm:grid-cols-[11rem_1fr_auto] sm:py-8 lg:grid-cols-[14rem_1fr_auto] lg:gap-8"
                  >
                    <span className="relative block aspect-[4/3] overflow-hidden bg-[color:var(--bg-muted)]">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 14rem, (min-width: 640px) 11rem, 6rem"
                        className="object-cover object-center"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="font-display text-sm tracking-[0.16em] text-[color:var(--accent)]">
                          {String((currentPage - 1) * pageSize + index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
                          {post.category}
                        </span>
                      </span>
                      <h3 className="font-display mt-2 text-xl font-light leading-tight tracking-tight text-[color:var(--ink)] group-hover:text-[color:var(--accent)] sm:text-3xl">
                        {post.title}
                      </h3>
                      <p className="mt-3 hidden max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)] sm:block">
                        {post.description}
                      </p>
                    </span>
                    <span className="hidden text-sm font-light text-[color:var(--muted)] sm:block sm:text-right">
                      <span className="block">{post.readingTime}</span>
                      <time className="mt-1 block" dateTime={post.dateModified}>
                        {formatDate(post.dateModified)}
                      </time>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-12 border-t border-[color:var(--border)] py-10 text-sm font-light text-[color:var(--muted)]">
              Zu dieser Kategorie gibt es noch keinen Beitrag.
            </p>
          )}

          {pageCount > 1 ? (
            <nav className="mt-8 flex flex-wrap items-center gap-2" aria-label="Seiten">
              {Array.from({ length: pageCount }, (_, index) => {
                const number = index + 1;
                const selected = number === currentPage;
                return (
                  <button
                    key={number}
                    type="button"
                    aria-current={selected ? "page" : undefined}
                    onClick={() => selectPage(number)}
                    className={`inline-flex min-w-11 items-center justify-center border px-3 py-2 text-sm font-light tracking-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ink)] ${
                      selected
                        ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white"
                        : "border-[color:var(--border)] bg-white text-[color:var(--ink)] hover:border-[color:var(--ink)]"
                    }`}
                  >
                    {String(number).padStart(2, "0")}
                  </button>
                );
              })}
            </nav>
          ) : null}

          <div className="mt-16">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">Termin</p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                  Reparaturtermin buchen.
                </h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  Gerät und Fehlerbild angeben. Wir melden uns zur Abstimmung. Noch kein Auftrag.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/reparatur-buchen" className="btn-primary">
                  <span>Reparaturtermin buchen</span>
                </Link>
                <a href={`tel:${siteConfig.phoneHref}`} className="btn-ghost">
                  <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

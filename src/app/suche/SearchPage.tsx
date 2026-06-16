"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  buildSearchIndex,
  filterSearchResults,
  popularSearches
} from "../searchIndex";
import { siteConfig } from "../siteConfig";

const emergencyPhoneDisplay = siteConfig.phoneDisplay;
const emergencyPhoneHref = siteConfig.phoneHref;

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchIndex = useMemo(() => buildSearchIndex(), []);
  const searchResults = useMemo(
    () => filterSearchResults(searchIndex, searchQuery),
    [searchIndex, searchQuery]
  );

  useEffect(() => {
    const initialQuery = searchParams.get("q");
    if (initialQuery) {
      setSearchQuery(initialQuery);
    }
    searchInputRef.current?.focus();
  }, [searchParams]);

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchResults.length > 0) {
      window.location.href = searchResults[0].href;
    }
  };

  return (
    <main className="min-h-screen bg-[color:var(--ink)] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[88rem] px-5 py-12 sm:px-8 lg:py-16">
          <form onSubmit={onSearchSubmit}>
            <label className="block">
              <span className="cap-line tracking-eyebrow text-[color:var(--accent)]">Suche</span>
              <div className="mt-6 flex items-center gap-4 border-b-2 border-white/80 pb-3">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="shrink-0 text-white/55"
                >
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4" fill="none" />
                  <path d="m13.5 13.5 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Was möchten Sie reparieren?"
                  className="font-display flex-1 bg-transparent text-2xl font-normal tracking-tight text-white outline-none placeholder:text-white/40 sm:text-4xl"
                />
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition hover:text-[color:var(--accent)]"
                  >
                    Zurücksetzen
                  </button>
                ) : null}
              </div>
            </label>
          </form>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_22rem]">
            <div>
              {searchQuery.trim() ? (
                searchResults.length > 0 ? (
                  <div>
                    <p className="tracking-eyebrow text-white/55">{searchResults.length} Treffer</p>
                    <div className="mt-6 grid gap-0">
                      {searchResults.map((result) => (
                        <Link
                          key={`${result.href}-${result.title}`}
                          href={result.href}
                          className="block border-b border-white/10 py-5 transition hover:bg-white/5"
                        >
                          <div className="min-w-0">
                            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                              {result.category}
                            </p>
                            <h2 className="font-display mt-2 truncate text-xl font-medium tracking-tight text-white sm:text-2xl">
                              {result.title}
                            </h2>
                            <p className="mt-2 line-clamp-1 text-sm font-normal text-white/60">
                              {result.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="border border-white/10 bg-white/5 p-8">
                    <p className="font-display text-2xl font-medium tracking-tight text-white">
                      Keine Treffer für &bdquo;{searchQuery}&ldquo;.
                    </p>
                    <p className="mt-3 text-sm font-normal leading-relaxed text-white/60">
                      Rufen Sie uns kurz an — wir prüfen, ob die Reparatur möglich ist.
                    </p>
                    <a href={`tel:${emergencyPhoneHref}`} className="btn-primary mt-6">
                      {emergencyPhoneDisplay}
                    </a>
                  </div>
                )
              ) : (
                <div>
                  <p className="tracking-eyebrow text-white/55">Häufig gesucht</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {popularSearches.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setSearchQuery(term)}
                        className="border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold tracking-tight text-white transition hover:border-white hover:bg-white hover:text-[color:var(--ink)]"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="rounded-xl border border-white/10 bg-white/5 p-8">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Direkt klären</p>
              <h2 className="font-display mt-7 text-2xl font-medium leading-tight tracking-tight text-white">
                Schneller per Anruf.
              </h2>
              <p className="mt-4 text-sm font-normal leading-relaxed text-white/65">
                Bei dringenden Ausfällen oder unklarem Fehlerbild ist das Telefon der schnellste Weg.
              </p>
              <a
                href={`tel:${emergencyPhoneHref}`}
                className="font-display mt-6 block text-3xl font-medium tracking-tight text-white transition hover:text-[color:var(--accent)]"
              >
                {emergencyPhoneDisplay}
              </a>
              <Link href="/kontakt" className="link-arrow link-arrow--on-dark mt-6">
                Anfrageformular
                <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                </svg>
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

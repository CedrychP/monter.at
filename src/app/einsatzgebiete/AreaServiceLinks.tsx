import Link from "next/link";
import { appliancePages } from "../haushaltsgeraete/appliancePages";
import { applianceHref } from "../serviceHrefs";

type AreaServiceLinksProps = {
  area: "kern" | "linz";
};

/** Geräte- und Leistungsseiten, die zu diesem Einsatzgebiet gehören. */
export function AreaServiceLinks({ area }: AreaServiceLinksProps) {
  const pages = appliancePages;

  return (
    <section
      className="border-t border-[color:var(--border)] bg-white py-16 sm:py-20"
      aria-label={area === "linz" ? "Haushaltsgeräte in Linz" : "Leistungen"}
    >
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <p className="cap-line tracking-eyebrow">Leistungen</p>
        <h2 className="font-display mt-6 max-w-3xl text-balance text-3xl font-light tracking-tight sm:text-4xl">
          {area === "linz" ? "Haushaltsgeräte in Linz." : "Geräte, Tore und Klima."}
        </h2>
        <ul className="mt-10 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <li key={page.slug} className="bg-white">
              <Link href={applianceHref(page.slug)} className="group flex h-full flex-col p-6">
                <span className="font-display text-2xl font-light tracking-tight text-[color:var(--ink)] group-hover:text-[color:var(--accent)]">
                  {page.category}
                </span>
                <span className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {page.short}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {area === "kern" ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/garagentore" className="btn-ghost">
              Garagentore
            </Link>
            <Link href="/klimageraete" className="btn-ghost">
              Klimageräte
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

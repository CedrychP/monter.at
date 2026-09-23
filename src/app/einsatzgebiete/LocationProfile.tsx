import Link from "next/link";
import type { LocationPage } from "./locationPages";

type LocationProfileProps = {
  location: LocationPage;
  /** Rücksprung zur übergeordneten Seite — Region oder Stadt. */
  parent: { label: string; href: string };
};

export default function LocationProfile({ location, parent }: LocationProfileProps) {
  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-20 sm:py-24">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Vor Ort</p>
            <h2 className="font-display mt-6 text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Was {location.name} technisch ausmacht.
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              {location.character}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {location.postalCodes.map((code) => (
                <span
                  key={code}
                  className="border border-[color:var(--border)] bg-white px-3 py-1.5 text-[0.72rem] font-medium tabular-nums tracking-[0.16em] text-[color:var(--muted)]"
                >
                  {code}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="cap-line tracking-eyebrow">Typische Einsätze</p>
            <ul className="mt-7">
              {location.focus.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-[color:var(--border)] py-4 text-sm font-light leading-relaxed"
                >
                  <span aria-hidden="true" className="text-[color:var(--accent)]">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href={parent.href}
                className="inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]"
              >
                {parent.label}
                <span className="ml-1">→</span>
              </Link>
              <Link
                href="/preise"
                className="inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]"
              >
                Preise und Anfahrt
                <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

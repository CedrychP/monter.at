import type { Metadata } from "next";
import { buildMetadata } from "../../pageMetadata";
import { KlimaPhoto, KlimaServiceFrame } from "../KlimaServiceFrame";
import { requireKlimaPage } from "../klimaPages";

const page = requireKlimaPage("reinigung-entlueftung");

function Layers() {
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Filter, Lamellen und Lüfterrad hintereinander">
      <text x="36" y="36" fill="currentColor" fontSize="12" letterSpacing="2.4">
        FILTER
      </text>
      <rect x="24" y="48" width="520" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="56" y="122" fill="currentColor" fontSize="12" letterSpacing="2.4">
        LAMELLEN
      </text>
      <rect x="44" y="134" width="520" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="76" y="208" fill="currentColor" fontSize="12" letterSpacing="2.4">
        LÜFTER
      </text>
      <rect x="64" y="220" width="520" height="36" fill="none" stroke="var(--accent-on-dark)" strokeWidth="2.5" />
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: "/klimageraete/reinigung-entlueftung"
});

export default function ReinigungPage() {
  return (
    <KlimaServiceFrame
      page={page}
      kicker="Hinter dem Filter."
      graphic={<Layers />}
      pattern="dots"
      ctaTitle="Geruch, Standort, Zugang."
      ctaText="Damit reinigen wir Innen- und Außengerät in einem Termin. Die Anfrage ist noch kein Auftrag."
    >
      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <KlimaPhoto src="/assets/klimageraete-filter-lamellen.webp" alt="Geöffnetes Innengerät mit staubigem Filter und Lamellen dahinter." />
          <div>
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{page.sections[0].title}</h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[0].body}</p>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          {page.sections.slice(1, 3).map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{section.title}</h2>
              <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            {page.sections[3].title}
          </h2>
          <p className="mt-5 max-w-3xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[3].body}</p>
        </div>
      </section>
    </KlimaServiceFrame>
  );
}

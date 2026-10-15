import type { Metadata } from "next";
import { buildMetadata } from "../../pageMetadata";
import { KlimaPhoto, KlimaServiceFrame } from "../KlimaServiceFrame";
import { getKlimaPage } from "../klimaPages";

const page = getKlimaPage("geruch-laut");

if (!page) {
  throw new Error("Seite Geruch und Laut fehlt in den Klimainhalten.");
}

function TwoPlaces() {
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Geruch am Innengerät, Schall am Außengerät">
      <text x="16" y="28" fill="currentColor" fontSize="12" letterSpacing="2.4">
        GERUCH
      </text>
      <rect x="16" y="44" width="250" height="160" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M70 150 c20-28 40-28 60 0 c20 28 40 28 60 0" fill="none" stroke="var(--accent-on-dark)" strokeWidth="2.5" />
      <text x="360" y="28" fill="currentColor" fontSize="12" letterSpacing="2.4">
        SCHALL
      </text>
      <rect x="360" y="44" width="250" height="190" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="485" cy="140" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M485 110 v60 M455 140 h60" fill="none" stroke="currentColor" strokeWidth="1.15" />
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: "/klimageraete/geruch-laut"
});

export default function GeruchLautPage() {
  return (
    <KlimaServiceFrame
      page={page}
      kicker="Zwei Orte, zwei Ursachen."
      graphic={<TwoPlaces />}
      pattern="plain"
      ctaTitle="Geruch oder Schall, innen oder außen."
      ctaText="Riecht es verbrannt, lassen Sie die Anlage aus. Das ist kein Reinigungsfall. Die Anfrage ist noch kein Auftrag."
    >
      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            {page.sections[0].title}
          </h2>
          <p className="mt-5 max-w-3xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[0].body}</p>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <KlimaPhoto src="/assets/klimageraete-aussengeraet-fassade.webp" alt="Weißes Außengerät auf Konsolen an einer hellen Putzfassade." />
          <div>
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{page.sections[1].title}</h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[1].body}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          {page.sections.slice(2).map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{section.title}</h2>
              <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </KlimaServiceFrame>
  );
}

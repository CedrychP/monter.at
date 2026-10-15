import type { Metadata } from "next";
import { buildMetadata } from "../../pageMetadata";
import { KlimaPhoto, KlimaServiceFrame } from "../KlimaServiceFrame";
import { getKlimaPage } from "../klimaPages";

const page = getKlimaPage("montage-installation");

if (!page) {
  throw new Error("Montageseite fehlt in den Klimainhalten.");
}

function WallSection() {
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Innengerät, Wanddurchführung und Außengerät">
      <text x="8" y="24" fill="currentColor" fontSize="12" letterSpacing="2.4">
        INNEN
      </text>
      <rect x="8" y="40" width="180" height="120" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="24" y="62" width="148" height="8" fill="currentColor" />
      <rect x="250" y="24" width="70" height="232" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="258" y="150" fill="currentColor" fontSize="12" letterSpacing="1.6">
        WAND
      </text>
      <path d="M188 100 H250" fill="none" stroke="var(--accent-on-dark)" strokeWidth="3" />
      <path d="M320 100 H430" fill="none" stroke="var(--accent-on-dark)" strokeWidth="3" />
      <text x="450" y="24" fill="currentColor" fontSize="12" letterSpacing="2.4">
        AUSSEN
      </text>
      <rect x="450" y="40" width="170" height="160" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="535" cy="120" r="36" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M535 96 v48 M511 120 h48" fill="none" stroke="currentColor" strokeWidth="1.15" />
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: "/klimageraete/montage-installation"
});

export default function MontagePage() {
  return (
    <KlimaServiceFrame
      page={page}
      kicker="Vor dem Bohren klären."
      graphic={<WallSection />}
      pattern="plain"
      ctaTitle="Raum, Fassade, Strom."
      ctaText="Damit sagen wir vorab, welcher Standort trägt. Die Anfrage ist noch kein Auftrag."
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

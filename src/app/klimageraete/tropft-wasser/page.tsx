import type { Metadata } from "next";
import { buildMetadata } from "../../pageMetadata";
import { KlimaServiceFrame } from "../KlimaServiceFrame";
import { getKlimaPage } from "../klimaPages";

const page = getKlimaPage("tropft-wasser");

if (!page) {
  throw new Error("Seite Tropft Wasser fehlt in den Klimainhalten.");
}

function Drip() {
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Innengerät, aus dem Kondenswasser tropft">
      <text x="180" y="28" fill="currentColor" fontSize="12" letterSpacing="2.4">
        INNEN
      </text>
      <rect x="170" y="44" width="300" height="110" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="194" y="66" width="252" height="10" fill="currentColor" />
      <rect x="194" y="88" width="160" height="6" fill="currentColor" opacity="0.35" />
      <path d="M320 154 v28" fill="none" stroke="var(--accent-on-dark)" strokeWidth="2.5" />
      <circle cx="320" cy="206" r="10" fill="var(--accent-on-dark)">
        <animate attributeName="cy" values="190;220;190" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <text x="348" y="214" fill="currentColor" fontSize="12" letterSpacing="2.4">
        ABLAUF
      </text>
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: "/klimageraete/tropft-wasser"
});

export default function TropftWasserPage() {
  return (
    <KlimaServiceFrame
      page={page}
      kicker="Erst ausschalten."
      graphic={<Drip />}
      pattern="plain"
      ctaTitle="Fleck, Kühlbetrieb, Pumpe."
      ctaText="Damit finden wir Ablauf oder Vereisung, bevor die Feuchtigkeit in die Wand zieht. Die Anfrage ist noch kein Auftrag."
    >
      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          {page.sections.slice(0, 2).map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{section.title}</h2>
              <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-24">
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

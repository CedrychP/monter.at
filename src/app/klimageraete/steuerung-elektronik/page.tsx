import type { Metadata } from "next";
import { buildMetadata } from "../../pageMetadata";
import { KlimaServiceFrame } from "../KlimaServiceFrame";
import { requireKlimaPage } from "../klimaPages";

const page = requireKlimaPage("steuerung-elektronik");

function RemoteAndLeds() {
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Fernbedienung und blinkende LED am Innengerät">
      <text x="8" y="24" fill="currentColor" fontSize="12" letterSpacing="2.4">
        FERNBEDIENUNG
      </text>
      <rect x="8" y="40" width="150" height="210" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="83" cy="88" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="36" y="130" width="94" height="10" fill="currentColor" opacity="0.85" />
      <rect x="36" y="152" width="94" height="10" fill="currentColor" opacity="0.35" />
      <rect x="36" y="174" width="94" height="10" fill="currentColor" opacity="0.35" />
      <text x="220" y="24" fill="currentColor" fontSize="12" letterSpacing="2.4">
        LED
      </text>
      <rect x="220" y="40" width="400" height="96" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="300" cy="88" r="10" fill="var(--accent-on-dark)">
        <animate attributeName="opacity" values="1;0.15;1" dur="1.1s" repeatCount="indefinite" />
      </circle>
      <circle cx="360" cy="88" r="10" fill="currentColor" opacity="0.2" />
      <circle cx="420" cy="88" r="10" fill="currentColor" opacity="0.2" />
      <text x="220" y="180" fill="currentColor" fontSize="12" letterSpacing="2.4">
        CODE VOR DEM RESET
      </text>
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: "/klimageraete/steuerung-elektronik"
});

export default function SteuerungPage() {
  return (
    <KlimaServiceFrame
      page={page}
      kicker="Code notieren, bevor der Strom aus ist."
      graphic={<RemoteAndLeds />}
      pattern="grid"
      ctaTitle="Code, Fernbedienung, Marke."
      ctaText="Damit grenzen wir Fühler, Empfänger und Platine ein. Die Anfrage ist noch kein Auftrag."
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

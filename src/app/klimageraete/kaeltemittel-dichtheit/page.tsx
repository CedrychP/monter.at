import type { Metadata } from "next";
import { buildMetadata } from "../../pageMetadata";
import { KlimaServiceFrame } from "../KlimaServiceFrame";
import { requireKlimaPage } from "../klimaPages";

const page = requireKlimaPage("kaeltemittel-dichtheit");

const signs = [
  { title: "Schleichend", text: "Über Wochen schwächer, obwohl Filter und Wärmetauscher sauber sind." },
  { title: "Eis", text: "Am Verdampfer oder am Leitungsanschluss." },
  { title: "Öl", text: "An den Verschraubungen. Das Schmieröl tritt mit dem Kältemittel aus." },
  { title: "Code", text: "Druck oder Überhitzung. Der Code nennt den Bereich." }
];

function LeakLoop() {
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Geschlossener Kältekreis mit einer undichten Stelle">
      <text x="16" y="36" fill="currentColor" fontSize="12" letterSpacing="2.4">
        INNEN
      </text>
      <rect x="16" y="48" width="150" height="184" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="470" y="36" fill="currentColor" fontSize="12" letterSpacing="2.4">
        AUSSEN
      </text>
      <rect x="470" y="48" width="150" height="184" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M166 100 H470" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M166 180 H300" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M360 180 H470" fill="none" stroke="var(--accent-on-dark)" strokeWidth="2.5" />
      <circle cx="330" cy="180" r="8" fill="var(--accent-on-dark)">
        <animate attributeName="opacity" values="1;0.2;1" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <text x="292" y="164" fill="currentColor" fontSize="12" letterSpacing="2.4">
        LECK
      </text>
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: "/klimageraete/kaeltemittel-dichtheit"
});

export default function KaeltemittelPage() {
  return (
    <KlimaServiceFrame
      page={page}
      kicker="Fehlt etwas, ist es undicht."
      graphic={<LeakLoop />}
      pattern="grid"
      ctaTitle="Verlauf, Befüllung, Code."
      ctaText="Damit sagen wir, ob eine Lecksuche ansteht. Die Anfrage ist noch kein Auftrag."
    >
      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            {page.sections[0].title}
          </h2>
          <p className="mt-5 max-w-3xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[0].body}</p>
          <ul className="mt-12 grid gap-px bg-[color:var(--ink)] sm:grid-cols-2 lg:grid-cols-4">
            {signs.map((item) => (
              <li key={item.title} className="bg-white px-6 py-7">
                <h3 className="font-display text-3xl font-light tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
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
          <ul className="mt-12 grid gap-px bg-[color:var(--ink)] lg:grid-cols-2">
            <li className="bg-white px-6 py-8 sm:px-8">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">Aktuell</p>
              <h3 className="font-display mt-4 text-3xl font-light tracking-tight">R32</h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Die übliche Füllung neuer Anlagen. Nicht mischbar mit R410A.
              </p>
            </li>
            <li className="bg-[color:var(--ink)] px-6 py-8 text-white sm:px-8">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-on-dark)]">Davor</p>
              <h3 className="font-display mt-4 text-3xl font-light tracking-tight">R410A</h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/70">
                Die vorige Generation. Ältere, ausgelaufene Kältemittel rechnen wir offen gegen einen Tausch.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </KlimaServiceFrame>
  );
}

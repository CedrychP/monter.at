import type { Metadata } from "next";
import { buildMetadata } from "../../pageMetadata";
import { FaultCodeSheets } from "../FaultCodeSheets";
import { KlimaServiceFrame } from "../KlimaServiceFrame";
import { requireKlimaPage } from "../klimaPages";

const page = requireKlimaPage("fehlercodes");

function CodeMarks() {
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Fehlercodes U4, CH05 und P6, jeweils nur innerhalb einer Marke">
      <text x="24" y="78" fill="currentColor" fontSize="42">
        U4
      </text>
      <text x="24" y="148" fill="currentColor" fontSize="42">
        CH05
      </text>
      <text x="24" y="218" fill="var(--accent-on-dark)" fontSize="42">
        P6
      </text>
      <text x="280" y="92" fill="currentColor" fontSize="12" letterSpacing="2.4">
        DAIKIN
      </text>
      <text x="280" y="162" fill="currentColor" fontSize="12" letterSpacing="2.4">
        LG
      </text>
      <text x="280" y="232" fill="currentColor" fontSize="12" letterSpacing="2.4">
        MITSUBISHI
      </text>
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: "/klimageraete/fehlercodes"
});

export default function FehlercodesPage() {
  return (
    <KlimaServiceFrame
      page={page}
      kicker="Nur innerhalb einer Marke."
      graphic={<CodeMarks />}
      pattern="dots"
      ctaTitle="Code, Marke, Modell."
      ctaText="Notieren Sie die Anzeige, bevor die Sicherung fällt. Die Anfrage ist noch kein Auftrag."
    >
      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            {page.sections[0].title}
          </h2>
          <p className="mt-5 max-w-3xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[0].body}</p>
        </div>
      </section>

      <FaultCodeSheets />

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          {page.sections.slice(1, 3).map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{section.title}</h2>
              <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-24">
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

import type { Metadata } from "next";
import { buildMetadata } from "../../pageMetadata";
import { KlimaServiceFrame } from "../KlimaServiceFrame";
import { requireKlimaPage } from "../klimaPages";

const page = requireKlimaPage("kompressor-reparatur");

function CheckOrder() {
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Prüfreihenfolge Elektrik, Wärmeabfuhr, dann Verdichter">
      <text x="8" y="28" fill="currentColor" fontSize="12" letterSpacing="2.4">
        01 ELEKTRIK
      </text>
      <rect x="8" y="40" width="624" height="52" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="8" y="124" fill="currentColor" fontSize="12" letterSpacing="2.4">
        02 WÄRME
      </text>
      <rect x="8" y="136" width="624" height="52" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="8" y="220" fill="currentColor" fontSize="12" letterSpacing="2.4">
        03 VERDICHTER
      </text>
      <rect x="8" y="232" width="624" height="36" fill="none" stroke="var(--accent-on-dark)" strokeWidth="2.5" />
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: "/klimageraete/kompressor-reparatur"
});

export default function KompressorPage() {
  return (
    <KlimaServiceFrame
      page={page}
      kicker="Zuerst das Umfeld."
      graphic={<CheckOrder />}
      pattern="dots"
      ctaTitle="Start, Geräusch, Code."
      ctaText="Damit messen wir, bevor vom Verdichter die Rede ist. Die Anfrage ist noch kein Auftrag."
    >
      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          {page.sections.slice(0, 2).map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{section.title}</h2>
              <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-px bg-[color:var(--ink)] lg:grid-cols-2">
          <div className="bg-[color:var(--ink)] px-6 py-8 text-white sm:px-8">
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{page.sections[2].title}</h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-white/75">{page.sections[2].body}</p>
          </div>
          <div className="bg-white px-6 py-8 sm:px-8">
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">{page.sections[3].title}</h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[3].body}</p>
          </div>
        </div>
        </div>
      </section>
    </KlimaServiceFrame>
  );
}

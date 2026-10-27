import type { Metadata } from "next";
import { buildMetadata } from "../../pageMetadata";
import { KlimaPhoto, KlimaServiceFrame } from "../KlimaServiceFrame";
import { requireKlimaPage } from "../klimaPages";

const page = requireKlimaPage("kuehlt-nicht");

const order = [
  { number: "01", title: "Innengerät", text: "Filter und Verdampfer. Dort sitzt der häufigste Verlust an Luftmenge." },
  { number: "02", title: "Außengerät", text: "Verflüssiger und Lüfter. Ein belegtes Gerät führt die Wärme nicht ab." },
  { number: "03", title: "Kältekreis", text: "Erst danach. Ein geschlossener Kreis verbraucht nichts. Fehlt Füllung, ist er undicht." }
];

function WeakAir() {
  return (
    <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Innengerät mit nachlassendem Luftstrom">
      <text x="16" y="28" fill="currentColor" fontSize="12" letterSpacing="2.4">
        INNEN
      </text>
      <rect x="16" y="44" width="220" height="150" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="36" y="68" width="180" height="10" fill="currentColor" />
      <rect x="36" y="90" width="120" height="6" fill="currentColor" opacity="0.35" />
      <path d="M260 90 H340" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M260 120 H310" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.55" />
      <path d="M260 150 H286" fill="none" stroke="var(--accent-on-dark)" strokeWidth="2.5" />
      <text x="360" y="158" fill="currentColor" fontSize="12" letterSpacing="2.4">
        LAU
      </text>
    </svg>
  );
}

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.description,
  path: "/klimageraete/kuehlt-nicht"
});

export default function KuehltNichtPage() {
  return (
    <KlimaServiceFrame
      page={page}
      kicker="Zuerst die Luftmenge."
      graphic={<WeakAir />}
      pattern="grid"
      ctaTitle="Marke, Außengerät, Eis."
      ctaText="Damit sagen wir, ob eine Reinigung reicht oder der Kreis gemessen werden muss. Die Anfrage ist noch kein Auftrag."
    >
      <section className="border-b border-[color:var(--border)] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[0.95] tracking-tight sm:text-6xl">
            {page.sections[0].title}
          </h2>
          <p className="mt-5 max-w-3xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">{page.sections[0].body}</p>
          <ol className="mt-12 grid gap-px bg-[color:var(--ink)] lg:grid-cols-3">
            {order.map((item) => (
              <li key={item.number} className="bg-white px-6 py-7">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">{item.number}</p>
                <h3 className="font-display mt-4 text-3xl font-light tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-24">
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <KlimaPhoto src="/assets/klimageraete-filter-lamellen.webp" alt="Geöffnetes Innengerät mit staubigem Filter und Lamellen dahinter." />
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

import type { Metadata } from "next";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const checks = [
  { title: "Prüfen", text: "Mechanik, Elektronik und sicherheitsrelevante Funktionen." },
  { title: "Reinigen", text: "Filter, Dichtungen und die Stellen, an denen Verschleiß beginnt." },
  { title: "Justieren", text: "Kleine Nachstellung, bevor aus Verschleiß ein Ausfall wird." },
  { title: "Dokumentieren", text: "Was in Ordnung ist, und was Aufmerksamkeit braucht." }
];

const inspected = ["Mechanik", "Elektronik", "Dichtungen", "Filter", "Schläuche", "Federn", "Rollen", "Sicherheit"];

const devices = [
  { label: "Waschmaschine", href: "/haushaltsgeraete/waschmaschine" },
  { label: "Geschirrspüler", href: "/haushaltsgeraete/geschirrspueler" },
  { label: "Trockner", href: "/haushaltsgeraete/trockner" }
];

const faqs: HubFaqItem[] = [
  {
    question: "Warum lohnt sich eine Wartung?",
    answer:
      "Regelmäßige Wartung erkennt Verschleiß, bevor er zum teuren Ausfall wird. Saubere Filter, geprüfte Mechanik und justierte Bauteile sparen Energie, verlängern die Lebensdauer und erhöhen die Sicherheit. Reparaturen werden dadurch seltener nötig."
  },
  {
    question: "Was wird bei der Wartung geprüft?",
    answer:
      "Je nach Gerät Mechanik, Elektronik, Dichtungen, Filter, Schläuche, Federn, Rollen und Sicherheitsfunktionen. Wir dokumentieren, was in Ordnung ist und was Aufmerksamkeit braucht. Bei Haushaltsgeräten sind das Reinigung, Prüfung und kleine Justierungen, beim Garagentor Federn, Seile, Laufrollen, Antrieb und die Sicherheitsfunktionen."
  },
  {
    question: "Wie oft ist eine Wartung sinnvoll?",
    answer:
      "Für viele Geräte und Tore ist eine jährliche Wartung ein guter Richtwert. Bei intensiver Nutzung — etwa in Betrieben oder bei häufig genutzten Toren — kann ein kürzeres Intervall sinnvoll sein. Wir sagen Ihnen, was zu Ihrem Gerät passt."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Wartungsservice Wien | Haushaltsgeräte & Garagentore | MONTER",
  description:
    "Wartungsservice in Wien für Haushaltsgeräte und Garagentore: Prüfung, Reinigung, Justierung und Sicherheitskontrolle. Beugt Ausfällen vor und verlängert die Lebensdauer.",
  path: "/wartungsservice"
});

export default function WartungsservicePage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="bg-[color:var(--bg-muted)]">
        <div className="mx-auto grid max-w-[88rem] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Wartungsservice in Wien</p>
            <h1 className="font-display mt-6 text-balance text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Einmal im Jahr.
              <span className="mt-1 block italic text-[color:var(--accent)]">Bevor es ausfällt.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Mit regelmäßiger Wartung bleiben Haushaltsgeräte und Garagentore zuverlässig und sicher. Wir prüfen,
              reinigen und justieren — markenoffen in Wien und Niederösterreich — und geben klare Empfehlungen, damit
              Reparaturen seltener nötig sind.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#anfrage" className="btn-primary">
                <span>Zum Termin</span>
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-ghost">
                <span>
                  Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </div>

          <ol className="bg-white">
            {checks.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-[color:var(--border)] px-7 py-6 last:border-b-0 sm:px-8"
              >
                <p className="font-display text-sm tracking-[0.16em] text-[color:var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="font-display text-2xl font-light tracking-tight">{item.title}</p>
                  <p className="mt-1 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Zwei Bereiche, ein Termin.
          </h2>
          <div className="mt-12 grid gap-px bg-[color:var(--border)] lg:grid-cols-2">
            <div className="bg-white p-8 sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Haushaltsgeräte
              </p>
              <p className="font-display mt-4 text-4xl font-light tracking-tight">Länger zuverlässig.</p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Reinigung, Prüfung und kleine Justierungen — damit Waschmaschine, Geschirrspüler, Trockner und weitere
                Geräte länger zuverlässig laufen.
              </p>
              <p className="mt-8 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                {devices.map((device, index) => (
                  <span key={device.href}>
                    <Link href={device.href} className="border-b border-current">
                      <span className="text-[color:var(--ink)]">{device.label}</span>
                    </Link>{index < devices.length - 1 ? ", " : ""}
                  </span>
                ))}
                {" und weitere Geräte aus dem "}
                <Link href="/haushaltsgeraete" className="border-b border-current">
                  <span className="text-[color:var(--ink)]">Haushaltsgeräte-Service</span>
                </Link>.
              </p>
            </div>
            <div className="bg-[color:var(--ink)] p-8 text-white sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
                Garagentor
              </p>
              <p className="font-display mt-4 text-4xl font-light tracking-tight">Sicher und leise.</p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/70">
                Prüfung von Federn, Seilen, Laufrollen, Antrieb und Sicherheitsfunktionen. Besonders wichtig bei stark
                genutzten Toren.
              </p>
              <Link href="/garagentore/wartung-sicherheitspruefung" className="btn-on-dark mt-8">
                <span>Wartung am Tor</span>
              </Link>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {"Klimageräte haben eine eigene "}
            <Link href="/klimageraete/wartung-service" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Wartung</span>
            </Link>{", mit Filter, Wärmetauscher und Funktionsprüfung."}
          </p>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Was wir ansehen</p>
          <h2 className="font-display mt-6 max-w-xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Je nach Gerät, nicht nach Schema.
          </h2>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-y border-[color:var(--border)] py-8">
            {inspected.map((item) => (
              <li key={item} className="font-display text-3xl font-light tracking-tight sm:text-4xl">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Danach steht fest, was in Ordnung ist und was Aufmerksamkeit braucht. Dazu eine Empfehlung zu Reinigung,
            Nutzung und einem sinnvollen Intervall.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-px bg-[color:var(--border)] lg:grid-cols-2">
          <div className="bg-white p-8 sm:p-12">
            <p className="font-display text-6xl font-light tracking-tight text-[color:var(--accent)] sm:text-7xl">1×</p>
            <h2 className="font-display mt-4 text-3xl font-light tracking-tight">Im Jahr.</h2>
            <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Für viele Geräte und Tore ein guter Richtwert.
            </p>
          </div>
          <div className="bg-white p-8 sm:p-12">
            <p className="font-display text-6xl font-light tracking-tight sm:text-7xl">Kürzer.</p>
            <h2 className="font-display mt-4 text-3xl font-light tracking-tight">Wenn es viel läuft.</h2>
            <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">
              In Betrieben und bei häufig genutzten Toren kann ein kürzeres Intervall sinnvoll sein.
              {" Für mehrere Geräte an einem Standort stimmen wir das mit "}
              <Link href="/firmenkunden" className="border-b border-current">
                <span className="text-[color:var(--ink)]">Firmenkunden</span>
              </Link>{" ab."}
            </p>
          </div>
        </div>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt, bevor der Termin steht." items={faqs} />

      <section id="anfrage" className="scroll-mt-28 bg-white pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Gerät oder Tor nennen.
          </h2>
          <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
            Was gewartet werden soll, und wo es steht. Wir stimmen einen Termin ab. Noch kein Auftrag.
          </p>
          <div className="mt-12 grid gap-px bg-[color:var(--border)] lg:grid-cols-[1.15fr_0.85fr]">
            <Link href="/reparatur-buchen" className="group bg-[color:var(--ink)] p-8 text-white sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
                Termin
              </p>
              <p className="font-display mt-5 text-4xl font-light tracking-tight sm:text-5xl">
                <span className="text-white">Wartung anfragen.</span>
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/70">
                Gerät oder Tor, Standort, und wann es zuletzt an der Reihe war.
              </p>
            </Link>
            <Link href="/preise" className="group bg-[color:var(--bg-muted)] p-8 sm:p-12">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Vorher nachsehen
              </p>
              <p className="font-display mt-5 text-4xl font-light tracking-tight">
                <span className="text-[color:var(--ink)]">Was es kostet.</span>
              </p>
              <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Anfahrt, Schmierung, Justierung und Sicherheitsprüfung stehen bei den Preisen.
              </p>
            </Link>
          </div>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="mt-8 inline-flex items-baseline gap-3 border-b border-[color:var(--ink)] pb-1"
          >
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">Oder direkt</span>
            <span className="font-display text-2xl font-light tracking-tight" data-phone-number>
              {siteConfig.phoneDisplay}
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}

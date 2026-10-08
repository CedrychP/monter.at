import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "../siteConfig";
import SimpleLeadForm from "../SimpleLeadForm";
import { buildMetadata } from "../pageMetadata";

const phoneDisplay = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;

const positions = [
  "Techniker:in Wien & Niederösterreich",
  "Techniker:in Linz",
  "Disposition",
  "Initiativbewerbung"
];

const day = [
  {
    number: "01",
    title: "Annehmen",
    text: "Gerät, Fehlerbild und Adresse kommen am Telefon oder über das Formular an. Noch ist das kein Auftrag."
  },
  {
    number: "02",
    title: "Einteilen",
    text: "Die Disposition prüft, ob ein Einsatz sinnvoll ist, nennt den Rahmen und legt den Termin in die Tour."
  },
  {
    number: "03",
    title: "Reparieren",
    text: "Vor Ort wird die Ursache eingegrenzt. Ein Teil wird erst getauscht, wenn es das Gerät wirklich braucht."
  }
];

const roles: {
  id: string;
  number: string;
  kicker: string;
  title: string;
  text: string;
  points: string[];
  places?: string[];
  dark: boolean;
  graphic: ReactNode;
}[] = [
  {
    id: "techniker",
    number: "01",
    kicker: "Im Einsatz",
    title: "Techniker",
    text: "Sie arbeiten bei den Leuten zu Hause und in Betrieben. Waschmaschine, Geschirrspüler, Kühlgerät, Garagentor, Klimagerät. Der Einsatz liegt in Wien, in Niederösterreich oder in Linz, dort mit Technikerinnen und Technikern vor Ort. Es braucht handwerkliches Geschick, ein ruhiges Auftreten und die Geduld, erst zu prüfen.",
    points: [
      "Fehlerbild schon vor der Tür kennen",
      "Diagnose am Gerät, dann die Entscheidung",
      "Saubere Arbeit und eine klare Ansage"
    ],
    places: ["Wien", "Niederösterreich", "Linz"],
    dark: false,
    graphic: <TechMark />
  },
  {
    id: "disposition",
    number: "02",
    kicker: "Vertrieb & Sachbearbeitung",
    title: "Disposition",
    text: "Im Büro laufen die Stellen unter Vertrieb oder Sachbearbeitung. Die Arbeit selbst ist Disposition. Sie nehmen den Auftrag an, klären Gerät, Fehlerbild und Adresse und teilen den Einsatz ein. Am Telefon wird keine Reparatur versprochen, die sich nicht lohnt. Sie halten den Tag der Techniker zusammen.",
    points: [
      "Anrufe und Anfragen annehmen",
      "Termine und Touren einteilen",
      "Rückfragen klären, bevor jemand losfährt"
    ],
    dark: true,
    graphic: <DeskMark />
  }
];

const reasons = [
  {
    number: "01",
    title: "Einschulung",
    text: "Am Gerät und am Ablauf. Neue Kolleginnen und Kollegen lernen den Einsatz mit, nicht aus einem Ordner."
  },
  {
    number: "02",
    title: "Faire Bezahlung",
    text: "Die Bezahlung passt zur Verantwortung und steht fest, bevor der erste Arbeitstag beginnt."
  },
  {
    number: "03",
    title: "Weiterbildung",
    text: "Wer weitere Marken, Fehlerbilder oder Verantwortung übernehmen will, bekommt den Raum dazu."
  },
  {
    number: "04",
    title: "Planbare Touren",
    text: "Die Disposition legt den Tag. Weniger Leerlauf, klarere Wege in Wien, Niederösterreich und Linz."
  },
  {
    number: "05",
    title: "Ehrliche Reparatur",
    text: "Niemand muss ein Teil einbauen, das das Gerät nicht braucht. Das gilt gegenüber der Kundschaft und im Team."
  },
  {
    number: "06",
    title: "Zwei Seiten, ein Auftrag",
    text: "Techniker und Disposition arbeiten an demselben Einsatz. Niemand ist nur Zulieferer für den anderen."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Karriere bei MONTER | Techniker & Disposition",
  description:
    "Karriere bei MONTER Reparatur & Service: Techniker im Einsatz in Wien, Niederösterreich und Linz. Disposition nimmt Aufträge an und teilt sie ein.",
  path: "/karriere"
});

export default function KarrierePage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="overflow-hidden bg-[color:var(--ink)] text-white">
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 pb-[calc(7.5rem+env(safe-area-inset-bottom,0px))] pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-20">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[color:var(--accent-on-dark)]">
              <span aria-hidden="true" className="h-px w-8 bg-[color:var(--accent)]" />
              Karriere
            </p>
            <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.6rem]">
              Rausfahren.
              <span className="mt-1 block font-display-italic text-[color:var(--gold-on-dark)]">Oder einteilen.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[1.05rem] font-light leading-relaxed text-white/75">
              MONTER Reparatur &amp; Service hält Haushaltsgeräte, Klimageräte und Garagentore in
              Betrieb. Die Techniker sind in Wien, Niederösterreich und Linz im Einsatz. Im Büro
              nimmt die Disposition die Aufträge an und legt die Touren.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#bewerbung" className="btn-on-dark">
                Jetzt bewerben
              </a>
              <a
                href="#bereiche"
                className="group inline-flex items-center justify-center border border-white/70 px-7 py-4 text-[0.92rem] font-medium uppercase tracking-[0.04em] transition hover:bg-white"
              >
                <span className="text-white group-hover:text-[color:var(--ink)]">Die zwei Bereiche</span>
              </a>
            </div>
          </div>
          <RouteMark />
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Wie wir arbeiten</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                Der Tag beginnt am Telefon, nicht am Gerät.
              </h2>
            </div>
            <p className="max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)] lg:pt-16">
              Jemand schildert, was ausgefallen ist. Wir fragen nach, bevor ein Wagen losfährt.
              Diagnose vor dem Teiletausch, eine ehrliche Einschätzung, wenn sich die Reparatur
              nicht rechnet, und ein Termin, der erst gilt, wenn er bestätigt ist. Das ist die
              Haltung nach außen. Dieselbe Haltung gilt für die Leute, die sie tragen.
            </p>
          </div>

          <ol className="stagger relative mt-16 grid gap-px bg-[color:var(--border)] md:grid-cols-3">
            {day.map((step) => (
              <li key={step.number} className="bg-white p-8 sm:p-10">
                <span className="numeral text-[color:var(--accent)]">{step.number}</span>
                <h3 className="font-display mt-6 text-3xl font-light tracking-tight">{step.title}</h3>
                <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-[color:var(--muted)]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="bereiche" className="scroll-mt-28">
        {roles.map((role) => (
          <article
            key={role.id}
            id={role.id}
            className={`scroll-mt-28 ${role.dark ? "bg-[color:var(--ink)] text-white" : "bg-[color:var(--bg-muted)] text-[color:var(--ink)]"}`}
          >
            <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
              <div className={`reveal ${role.dark ? "lg:order-2" : ""}`}>
                <p
                  className={`text-[0.72rem] font-medium uppercase tracking-[0.22em] ${role.dark ? "text-[color:var(--accent-on-dark)]" : "text-[color:var(--accent)]"}`}
                >
                  {role.number} · {role.kicker}
                </p>
                <h2 className="font-display mt-4 text-5xl font-light tracking-tight sm:text-6xl">{role.title}</h2>
                <p className={`mt-6 max-w-xl text-[1.02rem] font-light leading-relaxed ${role.dark ? "text-white/75" : "text-[color:var(--muted)]"}`}>
                  {role.text}
                </p>
                {role.places ? (
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {role.places.map((place) => (
                      <li
                        key={place}
                        className="border border-[color:var(--ink)]/15 bg-white px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.16em]"
                      >
                        {place}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <ul className="mt-8 grid gap-3">
                  {role.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm font-light leading-relaxed">
                      <span
                        aria-hidden="true"
                        className={`mt-2 h-px w-6 shrink-0 ${role.dark ? "bg-[color:var(--accent-on-dark)]" : "bg-[color:var(--accent)]"}`}
                      />
                      <span className={role.dark ? "text-white/85" : ""}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`reveal ${role.dark ? "lg:order-1" : ""}`}>{role.graphic}</div>
            </div>
          </article>
        ))}
      </section>

      <section id="bewerbung" className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="reveal">
            <p className="cap-line tracking-eyebrow">Bewerbung</p>
            <h2 className="font-display mt-8 text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
              Welcher der beiden Bereiche passt.
            </h2>
            <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Schreiben Sie kurz, wer Sie sind und worauf Sie sich bewerben. Wir melden uns.
              Einen Lebenslauf können Sie nach der ersten Rückmeldung nachreichen. Dateien nimmt
              dieses Formular nicht an.
            </p>
            <a href={`tel:${phoneHref}`} className="font-display mt-10 block text-3xl font-light tracking-tight">
              <span className="text-[color:var(--accent)]">{phoneDisplay}</span>
            </a>
          </div>

          <div className="reveal border border-[color:var(--border)] bg-white p-6 sm:p-10">
            <SimpleLeadForm
              requestType="karriere"
              eyebrow="Bewerbung"
              title="Jetzt bewerben"
              description="Techniker in Wien, Niederösterreich oder Linz, oder Disposition im Büro."
              nameLabel="Vor- und Nachname"
              namePlaceholder="Max Mustermann"
              includePosition
              positionLabel="Worauf bewerben Sie sich?"
              positionOptions={positions}
              messageLabel="Anschreiben / Nachricht"
              messagePlaceholder="Kurz zu Ihnen: Erfahrung, Verfügbarkeit, welcher Bereich …"
              submitLabel="Bewerbung senden"
              phoneHref={phoneHref}
            />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--ink)] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[color:var(--accent-on-dark)]">
              <span aria-hidden="true" className="h-px w-8 bg-[color:var(--accent)]" />
              Warum hier
            </p>
            <h2 className="font-display mt-6 text-balance text-4xl font-light tracking-tight sm:text-5xl">
              Gründe, die den Alltag tragen.
            </h2>
          </div>
          <div className="stagger mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="group bg-[color:var(--ink)] p-8 transition duration-300 hover:bg-[#141414] sm:p-10"
              >
                <span className="numeral text-[color:var(--accent-on-dark)] transition group-hover:text-white">
                  {reason.number}
                </span>
                <h3 className="font-display mt-8 text-2xl font-light tracking-tight">{reason.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-white/70">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function RouteMark() {
  return (
    <div className="reveal relative mx-auto w-full max-w-[36rem]" aria-hidden="true">
      <svg viewBox="0 0 640 460" className="h-auto w-full">
        <circle cx="320" cy="230" r="168" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <circle cx="320" cy="230" r="108" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <path
          id="career-route"
          className="career-dash"
          d="M78 250C150 120 230 300 318 168C390 70 470 210 548 132"
          fill="none"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.4"
        />
        <circle className="career-motion" r="6" fill="#a8112a">
          <animateMotion dur="9s" repeatCount="indefinite">
            <mpath href="#career-route" />
          </animateMotion>
        </circle>
        <RouteNode x={78} y={250} label="Linz" />
        <RouteNode x={318} y={168} label="Wien" active />
        <RouteNode x={548} y={132} label="NÖ" />
      </svg>
    </div>
  );
}

function RouteNode({ x, y, label, active = false }: { x: number; y: number; label: string; active?: boolean }) {
  return (
    <g>
      <circle cx={x} cy={y} r={active ? 7 : 5} fill={active ? "#ff6073" : "#fff"} />
      <circle cx={x} cy={y} r={active ? 16 : 12} fill="none" stroke="rgba(255,255,255,0.35)" />
      <text
        x={x}
        y={y + 36}
        textAnchor="middle"
        fill="rgba(255,255,255,0.8)"
        fontSize="13"
        letterSpacing="0.18em"
        fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
      >
        {label.toUpperCase()}
      </text>
    </g>
  );
}

function TechMark() {
  return (
    <div className="relative overflow-hidden border border-[color:var(--border)] bg-white p-8 sm:p-12" aria-hidden="true">
      <svg viewBox="0 0 520 420" className="h-auto w-full">
        <rect x="36" y="48" width="250" height="300" fill="none" stroke="#0a0a0a" strokeWidth="1.4" />
        <circle cx="161" cy="198" r="62" fill="none" stroke="#0a0a0a" strokeWidth="1.4" />
        <circle cx="161" cy="198" r="18" fill="none" stroke="#a8112a" strokeWidth="1.6" />
        <path d="M36 318h250" stroke="#0a0a0a" strokeWidth="1.4" />
        <rect x="300" y="86" width="168" height="220" fill="#0a0a0a" />
        <path d="M300 150h168M300 214h168" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        <circle cx="384" cy="256" r="8" fill="#ff6073" />
        <path d="M248 188h70" stroke="#a8112a" strokeWidth="1.4" strokeDasharray="4 4" />
      </svg>
      <p className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[color:var(--muted)]">
        Gerät · Tür · Ursache
      </p>
    </div>
  );
}

function DeskMark() {
  return (
    <div className="relative overflow-hidden border border-white/15 bg-[#141414] p-8 sm:p-12" aria-hidden="true">
      <svg viewBox="0 0 520 420" className="h-auto w-full">
        <rect x="40" y="70" width="180" height="64" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" />
        <rect x="40" y="154" width="180" height="64" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.3" />
        <rect x="40" y="238" width="180" height="64" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.3" />
        <path d="M230 102h70M230 186h70M230 270h70" stroke="#ff6073" strokeWidth="1.4" />
        <rect x="310" y="78" width="170" height="236" fill="none" stroke="#fff" strokeWidth="1.3" />
        <path d="M334 122h122M334 162h90M334 202h108M334 242h74" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
        <circle cx="438" cy="270" r="7" fill="#e3c071" />
      </svg>
      <p className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-white/55">
        Anruf · Tour · Termin
      </p>
    </div>
  );
}

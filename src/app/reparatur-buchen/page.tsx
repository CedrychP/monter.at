import type { Metadata } from "next";
import Link from "next/link";
import RepairBookingForm from "../RepairBookingForm";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const windows = [
  {
    when: "Heute",
    title: "Anruf",
    text: "Dringende Fälle oft am selben Tag. Wasser oder ein ausgefallenes Tiefkühlgerät: direkt anrufen."
  },
  {
    when: "1–2 Tage",
    title: "Termin",
    text: "So liegt der Besuch meist, nachdem wir das Zeitfenster abgestimmt haben."
  },
  {
    when: "1 Werktag",
    title: "Rückruf",
    text: "So schnell melden wir uns auf eine Anfrage. Die Anfrage ist noch kein Auftrag."
  }
];

const steps = [
  {
    number: "01",
    title: "Gerät und Fehlerbild",
    text: "Waschmaschine, Geschirrspüler, Kühlschrank, Trockner, Herd, Klimagerät, Garagentor oder Fernseher. Dazu Marke, was nicht läuft, und ob ein Fehlercode da ist. Ein Foto vom Typenschild hilft."
  },
  {
    number: "02",
    title: "Anruf zur Abstimmung",
    text: "Wir rufen an, meist innerhalb eines Werktags, und legen das Zeitfenster fest. Der Termin liegt meist binnen 1–2 Tagen. Bei Wasser oder einem ausgefallenen Tiefkühlgerät oft noch am selben Tag."
  },
  {
    number: "03",
    title: "Techniker vor Ort",
    text: "Er kommt zum vereinbarten Fenster, diagnostiziert und repariert nach Möglichkeit direkt. Wenn ein Tausch sinnvoller ist, sagen wir das, bevor weitergerechnet wird."
  }
];

const devices = [
  { label: "Waschmaschine", href: "/haushaltsgeraete/waschmaschine-reparatur-wien" },
  { label: "Geschirrspüler", href: "/haushaltsgeraete/geschirrspueler-reparatur-wien" },
  { label: "Trockner", href: "/haushaltsgeraete/trockner-reparatur-wien" },
  { label: "Kühlschrank", href: "/haushaltsgeraete/kuehlschrank-reparatur-wien" },
  { label: "Backofen & Herd", href: "/haushaltsgeraete/backofen-herd-reparatur-wien" },
  { label: "Fernseher", href: "/haushaltsgeraete/fernseher-reparatur-wien" },
  { label: "Garagentor", href: "/garagentore" },
  { label: "Klimagerät", href: "/klimageraete" }
];

const ready = [
  {
    number: "01",
    label: "Gerät",
    text: "Welches Gerät steht, welche Marke, und ob es frei oder eingebaut ist."
  },
  {
    number: "02",
    label: "Fehlerbild",
    text: "Was passiert, seit wann, und ob ein Code in der Anzeige steht."
  },
  {
    number: "03",
    label: "Adresse",
    text: "Straße, Ort und, wenn es eng wird, Einfahrt, Hof, Lift oder Stock."
  },
  {
    number: "04",
    label: "Wunschzeit",
    text: "Akut, in den nächsten Tagen oder zeitlich flexibel. Ein Wunschfenster reicht."
  }
];

const afterRequest = [
  { title: "Rückruf", text: "Meist innerhalb eines Werktags, unter der Nummer aus dem Formular." },
  { title: "Zeitfenster", text: "Wir nennen, was in Wien und Niederösterreich realistisch frei ist." },
  { title: "Festlegung", text: "Der Termin steht erst, wenn wir ihn am Telefon bestätigt haben." }
];

export const metadata: Metadata = buildMetadata({
  title: "Reparaturtermin buchen Wien | MONTER Reparatur & Service",
  description:
    "Reparaturtermin buchen: dringende Fälle oft noch am selben Tag, sonst meist binnen 1–2 Tagen. Gerät und Fehlerbild angeben — wir melden uns zur Abstimmung.",
  path: "/reparatur-buchen"
});

export default function ReparaturBuchenPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="overflow-hidden bg-[color:var(--ink)] text-white">
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[color:var(--accent-on-dark)]">
              <span aria-hidden="true" className="h-px w-8 bg-[color:var(--accent)]" />
              Montag–Freitag, 07:00–18:00
            </p>
            <h1 className="font-display mt-6 text-balance text-5xl font-light leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.6rem]">
              Noch heute
              <span className="mt-1 block font-display-italic text-[color:var(--gold-on-dark)]">ein Termin.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[1.05rem] font-light leading-relaxed text-white/75">
              Dringende Fälle oft am selben Tag. Der Anruf ist dann der schnellste Weg. Über das
              Formular melden wir uns meist innerhalb eines Werktags, der Termin liegt meist binnen
              1–2 Tagen. Samstag und Sonntag ist geschlossen.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-on-dark">
                <span>
                  Jetzt anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
              <a href="#anfrage" className="btn-on-dark-ghost">
                Zum Formular
              </a>
            </div>
          </div>

          <ol className="reveal grid gap-px bg-white/15">
            {windows.map((item, index) => (
              <li
                key={item.when}
                className={`px-6 py-6 sm:px-8 ${index === 0 ? "bg-[color:var(--accent)]" : "bg-[color:var(--ink)]"}`}
              >
                <p className="font-display text-4xl font-light tracking-tight text-white sm:text-5xl">{item.when}</p>
                <p className="mt-3 text-base font-normal text-white">{item.title}</p>
                <p className="mt-1 text-sm font-light leading-relaxed text-white/75">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div aria-hidden="true" className="bg-[color:var(--ink)]">
        <svg viewBox="0 0 1440 64" className="block h-12 w-full sm:h-16" preserveAspectRatio="none">
          <polygon points="0,64 1440,0 1440,64" fill="#a8112a" />
        </svg>
      </div>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Danach</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                Vom Anruf bis zur Tür.
              </h2>
            </div>
            <p className="max-w-md text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)] lg:pb-1">
              So läuft ein Reparaturtermin bei MONTER: erst das Fehlerbild, dann das Zeitfenster,
              dann der Techniker. Markenoffen, für Privat, Gewerbe und Hausverwaltung.
            </p>
          </div>
          <ol className="mt-12 grid gap-px bg-[color:var(--border)] lg:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className={`flex min-h-[22rem] flex-col p-8 sm:p-10 ${
                  index === 0
                    ? "bg-[color:var(--ink)] text-white"
                    : index === 2
                      ? "bg-[color:var(--accent)] text-white"
                      : "bg-white text-[color:var(--ink)]"
                }`}
              >
                <p
                  className={`font-display text-6xl font-light tracking-tight sm:text-7xl ${
                    index === 1 ? "text-[color:var(--accent)]" : "text-white"
                  }`}
                >
                  {step.number}
                </p>
                <h3 className="font-display mt-auto pt-10 text-3xl font-light tracking-tight">{step.title}</h3>
                <p className={`mt-4 text-sm font-light leading-relaxed ${index === 1 ? "text-[color:var(--muted)]" : "text-white/75"}`}>
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <nav aria-label="Geräte zur Reparatur" className="mt-8 flex flex-wrap gap-2">
            {devices.map((device) => (
              <Link
                key={device.href}
                href={device.href}
                className="group border border-[color:var(--border)] px-4 py-2.5 text-sm transition hover:border-[color:var(--ink)] hover:bg-[color:var(--ink)]"
              >
                <span className="text-[color:var(--ink)] group-hover:text-white">{device.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Vor dem Termin</p>
              <h2 className="font-display mt-6 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                Vier Angaben.
                <span className="mt-1 block font-display-italic text-[color:var(--accent)]">Dann können wir planen.</span>
              </h2>
            </div>
            <p className="max-w-md text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)] lg:pb-1">
              Ohne Gerät, Fehlerbild, Adresse und Wunschzeit bleibt der Termin ein Schätzwert. Mit
              den vier Punkten können wir den Einsatz einteilen.
            </p>
          </div>
          <dl className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {ready.map((item) => (
              <div key={item.number} className="flex min-h-64 flex-col bg-[color:var(--bg-muted)] p-7 sm:p-8">
                <p className="font-display text-5xl font-light tracking-tight text-[color:var(--accent)]">{item.number}</p>
                <dt className="font-display mt-auto pt-8 text-3xl font-light tracking-tight">{item.label}</dt>
                <dd className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {"Privat, Gewerbe und "}
            <Link href="/firmenkunden" className="border-b border-current"><span className="text-[color:var(--ink)]">Hausverwaltung</span></Link>{". Markenoffen in Wien und Niederösterreich. Anfahrt unter "}
            <Link href="/preise" className="border-b border-current"><span className="text-[color:var(--ink)]">Preise</span></Link>{", weitere Gebiete unter "}
            <Link href="/einsatzgebiete" className="border-b border-current"><span className="text-[color:var(--ink)]">Einsatzgebiete</span></Link>.
          </p>
        </div>
      </section>

      <section id="anfrage" className="scroll-mt-28 border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] pb-16 pt-16 sm:pb-24 sm:pt-20">
        <div className="mx-auto grid max-w-[88rem] items-start gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Anfrage</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Gerät nennen.
              <span className="mt-1 block">Wir rufen an.</span>
            </h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              Etwa eine Minute. Wir melden uns zur Abstimmung, meist innerhalb eines Werktags.
            </p>
            <ol className="mt-8 border-t border-[color:var(--border)]">
              {afterRequest.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[color:var(--border)] py-5">
                  <span className="font-display text-xl font-light text-[color:var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-base font-normal text-[color:var(--ink)]">{item.title}</span>
                    <span className="mt-1 block text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary mt-8">
              <span>
                Lieber gleich <span data-phone-number>{siteConfig.phoneDisplay}</span>
              </span>
            </a>
            <p className="mt-8 border-l-2 border-[color:var(--accent)] pl-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              Noch kein Auftrag. Für förderfähige Geräte zieht die{" "}
              <Link href="/geraete-retter-praemie" className="border-b border-current"><span className="text-[color:var(--ink)]">Geräte-Retter-Prämie</span></Link>{" "}
              50&nbsp;% ab, höchstens 130&nbsp;€. MONTER ist Partnerunternehmen, solange diese
              Förderperiode läuft.
            </p>
          </div>
          <div className="border border-[color:var(--border)] bg-white p-6 sm:p-10">
            <RepairBookingForm phoneHref={siteConfig.phoneHref} />
          </div>
        </div>
      </section>
    </main>
  );
}

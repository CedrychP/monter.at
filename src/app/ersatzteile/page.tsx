import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../ContactForm";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const scan = ["Pumpe", "Heizstab", "Dichtung", "Lager", "Platine", "Feder", "Laufrolle", "Antrieb"];

const applianceParts = [
  {
    title: "Pumpen & Schläuche",
    text: "Laugenpumpen, Umwälzpumpen, Ablaufschläuche und Dichtungen für Waschmaschine und Geschirrspüler."
  },
  {
    title: "Heizelemente",
    text: "Heizstäbe und Heizungen für Waschmaschine, Trockner, Geschirrspüler und Backofen."
  },
  {
    title: "Lager & Trommeln",
    text: "Trommellager, Wellendichtringe und Antriebsriemen, passend zu Marke und Modell."
  },
  {
    title: "Türen & Dichtungen",
    text: "Türdichtungen, Türschlösser, Scharniere und Manschetten."
  },
  {
    title: "Elektronik & Steuerung",
    text: "Steuerplatinen, Thermostate, Sensoren und Schalter."
  },
  {
    title: "Kühlung",
    text: "Kompressoren, Ventilatoren, Thermostate und Dichtungen für Kühl- und Gefriergeräte."
  }
];

const garageParts = [
  {
    title: "Federn & Seile",
    text: "Torsions- und Zugfedern sowie Tragseile, abgestimmt auf Torgröße und Gewicht."
  },
  {
    title: "Laufrollen & Schienen",
    text: "Laufrollen, Führungsschienen und Beschläge."
  },
  {
    title: "Antriebe & Elektronik",
    text: "Motoren, Zahnriemen, Platinen, Handsender und Lichtschranken."
  }
];

const needed = [
  { label: "Marke", hint: "Vom Typenschild" },
  { label: "Modell", hint: "E-Nr. oder Typ" },
  { label: "Teil", hint: "Oder das Fehlerbild" },
  { label: "Foto", hint: "Hilft, ist kein Muss" }
];

const ways = [
  {
    number: "01",
    title: "Einbauen lassen",
    text: "Wir besorgen das Teil und verbauen es im Zuge der Reparatur. So sitzt es am Gerät, für das es bestimmt ist."
  },
  {
    number: "02",
    title: "Nur das Teil",
    text: "Sie kennen das Bauteil und wollen es selbst. Wir identifizieren es und schicken das passende Teil zu."
  }
];

const assurances = [
  {
    title: "Original oder gleichwertig",
    text: "Originalteile oder qualitativ gleichwertige, passgenaue Teile namhafter Hersteller."
  },
  {
    title: "Preis vor dem Einbau",
    text: "Welches Teil zum Einsatz kommt und was es kostet, besprechen wir, bevor es verbaut wird."
  },
  {
    title: "Nur wenn es gebraucht wird",
    text: "Material wird nur verrechnet, wenn es tatsächlich benötigt wird."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Verwenden Sie Originalersatzteile?",
    answer:
      "Wir verbauen Original- oder qualitativ gleichwertige, passgenaue Ersatzteile namhafter Hersteller. Welches Teil zum Einsatz kommt und was es kostet, besprechen wir vor dem Einbau."
  },
  {
    question: "Kann ich nur das Teil bestellen?",
    answer:
      "Ja. Nennen Sie Marke, Modell und das Teil oder das Fehlerbild. Wir identifizieren das passende Teil, prüfen Verfügbarkeit und Preis und schicken es zu — oder verbauen es direkt."
  },
  {
    question: "Was brauchen Sie für die Zuordnung?",
    answer:
      "Marke, Modell und das Teil oder das Fehlerbild. Ein Foto vom Typenschild beschleunigt die Zuordnung. Die Anfrage ist noch kein Auftrag."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Ersatzteile Haushaltsgeräte & Garagentor Wien | MONTER",
  description:
    "Originale Ersatzteile für Haushaltsgeräte und Garagentore in Wien: Pumpen, Heizstäbe, Dichtungen, Lager, Elektronik, Federn, Laufrollen und Antriebe. Zuordnung über Marke, Modell und Typenschild.",
  path: "/ersatzteile"
});

export default function ErsatzteilePage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto grid max-w-[88rem] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Ersatzteile in Wien</p>
            <h1 className="font-display mt-6 text-balance text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Marke. Modell. Teil.
              <span className="mt-2 block italic text-[color:var(--accent)]">Reicht.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Für Haushaltsgeräte und Garagentore in Wien und Niederösterreich. Wir ordnen das
              passende Originalteil oder ein gleichwertiges Teil zu, nennen den Preis vor dem
              Einbau und verbauen es — oder schicken es zu.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#ersatzteil-anfrage" className="btn-primary">
                <span>Ersatzteil anfragen</span>
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-ghost">
                <span>
                  Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </div>

          <div className="bg-[color:var(--bg-muted)] p-6 sm:p-8" aria-hidden="true">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Bestellzettel
              </p>
              <p className="font-display text-sm font-light text-[color:var(--muted)]">Offen</p>
            </div>
            <div className="relative mx-auto my-8 h-40 w-40 sm:h-48 sm:w-48">
              <span className="absolute inset-0 rounded-full border border-[color:var(--ink)]/15" />
              <span className="absolute inset-5 rounded-full border border-[color:var(--ink)]/25" />
              <span className="absolute inset-[3.25rem] rounded-full bg-[color:var(--accent)] sm:inset-16" />
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[color:var(--ink)]/15" />
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[color:var(--ink)]/15" />
            </div>
            <dl className="grid gap-0 border-t border-[color:var(--border)]">
              {[
                ["Marke", "Ihre Marke"],
                ["Modell", "vom Typenschild"],
                ["Teil", "oder Fehlerbild"]
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-[color:var(--border)] py-3">
                  <dt className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {label}
                  </dt>
                  <dd className="font-display text-xl font-light tracking-tight">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white" aria-labelledby="ersatzteile-wien">
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Für Gerät und Tor</p>
            <h2 id="ersatzteile-wien" className="font-display mt-6 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Ersatzteile in Wien, zugeordnet nach Marke und Modell.
            </h2>
            <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Wenn an Waschmaschine, Geschirrspüler, Trockner, Kühlgerät oder Backofen ein Teil fehlt, zählen
              Marke und Modell. Vom Typenschild lesen wir die E-Nr. ab und ordnen Pumpe, Heizstab, Dichtung, Lager
              oder Platine zu. Für Garagentore sind es Federn, Laufrollen, Seile und Antriebe, abgestimmt auf
              Torgröße und Gewicht.
            </p>
            <p className="mt-4 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Markenoffen in Wien und im näheren Niederösterreich, unter anderem Bosch, Siemens, Miele, AEG und
              Gorenje. Originalteil oder ein gleichwertiges, passgenaues Teil: den Preis nennen wir vor dem Einbau.
              Verbaut im Zuge der Reparatur, oder als Teil zugeschickt.
            </p>
          </div>
          <figure>
            <Image
              src="/assets/ersatzteile-waschmaschine-wien.webp"
              alt="Geöffnete Waschmaschine mit Trommel und Antrieb. Daran sitzen Lager, Riemen und Heizung."
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">
              Trommel, Lager und Antrieb: das Teil hängt am Modell, nicht am Fehlerbild allein.
            </figcaption>
          </figure>
        </div>
        <div className="mx-auto max-w-[88rem] px-5 pb-16 sm:px-8 sm:pb-20">
          <div className="border border-[color:var(--border)] bg-[color:var(--bg-muted)] p-6 sm:p-8">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">Typenschild</p>
            <h3 className="font-display mt-3 text-3xl font-light tracking-tight">Vier Zeilen, dann ist das Teil klar.</h3>
            <dl className="mt-8 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Hersteller", "Marke auf dem Schild"],
                ["E-Nr. / Typ", "Die Modellzeile"],
                ["Gerät", "Waschmaschine, Tor, …"],
                ["Teil", "Oder nur das Fehlerbild"]
              ].map(([label, value]) => (
                <div key={label} className="bg-[color:var(--bg-muted)] p-5">
                  <dt className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">{label}</dt>
                  <dd className="font-display mt-2 text-2xl font-light tracking-tight">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white py-8">
        <div className="mx-auto flex max-w-[88rem] flex-wrap gap-x-8 gap-y-3 px-5 sm:px-8">
          {scan.map((part) => (
            <p key={part} className="font-display text-xl font-light tracking-tight sm:text-2xl">
              {part}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Was wir führen.
          </h2>
          <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Im Gerät
              </p>
              <h3 className="font-display mt-3 text-3xl font-light tracking-tight">Haushaltsgeräte</h3>
              <figure className="mt-6">
                <Image
                  src="/assets/ersatzteile-geschirrspueler-wien.webp"
                  alt="Geschirrspüler in der Küche. Typische Stelle für Pumpe, Heizung und Dichtung."
                  width={1600}
                  height={1067}
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">
                  Pumpe, Heizung, Dichtung: am Geschirrspüler oft dieselben Verschleißstellen.
                </figcaption>
              </figure>
              <ul className="mt-6 border-t border-[color:var(--border)]">
                {applianceParts.map((part) => (
                  <li key={part.title} className="border-b border-[color:var(--border)] py-5">
                    <p className="font-display text-2xl font-light tracking-tight">{part.title}</p>
                    <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{part.text}</p>
                  </li>
                ))}
              </ul>
              <Link href="/haushaltsgeraete" className="mt-6 inline-block border-b border-current pb-1 text-sm">
                <span className="text-[color:var(--ink)]">Zum Geräteservice</span>
              </Link>
            </div>
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Am Tor
              </p>
              <h3 className="font-display mt-3 text-3xl font-light tracking-tight">Garagentore</h3>
              <div className="mt-6 border border-[color:var(--ink)] bg-[color:var(--ink)] p-6 text-white" aria-hidden="true">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">Am Tor</p>
                <div className="mt-6 flex items-end gap-3">
                  {Array.from({ length: 7 }, (_, index) => (
                    <span
                      key={index}
                      className="w-8 border-t-[3px] border-white/80 sm:w-10"
                      style={{ transform: `translateY(${index % 2 === 0 ? "0" : "10px"}) rotate(-18deg)` }}
                    />
                  ))}
                  <span className="ml-auto h-10 w-10 rounded-full border-2 border-[color:var(--accent)]" />
                </div>
                <p className="mt-8 font-display text-3xl font-light tracking-tight">Feder. Rolle. Antrieb.</p>
              </div>
              <ul className="mt-6 border-t border-[color:var(--border)]">
                {garageParts.map((part) => (
                  <li key={part.title} className="border-b border-[color:var(--border)] py-5">
                    <p className="font-display text-2xl font-light tracking-tight">{part.title}</p>
                    <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{part.text}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-light leading-relaxed text-[color:var(--muted)]">
                Bei älteren Toren, für die keine Originalteile mehr lieferbar sind, arbeiten wir mit
                passenden Alternativbauteilen oder gefertigten Ersatzteilen.
              </p>
              <Link href="/garagentore" className="mt-6 inline-block border-b border-current pb-1 text-sm">
                <span className="text-[color:var(--ink)]">Zu den Toren</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Zwei Wege</p>
          <h2 className="font-display mt-6 max-w-xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Verbauen. Oder zuschicken.
          </h2>
          <ol className="mt-12 grid gap-px bg-[color:var(--border)] lg:grid-cols-2">
            {ways.map((way) => (
              <li key={way.number} className="bg-white p-8 sm:p-12">
                <p className="font-display text-5xl font-light tracking-tight text-[color:var(--accent)]">{way.number}</p>
                <h3 className="font-display mt-6 text-3xl font-light tracking-tight">{way.title}</h3>
                <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-[color:var(--muted)]">{way.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Bevor etwas verbaut wird.
          </h2>
          <ul className="mt-12 grid gap-10 lg:grid-cols-3">
            {assurances.map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-2xl font-light tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
            {"Die Pauschalen für Anfahrt und Arbeit stehen unter "}
            <Link href="/preise" className="border-b border-current">
              <span className="text-[color:var(--ink)]">Preise</span>
            </Link>{". Markenoffen, unter anderem Bosch, Siemens, Miele, AEG und Gorenje."}
          </p>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz, bevor die Anfrage rausgeht." items={faqs} />

      <section id="ersatzteil-anfrage" className="scroll-mt-28 bg-white pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto grid max-w-[88rem] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Teil nennen.
            </h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              Vier Angaben reichen für die Zuordnung. Wir melden uns mit Verfügbarkeit und Preis.
              Noch kein Auftrag.
            </p>
            <ol className="mt-8 border-t border-[color:var(--border)]">
              {needed.map((item, index) => (
                <li key={item.label} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-[color:var(--border)] py-4">
                  <span className="font-display text-sm tracking-[0.16em] text-[color:var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="font-display block text-xl font-light tracking-tight">{item.label}</span>
                    <span className="mt-1 block text-sm font-light text-[color:var(--muted)]">{item.hint}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-[color:var(--border)] bg-white p-6 sm:p-10">
            <ContactForm
              eyebrow="Ersatzteil-Anfrage"
              title="Ersatzteil anfragen"
              defaultRequestType="ersatzteile"
              lockRequestType
              includeCustomerType={false}
              includeModel
              phoneHref={siteConfig.phoneHref}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

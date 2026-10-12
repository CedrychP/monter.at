import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { buildMetadata } from "../pageMetadata";
import SimpleLeadForm from "../SimpleLeadForm";
import { siteConfig } from "../siteConfig";

const audiences = [
  {
    title: "Hotels & Pensionen",
    text: "Wäsche, Küche und Zimmer laufen im Takt der Gäste. Ein Ausfall trifft den Betrieb, nicht nur ein Gerät. Wartung vor der vollen Saison, und Vorrang, wenn Wäsche oder Küche stehen."
  },
  {
    title: "Hausverwaltungen",
    text: "Viele Wohnungen, eine Anlaufstelle. Termine mit Mieter, Hausbetreuung oder Schlüssel. Berichte und Rechnungen für Objekt, Versicherung und Buchhaltung. Sammelgaragen inklusive."
  },
  {
    title: "Geschäfte & Büros",
    text: "Teeküche, Geschirrspüler, Klima im Büro, Tor zur Garage. Der Laden oder das Büro soll weiterlaufen, während das Gerät drankommt."
  },
  {
    title: "Gastronomie",
    text: "Spülen und Kühlen laufen den Tag. Fällt Kühlung oder Gefriergerät aus, ist Ware betroffen. Solche Ausfälle planen wir vorrangig. Bei Dauerbetrieb ist das Wartungsintervall kürzer."
  },
  {
    title: "Ordinationen",
    text: "Praxisbetrieb hat wenig Spielraum. Klima, Wäsche und Geräte in Ordinationen stimmen wir auf die Öffnungszeiten ab, statt den Ausfall abzuwarten."
  },
  {
    title: "Vermieter",
    text: "Mehrere Wohnungen oder Serviced Apartments im selben Haus: ein Termin, eine Anfahrt. Sie sagen, wer aufsperrt."
  }
];

const offers = [
  {
    kicker: "Im Haus",
    title: "Haushaltsgeräte",
    text: "Waschmaschine, Geschirrspüler, Trockner, Kühlgerät und weitere Geräte. Mehrere im selben Objekt an einem Termin. In Hotel, Wohnung und Teeküche derselbe Ablauf.",
    href: "/haushaltsgeraete",
    label: "Zum Geräteservice"
  },
  {
    kicker: "Am Tor",
    title: "Garagentore",
    text: "Einzelgarage, Sammelgarage und gewerbliche Anlagen. Termine gebündelt, die Prüfung dokumentiert. Kraftbetätigte Tore im gewerblichen Umfeld haben eine regelmäßige Prüfpflicht.",
    href: "/garagentore",
    label: "Zu den Toren"
  },
  {
    kicker: "In der Anlage",
    title: "Klimageräte",
    text: "Split, Multi-Split und Monoblock für Büro, Ordination, Gastronomie und Betrieb. Mehrere Innengeräte in einem Gang. Bei Dauerbetrieb eher halbjährlich als einmal im Jahr.",
    href: "/klimageraete",
    label: "Zur Klimawartung"
  },
  {
    kicker: "Im Vertrag",
    title: "Wartungsvertrag",
    text: "Intervall und Umfang für die Geräte im Objekt, abgestimmt statt auf den Ausfall gewartet. Bei intensiver Nutzung kürzer als einmal im Jahr. Was geprüft wird, wird dokumentiert.",
    href: "/wartungsservice",
    label: "Zur Wartung"
  },
  {
    kicker: "Im Ausfall",
    title: "Prioritätsservice",
    text: "Steht Küche, Kühlung oder der Zugang über das Tor, planen wir den Termin vor. Sie nennen das Objekt, wir räumen den Einsatz davor ein. Den konkreten Termin stimmen wir ab.",
    href: "#firmenkunden-anfrage",
    label: "Vorrang anfragen"
  }
];

const reasons = [
  {
    number: "01",
    title: "Ein Ansprechpartner",
    text: "Feste Kontaktperson für alle Geräte und Objekte. Kurze Wege, klare Kommunikation, auch wenn Hotel, Wohnung und Tor zusammenhängen."
  },
  {
    number: "02",
    title: "Terminlogistik",
    text: "Planbare Termine, abgestimmt auf Mieter, Hausverwaltung, Praxis und Betrieb. Wer aufsperrt, steht vor dem Termin fest."
  },
  {
    number: "03",
    title: "Wartungsvertrag",
    text: "Feste Intervalle fürs Objekt. Prüfung, Reinigung, Justierung und ein Bericht. Die Pauschalen stehen bei den Preisen, der Umfang wird auf die Geräte abgestimmt."
  },
  {
    number: "04",
    title: "Prioritätsservice",
    text: "Ausfälle im laufenden Betrieb kommen vor. Kühlung, Küche und Torzugang behandeln wir vorrangig. Den Termin stimmen wir ab."
  },
  {
    number: "05",
    title: "Dokumentation",
    text: "Nachvollziehbare Berichte und Rechnungen für Objektmanagement, Versicherung und Buchhaltung."
  },
  {
    number: "06",
    title: "Kostenklarheit",
    text: "Transparente Pauschalen. Materialkosten nur bei tatsächlichem Bedarf, und erst nach Abstimmung."
  }
];

const steps = [
  {
    number: "01",
    title: "Objekt schildern",
    text: "Geräte, Standort und wer aufsperrt. Hotel, Verwaltung, Geschäft oder Praxis: der Umfang hängt am Haus, nicht an einem einzelnen Modell."
  },
  {
    number: "02",
    title: "Vertrag oder Vorrang",
    text: "Laufende Wartung im Vertrag, oder ein Ausfall, der vorgezogen werden soll. Beides läuft über dieselbe Anfrage."
  },
  {
    number: "03",
    title: "Ein Termin",
    text: "Mehrere Geräte im selben Haus an einem Termin. Die Anfahrt fällt dann nur einmal an."
  },
  {
    number: "04",
    title: "Bericht",
    text: "Was gemacht wurde, steht nachvollziehbar. Für die Abrechnung der Verwaltung und die Buchhaltung."
  }
];

const contractLines = ["Intervall", "Geräte im Objekt", "Wer aufsperrt", "Vorrang bei Ausfall", "Bericht"];
const windows = Array.from({ length: 18 }, (_, index) => index);

const faqs: HubFaqItem[] = [
  {
    question: "Für wen ist der Firmenkundenbereich?",
    answer:
      "Für Hotels und Pensionen, Hausverwaltungen, Geschäfte und Büros, Gastronomie, Ordinationen, Vermieter und Serviced Apartments in Wien und Umgebung. Wenn im Objekt mehrere Geräte oder eine Sammelgarage betroffen sind, koordinieren wir das über eine Anfrage."
  },
  {
    question: "Was steht in einem Wartungsvertrag?",
    answer:
      "Intervall und Umfang für die Geräte im Objekt. Bei intensiver Nutzung, etwa in Hotel, Gastronomie oder an häufig gefahrenen Toren, ist das Intervall kürzer als einmal im Jahr. Geprüft, gereinigt und justiert wird, was zum Gerät gehört. Der Bericht hält fest, was in Ordnung ist. Die Pauschalen stehen bei den Preisen."
  },
  {
    question: "Was heißt Prioritätsservice?",
    answer:
      "Ausfälle, die den Betrieb treffen, planen wir vor: Küche, Kühlung, Gefriergerät oder der Zugang über das Tor. Dringende Fälle wie Wasser oder ein ausgefallenes Kühlgerät versuchen wir im Wiener Raum oft noch am selben Tag. Den konkreten Termin stimmen wir ab."
  },
  {
    question: "Können mehrere Geräte an einem Termin erledigt werden?",
    answer:
      "Ja. Mehrere Geräte im selben Haus arbeiten wir an einem Termin ab. Die Anfahrt fällt dann nur einmal an. Melden Sie das gesammelt, idealerweise über die Hausverwaltung."
  },
  {
    question: "Was bekommt die Verwaltung in die Hand?",
    answer:
      "Nachvollziehbare Berichte und Rechnungen. Für Hausverwaltungen, Versicherungen und die Buchhaltung. Material wird nur berechnet, wenn es tatsächlich gebraucht wird. Die Pauschalen stehen bei den Preisen."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Firmenkunden Wien | Wartungsvertrag & Priorität | MONTER",
  description:
    "Firmenkunden in Wien: Wartungsvertrag und Prioritätsservice für Hotels, Hausverwaltungen, Geschäfte, Gastronomie, Ordinationen und Vermieter. Ein Ansprechpartner fürs Objekt.",
  path: "/firmenkunden"
});

export default function FirmenkundenPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto grid max-w-[88rem] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Firmenkunden in Wien</p>
            <h1 className="font-display mt-6 text-balance text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Ein Objekt.
              <span className="mt-1 block italic text-[color:var(--accent)]">Ein Ansprechpartner.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Wenn Geräte im Objekt ausfallen, zählt mehr als die Reparatur: Terminlogistik, Dokumentation,
              Kostenklarheit und kurze Ausfallzeiten. Für Hotels, Hausverwaltungen, Geschäfte, Gastronomie und
              Vermieter gibt es dafür Wartungsvertrag und Prioritätsservice.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#firmenkunden-anfrage" className="btn-primary">
                <span>Anfrage für Ihr Objekt</span>
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-ghost">
                <span>
                  Anrufen <span data-phone-number>{siteConfig.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </div>

          <div className="bg-[color:var(--ink)] p-6 text-white sm:p-8" aria-hidden="true">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
              Ein Haus
            </p>
            <div className="mt-6 grid grid-cols-6 gap-2">
              {windows.map((index) => (
                <span
                  key={index}
                  className={`h-9 sm:h-11 ${index === 8 ? "bg-[color:var(--accent)]" : "bg-white/10"}`}
                />
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-px bg-white/15">
              {["Geräte", "Tor", "Klima"].map((label) => (
                <p key={label} className="bg-[color:var(--ink)] py-3 text-center font-display text-lg font-light">
                  {label}
                </p>
              ))}
            </div>
            <p className="mt-6 font-display text-3xl font-light tracking-tight">Eine Anfrage.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg-muted)] py-8">
        <div className="mx-auto flex max-w-[88rem] flex-wrap gap-x-8 gap-y-3 px-5 sm:px-8">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">Für</p>
          {audiences.map((audience) => (
            <p key={audience.title} className="font-display text-xl font-light tracking-tight">
              {audience.title}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="fuer-wen">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 id="fuer-wen" className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Für wen das gut ist.
          </h2>
          <ul className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, index) => (
              <li key={audience.title} className="bg-white p-8">
                <p className="font-display text-sm tracking-[0.16em] text-[color:var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-4 text-2xl font-light tracking-tight">{audience.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{audience.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <figure>
            <Image
              src="/assets/firmenkunden-geraeteservice-wien.webp"
              alt="Techniker an einer Waschmaschine im Objekt, typisch für Hotel, Wohnung und Hausverwaltung."
              width={1600}
              height={1066}
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">
              Im Objekt, nicht in der Werkstatt: Wäsche und Küche bleiben am Haus.
            </figcaption>
          </figure>
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Wartungsvertrag</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Bevor die Saison voll ist.
            </h2>
            <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Ein Wartungsvertrag legt Intervall und Umfang für die Geräte im Objekt fest. Geprüft, gereinigt und
              justiert wird, was zum Gerät gehört. Bei Hotel, Gastronomie und häufig genutzten Toren ist das
              Intervall kürzer als einmal im Jahr. Der Bericht sagt, was in Ordnung ist und was Aufmerksamkeit braucht.
            </p>
            <ol className="mt-8 border-t border-[color:var(--border)]">
              {contractLines.map((line, index) => (
                <li key={line} className="flex gap-4 border-b border-[color:var(--border)] py-3">
                  <span className="font-display text-sm tracking-[0.16em] text-[color:var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl font-light tracking-tight">{line}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm font-light leading-relaxed text-[color:var(--muted)]">
              {"Was geprüft wird, steht unter "}
              <Link href="/wartungsservice" className="border-b border-current">
                <span className="text-[color:var(--ink)]">Wartung</span>
              </Link>
              {", die Pauschalen unter "}
              <Link href="/preise" className="border-b border-current">
                <span className="text-[color:var(--ink)]">Preise</span>
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Prioritätsservice</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Wenn der Betrieb steht.
            </h2>
            <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
              Priorität heißt: Küche, Kühlung und der Zugang über das Tor kommen vor. In der Gastronomie ist oft Ware
              betroffen, im Hotel die Wäsche, in der Praxis der Tagesplan. Dringende Fälle wie Wasser oder ein
              ausgefallenes Kühlgerät versuchen wir im Wiener Raum oft noch am selben Tag. Den Termin stimmen wir ab.
            </p>
            <a href="#firmenkunden-anfrage" className="btn-primary mt-8">
              <span>Vorrang anfragen</span>
            </a>
          </div>
          <figure>
            <Image
              src="/assets/firmenkunden-kueche-gastronomie.webp"
              alt="Technikerin prüft ein Küchengerät. Für Gastronomie, Hotel und Büro, wenn die Küche steht."
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm font-light text-[color:var(--muted)]">
              Küche und Kühlung: dort trifft ein Ausfall den laufenden Betrieb.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Was im Objekt anfällt.
          </h2>
          <ol className="mt-12 border-t border-[color:var(--border)]">
            {offers.map((offer) => (
              <li
                key={offer.title}
                className="grid gap-4 border-b border-[color:var(--border)] py-8 sm:grid-cols-[8rem_1fr_auto] sm:items-end sm:gap-10"
              >
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  {offer.kicker}
                </p>
                <div>
                  <h3 className="font-display text-3xl font-light tracking-tight sm:text-4xl">{offer.title}</h3>
                  <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-[color:var(--muted)]">{offer.text}</p>
                </div>
                <Link href={offer.href} className="border-b border-current pb-1 text-sm">
                  <span className="text-[color:var(--ink)]">{offer.label}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[color:var(--bg-muted)] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Warum wir</p>
            <h2 className="font-display mt-6 text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Weniger Abstimmung. Klarere Rechnung.
            </h2>
          </div>
          <ol className="border-t border-[color:var(--border)]">
            {reasons.map((reason) => (
              <li key={reason.number} className="grid gap-2 border-b border-[color:var(--border)] py-6 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <p className="font-display text-sm tracking-[0.16em] text-[color:var(--accent)]">{reason.number}</p>
                <div>
                  <h3 className="font-display text-2xl font-light tracking-tight">{reason.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">{reason.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Ablauf</p>
          <h2 className="font-display mt-6 max-w-xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Vom ersten Anruf bis zur Rechnung.
          </h2>
          <ol className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number} className="bg-white p-8">
                <p className="font-display text-5xl font-light tracking-tight text-[color:var(--accent)]">{step.number}</p>
                <h3 className="font-display mt-6 text-2xl font-light tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt, bevor die Anfrage rausgeht." items={faqs} />

      <section id="firmenkunden-anfrage" className="scroll-mt-28 bg-white pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="mx-auto grid max-w-[88rem] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Objekt nennen.
            </h2>
            <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              Beschreiben Sie kurz Objekt und Anliegen. Wartung im Vertrag oder ein Ausfall mit Vorrang: wir melden
              uns zur Abstimmung. Noch kein Auftrag.
            </p>
            <ol className="mt-8 border-t border-[color:var(--border)]">
              {[
                "Firma, Hotel oder Hausverwaltung",
                "Standort und wer aufsperrt",
                "Geräte, Tore oder Anlagen",
                "Wartung, Vertrag oder Vorrang"
              ].map((item, index) => (
                <li key={item} className="flex gap-4 border-b border-[color:var(--border)] py-4">
                  <span className="font-display text-sm tracking-[0.16em] text-[color:var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl font-light tracking-tight">{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-[color:var(--border)] bg-white p-6 sm:p-10">
            <SimpleLeadForm
              requestType="firmenkunden"
              eyebrow="Firmenkunden"
              title="Anfrage für Ihr Objekt"
              description="Für Hotels, Hausverwaltungen, Gastronomie und Vermieter. Wir melden uns zur Abstimmung."
              nameLabel="Ansprechpartner"
              namePlaceholder="Vor- und Nachname"
              includeCompany
              companyLabel="Firma / Hausverwaltung"
              messageLabel="Ihr Anliegen"
              messagePlaceholder="Objekte, Geräte, Wartungsvertrag oder Priorität, Standort, wer aufsperrt …"
              submitLabel="Anfrage senden"
              phoneHref={siteConfig.phoneHref}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const serviceName = siteConfig.serviceName;
const email = siteConfig.email;
const phone = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;

export const metadata: Metadata = buildMetadata({
  title: "AGB | MONTER Reparatur & Service Wien",
  description:
    "AGB von MONTER Reparatur & Service: Auftrag, Termine, Preise, Ersatzteile, Zahlung und gesetzliche Gewährleistung für Reparaturen in Wien.",
  path: "/agb"
});

type Section = {
  id: string;
  number: string;
  title: string;
  paragraphs: ReactNode[];
};

const sections: Section[] = [
  {
    id: "geltung",
    number: "01",
    title: "Geltung",
    paragraphs: [
      `Diese Bedingungen gelten für Diagnose, Reparatur, Wartung, Montage und den Einbau von Ersatzteilen an Haushaltsgeräten, Klimageräten und Garagentoren durch ${serviceName}.`,
      <>
        Vertragspartner ist der im{" "}
        <Link href="/impressum" className="border-b border-current">
          Impressum
        </Link>{" "}
        genannte Rechtsträger. Abweichende Bedingungen des Kunden werden nur
        Vertragsinhalt, wenn wir sie schriftlich anerkennen. Eine individuelle
        Vereinbarung geht diesen Bedingungen vor.
      </>
    ]
  },
  {
    id: "vertrag",
    number: "02",
    title: "Anfrage und Vertrag",
    paragraphs: [
      "Eine Anfrage über ein Formular, per E-Mail oder telefonisch ist noch kein Auftrag. Der Vertrag kommt zustande, wenn wir einen Termin bestätigen oder mit der Leistung beginnen.",
      "Diese Bedingungen sind vor der Terminbestätigung auf dieser Website abrufbar. Mit der Bestätigung des Termins werden sie Vertragsinhalt."
    ]
  },
  {
    id: "leistung",
    number: "03",
    title: "Leistung",
    paragraphs: [
      "Wir prüfen das Gerät vor Ort. Eine Reparatur führen wir aus, wenn sie technisch möglich und sicher ist, ein passendes Ersatzteil verfügbar ist und der Aufwand im Verhältnis zum Gerät vertretbar bleibt.",
      "Wir dürfen von einer Reparatur abraten. Diagnose und Beratung sind erbrachte Leistungen, auch wenn danach nicht repariert wird. Eine Reparatur schulden wir erst, sobald wir sie nach der Diagnose zusagen."
    ]
  },
  {
    id: "mitwirkung",
    number: "04",
    title: "Mitwirkung",
    paragraphs: [
      "Der Kunde sorgt dafür, dass das Gerät erreichbar ist und eine entscheidungsbefugte Person anwesend ist. Strom, Wasser oder der Zugang zum Tor müssen je nach Gerät benutzbar sein.",
      "Modell und Fehlerbild gibt der Kunde so genau an, wie sie ihm bekannt sind. Wartezeit, weil der Zutritt fehlt oder das Gerät nicht erreichbar ist, dürfen wir als Arbeitszeit verrechnen."
    ]
  },
  {
    id: "termine",
    number: "05",
    title: "Termine",
    paragraphs: [
      "Ein bestätigter Termin ist ein Zeitfenster. Eine Uhrzeit auf die Minute sagen wir nur zu, wenn wir das ausdrücklich tun.",
      "Ist beim Eintreffen niemand anzutreffen, obwohl der Termin bestätigt war, dürfen wir die Anfahrt nach der Preisliste verrechnen."
    ]
  },
  {
    id: "preise",
    number: "06",
    title: "Preise",
    paragraphs: [
      <>
        Maßgeblich sind die Bruttopreise auf der Seite{" "}
        <Link href="/preise" className="border-b border-current">
          Preise
        </Link>
        , inklusive 20&nbsp;% Umsatzsteuer. Sie gelten, soweit wir vor dem Termin
        nichts anderes per E-Mail oder schriftlich zusagen.
      </>,
      "Die Anfahrt fällt pro Einsatz an, auch wenn nach der Diagnose nicht repariert wird. Weitere Arbeitseinheiten, Folgebesuche und Ersatzteile rechnen wir nach derselben Preisliste ab.",
      "Für Adressen ohne ausgewiesene Pauschale nennen wir die Anfahrt vor der Terminbestätigung. Steht eine Leistung nicht auf der Preisseite, gilt der Preis, den wir vor Beginn nennen."
    ]
  },
  {
    id: "zustimmung",
    number: "07",
    title: "Zustimmung vor Mehrarbeit",
    paragraphs: [
      "Arbeitsaufwand über die erste inkludierte Arbeitseinheit hinaus und jedes Ersatzteil stimmen wir vor dem Weiterarbeiten ab. Ohne diese Zustimmung setzen wir die Arbeit nicht fort und bauen kein Teil ein.",
      "Auf Wunsch nennen wir die voraussichtlichen Kosten, bevor wir über die erste Arbeitseinheit hinaus arbeiten."
    ]
  },
  {
    id: "ersatzteile",
    number: "08",
    title: "Ersatzteile",
    paragraphs: [
      "Wir verbauen Originalteile oder qualitativ gleichwertige, passende Teile. Welches Teil zum Einsatz kommt und was es kostet, sagen wir vor dem Einbau."
    ]
  },
  {
    id: "zahlung",
    number: "09",
    title: "Zahlung",
    paragraphs: [
      "Zu zahlen ist bei erbrachter Leistung, in bar, per Karte oder auf Rechnung per Überweisung. Die Rechnung weist die Umsatzsteuer aus.",
      "Gegenüber Unternehmern kann eine andere Zahlungsfrist schriftlich vereinbart werden."
    ]
  },
  {
    id: "foerderung",
    number: "10",
    title: "Geräte-Retter-Prämie",
    paragraphs: [
      "Die Geräte-Retter-Prämie ist eine öffentliche Förderung und kein Preisnachlass von uns. Ob sie zusteht und in welcher Höhe, richten sich nach den jeweiligen Förderbedingungen.",
      "Wir unterstützen bei der Abwicklung. Der Rechnungsbetrag bleibt geschuldet, soweit die Förderung ihn nicht abdeckt oder nicht gewährt wird."
    ]
  },
  {
    id: "gewaehrleistung",
    number: "11",
    title: "Gewährleistung",
    paragraphs: [
      "Verbrauchern stehen die gesetzlichen Gewährleistungsrechte zu. Eine zusätzliche Garantie über dieses Gesetz hinaus geben wir nicht.",
      "Mängel an der erbrachten Leistung bitten wir uns mitzuteilen, sobald sie sich zeigen. Gesetzliche Fristen bleiben davon unberührt. Ansprüche aus einer Herstellergarantie richten sich an den Hersteller."
    ]
  },
  {
    id: "haftung",
    number: "12",
    title: "Haftung",
    paragraphs: [
      "Für Vorsatz und grobe Fahrlässigkeit sowie für Schäden an Leben, Körper und Gesundheit haften wir nach dem Gesetz.",
      "Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten und nur für den vorhersehbaren, vertragstypischen Schaden. Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt."
    ]
  },
  {
    id: "widerruf",
    number: "13",
    title: "Widerruf",
    paragraphs: [
      "Schließt ein Verbraucher den Vertrag im Fernabsatz oder außerhalb unserer Geschäftsräume, kann er ihn innerhalb von 14 Tagen widerrufen, soweit das Gesetz das vorsieht.",
      "Verlangt der Verbraucher, dass wir vor Ablauf dieser Frist beginnen, und ist die Leistung vollständig erbracht, erlischt das Widerrufsrecht nach dem Gesetz. Für die bereits erbrachte Anfahrt, Diagnose oder Reparatur ist dann Wertersatz zu leisten, soweit das Gesetz das anordnet."
    ]
  },
  {
    id: "unternehmer",
    number: "14",
    title: "Unternehmer",
    paragraphs: [
      "Gegenüber Unternehmern, Hausverwaltungen und anderen Geschäftskunden gelten diese Bedingungen, soweit kein Rahmenvertrag entgegensteht.",
      "Gerichtsstand für Streitigkeiten mit Unternehmern ist das sachlich zuständige Gericht in Wien. Das UN-Kaufrecht ist ausgeschlossen."
    ]
  },
  {
    id: "schluss",
    number: "15",
    title: "Schluss",
    paragraphs: [
      "Es gilt österreichisches Recht. Zwingende Verbraucherschutzvorschriften des Staates, in dem der Verbraucher wohnt, bleiben unberührt.",
      "Ist eine Klausel unwirksam, bleibt der Rest in Kraft. An die Stelle der unwirksamen Klausel tritt die gesetzliche Regelung."
    ]
  }
];

export default function AgbPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">AGB</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.6rem]">
                Bedingungen für den Auftrag.
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Diese Bedingungen gelten, sobald wir einen Termin bestätigen. Sie regeln
                Leistung, Preise, Ersatzteile und Zahlung für {serviceName}.
              </p>
            </div>
            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Fragen zum Auftrag</p>
              <a
                href={`tel:${phoneHref}`}
                data-legal-phone
                className="font-display mt-4 block text-3xl font-light tracking-tight text-[color:var(--accent)] sm:text-4xl"
              >
                {phone}
              </a>
              <a href={`mailto:${email}`} className="mt-4 block text-sm font-light text-[color:var(--ink)]">
                {email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto grid max-w-[88rem] gap-px bg-[color:var(--border)] sm:grid-cols-3">
          <Link href="/impressum" className="bg-white px-6 py-8 transition hover:bg-[color:var(--bg-muted)] sm:px-8">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
              Vertragspartner
            </p>
            <p className="font-display mt-4 text-2xl font-light tracking-tight">Impressum</p>
          </Link>
          <Link href="/preise" className="bg-white px-6 py-8 transition hover:bg-[color:var(--bg-muted)] sm:px-8">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
              Preise
            </p>
            <p className="font-display mt-4 text-2xl font-light tracking-tight">Brutto, inkl. 20&nbsp;% USt.</p>
          </Link>
          <div className="bg-[color:var(--ink)] px-6 py-8 text-white sm:px-8">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/60">
              Verbraucher
            </p>
            <p className="font-display mt-4 text-2xl font-light tracking-tight">Gesetz bleibt vorrangig.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-20">
          <nav aria-label="Inhalt der AGB" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
              Inhalt
            </p>
            <ol className="mt-5 grid gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-baseline gap-3 text-sm font-light text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
                  >
                    <span className="w-6 shrink-0 tabular-nums text-[color:var(--accent)]">{section.number}</span>
                    <span className="border-b border-transparent group-hover:border-current">{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-[color:var(--border)] py-10 first:pt-0"
              >
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                  {section.number}
                </p>
                <h2 className="font-display mt-3 text-3xl font-light tracking-tight sm:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-5 grid gap-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-[1.02rem] font-light leading-relaxed text-[color:var(--ink)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

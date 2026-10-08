import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import RepairBookingCta from "../RepairBookingCta";
import { buildMetadata } from "../pageMetadata";
import { siteConfig } from "../siteConfig";

const serviceName = siteConfig.serviceName;
const privacyEmail = "datenschutz@monter.at";
const phone = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;

export const metadata: Metadata = buildMetadata({
  title: "Datenschutz | MONTER Reparatur & Service Wien",
  description:
    "Datenschutz von MONTER Reparatur & Service: welche Kundendaten bei einem Auftrag gespeichert werden, wie Formulare, Cookies und Anzeigen funktionieren, und welche Rechte Sie haben.",
  path: "/dsgvo"
});

type Section = {
  id: string;
  number: string;
  title: string;
  paragraphs: ReactNode[];
};

const sections: Section[] = [
  {
    id: "verantwortlich",
    number: "01",
    title: "Verantwortlicher",
    paragraphs: [
      <>
        Verantwortlich für die Daten auf dieser Website und in der Kundenakte ist der im{" "}
        <Link href="/impressum" className="border-b border-current">
          Impressum
        </Link>{" "}
        genannte Rechtsträger. Die Marke dieses Auftritts ist {serviceName}.
      </>,
      "Eine Datenschutzbeauftragte oder ein Datenschutzbeauftragter ist nicht bestellt. Das ist für unseren Betrieb gesetzlich nicht erforderlich.",
      <>
        Datenschutzanfragen richten Sie an{" "}
        <a href={`mailto:${privacyEmail}`} className="border-b border-current">
          {privacyEmail}
        </a>{" "}
        oder telefonisch unter{" "}
        <a href={`tel:${phoneHref}`} data-legal-phone className="border-b border-current">
          {phone}
        </a>
        .
      </>
    ]
  },
  {
    id: "ueberblick",
    number: "02",
    title: "Worum es geht",
    paragraphs: [
      "Wir verarbeiten personenbezogene Daten, um Reparaturen und Serviceleistungen zu erbringen und um diese Website zu betreiben. Personenbezogene Daten sind Angaben, mit denen wir Sie erkennen können, etwa Name, Telefonnummer, E-Mail-Adresse oder Adresse.",
      "Zwei Bereiche sind zu unterscheiden. Erstens die Kundenakte, sobald aus einer Anfrage ein Auftrag wird. Zweitens der Besuch dieser Website, einschließlich Formularen, Cookies und, nur nach Zustimmung, Statistik und Werbung.",
      "Wir verkaufen keine Daten und nutzen sie nicht für automatisierte Entscheidungen, die Ihnen gegenüber eine rechtliche Wirkung haben."
    ]
  },
  {
    id: "auftrag",
    number: "03",
    title: "Auftrag und Kundenakte",
    paragraphs: [
      "Geben Sie uns einen Auftrag, speichern wir die Daten, die wir dafür brauchen: Name, Telefonnummer, E-Mail-Adresse, Adresse des Einsatzorts, Kundentyp, bei Firmen den Firmennamen, Gerät, Marke oder Modell, Fehlerbild, Termin, durchgeführte Arbeiten, verbaute Ersatzteile, Rechnungsbetrag und Zahlungsart.",
      "Fotos, die Sie uns zum Gerät schicken, etwa vom Typenschild, gehören zur selben Akte.",
      "Rechtsgrundlage ist der Vertrag beziehungsweise die Schritte vor dem Vertrag, Artikel 6 Absatz 1 Buchstabe b DSGVO. Rechnungen und die dazugehörigen Unterlagen bewahren wir zusätzlich auf, weil das Steuer- und Unternehmensrecht das verlangt, Artikel 6 Absatz 1 Buchstabe c DSGVO, insbesondere § 132 Bundesabgabenordnung. Diese Unterlagen bleiben sieben Jahre gespeichert.",
      "Die übrige Kundenakte bewahren wir, solange der Auftrag läuft und danach, solange Ansprüche daraus noch offen sein können. Ist die gesetzliche Frist abgelaufen und besteht kein offener Vorgang mehr, löschen oder sperren wir die Daten.",
      "Kartenzahlung läuft über das Kartenterminal vor Ort. Vollständige Kartennummern speichern wir auf dieser Website nicht."
    ]
  },
  {
    id: "anfrage",
    number: "04",
    title: "Anfragen über die Website",
    paragraphs: [
      "Formulare für Reparatur, Ersatzteile, Firmenkunden, allgemeine Anliegen und Bewerbungen fragen je nach Formular ab: Name, Telefonnummer, E-Mail, Kundentyp, Firma, Einsatzadresse, Gerät, Modell, Dringlichkeit, Wunschtermin und Ihre Nachricht.",
      "Die Angaben werden als E-Mail an das zuständige Postfach bei uns gesendet, über Microsoft 365. Eine eigene Kundendatenbank auf der Website gibt es nicht. Wird aus der Anfrage ein Auftrag, übernehmen wir die nötigen Angaben in die Kundenakte nach Abschnitt 03.",
      "Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe b DSGVO, weil wir die Anfrage bearbeiten und einen Termin vorbereiten. Kommt kein Auftrag zustande, löschen wir die Anfrage, sobald sie erledigt ist und keine Rückfrage mehr zu erwarten ist.",
      "Zum Schutz der Formulare merken wir uns kurz die IP-Adresse der Anfrage, höchstens für einige Minuten und nur im Arbeitsspeicher des Servers. Damit begrenzen wir massenhafte automatische Absendungen. Rechtsgrundlage ist unser berechtigtes Interesse an einem funktionierenden Postfach, Artikel 6 Absatz 1 Buchstabe f DSGVO."
    ]
  },
  {
    id: "telefon",
    number: "05",
    title: "Telefon und E-Mail",
    paragraphs: [
      `Rufen Sie uns unter ${phone} an oder schreiben Sie an ${siteConfig.email}, verarbeiten wir die Daten, die Sie uns nennen, um den Vorgang zu klären. Gespräche zeichnen wir nicht auf.`,
      "Rechtsgrundlage ist wieder der Vertrag oder die vorvertragliche Anfrage. Eine E-Mail bleibt im Postfach, solange der Vorgang offen ist, und bei einem Auftrag danach in der Kundenakte."
    ]
  },
  {
    id: "newsletter",
    number: "06",
    title: "Newsletter",
    paragraphs: [
      "Für den Newsletter speichern wir die E-Mail-Adresse, die Sie eintragen. Rechtsgrundlage ist Ihre Einwilligung, Artikel 6 Absatz 1 Buchstabe a DSGVO und § 174 Telekommunikationsgesetz.",
      "Die Anmeldung kommt als E-Mail in unser Postfach. Wir nutzen die Adresse nur, um Sie über Leistungen und Angebote von MONTER zu informieren. Die Einwilligung können Sie jederzeit widerrufen, ein Hinweis dazu steht in jeder Aussendung. Danach löschen wir die Adresse, soweit wir sie nicht noch für den Nachweis der früheren Einwilligung brauchen."
    ]
  },
  {
    id: "bewerbung",
    number: "07",
    title: "Bewerbungen",
    paragraphs: [
      "Über das Karriere-Formular erhalten wir Name, Telefonnummer, E-Mail, die gewünschte Stelle und Ihre Nachricht. Dateien können Sie dort nicht hochladen.",
      "Wir verwenden diese Angaben nur für das Auswahlverfahren. Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe b DSGVO. Nach Abschluss des Verfahrens löschen wir die Bewerbung, außer Sie willigen in eine längere Aufbewahrung ein oder wir müssen sie zur Abwehr von Ansprüchen behalten."
    ]
  },
  {
    id: "cookies",
    number: "08",
    title: "Cookies und Einwilligung",
    paragraphs: [
      "Notwendige Cookies und ein lokaler Speicher setzen wir ohne Werbeeinwilligung. Optional sind Statistik und Marketing. Beides bleibt aus, bis Sie im Banner zustimmen. Die Wahl können Sie jederzeit über „Cookie Einstellungen“ im Footer ändern.",
      "Im lokalen Speicher des Browsers liegt unter dem Schlüssel monter-cookie-consent, ob Sie Statistik und Marketing erlaubt haben. Ohne diesen Eintrag würden wir bei jedem Besuch erneut fragen.",
      "Das Cookie monter_ad_source merkt sich für 90 Tage nur, ob Sie über eine Meta- oder ChatGPT-Anzeige gekommen sind. Der Wert ist ein Kennzeichen der Quelle, nicht Ihr Name. Damit zeigen wir die Telefonnummer, die zu dieser Anzeige gehört. Rechtsgrundlage ist unser berechtigtes Interesse, den Anruf der richtigen Kampagne zuordnen zu können, Artikel 6 Absatz 1 Buchstabe f DSGVO.",
      "Kommen Sie über eine ChatGPT-Anzeige, kann zusätzlich das Cookie monter_oppref für 90 Tage eine Klick-Kennung speichern. Wir verwenden sie nur, wenn Sie Marketing zugestimmt haben, um eine spätere Anfrage dieser Anzeige zuzuordnen."
    ]
  },
  {
    id: "analyse",
    number: "09",
    title: "Statistik",
    paragraphs: [
      "Stimmen Sie der Statistik zu, laden wir Google Analytics 4 und Vercel Web Analytics. Damit sehen wir, welche Seiten aufgerufen werden. Vercel setzt dafür kein Cookie. Es entsteht daraus kein Werbeprofil und es werden keine Anzeigen-Pixel geladen.",
      "Rechtsgrundlage ist Ihre Einwilligung, Artikel 6 Absatz 1 Buchstabe a DSGVO. Widerrufen Sie sie, laden wir Google Analytics bei späteren Besuchen nicht mehr. Google kann Daten in den USA verarbeiten, siehe Abschnitt 12."
    ]
  },
  {
    id: "marketing",
    number: "10",
    title: "Marketing",
    paragraphs: [
      "Stimmen Sie dem Marketing zu, laden wir den Google Tag Manager. Darüber können Google Ads, das Meta-Pixel und Microsoft Clarity ausgelöst werden. Zusätzlich laden wir den Anzeigenpixel von OpenAI für ChatGPT-Anzeigen.",
      "Microsoft Clarity kann aufzeichnen, wie eine Seite genutzt wird, etwa Mausbewegung, Klicks und Scrollen, damit wir den Aufbau der Seite verstehen.",
      "Schicken Sie danach ein Formular ab oder rufen Sie an, können E-Mail-Adresse und Telefonnummer in gekürzter, gehashter Form an Google und an die Conversions-Schnittstelle von OpenAI gehen, zusammen mit der aufgerufenen Seite, der IP-Adresse und dem Browsertyp. Damit lässt sich erkennen, ob eine Anzeige zu einer Anfrage geführt hat. Der Klartext Ihrer E-Mail bleibt bei uns.",
      "Rechtsgrundlage ist Ihre Einwilligung, Artikel 6 Absatz 1 Buchstabe a DSGVO. Ohne diese Zustimmung lösen wir keine dieser Tags aus und senden keine Conversion. Ein Widerruf wirkt für die Zukunft. Bereits geladene Tags der laufenden Sitzung können wir im Browser nicht rückwirkend aus dem Speicher nehmen."
    ]
  },
  {
    id: "empfaenger",
    number: "11",
    title: "Empfänger",
    paragraphs: [
      "Intern sehen die Daten nur Personen, die sie für Termin, Reparatur, Rechnung oder die Bearbeitung Ihrer Anfrage brauchen.",
      "Microsoft 365 übermittelt die Formular-E-Mails. Der Hoster der Website kann Verbindungsdaten in Protokollen sehen, etwa IP-Adresse, Zeitpunkt und aufgerufene Adresse, um den Betrieb und die Sicherheit der Seite zu gewährleisten.",
      "Nur nach der jeweiligen Zustimmung: Google (Analytics und Ads), Vercel (Web Analytics), Meta, Microsoft (Clarity) und OpenAI. Öffentliche Bewertungen, die wir auf der Website zeigen, stammen von Google. Dabei erhalten wir keine privaten Kontodaten der Bewertenden über das hinaus, was in der Bewertung öffentlich steht.",
      "Eine Behörde oder ein Gericht erhält Daten nur, wenn wir dazu verpflichtet sind."
    ]
  },
  {
    id: "drittland",
    number: "12",
    title: "Daten außerhalb der EU",
    paragraphs: [
      "Microsoft, Google, Vercel, Meta und OpenAI können Daten in den USA verarbeiten. Soweit diese Anbieter unter dem EU-US Data Privacy Framework zertifiziert sind, stützt sich die Übermittlung darauf. Ergänzend verwenden die Anbieter Standardvertragsklauseln der Europäischen Kommission.",
      "Eine Übermittlung zu Werbe- und Statistikzwecken findet nur statt, wenn Sie die passende Einwilligung gegeben haben. Der E-Mail-Versand der Formulare über Microsoft 365 erfolgt, weil wir die Anfrage sonst nicht beantworten können."
    ]
  },
  {
    id: "dauer",
    number: "13",
    title: "Wie lange wir speichern",
    paragraphs: [
      "Anfragen ohne Auftrag: bis der Vorgang erledigt ist.",
      "Auftrag und Kundenakte: für die Dauer des Auftrags und danach, solange Ansprüche offen sein können.",
      "Rechnungen und buchhaltungsrelevante Unterlagen: sieben Jahre.",
      "Newsletter: bis zum Widerruf.",
      "Bewerbungen: für das Auswahlverfahren.",
      "Cookie für die Anzeigen-Telefonnummer und die ChatGPT-Klick-Kennung: 90 Tage. Die Cookie-Entscheidung bleibt gespeichert, bis Sie sie löschen oder ändern.",
      "IP-Adresse zur Begrenzung der Formulare: nur wenige Minuten im Arbeitsspeicher."
    ]
  },
  {
    id: "pflicht",
    number: "14",
    title: "Müssen Sie Daten angeben?",
    paragraphs: [
      "Für einen Termin brauchen wir Name, eine Erreichbarkeit und den Einsatzort. Ohne diese Angaben können wir nicht kommen. Gerät und Fehlerbild brauchen wir, um den Einsatz vorzubereiten.",
      "Der Besuch der Website ist ohne Formular und ohne Statistik- oder Marketing-Zustimmung möglich. Die notwendigen Cookies aus Abschnitt 08 setzen wir dabei trotzdem."
    ]
  },
  {
    id: "rechte",
    number: "15",
    title: "Ihre Rechte",
    paragraphs: [
      <>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
        und Datenübertragbarkeit, außerdem das Recht, eine Einwilligung mit Wirkung für die Zukunft
        zu widerrufen. Beruht eine Verarbeitung auf Artikel 6 Absatz 1 Buchstabe f DSGVO, können
        Sie widersprechen. Schreiben Sie dafür an{" "}
        <a href={`mailto:${privacyEmail}`} className="border-b border-current">
          {privacyEmail}
        </a>
        .
      </>,
      "Ein Widerruf oder ein Widerspruch berührt nicht die Rechtmäßigkeit der Verarbeitung bis zu diesem Zeitpunkt. Daten, die wir noch gesetzlich aufbewahren müssen, etwa Rechnungen, löschen wir erst nach Ablauf dieser Frist. Bis dahin schränken wir die Nutzung auf diesen Zweck ein."
    ]
  },
  {
    id: "beschwerde",
    number: "16",
    title: "Beschwerde",
    paragraphs: [
      <>
        Sie können sich bei der Österreichischen Datenschutzbehörde beschweren, Barichgasse 40–42,
        1030 Wien,{" "}
        <a href="https://www.dsb.gv.at" className="border-b border-current" target="_blank" rel="noreferrer">
          www.dsb.gv.at
        </a>
        . Wir bitten Sie, uns vorher zu schreiben, damit wir das Anliegen direkt klären können. Dazu
        sind Sie nicht verpflichtet.
      </>
    ]
  }
];

export default function DsgvoPage() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
            <div className="reveal">
              <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">Datenschutz</p>
              <h1 className="font-display mt-8 text-balance text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.6rem]">
                Was wir speichern und warum.
              </h1>
              <p className="mt-8 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">
                Diese Hinweise gelten für die Website und für die Daten, die wir speichern, sobald
                Sie uns einen Auftrag geben. Stand: Oktober 2026.
              </p>
            </div>
            <div className="reveal border-l border-[color:var(--border)] py-2 pl-8">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Datenschutzanfrage</p>
              <a
                href={`mailto:${privacyEmail}`}
                className="font-display mt-4 block break-words text-2xl font-light tracking-tight text-[color:var(--accent)] sm:text-3xl"
              >
                {privacyEmail}
              </a>
              <a
                href={`tel:${phoneHref}`}
                data-legal-phone
                className="mt-4 block text-sm font-light text-[color:var(--ink)]"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto grid max-w-[88rem] gap-px bg-[color:var(--border)] sm:grid-cols-3">
          <Link href="/impressum" className="bg-white px-6 py-8 transition hover:bg-[color:var(--bg-muted)] sm:px-8">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
              Verantwortlicher
            </p>
            <p className="font-display mt-4 text-2xl font-light tracking-tight">Impressum</p>
          </Link>
          <div className="bg-white px-6 py-8 sm:px-8">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
              Auftrag
            </p>
            <p className="font-display mt-4 text-2xl font-light tracking-tight">Kundenakte und Rechnung</p>
          </div>
          <div className="bg-[color:var(--ink)] px-6 py-8 text-white sm:px-8">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/60">
              Werbung
            </p>
            <p className="font-display mt-4 text-2xl font-light tracking-tight">Nur nach Zustimmung.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-20">
          <nav aria-label="Inhalt des Datenschutzes" className="lg:sticky lg:top-28 lg:self-start">
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

      <RepairBookingCta legalPhone />
    </main>
  );
}

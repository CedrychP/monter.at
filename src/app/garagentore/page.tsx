import type { Metadata } from "next";
import InfoPageLayout, { type InfoSection } from "../InfoPageLayout";
import { HubDetailLinks, HubFaq, type HubFaqItem } from "../HubBlocks";
import { garageHubLinks } from "./garagePages";

const sections: InfoSection[] = [
  {
    title: "Was zur Garagentor-Reparatur gehört",
    body:
      "Wir arbeiten markenoffen an Sektional-, Schwing- und Rolltoren sowie an Holz- und Designtoren: Federpakete und Tragseile, Laufrollen, Scharniere und Lager, Laufschienen und Zargen, Dichtungen, Torantriebe mit Steuerung und Funk sowie Sicherheitseinrichtungen wie Lichtschranke und Kraftbegrenzung. Häufige Antriebsmarken wie Hörmann, Sommer, Marantec, Novoferm und Chamberlain sind Alltag für uns."
  },
  {
    title: "Einsatzgebiet Wien und Umgebung",
    body:
      "Wir fahren alle Wiener Bezirke sowie das nähere Niederösterreich an — von Einzelgaragen im Reihenhaus über Innenhof-Garagen im Altbau bis zu Sammelgaragen von Hausverwaltungen und gewerblichen Anlagen mit hoher Torfrequenz. Für Verwaltungen und Betriebe koordinieren wir Termine gebündelt, damit möglichst wenige Anfahrten nötig sind.",
    link: { label: "Alle Einsatzgebiete", href: "/einsatzgebiete" }
  },
  {
    title: "So läuft eine Reparatur ab",
    body:
      "Im Telefonat klären wir Torart, Antriebsmarke und Fehlerbild vorab — das entscheidet, welche Teile wir gleich mitbringen. Vor Ort prüfen wir Mechanik und Elektronik, nennen den Aufwand und führen die Arbeit nach Ihrer Freigabe durch. Häufige Verschleißteile wie Laufrollen, Seile und gängige Federgrößen sind meist direkt am Fahrzeug."
  },
  {
    title: "Preise und Anfahrt",
    body:
      "Für Garagentore gelten dieselben transparenten Sätze wie im übrigen Service: Anfahrt und Erstprüfung sind pauschaliert, Arbeitszeit und Material werden nachvollziehbar ausgewiesen. Eine Übersicht finden Sie auf der Seite Preise & Pauschalen — größere Arbeiten wie ein Antriebstausch bekommen vorab eine Einschätzung."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Kann ich eine gebrochene Torfeder selbst tauschen?",
    answer:
      "Bitte nicht. Torsionsfedern stehen auch gebrochen unter hoher Spannung und tragen fast das gesamte Torgewicht. Ohne Spannstäbe und ohne Sicherung des Torblatts besteht ernsthafte Verletzungsgefahr. Benutzen Sie das Tor bis zum Termin nicht weiter."
  },
  {
    question: "Mein Antrieb reagiert nicht mehr — ist der Motor kaputt?",
    answer:
      "Meist nicht. In vielen Fällen liegt die Ursache bei Handsender, Funkempfänger, Endlagen, Lichtschranke oder Steuerplatine. Wir prüfen in dieser Reihenfolge, damit kein intakter Motor unnötig getauscht wird."
  },
  {
    question: "Reparieren Sie auch alte Tore ohne Originalteile?",
    answer:
      "Ja. Bei älteren Toren, für die keine Originalteile mehr lieferbar sind, arbeiten wir mit passenden Alternativbauteilen oder gefertigten Ersatzteilen. Das hält bestehende Tore oft viele Jahre länger im Betrieb."
  },
  {
    question: "Wie oft sollte ein Garagentor gewartet werden?",
    answer:
      "Für private Garagen genügt in der Regel eine jährliche Wartung. Bei Sammelgaragen und gewerblichen Anlagen mit vielen Torfahrten pro Tag empfehlen wir halbjährliche Kontrollen — kraftbetätigte Tore im gewerblichen Umfeld unterliegen zudem einer regelmäßigen Prüfpflicht."
  },
  {
    question: "Wie schnell sind Sie bei einem blockierten Tor vor Ort?",
    answer:
      "Ein blockiertes Tor behandeln wir vorrangig, weil damit oft ein Fahrzeug eingeschlossen ist. Rufen Sie in solchen Fällen direkt an — telefonisch klären wir Fehlerbild und den nächstmöglichen Termin sofort."
  }
];

export const metadata: Metadata = {
  title: "Garagentor Reparatur Wien | MONTER Service",
  description:
    "Garagentor Reparatur in Wien & NÖ: Federbruch, Federwechsel, Torantriebe, Motoren, Laufrollen, Schienen und Wartung. Sektionaltor, Schwingtor, Rolltor — markenoffen, schnell vor Ort.",
  alternates: {
    canonical: "/garagentore"
  }
};

export default function GaragentoreHubPage() {
  return (
    <InfoPageLayout
      eyebrow="Garagentore"
      title="Garagentor Reparatur in Wien."
      intro="Klemmender Antrieb, gebrochene Feder, lautes Laufverhalten oder ein Tor, das nicht mehr schließt? Wir prüfen Mechanik und Elektronik, justieren präzise und tauschen Verschleißteile — für sichere, leise und zuverlässige Tore in Wien und Niederösterreich. Unten finden Sie die einzelnen Bereiche im Detail."
      heroNote="Beschreiben Sie Torart, Antrieb und Fehlerbild — wir kommen schnell vor Ort."
      primaryCta={{ label: "Garagentor-Reparatur anfragen", href: "/#kontakt" }}
      afterHero={
        <HubDetailLinks
          eyebrow={`${garageHubLinks.length} Bereiche`}
          title="Wobei wir am Garagentor helfen."
          intro="Jeder Bereich mit typischen Fehlerbildern, Vorgehen und den Daten, die wir für eine schnelle Einschätzung brauchen."
          links={garageHubLinks}
        />
      }
      sectionsEyebrow="Leistungsumfang & Ablauf"
      sectionsTitle="Markenoffen, von der Feder bis zur Steuerung."
      sections={sections}
      closingTitle="Garagentor klemmt in Wien?"
      closingText="Telefon ist der schnellste Weg zu einer Einschätzung. Wir klären Fehlerbild, Termin und Aufwand direkt im Gespräch."
    >
      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt: Garagentore." items={faqs} />
    </InfoPageLayout>
  );
}

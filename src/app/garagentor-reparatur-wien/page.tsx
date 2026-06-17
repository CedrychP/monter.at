import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard, type InfoSection } from "../InfoPageLayout";

const doorCards: InfoCard[] = [
  {
    number: "01",
    title: "Sektionaltore",
    text: "Klemmende Paneele, defekte Laufrollen oder verzogene Schienen — wir justieren und reparieren fachgerecht."
  },
  {
    number: "02",
    title: "Schwingtore",
    text: "Hängende oder schwergängige Schwingtore wieder in sauberen, sicheren Lauf bringen."
  },
  {
    number: "03",
    title: "Rolltore",
    text: "Reparatur von Rollpanzer, Wickelwelle und Führung — leise und zuverlässig."
  },
  {
    number: "04",
    title: "Holz- & Designtore",
    text: "Beschläge, Scharniere und Mechanik für hochwertige Tore — sorgfältig instand gesetzt."
  },
  {
    number: "05",
    title: "Torantriebe & Motoren",
    text: "Antrieb reagiert nicht, läuft unrund oder bleibt stehen? Wir prüfen Motor, Steuerung und Endlagen."
  },
  {
    number: "06",
    title: "Federn & Federbruch",
    text: "Gebrochene Torsions- oder Zugfedern werden passgenau auf Torgewicht und -größe getauscht."
  },
  {
    number: "07",
    title: "Laufrollen & Schienen",
    text: "Ausgeschlagene Rollen und beschädigte Schienen sorgen für lauten Lauf — wir tauschen und richten aus."
  },
  {
    number: "08",
    title: "Wartung & Sicherheitsprüfung",
    text: "Regelmäßige Wartung verlängert die Lebensdauer und hält Sicherheitsfunktionen zuverlässig."
  }
];

const sections: InfoSection[] = [
  {
    title: "Federbruch erkennen",
    body:
      "Ein lauter Knall, ein plötzlich sehr schweres Tor oder ein Antrieb, der das Tor nicht mehr hebt, deuten oft auf einen Federbruch hin. Bitte das Tor dann nicht weiter belasten — gebrochene Federn stehen unter Spannung und gehören in fachkundige Hände."
  },
  {
    title: "Antrieb & Elektronik",
    body:
      "Reagiert der Handsender nicht, bleibt das Tor auf halbem Weg stehen oder reversiert es ständig, prüfen wir Motor, Steuerplatine, Endlagen, Lichtschranke und Verkabelung gezielt — und entscheiden, ob Reparatur oder Bauteiltausch sinnvoll ist."
  },
  {
    title: "Lauf & Mechanik",
    body:
      "Lautes Rumpeln, Ruckeln oder Verkanten kommt meist von ausgeschlagenen Laufrollen, trockenen Lagern oder verstellten Schienen. Wir justieren, schmieren und tauschen Verschleißteile, damit das Tor wieder leise und gleichmäßig läuft."
  },
  {
    title: "Wartung lohnt sich",
    body:
      "Eine jährliche Wartung mit Prüfung von Federn, Seilen, Rollen, Antrieb und Sicherheitsfunktionen beugt teuren Ausfällen vor und hält das Tor sicher. Gerade bei häufig genutzten Toren zahlt sich das aus."
  }
];

export const metadata: Metadata = {
  title: "Garagentor Reparatur Wien | MONTER Service",
  description:
    "Garagentor Reparatur in Wien & NÖ: Federbruch, Federwechsel, Torantriebe, Motoren, Laufrollen, Schienen und Wartung. Sektionaltor, Schwingtor, Rolltor — markenoffen, schnell vor Ort.",
  alternates: {
    canonical: "/garagentor-reparatur-wien"
  }
};

export default function GaragentorReparaturPage() {
  return (
    <InfoPageLayout
      eyebrow="Garagentor-Reparatur"
      title="Garagentor Reparatur in Wien."
      intro="Klemmender Antrieb, gebrochene Feder, lautes Laufverhalten oder ein Tor, das nicht mehr schließt? Wir prüfen Mechanik und Elektronik, justieren präzise und tauschen Verschleißteile — für sichere, leise und zuverlässige Tore in Wien und Niederösterreich."
      heroNote="Beschreiben Sie Torart, Antrieb und Fehlerbild — wir kommen schnell vor Ort."
      primaryCta={{ label: "Garagentor-Reparatur anfragen", href: "/#kontakt" }}
      cardsEyebrow="Was wir reparieren"
      cardsTitle="Tore, Antriebe & Verschleißteile."
      cardsIntro="Markenoffen für alle gängigen Torsysteme und Antriebe — von der Feder bis zur Steuerung."
      cards={doorCards}
      sectionsEyebrow="Typische Fehlerbilder"
      sectionsTitle="Wann eine Reparatur sinnvoll ist."
      sections={sections}
      closingTitle="Garagentor klemmt in Wien?"
      closingText="Telefon ist der schnellste Weg zu einer Einschätzung. Wir klären Fehlerbild, Termin und Aufwand direkt im Gespräch."
    />
  );
}

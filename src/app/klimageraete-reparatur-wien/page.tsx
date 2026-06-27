import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard, type InfoSection } from "../InfoPageLayout";

const klimaCards: InfoCard[] = [
  {
    number: "01",
    title: "Split-Klimaanlagen",
    text: "Innen- und Außengerät — Kühlleistung, Entwässerung, Geräusche und Steuerung markenoffen instand gesetzt."
  },
  {
    number: "02",
    title: "Multi-Split-Anlagen",
    text: "Mehrere Innengeräte an einem Außengerät — gezielte Diagnose bei Einzel- und Systemfehlern."
  },
  {
    number: "03",
    title: "Monoblock-Geräte",
    text: "Mobile und fest installierte Geräte — Abluft, Entwässerung und Elektronik zuverlässig repariert."
  },
  {
    number: "04",
    title: "Kältemittel & Dichtheit",
    text: "Leckagen finden, fachgerecht dichten und Kältemittelkreislauf wieder sicher in Betrieb nehmen."
  },
  {
    number: "05",
    title: "Kompressor & Verdichter",
    text: "Startprobleme, Überhitzung und Leistungsverlust — Reparatur oder gezielter Bauteiltausch."
  },
  {
    number: "06",
    title: "Steuerung & Elektronik",
    text: "Platine, Sensoren, Fernbedienung und Smart-Module — Fehlercodes systematisch eingrenzen."
  },
  {
    number: "07",
    title: "Reinigung & Entlüftung",
    text: "Filter, Wärmetauscher und Lüfter — für bessere Luftqualität und volle Kühlleistung."
  },
  {
    number: "08",
    title: "Montage & Installation",
    text: "Neuanlagen und Ersatzgeräte fachgerecht montiert, geprüft und in Betrieb genommen."
  }
];

const sections: InfoSection[] = [
  {
    title: "Schwache Kühlleistung",
    body:
      "Wenn die Klimaanlage trotz Betrieb kaum kühlt, können verschmutzte Filter, Kältemittelverlust, defekte Lüfter oder Probleme am Verdichter die Ursache sein. Eine gezielte Diagnose spart Zeit und vermeidet unnötige Teiletausche."
  },
  {
    title: "Wasser & Entwässerung",
    body:
      "Tropfendes Wasser am Innengerät deutet oft auf blockierte Kondensatableitungen oder falsche Neigung hin. Wir prüfen Ablauf, Pumpe und Montage — bevor Feuchtigkeit Wände oder Böden schädigt."
  },
  {
    title: "Geräusche & Vibrationen",
    body:
      "Pfeifen, Rumpeln oder Vibrationen kommen von verschmutzten Lüftern, lockeren Befestigungen oder überlasteten Verdichtern. Reinigung, Justierung oder Bauteiltausch bringen Ruhe zurück."
  },
  {
    title: "Wartung vor der Saison",
    body:
      "Eine Wartung vor der Sommersaison hält Kühlleistung hoch und Stromverbrauch niedrig. Filter, Wärmetauscher und Dichtheit werden geprüft — für zuverlässigen Komfort in heißen Wochen."
  }
];

export const metadata: Metadata = {
  title: "Klimagerät Reparatur Wien | MONTER Service",
  description:
    "Klimagerät Reparatur in Wien & NÖ: Split-Anlagen, Multi-Split, Monoblock, Kältemittel, Kompressor, Steuerung, Wartung und Montage. Markenoffen, schnell vor Ort.",
  alternates: {
    canonical: "/klimageraete-reparatur-wien"
  }
};

export default function KlimageraeteReparaturPage() {
  return (
    <InfoPageLayout
      eyebrow="Klimageräte-Reparatur"
      title="Klimagerät Reparatur in Wien."
      intro="Kühlt die Anlage nicht mehr, tropft Wasser, zeigt Fehlercodes oder macht ungewöhnliche Geräusche? Wir prüfen Kühlkreis, Elektronik und Entwässerung — und reparieren Split-, Multi-Split- und Monoblock-Geräte markenoffen in Wien und Niederösterreich."
      heroNote="Beschreiben Sie Gerätetyp, Fehlerbild und Standort — wir melden uns zur Terminabstimmung."
      primaryCta={{ label: "Klimagerät-Reparatur anfragen", href: "/#kontakt" }}
      cardsEyebrow="Was wir reparieren"
      cardsTitle="Klimaanlagen & Kühltechnik."
      cardsIntro="Von der Split-Anlage bis zum Verdichter — markenoffen für gängige Hersteller und Systeme."
      cards={klimaCards}
      sectionsEyebrow="Typische Fehlerbilder"
      sectionsTitle="Wann eine Reparatur sinnvoll ist."
      sections={sections}
      closingTitle="Klimaanlage fällt in Wien aus?"
      closingText="Telefon ist der schnellste Weg zu einer Einschätzung. Wir klären Fehlerbild, Termin und Aufwand direkt im Gespräch."
    />
  );
}

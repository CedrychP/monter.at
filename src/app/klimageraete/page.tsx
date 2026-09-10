import type { Metadata } from "next";
import InfoPageLayout, { type InfoSection } from "../InfoPageLayout";
import { HubDetailLinks, HubFaq, type HubFaqItem } from "../HubBlocks";
import { klimaHubLinks } from "./klimaPages";
import { buildMetadata } from "../pageMetadata";

const sections: InfoSection[] = [
  {
    title: "Was zum Klimaservice gehört",
    body:
      "Wir arbeiten markenoffen an Split-, Multi-Split- und Monoblock-Systemen: Kühlleistung und Kältemittelkreis, Kompressor und Verdichter, Lüfter und Wärmetauscher, Kondensatableitung, Steuerplatine, Sensoren und Fernbedienung. Dazu kommen Wartung, Reinigung sowie Montage und Inbetriebnahme neuer Anlagen — inklusive Dichtheitsprüfung."
  },
  {
    title: "Typische Fehlerbilder",
    body:
      "Schwache Kühlleistung trotz Dauerbetrieb, Eisbildung am Verdampfer, tropfendes Wasser am Innengerät, pfeifende oder rumpelnde Lüfter, ein Gerät, das sich ständig abschaltet, oder Fehlercodes im Display. Jedes dieser Bilder hat mehrere mögliche Ursachen — deshalb steht die Diagnose vor dem Teiletausch."
  },
  {
    title: "Einsatzgebiet Wien und Umgebung",
    body:
      "Wir betreuen alle Wiener Bezirke und das nähere Niederösterreich: Wohnungen und Häuser, Büros und Ordinationen, Gastronomie sowie Serverräume mit dauerhafter Kühllast. Für Gewerbekunden mit mehreren Innengeräten planen wir Wartungen gebündelt, damit der Betrieb möglichst wenig gestört wird.",
    link: { label: "Alle Einsatzgebiete", href: "/einsatzgebiete" }
  },
  {
    title: "Preise, Termine und Saison",
    body:
      "Anfahrt und Erstprüfung sind pauschaliert, Arbeitszeit und Material werden nachvollziehbar ausgewiesen — die Übersicht finden Sie auf der Seite Preise & Pauschalen. In Hitzeperioden sind Termine knapp: Eine Wartung im Frühjahr ist deutlich einfacher zu bekommen als eine Reparatur in der ersten Hitzewelle."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Warum kühlt meine Klimaanlage plötzlich schlechter?",
    answer:
      "Am häufigsten sind verschmutzte Filter und Lamellen die Ursache — dann hilft eine Reinigung. Bleibt die Leistung danach schwach, kommen Kältemittelverlust, ein defekter Lüfter oder ein belasteter Verdichter in Frage. Das lässt sich nur mit Messung sauber unterscheiden."
  },
  {
    question: "Aus dem Innengerät tropft Wasser — ist das gefährlich?",
    answer:
      "Für das Gerät selbst meist nicht, für Wand und Boden schon. Ursache ist in der Regel eine blockierte Kondensatableitung oder eine falsche Neigung des Innengeräts. Schalten Sie das Gerät ab und melden sich zeitnah, bevor Feuchtigkeit ins Mauerwerk zieht."
  },
  {
    question: "Wie oft sollte eine Klimaanlage gewartet werden?",
    answer:
      "Bei normaler Nutzung im Wohnbereich einmal jährlich, am besten vor der Sommersaison. Bei gewerblichem Dauerbetrieb, in Gastronomie oder in Serverräumen empfehlen wir halbjährliche Kontrollen."
  },
  {
    question: "Darf Kältemittel einfach nachgefüllt werden?",
    answer:
      "Nein, und ein sinkender Füllstand ist immer ein Hinweis auf eine Undichtigkeit. Arbeiten am Kältemittelkreis unterliegen Vorschriften: Wir suchen zuerst die Leckage, beheben sie und befüllen erst danach — inklusive Dichtheitsprüfung und Dokumentation."
  },
  {
    question: "Montieren Sie auch neue Klimaanlagen?",
    answer:
      "Ja. Wir installieren Split- und Monoblock-Systeme inklusive Leitungsführung, Wanddurchführung, Vakuumierung, Dichtheitsprüfung und Inbetriebnahme. Beim Austausch prüfen wir vorab, ob bestehende Leitungen und Halterungen weiterverwendet werden können."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Klimaanlage Service & Reparatur Wien | MONTER",
  description:
    "Klimaanlage Service in Wien: Wartung, Reparatur und Montage für Split, Multi-Split und Monoblock. Markenoffen, vor Ort in Wien und NÖ.",
  path: "/klimageraete"
});

export default function KlimageraeteHubPage() {
  return (
    <InfoPageLayout
      eyebrow="Klimageräte"
      title="Klimaanlage Service und Reparatur in Wien."
      intro="Kühlt die Anlage nicht mehr, tropft Wasser, zeigt Fehlercodes oder macht ungewöhnliche Geräusche? Wir prüfen Kühlkreis, Elektronik und Entwässerung — und reparieren Split-, Multi-Split- und Monoblock-Geräte markenoffen in Wien und Niederösterreich. Unten finden Sie die einzelnen Bereiche im Detail."
      heroNote="Beschreiben Sie Gerätetyp, Fehlerbild und Standort — wir melden uns zur Terminabstimmung."
      primaryCta={{ label: "Klimagerät-Reparatur anfragen", href: "/reparatur-buchen" }}
      afterHero={
        <HubDetailLinks
          eyebrow={`${klimaHubLinks.length} Bereiche`}
          title="Wobei wir am Klimagerät helfen."
          intro="Von der Split-Anlage bis zum Verdichter — jeder Bereich mit typischen Fehlerbildern und dem passenden Vorgehen."
          links={klimaHubLinks}
        />
      }
      sectionsEyebrow="Leistungsumfang & Ablauf"
      sectionsTitle="Markenoffen, vom Filter bis zum Kältekreis."
      sections={sections}
      closingTitle="Klimaanlage fällt in Wien aus?"
      closingText="Telefon ist der schnellste Weg zu einer Einschätzung. Wir klären Fehlerbild, Termin und Aufwand direkt im Gespräch."
    >
      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt: Klimageräte." items={faqs} />
    </InfoPageLayout>
  );
}

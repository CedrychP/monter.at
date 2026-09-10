import type { Metadata } from "next";
import InfoPageLayout, { type InfoSection } from "../InfoPageLayout";
import { HubDetailLinks, HubFaq, type HubFaqItem } from "../HubBlocks";
import { applianceHubLinks } from "./appliancePages";
import { buildMetadata } from "../pageMetadata";

const sections: InfoSection[] = [
  {
    title: "Was zur Haushaltsgeräte-Reparatur gehört",
    body:
      "Wir sind Reparaturdienst für Elektro- und Haushaltsgeräte in Wien: Waschmaschine, Waschtrockner, Trockner, Geschirrspüler, Backofen und Herd, Kühl- und Tiefkühlgerät, Dunstabzug und Fernseher — freistehend und als Einbaugerät. Typische Arbeiten sind Pumpen und Ventile, Heizelemente und Sensoren, Türverriegelungen und Dichtungen, Lager und Antriebe sowie Steuerelektronik. Markenoffen, auch bei älteren Altgeräten, solange Ersatzteile verfügbar sind.",
    link: { label: "Waschmaschine Reparatur Wien", href: "/haushaltsgeraete/waschmaschine-reparatur-wien" }
  },
  {
    title: "Erst Diagnose, dann Entscheidung",
    body:
      "Vor jedem Teiletausch steht die Fehlersuche: Fehlercode auslesen, Bauteile messen, Wasser- und Stromweg prüfen. Erst danach sagen wir, welches Teil betroffen ist, was es kostet und ob sich die Reparatur bei Gerätealter und Zustand noch rechnet. Wenn ein Austausch die vernünftigere Lösung ist, sagen wir das offen."
  },
  {
    title: "Einsatzgebiet Wien und Umgebung",
    body:
      "Haushaltsgeräte Reparatur in Wien heißt bei uns alle 23 Bezirke plus das nähere Niederösterreich — Klosterneuburg, Vösendorf, Mödling und das übrige Umland gehören zum regelmäßigen Einsatz. Für Privathaushalte, Vermieter, Hausverwaltungen und Gewerbe. Bei Wasserschäden oder ausgefallenen Kühl- und Tiefkühlgeräten behandeln wir Anfragen vorrangig. Im Burgenland, in Oberösterreich, der Steiermark und Salzburg sind Techniker vor Ort im Einsatz.",
    link: { label: "Klosterneuburg, Vösendorf & NÖ", href: "/einsatzgebiete/niederoesterreich" }
  },
  {
    title: "Preise und Ersatzteile",
    body:
      "Anfahrt und Diagnose sind pauschaliert, Arbeitszeit und Material werden nachvollziehbar ausgewiesen — die Übersicht finden Sie auf der Seite Preise & Pauschalen. Gängige Verschleißteile führen wir mit, seltenere Teile bestellen wir nach der Diagnose. Deshalb hilft es, Marke, Modellnummer und Fehlercode schon beim Anruf bereitzuhaben."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Welche Daten brauchen Sie für eine erste Einschätzung?",
    answer:
      "Gerätetyp, Marke, Modellnummer vom Typenschild, den angezeigten Fehlercode und eine kurze Beschreibung des Problems. Mit diesen Angaben können wir am Telefon meist schon sagen, welche Teile wir mitbringen sollten."
  },
  {
    question: "Lohnt sich die Reparatur bei einem älteren Gerät?",
    answer:
      "Das hängt an Gerätealter, Zustand, Ersatzteilpreis und Energieverbrauch. Als Orientierung: Liegt die Reparatur deutlich unter der Hälfte eines gleichwertigen Neugeräts und ist das Gerät sonst in Ordnung, ist die Instandsetzung meist sinnvoll. Wir rechnen das im Einzelfall offen durch."
  },
  {
    question: "Reparieren Sie auch Einbaugeräte?",
    answer:
      "Ja. Einbaugeräte in Küchenzeilen bauen wir für die Reparatur fachgerecht aus und wieder ein. Bei Wasserschäden an Einbaugeräten ist Eile wichtig, damit Möbelkorpus und Boden keinen Folgeschaden nehmen."
  },
  {
    question: "Bekomme ich eine Gewährleistung auf die Reparatur?",
    answer:
      "Ja, auf durchgeführte Arbeiten und eingebaute Teile leisten wir Gewährleistung. Die Reparatur wird dokumentiert, sodass Sie im Bedarfsfall einen belastbaren Nachweis haben."
  },
  {
    question: "Wie schnell ist ein Termin möglich?",
    answer:
      "Das hängt von Bezirk und Auslastung ab. Dringende Fälle wie Wasseraustritt oder ein ausgefallenes Tiefkühlgerät ziehen wir vor — rufen Sie in solchen Fällen direkt an, das ist deutlich schneller als das Formular."
  },
  {
    question: "Reparieren Sie auch alte Elektrogeräte und Altgeräte?",
    answer:
      "Ja, solange Ersatzteile beschaffbar sind. Bei älteren Haushaltsgeräten prüfen wir zuerst die Teilelage und rechnen den Aufwand gegen ein gleichwertiges Neugerät. Wenn die Reparatur sich nicht mehr lohnt, sagen wir das vor der Bestellung."
  },
  {
    question: "Kommen Sie auch nach Klosterneuburg oder Vösendorf?",
    answer:
      "Ja. Klosterneuburg, Vösendorf und das nähere Wiener Umland fahren wir regelmäßig an — mit den niederösterreichischen Anfahrtssätzen, dafür oft ähnlich kurzfristig wie in Wien."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Haushaltsgeräte Reparatur Wien | MONTER",
  description:
    "Haushaltsgeräte Reparatur Wien: Elektrogeräte und Reparaturdienst für Waschmaschine, Geschirrspüler, Kühlschrank, Trockner, Backofen. Markenoffen, inkl. MwSt.",
  path: "/haushaltsgeraete"
});

export default function HaushaltsgeraeteHubPage() {
  return (
    <InfoPageLayout
      eyebrow="Haushaltsgeräte"
      title="Haushaltsgeräte Reparatur in Wien."
      intro="Haushaltsgeräte Reparatur Wien: Wir sind der Reparaturdienst für Elektrogeräte — Waschmaschine, Geschirrspüler, Backofen, Kühlgerät, Trockner, Dunstabzug oder Fernseher. Wir suchen den Fehler, nennen den Aufwand und reparieren markenoffen in Wien, Klosterneuburg, Vösendorf und dem näheren Niederösterreich. Unten jedes Gerät mit typischen Fehlerbildern."
      heroNote="Nennen Sie Gerät, Modellnummer und Fehlercode — dann bringen wir die passenden Teile gleich mit."
      primaryCta={{ label: "Reparatur anfragen", href: "/reparatur-buchen" }}
      afterHero={
        <HubDetailLinks
          eyebrow={`${applianceHubLinks.length} Gerätearten`}
          title="Welches Gerät macht Probleme?"
          intro="Jede Seite mit typischen Fehlerbildern, der Frage Reparatur oder Austausch und den Daten, die wir für die Anfrage brauchen."
          links={applianceHubLinks}
        />
      }
      sectionsEyebrow="Leistungsumfang & Ablauf"
      sectionsTitle="Markenoffen, mit Diagnose vor dem Teiletausch."
      sections={sections}
      closingTitle="Gerät defekt in Wien?"
      closingText="Telefon ist der schnellste Weg zu einer Einschätzung. Wir klären Fehlerbild, Termin und Aufwand direkt im Gespräch."
    >
      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt: Haushaltsgeräte." items={faqs} />
    </InfoPageLayout>
  );
}

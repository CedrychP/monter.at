import type { Metadata } from "next";
import InfoPageLayout, { type InfoSection } from "../InfoPageLayout";
import { HubDetailLinks, HubFaq, type HubDetailLink, type HubFaqItem } from "../HubBlocks";
import { coreRegions, partnerRegions } from "./regionPages";

const toHubLinks = (regions: typeof coreRegions): HubDetailLink[] =>
  regions.map((region) => ({
    label: region.name,
    href: `/einsatzgebiete/${region.slug}`,
    text: region.short
  }));

const sections: InfoSection[] = [
  {
    title: "Wien ist unser Kerngebiet",
    body:
      "Unser Standort liegt in Floridsdorf, und der größte Teil unserer Einsätze findet in Wien statt. Hier fahren wir alle 23 Bezirke mit eigenen Technikern an, mit einheitlicher Anfahrt und Terminen oft schon binnen ein bis zwei Tagen. Dasselbe gilt für das Wiener Umland in Niederösterreich und für das nördliche Burgenland — alles, was im Ein-Stunden-Radius liegt, ist für uns Alltagsgeschäft."
  },
  {
    title: "Wie die Anfahrt berechnet wird",
    body:
      "Innerhalb Wiens beträgt die Anfahrt 80 € für Haushaltsgeräte und 110 € für Garagentor-Arbeiten. In Niederösterreich sind es 100 € beziehungsweise 150 €. Liegt die Fahrzeit für An- und Abfahrt über einer Stunde, gilt eine Pauschale von 200 €. Alle Beträge exklusive USt. und pro Einsatz vor Ort. Sie erfahren die Anfahrtskosten am Telefon, sobald die Adresse feststeht — nicht erst auf der Rechnung."
  },
  {
    title: "Außerhalb: Partnerbetriebe statt langer Anfahrt",
    body:
      "In den übrigen Bundesländern arbeiten wir mit Partnerbetrieben. Das sagen wir offen, weil es die ehrlichere Lösung ist: Ein Techniker, der aus Wien nach Innsbruck fährt, verursacht mehr Anfahrtskosten als die Reparatur selbst wert ist. Sie stellen die Anfrage bei uns, wir klären das Fehlerbild technisch vor und geben den Fall an einen Fachbetrieb in Ihrer Region weiter. Ansprechpartner bleiben wir."
  },
  {
    title: "Was die telefonische Vorklärung bringt",
    body:
      "Unabhängig davon, wer den Termin vor Ort übernimmt: Am Telefon ordnen wir den Fehlercode ein, sagen offen, ob sich eine Reparatur bei Gerätealter und Zustand noch rechnet, und benennen die wahrscheinlich benötigten Teile. Halten Sie dafür Marke, die vollständige Modellnummer vom Typenschild und den angezeigten Fehlercode bereit."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Kommt MONTER in ganz Österreich vor Ort?",
    answer:
      "Mit eigenen Technikern fahren wir Wien, Niederösterreich und das nördliche Burgenland an. In den übrigen Bundesländern läuft der Einsatz über Partnerbetriebe: Anfrage, technische Vorklärung und Koordination übernehmen wir, die Arbeit vor Ort erledigt ein Fachbetrieb aus Ihrer Region."
  },
  {
    question: "Warum kein eigener Standort in Graz oder Linz?",
    answer:
      "Weil wir keine Präsenz behaupten, die es nicht gibt. Wir haben einen Standort in Wien. Ein regionaler Partnerbetrieb ist schneller bei Ihnen und günstiger als eine Anfahrt über 200 Kilometer — und Sie wissen von vornherein, wer kommt."
  },
  {
    question: "Gelten die Preise von der Preisseite überall?",
    answer:
      "Die Anfahrts- und Arbeitssätze auf unserer Preisseite gelten für Einsätze unseres eigenen Teams in Wien, Niederösterreich und im Nordburgenland. Bei Partnerbetrieben gelten deren Sätze — die nennen wir Ihnen vor dem Termin, damit es keine Überraschung gibt."
  },
  {
    question: "Meine Region steht nicht in der Liste. Was jetzt?",
    answer:
      "Die Ortslisten sind Beispiele, keine abschließende Aufzählung. Rufen Sie kurz an: Wir sagen Ihnen ehrlich, ob ein Einsatz von uns oder einem Partner sinnvoll ist — oder ob ein Betrieb direkt bei Ihnen die bessere Wahl wäre."
  },
  {
    question: "Werden Garagentore und Klimageräte überall betreut?",
    answer:
      "Das gesamte Spektrum aus Haushaltsgeräten, Garagentoren und Klimageräten bieten wir in Wien, Niederösterreich und im Nordburgenland an. Ob ein Partnerbetrieb in Ihrer Region auch Torarbeiten oder Klimatechnik abdeckt, klären wir bei der Anfrage — das unterscheidet sich von Betrieb zu Betrieb."
  }
];

export const metadata: Metadata = {
  title: "Einsatzgebiete in Österreich | MONTER Reparatur & Service",
  description:
    "Wo MONTER arbeitet: Wien, Niederösterreich und Nordburgenland mit eigenem Team, die übrigen Bundesländer über Partnerbetriebe. Anfahrtskosten und Ablauf transparent erklärt.",
  alternates: {
    canonical: "/einsatzgebiete"
  }
};

export default function EinsatzgebieteHubPage() {
  return (
    <InfoPageLayout
      eyebrow="Einsatzgebiete"
      title="Wo wir arbeiten."
      intro="Wien ist und bleibt unser Kerngebiet: alle 23 Bezirke mit eigenem Team, kurze Wege, kurzfristige Termine. Dazu kommen Niederösterreich und das nördliche Burgenland im Ein-Stunden-Radius. Für die übrigen Bundesländer arbeiten wir mit Partnerbetrieben — offen benannt, statt eine Präsenz zu behaupten, die es nicht gibt."
      heroNote="Nennen Sie Postleitzahl und Fehlerbild — wir sagen Ihnen sofort, wer kommt und was die Anfahrt kostet."
      primaryCta={{ label: "Reparatur anfragen", href: "/#kontakt" }}
      afterHero={
        <HubDetailLinks
          eyebrow="Eigenes Team"
          title="Unser Kerngebiet."
          intro="Hier arbeiten unsere eigenen Techniker mit festen Anfahrtssätzen und dem vollen Leistungsumfang aus Haushaltsgeräten, Garagentoren und Klimageräten."
          links={toHubLinks(coreRegions)}
        />
      }
      sectionsEyebrow="Anfahrt & Ablauf"
      sectionsTitle="Kurze Wege in Wien, klare Ansage überall sonst."
      sections={sections}
      closingTitle="Unsicher, ob wir zu Ihnen kommen?"
      closingText="Ein kurzer Anruf mit Postleitzahl und Gerät genügt. Wir sagen Ihnen direkt, ob unser Team kommt, ob ein Partnerbetrieb übernimmt und womit Sie bei der Anfahrt rechnen müssen."
    >
      <HubDetailLinks
        eyebrow="Über Partnerbetriebe"
        title="Die übrigen Bundesländer."
        intro="Anfrage und technische Vorklärung laufen über uns, den Einsatz vor Ort übernimmt ein geprüfter Fachbetrieb aus Ihrer Region."
        links={toHubLinks(partnerRegions)}
      />
      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt: Einsatzgebiete." items={faqs} />
    </InfoPageLayout>
  );
}

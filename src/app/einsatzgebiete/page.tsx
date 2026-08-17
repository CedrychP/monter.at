import type { Metadata } from "next";
import InfoPageLayout, { type InfoSection } from "../InfoPageLayout";
import { HubDetailLinks, HubFaq, type HubDetailLink, type HubFaqItem } from "../HubBlocks";
import { additionalRegions, coreRegions, unservedStates } from "./regionPages";

const toHubLinks = (regions: typeof coreRegions): HubDetailLink[] =>
  regions.map((region) => ({
    label: region.name,
    href: `/einsatzgebiete/${region.slug}`,
    text: region.short
  }));

const unservedList = `${unservedStates.slice(0, -1).join(", ")} und ${unservedStates.at(-1)}`;

const sections: InfoSection[] = [
  {
    title: "Wien und Niederösterreich sind unser Kerngebiet",
    body:
      "Unser Standort liegt in Floridsdorf, und der größte Teil unserer Einsätze findet in Wien und im Wiener Umland statt. Hier fahren wir alle 23 Bezirke und das nähere Niederösterreich mit eigenen Technikern an, mit festen Anfahrtssätzen und Terminen oft schon binnen ein bis zwei Tagen. Das gesamte Leistungsspektrum aus Haushaltsgeräten, Garagentoren und Klimageräten gibt es in diesem Gebiet."
  },
  {
    title: "Anfahrt in Wien und Niederösterreich",
    body:
      "Innerhalb Wiens beträgt die Anfahrt 80 € für Haushaltsgeräte und 110 € für Garagentor-Arbeiten. In Niederösterreich sind es 100 € beziehungsweise 150 €. Liegt die Fahrzeit für An- und Abfahrt über einer Stunde, gilt eine Pauschale von 200 €. Alle Beträge exklusive USt. und pro Einsatz vor Ort."
  },
  {
    title: "Burgenland, Oberösterreich, Steiermark und Salzburg",
    body:
      "In diesen vier Bundesländern arbeiten Techniker vor Ort — also nicht als Anfahrt aus Wien, sondern aus der Region. Der Schwerpunkt liegt dort bei Haushaltsgeräten. Weil die Anfahrt stark von der konkreten Adresse abhängt, nennen wir sie am Telefon, sobald die Adresse feststeht, und nicht erst auf der Rechnung."
  },
  {
    title: `Nicht im Einsatzgebiet: ${unservedList}`,
    body:
      "Hier haben wir derzeit keine Techniker und nehmen deshalb auch keine Aufträge an. Das sagen wir lieber offen, als eine Anfrage aufzunehmen und Sie danach zu enttäuschen. Sollte sich das ändern, finden Sie die Region hier."
  },
  {
    title: "Was die telefonische Vorklärung bringt",
    body:
      "Unabhängig von der Region ordnen wir am Telefon den Fehlercode ein, sagen offen, ob sich eine Reparatur bei Gerätealter und Zustand noch rechnet, und benennen die wahrscheinlich benötigten Teile. Halten Sie dafür Marke, die vollständige Modellnummer vom Typenschild und den angezeigten Fehlercode bereit — damit bringt der Techniker die passenden Teile gleich mit."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "In welchen Bundesländern ist MONTER tätig?",
    answer:
      "In Wien, Niederösterreich, dem Burgenland, Oberösterreich, der Steiermark und Salzburg. Wien und Niederösterreich betreuen wir von unserem Standort aus, in den anderen vier Bundesländern arbeiten Techniker vor Ort. In Kärnten, Tirol und Vorarlberg sind wir derzeit nicht tätig."
  },
  {
    question: "Was kostet die Anfahrt außerhalb von Wien und Niederösterreich?",
    answer:
      "Das hängt von der Adresse ab, deshalb nennen wir dort keinen festen Betrag auf der Website. Sie erfahren die Anfahrtskosten am Telefon, bevor ein Termin vereinbart wird. Für Wien und Niederösterreich gelten die festen Sätze von der Preisseite."
  },
  {
    question: "Werden Garagentore und Klimageräte überall betreut?",
    answer:
      "Das gesamte Spektrum aus Haushaltsgeräten, Garagentoren und Klimageräten bieten wir in Wien, Niederösterreich und im Burgenland an. In Oberösterreich, der Steiermark und Salzburg liegt der Schwerpunkt bei Haushaltsgeräten — ob für Tor oder Klimaanlage ein Termin möglich ist, klären wir bei der Anfrage."
  },
  {
    question: "Meine Gemeinde steht nicht in der Liste. Was jetzt?",
    answer:
      "Die Ortslisten auf den Regionalseiten sind Beispiele, keine abschließende Aufzählung. Wenn Ihr Bundesland dabei ist, rufen Sie einfach an — wir sagen Ihnen, ob und wann ein Termin möglich ist."
  },
  {
    question: "Wie schnell ist ein Termin möglich?",
    answer:
      "In Wien meist binnen ein bis zwei Tagen, im Wiener Umland binnen zwei bis drei Tagen. In den weiter entfernten Bundesländern planen wir gezielter, dort ist mehr Vorlauf üblich. Dringende Fälle wie ein Wasseraustritt oder ein ausgefallenes Tiefkühlgerät ziehen wir überall vor — rufen Sie dann direkt an."
  }
];

export const metadata: Metadata = {
  title: "Einsatzgebiete in Österreich | MONTER Reparatur & Service",
  description:
    "Wo MONTER arbeitet: Wien und Niederösterreich vom eigenen Standort, dazu Burgenland, Oberösterreich, Steiermark und Salzburg mit Technikern vor Ort. Anfahrt und Ablauf transparent.",
  alternates: {
    canonical: "/einsatzgebiete"
  }
};

export default function EinsatzgebieteHubPage() {
  return (
    <InfoPageLayout
      eyebrow="Einsatzgebiete"
      title="Wo wir arbeiten."
      intro="Wien und Niederösterreich sind unser Kerngebiet: alle 23 Bezirke und das Wiener Umland mit eigenem Team, festen Anfahrtssätzen und kurzfristigen Terminen. Dazu kommen Burgenland, Oberösterreich, Steiermark und Salzburg mit Technikern vor Ort. In Kärnten, Tirol und Vorarlberg sind wir derzeit nicht tätig — das sagen wir lieber vorab."
      heroNote="Nennen Sie Postleitzahl und Fehlerbild — wir sagen Ihnen sofort, ob und wann ein Termin möglich ist."
      primaryCta={{ label: "Reparatur anfragen", href: "/#kontakt" }}
      afterHero={
        <HubDetailLinks
          eyebrow="Kerngebiet"
          title="Wien und Niederösterreich."
          intro="Eigenes Team, feste Anfahrtssätze und der volle Leistungsumfang aus Haushaltsgeräten, Garagentoren und Klimageräten."
          links={toHubLinks(coreRegions)}
        />
      }
      sectionsEyebrow="Anfahrt & Ablauf"
      sectionsTitle="Kurze Wege in Wien, klare Ansage überall sonst."
      sections={sections}
      closingTitle="Unsicher, ob wir zu Ihnen kommen?"
      closingText="Ein kurzer Anruf mit Postleitzahl und Gerät genügt. Wir sagen Ihnen direkt, ob ein Termin möglich ist und womit Sie bei der Anfahrt rechnen müssen."
    >
      <HubDetailLinks
        eyebrow="Techniker vor Ort"
        title="Weitere Bundesländer."
        intro="Hier arbeiten Techniker aus der Region, statt aus Wien anzufahren. Schwerpunkt Haushaltsgeräte, Anfahrt je nach Adresse."
        links={toHubLinks(additionalRegions)}
      />
      <HubFaq eyebrow="Häufige Fragen" title="Kurz geklärt: Einsatzgebiete." items={faqs} />
    </InfoPageLayout>
  );
}

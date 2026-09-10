import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard, type InfoSection } from "../InfoPageLayout";
import { HubFaq, type HubFaqItem } from "../HubBlocks";
import { buildMetadata } from "../pageMetadata";

const cards: InfoCard[] = [
  {
    title: "Anlieferung",
    text: "Lieferservice für Großgeräte in Wien: Wir bringen das Gerät zum Aufstellort — auch in höhere Stockwerke nach Absprache."
  },
  {
    title: "Anschluss & Aufbau",
    text: "Fachgerechter Anschluss an Strom, Wasser und Abfluss inklusive Ausrichten, Funktionsprüfung und kurzer Einweisung."
  },
  {
    title: "Einbau & Montage",
    text: "Montage von Einbaugeräten, passgenau in der Nische — Backofen, Geschirrspüler, Kühlschrank."
  },
  {
    title: "Altgeräte-Mitnahme",
    text: "Auf Wunsch nehmen wir Ihr Altgerät mit und führen es der fachgerechten Entsorgung zu."
  }
];

const sections: InfoSection[] = [
  {
    title: "Lieferservice mit Anschluss in der Nähe",
    body:
      "Wir liefern Waschmaschine, Trockner, Geschirrspüler, Kühl- und Gefriergerät in Wien und ins nähere Umland, stellen auf und schließen an. Der Termin ist gebunden — nicht „irgendwann in einem Zeitfenster von acht Stunden“, sondern abgestimmt."
  },
  {
    title: "Sauber angeschlossen statt selbst gemacht",
    body:
      "Gerade bei Wasch- und Spülgeräten ist der korrekte Anschluss entscheidend, um Wasserschäden zu vermeiden. Wir schließen fachgerecht an und prüfen auf Dichtheit und Funktion."
  },
  {
    title: "Einbaugeräte passgenau montiert",
    body:
      "Backöfen, Geschirrspüler oder Kühlgeräte zum Einbau müssen exakt ausgerichtet und sicher befestigt sein. Wir übernehmen Montage und Inbetriebnahme."
  },
  {
    title: "Alles aus einer Hand",
    body:
      "Lieferung, Montage, Anschluss und Altgeräte-Mitnahme lassen sich in einem Termin kombinieren — das spart Zeit und Wege. Wenn unsicher ist, ob das Altgerät noch reparierbar wäre, klären wir das vorher."
  }
];

const faqs: HubFaqItem[] = [
  {
    question: "Gibt es einen Lieferservice für Großgeräte mit Anschluss und Aufbau in meiner Nähe?",
    answer:
      "Ja, in Wien und im näheren Niederösterreich. Wir liefern, stellen auf, schließen an und nehmen auf Wunsch das Altgerät mit. Nennen Sie Gerät, Aufstellort und Stockwerk — dann sagen wir Termin und Aufwand."
  },
  {
    question: "Liefern Sie auch Trockner inklusive Installation und Mitnahme des alten Geräts?",
    answer:
      "Ja. Trockner mit Lieferung, Anschluss und Altgeräte-Mitnahme in Wien ist Alltag. Wenn das alte Gerät noch reparierbar ist, sagen wir das vorher — oft ist eine Reinigung günstiger als ein Neukauf."
  },
  {
    question: "Schließen Sie auch Einbaugeräte an?",
    answer:
      "Ja. Geschirrspüler, Backofen und Einbau-Kühlschrank montieren wir in der Nische, inklusive Wasser, Abwasser und Strom. Front und Maß der Nische sollten vorab bekannt sein."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Lieferservice Großgeräte Wien | Anschluss & Aufbau | MONTER",
  description:
    "Lieferservice für Großgeräte in Wien: Lieferung, Anschluss, Aufbau und Altgeräte-Mitnahme für Waschmaschine, Trockner, Kühlschrank. In der Nähe, aus einer Hand.",
  path: "/lieferung-montage"
});

export default function LieferungMontagePage() {
  return (
    <InfoPageLayout
      eyebrow="Lieferung & Montage"
      title="Lieferservice für Großgeräte — Anschluss und Aufbau."
      intro="Lieferservice für Großgeräte in Ihrer Nähe: Wir liefern, montieren und schließen fachgerecht an — inklusive Funktionsprüfung und auf Wunsch Mitnahme des Altgeräts. Waschmaschine, Trockner, Geschirrspüler, Kühlschrank: in Wien und im Umland."
      heroNote="Nennen Sie Gerät, Aufstellort und Wunschtermin — wir koordinieren Lieferung und Montage."
      primaryCta={{ label: "Lieferung & Montage anfragen", href: "/reparatur-buchen" }}
      cardsEyebrow="Leistungen"
      cardsTitle="Vom Karton zum laufenden Gerät."
      cardsIntro="Wir übernehmen den kompletten Ablauf — markenoffen in Wien und Umgebung."
      cards={cards}
      sectionsEyebrow="Gut zu wissen"
      sectionsTitle="Fachgerecht angeschlossen."
      sections={sections}
      closingTitle="Lieferung & Montage planen."
      closingText="Sagen Sie uns, welches Gerät wohin soll — wir kümmern uns um den Rest."
    >
      <HubFaq eyebrow="Häufige Fragen" title="Lieferung & Anschluss: kurz geklärt." items={faqs} />
    </InfoPageLayout>
  );
}

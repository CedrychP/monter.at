import type { Metadata } from "next";
import InfoPageLayout, { type InfoCard, type InfoSection } from "../InfoPageLayout";

const cards: InfoCard[] = [
  {
    title: "Mitnahme bei Lieferung",
    text: "Liefern wir Ihr neues Gerät, nehmen wir das Altgerät auf Wunsch direkt mit — praktisch in einem Termin."
  },
  {
    title: "Fachgerechte Entsorgung",
    text: "Elektroaltgeräte gehören nicht in den Restmüll. Wir führen sie der ordnungsgemäßen Entsorgung und Verwertung zu."
  },
  {
    title: "Umweltgerechte Verwertung",
    text: "Wertstoffe werden recycelt, Schadstoffe fachgerecht behandelt — gut für Umwelt und Ressourcen."
  },
  {
    title: "Abbau & Abtransport",
    text: "Auf Wunsch demontieren wir das Altgerät am Aufstellort und transportieren es sicher ab."
  }
];

const sections: InfoSection[] = [
  {
    title: "Warum fachgerechte Entsorgung wichtig ist",
    body:
      "Elektro- und Elektronikgeräte enthalten Wertstoffe und teils Schadstoffe. Eine fachgerechte Entsorgung schützt die Umwelt und entspricht den gesetzlichen Vorgaben für Elektroaltgeräte."
  },
  {
    title: "Am einfachsten im Zuge der Lieferung",
    body:
      "Wenn wir ein neues Gerät liefern und montieren, ist die Mitnahme des Altgeräts der bequemste Weg. Sagen Sie uns einfach vorab Bescheid."
  },
  {
    title: "Reparieren statt entsorgen?",
    body:
      "Bevor ein Gerät entsorgt wird, lohnt oft ein kurzer Blick: Manchmal ist eine wirtschaftliche Reparatur möglich. Wir geben Ihnen eine ehrliche Einschätzung."
  }
];

export const metadata: Metadata = {
  title: "Altgeräteentsorgung Wien | Elektrogeräte entsorgen | MONTER",
  description:
    "Altgeräteentsorgung in Wien: fachgerechte Entsorgung und Verwertung von Elektroaltgeräten, Mitnahme bei Lieferung, Abbau und Abtransport. Umweltgerecht und unkompliziert.",
  alternates: {
    canonical: "/altgeraeteentsorgung"
  }
};

export default function AltgeraeteentsorgungPage() {
  return (
    <InfoPageLayout
      eyebrow="Altgeräteentsorgung"
      title="Altgeräte fachgerecht entsorgen."
      intro="Altes Gerät muss weg? Wir nehmen Elektroaltgeräte mit, bauen sie bei Bedarf ab und führen sie der umweltgerechten Entsorgung und Verwertung zu — am einfachsten direkt im Zuge der Lieferung."
      heroNote="Sagen Sie uns, welches Gerät abgeholt werden soll — wir koordinieren die Mitnahme."
      primaryCta={{ label: "Entsorgung anfragen", href: "/kontakt" }}
      cardsEyebrow="Leistungen"
      cardsTitle="Sauber abgeholt & verwertet."
      cards={cards}
      sectionsEyebrow="Gut zu wissen"
      sectionsTitle="Umweltgerecht entsorgen."
      sections={sections}
      closingTitle="Altgerät abholen lassen."
      closingText="Nennen Sie uns Gerät und Standort — wir kümmern uns um die fachgerechte Entsorgung."
    />
  );
}

export type LieferPrice = {
  service: string;
  price: string;
  note: string;
  highlight?: boolean;
};

/** Bruttopreise inkl. 20 % MwSt. Quelle: festgelegte Liefer- und Montagesätze. */
export const lieferPrices: LieferPrice[] = [
  {
    service: "Komfortplus",
    price: "150 €",
    note: "Lieferung, Montage, Auspacken und Altgerätmitnahme in einem Termin. Die Anfahrtserhöhung ab 50 km und die Keine-Lift-Pauschale kommen dazu, wenn sie anfallen.",
    highlight: true
  },
  {
    service: "Lieferung",
    price: "85 €",
    note: "Lieferung allein, ohne Montage, Auspacken oder Altgerätmitnahme."
  },
  {
    service: "Montage & Installation",
    price: "90 €",
    note: "Montage und Anschluss allein, ohne Lieferung."
  },
  {
    service: "Anfahrtserhöhung ab 50 km",
    price: "65 €",
    note: "Zusätzlich zur Lieferung, einmal pro Auftrag, ab einer Lieferentfernung von 50 km."
  },
  {
    service: "Altgerätmitnahme",
    price: "35 €",
    note: "Mitnahme und Entsorgung allein. Im Komfortplus-Paket ist sie enthalten."
  },
  {
    service: "Auspackservice",
    price: "25 €",
    note: "Auspacken allein. Im Komfortplus-Paket ist es enthalten."
  },
  {
    service: "Keine-Lift-Pauschale, normale Geräte",
    price: "20 €",
    note: "Wenn kein Lift vorhanden ist und das Gerät getragen werden muss."
  },
  {
    service: "Keine-Lift-Pauschale, größere Geräte",
    price: "35 €",
    note: "Dieselbe Pauschale bei größeren Geräten. Welcher Satz gilt, sagen wir vor dem Termin, sobald das Gerät feststeht."
  }
];

export const lieferPricesVatNote = "Alle Beträge inklusive 20 % MwSt.";

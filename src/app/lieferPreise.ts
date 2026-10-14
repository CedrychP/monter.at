export type LieferPrice = {
  service: string;
  price: string;
  note: string;
  highlight?: boolean;
};

/** Brutto aus den Nettosätzen, inklusive 20 % MwSt. */
export const lieferPrices: LieferPrice[] = [
  {
    service: "Komfortplus",
    price: "180 €",
    note: "Lieferung, Montage, Auspacken und Altgerätmitnahme in einem Termin. Die Anfahrtserhöhung ab 50 km und die Keine-Lift-Pauschale kommen dazu, wenn sie anfallen.",
    highlight: true
  },
  {
    service: "Lieferung",
    price: "102 €",
    note: "Lieferung allein, ohne Montage, Auspacken oder Altgerätmitnahme."
  },
  {
    service: "Montage & Installation",
    price: "108 €",
    note: "Montage und Anschluss allein, ohne Lieferung."
  },
  {
    service: "Anfahrtserhöhung ab 50 km",
    price: "78 €",
    note: "Zusätzlich zur Lieferung, einmal pro Auftrag, ab einer Lieferentfernung von 50 km."
  },
  {
    service: "Altgerätmitnahme",
    price: "42 €",
    note: "Mitnahme und Entsorgung allein. Im Komfortplus-Paket ist sie enthalten."
  },
  {
    service: "Auspackservice",
    price: "30 €",
    note: "Auspacken allein. Im Komfortplus-Paket ist es enthalten."
  },
  {
    service: "Keine-Lift-Pauschale, normale Geräte",
    price: "24 €",
    note: "Wenn kein Lift vorhanden ist und das Gerät getragen werden muss."
  },
  {
    service: "Keine-Lift-Pauschale, größere Geräte",
    price: "42 €",
    note: "Dieselbe Pauschale bei größeren Geräten. Welcher Satz gilt, sagen wir vor dem Termin, sobald das Gerät feststeht."
  }
];

export const lieferPricesVatNote = "Alle Beträge brutto, inklusive 20 % MwSt.";

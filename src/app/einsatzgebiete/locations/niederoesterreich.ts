import type { LocationPage } from "../locationPages";

/**
 * Niederösterreichische Städte, die wir vom Wiener Standort aus regelmäßig
 * anfahren. Aufgenommen wird nur, wo eigener Inhalt trägt — Entfernung,
 * Baubestand und Terminlogik unterscheiden sich hier real.
 */
export const niederoesterreichCities: LocationPage[] = [
  {
    regionSlug: "niederoesterreich",
    slug: "st-poelten",
    name: "St. Pölten",
    postalCodes: ["3100", "3105", "3109"],
    metaTitle: "Gerätereparatur St. Pölten | MONTER Service",
    description:
      "Haushaltsgeräte-Reparatur in St. Pölten: Innenstadt, Viehofen, Spratzern und Umgebung. Diagnose vor dem Teiletausch, Anfahrt und Termin vorab geklärt.",
    h1: "Reparatur in St. Pölten.",
    short: "Landeshauptstadt, rund eine Stunde von Wien — Termine gebündelt geplant.",
    intro:
      "St. Pölten ist die niederösterreichische Landeshauptstadt und liegt rund eine Stunde von unserem Wiener Standort entfernt. Termine planen wir hier gebündelt mit anderen Einsätzen entlang der Westachse, wodurch die Anfahrt für Sie kalkulierbar bleibt.",
    character:
      "Der Baubestand ist gemischt: gründerzeitliche und Nachkriegshäuser in der Innenstadt, große Wohnanlagen in Wagram und Viehofen, dazu weitläufige Einfamilienhausgebiete in Spratzern, Stattersdorf und Pottenbrunn. In den Häusern stehen Waschmaschinen und Gefriergeräte häufig im Keller oder in einer eigenen Waschküche, was den Zugang einfach, die Umgebungsbedingungen aber feuchter macht.",
    focus: [
      "Waschmaschinen und Gefriergeräte in Waschküchen und Kellern",
      "Einbaugeräte in Wohnanlagen mit einheitlicher Ausstattung",
      "Geschirrspüler mit Verkalkung — die Wasserhärte ist hier höher als in Wien",
      "Garagentore und Antriebe an Einfamilienhäusern"
    ],
    sections: [
      {
        title: "Wasserhärte als Faktor",
        body:
          "In Teilen Niederösterreichs ist das Wasser härter als in Wien, das überwiegend Quellwasser mit geringer Härte führt. Für Geschirrspüler und Waschmaschinen heißt das mehr Kalkeintrag: verkalkte Heizstäbe, träge Umwälzpumpen, schlechtere Spülergebnisse. Ein regelmäßig kontrollierter Enthärter und die richtige Salzdosierung verhindern hier mehr Schäden als jede Reparatur."
      },
      {
        title: "Termin und Anfahrt",
        body:
          "Für Niederösterreich gilt ein Anfahrtssatz von 100 € für Haushaltsgeräte und 150 € für Garagentor-Arbeiten, jeweils exklusive USt. Liegt An- und Abfahrt zusammen über einer Stunde, greift eine Pauschale von 200 €. Für St. Pölten planen wir Termine mit etwas mehr Vorlauf als in Wien, weil wir Fahrten in dieselbe Richtung bündeln."
      },
      {
        title: "Was Sie bereithalten sollten",
        body:
          "Marke, vollständige Modellnummer vom Typenschild und der angezeigte Fehlercode. Bei dieser Entfernung zählt Vorbereitung doppelt: Fehlt das passende Ersatzteil, wird eine zweite Anfahrt nötig, und die kostet Sie mehr als die zehn Minuten, die das Ablesen des Typenschilds braucht."
      }
    ],
    faq: [
      {
        question: "Wie schnell ist ein Termin in St. Pölten möglich?",
        answer:
          "Üblich sind einige Tage, weil wir Fahrten in dieselbe Richtung bündeln. Bei dringenden Fällen wie einem Wasseraustritt oder ausgefallenem Tiefkühlgerät rufen Sie direkt an — dann suchen wir die nächste Möglichkeit."
      },
      {
        question: "Was kostet die Anfahrt nach St. Pölten?",
        answer:
          "Der niederösterreichische Satz von 100 € für Haushaltsgeräte beziehungsweise 150 € für Torarbeiten, exklusive USt. Übersteigt die Fahrzeit für An- und Abfahrt eine Stunde, gilt die Pauschale von 200 €. Was in Ihrem Fall zutrifft, sagen wir vor dem Termin."
      },
      {
        question: "Mein Geschirrspüler spült schlecht, obwohl er sauber ist. Warum?",
        answer:
          "Häufig ist Kalk die Ursache: Der Heizstab arbeitet schlechter, die Sprüharme sind teilweise verlegt. Prüfen Sie Salz- und Klarspülerstand und die Enthärtereinstellung. Bleibt es dabei, sehen wir uns Umwälzpumpe und Heizung an."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "niederoesterreich",
    slug: "wiener-neustadt",
    name: "Wiener Neustadt",
    postalCodes: ["2700"],
    metaTitle: "Gerätereparatur Wiener Neustadt | MONTER Service",
    description:
      "Haushaltsgeräte-Reparatur in Wiener Neustadt: Innenstadt, Josefstadt, Föhrenwald und Umgebung. Diagnose vor dem Teiletausch, Anfahrt vorab genannt.",
    h1: "Reparatur in Wiener Neustadt.",
    short: "Südlich von Wien an der Südbahn — regelmäßig angefahren.",
    intro:
      "Wiener Neustadt erreichen wir über die Südautobahn in rund 45 Minuten und fahren die Stadt regelmäßig an. Weil viele unserer Einsätze im Wiener Süden liegen, lassen sich Termine hier gut mit anderen Fahrten kombinieren.",
    character:
      "Die Stadt hat einen kompakten historischen Kern mit Nachkriegsbestand und dazu ausgedehnte Wohn- und Siedlungsgebiete Richtung Föhrenwald und Civitas Nova. In den Wohnblöcken stehen Geräte meist frei aufgestellt, in den Siedlungshäusern gibt es Waschküchen, Garagen und Gefriertruhen. Ein regionales Thema ist die Wasserhärte, die höher liegt als in Wien.",
    focus: [
      "Freistehende Waschmaschinen und Geschirrspüler in Wohnblöcken",
      "Verkalkte Heizstäbe und Umwälzpumpen bei hartem Wasser",
      "Gefriertruhen in Kellern und Garagen",
      "Garagentore und Antriebe in Siedlungshäusern"
    ],
    sections: [
      {
        title: "Gefriergeräte in Garagen und Kellern",
        body:
          "Viele Haushalte stellen die Gefriertruhe in Garage oder Keller. Im Winter kann die Umgebungstemperatur dort unter den Bereich fallen, für den die Regelung ausgelegt ist — das Gerät kühlt dann schlechter oder taut ab, obwohl technisch nichts defekt ist. Wenn Ihr Gerät im Winter Probleme macht und im Sommer nicht, ist das der erste Verdacht."
      },
      {
        title: "Anfahrt und Terminlage",
        body:
          "Es gilt der niederösterreichische Anfahrtssatz von 100 € für Haushaltsgeräte und 150 € für Torarbeiten, exklusive USt. Bei An- und Abfahrt über einer Stunde greift die Pauschale von 200 €. Termine legen wir bevorzugt in Tage, an denen wir ohnehin im Wiener Süden unterwegs sind."
      },
      {
        title: "Was den Termin verkürzt",
        body:
          "Marke, vollständige Modellnummer und Fehlercode. Bei Kühl- und Gefriergeräten ist zusätzlich hilfreich zu wissen, wo das Gerät steht und wie warm es dort ist — das ändert die Verdachtsdiagnose deutlich."
      }
    ],
    faq: [
      {
        question: "Kommen Sie auch in die Umgebung, etwa nach Neunkirchen oder Ternitz?",
        answer:
          "Ja, das südliche Niederösterreich ist Einsatzgebiet. Ob die Ein-Stunden-Pauschale greift, hängt von der genauen Adresse ab — wir sagen es Ihnen vor dem Termin."
      },
      {
        question: "Meine Gefriertruhe in der Garage taut im Winter ab. Ist sie defekt?",
        answer:
          "Oft nicht. Viele Geräte sind für Raumtemperatur ausgelegt; bei Kälte schaltet der Kompressor zu selten ein. Prüfen Sie die Klimaklasse auf dem Typenschild — wir sagen Ihnen am Telefon, ob der Aufstellort das Problem ist."
      },
      {
        question: "Wie schnell ist ein Termin möglich?",
        answer:
          "Meist binnen zwei bis vier Werktagen, abhängig davon, wann wir im Süden unterwegs sind. Dringende Fälle ziehen wir vor — rufen Sie dann direkt an."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "niederoesterreich",
    slug: "baden",
    name: "Baden",
    postalCodes: ["2500"],
    metaTitle: "Gerätereparatur Baden bei Wien | MONTER Service",
    description:
      "Haushaltsgeräte-Reparatur in Baden bei Wien: Kurstadt mit Biedermeierbestand und Villen. Erfahrung mit Einbaugeräten, Toren und Klimaanlagen.",
    h1: "Reparatur in Baden bei Wien.",
    short: "Kurstadt mit Biedermeierbestand und Villen, gut erreichbar über die A2.",
    intro:
      "Baden liegt rund 40 Minuten von unserem Standort und gehört zu unseren regelmäßigen Zielen im Wiener Süden. Die Stadt hat einen eigenen Charakter, der sich auch technisch auswirkt: viel historischer Bestand und ein hoher Anteil an Villen.",
    character:
      "Im Zentrum prägen Biedermeier- und Gründerzeithäuser das Bild, teils denkmalgeschützt, mit den entsprechenden Einschränkungen bei Klimaanlagen und Fassadendurchführungen. In den Villengebieten am Hang Richtung Weilburg und Rauhenstein finden wir hochwertige Einbaugeräte, eigene Garagen und häufiger Klimaanlagen. Dazu kommt ein hoher Anteil an Zweitwohnsitzen.",
    focus: [
      "Hochwertige Einbaugeräte in Villen und sanierten Altbauwohnungen",
      "Klimaanlagen mit Einschränkungen im geschützten Bestand",
      "Garagentore und Antriebe an Hanggrundstücken",
      "Geräte in Zweitwohnsitzen mit Zugang über Dritte"
    ],
    sections: [
      {
        title: "Klimaanlagen im geschützten Bestand",
        body:
          "Bei denkmalgeschützten Fassaden ist ein sichtbares Außengerät oft nicht zulässig. Machbar sind dann Monoblock-Geräte oder Lösungen mit Durchführung zu einer nicht einsehbaren Seite. Wir sagen Ihnen, was technisch geht und welche Leistung realistisch ist; die Abstimmung mit Behörde und Hausverwaltung bleibt bei Ihnen."
      },
      {
        title: "Zweitwohnsitze brauchen eine Kontaktperson",
        body:
          "Wenn eine Wohnung nicht dauerhaft bewohnt ist, hängt der Termin daran, dass jemand aufschließt. Nennen Sie bei der Anfrage eine Person vor Ort und eine Kostenfreigabe — sonst wird bei dieser Entfernung schnell eine zweite Anfahrt nötig, die Sie nicht brauchen."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Es gilt der niederösterreichische Satz von 100 € für Haushaltsgeräte und 150 € für Torarbeiten, exklusive USt.; bei mehr als einer Stunde An- und Abfahrt die Pauschale von 200 €. Baden erreichen wir zügig über die A2, weshalb die Ein-Stunden-Regel hier meist nicht greift."
      }
    ],
    faq: [
      {
        question: "Darf ich in einem denkmalgeschützten Haus eine Klimaanlage einbauen?",
        answer:
          "Technisch ist meist eine Lösung möglich, rechtlich hängt es von Denkmalschutz, Hausordnung und Zustimmung der Eigentümergemeinschaft ab. Wir beraten zur Technik und sagen offen, wenn eine Splitanlage an Ihrer Fassade nicht sinnvoll umsetzbar ist."
      },
      {
        question: "Ich bin nur am Wochenende in Baden. Sind Termine dann möglich?",
        answer:
          "Randzeiten und Samstage sind nach Absprache möglich. Fragen Sie das gleich bei der Anfrage mit, dann sagen wir Ihnen, was frei ist und ob ein Aufschlag anfällt."
      },
      {
        question: "Reparieren Sie auch hochwertige Einbaugeräte wie Miele oder Gaggenau?",
        answer:
          "Ja. Bei diesen Marken ist die Teileversorgung meist über viele Jahre gegeben, was Reparaturen auch bei älteren Geräten wirtschaftlich macht. Nennen Sie die Modellnummer vom Typenschild für die Vorabklärung."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "niederoesterreich",
    slug: "moedling",
    name: "Mödling",
    postalCodes: ["2340"],
    metaTitle: "Gerätereparatur Mödling | MONTER Service",
    description:
      "Haushaltsgeräte-Reparatur in Mödling: Altstadt, Hinterbrühl-Nähe und Wohngebiete. Kurze Anfahrt aus Wien, Diagnose vor dem Teiletausch.",
    h1: "Reparatur in Mödling.",
    short: "Direkt an der Wiener Stadtgrenze — kurze Wege, schnelle Termine.",
    intro:
      "Mödling grenzt praktisch an Wien und ist für uns eine der kürzesten Fahrten in Niederösterreich. Dadurch sind Termine hier fast so kurzfristig planbar wie im Wiener Stadtgebiet.",
    character:
      "Die Altstadt bringt engen historischen Bestand mit schmalen Gassen und knappen Halteplätzen mit. Rundherum liegen Wohngebiete mit Ein- und Mehrfamilienhäusern, dazu Villengebiete Richtung Hinterbrühl und Vorderbrühl mit eigenen Garagen. Weil die Nähe zu Wien groß ist, ist der Anteil an Pendlerhaushalten hoch — Termine am frühen Morgen oder späten Nachmittag sind hier besonders gefragt.",
    focus: [
      "Haushaltsgeräte in Einfamilien- und Reihenhäusern",
      "Garagentore und Antriebe an Privateinfahrten",
      "Geräte in Altstadtwohnungen mit engem Zugang",
      "Klimaanlagen in Häusern und Dachgeschosswohnungen"
    ],
    sections: [
      {
        title: "Kurze Anfahrt, kurzfristige Termine",
        body:
          "Weil Mödling direkt an der Stadtgrenze liegt, lässt es sich gut in Wiener Touren einfügen. Bei dringenden Fällen wie einem Wasseraustritt oder einem ausgefallenen Tiefkühlgerät ist deshalb oft ein Termin binnen ein bis zwei Werktagen möglich. Es gilt trotzdem der niederösterreichische Anfahrtssatz."
      },
      {
        title: "Randzeiten für Pendler",
        body:
          "Wenn Sie tagsüber in Wien arbeiten, sind Termine am frühen Morgen oder späteren Nachmittag oft die einzige Möglichkeit. Sagen Sie bei der Anfrage, welche Fenster für Sie gehen — wir planen das ein, statt Sie auf einen Halbtag festzulegen."
      },
      {
        title: "Anfahrt und Kosten",
        body:
          "100 € Anfahrt für Haushaltsgeräte, 150 € für Garagentor-Arbeiten, jeweils exklusive USt. Die Ein-Stunden-Pauschale von 200 € greift bei Mödling wegen der kurzen Fahrzeit in der Regel nicht."
      }
    ],
    faq: [
      {
        question: "Warum gilt in Mödling der niederösterreichische Satz, obwohl es so nah ist?",
        answer:
          "Weil wir die Sätze nach Bundesland und nicht nach Kilometern staffeln — das ist einfacher nachzuvollziehen und für Sie vorab berechenbar. Der Vorteil der Nähe liegt bei der Termingeschwindigkeit."
      },
      {
        question: "Sind Termine vor der Arbeit oder am Abend möglich?",
        answer:
          "Nach Absprache ja. Nennen Sie Ihre möglichen Zeitfenster bei der Anfrage, dann sagen wir Ihnen, was verfügbar ist und ob ein Aufschlag anfällt."
      },
      {
        question: "Kommen Sie auch nach Hinterbrühl, Vösendorf oder Brunn am Gebirge?",
        answer:
          "Ja, der gesamte Bezirk Mödling zählt zum regelmäßigen Einsatzgebiet mit den niederösterreichischen Sätzen."
      }
    ],
    enriched: true
  }
];

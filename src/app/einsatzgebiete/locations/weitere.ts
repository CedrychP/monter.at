import type { LocationPage } from "../locationPages";

/**
 * Städte in den Bundesländern mit Technikern vor Ort. Der Schwerpunkt liegt hier
 * bei Haushaltsgeräten; Anfahrt und Vorlaufzeit hängen an der Adresse und werden
 * vor dem Termin genannt, statt hier eine Pauschale zu behaupten.
 */
export const weitereCities: LocationPage[] = [
  {
    regionSlug: "oberoesterreich",
    slug: "linz",
    name: "Linz",
    postalCodes: ["4020", "4030", "4040"],
    metaTitle: "Haushaltsgeräte Reparatur Linz | MONTER Service",
    description:
      "Haushaltsgeräte-Reparatur in Linz: Innenstadt, Urfahr, Ebelsberg und Umgebung. Techniker vor Ort, Diagnose vor dem Teiletausch, Kosten vorab geklärt.",
    h1: "Reparatur in Linz.",
    short: "Landeshauptstadt mit Technikern vor Ort, Schwerpunkt Haushaltsgeräte.",
    intro:
      "In Linz sind Techniker vor Ort im Einsatz — die Reparatur erfolgt also nicht als Anfahrt aus Wien, sondern aus der Region. Der Schwerpunkt liegt bei Haushaltsgeräten: Waschmaschinen, Trockner, Geschirrspüler, Kühl- und Gefriergeräte, Backöfen und Herde.",
    character:
      "Linz mischt Gründerzeitbestand in der Innenstadt und in Urfahr mit ausgedehnten Nachkriegssiedlungen im Franckviertel und in Ebelsberg sowie Neubau am Hafen und in der Solar City. Im Altbau sind Wasseranschluss und Abfluss oft älter als das Gerät, weshalb eine auslaufende Maschine nicht zwangsläufig einen Gerätefehler bedeutet. In den Siedlungen stehen Geräte meist frei aufgestellt, was Reparaturen unkompliziert macht.",
    focus: [
      "Waschmaschinen mit Ablauf- und Zulaufthemen im Altbau",
      "Freistehende Geräte in Wohnanlagen und Siedlungshäusern",
      "Geschirrspüler mit Verkalkung und Spülproblemen",
      "Kühl- und Gefriergeräte mit dringendem Handlungsbedarf"
    ],
    sections: [
      {
        title: "Diagnose vor dem Teiletausch",
        body:
          "Auch in Linz gilt unser Grundsatz: erst messen, dann tauschen. Ein Fehlercode für die Ablaufpumpe sagt, dass kein Wasser wegkommt — nicht, dass die Pumpe defekt ist. Häufig sind Flusensieb, Ablaufschlauch oder Siphon verlegt. Ein Bauteiltausch ohne diese Prüfung kostet Geld und behebt den Fehler nicht dauerhaft."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Weil die Anfahrt von der Adresse abhängt, nennen wir hier keinen festen Betrag. Sie erfahren die Anfahrtskosten am Telefon, bevor ein Termin vereinbart wird — nicht erst auf der Rechnung. Im Zentralraum Linz sind Termine gut planbar, in den Randbezirken kommt etwas Vorlauf dazu."
      },
      {
        title: "Was den Termin verkürzt",
        body:
          "Marke, vollständige Modellnummer vom Typenschild und der angezeigte Fehlercode. Bei Geräten der BSH-Gruppe wie Bosch, Siemens und Neff oder der Electrolux-Gruppe wie AEG und Zanussi sind viele Bauteile markenübergreifend gleich, was die Teileversorgung auch bei älteren Geräten gut hält."
      }
    ],
    faq: [
      {
        question: "Kommt tatsächlich ein Techniker nach Linz?",
        answer:
          "Ja. In Oberösterreich arbeiten Techniker vor Ort, am dichtesten im Zentralraum Linz, Wels und Steyr. Unser Firmensitz bleibt Wien, Anfrage und Terminabstimmung laufen über uns."
      },
      {
        question: "Was kostet die Anfahrt in Linz?",
        answer:
          "Das hängt von der Adresse ab, deshalb steht hier kein fester Betrag. Sie erfahren die Anfahrtskosten am Telefon, bevor ein Termin vereinbart wird."
      },
      {
        question: "Werden auch Garagentore und Klimageräte betreut?",
        answer:
          "Der Schwerpunkt in Linz liegt bei Haushaltsgeräten. Ob für Ihr Anliegen an Garagentor oder Klimaanlage ein Termin möglich ist, klären wir bei der Anfrage."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    slug: "wels",
    name: "Wels",
    postalCodes: ["4600"],
    metaTitle: "Haushaltsgeräte Reparatur Wels | MONTER Service",
    description:
      "Haushaltsgeräte-Reparatur in Wels und Umgebung: Techniker vor Ort, Diagnose vor dem Teiletausch, Anfahrtskosten vorab am Telefon geklärt.",
    h1: "Reparatur in Wels.",
    short: "Im oberösterreichischen Zentralraum, Techniker vor Ort.",
    intro:
      "Wels liegt im oberösterreichischen Zentralraum und ist über die Westachse gut mit Linz verbunden. Techniker sind hier vor Ort im Einsatz, mit Schwerpunkt auf Haushaltsgeräten.",
    character:
      "Die Innenstadt ist kompakt mit historischem und gründerzeitlichem Bestand, rundherum liegen ausgedehnte Wohn- und Siedlungsgebiete mit Ein- und Reihenhäusern. In diesen Häusern stehen Waschmaschinen und Gefriergeräte häufig in einer Waschküche oder im Keller — der Zugang ist einfach, die Umgebungsbedingungen sind aber kühler und feuchter als im Wohnraum.",
    focus: [
      "Waschmaschinen und Gefriergeräte in Waschküchen und Kellern",
      "Freistehende Geräte in Siedlungshäusern",
      "Geschirrspüler mit Kalk- und Spülproblemen",
      "Backöfen und Herde mit Heizungs- und Elektronikfehlern"
    ],
    sections: [
      {
        title: "Geräte in Keller und Waschküche",
        body:
          "Kühle, feuchte Räume beanspruchen Elektronik und Kontakte anders als Wohnräume. Bei Waschmaschinen führt das zu Korrosion und zu wechselnden Fehlern, die sich schlecht reproduzieren lassen. Notieren Sie die Codes, die über einige Tage auftreten — dieses Muster hilft mehr als eine einzelne Momentaufnahme."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Die Anfahrt richtet sich nach der Adresse und wird am Telefon genannt, bevor ein Termin vereinbart wird. Im Stadtgebiet und im Zentralraum sind Termine gut planbar; in den umliegenden Gemeinden planen wir gezielter, weil die Wege länger sind."
      },
      {
        title: "Wann sich eine Reparatur nicht mehr lohnt",
        body:
          "Als Faustregel: wenn die Reparatur die Hälfte eines vergleichbaren Neugeräts erreicht und das Gerät älter als acht bis zehn Jahre ist. Bei Lagerschäden an Waschmaschinen oder defekter Elektronik sind wir schnell in diesem Bereich. Diese Einschätzung bekommen Sie möglichst schon am Telefon, damit keine Anfahrt für eine schlechte Nachricht anfällt."
      }
    ],
    faq: [
      {
        question: "Sind Techniker in Wels tatsächlich vor Ort?",
        answer:
          "Ja, Wels liegt im oberösterreichischen Zentralraum, den wir mit Technikern aus der Region abdecken. Anfrage und Terminabstimmung laufen über uns."
      },
      {
        question: "Was kostet die Anfahrt?",
        answer:
          "Das hängt von der Adresse ab und wird am Telefon genannt, bevor ein Termin vereinbart wird. Feste Sätze nennen wir nur für Wien und Niederösterreich."
      },
      {
        question: "Meine Waschmaschine im Keller zeigt wechselnde Fehler. Woran liegt das?",
        answer:
          "Wechselnde Fehler deuten oft auf Feuchtigkeit an Steckkontakten oder der Steuerung hin. Sammeln Sie die Codes über einige Tage, damit sich das Muster einordnen lässt."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    slug: "steyr",
    name: "Steyr",
    postalCodes: ["4400"],
    metaTitle: "Haushaltsgeräte Reparatur Steyr | MONTER Service",
    description:
      "Haushaltsgeräte-Reparatur in Steyr: historische Altstadt, Siedlungsgebiete und Umgebung. Techniker vor Ort, Kosten vor dem Termin geklärt.",
    h1: "Reparatur in Steyr.",
    short: "Historische Altstadt und Siedlungsgebiete, Techniker vor Ort.",
    intro:
      "Steyr liegt am Zusammenfluss von Enns und Steyr und bildet mit Linz und Wels den oberösterreichischen Zentralraum. Techniker sind hier vor Ort im Einsatz, mit Schwerpunkt auf Haushaltsgeräten.",
    character:
      "Die Altstadt ist historisch und dicht, mit engen Gassen, schmalen Stiegenhäusern und teils denkmalgeschütztem Bestand — dort sind Zugang und Halteplatz die praktischen Hürden. In den Siedlungsgebieten und Werkssiedlungen rundherum stehen Häuser mit Waschküchen, Garagen und Kellergeräten. Die Wasserhärte liegt regional höher als in Wien, was bei Geschirrspülern und Waschmaschinen zu mehr Kalkeintrag führt.",
    focus: [
      "Geräte in Altstadtwohnungen mit engem Zugang",
      "Waschmaschinen und Gefriergeräte in Kellern und Waschküchen",
      "Verkalkte Heizstäbe und Umwälzpumpen bei hartem Wasser",
      "Backöfen und Herde in Siedlungshäusern"
    ],
    sections: [
      {
        title: "Kalk ist hier ein Thema",
        body:
          "Bei härterem Wasser setzt sich Kalk auf Heizstäben und in Umwälzpumpen ab. Die Folge sind längere Programmlaufzeiten, schlechtere Spülergebnisse und irgendwann ein durchgebrannter Heizstab. Kontrollieren Sie Salzstand und Enthärtereinstellung am Geschirrspüler — das verhindert mehr Schäden als jede Reparatur nachträglich beheben kann."
      },
      {
        title: "Zugang in der Altstadt",
        body:
          "In den engen Gassen ist Halten schwierig und Stiegenhäuser sind schmal. Sagen Sie bei der Anfrage Stockwerk, Liftsituation und ob es eine Ladezone gibt. Bei einem Gerätetausch oder Abtransport entscheidet das über die benötigte Zeit."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Die Anfahrt richtet sich nach der Adresse und wird vor dem Termin genannt. Im Stadtgebiet sind Termine gut planbar, in den umliegenden Gemeinden des Bezirks planen wir gezielter."
      }
    ],
    faq: [
      {
        question: "Kommt ein Techniker in die Steyrer Altstadt?",
        answer:
          "Ja. Sagen Sie bei der Anfrage bitte Stockwerk und Zugang, weil das in der Altstadt für die Terminplanung wichtiger ist als der Gerätetyp."
      },
      {
        question: "Mein Geschirrspüler braucht immer länger. Ist er defekt?",
        answer:
          "Oft ist Kalk die Ursache: Ein belegter Heizstab braucht länger, um das Wasser auf Temperatur zu bringen, wodurch das Programm verlängert wird. Prüfen Sie Salz und Enthärtereinstellung, bevor an ein Bauteil gedacht wird."
      },
      {
        question: "Was kostet die Anfahrt nach Steyr?",
        answer:
          "Das hängt von der Adresse ab und wird am Telefon genannt, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "steiermark",
    slug: "graz",
    name: "Graz",
    postalCodes: ["8010", "8020", "8045", "8055"],
    metaTitle: "Haushaltsgeräte Reparatur Graz | MONTER Service",
    description:
      "Haushaltsgeräte-Reparatur in Graz: Altbau in Geidorf und Lend, Neubau in Reininghaus, Studentenwohnungen. Techniker vor Ort, Diagnose vor dem Teiletausch.",
    h1: "Reparatur in Graz.",
    short: "Zweitgrößte Stadt Österreichs, Techniker vor Ort.",
    intro:
      "Graz ist nach Wien die zweitgrößte Stadt Österreichs, und die Einsatzsituation ist in vielem ähnlich: viel Altbau, enge Stiegenhäuser und ein hoher Anteil an vermieteten Wohnungen. Techniker sind hier vor Ort im Einsatz.",
    character:
      "In Geidorf, Lend und Gries prägen Gründerzeithäuser das Bild, oft ohne Lift und mit nachträglich eingebauten Küchen und Bädern. Als Universitätsstadt hat Graz zudem viele Studentenwohnungen und Wohngemeinschaften mit älteren, stark genutzten Geräten. In Reininghaus und den Randbezirken kommt Neubau mit integrierten Geräten und Klimaanlagen dazu.",
    focus: [
      "Stark genutzte Waschmaschinen in Wohngemeinschaften",
      "Altbaugeräte mit Ablauf- und Zulaufthemen",
      "Integrierte Einbaugeräte in Neubauanlagen",
      "Kühl- und Gefriergeräte mit dringendem Handlungsbedarf"
    ],
    sections: [
      {
        title: "Hohe Nutzung verschiebt die Rechnung",
        body:
          "Eine Maschine, die in einer Wohngemeinschaft täglich mehrfach läuft, erreicht ihre Lebensdauer in wenigen Jahren. Bei einem Lagerschaden ist die Reparatur oft nicht mehr sinnvoll, weil dabei die Trommeleinheit zerlegt werden muss. Wir sagen offen, wenn ein Austausch die vernünftigere Lösung ist — auch wenn wir daran nichts verdienen."
      },
      {
        title: "Stockwerk und Lift nennen",
        body:
          "In den Grazer Altbaubezirken gibt es viele Häuser ohne Lift. Für eine Reparatur ist das kein Problem, für einen Gerätetausch oder Abtransport schon: Dann brauchen wir mehr Zeit und gegebenenfalls einen zweiten Mann. Sagen Sie das vorab, damit die Kalkulation von Anfang an stimmt."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Die Anfahrt richtet sich nach der Adresse und wird am Telefon genannt, bevor ein Termin vereinbart wird. Im Grazer Stadtgebiet sind Termine gut planbar; in den flächigen Bezirken der Steiermark planen wir gezielter."
      }
    ],
    faq: [
      {
        question: "Kommt tatsächlich ein Techniker nach Graz?",
        answer:
          "Ja. In der Steiermark arbeiten Techniker vor Ort, am dichtesten im Großraum Graz. Unser Firmensitz bleibt Wien, Anfrage und Terminabstimmung laufen über uns."
      },
      {
        question: "Was kostet die Anfahrt in Graz?",
        answer:
          "Das hängt von der Adresse ab, deshalb steht hier kein fester Betrag. Sie erfahren die Anfahrtskosten am Telefon, bevor ein Termin vereinbart wird."
      },
      {
        question: "Ich bin Vermieter und wohne nicht in Graz. Geht das trotzdem?",
        answer:
          "Ja. Wir stimmen den Termin mit Ihrem Mieter ab, informieren Sie über Diagnose und Kosten und stellen die Rechnung an Sie. Nennen Sie uns dafür eine Freigabegrenze und eine Kontaktperson vor Ort."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "salzburg",
    slug: "salzburg-stadt",
    name: "Stadt Salzburg",
    cityListName: "Salzburg",
    postalCodes: ["5020"],
    metaTitle: "Haushaltsgeräte Reparatur Salzburg Stadt | MONTER Service",
    description:
      "Haushaltsgeräte-Reparatur in der Stadt Salzburg: Altstadt, Lehen, Itzling und Aigen. Techniker vor Ort, Kosten vor dem Termin geklärt.",
    h1: "Reparatur in der Stadt Salzburg.",
    short: "Altstadt und Stadtteile, Techniker vor Ort.",
    intro:
      "In der Stadt Salzburg sind Techniker vor Ort im Einsatz, mit Schwerpunkt auf Haushaltsgeräten. Die Altstadt bringt dabei ihre eigenen praktischen Hürden mit, die wir beim Termin einplanen.",
    character:
      "Die Altstadt ist UNESCO-Welterbe mit engen Gassen, Fahrverboten und knappen Ladezonen — der Weg vom Fahrzeug zur Wohnung ist hier oft der zeitkritische Teil. In Lehen, Itzling und Gnigl dominieren Nachkriegsbestand und Wohnanlagen mit freistehenden Geräten, in Aigen und Parsch gibt es Villen und Häuser mit hochwertigen Einbaugeräten. Ein Salzburg-Thema ist der hohe Anteil an vermieteten Wohnungen und Ferienwohnungen.",
    focus: [
      "Geräte in Altstadtwohnungen mit eingeschränkter Zufahrt",
      "Freistehende Waschmaschinen und Geschirrspüler in Wohnanlagen",
      "Hochwertige Einbaugeräte in Häusern in Aigen und Parsch",
      "Geräte in Ferien- und Mietwohnungen mit Zugang über Dritte"
    ],
    sections: [
      {
        title: "Zufahrt in der Altstadt",
        body:
          "In der Kernzone gelten Fahrverbote und Ladezonen sind knapp. Sagen Sie bei der Anfrage, ob eine Ladezone in der Nähe liegt und ob eine Einfahrt möglich ist. Muss ein Techniker mit Werkzeug und Ersatzteil mehrere hundert Meter gehen, verlängert das den Einsatz — und diese Zeit wird verrechnet."
      },
      {
        title: "Ferien- und Mietwohnungen",
        body:
          "Wenn eine Wohnung vermietet ist oder nicht dauerhaft bewohnt wird, hängt der Termin daran, dass jemand aufschließt. Nennen Sie eine Kontaktperson vor Ort und eine Kostenfreigabe bis zu einer Obergrenze — damit vermeiden Sie eine zweite Anfahrt, nur weil während des Einsatzes niemand entscheiden konnte."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Die Anfahrt richtet sich nach der Adresse und wird am Telefon genannt, bevor ein Termin vereinbart wird. In Stadt und Flachgau sind Termine gut planbar; in den Gebirgsgauen ist zu Saisonzeiten mehr Vorlauf üblich."
      }
    ],
    faq: [
      {
        question: "Kommt ein Techniker in die Salzburger Altstadt?",
        answer:
          "Ja. Sagen Sie bitte gleich, wie die Zufahrt aussieht und in welchem Stock die Wohnung liegt — in der Kernzone ist das für die Terminplanung wichtiger als der Gerätetyp."
      },
      {
        question: "Was kostet die Anfahrt in Salzburg?",
        answer:
          "Das hängt von der Adresse ab, deshalb steht hier kein fester Betrag. Sie erfahren die Anfahrtskosten am Telefon, bevor ein Termin vereinbart wird."
      },
      {
        question: "Ich vermiete eine Ferienwohnung. Wie läuft das ab?",
        answer:
          "Wir brauchen eine Person vor Ort, die aufschließt, und eine Freigabegrenze, bis zu der wir ohne Rückfrage reparieren dürfen. Die Rechnung geht an Sie, den Termin stimmen wir mit Ihrer Kontaktperson ab."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "burgenland",
    slug: "eisenstadt",
    name: "Eisenstadt",
    postalCodes: ["7000"],
    metaTitle: "Haushaltsgeräte Reparatur Eisenstadt | MONTER Service",
    description:
      "Haushaltsgeräte-Reparatur in Eisenstadt und Umgebung: Landeshauptstadt im Nordburgenland, im Ein-Stunden-Radius von Wien. Termine gut planbar.",
    h1: "Reparatur in Eisenstadt.",
    short: "Landeshauptstadt im Nordburgenland, im Ein-Stunden-Radius von Wien.",
    intro:
      "Eisenstadt liegt im Nordburgenland und damit im Ein-Stunden-Radius unseres Wiener Standorts. Zusätzlich sind im Burgenland Techniker vor Ort im Einsatz — Termine sind hier deshalb gut planbar.",
    character:
      "Die Stadt ist überschaubar, mit historischem Kern rund um die Fußgängerzone und Esterházy-Schloss sowie Wohn- und Siedlungsgebieten in Oberberg, Kleinhöflein und St. Georgen. Der Hausanteil ist hoch: Waschküchen, Garagen und Gefriergeräte im Keller sind typisch. Weil das Umland stark von Zweitwohnsitzen und Weinbaubetrieben geprägt ist, kommt der Zugang über Kontaktpersonen häufiger vor als in der Stadt.",
    focus: [
      "Waschmaschinen und Gefriergeräte in Kellern und Waschküchen",
      "Garagentore und Antriebe an Einfamilienhäusern",
      "Geschirrspüler mit Kalkthemen bei härterem Wasser",
      "Geräte in Zweitwohnsitzen mit Zugang über Dritte"
    ],
    sections: [
      {
        title: "Im Ein-Stunden-Radius",
        body:
          "Weil Eisenstadt von Floridsdorf aus in etwa einer Stunde erreichbar ist, lassen sich Termine hier mit Fahrten in dieselbe Richtung bündeln. Das hält die Anfahrt kalkulierbar und ermöglicht kurzfristigere Termine als im südlichen Burgenland. Die konkreten Anfahrtskosten nennen wir am Telefon, sobald die Adresse feststeht."
      },
      {
        title: "Gefriergeräte in Keller und Garage",
        body:
          "Steht das Gerät in einem unbeheizten Raum, kann die Umgebungstemperatur im Winter unter den Bereich fallen, für den die Regelung ausgelegt ist. Das Gerät kühlt dann schlechter, obwohl technisch nichts defekt ist. Prüfen Sie die Klimaklasse auf dem Typenschild — wir ordnen das am Telefon ein."
      },
      {
        title: "Was den Termin verkürzt",
        body:
          "Marke, vollständige Modellnummer vom Typenschild und der angezeigte Fehlercode. Bei Garagentoren zusätzlich Torart, Antriebsmarke und ob sich das Tor noch von Hand bewegen lässt. Damit bringt der Techniker die wahrscheinlich benötigten Teile gleich mit."
      }
    ],
    faq: [
      {
        question: "Wie schnell ist ein Termin in Eisenstadt möglich?",
        answer:
          "Weil die Stadt im Ein-Stunden-Radius von Wien liegt und zusätzlich Techniker im Burgenland arbeiten, sind Termine meist binnen weniger Tage möglich. Dringende Fälle ziehen wir vor."
      },
      {
        question: "Was kostet die Anfahrt nach Eisenstadt?",
        answer:
          "Das hängt von der Adresse ab, deshalb steht hier kein fester Betrag. Sie erfahren die Anfahrt am Telefon, bevor ein Termin vereinbart wird. Liegt An- und Abfahrt zusammen über einer Stunde, kann die Pauschale von 240 € greifen."
      },
      {
        question: "Betreuen Sie auch Garagentore im Burgenland?",
        answer:
          "Ja, im Burgenland gehören Garagentore und Antriebe zum Leistungsumfang. Nennen Sie Torart und Antriebsmarke bei der Anfrage."
      }
    ],
    enriched: true
  }
];

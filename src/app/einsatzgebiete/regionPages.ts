import type { HubDetailLink } from "../HubBlocks";

export type RegionCity = {
  plz: string;
  name: string;
};

export type RegionService = "haushaltsgeraete" | "garagentore" | "klimageraete";

export type RegionPage = {
  slug: string;
  /** Name des Bundeslands, wird in Titeln und Structured Data verwendet. */
  name: string;
  metaTitle: string;
  description: string;
  h1: string;
  /** Teaser für Hub-Übersicht und Cross-Links. */
  short: string;
  intro: string;
  /** Eigenes Team ab Wien oder Betreuung über einen Partnerbetrieb. */
  coverage: "eigenes-team" | "partnerbetrieb";
  /** Wird auf der Seite sichtbar ausgegeben — keine erfundene lokale Präsenz. */
  coverageNote: string;
  travelFee: {
    appliance: string;
    garage: string;
  };
  cities: RegionCity[];
  /** Kürzere Auswahl für den Anfahrtsblock auf der Startseite. */
  featuredCities?: RegionCity[];
  services: RegionService[];
  responseNote: string;
  sections: {
    title: string;
    body: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  /**
   * Index-Gate, analog zu brandDeviceContent.ts: Solange eine Region keine
   * geprüften Partnerdaten trägt, bleibt sie auf noindex und aus der XML-Sitemap.
   * Für Besucher und Navigation bleibt sie erreichbar.
   */
  enriched: boolean;
};

const viennaDistricts: RegionCity[] = [
  { plz: "1010", name: "Innere Stadt" },
  { plz: "1020", name: "Leopoldstadt" },
  { plz: "1030", name: "Landstraße" },
  { plz: "1040", name: "Wieden" },
  { plz: "1050", name: "Margareten" },
  { plz: "1060", name: "Mariahilf" },
  { plz: "1070", name: "Neubau" },
  { plz: "1080", name: "Josefstadt" },
  { plz: "1090", name: "Alsergrund" },
  { plz: "1100", name: "Favoriten" },
  { plz: "1110", name: "Simmering" },
  { plz: "1120", name: "Meidling" },
  { plz: "1130", name: "Hietzing" },
  { plz: "1140", name: "Penzing" },
  { plz: "1150", name: "Rudolfsheim-Fünfhaus" },
  { plz: "1160", name: "Ottakring" },
  { plz: "1170", name: "Hernals" },
  { plz: "1180", name: "Währing" },
  { plz: "1190", name: "Döbling" },
  { plz: "1200", name: "Brigittenau" },
  { plz: "1210", name: "Floridsdorf" },
  { plz: "1220", name: "Donaustadt" },
  { plz: "1230", name: "Liesing" }
];

/** Standardhinweis für Regionen, die über Partnerbetriebe betreut werden. */
const partnerCoverageNote =
  "Diese Region betreuen wir über Partnerbetriebe. Unser eigener Standort ist Wien — in dieser Region arbeiten geprüfte Fachbetriebe unter unserer Koordination. Anfrage, Terminabstimmung und Ansprechpartner laufen über uns, die Arbeit vor Ort erledigt der Partner.";

export const regionPages: RegionPage[] = [
  {
    slug: "wien",
    name: "Wien",
    metaTitle: "Einsatzgebiet Wien: alle 23 Bezirke | MONTER Service",
    description:
      "MONTER im Einsatzgebiet Wien: alle 23 Bezirke, Anfahrt ab 80 €, Termine oft binnen 1–2 Tagen. Wie Anfahrt, Parksituation und Terminplanung in Wien konkret ablaufen.",
    h1: "Einsatzgebiet Wien.",
    short:
      "Alle 23 Bezirke mit eigenem Team, kurze Wege, Anfahrt ab 80 € — unser Kerngebiet.",
    intro:
      "Wien ist unser Kerngebiet: Unser Standort liegt in Floridsdorf, unsere Techniker fahren von hier aus alle 23 Bezirke an. Weil die Wege kurz sind, sind Termine oft schon binnen ein bis zwei Tagen möglich — und bei einem Wasseraustritt oder einem ausgefallenen Tiefkühlgerät auch am selben Tag. Diese Seite erklärt, wie Anfahrt, Terminplanung und Zugang in Wien konkret ablaufen.",
    coverage: "eigenes-team",
    coverageNote:
      "Wien betreuen wir vollständig mit eigenen Technikern — kein Partnerbetrieb, keine Vermittlung. Unser Standort ist die Rappgasse 1/6 in 1210 Wien.",
    travelFee: {
      appliance: "80 €",
      garage: "110 €"
    },
    cities: viennaDistricts,
    featuredCities: viennaDistricts,
    services: ["haushaltsgeraete", "garagentore", "klimageraete"],
    responseNote: "Termine meist binnen 1–2 Tagen, dringende Fälle oft am selben Tag.",
    sections: [
      {
        title: "Anfahrt und Termine in Wien",
        body:
          "Die Anfahrt innerhalb Wiens beträgt 80 € für Haushaltsgeräte und 110 € für Garagentor-Arbeiten, jeweils pro Einsatz vor Ort und exklusive USt. Weil unser Standort in Floridsdorf liegt und alle Bezirke innerhalb kurzer Fahrzeit erreichbar sind, gibt es in Wien keine Staffelung nach Bezirk. Wir planen mehrere Einsätze pro Tag in räumlicher Nähe — dadurch entstehen kurzfristig freie Fenster, gerade am Vormittag."
      },
      {
        title: "Altbau, Innenhof und Parksituation",
        body:
          "In den Innenbezirken kostet die Parksituation oft mehr Zeit als die Fahrt selbst. Wenn Sie eine Einfahrt, einen Innenhof oder eine Ladezone nennen können, hilft das messbar — besonders wenn schwere Teile wie eine Waschmaschinentrommel oder ein Antriebsmotor transportiert werden müssen. Sagen Sie bitte auch, ob ein Lift vorhanden ist und in welchem Stock das Gerät steht: Ein Kühlgerät über vier Stockwerke ohne Lift ist ein anderer Einsatz als eines im Erdgeschoss."
      },
      {
        title: "Was wir in Wien alles abdecken",
        body:
          "In Wien bieten wir das gesamte Leistungsspektrum an: Haushaltsgeräte von der Waschmaschine bis zum Fernseher, Garagentore inklusive Federwechsel und Antriebsreparatur sowie Klimageräte von der Split-Anlage bis zur Wartung. Auch die Kombination ist möglich — wenn in einem Objekt mehrere Geräte betroffen sind, bündeln wir das auf einen Termin."
      },
      {
        title: "Hausverwaltungen und Gewerbe",
        body:
          "Ein großer Teil unserer Wiener Einsätze läuft über Hausverwaltungen, Vermieter und Betriebe. Für Objekte mit mehreren Geräten oder Sammelgaragen koordinieren wir Termine gebündelt und dokumentieren die Arbeiten nachvollziehbar für die Abrechnung. Details dazu stehen im Firmenkundenbereich."
      }
    ],
    faq: [
      {
        question: "Kostet die Anfahrt in Randbezirken mehr?",
        answer:
          "Nein. Innerhalb Wiens gilt ein einheitlicher Anfahrtssatz von 80 € für Haushaltsgeräte und 110 € für Garagentore — unabhängig davon, ob der Einsatz in der Inneren Stadt oder in Liesing liegt."
      },
      {
        question: "Wie schnell bekomme ich in Wien einen Termin?",
        answer:
          "Meist binnen ein bis zwei Tagen. Dringende Fälle wie ein Wasseraustritt, ein ausgefallenes Tiefkühlgerät oder ein blockiertes Garagentor mit eingeschlossenem Auto ziehen wir vor — rufen Sie dann direkt an, das ist deutlich schneller als das Formular."
      },
      {
        question: "Kommen Sie auch abends oder am Wochenende?",
        answer:
          "Reguläre Termine liegen an Werktagen. Bei akuten Schäden klären wir telefonisch, was möglich ist. Nennen Sie am Telefon bitte das Fehlerbild — daran erkennen wir, ob ein Einsatz außerhalb der üblichen Zeiten überhaupt etwas bringt oder ob eine Sofortmaßnahme bis zum nächsten Termin ausreicht."
      }
    ],
    enriched: true
  },
  {
    slug: "niederoesterreich",
    name: "Niederösterreich",
    metaTitle: "Einsatzgebiet Niederösterreich | MONTER Service",
    description:
      "MONTER in Niederösterreich: Wiener Umland, Industrieviertel und Weinviertel mit eigenem Team, Anfahrt ab 100 €. Ab einer Stunde Fahrzeit gilt eine Pauschale von 200 €.",
    h1: "Einsatzgebiet Niederösterreich.",
    short:
      "Wiener Umland mit eigenem Team, Anfahrt ab 100 € — ab einer Stunde Fahrt gilt eine Pauschale.",
    intro:
      "Niederösterreich fahren wir mit dem eigenen Team an — am dichtesten im Umland von Wien, wo die Fahrzeiten kurz sind. Je weiter eine Adresse entfernt liegt, desto stärker bestimmt die Fahrzeit den Termin: Ab etwa einer Stunde Anfahrt gilt eine Pauschale von 200 €. Diese Seite zeigt, welche Orte im Kernbereich liegen und wie wir mit weiter entfernten Adressen umgehen.",
    coverage: "eigenes-team",
    coverageNote:
      "Niederösterreich betreuen wir von Wien aus mit eigenen Technikern. Im Umland ist das Alltag, in den äußeren Bezirken entscheidet die Fahrzeit über Termin und Anfahrtspauschale.",
    travelFee: {
      appliance: "100 €",
      garage: "150 €"
    },
    cities: [
      { plz: "2000", name: "Stockerau" },
      { plz: "2100", name: "Korneuburg" },
      { plz: "2103", name: "Langenzersdorf" },
      { plz: "2201", name: "Gerasdorf bei Wien" },
      { plz: "2320", name: "Schwechat" },
      { plz: "2340", name: "Mödling" },
      { plz: "2361", name: "Laxenburg" },
      { plz: "2380", name: "Perchtoldsdorf" },
      { plz: "2410", name: "Hainburg an der Donau" },
      { plz: "2460", name: "Bruck an der Leitha" },
      { plz: "2500", name: "Baden" },
      { plz: "2540", name: "Bad Vöslau" },
      { plz: "2630", name: "Ternitz" },
      { plz: "2700", name: "Wiener Neustadt" },
      { plz: "3100", name: "St. Pölten" },
      { plz: "3400", name: "Klosterneuburg" },
      { plz: "3430", name: "Tulln an der Donau" },
      { plz: "3500", name: "Krems an der Donau" }
    ],
    featuredCities: [
      { plz: "2103", name: "Langenzersdorf" },
      { plz: "2380", name: "Perchtoldsdorf" },
      { plz: "3400", name: "Klosterneuburg" },
      { plz: "2340", name: "Mödling" },
      { plz: "2320", name: "Schwechat" },
      { plz: "2500", name: "Baden" }
    ],
    services: ["haushaltsgeraete", "garagentore", "klimageraete"],
    responseNote: "Im Wiener Umland meist binnen 2–3 Tagen, weiter entfernt nach Absprache.",
    sections: [
      {
        title: "Anfahrt und die Ein-Stunden-Regel",
        body:
          "Die Anfahrt nach Niederösterreich beträgt 100 € für Haushaltsgeräte und 150 € für Garagentor-Arbeiten. Liegt die Fahrzeit für An- und Abfahrt über einer Stunde, gilt stattdessen eine Pauschale von 200 €. Das klingt nach Kleingedrucktem, ist aber der ehrlichere Weg: Eine Fahrt nach Krems bindet einen Techniker deutlich länger als eine nach Mödling, und diesen Unterschied verstecken wir nicht in den Arbeitskosten."
      },
      {
        title: "Kernbereich und äußere Bezirke",
        body:
          "Am dichtesten sind wir im unmittelbaren Umland unterwegs: Klosterneuburg, Langenzersdorf, Korneuburg, Gerasdorf, Schwechat, Mödling, Perchtoldsdorf, Baden. Dort ergeben sich häufig kurzfristige Termine, weil ohnehin Einsätze in der Nähe liegen. St. Pölten, Krems, Wiener Neustadt und die weiter entfernten Bezirke planen wir gezielter — meist gebündelt mit anderen Einsätzen in derselben Richtung, was den Termin um einige Tage verschieben kann."
      },
      {
        title: "Ersatzteile bei längerer Anfahrt",
        body:
          "Bei weiter entfernten Adressen zählt die Vorbereitung doppelt: Ein zweiter Anfahrtsweg, nur weil ein Teil fehlt, kostet Sie Geld und uns einen halben Tag. Nennen Sie deshalb bitte schon bei der Anfrage Marke, die vollständige Modellnummer vom Typenschild und den angezeigten Fehlercode. Mit diesen Angaben bringen wir die wahrscheinlich benötigten Teile gleich mit, statt sie nachbestellen zu müssen."
      },
      {
        title: "Objekte, Zweitwohnsitze und Gewerbe",
        body:
          "Im Umland betreuen wir viele Einfamilienhäuser mit Einzelgaragen, dazu Betriebe und Hausverwaltungen. Für Zweitwohnsitze und vermietete Objekte ist eine Kontaktperson vor Ort hilfreich, die aufschließt und das Gerät zeigt — sonst wird aus einer Reparatur schnell eine zweite Anfahrt."
      }
    ],
    faq: [
      {
        question: "Wann gilt die Pauschale von 200 € statt 100 €?",
        answer:
          "Sobald An- und Abfahrt zusammen mehr als eine Stunde Fahrzeit ausmachen. Wir sagen Ihnen das am Telefon vorab, sobald wir die Adresse kennen — Sie erfahren die Anfahrtskosten also vor dem Termin, nicht danach."
      },
      {
        question: "Kommen Sie in jeden Bezirk Niederösterreichs?",
        answer:
          "Grundsätzlich ja, aber ehrlich gesagt lohnt es sich nicht immer für Sie. Bei sehr weit entfernten Adressen kann die Anfahrt einen erheblichen Teil der Gesamtkosten ausmachen. Rufen Sie kurz an: Wir sagen Ihnen offen, ob ein Einsatz von uns sinnvoll ist oder ob ein Betrieb in Ihrer Nähe die bessere Wahl ist."
      },
      {
        question: "Sind Garagentor-Arbeiten in Niederösterreich möglich?",
        answer:
          "Ja, inklusive Federwechsel, Antriebsreparatur und Wartung. Die Anfahrt beträgt hier 150 €, weil für Torarbeiten mehr Werkzeug und Material mitgeführt wird. Nennen Sie bitte Torart und Antriebsmarke — danach entscheidet sich, welche Teile wir einladen."
      }
    ],
    enriched: true
  },
  {
    slug: "burgenland",
    name: "Burgenland",
    metaTitle: "Einsatzgebiet Burgenland | MONTER Service",
    description:
      "MONTER im Burgenland: Nordburgenland rund um Eisenstadt und den Neusiedler See liegt im Ein-Stunden-Radius von Wien, das südliche Burgenland betreuen Partnerbetriebe.",
    h1: "Einsatzgebiet Burgenland.",
    short:
      "Nordburgenland im Ein-Stunden-Radius von Wien, Süden über Partnerbetriebe.",
    intro:
      "Das Burgenland teilt sich für uns in zwei Zonen. Der Norden rund um Eisenstadt, Neusiedl am See und Mattersburg liegt im Ein-Stunden-Radius unseres Wiener Standorts — dort fahren wir mit dem eigenen Team. Im mittleren und südlichen Burgenland, von Oberpullendorf über Oberwart bis Jennersdorf, arbeiten wir mit Partnerbetrieben, weil eine Anfahrt aus Wien für Sie wirtschaftlich keinen Sinn ergibt.",
    coverage: "eigenes-team",
    coverageNote:
      "Nordburgenland fahren wir von Wien aus mit eigenen Technikern an. Für das mittlere und südliche Burgenland vermitteln wir an Partnerbetriebe — die Anfahrt aus Wien wäre dort teurer als die Reparatur.",
    travelFee: {
      appliance: "auf Anfrage",
      garage: "auf Anfrage"
    },
    cities: [
      { plz: "7000", name: "Eisenstadt" },
      { plz: "7071", name: "Rust" },
      { plz: "7100", name: "Neusiedl am See" },
      { plz: "7111", name: "Parndorf" },
      { plz: "7132", name: "Frauenkirchen" },
      { plz: "7210", name: "Mattersburg" },
      { plz: "7350", name: "Oberpullendorf" },
      { plz: "7400", name: "Oberwart" },
      { plz: "7540", name: "Güssing" },
      { plz: "8380", name: "Jennersdorf" }
    ],
    services: ["haushaltsgeraete", "garagentore", "klimageraete"],
    responseNote: "Im Nordburgenland nach Absprache, im Süden über den Partnerbetrieb.",
    sections: [
      {
        title: "Nordburgenland: eigenes Team ab Wien",
        body:
          "Eisenstadt, Rust, Neusiedl am See, Parndorf und Mattersburg erreichen wir von Floridsdorf aus in rund einer Stunde. Damit fallen diese Einsätze in dieselbe Logik wie das südliche Niederösterreich: Wir planen sie gebündelt mit Terminen in derselben Richtung, was den Termin um einige Tage verschieben kann, die Anfahrt für Sie aber kalkulierbar hält."
      },
      {
        title: "Mittleres und südliches Burgenland: Partnerbetrieb",
        body:
          "Ab Oberpullendorf südwärts wird die Anfahrt aus Wien zum größten Kostenblock — bei einer Reparatur um 150 € steht das in keinem Verhältnis. Für Oberwart, Güssing und Jennersdorf vermitteln wir deshalb an Partnerbetriebe in der Region. Sie erreichen uns wie gewohnt, wir klären das Fehlerbild und geben es mit allen technischen Angaben weiter, damit der Betrieb vorbereitet anreist."
      },
      {
        title: "Anfahrt: warum hier keine Pauschale steht",
        body:
          "Für Wien und Niederösterreich nennen wir feste Anfahrtssätze. Im Burgenland hängt die Anfahrt zu stark von der konkreten Adresse ab — zwischen Parndorf und Jennersdorf liegen fast zwei Stunden Fahrzeit. Wir nennen Ihnen die Anfahrt deshalb am Telefon, sobald wir die Adresse kennen, und zwar vor dem Termin."
      },
      {
        title: "Was Sie für die Anfrage bereithalten sollten",
        body:
          "Gerade bei längerer Anfahrt entscheidet die Vorbereitung, ob eine Fahrt genügt: Marke, vollständige Modellnummer vom Typenschild, angezeigter Fehlercode und eine kurze Beschreibung, wann der Fehler auftritt. Bei Garagentoren zusätzlich Torart, Antriebsmarke und ob das Tor noch von Hand bewegt werden kann."
      }
    ],
    faq: [
      {
        question: "Kommen Sie nach Eisenstadt?",
        answer:
          "Ja. Eisenstadt und das nördliche Burgenland liegen im Ein-Stunden-Radius unseres Wiener Standorts und werden von unserem eigenen Team angefahren. Die Anfahrtskosten nennen wir am Telefon, sobald die Adresse feststeht."
      },
      {
        question: "Was passiert bei einer Anfrage aus Oberwart oder Güssing?",
        answer:
          "Wir nehmen die Anfrage auf, klären mit Ihnen Fehlerbild und Gerätedaten und geben den Fall an einen Partnerbetrieb in Ihrer Region weiter. Das ist für Sie günstiger und schneller, als einen Techniker aus Wien über zwei Stunden anfahren zu lassen."
      },
      {
        question: "Gilt die Ein-Stunden-Pauschale von 200 € auch hier?",
        answer:
          "Für Einsätze unseres eigenen Teams ja — sie greift, sobald An- und Abfahrt zusammen mehr als eine Stunde ausmachen. Bei vermittelten Einsätzen über Partnerbetriebe gelten deren Anfahrtssätze, die wir Ihnen vorab nennen."
      }
    ],
    enriched: true
  },
  {
    slug: "oberoesterreich",
    name: "Oberösterreich",
    metaTitle: "Einsatzgebiet Oberösterreich | MONTER Service",
    description:
      "MONTER in Oberösterreich: Haushaltsgeräte-Reparatur in Linz, Wels, Steyr und Umgebung über geprüfte Partnerbetriebe. Anfrage und Terminabstimmung laufen über uns.",
    h1: "Einsatzgebiet Oberösterreich.",
    short: "Linz, Wels und Steyr über geprüfte Partnerbetriebe — Koordination über uns.",
    intro:
      "Oberösterreich betreuen wir über Partnerbetriebe. Unser eigener Standort ist Wien; eine Anfahrt nach Linz oder Wels wäre für Sie unwirtschaftlich. Anfrage, technische Vorklärung und Terminabstimmung laufen deshalb über uns, die Arbeit vor Ort übernimmt ein Fachbetrieb aus der Region.",
    coverage: "partnerbetrieb",
    coverageNote: partnerCoverageNote,
    travelFee: {
      appliance: "auf Anfrage",
      garage: "auf Anfrage"
    },
    cities: [
      { plz: "4020", name: "Linz" },
      { plz: "4320", name: "Perg" },
      { plz: "4400", name: "Steyr" },
      { plz: "4560", name: "Kirchdorf an der Krems" },
      { plz: "4600", name: "Wels" },
      { plz: "4780", name: "Schärding" },
      { plz: "4840", name: "Vöcklabruck" },
      { plz: "5280", name: "Braunau am Inn" }
    ],
    services: ["haushaltsgeraete"],
    responseNote: "Termin und Vorlaufzeit klärt der Partnerbetrieb — wir melden uns nach der Anfrage.",
    sections: [
      {
        title: "Wie die Betreuung über Partner abläuft",
        body:
          "Sie stellen die Anfrage bei uns. Wir klären Marke, Modellnummer, Fehlercode und Fehlerbild und geben den Fall mit diesen Angaben an einen Partnerbetrieb in Ihrer Region weiter. Der Betrieb stimmt den Termin direkt mit Ihnen ab und rechnet nach seinen Sätzen ab. Wir bleiben Ihr Ansprechpartner, wenn etwas unklar bleibt."
      },
      {
        title: "Was wir vorab klären können",
        body:
          "Auch ohne eigenen Techniker vor Ort ist die telefonische Vorklärung wertvoll: Wir sagen Ihnen, was ein Fehlercode bedeutet, ob sich eine Reparatur beim Gerätealter noch rechnet und welche Teile wahrscheinlich gebraucht werden. Das verkürzt den Termin beim Partner und verhindert unnötige Anfahrten."
      }
    ],
    faq: [
      {
        question: "Kommt ein MONTER Techniker nach Linz?",
        answer:
          "Nein. Unser eigenes Team arbeitet in Wien, Niederösterreich und im Nordburgenland. In Oberösterreich übernimmt ein Partnerbetrieb den Einsatz — das ist für Sie schneller und günstiger als eine Anfahrt aus Wien."
      },
      {
        question: "Gelten die Preise von der Preisseite auch hier?",
        answer:
          "Nein. Die Anfahrts- und Arbeitssätze auf unserer Preisseite gelten für Einsätze unseres eigenen Teams. Bei Partnerbetrieben gelten deren Sätze, die wir Ihnen vor dem Termin nennen."
      }
    ],
    enriched: false
  },
  {
    slug: "steiermark",
    name: "Steiermark",
    metaTitle: "Einsatzgebiet Steiermark | MONTER Service",
    description:
      "MONTER in der Steiermark: Haushaltsgeräte-Reparatur in Graz, Leoben, Bruck an der Mur und Umgebung über geprüfte Partnerbetriebe. Koordination über uns.",
    h1: "Einsatzgebiet Steiermark.",
    short: "Graz, Leoben und Bruck an der Mur über geprüfte Partnerbetriebe.",
    intro:
      "Die Steiermark betreuen wir über Partnerbetriebe. Anfrage und technische Vorklärung laufen über uns, den Einsatz vor Ort übernimmt ein Fachbetrieb aus der Region — von Graz über das Mürztal bis in die Südsteiermark.",
    coverage: "partnerbetrieb",
    coverageNote: partnerCoverageNote,
    travelFee: {
      appliance: "auf Anfrage",
      garage: "auf Anfrage"
    },
    cities: [
      { plz: "8010", name: "Graz" },
      { plz: "8280", name: "Fürstenfeld" },
      { plz: "8530", name: "Deutschlandsberg" },
      { plz: "8330", name: "Feldbach" },
      { plz: "8600", name: "Bruck an der Mur" },
      { plz: "8700", name: "Leoben" },
      { plz: "8850", name: "Murau" },
      { plz: "8940", name: "Liezen" }
    ],
    services: ["haushaltsgeraete"],
    responseNote: "Termin und Vorlaufzeit klärt der Partnerbetrieb — wir melden uns nach der Anfrage.",
    sections: [
      {
        title: "Wie die Betreuung über Partner abläuft",
        body:
          "Sie stellen die Anfrage bei uns. Wir klären Marke, Modellnummer, Fehlercode und Fehlerbild und geben den Fall mit diesen Angaben an einen Partnerbetrieb in Ihrer Region weiter. Der Betrieb stimmt den Termin direkt mit Ihnen ab und rechnet nach seinen Sätzen ab."
      },
      {
        title: "Was wir vorab klären können",
        body:
          "Die telefonische Vorklärung nehmen wir auch dann ernst, wenn der Einsatz über einen Partner läuft: Was bedeutet der Fehlercode, rechnet sich die Reparatur beim Gerätealter noch, welche Teile werden wahrscheinlich gebraucht. Das spart Zeit beim Termin vor Ort."
      }
    ],
    faq: [
      {
        question: "Kommt ein MONTER Techniker nach Graz?",
        answer:
          "Nein. Unser eigenes Team arbeitet in Wien, Niederösterreich und im Nordburgenland. In der Steiermark übernimmt ein Partnerbetrieb den Einsatz."
      },
      {
        question: "Gelten die Preise von der Preisseite auch hier?",
        answer:
          "Nein. Die Sätze auf unserer Preisseite gelten für unser eigenes Team. Bei Partnerbetrieben gelten deren Sätze, die wir Ihnen vor dem Termin nennen."
      }
    ],
    enriched: false
  },
  {
    slug: "salzburg",
    name: "Salzburg",
    metaTitle: "Einsatzgebiet Salzburg | MONTER Service",
    description:
      "MONTER in Salzburg: Haushaltsgeräte-Reparatur in der Stadt Salzburg, Hallein, Zell am See und Umgebung über geprüfte Partnerbetriebe.",
    h1: "Einsatzgebiet Salzburg.",
    short: "Stadt Salzburg, Hallein und Pinzgau über geprüfte Partnerbetriebe.",
    intro:
      "Salzburg betreuen wir über Partnerbetriebe — von der Stadt über den Flachgau bis in den Pinzgau. Anfrage und technische Vorklärung laufen über uns, die Arbeit vor Ort übernimmt ein Fachbetrieb aus der Region.",
    coverage: "partnerbetrieb",
    coverageNote: partnerCoverageNote,
    travelFee: {
      appliance: "auf Anfrage",
      garage: "auf Anfrage"
    },
    cities: [
      { plz: "5020", name: "Salzburg" },
      { plz: "5202", name: "Neumarkt am Wallersee" },
      { plz: "5300", name: "Hallwang" },
      { plz: "5400", name: "Hallein" },
      { plz: "5500", name: "Bischofshofen" },
      { plz: "5580", name: "Tamsweg" },
      { plz: "5700", name: "Zell am See" }
    ],
    services: ["haushaltsgeraete"],
    responseNote: "Termin und Vorlaufzeit klärt der Partnerbetrieb — wir melden uns nach der Anfrage.",
    sections: [
      {
        title: "Wie die Betreuung über Partner abläuft",
        body:
          "Sie stellen die Anfrage bei uns. Wir klären Marke, Modellnummer, Fehlercode und Fehlerbild und geben den Fall mit diesen Angaben an einen Partnerbetrieb in Ihrer Region weiter. Der Betrieb stimmt den Termin direkt mit Ihnen ab."
      },
      {
        title: "Was wir vorab klären können",
        body:
          "Fehlercode einordnen, Wirtschaftlichkeit einschätzen, wahrscheinliche Ersatzteile benennen — das machen wir am Telefon unabhängig davon, wer am Ende vor Ort arbeitet. In Tourismusregionen ist außerdem die Saison relevant: Vor der Sommersaison sind Termine merkbar knapper."
      }
    ],
    faq: [
      {
        question: "Kommt ein MONTER Techniker nach Salzburg?",
        answer:
          "Nein. Unser eigenes Team arbeitet in Wien, Niederösterreich und im Nordburgenland. In Salzburg übernimmt ein Partnerbetrieb den Einsatz."
      },
      {
        question: "Gelten die Preise von der Preisseite auch hier?",
        answer:
          "Nein. Die Sätze auf unserer Preisseite gelten für unser eigenes Team. Bei Partnerbetrieben gelten deren Sätze, die wir Ihnen vor dem Termin nennen."
      }
    ],
    enriched: false
  },
  {
    slug: "kaernten",
    name: "Kärnten",
    metaTitle: "Einsatzgebiet Kärnten | MONTER Service",
    description:
      "MONTER in Kärnten: Haushaltsgeräte-Reparatur in Klagenfurt, Villach, Wolfsberg und Umgebung über geprüfte Partnerbetriebe.",
    h1: "Einsatzgebiet Kärnten.",
    short: "Klagenfurt, Villach und Wolfsberg über geprüfte Partnerbetriebe.",
    intro:
      "Kärnten betreuen wir über Partnerbetriebe — vom Zentralraum Klagenfurt und Villach bis ins Lavanttal und Oberkärnten. Anfrage und technische Vorklärung laufen über uns, den Einsatz vor Ort übernimmt ein Fachbetrieb aus der Region.",
    coverage: "partnerbetrieb",
    coverageNote: partnerCoverageNote,
    travelFee: {
      appliance: "auf Anfrage",
      garage: "auf Anfrage"
    },
    cities: [
      { plz: "9020", name: "Klagenfurt" },
      { plz: "9100", name: "Völkermarkt" },
      { plz: "9300", name: "St. Veit an der Glan" },
      { plz: "9400", name: "Wolfsberg" },
      { plz: "9500", name: "Villach" },
      { plz: "9620", name: "Hermagor" },
      { plz: "9800", name: "Spittal an der Drau" }
    ],
    services: ["haushaltsgeraete"],
    responseNote: "Termin und Vorlaufzeit klärt der Partnerbetrieb — wir melden uns nach der Anfrage.",
    sections: [
      {
        title: "Wie die Betreuung über Partner abläuft",
        body:
          "Sie stellen die Anfrage bei uns. Wir klären Marke, Modellnummer, Fehlercode und Fehlerbild und geben den Fall mit diesen Angaben an einen Partnerbetrieb in Ihrer Region weiter. Der Betrieb stimmt den Termin direkt mit Ihnen ab."
      },
      {
        title: "Was wir vorab klären können",
        body:
          "Wir ordnen den Fehlercode ein, schätzen ein, ob sich die Reparatur beim Gerätealter noch rechnet, und benennen die wahrscheinlich benötigten Teile. Das verkürzt den Termin vor Ort und verhindert eine zweite Anfahrt wegen eines fehlenden Bauteils."
      }
    ],
    faq: [
      {
        question: "Kommt ein MONTER Techniker nach Klagenfurt?",
        answer:
          "Nein. Unser eigenes Team arbeitet in Wien, Niederösterreich und im Nordburgenland. In Kärnten übernimmt ein Partnerbetrieb den Einsatz."
      },
      {
        question: "Gelten die Preise von der Preisseite auch hier?",
        answer:
          "Nein. Die Sätze auf unserer Preisseite gelten für unser eigenes Team. Bei Partnerbetrieben gelten deren Sätze, die wir Ihnen vor dem Termin nennen."
      }
    ],
    enriched: false
  },
  {
    slug: "tirol",
    name: "Tirol",
    metaTitle: "Einsatzgebiet Tirol | MONTER Service",
    description:
      "MONTER in Tirol: Haushaltsgeräte-Reparatur in Innsbruck, Kufstein, Imst und Osttirol über geprüfte Partnerbetriebe.",
    h1: "Einsatzgebiet Tirol.",
    short: "Innsbruck, Unterland und Oberland über geprüfte Partnerbetriebe.",
    intro:
      "Tirol betreuen wir über Partnerbetriebe — von Innsbruck über das Unterland rund um Kufstein bis ins Oberland und nach Osttirol. Anfrage und technische Vorklärung laufen über uns, die Arbeit vor Ort übernimmt ein Fachbetrieb aus der Region.",
    coverage: "partnerbetrieb",
    coverageNote: partnerCoverageNote,
    travelFee: {
      appliance: "auf Anfrage",
      garage: "auf Anfrage"
    },
    cities: [
      { plz: "6020", name: "Innsbruck" },
      { plz: "6300", name: "Wörgl" },
      { plz: "6330", name: "Kufstein" },
      { plz: "6400", name: "Telfs" },
      { plz: "6460", name: "Imst" },
      { plz: "6500", name: "Landeck" },
      { plz: "6600", name: "Reutte" },
      { plz: "9900", name: "Lienz" }
    ],
    services: ["haushaltsgeraete"],
    responseNote: "Termin und Vorlaufzeit klärt der Partnerbetrieb — wir melden uns nach der Anfrage.",
    sections: [
      {
        title: "Wie die Betreuung über Partner abläuft",
        body:
          "Sie stellen die Anfrage bei uns. Wir klären Marke, Modellnummer, Fehlercode und Fehlerbild und geben den Fall mit diesen Angaben an einen Partnerbetrieb in Ihrer Region weiter. Der Betrieb stimmt den Termin direkt mit Ihnen ab."
      },
      {
        title: "Was wir vorab klären können",
        body:
          "Fehlercode einordnen, Wirtschaftlichkeit einschätzen, wahrscheinliche Ersatzteile benennen. In den Tälern kommt die Anfahrt des Partnerbetriebs hinzu — je genauer die Gerätedaten, desto seltener wird eine zweite Fahrt nötig."
      }
    ],
    faq: [
      {
        question: "Kommt ein MONTER Techniker nach Innsbruck?",
        answer:
          "Nein. Unser eigenes Team arbeitet in Wien, Niederösterreich und im Nordburgenland. In Tirol übernimmt ein Partnerbetrieb den Einsatz."
      },
      {
        question: "Gelten die Preise von der Preisseite auch hier?",
        answer:
          "Nein. Die Sätze auf unserer Preisseite gelten für unser eigenes Team. Bei Partnerbetrieben gelten deren Sätze, die wir Ihnen vor dem Termin nennen."
      }
    ],
    enriched: false
  },
  {
    slug: "vorarlberg",
    name: "Vorarlberg",
    metaTitle: "Einsatzgebiet Vorarlberg | MONTER Service",
    description:
      "MONTER in Vorarlberg: Haushaltsgeräte-Reparatur in Bregenz, Dornbirn, Feldkirch und Bludenz über geprüfte Partnerbetriebe.",
    h1: "Einsatzgebiet Vorarlberg.",
    short: "Bregenz, Dornbirn, Feldkirch und Bludenz über geprüfte Partnerbetriebe.",
    intro:
      "Vorarlberg betreuen wir über Partnerbetriebe — im Rheintal von Bregenz über Dornbirn bis Feldkirch und im Walgau rund um Bludenz. Anfrage und technische Vorklärung laufen über uns, den Einsatz vor Ort übernimmt ein Fachbetrieb aus der Region.",
    coverage: "partnerbetrieb",
    coverageNote: partnerCoverageNote,
    travelFee: {
      appliance: "auf Anfrage",
      garage: "auf Anfrage"
    },
    cities: [
      { plz: "6700", name: "Bludenz" },
      { plz: "6800", name: "Feldkirch" },
      { plz: "6840", name: "Götzis" },
      { plz: "6850", name: "Dornbirn" },
      { plz: "6900", name: "Bregenz" },
      { plz: "6971", name: "Hard" }
    ],
    services: ["haushaltsgeraete"],
    responseNote: "Termin und Vorlaufzeit klärt der Partnerbetrieb — wir melden uns nach der Anfrage.",
    sections: [
      {
        title: "Wie die Betreuung über Partner abläuft",
        body:
          "Sie stellen die Anfrage bei uns. Wir klären Marke, Modellnummer, Fehlercode und Fehlerbild und geben den Fall mit diesen Angaben an einen Partnerbetrieb in Ihrer Region weiter. Der Betrieb stimmt den Termin direkt mit Ihnen ab."
      },
      {
        title: "Was wir vorab klären können",
        body:
          "Wir ordnen den Fehlercode ein, schätzen die Wirtschaftlichkeit ein und benennen die wahrscheinlich benötigten Teile — unabhängig davon, wer den Termin vor Ort übernimmt."
      }
    ],
    faq: [
      {
        question: "Kommt ein MONTER Techniker nach Dornbirn?",
        answer:
          "Nein. Unser eigenes Team arbeitet in Wien, Niederösterreich und im Nordburgenland. In Vorarlberg übernimmt ein Partnerbetrieb den Einsatz."
      },
      {
        question: "Gelten die Preise von der Preisseite auch hier?",
        answer:
          "Nein. Die Sätze auf unserer Preisseite gelten für unser eigenes Team. Bei Partnerbetrieben gelten deren Sätze, die wir Ihnen vor dem Termin nennen."
      }
    ],
    enriched: false
  }
];

const regionBySlug = new Map(regionPages.map((region) => [region.slug, region]));

export function getRegionPage(slug: string): RegionPage | undefined {
  return regionBySlug.get(slug);
}

/** Wirft, wenn der Slug fehlt — für feste interne Verweise wie den Anfahrtsblock der Startseite. */
export function requireRegionPage(slug: string): RegionPage {
  const region = regionBySlug.get(slug);
  if (!region) {
    throw new Error(`Unbekannte Region: ${slug}`);
  }
  return region;
}

export function isRegionEnriched(slug: string): boolean {
  return regionBySlug.get(slug)?.enriched ?? false;
}

/** Regionen mit eigenem Team — Kerngebiet, wird zuerst gelistet. */
export const coreRegions = regionPages.filter((region) => region.coverage === "eigenes-team");

/** Regionen, die über Partnerbetriebe laufen. */
export const partnerRegions = regionPages.filter((region) => region.coverage === "partnerbetrieb");

export const regionHubLinks: HubDetailLink[] = regionPages.map((region) => ({
  label: region.name,
  href: `/einsatzgebiete/${region.slug}`,
  text: region.short
}));

export type ServedArea = {
  type: "City" | "State";
  name: string;
};

/**
 * Alle bedienten Gebiete für areaServed. Wien ist zusätzlich eine Stadt,
 * die übrigen sind Bundesländer. Der provider bleibt in jedem Fall die eine
 * LocalBusiness in Wien — keine erfundenen Adressen in anderen Bundesländern.
 */
export const servedAreas: ServedArea[] = regionPages.map((region) => ({
  type: region.slug === "wien" ? "City" : "State",
  name: region.name
}));

export const servedAreasJsonLd = servedAreas.map((area) => ({
  "@type": area.type,
  name: area.name
}));

/** Die zwei Regionen im Anfahrtsblock der Startseite. */
export const homeRegions = {
  vienna: requireRegionPage("wien"),
  lowerAustria: requireRegionPage("niederoesterreich")
};

/** Ortsliste für kompakte Darstellungen — kürzere Auswahl, falls definiert. */
export function getFeaturedCities(region: RegionPage): RegionCity[] {
  return region.featuredCities ?? region.cities;
}

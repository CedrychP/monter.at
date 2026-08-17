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
  /**
   * kerngebiet: vom Wiener Standort aus mit festen Anfahrtssätzen.
   * techniker-vor-ort: Techniker in der Region, Anfahrt je nach Adresse.
   */
  coverage: "kerngebiet" | "techniker-vor-ort";
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

/**
 * Bundesländer ohne Techniker — hier nehmen wir keine Aufträge an.
 * Wird auf dem Hub offen genannt, statt Seiten anzulegen, die niemand einlösen kann.
 */
export const unservedStates = ["Kärnten", "Tirol", "Vorarlberg"];

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
    coverage: "kerngebiet",
    coverageNote:
      "Wien betreuen wir vollständig mit eigenen Technikern. Unser Standort ist die Rappgasse 1/6 in 1210 Wien — von dort fahren wir alle 23 Bezirke an.",
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
    coverage: "kerngebiet",
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
    metaTitle: "Reparatur Burgenland: Eisenstadt bis Güssing | MONTER",
    description:
      "MONTER im Burgenland: Haushaltsgeräte-Reparatur in Eisenstadt, Neusiedl am See, Mattersburg, Oberwart und Güssing. Nordburgenland zusätzlich vom Wiener Standort aus.",
    h1: "Reparatur im Burgenland.",
    short:
      "Von Eisenstadt bis Güssing mit Technikern vor Ort, im Norden zusätzlich ab Wien.",
    intro:
      "Im Burgenland arbeiten Techniker vor Ort — von Eisenstadt und dem Seewinkel über Mattersburg und Oberpullendorf bis Oberwart, Güssing und Jennersdorf. Der Norden rund um Eisenstadt, Neusiedl am See und Parndorf liegt zusätzlich im Ein-Stunden-Radius unseres Wiener Standorts, wodurch dort auch kurzfristige Termine gut planbar sind.",
    coverage: "techniker-vor-ort",
    coverageNote:
      "Im Burgenland sind Techniker vor Ort im Einsatz. Das nördliche Burgenland erreichen wir zusätzlich vom Wiener Standort aus, weil es im Ein-Stunden-Radius liegt.",
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
    responseNote: "Im Nordburgenland gut planbar, im Süden nach Absprache mit dem Techniker.",
    sections: [
      {
        title: "Nordburgenland: Seewinkel und Eisenstadt",
        body:
          "Eisenstadt, Rust, Neusiedl am See, Parndorf, Frauenkirchen und Mattersburg liegen von unserem Wiener Standort rund eine Stunde entfernt. Dadurch lassen sich Termine dort ähnlich planen wie im südlichen Niederösterreich: gebündelt mit Einsätzen in derselben Richtung, was kurzfristige Fenster ergibt. In vielen Gemeinden am Neusiedler See kommt eine hohe Dichte an Zweitwohnsitzen und Ferienwohnungen dazu — dort ist eine Kontaktperson vor Ort besonders wichtig, damit die Fahrt nicht ins Leere geht."
      },
      {
        title: "Mittel- und Südburgenland: Oberwart bis Jennersdorf",
        body:
          "Oberpullendorf, Oberwart, Güssing und Jennersdorf betreuen Techniker aus der Region. Die Wege sind hier länger und die Ortschaften kleiner, deshalb planen wir Termine gezielter statt tageweise spontan. Für Sie zählt vor allem, dass die Gerätedaten vorab stimmen: Ein zweiter Anfahrtsweg wegen eines fehlenden Ersatzteils fällt auf dieser Distanz stärker ins Gewicht als im Wiener Umland."
      },
      {
        title: "Anfahrt: warum hier keine feste Pauschale steht",
        body:
          "Für Wien und Niederösterreich nennen wir feste Anfahrtssätze. Im Burgenland hängt die Anfahrt zu stark von der Adresse ab — zwischen Parndorf und Jennersdorf liegen fast zwei Stunden Fahrzeit. Wir nennen Ihnen die Anfahrt deshalb am Telefon, sobald wir die Adresse kennen, und zwar vor dem Termin, nicht auf der Rechnung."
      },
      {
        title: "Was Sie für die Anfrage bereithalten sollten",
        body:
          "Marke, vollständige Modellnummer vom Typenschild, angezeigter Fehlercode und eine kurze Beschreibung, wann der Fehler auftritt. Bei Garagentoren zusätzlich Torart, Antriebsmarke und ob sich das Tor noch von Hand bewegen lässt. Mit diesen Angaben bringt der Techniker die wahrscheinlich benötigten Teile gleich mit."
      }
    ],
    faq: [
      {
        question: "Kommen Sie nach Eisenstadt?",
        answer:
          "Ja. Eisenstadt und das nördliche Burgenland betreuen wir regelmäßig — die Region liegt zusätzlich im Ein-Stunden-Radius unseres Wiener Standorts. Die Anfahrtskosten nennen wir am Telefon, sobald die Adresse feststeht."
      },
      {
        question: "Und im Süden, etwa in Oberwart oder Güssing?",
        answer:
          "Auch dort sind wir tätig, mit Technikern aus der Region. Weil die Wege länger sind, planen wir diese Termine gezielter — nennen Sie am Telefon bitte gleich Gerätedaten und Fehlercode, damit der Techniker vorbereitet anreist."
      },
      {
        question: "Warum steht bei der Anfahrt kein fester Betrag?",
        answer:
          "Weil die Fahrzeit im Burgenland stark von der Adresse abhängt. Sie bekommen die Anfahrtskosten am Telefon genannt, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    slug: "oberoesterreich",
    name: "Oberösterreich",
    metaTitle: "Reparatur Oberösterreich: Linz, Wels, Steyr | MONTER",
    description:
      "Haushaltsgeräte-Reparatur in Oberösterreich: Linz, Wels, Steyr, Vöcklabruck und Umgebung. Techniker vor Ort, Diagnose vor dem Teiletausch, klare Einschätzung am Telefon.",
    h1: "Reparatur in Oberösterreich.",
    short: "Zentralraum Linz, Wels und Steyr mit Technikern vor Ort.",
    intro:
      "In Oberösterreich sind Techniker vor Ort im Einsatz — am dichtesten im Zentralraum zwischen Linz, Wels und Steyr, dazu Vöcklabruck, Perg, Kirchdorf und das Inn- und Mühlviertel. Wie überall gilt: Erst die Diagnose, dann der Teiletausch. Am Telefon klären wir Fehlercode und Gerätedaten vorab, damit der Techniker die passenden Teile gleich mitbringt.",
    coverage: "techniker-vor-ort",
    coverageNote:
      "In Oberösterreich arbeiten Techniker vor Ort. Unser Firmensitz bleibt Wien — Anfrage, technische Vorklärung und Terminabstimmung laufen über uns.",
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
    responseNote: "Im Zentralraum gut planbar, im Inn- und Mühlviertel nach Absprache.",
    sections: [
      {
        title: "Zentralraum Linz, Wels und Steyr",
        body:
          "Zwischen Linz, Wels und Steyr liegen die Wege kurz und die Bebauung ist dicht — von Gründerzeithäusern in der Linzer Innenstadt über Wohnanlagen der 1970er-Jahre bis zu Neubauten am Stadtrand. Für die Reparatur macht das einen Unterschied: In Altbauten sind Wasseranschluss und Abfluss oft älter als das Gerät selbst, und ein Waschmaschinenschaden ist dann nicht immer ein Gerätefehler. Wir prüfen deshalb Zulauf und Ablauf mit, bevor Teile getauscht werden."
      },
      {
        title: "Inn-, Mühl- und Hausruckviertel",
        body:
          "Vöcklabruck, Braunau, Schärding, Perg und Kirchdorf sind flächige Bezirke mit vielen Einfamilienhäusern. Termine planen wir dort gezielter, weil zwischen zwei Adressen schnell eine halbe Stunde Fahrt liegt. Dafür ist der Zugang meist einfacher als in der Stadt: eigene Einfahrt, Gerät im Erdgeschoss oder Keller, kein Stiegenhaus."
      },
      {
        title: "Was den Termin verkürzt",
        body:
          "Marke, vollständige Modellnummer vom Typenschild und der angezeigte Fehlercode. Damit lässt sich vorab einschätzen, welches Bauteil betroffen ist und ob das Teil verfügbar ist. Bei Geräten der BSH-Gruppe wie Bosch, Siemens und Neff oder der Electrolux-Gruppe wie AEG und Zanussi sind viele Bauteile markenübergreifend gleich, was die Teileversorgung auch bei älteren Geräten gut hält."
      },
      {
        title: "Reparieren oder ersetzen",
        body:
          "Wir sagen offen, wenn sich eine Reparatur nicht mehr rechnet. Bei einem zwölf Jahre alten Gerät mit defekter Elektronik und einem Ersatzteilpreis nahe dem Neupreis ist der Austausch die vernünftigere Lösung — auch wenn wir daran nichts verdienen. Diese Einschätzung bekommen Sie möglichst schon am Telefon, nicht erst nach der Anfahrt."
      }
    ],
    faq: [
      {
        question: "Kommt ein Techniker nach Linz?",
        answer:
          "Ja. In Oberösterreich sind Techniker vor Ort im Einsatz, am dichtesten im Zentralraum Linz, Wels und Steyr. Rufen Sie an oder schicken Sie eine Anfrage — wir klären Fehlerbild und Termin."
      },
      {
        question: "Was kostet die Anfahrt in Oberösterreich?",
        answer:
          "Das hängt von der Adresse ab, deshalb steht hier kein fester Betrag. Sie erfahren die Anfahrtskosten am Telefon, bevor ein Termin vereinbart wird — nicht erst auf der Rechnung."
      },
      {
        question: "Werden auch Garagentore und Klimageräte betreut?",
        answer:
          "Der Schwerpunkt in Oberösterreich liegt bei Haushaltsgeräten. Ob für Ihr Anliegen an Garagentor oder Klimaanlage ein Termin möglich ist, klären wir bei der Anfrage."
      }
    ],
    enriched: true
  },
  {
    slug: "steiermark",
    name: "Steiermark",
    metaTitle: "Reparatur Steiermark: Graz, Leoben, Bruck | MONTER",
    description:
      "Haushaltsgeräte-Reparatur in der Steiermark: Graz, Bruck an der Mur, Leoben, Feldbach, Deutschlandsberg. Techniker vor Ort, Diagnose vor dem Teiletausch.",
    h1: "Reparatur in der Steiermark.",
    short: "Graz, Mürztal und Südsteiermark mit Technikern vor Ort.",
    intro:
      "In der Steiermark sind Techniker vor Ort im Einsatz — im Großraum Graz, im Mürztal rund um Bruck an der Mur und Leoben sowie in der Südsteiermark und dem Steirischen Vulkanland. Auch hier steht die Diagnose vor dem Teiletausch: Fehlercode auslesen, Bauteile messen, Wasser- und Stromweg prüfen, erst dann tauschen.",
    coverage: "techniker-vor-ort",
    coverageNote:
      "In der Steiermark arbeiten Techniker vor Ort. Unser Firmensitz bleibt Wien — Anfrage, technische Vorklärung und Terminabstimmung laufen über uns.",
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
    responseNote: "Im Großraum Graz gut planbar, in den Bergbezirken nach Absprache.",
    sections: [
      {
        title: "Großraum Graz",
        body:
          "Graz ist nach Wien die zweitgrößte Stadt Österreichs, und die Einsatzsituation ist ähnlich: viele Altbauwohnungen mit engen Stiegenhäusern, oft ohne Lift, dazu ein hoher Anteil an Studentenwohnungen mit älteren Geräten. Für den Termin ist deshalb wichtig, in welchem Stock das Gerät steht und ob ein Lift vorhanden ist — ein Kühlgerät im vierten Stock ohne Lift ist ein anderer Einsatz als eines im Erdgeschoss."
      },
      {
        title: "Mürztal, Obersteiermark und Vulkanland",
        body:
          "Bruck an der Mur, Leoben, Liezen und Murau im Norden, Feldbach, Fürstenfeld und Deutschlandsberg im Süden: flächige Bezirke, längere Wege, dafür meist einfacher Zugang zum Gerät. Termine planen wir hier gezielter und bündeln sie mit Einsätzen in derselben Richtung, was die Vorlaufzeit etwas erhöht."
      },
      {
        title: "Was den Termin verkürzt",
        body:
          "Marke, vollständige Modellnummer vom Typenschild und der angezeigte Fehlercode. Damit lässt sich vorab einschätzen, welches Bauteil betroffen ist und ob es verfügbar ist. Notieren Sie den Code auch dann, wenn das Gerät zwischendurch wieder läuft — intermittierende Fehler sind ohne diesen Hinweis deutlich schwerer zu finden."
      },
      {
        title: "Reparieren oder ersetzen",
        body:
          "Bei älteren Geräten sagen wir offen, wenn Ersatzteilpreis und Restlebensdauer keine Reparatur mehr rechtfertigen. Diese Einschätzung bekommen Sie möglichst schon am Telefon — es hat für Sie keinen Wert, wenn ein Techniker anfährt, um dann vom Austausch abzuraten."
      }
    ],
    faq: [
      {
        question: "Kommt ein Techniker nach Graz?",
        answer:
          "Ja. In der Steiermark sind Techniker vor Ort im Einsatz, am dichtesten im Großraum Graz. Rufen Sie an oder schicken Sie eine Anfrage — wir klären Fehlerbild und Termin."
      },
      {
        question: "Was kostet die Anfahrt in der Steiermark?",
        answer:
          "Das hängt von der Adresse ab, deshalb steht hier kein fester Betrag. Sie erfahren die Anfahrtskosten am Telefon, bevor ein Termin vereinbart wird."
      },
      {
        question: "Werden auch Garagentore und Klimageräte betreut?",
        answer:
          "Der Schwerpunkt in der Steiermark liegt bei Haushaltsgeräten. Ob für Ihr Anliegen an Garagentor oder Klimaanlage ein Termin möglich ist, klären wir bei der Anfrage."
      }
    ],
    enriched: true
  },
  {
    slug: "salzburg",
    name: "Salzburg",
    metaTitle: "Reparatur Salzburg: Stadt, Flachgau, Pinzgau | MONTER",
    description:
      "Haushaltsgeräte-Reparatur in Salzburg: Stadt Salzburg, Hallein, Bischofshofen, Zell am See. Techniker vor Ort, Diagnose vor dem Teiletausch, klare Einschätzung.",
    h1: "Reparatur in Salzburg.",
    short: "Stadt Salzburg, Flachgau und Pinzgau mit Technikern vor Ort.",
    intro:
      "In Salzburg sind Techniker vor Ort im Einsatz — in der Stadt und im Flachgau am dichtesten, dazu Hallein, Bischofshofen, Zell am See und der Lungau. Ein Salzburg-Thema kommt hier dazu: In Regionen mit vielen Ferienwohnungen und Beherbergungsbetrieben hängen Termine stark an der Saison.",
    coverage: "techniker-vor-ort",
    coverageNote:
      "In Salzburg arbeiten Techniker vor Ort. Unser Firmensitz bleibt Wien — Anfrage, technische Vorklärung und Terminabstimmung laufen über uns.",
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
    responseNote: "In Stadt und Flachgau gut planbar, in den Gebirgsgauen saisonabhängig.",
    sections: [
      {
        title: "Stadt Salzburg und Flachgau",
        body:
          "In der Stadt Salzburg prägen Altstadt und Gründerzeitviertel das Bild: enge Zufahrten, Innenhöfe, Stiegenhäuser ohne Lift. Wenn Sie bei der Anfrage sagen können, wo sich das Gerät befindet und wie der Zugang aussieht, planen wir den Einsatz passend — bei einem Kühl- oder Waschgerätetransport macht das den Unterschied zwischen einem und zwei Terminen. Im Flachgau rund um Neumarkt, Wallersee und Hallwang sind die Wege kürzer und die Zugänge einfacher."
      },
      {
        title: "Pinzgau, Pongau und Lungau",
        body:
          "Bischofshofen, Zell am See und Tamsweg liegen weiter auseinander, und die Fahrzeiten sind wetterabhängig. In der Hochsaison kommt dazu, dass in Ferienwohnungen und Beherbergungsbetrieben Geräte stärker beansprucht werden und Termine knapper sind. Wenn ein Gerät in einem vermieteten Objekt steht, hilft eine Kontaktperson vor Ort, die aufschließt."
      },
      {
        title: "Was den Termin verkürzt",
        body:
          "Marke, vollständige Modellnummer vom Typenschild und der angezeigte Fehlercode. In Beherbergungsbetrieben mit mehreren gleichen Geräten ist zusätzlich hilfreich, ob der Fehler nur eines oder mehrere Geräte betrifft — das deutet oft auf Wasserqualität, Anschlusssituation oder Nutzung hin und nicht auf einen Gerätedefekt."
      },
      {
        title: "Reparieren oder ersetzen",
        body:
          "Bei Geräten in gewerblich genutzten Wohnungen zählt Ausfallzeit oft mehr als der Reparaturpreis. Wir sagen deshalb offen, wenn ein Gerät wiederholt ausfallen wird und ein Austausch die ruhigere Lösung ist — und ebenso, wenn sich eine Reparatur klar lohnt."
      }
    ],
    faq: [
      {
        question: "Kommt ein Techniker in die Stadt Salzburg?",
        answer:
          "Ja. In Salzburg sind Techniker vor Ort im Einsatz, am dichtesten in der Stadt und im Flachgau. Rufen Sie an oder schicken Sie eine Anfrage — wir klären Fehlerbild und Termin."
      },
      {
        question: "Was kostet die Anfahrt in Salzburg?",
        answer:
          "Das hängt von der Adresse ab, deshalb steht hier kein fester Betrag. Sie erfahren die Anfahrtskosten am Telefon, bevor ein Termin vereinbart wird."
      },
      {
        question: "Sind Termine in der Hochsaison möglich?",
        answer:
          "Ja, aber mit mehr Vorlauf. In Regionen mit vielen Ferienwohnungen sind Termine zu Saisonbeginn und in den Ferienwochen knapper. Melden Sie sich in solchen Fällen früher — und bei einem ausgefallenen Kühlgerät sofort telefonisch."
      }
    ],
    enriched: true
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

/** Wien und Niederösterreich — vom Standort aus, mit festen Anfahrtssätzen. */
export const coreRegions = regionPages.filter((region) => region.coverage === "kerngebiet");

/** Weitere Bundesländer mit Technikern vor Ort. */
export const additionalRegions = regionPages.filter(
  (region) => region.coverage === "techniker-vor-ort"
);

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

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
  /** Beispielbild, kein Einsatzfoto. */
  image: string;
  imageAlt: string;
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
      "MONTER im Einsatzgebiet Wien: alle 23 Bezirke, Anfahrt ab 96 € inkl. MwSt., Termine oft binnen 1–2 Tagen. Wie Anfahrt, Parksituation und Terminplanung in Wien konkret ablaufen.",
    h1: "Einsatzgebiet Wien.",
    short:
      "Alle 23 Bezirke mit eigenem Team, kurze Wege, Anfahrt ab 96 € inkl. MwSt. — unser Kerngebiet.",
    image: "/assets/startseite-waschmaschine-produkt-wien.webp",
    imageAlt: "Weiße Frontlader-Waschmaschine mit runder Glastür.",
    intro:
      "Wien ist unser Kerngebiet: Unser Standort liegt in Floridsdorf, unsere Techniker fahren von hier aus alle 23 Bezirke an. Weil die Wege kurz sind, sind Termine oft schon binnen ein bis zwei Tagen möglich — und bei einem Wasseraustritt oder einem ausgefallenen Tiefkühlgerät auch am selben Tag. Diese Seite erklärt, wie Anfahrt, Terminplanung und Zugang in Wien konkret ablaufen.",
    coverage: "kerngebiet",
    coverageNote:
      "Wien betreuen wir vollständig mit eigenen Technikern. Unser Standort ist die Rappgasse 1/6 in 1210 Wien — von dort fahren wir alle 23 Bezirke an.",
    travelFee: {
      appliance: "96 €",
      garage: "132 €"
    },
    cities: viennaDistricts,
    featuredCities: viennaDistricts,
    services: ["haushaltsgeraete", "garagentore", "klimageraete"],
    responseNote: "Termine meist binnen 1–2 Tagen, dringende Fälle oft am selben Tag.",
    sections: [
      {
        title: "Anfahrt und Termine in Wien",
        body:
          "Die Anfahrt innerhalb Wiens beträgt 96 € für Haushaltsgeräte und 132 € für Garagentor-Arbeiten, jeweils pro Einsatz vor Ort und inklusive 20 % MwSt. Weil unser Standort in Floridsdorf liegt und alle Bezirke innerhalb kurzer Fahrzeit erreichbar sind, gibt es in Wien keine Staffelung nach Bezirk. Wir planen mehrere Einsätze pro Tag in räumlicher Nähe — dadurch entstehen kurzfristig freie Fenster, gerade am Vormittag."
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
          "Nein. Innerhalb Wiens gilt ein einheitlicher Anfahrtssatz von 96 € für Haushaltsgeräte und 132 € für Garagentore — unabhängig davon, ob der Einsatz in der Inneren Stadt oder in Liesing liegt. Alle Preise inkl. MwSt."
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
      "MONTER in Niederösterreich: Wiener Umland, Industrieviertel und Weinviertel mit eigenem Team, Anfahrt ab 120 € inkl. MwSt. Ab einer Stunde Fahrzeit gilt eine Pauschale von 240 €.",
    h1: "Einsatzgebiet Niederösterreich.",
    short:
      "Wiener Umland mit eigenem Team, Anfahrt ab 120 € inkl. MwSt. — ab einer Stunde Fahrt gilt eine Pauschale.",
    image: "/assets/ueber-uns-garagentor-wien.webp",
    imageAlt: "Geschlossenes Sektionaltor neben einer roten Ziegelwand.",
    intro:
      "Niederösterreich fahren wir mit dem eigenen Team an — am dichtesten im Umland von Wien, wo die Fahrzeiten kurz sind. Je weiter eine Adresse entfernt liegt, desto stärker bestimmt die Fahrzeit den Termin: Ab etwa einer Stunde Anfahrt gilt eine Pauschale von 240 € inkl. MwSt. Diese Seite zeigt, welche Orte im Kernbereich liegen und wie wir mit weiter entfernten Adressen umgehen.",
    coverage: "kerngebiet",
    coverageNote:
      "Niederösterreich betreuen wir von Wien aus mit eigenen Technikern. Im Umland ist das Alltag, in den äußeren Bezirken entscheidet die Fahrzeit über Termin und Anfahrtspauschale.",
    travelFee: {
      appliance: "120 €",
      garage: "180 €"
    },
    cities: [
      { plz: "2000", name: "Stockerau" },
      { plz: "2100", name: "Korneuburg" },
      { plz: "2103", name: "Langenzersdorf" },
      { plz: "2201", name: "Gerasdorf bei Wien" },
      { plz: "2320", name: "Schwechat" },
      { plz: "2331", name: "Vösendorf" },
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
          "Die Anfahrt nach Niederösterreich beträgt 120 € für Haushaltsgeräte und 180 € für Garagentor-Arbeiten, jeweils inklusive 20 % MwSt. Liegt die Fahrzeit für An- und Abfahrt über einer Stunde, gilt stattdessen eine Pauschale von 240 €. Das klingt nach Kleingedrucktem, ist aber der ehrlichere Weg: Eine Fahrt nach Krems bindet einen Techniker deutlich länger als eine nach Mödling, und diesen Unterschied verstecken wir nicht in den Arbeitskosten."
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
        question: "Wann gilt die Pauschale von 240 € statt 120 €?",
        answer:
          "Sobald An- und Abfahrt zusammen mehr als eine Stunde Fahrzeit ausmachen. Wir sagen Ihnen das am Telefon vorab, sobald wir die Adresse kennen — Sie erfahren die Anfahrtskosten also vor dem Termin, nicht danach. Alle Preise inkl. MwSt."
      },
      {
        question: "Kommen Sie in jeden Bezirk Niederösterreichs?",
        answer:
          "Grundsätzlich ja, aber ehrlich gesagt lohnt es sich nicht immer für Sie. Bei sehr weit entfernten Adressen kann die Anfahrt einen erheblichen Teil der Gesamtkosten ausmachen. Rufen Sie kurz an: Wir sagen Ihnen offen, ob ein Einsatz von uns sinnvoll ist oder ob ein Betrieb in Ihrer Nähe die bessere Wahl ist."
      },
      {
        question: "Sind Garagentor-Arbeiten in Niederösterreich möglich?",
        answer:
          "Ja, inklusive Federwechsel, Antriebsreparatur und Wartung. Die Anfahrt beträgt hier 180 € inkl. MwSt., weil für Torarbeiten mehr Werkzeug und Material mitgeführt wird. Nennen Sie bitte Torart und Antriebsmarke — danach entscheidet sich, welche Teile wir einladen."
      }
    ],
    enriched: true
  },
  {
    slug: "linz",
    name: "Linz",
    metaTitle: "Haushaltsgeräte Reparatur Linz | MONTER Service",
    description:
      "Haushaltsgeräte-Reparatur in Linz: Innenstadt, Urfahr, Ebelsberg und die übrigen Stadtteile. Techniker vor Ort, Diagnose vor dem Teiletausch, Anfahrt vor dem Termin.",
    h1: "Reparatur in Linz.",
    short:
      "Techniker vor Ort in den 15 Stadtteilen. Schwerpunkt Haushaltsgeräte, Anfahrt wird vor dem Termin genannt.",
    image: "/assets/startseite-kuehlschrank-produkt-wien.webp",
    imageAlt: "Kühl-Gefrierkombination aus Edelstahl mit Gefrierfach unten.",
    intro:
      "In Linz sind Techniker vor Ort im Einsatz. Die Reparatur fährt nicht aus Wien an, sie passiert in der Stadt. Der Schwerpunkt sind Haushaltsgeräte: Waschmaschine, Trockner, Geschirrspüler, Kühl- und Gefriergerät, Backofen und Herd. Wels, Steyr und das übrige Oberösterreich gehören nicht zum Einsatzgebiet.",
    coverage: "techniker-vor-ort",
    coverageNote:
      "In Linz arbeiten Techniker vor Ort. Der Firmensitz bleibt die Rappgasse 1/6 in 1210 Wien. Anfrage und Termin laufen über uns, die Reparatur macht der Techniker in Linz.",
    travelFee: {
      appliance: "auf Anfrage",
      garage: "auf Anfrage"
    },
    cities: [
      { plz: "4020", name: "Innere Stadt" },
      { plz: "4040", name: "Urfahr" },
      { plz: "4040", name: "Pöstlingberg" },
      { plz: "4040", name: "St. Magdalena" },
      { plz: "4040", name: "Dornach-Auhof" },
      { plz: "4020", name: "Kaplanhof" },
      { plz: "4020", name: "Franckviertel" },
      { plz: "4020", name: "Bulgariplatz" },
      { plz: "4020", name: "Froschberg" },
      { plz: "4020", name: "Bindermichl-Keferfeld" },
      { plz: "4020", name: "Spallerhof" },
      { plz: "4030", name: "Neue Heimat" },
      { plz: "4030", name: "Kleinmünchen-Auwiesen" },
      { plz: "4030", name: "Ebelsberg" },
      { plz: "4030", name: "Pichling" }
    ],
    services: ["haushaltsgeraete"],
    responseNote: "Im Stadtgebiet gut planbar. Die Anfahrt nennen wir am Telefon, bevor ein Termin steht.",
    sections: [
      {
        title: "Innenstadt, Urfahr und die Siedlungen",
        body:
          "Linz mischt Gründerzeit in der Innenstadt und in Urfahr mit Nachkriegssiedlungen im Franckviertel und in Ebelsberg sowie neueren Wohnungen am Hafen und in der Solar City. Im Altbau sind Zulauf und Abfluss oft älter als die Waschmaschine. Eine auslaufende Maschine ist dort nicht automatisch ein Gerätefehler. In den Siedlungen stehen die Geräte meist frei, der Zugang ist einfacher als im Stiegenhaus ohne Lift."
      },
      {
        title: "Diagnose vor dem Teiletausch",
        body:
          "Auch in Linz gilt: erst messen, dann tauschen. Ein Code zur Ablaufpumpe sagt, dass kein Wasser wegkommt, nicht dass die Pumpe defekt ist. Oft sind Flusensieb, Schlauch oder Siphon verlegt. Das Linzer Leitungswasser ist hart, etwa 14 bis 21 °dH. Kalk am Heizstab ist deshalb ein häufiger Befund, wenn ein Programm lauwarm bleibt."
      },
      {
        title: "Anfahrt ohne festen Satz",
        body:
          "Für Wien und Niederösterreich stehen die Anfahrtssätze auf der Preisseite. Für Linz gibt es keinen festen Betrag, weil der Techniker vor Ort ist und nicht aus Floridsdorf anfährt. Sie erfahren die Anfahrt am Telefon, sobald die Adresse feststeht, und zwar vor dem Termin."
      },
      {
        title: "Was den Termin verkürzt",
        body:
          "Marke, die vollständige Modellnummer vom Typenschild und der Fehlercode. Damit lässt sich vorab sagen, welches Teil wahrscheinlich gebraucht wird. Garagentor und Klimagerät sind in Linz nicht das reguläre Spektrum. Ob dafür ein Termin möglich ist, klären wir bei der Anfrage, versprechen ihn aber nicht."
      }
    ],
    faq: [
      {
        question: "Kommt ein Techniker nach Linz?",
        answer:
          "Ja. In Linz sind Techniker vor Ort im Einsatz, in allen 15 Stadtteilen. Der Firmensitz bleibt Wien. Anfrage und Terminabstimmung laufen über uns."
      },
      {
        question: "Was kostet die Anfahrt in Linz?",
        answer:
          "Das hängt von der Adresse ab, deshalb steht hier kein fester Betrag. Sie erfahren die Anfahrtskosten am Telefon, bevor ein Termin vereinbart wird."
      },
      {
        question: "Fahren Sie auch nach Wels oder Steyr?",
        answer:
          "Nein. Das Einsatzgebiet in Oberösterreich ist Linz. Wels, Steyr und die Bezirke außerhalb der Stadt nehmen wir nicht an."
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

/** Linz: Techniker vor Ort, ohne festes Anfahrtsentgelt. */
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
 * Alle bedienten Gebiete für areaServed. Niederösterreich ist ein Bundesland,
 * Wien und Linz sind Städte. Der provider bleibt die LocalBusiness in Wien.
 */
export const servedAreas: ServedArea[] = regionPages.map((region) => ({
  type: region.slug === "niederoesterreich" ? "State" : "City",
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

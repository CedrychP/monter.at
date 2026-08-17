/**
 * Markenseiten mit herstellerspezifischem Inhalt.
 *
 * FACHLICHE PRÜFUNG OFFEN: Alle `errorCodes`-Listen in dieser Datei und in
 * brandDeviceContent.ts sind vorbereitet, aber noch nicht von einem Techniker
 * gegengeprüft. Sie werden erst gerendert, wenn `errorCodesReviewed` auf true
 * steht — falsche Fehlercodes schaden mehr als fehlende.
 */

export type BrandErrorCode = {
  code: string;
  meaning: string;
};

export type BrandPage = {
  slug: string;
  brand: string;
  metaTitle: string;
  description: string;
  /** Teaser im Marken-Hub. */
  hubTeaser: string;
  intro: string;
  /** Hersteller-Hintergrund: Konzern, Plattformen, Verbreitung in Wien. */
  profile: string;
  modelSeries: string[];
  partsNote: string;
  errorCodes: BrandErrorCode[];
  errorCodesReviewed: boolean;
  sections: {
    title: string;
    body: string;
  }[];
};

export const brandPages: BrandPage[] = [
  {
    slug: "bosch-reparatur-wien",
    brand: "Bosch",
    metaTitle: "Bosch Reparatur Wien | Fehlercodes & Service | MONTER",
    description:
      "Bosch Haushaltsgeräte Reparatur in Wien: Serie 2 bis Serie 8, typische Fehlercodes wie E15, E17 und E18, gute Ersatzteillage. Markenoffener Service, schnelle Diagnose.",
    hubTeaser:
      "Serie 2 bis 8, BSH-Plattform mit Siemens und Neff — sehr gute Ersatzteillage.",
    intro:
      "Bosch ist die am häufigsten verbaute Gerätemarke in Wiener Küchen — vom Einbaugeschirrspüler in der Neubauwohnung bis zur Waschmaschine im Altbau. Für uns bedeutet das: viel Erfahrung mit denselben Baugruppen und eine sehr gute Teileversorgung. Wir arbeiten an freistehenden und eingebauten Bosch Geräten in ganz Wien und im nahen Niederösterreich.",
    profile:
      "Bosch Hausgeräte gehören zur BSH Hausgeräte GmbH — gemeinsam mit Siemens, Neff, Constructa und Gaggenau. Diese Geräte teilen sich in weiten Teilen Plattformen, Bauteile und die Fehlercode-Logik. Praktisch heißt das: Ein Bosch und ein Siemens Geschirrspüler derselben Generation sind technisch nahe Verwandte, und Ersatzteile sind oft baugleich. Das erweitert die Teileverfügbarkeit deutlich, gerade bei älteren Geräten.",
    modelSeries: [
      "Serie 2 — Einstiegsgeräte, einfache Elektronik",
      "Serie 4 — verbreiteteste Klasse in Mietwohnungen",
      "Serie 6 — mehr Sensorik, EcoSilence-Antriebe",
      "Serie 8 — Topausstattung, Home Connect",
      "Typenschild-Kürzel: WA… Waschmaschine, WT… Trockner, SM… Geschirrspüler, HB… Backofen, KG… Kühl-Gefrierkombination"
    ],
    partsNote:
      "Ersatzteillage sehr gut: Verschleißteile wie Laugenpumpen, Türverriegelungen, Heizungen, Dichtungen und Stoßdämpfer sind für gängige Serien meist lagernd oder binnen weniger Tage lieferbar. Auch für Geräte über zehn Jahre finden wir in der Regel noch Teile, weil viele Komponenten über die gesamte BSH-Gruppe hinweg verwendet werden. Enger wird es bei Bedienmodulen und Displays älterer Home-Connect-Geräte.",
    errorCodes: [
      { code: "E15", meaning: "Geschirrspüler: Wasser in der Bodenwanne, Aquastop hat ausgelöst" },
      { code: "E24", meaning: "Geschirrspüler: Wasser läuft nicht ab — Sieb, Ablaufschlauch oder Pumpe blockiert" },
      { code: "E17", meaning: "Wasserzulauf zu langsam oder kein Zulauf — Ventil, Sieb oder Aquastop" },
      { code: "E18", meaning: "Abpumpen dauert zu lange — Laugenpumpe oder Flusensieb blockiert" },
      { code: "E23", meaning: "Waschmaschine: Aquastop ausgelöst, Wasser in der Bodenwanne" },
      { code: "F21", meaning: "Antriebs- oder Motorfehler, Trommel läuft unrund oder nicht an" }
    ],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Wo Bosch Geräte typischerweise Probleme machen",
        body:
          "Bei Waschmaschinen sind Laugenpumpe, Flusensieb und Türverriegelung die häufigsten Kandidaten, bei Geschirrspülern die Umwälzpumpe, der Durchlauferhitzer und die Bodenwannen-Sicherung. Backöfen fallen meist über Temperaturfühler, Heizelement oder Bedienmodul aus, Kühlgeräte über Abtauheizung, Lüfter oder Dichtungen. Weil sich diese Baugruppen über viele Serien hinweg wiederholen, ist die Diagnose bei Bosch oft schneller als bei Nischenmarken."
      },
      {
        title: "Fehlercode auslesen und richtig einordnen",
        body:
          "Bosch Geräte zeigen Codes direkt im Display oder — bei Geräten ohne Display — über blinkende Programmleuchten. Wichtig zu wissen: Der Code benennt den gestörten Bereich, nicht das defekte Bauteil. E18 heißt beispielsweise, dass das Abpumpen zu lange dauert; das kann am Sieb, an der Pumpe, am Druckschalter oder am Ablaufschlauch liegen. Wir messen deshalb nach, statt allein auf den Code hin zu tauschen."
      },
      {
        title: "Reparatur oder Austausch bei Bosch",
        body:
          "Wegen der guten Teilelage bleibt eine Reparatur bei Bosch oft auch nach zehn Jahren wirtschaftlich — vor allem bei Einbaugeräten, wo ein Austausch zusätzlich Möbelanpassungen nach sich ziehen kann. Kritisch wird es, wenn Steuerelektronik und Motor gleichzeitig betroffen sind oder ein Trommellager im geschlossenen Bottich sitzt. Wir rechnen das vor Ort offen durch, bevor Teile bestellt werden."
      }
    ]
  },
  {
    slug: "miele-reparatur-wien",
    brand: "Miele",
    metaTitle: "Miele Reparatur Wien | W1, T1 & G7000 Service | MONTER",
    description:
      "Miele Reparatur in Wien: W1 Waschmaschinen, T1 Trockner, G-Serie Geschirrspüler. Fehlercodes wie F11, F19 und F50, lange Ersatzteilverfügbarkeit.",
    hubTeaser:
      "W1, T1 und G-Serie — lange Teileversorgung, Reparatur lohnt oft auch nach 15 Jahren.",
    intro:
      "Miele Geräte sind auf eine lange Lebensdauer gebaut, und genau das macht die Reparatur meist zur besseren Wahl gegenüber einem Neukauf. Wir sehen in Wien regelmäßig Miele Waschmaschinen und Geschirrspüler jenseits der 15 Jahre, die nach einem Bauteiltausch wieder viele Jahre laufen — vom Altbau in Währing bis zur Objektküche im Gewerbe.",
    profile:
      "Miele ist ein eigenständiges Familienunternehmen und entwickelt seine Geräte auf eigenen Plattformen — anders als bei Konzernmarken sind Bauteile also nicht mit anderen Herstellern austauschbar. Dafür hält Miele Ersatzteile ungewöhnlich lange verfügbar und arbeitet konstruktiv mit robusten Baugruppen wie dem gewarteten Antriebssystem und Edelstahl-Bottichen. Für uns heißt das: aufwendigere Teilebeschaffung, aber deutlich häufiger eine wirtschaftlich sinnvolle Reparatur.",
    modelSeries: [
      "W1 — Waschmaschinen-Generation mit TwinDos und CapDosing",
      "T1 — Wärmepumpentrockner mit EcoDry",
      "G 5000 / G 7000 — Geschirrspüler-Generationen mit AutoDos",
      "Ausstattungslinien: Classic, Active, Active Plus, Excellence, Edition",
      "Miele Professional — Gewerbegeräte mit eigener Teilenummerlogik"
    ],
    partsNote:
      "Miele gibt für viele Baureihen eine Ersatzteilverfügbarkeit über deutlich mehr als ein Jahrzehnt an — das ist im Markt die Ausnahme und der Hauptgrund, warum sich eine Miele Reparatur so oft rechnet. Verschleißteile wie Türdichtungen, Pumpen, Kohlebürsten, Heizungen und Stoßdämpfer sind gut beschaffbar. Elektronikmodule sind teurer als bei anderen Marken, halten aber auch länger. Baugleiche Fremdteile gibt es kaum — wir arbeiten hier bewusst mit Originalteilen.",
    errorCodes: [
      { code: "F11", meaning: "Ablauffehler — Wasser wird nicht oder zu langsam abgepumpt" },
      { code: "F19", meaning: "Zulauffehler — kein oder zu wenig Wasserzulauf" },
      { code: "F50", meaning: "Fehler am Trommelantrieb bzw. Antriebsmotor" },
      { code: "F53", meaning: "Signal des Drehzahlgebers fehlt oder ist unplausibel" },
      { code: "F70", meaning: "Geschirrspüler: Fehler in der Wasserstandserkennung" },
      { code: "F78", meaning: "Geschirrspüler: Störung an der Umwälzpumpe" }
    ],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Warum sich Miele Reparaturen fast immer rechnen",
        body:
          "Bei den meisten Marken kippt die Wirtschaftlichkeit nach acht bis zehn Jahren, weil Teile knapp und Gehäuse verschlissen sind. Bei Miele ist das anders: Bottich, Lager und Gehäuse überleben oft mehrere Bauteilgenerationen. Ein Pumpen- oder Heizungstausch an einer 15 Jahre alten W1 ist deshalb meist deutlich günstiger als ein gleichwertiges Neugerät — und Sie behalten ein Gerät, dessen Verschleißverhalten Sie kennen."
      },
      {
        title: "Typische Fehlerbilder bei Miele",
        body:
          "Häufig sind bei Waschmaschinen Ablaufprobleme durch das Flusensieb, verschlissene Kohlebürsten am Motor älterer Baureihen und Türschlösser, die nicht mehr verriegeln. Bei T1 Wärmepumpentrocknern setzt sich der Verdampfer mit der Zeit zu, was die Trockenzeit verlängert. Geschirrspüler melden vor allem Umwälzpumpe, Heizung und Wasserstandserkennung. Bei Geräten mit AutoDos kommen Dosiersystem und Ventile als eigene Fehlerquelle dazu."
      },
      {
        title: "Miele Professional und Gewerbegeräte",
        body:
          "In Wiener Gastronomie, Ordinationen und Hausverwaltungen laufen viele Miele Professional Geräte mit deutlich höherer Taktung als Haushaltsgeräte. Dort ist planbare Wartung wichtiger als Reparatur im Störfall: Wenn eine Waschmaschine im Waschsalon oder in der Ordination ausfällt, steht der Betrieb. Wir stimmen für solche Anlagen Intervalle ab, statt auf den Ausfall zu warten."
      }
    ]
  },
  {
    slug: "siemens-reparatur-wien",
    brand: "Siemens",
    metaTitle: "Siemens Reparatur Wien | iQ-Serie & Fehlercodes | MONTER",
    description:
      "Siemens Haushaltsgeräte Reparatur in Wien: iQ100 bis iQ800, Fehlercodes wie E15, E17 und E24, gute Ersatzteillage über die BSH-Plattform.",
    hubTeaser:
      "iQ100 bis iQ800 — technisch nah an Bosch, dadurch breite Teileverfügbarkeit.",
    intro:
      "Siemens Hausgeräte sind in Wien vor allem in Neubauwohnungen und hochwertigen Einbauküchen verbreitet. Technisch stehen sie Bosch sehr nahe, weil beide Marken zur BSH gehören und dieselben Plattformen nutzen — das kommt der Reparatur direkt zugute: gleiche Diagnoselogik, überwiegend baugleiche Ersatzteile.",
    profile:
      "Siemens Hausgeräte werden von der BSH Hausgeräte GmbH gebaut, dem gleichen Unternehmen wie Bosch, Neff, Constructa und Gaggenau. Fehlercode-Systematik und viele Baugruppen sind mit Bosch identisch oder nah verwandt. Für die Praxis bedeutet das: Wenn ein Siemens-spezifisches Teil nicht verfügbar ist, lässt sich häufig ein baugleiches Bosch- oder Neff-Teil verwenden — das verkürzt Wartezeiten deutlich.",
    modelSeries: [
      "iQ100 — Grundausstattung",
      "iQ300 — häufigste Klasse in Mietobjekten",
      "iQ500 — mehr Sensorik und Programme",
      "iQ700 / iQ800 — Topausstattung mit Home Connect",
      "Typenschild-Kürzel: WM… Waschmaschine, WT… Trockner, SN/SR… Geschirrspüler, HB… Backofen, KI/KG… Kühlgeräte"
    ],
    partsNote:
      "Ersatzteillage sehr gut, weil Siemens die Teilebasis der gesamten BSH-Gruppe nutzt. Pumpen, Ventile, Türverriegelungen, Heizungen und Dichtungen sind für gängige iQ-Baureihen kurzfristig verfügbar. Bei Bedienmodulen und Touch-Displays der iQ700/iQ800-Klasse sind Preise und Lieferzeiten höher — hier prüfen wir vorab, ob sich die Reparatur gegen ein Neugerät noch rechnet.",
    errorCodes: [
      { code: "E15", meaning: "Geschirrspüler: Wasser in der Bodenwanne, Aquastop hat ausgelöst" },
      { code: "E17", meaning: "Wasserzulauf zu langsam oder blockiert — Ventil, Sieb, Aquastop" },
      { code: "E18", meaning: "Abpumpen dauert zu lange — Pumpe oder Sieb blockiert" },
      { code: "E24", meaning: "Geschirrspüler: Wasser läuft nicht ab, Ablaufweg blockiert" },
      { code: "F21", meaning: "Antriebs- oder Motorfehler, Trommel läuft unrund oder nicht an" }
    ],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Gleiche Plattform wie Bosch — und was das bringt",
        body:
          "Weil Siemens und Bosch Geräte derselben Generation weitgehend baugleich sind, greifen wir bei Engpässen auf die Teilebasis der Schwestermarke zurück. Auch die Fehlercodes stimmen in vielen Fällen überein: E15, E17, E18 und E24 bedeuten bei beiden Marken dasselbe. Für Sie heißt das kürzere Wartezeiten und in vielen Fällen eine günstigere Reparatur als bei Marken mit eigener, geschlossener Teilewelt."
      },
      {
        title: "Typische Fehlerbilder bei Siemens",
        body:
          "Bei iQ-Waschmaschinen sind Laugenpumpe, Türverriegelung und Stoßdämpfer die häufigsten Ursachen, dazu Heizstab und Drucksensor. Geschirrspüler melden meist Zulauf oder Ablauf, Durchlauferhitzer und Umwälzpumpe. Bei Backöfen fallen Temperaturfühler und Bedienmodul auf, bei Kühl-Gefrierkombinationen Abtauheizung, Lüfter und Türdichtungen. Home-Connect-Geräte bringen zusätzlich WLAN-Module als eigene Fehlerquelle mit — die Grundfunktion bleibt davon aber meist unberührt."
      },
      {
        title: "Einbaugeräte und Küchenmontage",
        body:
          "Siemens Geräte sitzen häufig als Einbaugeräte in geplanten Küchen. Ein Austausch bedeutet dort oft Anpassungen an Front, Nische oder Sockel — deshalb ist die Reparatur bei Einbaugeräten wirtschaftlich meist klar vorne. Wir bauen für die Arbeit fachgerecht aus und wieder ein, inklusive Prüfung von Wasser-, Abwasser- und Stromanschluss."
      }
    ]
  },
  {
    slug: "aeg-reparatur-wien",
    brand: "AEG",
    metaTitle: "AEG Reparatur Wien | Serie 6000–9000 & Fehlercodes | MONTER",
    description:
      "AEG Haushaltsgeräte Reparatur in Wien: Serie 6000 bis 9000, ProSense und ÖKOMix, Fehlercodes wie E10, E20 und E40. Ersatzteile über die Electrolux-Gruppe.",
    hubTeaser:
      "Serie 6000 bis 9000, Electrolux-Plattform mit Zanussi und Electrolux-Geräten.",
    intro:
      "AEG Geräte begegnen uns in Wien häufig in Wohnungen der 2000er- und 2010er-Jahre, oft als Einbaugeräte. Die Marke gehört zu Electrolux und teilt Plattformen mit Electrolux und Zanussi — das erweitert die Ersatzteilbasis merkbar. Wir arbeiten an AEG Waschmaschinen, Trocknern, Geschirrspülern, Backöfen und Kühlgeräten in Wien und im nahen Niederösterreich.",
    profile:
      "AEG Hausgeräte gehören zur Electrolux-Gruppe, gemeinsam mit Electrolux und Zanussi. Viele Baugruppen — Pumpen, Motoren, Türschlösser, Elektronikplattformen — werden markenübergreifend eingesetzt. Wenn ein AEG-Teil nicht verfügbar ist, lässt sich deshalb oft ein baugleiches Electrolux- oder Zanussi-Teil verwenden. Die Fehlercode-Systematik ist innerhalb der Gruppe ebenfalls weitgehend einheitlich.",
    modelSeries: [
      "Serie 6000 — Grundausstattung mit ProSense-Mengenautomatik",
      "Serie 7000 — mittlere Klasse, häufig in Mietobjekten",
      "Serie 8000 — ÖKOMix bzw. erweiterte Sensorik",
      "Serie 9000 — Topausstattung",
      "Technologienamen: ProSense, ÖKOMix, SenseCook, AbsoluteCare, ComfortLift"
    ],
    partsNote:
      "Ersatzteillage gut, weil die Electrolux-Gruppe Bauteile über AEG, Electrolux und Zanussi hinweg verwendet. Pumpen, Türschlösser, Heizungen, Kohlebürsten und Dichtungen sind für die Serien 6000 bis 8000 in der Regel zügig lieferbar. Bei sehr alten AEG Geräten aus der Zeit vor der Serien-Nomenklatur wird es enger — hier entscheidet die Verfügbarkeit oft darüber, ob die Reparatur sinnvoll bleibt.",
    errorCodes: [
      { code: "E10", meaning: "Problem beim Wasserzulauf — Ventil, Sieb oder Zulaufschlauch" },
      { code: "E20", meaning: "Problem beim Ablauf — Pumpe, Sieb oder Ablaufschlauch blockiert" },
      { code: "E40", meaning: "Türverriegelung: Tür wird nicht als geschlossen erkannt" },
      { code: "i20", meaning: "Geschirrspüler: Wasser läuft nicht ab, Ablaufweg blockiert" },
      { code: "i30", meaning: "Geschirrspüler: Leckschutz hat ausgelöst" }
    ],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Typische Fehlerbilder bei AEG",
        body:
          "Bei Waschmaschinen sehen wir vor allem Ablaufprobleme, verschlissene Kohlebürsten an älteren Motoren und Türschlösser, die nicht mehr sauber verriegeln. Wärmepumpentrockner melden häufig einen zugesetzten Verdampfer oder eine verstopfte Kondensatpumpe. Bei Geschirrspülern mit ComfortLift kommt die Hebemechanik des Unterkorbs als zusätzliche mechanische Fehlerquelle dazu. Backöfen fallen meist über Temperaturfühler oder Bedienmodul aus."
      },
      {
        title: "Ersatzteile über die Electrolux-Gruppe",
        body:
          "Die gemeinsame Teilebasis mit Electrolux und Zanussi ist bei AEG der entscheidende Vorteil: Wir finden oft ein baugleiches Bauteil, auch wenn die AEG-Teilenummer nicht mehr geführt wird. Das verlängert die reparierbare Lebensdauer spürbar. Umgekehrt sind Elektronikmodule mit markenspezifischer Software nicht frei tauschbar — dort brauchen wir das passende Originalteil."
      },
      {
        title: "Reparatur oder Austausch bei AEG",
        body:
          "Bei Geräten der Serien 6000 bis 9000 lohnt sich eine Reparatur in der Regel, solange Bottich, Lager und Gehäuse in Ordnung sind. Kritisch wird es bei Lagerschäden in geschlossenen Bottichen und bei Kombinationen aus Elektronik- und Motorschaden. Wir nennen den Aufwand vor der Teilebestellung und vergleichen ihn offen mit dem Preis eines gleichwertigen Neugeräts."
      }
    ]
  },
  {
    slug: "beko-reparatur-wien",
    brand: "Beko",
    metaTitle: "Beko Reparatur Wien | Service & Ersatzteile | MONTER",
    description:
      "Beko Haushaltsgeräte Reparatur in Wien: Waschmaschinen, Trockner, Geschirrspüler und Kühlgeräte. Einschätzung zur Ersatzteillage und ehrlicher Kostenvergleich.",
    hubTeaser:
      "Arçelik-Gruppe mit Grundig und Elektra Bregenz — Wirtschaftlichkeit genau prüfen.",
    intro:
      "Beko Geräte sind in Wien weit verbreitet, weil sie preislich attraktiv sind — häufig in Mietwohnungen und als Erstausstattung. Bei der Reparatur ist deshalb die Wirtschaftlichkeitsfrage besonders wichtig: Bei einem günstigen Gerät ist die Grenze zum Neupreis schneller erreicht als bei einem Premiumhersteller. Wir sagen offen, wo diese Grenze liegt, statt Teile zu tauschen, die sich nicht rechnen.",
    profile:
      "Beko gehört zur türkischen Arçelik-Gruppe, die auch Grundig, Elektra Bregenz und Blomberg umfasst. Innerhalb der Gruppe werden Plattformen und Bauteile geteilt — ein Beko und ein Elektra Bregenz Gerät derselben Generation sind technisch oft nahe verwandt. Beko setzt in neueren Baureihen auf bürstenlose ProSmart-Inverter-Motoren, die konstruktiv weniger Verschleißteile haben als klassische Motoren mit Kohlebürsten.",
    modelSeries: [
      "ProSmart Inverter — bürstenlose Antriebe in neueren Waschmaschinen",
      "AquaFusion / SteamCure — Ausstattungsmerkmale bei Waschmaschinen",
      "HarvestFresh / NeoFrost — Kühlgeräte-Technologien",
      "Schwestermarken mit geteilter Technik: Grundig, Elektra Bregenz, Blomberg"
    ],
    partsNote:
      "Ersatzteillage bei aktuellen Baureihen solide: Pumpen, Türschlösser, Heizungen, Riemen und Dichtungen sind meist beschaffbar, oft auch über die Schwestermarken der Arçelik-Gruppe. Bei älteren oder für den Aktionshandel gebauten Modellen ist die Beschaffung dagegen mühsamer, und Elektronikmodule sind im Verhältnis zum Gerätewert teuer. Genau deshalb steht bei Beko der Kostenvergleich vor der Teilebestellung.",
    errorCodes: [],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Typische Fehlerbilder bei Beko",
        body:
          "Am häufigsten kommen Ablaufprobleme durch blockierte Pumpen und Siebe, defekte Türschlösser, verschlissene Riemen und Lagergeräusche bei Waschmaschinen. Kühl-Gefrierkombinationen melden vor allem Abtauprobleme, verstopfte Tauwasserabläufe und Lüfterschäden. Bei Geschirrspülern sind Umwälzpumpe, Heizung und Sprüharme die üblichen Kandidaten. Anzeigelogik und Fehlercodes unterscheiden sich zwischen Baureihen deutlich — teils Klartextcode im Display, teils Blinkmuster der Programmleuchten."
      },
      {
        title: "Wirtschaftlichkeit realistisch einschätzen",
        body:
          "Bei einem Gerät im unteren Preissegment kann ein Elektronikmodul samt Arbeitszeit schnell die Hälfte des Neupreises erreichen. Unsere Faustregel: Verschleißteile wie Pumpe, Türschloss, Heizung, Riemen oder Dichtung lohnen sich fast immer. Bei Motor-, Elektronik- oder Lagerschäden an älteren Beko Geräten rechnen wir vorab durch und sagen ehrlich, wenn ein Austausch die vernünftigere Wahl ist."
      },
      {
        title: "Was wir für die Anfrage brauchen",
        body:
          "Weil sich Beko Baureihen technisch stärker unterscheiden als bei Konzernmarken mit langlebigen Plattformen, ist die exakte Modellnummer hier besonders wichtig. Ein Foto des Typenschilds mit Modell- und Seriennummer genügt uns, um die Teilelage vorab zu prüfen — das erspart im Zweifel eine Anfahrt für ein Gerät, dessen Reparatur sich nicht rechnet."
      }
    ]
  },
  {
    slug: "gorenje-reparatur-wien",
    brand: "Gorenje",
    metaTitle: "Gorenje Reparatur Wien | Service & Ersatzteile | MONTER",
    description:
      "Gorenje Haushaltsgeräte Reparatur in Wien: WaveActive und SmartFlex Waschmaschinen, Geschirrspüler, Backöfen und Kühlgeräte. Diagnose, Teilelage, ehrliche Einschätzung.",
    hubTeaser:
      "SmartFlex und WaveActive, seit 2018 im Hisense-Konzern — Teilelage je Baujahr unterschiedlich.",
    intro:
      "Gorenje ist in Wien und Ostösterreich stark vertreten — auch wegen der Nähe zum slowenischen Produktionsstandort. Wir sehen die Marke häufig in Wohnanlagen und bei Hausverwaltungen, oft als komplette Gerätelinie einer Küche. Bei der Reparatur macht das Baujahr den Unterschied: Vor und nach der Übernahme durch Hisense unterscheidet sich die Teileversorgung merkbar.",
    profile:
      "Gorenje gehört seit 2018 zum chinesischen Hisense-Konzern, produziert aber weiter in Velenje. Für die Reparatur ist das relevant, weil sich Bauteile und Zulieferer mit den neueren Baureihen teilweise geändert haben: Bei Geräten aus der Zeit davor greifen wir auf die klassische Gorenje-Teilewelt zurück, bei jüngeren Modellen kommen Komponenten aus dem Hisense-Umfeld dazu. Beides ist beschaffbar — die Wege sind nur unterschiedlich.",
    modelSeries: [
      "SmartFlex — verbreitete Waschmaschinen- und Trocknerlinie",
      "WaveActive — Waschmaschinen mit Wave-Trommel",
      "SuperiorLine / Simplicity — Ausstattungslinien",
      "NoFrost Plus / FrostLess — Kühlgeräte-Technologien",
      "Designlinien: Retro Collection, Ora-Ïto"
    ],
    partsNote:
      "Ersatzteillage bei aktuellen SmartFlex- und WaveActive-Baureihen gut. Pumpen, Türschlösser, Heizungen, Riemen und Dichtungen sind meist zügig lieferbar. Bei Geräten aus den Jahren vor der Hisense-Übernahme kann die Beschaffung einzelner Elektronikteile länger dauern, weil Zulieferer gewechselt haben. Bei Designlinien wie der Retro Collection sind Sicht- und Gehäuseteile teurer und seltener — technische Bauteile dagegen entsprechen den Standardmodellen.",
    errorCodes: [],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Typische Fehlerbilder bei Gorenje",
        body:
          "Bei Waschmaschinen sind Laugenpumpe, Türschloss, Heizstab und Stoßdämpfer die häufigsten Ursachen; bei Trocknern setzt sich der Kondensator zu oder die Kondensatpumpe blockiert. Geschirrspüler melden meist Ablauf, Umwälzpumpe oder Heizung. Bei Backöfen fallen Temperaturfühler, Grill- und Unterhitzeheizkörper sowie Bedienmodule auf, bei Kühlgeräten Abtausystem, Lüfter und Türdichtungen."
      },
      {
        title: "Baujahr entscheidet über die Teilelage",
        body:
          "Vor einer Teilebestellung prüfen wir immer Modell- und Seriennummer, weil dieselbe Modellbezeichnung über die Jahre unterschiedliche Bauteile enthalten kann. Das ist bei Gorenje wichtiger als bei Herstellern mit über lange Zeit stabilen Plattformen. Mit einem Foto des Typenschilds können wir das schon vor dem Termin klären."
      },
      {
        title: "Ganze Gerätelinien und Hausverwaltungen",
        body:
          "Weil Gorenje in Wiener Wohnanlagen oft als komplette Küchenausstattung verbaut ist, betreuen wir für Hausverwaltungen regelmäßig mehrere gleiche Geräte. Das hat einen praktischen Vorteil: Wir kennen die typischen Schwachstellen der Baureihe, können Termine bündeln und häufig benötigte Teile gleich in passender Stückzahl mitbringen."
      }
    ]
  }
];

export const brandOverview = [
  "AEG",
  "AIDA",
  "AIRFORCE",
  "ALTUS",
  "AMICA",
  "ARISTON",
  "BALAY",
  "BAUKNECHT",
  "BEKO",
  "BLAUPUNKT",
  "BOMANN",
  "BOSCH",
  "BULTHAUP",
  "CANDY",
  "CATA",
  "CONSTRUCTA",
  "DAEWOO",
  "DOMETIC",
  "DUNAVOX",
  "ELEKTRA BREGENZ",
  "ELICA",
  "EUDORA",
  "EXQUISIT",
  "FABER",
  "FALCON",
  "FALMEC",
  "FRANKE",
  "GAGGENAU",
  "GORENJE",
  "GUTMANN",
  "HAIER",
  "HANSEATIC",
  "HISENSE",
  "HOOVER",
  "HOTPOINT",
  "IGNIS",
  "IKEA",
  "INDESIT",
  "JACUZZI",
  "KÜPPERSBUSCH",
  "KOENIC",
  "LA CORNUE",
  "LIEBHERR",
  "MEDION",
  "MIELE",
  "NABO",
  "NEFF",
  "NORDFROST",
  "NOVY",
  "PKM",
  "PRIVILEG",
  "RESPEKTA",
  "SAMSUNG",
  "SCHAUB LORENZ",
  "SCHOLTES",
  "SHARP",
  "SIEMENS",
  "SMEG",
  "TEKA",
  "VIVAX",
  "VESTFROST",
  "WHIRLPOOL",
  "ZANUSSI"
];

export function getBrandPage(slug: string) {
  return brandPages.find((brand) => brand.slug === slug);
}

const alphabetRanges = [
  { id: "a-d", label: "A – D", from: "A", to: "D" },
  { id: "e-h", label: "E – H", from: "E", to: "H" },
  { id: "i-l", label: "I – L", from: "I", to: "L" },
  { id: "m-p", label: "M – P", from: "M", to: "P" },
  { id: "q-z", label: "Q – Z", from: "Q", to: "Z" }
];

function initialOf(brand: string) {
  return brand
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .charAt(0)
    .toUpperCase();
}

/** Buchstabengruppen der Marken-Übersicht — Sprungziele der Alphabet-Links in der Navigation. */
export const brandAlphabetGroups = alphabetRanges.map((range) => ({
  ...range,
  href: `/marken#${range.id}`,
  brands: brandOverview.filter((brand) => {
    const initial = initialOf(brand);
    return initial >= range.from && initial <= range.to;
  })
}));

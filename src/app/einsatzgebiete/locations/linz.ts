import type { LocationPage } from "../locationPages";

/**
 * Die 15 bewohnten statistischen Bezirke von Linz (Gliederung seit 2014, ohne
 * Industriegebiet-Hafen). Postleitzahlen: 4040 nördlich der Donau, 4030 südlich
 * der Salzburger Straße, sonst 4020. Schwerpunkt Haushaltsgeräte; Anfahrt wird
 * vor dem Termin genannt, weil es für Oberösterreich keinen festen Satz gibt.
 */
export const linzDistricts: LocationPage[] = [
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "innere-stadt",
    name: "Innere Stadt",
    postalCodes: ["4020"],
    metaTitle: "Haushaltsgeräte Reparatur Linz Innere Stadt (4020) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur in der Linzer Innenstadt: Altstadt, Landstraße, Neustadtviertel und Bahnhofsviertel. Techniker vor Ort, Diagnose vor dem Teiletausch.",
    h1: "Reparatur in der Linzer Innenstadt (4020).",
    short: "Altstadt, Gründerzeit rund um die Landstraße und Neubau am Bahnhof.",
    intro:
      "In der Linzer Innenstadt liegen mittelalterliche Altstadt, gründerzeitliche Blöcke und das neue Bahnhofsviertel auf engem Raum. Für die Reparatur heißt das: Zufahrt und Anschlusssituation klären wir vorab, damit der Techniker mit den richtigen Teilen direkt zur Wohnung kommt.",
    character:
      "Rund um Hauptplatz und Altstadt ist der Bestand historisch, dazwischen und entlang der Landstraße dominiert die Gründerzeit mit hohen Räumen, engen Küchen und Stiegenhäusern, in denen Lifte nachgerüstet oder gar nicht vorhanden sind. Im Bahnhofsviertel und am Lenaupark stehen dagegen Wohn- und Bürobauten ab den 2000er-Jahren mit durchgehend integrierten Einbaugeräten. Dazu kommen viele Kanzleien, Ordinationen und Büros mit Teeküchen.",
    focus: [
      "Waschmaschinen im Altbau mit alten Zuläufen und Abflüssen",
      "Voll integrierte Einbaugeräte in Neubauten am Bahnhof und Lenaupark",
      "Geschirrspüler in Büros und Ordinationen mit hoher Laufleistung",
      "Geräte in oberen Stockwerken ohne Lift"
    ],
    sections: [
      {
        title: "Fußgängerzone und Zufahrt",
        body:
          "Landstraße und Altstadt sind großteils Fußgängerzone, Halteplätze sind knapp. Sagen Sie bei der Anfrage, von welcher Seite das Haus erreichbar ist und ob es einen Hof oder eine Einfahrt gibt. Ein Techniker, der mit Werkzeug und Ersatzteil weit gehen muss, verliert Zeit — mit dieser Information legen wir den Termin passend."
      },
      {
        title: "Im Altbau den Anschluss mitprüfen",
        body:
          "In Gründerzeithäusern sind Zuleitung, Absperrventil und Abfluss oft deutlich älter als die Waschmaschine. Ein Auslaufen oder ein Ablauffehler hat dort häufig seine Ursache außerhalb des Geräts. Wir prüfen die Anschlusssituation mit, bevor ein Bauteil getauscht wird — sonst tritt derselbe Fehler nach der Reparatur wieder auf."
      }
    ],
    faq: [
      {
        question: "Kommen Sie auch in die Fußgängerzone?",
        answer:
          "Ja. Nennen Sie bitte den nächstgelegenen Zugang und, falls vorhanden, eine Einfahrt oder Ladezone. Das ist für die Terminplanung in der Innenstadt wichtiger als der Gerätetyp."
      },
      {
        question: "Was kostet die Anfahrt in die Innenstadt?",
        answer:
          "Für Oberösterreich gibt es keinen pauschalen Satz. Sie erfahren die Anfahrtskosten am Telefon, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "urfahr",
    name: "Urfahr",
    postalCodes: ["4040"],
    metaTitle: "Haushaltsgeräte Reparatur Linz-Urfahr (4040) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur in Linz-Urfahr: Alt-Urfahr, Wohnanlagen und Hochhäuser nördlich der Donau. Techniker vor Ort, Kosten vor dem Termin geklärt.",
    h1: "Reparatur in Linz-Urfahr (4040).",
    short: "Alt-Urfahr an der Donau, Wohnanlagen und Hochhäuser rund um die Hauptstraße.",
    intro:
      "Urfahr ist der dicht bewohnte Stadtteil nördlich der Donau. Neben dem älteren Kern in Alt-Urfahr prägen große Wohnanlagen und einige Hochhäuser das Bild — für die Reparatur zwei ganz unterschiedliche Ausgangslagen.",
    character:
      "Alt-Urfahr ist kleinteilig und älter, die übrigen Viertel sind stark von Mietwohnanlagen aus der Zwischenkriegs-, NS- und Nachkriegszeit geprägt. Rund um die Hauptstraße stehen zudem Wohnhochhäuser wie beim Lentia, in denen Lift und Zugang über Hausverwaltung oder Portier geregelt sind. Viele Wohnungen haben kleine Küchen, in denen Geschirrspüler und Kühlgerät eng verbaut sind.",
    focus: [
      "Eng eingebaute Geschirrspüler und Kühlgeräte in kleinen Küchen",
      "Waschmaschinen in Kellerabteilen und Waschküchen",
      "Wohnhochhäuser mit Zugang über Hausverwaltung",
      "Kühl- und Gefriergeräte mit dringendem Handlungsbedarf"
    ],
    sections: [
      {
        title: "Geräte im Keller nahe der Donau",
        body:
          "Steht eine Waschmaschine oder Gefriertruhe in einem Keller, in den schon einmal Wasser eingedrungen ist, schalten Sie das Gerät nicht einfach wieder ein. Feuchtigkeit an Steuerung und Steckkontakten führt zu Kurzschlüssen oder wechselnden Fehlern. Sagen Sie uns bei der Anfrage, ob das Gerät nass geworden ist — das ändert die Diagnose."
      },
      {
        title: "Wohnanlagen und Hochhäuser",
        body:
          "In großen Anlagen kostet ein unklarer Zugang schnell Zeit. Nennen Sie Stiege, Stockwerk und ob jemand öffnen muss. Bei gleicher Ausstattung vieler Wohnungen hilft die vollständige Modellnummer vom Typenschild besonders: Dann bringt der Techniker das wahrscheinlich benötigte Teil gleich mit."
      }
    ],
    faq: [
      {
        question: "Mein Gefriergerät stand im Keller im Wasser. Kann man es noch retten?",
        answer:
          "Oft ja, aber nicht durch sofortiges Einschalten. Lassen Sie es ausgesteckt und trocken stehen und beschreiben Sie uns, wie hoch das Wasser stand. Danach lässt sich einschätzen, ob Kompressor und Steuerung betroffen sind."
      },
      {
        question: "Kommt ein Techniker nach Urfahr?",
        answer:
          "Ja, Urfahr gehört zum Linzer Stadtgebiet, das wir mit Technikern vor Ort betreuen. Die Anfahrtskosten erfahren Sie am Telefon, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "poestlingberg",
    name: "Pöstlingberg",
    postalCodes: ["4040"],
    metaTitle: "Haushaltsgeräte Reparatur Linz-Pöstlingberg (4040) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur am Pöstlingberg und in Gründberg: Einfamilienhäuser und Villen in Hanglage. Techniker vor Ort, Anfahrt vorab am Telefon geklärt.",
    h1: "Reparatur am Pöstlingberg (4040).",
    short: "Hanglage mit Einfamilienhäusern und Villen, Geräte oft in Keller und Hauswirtschaftsraum.",
    intro:
      "Der Pöstlingberg ist flächenmäßig groß, aber locker bebaut: überwiegend Einfamilienhäuser und Villen in Hanglage, dazu Gründberg und die Siedlungen an den Zufahrtsstraßen. Die Geräte stehen hier meist nicht in der Küchenzeile allein, sondern auch in Keller und Hauswirtschaftsraum.",
    character:
      "Auf rund 1.250 Gebäude kommen hier nur gut 2.600 Wohnungen — fast überall eigene Häuser. Waschmaschine, Trockner und Gefriertruhe stehen typischerweise im Keller, oft mit eigenem Bodenablauf. Die Zufahrten sind steil und schmal, im Winter kann das die Terminplanung beeinflussen. Dafür gibt es fast immer einen Parkplatz direkt vor dem Haus.",
    focus: [
      "Waschmaschinen und Trockner im Keller oder Hauswirtschaftsraum",
      "Gefriertruhen und Zweitkühlgeräte im Untergeschoss",
      "Einbauküchen in älteren Villen mit nachgerüsteten Anschlüssen",
      "Backöfen und Kochfelder in Einfamilienhäusern"
    ],
    sections: [
      {
        title: "Zulauffehler und Wasserdruck",
        body:
          "Meldet eine Waschmaschine oder ein Geschirrspüler einen Zulauffehler, liegt es nicht immer am Magnetventil. Verlegte Siebe im Zulaufschlauch, ein halb geschlossenes Absperrventil oder ein ungünstiger Wasserdruck führen zum selben Code. Wir prüfen das mit, bevor ein Bauteil getauscht wird."
      },
      {
        title: "Zufahrt in Hanglage",
        body:
          "Bei steilen oder schmalen Zufahrten hilft uns ein kurzer Hinweis, wo der Techniker halten kann. Muss ein schweres Teil oder ein ganzes Gerät über Außenstiegen transportiert werden, sagen Sie es bitte bei der Anfrage — das bestimmt die Dauer des Einsatzes."
      }
    ],
    faq: [
      {
        question: "Kommen Sie auch im Winter auf den Pöstlingberg?",
        answer:
          "Ja. Bei Schnee und Glätte stimmen wir den Termin gegebenenfalls kurzfristig ab, damit der Techniker sicher zufahren kann."
      },
      {
        question: "Was kostet die Anfahrt?",
        answer:
          "Das hängt von der Adresse ab und wird am Telefon genannt, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "st-magdalena",
    name: "St. Magdalena",
    postalCodes: ["4040"],
    metaTitle: "Haushaltsgeräte Reparatur Linz-St. Magdalena (4040) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur in St. Magdalena: Einfamilienhäuser am Hang und Wohnanlagen im Nordosten von Linz. Techniker vor Ort, Diagnose vor dem Teiletausch.",
    h1: "Reparatur in St. Magdalena (4040).",
    short: "Einfamilienhäuser am Rand zum Mühlviertel neben Wohnanlagen im Tal.",
    intro:
      "St. Magdalena liegt im Nordosten von Linz, am Übergang zum Mühlviertel. Hier wechseln sich Einfamilienhäuser in Hanglage und Wohnanlagen ab — für die Reparatur heißt das: mal Keller mit Waschküche, mal Etagenwohnung mit Einbauküche.",
    character:
      "Etwa 1.800 Gebäude mit gut 7.000 Wohnungen: ein gemischter Stadtteil zwischen Siedlungshaus und Mehrparteienhaus. In den Häusern stehen Waschmaschinen und Gefriergeräte oft im Keller, wo es kühler und feuchter ist als im Wohnraum. In den Wohnanlagen sind die Küchen kompakter, Geräte stehen eng verbaut.",
    focus: [
      "Waschmaschinen in Kellern und Waschküchen von Einfamilienhäusern",
      "Einbaugeräte in Wohnanlagen mit kompakten Küchen",
      "Gefriergeräte im Keller mit Vereisung oder Temperaturproblemen",
      "Geschirrspüler mit Kalk- und Spülproblemen"
    ],
    sections: [
      {
        title: "Gefriergeräte in kühlen Räumen",
        body:
          "Viele Gefriergeräte sind nur für bestimmte Umgebungstemperaturen ausgelegt, die Klimaklasse steht auf dem Typenschild. Steht ein Gerät in einem sehr kalten Keller, kann es seltener anspringen und im Innenraum zu warm werden, obwohl technisch nichts defekt ist. Diese Einordnung sparen wir Ihnen gern schon am Telefon."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Die Anfahrt hängt von der Adresse ab und wird genannt, bevor ein Termin vereinbart wird. Nennen Sie Stockwerk und ob das Gerät im Keller steht — dann planen wir die Dauer realistisch."
      }
    ],
    faq: [
      {
        question: "Mein Gefrierschrank im Keller taut an. Ist er kaputt?",
        answer:
          "Nicht zwingend. In sehr kühlen Räumen arbeiten manche Geräte außerhalb ihrer Klimaklasse. Nennen Sie uns Modell und Raumtemperatur, dann lässt sich einschätzen, ob ein Defekt oder der Standort die Ursache ist."
      },
      {
        question: "Werden auch Garagentore betreut?",
        answer:
          "Der Schwerpunkt in Linz liegt bei Haushaltsgeräten. Ob für ein anderes Anliegen ein Termin möglich ist, klären wir bei der Anfrage."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "dornach-auhof",
    name: "Dornach-Auhof",
    postalCodes: ["4040"],
    metaTitle: "Haushaltsgeräte Reparatur Linz Dornach-Auhof (4040) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur in Dornach-Auhof rund um die JKU: Mietwohnungen, Wohnanlagen und Einfamilienhäuser. Termine auch für Vermieter.",
    h1: "Reparatur in Dornach-Auhof (4040).",
    short: "Rund um die Kepler Universität: Mietwohnungen, WGs und Wohnanlagen.",
    intro:
      "Dornach-Auhof ist durch die Johannes Kepler Universität geprägt. Neben Einfamilienhäusern gibt es viele Mietwohnungen, Wohngemeinschaften und Studentenheime — und damit Geräte, die deutlich mehr laufen als in einem durchschnittlichen Haushalt.",
    character:
      "Ein großer Teil der Wohnungen ist vermietet, oft möbliert und mit Geräten, die der Vermieter gestellt hat. In WGs laufen Waschmaschine und Geschirrspüler fast täglich, Flusensieb und Filter werden seltener gereinigt als nötig. Gemeinschaftswaschküchen in Heimen werden meist über den Betreiber betreut; Wohnungen und Häuser im Umfeld sind unser typischer Einsatz.",
    focus: [
      "Waschmaschinen und Geschirrspüler in WGs mit hoher Laufleistung",
      "Geräte in vermieteten Wohnungen mit Zugang über Dritte",
      "Kühlschränke mit vereistem Verdampfer oder Geräuschen",
      "Einbaugeräte in neueren Wohnanlagen"
    ],
    sections: [
      {
        title: "Wenn Sie vermieten",
        body:
          "Wir brauchen eine Person vor Ort, die aufschließt und das Gerät zeigen kann, und eine Freigabe, bis zu welchem Betrag repariert werden darf. So vermeiden Sie einen zweiten Termin, nur weil während des Einsatzes niemand entscheiden konnte. Die Rechnung geht auf Wunsch direkt an Sie als Eigentümer."
      },
      {
        title: "Viel Betrieb, typische Fehler",
        body:
          "Bei Geräten mit hoher Laufleistung sehen wir häufig verstopfte Flusensiebe, verlegte Ablaufschläuche und verschlissene Türdichtungen. Das ist meist günstig zu beheben — vorausgesetzt, es wird nicht vorschnell ein teures Bauteil getauscht. Wir messen, bevor wir tauschen."
      }
    ],
    faq: [
      {
        question: "Ich wohne in einer WG, die Maschine gehört dem Vermieter. Wer beauftragt?",
        answer:
          "Grundsätzlich der Eigentümer des Geräts, also meist der Vermieter. Stimmen Sie das vorab ab — wir brauchen eine Freigabe, wer die Rechnung übernimmt."
      },
      {
        question: "Was kostet die Anfahrt nach Dornach-Auhof?",
        answer:
          "Das hängt von der Adresse ab und wird am Telefon genannt, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "kaplanhof",
    name: "Kaplanhof",
    postalCodes: ["4020"],
    metaTitle: "Haushaltsgeräte Reparatur Linz-Kaplanhof (4020) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur im Kaplanhof zwischen Gruberstraße und Hafen: Gründerzeit, Nachkriegs-Wohnanlagen und Neubau. Techniker vor Ort in Linz.",
    h1: "Reparatur im Kaplanhof (4020).",
    short: "Zwischen Gruberstraße und Hafen: Altbau, Nachkriegsbau und neue Wohnanlagen.",
    intro:
      "Der Kaplanhof liegt östlich der Innenstadt zwischen Gruberstraße, Prinz-Eugen-Straße, Mühlkreis Autobahn und Industriezeile. Er umfasst auch die bewohnten Teile des früheren Hafenviertels — ein Stadtteil mit sehr unterschiedlichem Baubestand auf engem Raum.",
    character:
      "Richtung Innenstadt stehen ältere Mehrparteienhäuser mit den typischen Altbauthemen, weiter östlich überwiegen Wohnanlagen der Nachkriegszeit und neuere Mietwohnbauten. In den Nachkriegsbauten sind Bäder und Küchen klein, die Waschmaschine steht oft im Bad unter oder neben dem Waschbecken. Das erschwert den Zugang zur Rückseite und zum Ablauf.",
    focus: [
      "Waschmaschinen im engen Bad mit schwer zugänglichem Ablauf",
      "Geschirrspüler und Kühlgeräte in kleinen Küchen",
      "Altbauwohnungen mit alten Zu- und Abflüssen",
      "Einbaugeräte in neueren Mietwohnbauten"
    ],
    sections: [
      {
        title: "Waschmaschine im Bad",
        body:
          "Steht die Maschine eng zwischen Wanne und Wand, muss sie für viele Reparaturen herausgezogen werden. Räumen Sie den Bereich davor bitte frei und sagen Sie, ob der Boden gefliest oder empfindlich ist. Häufig sitzt die Ursache für Ablauffehler übrigens im Siphon unter dem Waschbecken, nicht in der Pumpe."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Die Anfahrt richtet sich nach der Adresse und wird vor dem Termin genannt. Im innenstadtnahen Linz sind Termine gut planbar; nennen Sie Stockwerk und Liftsituation, damit wir die Dauer richtig einschätzen."
      }
    ],
    faq: [
      {
        question: "Meine Waschmaschine pumpt nicht ab. Ist die Pumpe kaputt?",
        answer:
          "Oft nicht. Flusensieb, Ablaufschlauch oder ein verlegter Siphon sind die häufigeren Ursachen. Prüfen Sie zuerst das Flusensieb — wenn das nicht hilft, sehen wir uns den Ablauf komplett an."
      },
      {
        question: "Kommt ein Techniker in den Kaplanhof?",
        answer:
          "Ja, das gesamte Linzer Stadtgebiet betreuen wir mit Technikern vor Ort. Die Anfahrtskosten nennen wir am Telefon, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "franckviertel",
    name: "Franckviertel",
    postalCodes: ["4020"],
    metaTitle: "Haushaltsgeräte Reparatur Linz-Franckviertel (4020) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur im Franckviertel: Wohnanlagen der Zwischenkriegs- und Nachkriegszeit, kompakte Küchen und Bäder. Techniker vor Ort in Linz.",
    h1: "Reparatur im Franckviertel (4020).",
    short: "Dichtes Wohnviertel mit Hofanlagen und kompakten Wohnungen.",
    intro:
      "Das Franckviertel ist der flächenmäßig kleinste bewohnte Bezirk von Linz und trotzdem dicht besiedelt. Benannt nach der früheren Franck-Kaffeemittelfabrik, ist es bis heute von Mietwohnanlagen geprägt, viele davon in Hofform und mehrfach saniert.",
    character:
      "Der Bestand stammt großteils aus der Zwischenkriegs- und NS-Zeit sowie den Nachkriegsjahrzehnten, errichtet von gemeinnützigen und städtischen Bauträgern. Die Wohnungen sind kompakt, Küchen schmal, Waschmaschinen stehen oft im Bad. Bei Sanierungen wurden Leitungen teils erneuert, teils nicht — ob der Anschluss neu oder alt ist, macht bei Wasserthemen einen Unterschied.",
    focus: [
      "Waschmaschinen im Bad mit engem Aufstellplatz",
      "Schmale Einbaugeschirrspüler (45 cm) in kleinen Küchen",
      "Kühlgeräte in Wohnungen mit wenig Luftzirkulation",
      "Aufträge über Hausverwaltungen und Genossenschaften"
    ],
    sections: [
      {
        title: "Schmale Geräte, eigene Teile",
        body:
          "In kompakten Küchen sind 45-cm-Geschirrspüler verbreitet. Sie teilen viele Bauteile mit den breiten Modellen, aber nicht alle — die vollständige Modellnummer vom Typenschild ist hier besonders wichtig. Sie finden sie meist am Rand der Tür, wenn Sie diese öffnen."
      },
      {
        title: "Kühlgeräte brauchen Luft",
        body:
          "Ein Kühlschrank, der dicht in einer Nische ohne Lüftungsschlitz steht, gibt seine Wärme schlecht ab. Er läuft dann fast durchgehend, wird laut und kühlt trotzdem schlechter. Bevor wir an einen Defekt denken, prüfen wir, ob die Belüftung frei ist."
      }
    ],
    faq: [
      {
        question: "Arbeiten Sie mit Genossenschaften und Hausverwaltungen?",
        answer:
          "Ja. Wir nehmen den Auftrag auch von einer Verwaltung an, stimmen den Termin mit den Bewohnern ab und rechnen nach vereinbarter Freigabegrenze ab."
      },
      {
        question: "Was kostet die Anfahrt ins Franckviertel?",
        answer:
          "Für Oberösterreich gibt es keinen festen Satz. Die Anfahrtskosten erfahren Sie am Telefon, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "bulgariplatz",
    name: "Bulgariplatz",
    postalCodes: ["4020"],
    metaTitle: "Haushaltsgeräte Reparatur Linz-Bulgariplatz (4020) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur rund um Bulgariplatz, Andreas-Hofer-Platz und Wiener Straße: große Mehrparteienhäuser und Wohnanlagen. Techniker vor Ort.",
    h1: "Reparatur am Bulgariplatz (4020).",
    short: "Große Mehrparteienhäuser zwischen Autobahn und Westbahn.",
    intro:
      "Der Bezirk Bulgariplatz liegt zwischen Mühlkreis Autobahn und Westbahn und umfasst das Viertel um den Andreas-Hofer-Platz und Teile des Makartviertels. Auf verhältnismäßig wenigen Gebäuden wohnen hier sehr viele Menschen — die Häuser sind groß.",
    character:
      "Rund 1.100 Gebäude mit etwa 10.000 Wohnungen: Das sind im Schnitt fast zehn Wohnungen pro Haus. Geprägt wird der Bezirk von großen Mehrparteienhäusern und Wohnanlagen der Nachkriegsjahrzehnte. In solchen Häusern ist die Ausstattung oft einheitlich, und der Zugang läuft über Lift, Gegensprechanlage und manchmal eine Hausverwaltung.",
    focus: [
      "Geräte in großen Mehrparteienhäusern mit Lift und Zugangssystem",
      "Gleich ausgestattete Wohnungen mit bekannten Baureihen",
      "Waschmaschinen in Wohnungen und Gemeinschaftswaschküchen",
      "Kühl- und Gefriergeräte mit dringendem Handlungsbedarf"
    ],
    sections: [
      {
        title: "Einheitliche Ausstattung hilft",
        body:
          "Wenn in einem Haus viele Wohnungen mit derselben Baureihe ausgestattet sind, sind deren Schwachstellen gut bekannt. Nennen Sie uns die vollständige Modellnummer vom Typenschild — dann bringt der Techniker das wahrscheinlich benötigte Teil gleich mit, statt es nach der Diagnose zu bestellen."
      },
      {
        title: "Gemeinschaftswaschküche",
        body:
          "Gehört die Maschine in der Waschküche der Hausgemeinschaft oder der Verwaltung, muss der Auftrag von dort kommen. Für eigene Geräte in der Wohnung beauftragen Sie uns direkt. Sagen Sie bei der Anfrage, wo das Gerät steht, damit wir wissen, wer aufsperrt."
      }
    ],
    faq: [
      {
        question: "Mehrere Nachbarn haben dasselbe Problem mit ihren Geräten. Lohnt ein Sammeltermin?",
        answer:
          "Oft ja. Wenn mehrere Einsätze im selben Haus an einem Tag liegen, lässt sich das effizient planen. Sprechen Sie uns darauf an, dann klären wir, wie sich die Anfahrt aufteilt."
      },
      {
        question: "Was kostet die Anfahrt?",
        answer:
          "Das hängt von der Adresse ab und wird am Telefon genannt, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "froschberg",
    name: "Froschberg",
    postalCodes: ["4020"],
    metaTitle: "Haushaltsgeräte Reparatur Linz-Froschberg (4020) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur am Froschberg und auf der Gugl: Villen, Einfamilienhäuser und Wohnanlagen in Hanglage. Techniker vor Ort in Linz.",
    h1: "Reparatur am Froschberg (4020).",
    short: "Villen auf der Gugl, Einfamilienhäuser und Wohnanlagen am Hang.",
    intro:
      "Der Froschberg liegt im Westen von Linz auf einer Anhöhe. Um die Gugl entstand um 1900 ein Villenviertel, später kamen Einfamilienhäuser und Wohnanlagen dazu. Für die Reparatur bedeutet das: oft hochwertige Einbauküchen, und Geräte, die auf mehrere Geschosse verteilt sind.",
    character:
      "In den Villen und älteren Häusern wurden Küchen und Bäder meist mehrfach umgebaut, die Leitungen dahinter sind aber nicht immer mitgewachsen. Einbauküchen sind häufig hochwertig und mit Möbelfront voll integriert. In den Wohnanlagen am Hang ist der Zugang über Stiegen und Lift das wichtigere Thema.",
    focus: [
      "Voll integrierte Einbaugeräte in hochwertigen Küchen",
      "Waschmaschinen und Trockner im Keller älterer Häuser",
      "Backöfen, Dampfgarer und Kochfelder mit Elektronikfehlern",
      "Geschirrspüler mit Kalk und Spülproblemen"
    ],
    sections: [
      {
        title: "Einbaugeräte ohne Schaden an der Front",
        body:
          "Voll integrierte Geräte sind mit der Möbelfront verschraubt. Für viele Reparaturen muss das Gerät aus der Nische, was bei eng gebauten Küchen und Steinarbeitsplatten Sorgfalt braucht. Wir sehen uns die Einbausituation vorher an und sagen offen, wenn ein Tischler dazukommen sollte."
      },
      {
        title: "Elektronik bei Backöfen und Dampfgarern",
        body:
          "Moderne Backöfen und Dampfgarer melden Fehler über Codes, die oft auf einen Sensor oder die Steuerung hinweisen. Notieren Sie den Code und wann er auftritt — beim Aufheizen, beim Dampfbetrieb oder zufällig. Das grenzt die Ursache stark ein."
      }
    ],
    faq: [
      {
        question: "Kann ein Einbau-Geschirrspüler repariert werden, ohne die Küche zu beschädigen?",
        answer:
          "In der Regel ja. Die Front wird gelöst und das Gerät aus der Nische gezogen. Bei sehr engen Nischen oder empfindlichen Arbeitsplatten klären wir die Situation vorab."
      },
      {
        question: "Was kostet die Anfahrt auf den Froschberg?",
        answer:
          "Für Oberösterreich gibt es keinen pauschalen Satz. Die Anfahrtskosten erfahren Sie am Telefon, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "bindermichl-keferfeld",
    name: "Bindermichl-Keferfeld",
    postalCodes: ["4020"],
    metaTitle: "Haushaltsgeräte Reparatur Linz Bindermichl-Keferfeld (4020) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur am Bindermichl und in Keferfeld-Oed: große Wohnsiedlungen, sanierte Hofanlagen und Einfamilienhäuser. Techniker vor Ort in Linz.",
    h1: "Reparatur am Bindermichl und in Keferfeld (4020).",
    short: "Große Wohnsiedlungen am Bindermichl, Einfamilienhäuser Richtung Leonding.",
    intro:
      "Bindermichl-Keferfeld gehört zu den bevölkerungsreichsten Bezirken von Linz. Die Wohnsiedlungen am Bindermichl prägen das Bild seit den 1940er-Jahren; seit die Autobahn eingehaust ist, verbindet ein Park die Viertel. Richtung Keferfeld-Oed und Leonding wird die Bebauung lockerer.",
    character:
      "Am Bindermichl stehen große Mietwohnanlagen aus der NS- und Nachkriegszeit, meist in Hofform und inzwischen saniert. Die Grundrisse sind kompakt, Küchen und Bäder klein. In Keferfeld und Oed kommen Einfamilienhäuser, Reihenhäuser und neuere Wohnbauten dazu. Entsprechend breit ist das Spektrum: vom 45-cm-Geschirrspüler bis zur Waschküche im Keller.",
    focus: [
      "Geräte in sanierten Siedlungswohnungen mit kompakten Küchen",
      "Waschmaschinen im Bad oder in der Waschküche",
      "Freistehende Geräte in Reihen- und Einfamilienhäusern",
      "Kühl- und Gefrierkombinationen mit Temperaturproblemen"
    ],
    sections: [
      {
        title: "Sanierter Bestand, alte Leitungen?",
        body:
          "Bei Sanierungen wurden Fassaden, Fenster und oft auch Bäder erneuert — die Leitungen hinter der Wand nicht immer. Tropft es unter der Waschmaschine oder dem Geschirrspüler, prüfen wir Zulauf, Absperrventil und Abfluss mit. Ist die Ursache im Haus statt im Gerät, sagen wir Ihnen das, statt ein Bauteil zu tauschen."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Die Anfahrt richtet sich nach der Adresse und wird vor dem Termin genannt. Nennen Sie Stiege und Stockwerk — in großen Anlagen spart das Zeit beim Suchen."
      }
    ],
    faq: [
      {
        question: "Kommen Sie auch nach Keferfeld-Oed und an die Grenze zu Leonding?",
        answer:
          "Ja. Der gesamte Bezirk gehört zum Linzer Stadtgebiet. Für Adressen jenseits der Stadtgrenze klären wir den Termin ebenfalls gern am Telefon."
      },
      {
        question: "Mein Kühlschrank kühlt oben, aber das Gefrierfach nicht mehr richtig. Was ist los?",
        answer:
          "Das kann auf eine vereiste Verdampferfläche, einen Sensor oder ein Problem im Kältekreislauf hinweisen. Nennen Sie uns Modell und seit wann es auftritt — dann lässt sich einschätzen, ob sich die Reparatur lohnt."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "spallerhof",
    name: "Spallerhof",
    postalCodes: ["4020"],
    metaTitle: "Haushaltsgeräte Reparatur Linz-Spallerhof (4020) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur am Spallerhof, im Wankmüllerhofviertel und in der Neuen Welt: Wohnanlagen verschiedener Jahrzehnte. Techniker vor Ort in Linz.",
    h1: "Reparatur am Spallerhof (4020).",
    short: "Spallerhof, Wankmüllerhofviertel und Neue Welt — Wohnanlagen verschiedener Jahrzehnte.",
    intro:
      "Der Spallerhof liegt zwischen Mühlkreis Autobahn, Westbahn und Salzburger Straße und umfasst auch das Wankmüllerhofviertel und die Neue Welt. Seit der Einhausung der Autobahn ist er über den Landschaftspark wieder mit dem Bindermichl verbunden.",
    character:
      "Der Stadtteil ist von Mietwohnanlagen geprägt, die über mehrere Jahrzehnte entstanden sind — von Siedlungsbauten der 1940er-Jahre bis zu Wohnbauten der letzten Jahre. Dadurch reicht auch die Geräteausstattung von freistehenden Geräten in älteren Wohnungen bis zu voll integrierten Küchen im Neubau. Viele Aufträge laufen hier über Mieter, die zuerst klären müssen, wem das Gerät gehört.",
    focus: [
      "Freistehende Waschmaschinen und Kühlgeräte in älteren Wohnungen",
      "Voll integrierte Einbaugeräte in neueren Wohnbauten",
      "Mitvermietete Geräte mit Freigabe durch den Vermieter",
      "Geschirrspüler mit Abpump- und Spülproblemen"
    ],
    sections: [
      {
        title: "Wem gehört das Gerät?",
        body:
          "In Mietwohnungen gehört die Einbauküche oft dem Vermieter. Dann ist er auch für die Reparatur zuständig. Klären Sie das bitte vor dem Termin — wir brauchen eine Freigabe, wer beauftragt und bis zu welchem Betrag repariert werden darf."
      },
      {
        title: "Diagnose vor dem Teiletausch",
        body:
          "Ein Geschirrspüler, der nicht abpumpt, hat selten eine defekte Pumpe. Viel häufiger sind Siebe, Ablaufschlauch oder der Siphonanschluss verlegt. Wir messen und prüfen, bevor wir tauschen — das spart Ihnen Geld und eine zweite Anfahrt."
      }
    ],
    faq: [
      {
        question: "Ich bin Mieter. Kann ich die Reparatur selbst beauftragen?",
        answer:
          "Bei eigenen Geräten ja. Gehört das Gerät zur Wohnung, sprechen Sie bitte zuerst mit dem Vermieter oder der Hausverwaltung, damit klar ist, wer die Rechnung übernimmt."
      },
      {
        question: "Was kostet die Anfahrt zum Spallerhof?",
        answer:
          "Das hängt von der Adresse ab und wird am Telefon genannt, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "neue-heimat",
    name: "Neue Heimat",
    postalCodes: ["4030"],
    metaTitle: "Haushaltsgeräte Reparatur Linz-Neue Heimat (4030) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur in der Neuen Heimat, Wegscheid und Schörgenhub: Siedlungsbauten in Hofform, kompakte Wohnungen. Techniker vor Ort in Linz.",
    h1: "Reparatur in der Neuen Heimat (4030).",
    short: "Siedlungsbauten in Hofform, dazu Wegscheid und Teile von Schörgenhub.",
    intro:
      "Die Neue Heimat liegt südlich der Salzburger Straße und umfasst auch Wegscheid und den westlichen Teil von Schörgenhub. Der Stadtteil entstand großteils als geschlossene Wohnsiedlung für die Arbeiter der damals neuen Industrie und hat diesen Charakter bis heute.",
    character:
      "Prägend sind Mietwohnanlagen im Heimatschutzstil, in Hofform angelegt, mit ähnlichen Grundrissen in vielen Stiegen. Die Wohnungen sind kompakt, Küchen oft schmal, Waschmaschinen stehen im Bad. Viele Häuser wurden inzwischen saniert. In Wegscheid und Schörgenhub kommen Einfamilien- und Reihenhäuser dazu.",
    focus: [
      "Waschmaschinen im Bad mit knappem Aufstellplatz",
      "Schmale Geschirrspüler und Unterbau-Kühlgeräte",
      "Freistehende Geräte in Reihen- und Einfamilienhäusern",
      "Aufträge über Hausverwaltungen in großen Anlagen"
    ],
    sections: [
      {
        title: "Ähnliche Wohnungen, ähnliche Fehler",
        body:
          "Wo viele Wohnungen gleich geschnitten sind, wiederholen sich auch die Einbausituationen: Maschine im Bad, Ablauf in das Waschbecken oder einen Wandanschluss. Ein Ablauffehler hat dort oft dieselbe Ursache — eine Verengung im Abfluss. Wir prüfen das mit, bevor die Pumpe getauscht wird."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Die Anfahrt richtet sich nach der Adresse und wird vor dem Termin genannt. Nennen Sie bitte Stiege und Stockwerk, in den Hofanlagen sind die Eingänge nicht immer auf den ersten Blick zu finden."
      }
    ],
    faq: [
      {
        question: "Meine Waschmaschine im Bad läuft aus, aber nur beim Abpumpen. Woran liegt das?",
        answer:
          "Häufig ist der Abfluss, in den der Schlauch mündet, zu eng oder teilweise verlegt. Das Wasser staut dann zurück. Sagen Sie uns, ob der Schlauch in das Waschbecken oder in einen Wandanschluss führt."
      },
      {
        question: "Kommt ein Techniker in die Neue Heimat?",
        answer:
          "Ja, das gesamte Linzer Stadtgebiet betreuen wir mit Technikern vor Ort. Die Anfahrtskosten nennen wir am Telefon, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "kleinmuenchen-auwiesen",
    name: "Kleinmünchen-Auwiesen",
    postalCodes: ["4030"],
    metaTitle: "Haushaltsgeräte Reparatur Linz Kleinmünchen-Auwiesen (4030) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur in Kleinmünchen, Scharlinz und Auwiesen: gewachsene Siedlungen und die Großwohnanlage Auwiesen. Techniker vor Ort in Linz.",
    h1: "Reparatur in Kleinmünchen und Auwiesen (4030).",
    short: "Gewachsenes Kleinmünchen, Scharlinz und die Großwohnanlage Auwiesen.",
    intro:
      "Kleinmünchen-Auwiesen liegt im Süden von Linz, noch nördlich der Traun. Der Bezirk umfasst das gewachsene Kleinmünchen, Scharlinz und die Wohnanlage Auwiesen, die ab 1981 bezogen wurde. Mit über 20.000 Einwohnern ist er einer der größten Bezirke der Stadt.",
    character:
      "Kleinmünchen war bis 1923 eine eigene Gemeinde und hat einen älteren, gemischten Bestand aus Siedlungshäusern, Mehrparteienhäusern und Gewerbe. Auwiesen ist dagegen eine geplante Großwohnanlage der späten 1970er- und 1980er-Jahre, maßgeblich von der städtischen GWG errichtet. Dort sind Grundrisse und Ausstattung über viele Stiegen hinweg ähnlich.",
    focus: [
      "Geräte in der Wohnanlage Auwiesen mit ähnlicher Einbausituation",
      "Freistehende Geräte in Siedlungshäusern in Kleinmünchen",
      "Waschmaschinen in Kellern und Waschküchen",
      "Backöfen und Herde mit Heizungs- oder Elektronikfehlern"
    ],
    sections: [
      {
        title: "Wohnanlage Auwiesen",
        body:
          "In einer Anlage dieser Größe kostet die Suche nach Stiege und Eingang schnell Zeit. Nennen Sie uns bitte Straße, Hausnummer, Stiege und Stockwerk. Viele Wohnungen haben seit dem Bezug neue Küchen bekommen — die Modellnummer vom Typenschild sagt uns, welche Baureihe tatsächlich verbaut ist."
      },
      {
        title: "Reparieren oder ersetzen",
        body:
          "Als Faustregel: Erreicht die Reparatur die Hälfte eines vergleichbaren Neugeräts und ist das Gerät älter als acht bis zehn Jahre, lohnt sie sich meist nicht mehr. Diese Einschätzung bekommen Sie möglichst schon am Telefon, damit keine Anfahrt für eine schlechte Nachricht anfällt."
      }
    ],
    faq: [
      {
        question: "Mein Backofen heizt nicht mehr richtig. Lohnt sich die Reparatur?",
        answer:
          "Oft ja: Ein defekter Heizstab oder Temperaturfühler ist ein überschaubarer Tausch. Bei defekter Steuerung eines älteren Geräts rechnen wir Ihnen vorher offen vor, ob sich das noch lohnt."
      },
      {
        question: "Was kostet die Anfahrt nach Kleinmünchen oder Auwiesen?",
        answer:
          "Für Oberösterreich gibt es keinen festen Satz. Sie erfahren die Anfahrtskosten am Telefon, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "ebelsberg",
    name: "Ebelsberg",
    postalCodes: ["4030"],
    metaTitle: "Haushaltsgeräte Reparatur Linz-Ebelsberg (4030) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur in Ebelsberg südlich der Traun: historischer Ortskern, Einfamilienhäuser und Wohnanlagen. Techniker vor Ort in Linz.",
    h1: "Reparatur in Ebelsberg (4030).",
    short: "Historischer Ortskern südlich der Traun, rundherum Einfamilienhäuser.",
    intro:
      "Ebelsberg liegt südlich der Traun und hat sich trotz Zugehörigkeit zu Linz einen eigenen Ortskern rund um das Schloss bewahrt. Rundherum dominieren Einfamilienhäuser und Wohnanlagen — mit Geräten, die oft in Keller, Waschküche und Garage verteilt sind.",
    character:
      "Der alte Ortskern ist kleinteilig mit älteren Häusern, in denen Leitungen und Elektroinstallation schrittweise erneuert wurden. Außerhalb davon stehen überwiegend Einfamilien- und Reihenhäuser sowie Wohnanlagen verschiedener Jahrzehnte. In den Häusern stehen Waschmaschine, Trockner und Gefriertruhe häufig im Keller.",
    focus: [
      "Waschmaschinen und Trockner in Keller und Waschküche",
      "Gefriertruhen in Keller oder Garage",
      "Geräte in älteren Häusern mit gemischter Installation",
      "Geschirrspüler und Backöfen in Einfamilienhäusern"
    ],
    sections: [
      {
        title: "Gefriertruhe in der Garage",
        body:
          "Garagen sind im Winter kalt und im Sommer heiß. Viele Gefriergeräte sind für diese Spannbreite nicht ausgelegt — die zulässige Umgebungstemperatur steht als Klimaklasse auf dem Typenschild. Arbeitet ein Gerät außerhalb davon, zeigt es Fehler, obwohl nichts kaputt ist."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Die Anfahrt richtet sich nach der Adresse und wird vor dem Termin genannt. In Ebelsberg gibt es fast immer einen Halteplatz direkt beim Haus, was die Einsätze einfach macht."
      }
    ],
    faq: [
      {
        question: "Meine Gefriertruhe in der Garage springt im Winter nicht mehr an. Ist sie defekt?",
        answer:
          "Nicht zwingend. Bei sehr niedrigen Umgebungstemperaturen schalten manche Geräte kaum noch ein. Prüfen Sie die Klimaklasse auf dem Typenschild — wir helfen bei der Einordnung am Telefon."
      },
      {
        question: "Kommt ein Techniker nach Ebelsberg?",
        answer:
          "Ja, Ebelsberg gehört zum Linzer Stadtgebiet, das wir mit Technikern vor Ort betreuen. Die Anfahrtskosten nennen wir am Telefon, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  },
  {
    regionSlug: "oberoesterreich",
    parentSlug: "linz",
    slug: "pichling",
    name: "Pichling",
    postalCodes: ["4030"],
    metaTitle: "Haushaltsgeräte Reparatur Linz-Pichling & Solar City (4030) | MONTER",
    description:
      "Haushaltsgeräte-Reparatur in Pichling und der Solar City: energieeffiziente Reihenhäuser, Einfamilienhäuser und Wohnanlagen. Techniker vor Ort in Linz.",
    h1: "Reparatur in Pichling und der Solar City (4030).",
    short: "Solar City, Einfamilienhäuser und Wohnanlagen am südöstlichen Stadtrand.",
    intro:
      "Pichling liegt am südöstlichen Stadtrand von Linz, rund um Weikerlsee und Pichlinger See. Prägend ist die Solar City — ein auf Energieeffizienz ausgerichtetes Wohnprojekt mit Reihenhäusern und Wohnanlagen, das ab den 2000er-Jahren entstanden ist.",
    character:
      "Neben der Solar City gibt es in Pichling viele Einfamilienhäuser und neuere Wohnanlagen. Der Bestand ist insgesamt jung: Leitungen und Anschlüsse sind selten das Problem, dafür sind Geräte häufig voll integriert und die Gebäudehülle dicht. Das hat Folgen für Trockner und Dunstabzug, die Luft nach außen führen.",
    focus: [
      "Wärmepumpentrockner mit verlegtem Filter oder Kondensator",
      "Voll integrierte Einbaugeräte in neueren Reihenhäusern",
      "Dunstabzüge im Umluftbetrieb mit gesättigten Filtern",
      "Waschmaschinen im Hauswirtschaftsraum"
    ],
    sections: [
      {
        title: "Dichte Häuser, andere Geräte",
        body:
          "In energieeffizienten Häusern werden meist Wärmepumpentrockner und Umluft-Dunstabzüge verwendet, weil Abluft nach außen die Gebäudehülle schwächt. Beide Gerätearten sind auf saubere Filter angewiesen: Ein verlegter Flusenfilter oder Wärmetauscher lässt die Trockenzeit stark steigen, ein gesättigter Aktivkohlefilter hält keine Gerüche mehr. Das ist oft Wartung statt Reparatur."
      },
      {
        title: "Anfahrt und Termin",
        body:
          "Die Anfahrt richtet sich nach der Adresse und wird vor dem Termin genannt. In der Solar City und in den Siedlungen ist der Zugang meist einfach, nennen Sie bitte trotzdem Hausnummer und Eingang."
      }
    ],
    faq: [
      {
        question: "Mein Wärmepumpentrockner braucht plötzlich doppelt so lang. Ist er kaputt?",
        answer:
          "Meist nicht. Reinigen Sie Flusensieb und, falls zugänglich, den Wärmetauscher im Sockel. Hilft das nicht, prüfen wir Sensoren und Kältekreis."
      },
      {
        question: "Kommen Sie auch in die Solar City?",
        answer:
          "Ja, Pichling und die Solar City gehören zum Linzer Stadtgebiet. Die Anfahrtskosten erfahren Sie am Telefon, bevor ein Termin vereinbart wird."
      }
    ],
    enriched: true
  }
];

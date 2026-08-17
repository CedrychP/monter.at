import type { BrandErrorCode } from "./brands";

/**
 * Markenspezifischer Inhalt je Marke-und-Gerät-Kombination.
 *
 * `enriched: false` (oder gar kein Eintrag) bedeutet: Die Seite trägt noch den
 * generischen Gerätetext aus devices.ts. Solche Seiten werden auf noindex
 * gesetzt und aus der XML-Sitemap gehalten, bis echter Inhalt vorliegt.
 *
 * FACHLICHE PRÜFUNG OFFEN: Die `errorCodes` sind vorbereitet, aber noch nicht
 * von einem Techniker gegengeprüft. Sie werden erst gerendert, wenn
 * `errorCodesReviewed` auf true steht.
 */
export type BrandDeviceContent = {
  brandSlug: string;
  deviceSlug: string;
  intro: string;
  errorCodes: BrandErrorCode[];
  errorCodesReviewed: boolean;
  modelSeries: string[];
  partsNote: string;
  sections: {
    title: string;
    body: string;
  }[];
  enriched: boolean;
};

export const brandDeviceContents: BrandDeviceContent[] = [
  {
    brandSlug: "bosch-reparatur-wien",
    deviceSlug: "waschmaschine",
    enriched: true,
    intro:
      "Bosch Waschmaschinen sind die häufigsten Geräte, die wir in Wien öffnen — entsprechend gut kennen wir ihre Schwachstellen. Pumpt das Gerät nicht ab, bleibt die Tür verriegelt, wandert die Maschine beim Schleudern oder steht ein Code im Display: In den meisten Fällen ist die Ursache ein einzelnes Verschleißteil, das sich gezielt tauschen lässt.",
    modelSeries: [
      "Serie 4 (WAN, WAJ) — häufigste Klasse in Wiener Mietwohnungen",
      "Serie 6 (WAU, WAT) — EcoSilence-Drive-Antrieb ohne Kohlebürsten",
      "Serie 8 (WAV, WAX) — Topausstattung mit Home Connect",
      "Toplader-Baureihen (WOR, WOT) für schmale Bäder im Altbau"
    ],
    partsNote:
      "Laugenpumpen, Türverriegelungen, Heizstäbe, Stoßdämpfer, Kohlebürsten älterer Motoren und Türmanschetten sind für alle gängigen Bosch Baureihen gut verfügbar — meist lagernd oder in wenigen Tagen da. Teurer wird es bei Steuerelektronik und Bedienmodulen; bei Home-Connect-Geräten kann das Modul allein einen erheblichen Teil des Reparaturpreises ausmachen. Trommellager sind bei geschlossenen Bottichen der klassische Grenzfall der Wirtschaftlichkeit.",
    errorCodes: [
      { code: "E17", meaning: "Wasserzulauf zu langsam oder kein Zulauf — Ventil, Sieb oder Aquastop prüfen" },
      { code: "E18", meaning: "Abpumpen dauert zu lange — Laugenpumpe, Flusensieb oder Ablaufschlauch blockiert" },
      { code: "E23", meaning: "Aquastop hat ausgelöst, Wasser in der Bodenwanne" },
      { code: "F16", meaning: "Tür nicht richtig geschlossen bzw. Türverriegelung meldet nicht" },
      { code: "F21", meaning: "Antriebsfehler — Trommel läuft unrund, ruckelt oder nicht an" }
    ],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Pumpt nicht ab oder schleudert nicht",
        body:
          "Das häufigste Bild bei Bosch Waschmaschinen. Der Weg des Wassers wird von hinten nach vorne geprüft: Flusensieb, Pumpenflügel, Ablaufschlauch, Druckdose und erst dann die Elektronik. Sehr oft steckt ein Fremdkörper — Münze, Büstenhalter-Bügel, Haarnadel — im Pumpengehäuse. Schleudert das Gerät nicht, hängt das meist mit demselben Problem zusammen, weil Bosch das Schleudern bei zu hohem Wasserstand sperrt."
      },
      {
        title: "Laute Geräusche und wanderndes Gerät",
        body:
          "Ein dumpfes Rumpeln beim Schleudern kommt von verschlissenen Stoßdämpfern oder einem Trommellager, ein metallisches Schleifen häufig von einem Fremdkörper zwischen Trommel und Bottich. Wandert die Maschine, sind meist die Transportsicherungen nie entfernt worden oder die Stellfüße nicht ausgerichtet. Stoßdämpfer und Federn tauschen wir grundsätzlich paarweise, weil ein einzelnes neues Teil den Lauf sonst wieder unruhig macht."
      },
      {
        title: "Wann sich der Tausch mehr lohnt",
        body:
          "Bei Bosch bleibt die Reparatur wegen der guten Teilelage lange sinnvoll — Pumpe, Heizung, Türschloss und Dämpfer rechnen sich fast immer. Kritisch sind zwei Fälle: ein Lagerschaden im geschlossenen Bottich und ein gleichzeitiger Defekt an Motor und Steuerung. Dann liegt der Aufwand nahe am Preis eines neuen Geräts, und wir sagen das vor der Teilebestellung."
      }
    ]
  },
  {
    brandSlug: "bosch-reparatur-wien",
    deviceSlug: "geschirrspueler",
    enriched: true,
    intro:
      "Bosch Geschirrspüler stehen in Wien in fast jeder neueren Küche, meist als teil- oder vollintegriertes Einbaugerät. Bleibt Wasser im Gerät, wird das Geschirr nicht mehr sauber oder steht E15 im Display: Die Ursachen sind bei diesen Geräten sehr gut eingegrenzt, weil sich Pumpen, Heizung und Sicherheitslogik über viele Baureihen wiederholen.",
    modelSeries: [
      "SMS… — freistehend bzw. unterbaufähig",
      "SMI… — teilintegriert mit sichtbarer Blende",
      "SMV… — vollintegriert hinter Möbelfront",
      "SMU… — Unterbaugerät ohne Deckplatte",
      "Ausstattung: Serie 2 bis Serie 8, VarioSchublade, Zeolith-Trocknung ab Serie 6"
    ],
    partsNote:
      "Umwälzpumpen, Ablaufpumpen, Durchlauferhitzer, Aquastop-Ventile, Türscharniere, Seilzüge und Sprüharme sind für Bosch Geschirrspüler sehr gut verfügbar — häufig baugleich mit Siemens und Neff aus derselben Generation. Elektronikmodule sind vorhanden, aber teurer. Bei Geräten mit Zeolith-Trocknung ist der Trocknungsbehälter selbst selten defekt; Probleme liegen dort meist an Heizung oder Gebläse.",
    errorCodes: [
      { code: "E15", meaning: "Wasser in der Bodenwanne — Aquastop hat ausgelöst, Gerät sperrt weiteren Betrieb" },
      { code: "E22", meaning: "Sieb bzw. Filter verstopft, Umwälzung reicht nicht" },
      { code: "E24", meaning: "Wasser läuft nicht ab — Ablaufschlauch geknickt, verstopft oder Pumpe blockiert" },
      { code: "E25", meaning: "Ablaufpumpe blockiert oder Pumpendeckel nicht korrekt sitzend" },
      { code: "E09", meaning: "Durchlauferhitzer bzw. Heizung defekt — Programm bleibt kalt" }
    ],
    errorCodesReviewed: false,
    sections: [
      {
        title: "E15 und Wasser in der Bodenwanne",
        body:
          "E15 ist der häufigste Bosch Geschirrspüler-Code. Er bedeutet, dass der Schwimmerschalter in der Bodenwanne Wasser erkannt und den Aquastop ausgelöst hat. Wichtig: Der Code nennt die Sicherheitsauslösung, nicht die Leckstelle. Die kann an Türdichtung, Umwälzpumpe, Wärmetauscher, Sprüharmlager oder einem Schlauchanschluss liegen. Wir suchen die Quelle, statt nur die Wanne zu leeren — sonst kommt der Fehler in wenigen Tagen zurück."
      },
      {
        title: "Geschirr wird nicht mehr sauber",
        body:
          "Bei nachlassender Reinigungsleistung prüfen wir zuerst Siebe, Sprüharmdüsen und Wasserenthärtung, dann die Umwälzpumpe und den Durchlauferhitzer. Ein häufig unterschätzter Punkt: Bei sehr hartem Wiener Leitungswasser verkalken Heizung und Düsen schneller, wenn die Enthärtung falsch eingestellt oder das Salzfach leer ist. Das ist keine Reparatur, sondern eine Einstellung — wir sagen es trotzdem, statt Teile zu tauschen."
      },
      {
        title: "Einbaugerät ausbauen und Türspannung",
        body:
          "Vollintegrierte Bosch Geräte hängen mit der Möbelfront an einem Feder- oder Seilzugsystem. Reißt ein Seilzug, fällt die Tür schlagartig zu — ein häufiges und günstig zu behebendes Problem. Beim Ausbau achten wir auf Aquastop-Anschluss, Abwasseranschluss und die Ausrichtung der Front, damit die Küche danach wieder exakt in der Linie sitzt."
      }
    ]
  },
  {
    brandSlug: "bosch-reparatur-wien",
    deviceSlug: "trockner",
    enriched: true,
    intro:
      "Bei Bosch Trocknern ist das typische Bild: Das Programm läuft durch, die Wäsche bleibt aber feucht, oder die Laufzeit wird von Mal zu Mal länger. Bei Wärmepumpengeräten liegt die Ursache in den meisten Fällen nicht an der Elektronik, sondern an zugesetzten Luftwegen — und das ist gut behebbar.",
    modelSeries: [
      "WTW / WTH — Wärmepumpentrockner, heute die Regel",
      "WTG — Kondensationstrockner, ältere und günstigere Geräte",
      "SelfCleaning Condenser — selbstreinigender Wärmetauscher der Serien 6 und 8",
      "AutoDry — Sensorsteuerung über Restfeuchtemessung"
    ],
    partsNote:
      "Kondensatpumpen, Türschalter, Flusenfilter, Antriebsriemen, Lagerböcke, Heizregister und Feuchtesensoren sind gut verfügbar. Der Wärmetauscher selbst ist bei Wärmepumpengeräten ein Preisfaktor — muss aber selten getauscht werden, weil sich Verschmutzung in der Regel reinigen lässt. Ein defekter Kältekreis ist bei Wärmepumpentrocknern der wirtschaftliche Grenzfall: Diese Reparatur rechnet sich fast nie.",
    errorCodes: [],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Wäsche bleibt feucht",
        body:
          "Wir prüfen der Reihe nach Flusenfilter, Sockelfilter, Wärmetauscher, Luftwege und Lüfterrad. Bei Geräten mit SelfCleaning Condenser sammelt sich Flusenschlamm trotz Selbstreinigung in den Kanälen, wenn viel Kuschelwäsche getrocknet wird. Erst wenn die Luftwege frei und die Restfeuchtesensoren plausibel sind, sehen wir uns Heizung, Kältekreis und Elektronik an."
      },
      {
        title: "Wasser am Boden und Kondensatpumpe",
        body:
          "Läuft Wasser unter dem Gerät heraus oder meldet der Trockner den Behälter als voll, obwohl er leer ist, sind Kondensatpumpe, Niveauschalter oder ein verstopfter Kondensatkanal die üblichen Ursachen. Bei fest angeschlossener Kondensatableitung prüfen wir zusätzlich den Ablaufschlauch — ein Knick hinter dem Gerät reicht für dieses Fehlerbild schon aus."
      },
      {
        title: "Laufzeiten und Aufstellort",
        body:
          "Wärmepumpentrockner reagieren deutlich auf den Aufstellort: In einem engen, warmen Abstellraum ohne Luftaustausch verlängern sich Laufzeiten spürbar, ohne dass das Gerät defekt ist. Bevor wir Teile tauschen, klären wir daher Aufstellsituation, Beladungsmenge und Programmwahl — häufig erklärt das den Leistungsverlust bereits vollständig."
      }
    ]
  },
  {
    brandSlug: "bosch-reparatur-wien",
    deviceSlug: "backofen-herd",
    enriched: true,
    intro:
      "Bosch Backöfen und Herde fallen selten komplett aus — häufiger sind einzelne Funktionen betroffen: Oberhitze arbeitet nicht, die Temperatur stimmt nicht mehr, das Bedienfeld reagiert nicht oder die Tür schließt nicht dicht. Genau diese Teilausfälle lassen sich gezielt reparieren, ohne die Einbauküche anzutasten.",
    modelSeries: [
      "HBA / HBG — Einbaubacköfen, Serie 2 bis Serie 8",
      "HND — Herd-Sets aus Backofen und Kochfeld",
      "PKE / PUE — Elektro-Kochfelder, PIE / PXE — Induktion",
      "Reinigungssysteme: EcoClean Direct (Katalyse) und Pyrolyse"
    ],
    partsNote:
      "Heizkörper für Ober-, Unter- und Heißluft, Temperaturfühler, Türdichtungen, Türscharniere, Backofenlampen, Lüftermotoren und Thermostate sind für Bosch gut verfügbar. Bedienmodule und Displays sind der teuerste Posten und bei älteren Geräten gelegentlich nicht mehr lieferbar. Bei Induktionskochfeldern ist die Leistungselektronik ein Preisfaktor — einzelne Spulen und Sensortasten lassen sich dagegen oft gezielt tauschen.",
    errorCodes: [],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Heizt nicht oder Temperatur stimmt nicht",
        body:
          "Bäckt das Gerät oben oder unten nicht mehr, prüfen wir zuerst die Heizkörper auf Durchgang, dann Thermostat und Temperaturfühler. Ein typisches Bild: Der Ofen heizt, aber deutlich zu heiß oder zu kalt — dann ist meist der Fühler verstellt oder defekt, nicht die Heizung. Nach dem Tausch messen wir die Temperatur nach, statt sich auf die Anzeige zu verlassen."
      },
      {
        title: "Bedienfeld, Sicherung und Sicherheit",
        body:
          "Reagiert die Bedienung nicht oder löst die Sicherung beim Einschalten aus, hat das häufig mit Feuchtigkeit im Bedienmodul, einem defekten Heizkörper mit Masseschluss oder verschmorten Klemmen zu tun. Ausgelöste Sicherungen, Geruch oder Funken sind ein klares Stopp-Signal: Gerät nicht weiter verwenden und den Anschluss prüfen lassen, bevor es wieder in Betrieb geht."
      },
      {
        title: "Pyrolyse und Türdichtung",
        body:
          "Bei Pyrolysegeräten arbeitet die Tür während des Reinigungsprogramms bei sehr hohen Temperaturen. Eine spröde Türdichtung oder ausgeschlagene Scharniere führen dazu, dass Hitze austritt und das Programm abbricht oder das Gerät sperrt. Dichtung und Scharniere sind Verschleißteile und gut verfügbar — ein Austausch ist hier deutlich günstiger als jede Elektronikarbeit."
      }
    ]
  },
  {
    brandSlug: "bosch-reparatur-wien",
    deviceSlug: "kuehlschrank",
    enriched: true,
    intro:
      "Bei Bosch Kühlgeräten sind die häufigsten Meldungen: kühlt zu schwach, vereist an der Rückwand, Wasser sammelt sich im Gemüsefach oder der Kompressor läuft dauerhaft. Fast immer geht es dabei um Abtausystem, Luftführung oder Dichtungen — und damit um Reparaturen, die sich klar rechnen.",
    modelSeries: [
      "KIR / KIL — Einbaukühlschränke ohne bzw. mit Gefrierfach",
      "KGN / KGE — freistehende Kühl-Gefrierkombinationen",
      "KI…D — Einbau-Kombinationen für Hochschränke",
      "Technologien: NoFrost, LowFrost, VitaFresh, MultiAirflow"
    ],
    partsNote:
      "Türdichtungen, Thermostate, Temperaturfühler, Innenlüfter, Abtauheizungen, Abtauelektronik, Türscharniere und Glas- sowie Kunststoffablagen sind für Bosch Kühlgeräte gut lieferbar. Ein Kompressortausch oder eine Reparatur am Kältekreis ist die wirtschaftliche Grenze: Bei einem Gerät über zehn Jahren empfehlen wir dann in der Regel den Austausch, auch wegen des deutlich besseren Stromverbrauchs neuer Geräte.",
    errorCodes: [],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Kühlt zu schwach oder vereist",
        body:
          "Eine vereiste Rückwand im Kühlteil deutet auf einen blockierten Tauwasserablauf oder eine gestörte Abtauung hin. Wir prüfen Ablaufloch und Ablaufrinne, Türdichtung, Türschließung und die Luftführung im Innenraum. Zu dichte Beladung direkt vor dem Luftauslass reicht bei NoFrost- und MultiAirflow-Geräten oft schon aus, um einzelne Zonen zu warm werden zu lassen."
      },
      {
        title: "Wasser im Gerät und Geruch",
        body:
          "Stehendes Wasser im Gemüsefach kommt fast immer aus einem verstopften Tauwasserablauf. Bleibt das über längere Zeit unbemerkt, entsteht Geruch, und Feuchtigkeit kann in die Isolierung ziehen. Wir reinigen den Ablaufweg, prüfen die Neigung des Geräts und tauschen bei porösen Dichtungen gleich mit — das verhindert, dass sich das Bild in wenigen Wochen wiederholt."
      },
      {
        title: "Kompressor läuft dauerhaft",
        body:
          "Wenn der Kompressor nicht mehr abschaltet, sind meist Türdichtung, Abtauung, Fühler oder ein verschmutzter Verflüssiger an der Geräterückseite die Ursache. Diese Punkte prüfen wir zuerst, denn sie sind günstig zu beheben. Bleibt danach ein Kältemittel- oder Kompressorproblem, rechnen wir offen gegen ein Neugerät — inklusive des Stromverbrauchs, der bei dauerlaufenden Altgeräten deutlich ins Gewicht fällt."
      }
    ]
  },
  {
    brandSlug: "bosch-reparatur-wien",
    deviceSlug: "tiefkuehlgeraet",
    enriched: true,
    intro:
      "Bei Bosch Tiefkühlgeräten zählt Zeit: Steigt die Temperatur oder meldet das Gerät Alarm, geht es zuerst um die Sicherung des Gefriergutes und dann um die Reparatur. Wir behandeln solche Anfragen in Wien vorrangig, weil der Warenwert im Gerät oft höher ist als die Reparatur selbst.",
    modelSeries: [
      "GSN — freistehende Stand-Tiefkühlschränke",
      "GIN / GID — Einbau-Tiefkühlgeräte",
      "GTN / GTM — Tiefkühltruhen",
      "Technologien: NoFrost, Big Box, VarioZone, Alarmfunktion bei Temperaturanstieg"
    ],
    partsNote:
      "Abtauheizungen, Abtaufühler, Innenlüfter, Türdichtungen, Scharniere, Schubladen und Elektronikmodule sind für Bosch Tiefkühlgeräte gut beschaffbar. Wie bei Kühlgeräten ist der Kältekreis die wirtschaftliche Grenze. Ein wichtiger Punkt bei Einbau-Tiefkühlgeräten: Der Austausch bringt oft Anpassungen an der Nische mit sich, weshalb sich hier eine Reparatur länger rechnet als beim freistehenden Gerät.",
    errorCodes: [],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Sofortmaßnahmen bei Temperaturanstieg",
        body:
          "Halten Sie die Tür geschlossen — ein gut gefülltes Gefriergerät hält die Temperatur mehrere Stunden. Notieren Sie die angezeigte Temperatur und den Zeitpunkt, an dem der Alarm begonnen hat. Öffnen Sie das Gerät nicht zur Kontrolle, sondern melden sich telefonisch: Mit diesen Angaben können wir am Telefon einschätzen, wie dringend der Termin ist und ob das Gefriergut noch zu retten ist."
      },
      {
        title: "Starke Vereisung bei NoFrost-Geräten",
        body:
          "Ein NoFrost-Gerät sollte nicht vereisen. Passiert es doch, liegt in der Regel ein Defekt an Abtauheizung, Abtaufühler oder Steuerung vor — oder die Tür schließt wegen einer verhärteten Dichtung nicht mehr dicht. Bei starker Eisbildung am Verdampfer wird zusätzlich der Luftweg blockiert, wodurch einzelne Fächer zu warm werden, während der Kompressor durchläuft."
      },
      {
        title: "Türdichtung, Scharniere und Alltag",
        body:
          "Tiefkühlgeräte in Wiener Wohnungen stehen oft in Abstellräumen oder Kellern, wo eine schleifende Tür lange unbemerkt bleibt. Eine verhärtete Dichtung oder ein ausgeschlagenes Scharnier lässt dauerhaft warme, feuchte Luft eintreten: Das Gerät läuft mehr, vereist stärker und verbraucht deutlich mehr Strom. Beides sind günstige Verschleißteile und der wirkungsvollste Hebel gegen wiederkehrende Vereisung."
      }
    ]
  },
  {
    brandSlug: "miele-reparatur-wien",
    deviceSlug: "waschmaschine",
    enriched: true,
    intro:
      "Miele Waschmaschinen laufen oft 15 Jahre und länger — und genau deshalb ist bei ihnen die Reparatur fast immer die bessere Rechnung. Wir tauschen bei Wiener Kundinnen und Kunden regelmäßig Pumpen, Kohlebürsten oder Türschlösser an Geräten, die danach wieder viele Jahre zuverlässig arbeiten.",
    modelSeries: [
      "W1 — aktuelle Generation (WCI, WCD, WSD) mit TwinDos und CapDosing",
      "Ausstattungslinien Classic, Active, Active Plus, Excellence, Edition",
      "Vorgängergenerationen W3xxx / W5xxx — Teile weiterhin überwiegend verfügbar",
      "Miele Professional (PW) — Gewerbemaschinen mit eigener Teilelogik"
    ],
    partsNote:
      "Miele hält Ersatzteile für viele Baureihen über deutlich mehr als ein Jahrzehnt verfügbar — das ist der Hauptgrund, warum sich Reparaturen hier so lange rechnen. Laugenpumpen, Türschlösser, Türdichtungen, Heizstäbe, Kohlebürsten, Stoßdämpfer und Keilrippenriemen sind gut beschaffbar. Elektronikmodule sind teurer als bei anderen Marken. Baugleiche Fremdteile gibt es praktisch nicht, weil Miele auf eigenen Plattformen entwickelt — wir arbeiten hier mit Originalteilen.",
    errorCodes: [
      { code: "F11", meaning: "Ablauffehler — Wasser wird nicht oder zu langsam abgepumpt" },
      { code: "F19", meaning: "Zulauffehler — kein oder zu geringer Wasserzulauf" },
      { code: "F50", meaning: "Fehler am Trommelantrieb bzw. Antriebsmotor" },
      { code: "F53", meaning: "Signal des Drehzahlgebers fehlt oder ist unplausibel" }
    ],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Kohlebürsten und Antrieb älterer Baureihen",
        body:
          "Bei Miele Maschinen mit klassischem Motor sind Kohlebürsten ein planmäßiges Verschleißteil. Typische Anzeichen: Die Trommel dreht beim Waschen noch, schleudert aber nicht mehr oder nur mit lautem Schleifen. Der Tausch ist eine der günstigsten Reparaturen an einer Miele Waschmaschine und bringt oft Jahre zusätzliche Laufzeit. Neuere W1 Geräte haben bürstenlose Antriebe — dort entfällt dieses Verschleißbild vollständig."
      },
      {
        title: "Ablaufprobleme und TwinDos",
        body:
          "Melden Miele Geräte einen Ablauffehler, prüfen wir Flusensieb, Pumpenlaufrad, Ablaufschlauch und Druckdose. Bei Geräten mit TwinDos kommt das Dosiersystem als eigene Baugruppe dazu: Verstopfte Dosierleitungen, verklebte Ventile und eingetrocknete Kartuschenanschlüsse führen zu Fehlermeldungen, ohne dass mit Pumpe oder Motor etwas nicht stimmt. Das ist reinigbar und nicht zwingend ein Bauteildefekt."
      },
      {
        title: "Warum Miele Reparaturen fast immer aufgehen",
        body:
          "Bei den meisten Marken kippt die Wirtschaftlichkeit nach acht bis zehn Jahren. Bei Miele halten Bottich, Lager und Gehäuse häufig mehrere Bauteilgenerationen aus — ein Pumpen- oder Heizungstausch an einer 15 Jahre alten Maschine kostet daher einen Bruchteil eines gleichwertigen Neugeräts. Wir sagen offen, wenn es anders liegt: Ein Lagerschaden mit gleichzeitigem Elektronikdefekt ist auch bei Miele ein Grenzfall."
      }
    ]
  },
  {
    brandSlug: "miele-reparatur-wien",
    deviceSlug: "geschirrspueler",
    enriched: true,
    intro:
      "Miele Geschirrspüler sind auf sehr viele Programmstunden ausgelegt und werden in Wien häufig in Familienhaushalten und Ordinationen eingesetzt. Bleibt Wasser stehen, heizt das Gerät nicht oder meldet es einen F-Code: Die Baugruppen sind langlebig und gut dokumentiert, entsprechend gezielt lässt sich reparieren.",
    modelSeries: [
      "G 5000 / G 7000 — aktuelle Generationen, teils mit AutoDos und PowerDisk",
      "Ausstattungslinien Active, Active Plus, Excellence, Edition",
      "3D-MultiFlex-Besteckschublade als typisches Miele Merkmal",
      "Vorgängerbaureihen G 4xxx / G 6xxx — Teile weiterhin gut verfügbar"
    ],
    partsNote:
      "Umwälzpumpen, Ablaufpumpen, Heizpumpen, Zulaufventile mit Wasserschutz, Türscharniere, Seilzüge, Dichtungen und Sprüharme sind für Miele Geschirrspüler lange verfügbar. Die Heizpumpe ist bei Miele als Baugruppe teurer als eine einfache Heizung bei anderen Marken, hält aber entsprechend länger. Bei AutoDos-Geräten kommen Dosiereinheit und PowerDisk-Aufnahme als eigene Teile dazu.",
    errorCodes: [
      { code: "F11", meaning: "Ablauffehler — Wasser wird nicht abgepumpt" },
      { code: "F12", meaning: "Wasserzulauf gestört — Zulaufventil, Sieb oder Hahn" },
      { code: "F70", meaning: "Fehler in der Wasserstandserkennung" },
      { code: "F78", meaning: "Störung an der Umwälzpumpe" }
    ],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Wasser bleibt stehen",
        body:
          "Der klassische Miele Ablauffehler. Wir prüfen Sieb und Grobsieb, Ablaufpumpe mit Rückschlagventil, Ablaufschlauch und den Siphonanschluss unter der Spüle. Ein oft übersehener Punkt: Ein zu tief oder ohne Schlaufe verlegter Ablaufschlauch führt dazu, dass Wasser zurückläuft — das erzeugt dasselbe Bild wie eine defekte Pumpe, ist aber eine Montagefrage."
      },
      {
        title: "Heizung, Trocknung und AutoDos",
        body:
          "Bleibt das Programm kalt oder das Geschirr nass, sehen wir uns Heizpumpe, Temperaturfühler und Umwälzung an. Bei AutoDos-Geräten prüfen wir zusätzlich Dosiereinheit und PowerDisk-Erkennung: Verklebte Dosierwege sorgen für schlechte Reinigungsergebnisse, obwohl technisch alles funktioniert. Bei sehr hartem Wasser ist außerdem die Enthärtungseinstellung entscheidend — falsch eingestellt verkalkt die Heizpumpe unnötig schnell."
      },
      {
        title: "Tür, Scharniere und Einbau",
        body:
          "Vollintegrierte Miele Geräte tragen die Möbelfront über Scharniere und Seilzüge. Fällt die Tür schlagartig zu oder lässt sie sich nur schwer öffnen, ist meist ein Seilzug gerissen oder eine Scharnierfeder ausgehängt — eine günstige und häufige Reparatur. Beim Ausbau achten wir auf Wasserschutz-Anschluss und Frontausrichtung, damit die Küchenzeile danach wieder exakt sitzt."
      }
    ]
  },
  {
    brandSlug: "miele-reparatur-wien",
    deviceSlug: "trockner",
    enriched: true,
    intro:
      "Miele T1 Wärmepumpentrockner sind sparsam und langlebig, reagieren aber deutlich auf verschmutzte Luftwege. Wenn die Trockenzeit von Mal zu Mal länger wird oder die Wäsche feucht bleibt, liegt die Ursache meist im Bereich von Filtern, Sockelfilter und Verdampfer — und nicht am Kältekreis.",
    modelSeries: [
      "T1 — aktuelle Wärmepumpengeneration (TWF, TWV, TCJ) mit EcoDry",
      "Ausstattungslinien Classic, Active, Excellence, Edition",
      "Vorgängerbaureihen T8xxx / TKG — Kondensations- und Ablufttrockner",
      "PerfectDry — Restfeuchteerkennung angepasst an die Wasserhärte"
    ],
    partsNote:
      "Kondensatpumpen, Türschalter und Türdichtungen, Antriebsriemen, Lagerböcke, Lüfterräder, Feuchtesensoren und Filter sind für Miele Trockner gut verfügbar. Der Verdampfer muss selten getauscht werden — Verschmutzung lässt sich in den meisten Fällen reinigen. Ein Defekt im Kältekreis selbst ist die wirtschaftliche Grenze, tritt bei Miele T1 Geräten aber vergleichsweise selten auf.",
    errorCodes: [],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Trockenzeit wird immer länger",
        body:
          "Das ist das typische Bild eines zugesetzten Luftwegs. Wir reinigen Flusenfilter, Sockelfilter und Verdampferlamellen und prüfen Lüfterrad und Luftführung. Bei EcoDry-Geräten liegt genau hier der Hebel: Miele hat die Filterstufen darauf ausgelegt, dass die Leistung über die Jahre stabil bleibt — vorausgesetzt, alle Stufen werden regelmäßig gereinigt, nicht nur der Flusenfilter in der Tür."
      },
      {
        title: "Kondensatpumpe und Wasser am Boden",
        body:
          "Meldet das Gerät den Behälter als voll, obwohl er leer ist, oder tritt Wasser unten aus, sind Kondensatpumpe, Niveauschalter oder ein verstopfter Kondensatkanal die üblichen Ursachen. Bei fest angeschlossener Ableitung prüfen wir zusätzlich den Schlauchverlauf hinter dem Gerät — ein Knick genügt für dasselbe Fehlerbild."
      },
      {
        title: "Restfeuchteerkennung und Wasserhärte",
        body:
          "Miele Trockner messen die Restfeuchte über Sensoren in der Trommel. Kalkbeläge auf diesen Sensoren verfälschen die Messung, weshalb das Gerät zu früh abschaltet und die Wäsche feucht bleibt. Reinigung der Sensorflächen behebt das oft vollständig — bevor jemand über einen Elektroniktausch nachdenkt."
      }
    ]
  },
  {
    brandSlug: "miele-reparatur-wien",
    deviceSlug: "backofen-herd",
    enriched: true,
    intro:
      "Miele Backöfen sind auf lange Nutzung ausgelegt und in Wien häufig in hochwertigen Einbauküchen verbaut. Genau deshalb ist eine Reparatur hier fast immer sinnvoller als ein Austausch: Ein Gerätewechsel bedeutet in einer geplanten Küche oft Anpassungen an Nische und Front.",
    modelSeries: [
      "H 2000 / H 7000 — Einbaubacköfen mehrerer Generationen",
      "PerfectClean — veredelte Emailoberflächen, alternativ Pyrolyse",
      "Moisture Plus — Backen mit Feuchtigkeitszugabe",
      "DGC — Dampfgarer mit Backofenfunktion, KM — Kochfelder"
    ],
    partsNote:
      "Heizkörper, Temperaturfühler, Türdichtungen, Türscharniere, Lüftermotoren, Backofenlampen und Thermostate sind für Miele Backöfen lange verfügbar. Bedienmodule und Displays sind der teuerste Posten, bleiben aber meist beschaffbar. Bei Dampfgargeräten kommen Wassertank, Ventile und Dampferzeuger als eigene Baugruppen dazu — auch dort ist Verkalkung die häufigste Ursache und keine Elektronikfrage.",
    errorCodes: [],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Heizt nicht oder Temperatur weicht ab",
        body:
          "Wir messen Heizkörper und Temperaturfühler durch und prüfen die Steuerung. Häufig ist nicht die Heizung defekt, sondern der Fühler liefert falsche Werte — dann heizt der Ofen deutlich zu heiß oder zu kalt, obwohl die Anzeige stimmt. Nach dem Tausch prüfen wir die tatsächliche Temperatur nach, weil gerade bei Backöfen der Unterschied zwischen Anzeige und Realität den Alltag bestimmt."
      },
      {
        title: "Tür, Dichtung und Pyrolyse",
        body:
          "Ausgeschlagene Scharniere und spröde Türdichtungen führen zu Hitzeverlust, unregelmäßigem Backergebnis und bei Pyrolysegeräten zu Programmabbrüchen. Beides sind Verschleißteile, gut verfügbar und günstig im Vergleich zu Elektronikarbeiten. Bei Miele lohnt sich der Tausch besonders, weil die restliche Gerätemechanik in der Regel noch lange hält."
      },
      {
        title: "Dampfgarer und Verkalkung",
        body:
          "Bei Miele Geräten mit Dampffunktion ist Verkalkung das Hauptthema — Wiener Leitungswasser ist entsprechend hart. Ausbleibende Dampfentwicklung, lange Aufheizzeiten oder Fehlermeldungen im Dampfbetrieb gehen meist auf verkalkte Dampferzeuger und Ventile zurück. Regelmäßiges Entkalken nach Geräteaufforderung verhindert genau diese Reparatur."
      }
    ]
  },
  {
    brandSlug: "miele-reparatur-wien",
    deviceSlug: "kuehlschrank",
    enriched: true,
    intro:
      "Miele Kühlgeräte sind häufig als Einbaugeräte in Wiener Küchen verbaut, oft mit PerfectFresh-Zonen. Typische Anfragen: Temperatur wird nicht gehalten, das Gerät vereist, Wasser sammelt sich im Innenraum oder eine Schublade der Frischezone lässt sich nicht mehr bewegen.",
    modelSeries: [
      "K 7000 / KFN — Kühl- und Kühl-Gefrierkombinationen",
      "PerfectFresh / PerfectFresh Pro — Frischezonen knapp über 0 °C",
      "DynaCool — Umluftkühlung für gleichmäßige Temperatur",
      "Einbaugeräte für Nischenhöhen mit fester Möbelfront"
    ],
    partsNote:
      "Türdichtungen, Thermostate, Fühler, Innenlüfter, Abtauheizungen, Elektronikmodule, Scharniere, Auszugsschienen und Glasablagen sind für Miele Kühlgeräte gut beschaffbar. Auszüge und Schienen der PerfectFresh-Zonen sind eigene Teile und einzeln erhältlich, statt gleich die ganze Baugruppe zu tauschen. Kältekreis und Kompressor sind wie bei allen Marken die wirtschaftliche Grenze.",
    errorCodes: [],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Temperatur wird nicht gehalten",
        body:
          "Wir prüfen Türdichtung und Türschließung, Innenlüfter, Fühler und die Luftführung. Bei DynaCool-Geräten hängt die gleichmäßige Temperatur direkt am Umluftlüfter: Fällt er aus, entstehen warme Zonen, während der Kompressor durchläuft. Zu dichte Beladung vor dem Luftauslass erzeugt dasselbe Bild — das prüfen wir zuerst, bevor Teile getauscht werden."
      },
      {
        title: "PerfectFresh-Zone und Auszüge",
        body:
          "Die Frischezonen arbeiten nahe 0 °C und sind gegen den restlichen Kühlraum abgetrennt. Vereisen sie, sitzen die Schubladen fest oder wird das Fach zu kalt, liegt meist ein Fühler- oder Klappenproblem vor, seltener ein Elektronikdefekt. Auszugsschienen und Griffe sind separat verfügbar — ein häufig unterschätzter, günstiger Teil der Reparatur."
      },
      {
        title: "Einbaugerät und Wirtschaftlichkeit",
        body:
          "Bei Miele Einbaukühlschränken spricht viel für die Reparatur: Der Austausch bringt neben dem Gerätepreis oft Arbeit an Nische, Front und Befestigung mit sich. Solange der Kältekreis dicht ist, sind Dichtung, Lüfter, Fühler und Abtauung klar wirtschaftliche Reparaturen. Bei einem Kompressorschaden an einem alten Gerät rechnen wir dagegen offen gegen ein Neugerät — auch wegen des Stromverbrauchs."
      }
    ]
  },
  {
    brandSlug: "miele-reparatur-wien",
    deviceSlug: "tiefkuehlgeraet",
    enriched: true,
    intro:
      "Bei Miele Tiefkühlgeräten und den Gefrierteilen von KFN-Kombinationen geht es im Störfall zuerst um das Gefriergut und dann um die Reparatur. Wir behandeln solche Anfragen in Wien vorrangig — der Warenwert im Gerät übersteigt die Reparatur häufig deutlich.",
    modelSeries: [
      "FN / FNS — Stand-Tiefkühlschränke",
      "KFN — Kühl-Gefrierkombinationen mit getrennten Kreisen",
      "NoFrost — automatische Abtauung ohne manuelles Eisentfernen",
      "Einbau-Tiefkühlgeräte für feste Nischenmaße"
    ],
    partsNote:
      "Abtauheizungen, Abtaufühler, Elektronikmodule, Innenlüfter, Türdichtungen, Scharniere und Schubladen sind für Miele Tiefkühlgeräte gut verfügbar — und das über ungewöhnlich lange Zeiträume. Weil die Geräte häufig 15 Jahre und mehr laufen, ist gerade diese Teileverfügbarkeit der Grund, warum sich eine Reparatur hier lohnt, wo sie bei anderen Marken schon an der Beschaffung scheitern würde.",
    errorCodes: [],
    errorCodesReviewed: false,
    sections: [
      {
        title: "Alarm und Temperaturanstieg",
        body:
          "Miele Geräte melden Temperaturanstieg akustisch und im Display. Halten Sie die Tür geschlossen, notieren Sie die angezeigte Temperatur und den Beginn des Alarms und rufen Sie an, statt zur Kontrolle zu öffnen. Ein gut gefülltes Gefriergerät hält die Temperatur mehrere Stunden — mit diesen Angaben können wir am Telefon einschätzen, wie eilig der Termin ist."
      },
      {
        title: "Vereisung trotz NoFrost",
        body:
          "Ein NoFrost-Gerät sollte nicht vereisen. Tritt trotzdem Eis auf, liegt in der Regel ein Defekt an Abtauheizung, Abtaufühler oder Steuerung vor — oder die Tür dichtet wegen einer verhärteten Dichtung nicht mehr ab. Starkes Eis am Verdampfer blockiert zusätzlich den Luftweg: Einzelne Fächer werden zu warm, während das Gerät durchgehend läuft."
      },
      {
        title: "KFN-Kombinationen mit zwei Kreisen",
        body:
          "Bei Kombinationen mit getrennten Kältekreisen kann der Gefrierteil ausfallen, während der Kühlteil normal arbeitet — oder umgekehrt. Das ist diagnostisch hilfreich, weil es die Fehlersuche sofort auf einen der beiden Kreise eingrenzt. Bitte notieren Sie deshalb, welcher Bereich betroffen ist und ob beide Zonen ihre Temperatur halten."
      }
    ]
  }
];

export function getBrandDeviceContent(brandSlug: string, deviceSlug: string) {
  return brandDeviceContents.find(
    (entry) => entry.brandSlug === brandSlug && entry.deviceSlug === deviceSlug
  );
}

/** Index-Gate: Kombiseiten ohne echten markenspezifischen Inhalt bleiben aus dem Index. */
export function isBrandDeviceEnriched(brandSlug: string, deviceSlug: string) {
  return getBrandDeviceContent(brandSlug, deviceSlug)?.enriched === true;
}

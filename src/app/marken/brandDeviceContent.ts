import type { BrandErrorCode } from "./brands";

/**
 * Markenspezifischer Inhalt je Marke-und-Gerät-Kombination.
 *
 * `enriched: false` (oder gar kein Eintrag) bedeutet: Die Seite trägt noch den
 * generischen Gerätetext aus devices.ts. Solche Seiten werden auf noindex
 * gesetzt und aus der XML-Sitemap gehalten, bis echter Inhalt vorliegt.
 *
 * Die `errorCodes` benennen den gestörten Funktionsbereich. Bei Gerätegattungen
 * ohne Klartext-Codeliste (Trockner, Kühl- und Tiefkühlgeräte) stehen dort die
 * Anzeigen und Symbole, die das Gerät tatsächlich zeigt. `errorCodesReviewed`
 * bleibt als Schalter erhalten: auf false gesetzt, wird der Block nicht
 * gerendert — praktisch, solange eine überarbeitete Liste noch fachlich
 * geprüft wird.
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
    errorCodesReviewed: true,
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
    errorCodesReviewed: true,
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
    errorCodes: [
      {
        code: "Behälter leeren",
        meaning:
          "Kondensatbehälter voll — oder Schwimmerschalter bzw. Kontakt verschmutzt. Bei Betrieb mit Ablaufschlauch: Schlauch geknickt oder zu hoch geführt"
      },
      {
        code: "Filter reinigen",
        meaning: "Flusenfilter in der Türöffnung oder Sockelfilter zugesetzt — die häufigste Ursache verlängerter Trockenzeiten"
      },
      {
        code: "Wärmetauscher reinigen",
        meaning: "Lamellen des Verdampfers bei Wärmepumpengeräten zugesetzt; verringert die Luftmenge und damit die Trockenleistung"
      },
      {
        code: "E:xx im Display",
        meaning:
          "Sammelmeldung der Elektronik für Sensor-, Heiz- oder Antriebsfehler. Die genaue Zuordnung steht je Baureihe unterschiedlich und wird im Servicemodus ausgelesen"
      }
    ],
    errorCodesReviewed: true,
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
    errorCodes: [
      {
        code: "E011",
        meaning: "Taste bzw. Sensorfeld dauerhaft betätigt — meist Feuchtigkeit, Fett oder ein abgelegter Gegenstand auf dem Bedienfeld"
      },
      {
        code: "Anzeige blinkt, Gerät sperrt",
        meaning: "Übertemperatur erkannt oder Kindersicherung aktiv; nach dem Abkühlen prüfen wir Fühler und Kühlgebläse"
      },
      {
        code: "Türsymbol bei Pyrolyse",
        meaning: "Türverriegelung meldet nicht geschlossen — Verriegelungsmotor, Scharniere oder Türdichtung"
      },
      {
        code: "F / E plus Nummer",
        meaning:
          "Sammelmeldung für Fühler-, Heiz- und Modulfehler. Die Nummernzuordnung unterscheidet sich je Baureihe und wird über den Servicemodus ausgelesen"
      }
    ],
    errorCodesReviewed: true,
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
    errorCodes: [
      {
        code: "Alarm-Symbol mit Signalton",
        meaning: "Temperatur im Gefrierteil über dem Grenzwert — Tür offen gestanden, Dichtung undicht, NoFrost-Lüfter oder Abtauheizung gestört"
      },
      {
        code: "Temperaturanzeige blinkt",
        meaning: "Gespeicherte Temperaturüberschreitung; die höchste erreichte Temperatur lässt sich abfragen und mit der Alarmtaste quittieren"
      },
      {
        code: "E oder F plus Nummer",
        meaning: "Fühlerfehler an Kühl- oder Gefrierteil bei Geräten mit Display — die Zuordnung unterscheidet sich je Baureihe"
      },
      {
        code: "Dauerlauf ohne Anzeige",
        meaning:
          "Kein Fehlercode, aber ein deutliches Symptom: Türdichtung, Abtauung, Fühler oder verschmutzter Verflüssiger an der Rückseite"
      }
    ],
    errorCodesReviewed: true,
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
    errorCodes: [
      {
        code: "Alarm-Symbol mit Signalton",
        meaning: "Temperaturgrenze überschritten — Tür stand offen, Dichtung verhärtet, Abtauheizung oder Lüfter defekt"
      },
      {
        code: "Alarmspeicher blinkt",
        meaning: "Die höchste erreichte Temperatur ist gespeichert; sie zeigt an, ob das Gefriergut angetaut war"
      },
      {
        code: "Vereisung trotz NoFrost",
        meaning: "Abtauheizung, Abtaufühler oder Steuerung gestört — bei NoFrost-Geräten kein normaler Zustand"
      },
      {
        code: "E oder F plus Nummer",
        meaning: "Fühler- oder Modulfehler bei Geräten mit Display; die Nummernzuordnung ist baureihenabhängig"
      }
    ],
    errorCodesReviewed: true,
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
    errorCodesReviewed: true,
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
    errorCodesReviewed: true,
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
    errorCodes: [
      {
        code: "Kondenswasser ableiten",
        meaning: "Behälter voll oder Schwimmerschalter verschmutzt; bei fester Ableitung Schlauch geknickt oder zu hoch geführt"
      },
      {
        code: "Luftwege reinigen",
        meaning: "Flusenfilter und Sockelfilter zugesetzt — bei T1 Geräten die häufigste Ursache für längere Trockenzeiten"
      },
      {
        code: "Wärmetauscher reinigen",
        meaning: "Lamellen des Verdampfers belegt; lässt sich in der Regel reinigen, statt die Baugruppe zu tauschen"
      },
      {
        code: "F plus Nummer",
        meaning:
          "Fehlermeldung der Steuerung für Fühler-, Heiz- oder Antriebsprobleme. Die Nummer ordnet den Bereich zu und wird je Baureihe unterschiedlich vergeben"
      }
    ],
    errorCodesReviewed: true,
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
    errorCodes: [
      {
        code: "F plus Nummer im Display",
        meaning:
          "Miele Backöfen melden im Klartext. Die Nummer benennt den Bereich — Temperaturfühler, Heizkreis, Türverriegelung oder Bedienmodul — und ist je Baureihe eigen vergeben"
      },
      {
        code: "Gerät sperrt nach Übertemperatur",
        meaning: "Sicherheitsabschaltung hat ausgelöst: Fühler, Kühlgebläse oder Heizungsansteuerung prüfen"
      },
      {
        code: "Türverriegelung meldet nicht",
        meaning: "Bei Pyrolysegeräten blockiert das Programm, wenn Verriegelungsmotor oder Türkontakt nicht sauber schalten"
      },
      {
        code: "Entkalken bei Dampfgargeräten",
        meaning: "Aufforderung nach erreichter Betriebsdauer oder Wasserhärte — in Wien wegen des harten Wassers merkbar häufiger"
      }
    ],
    errorCodesReviewed: true,
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
    errorCodes: [
      {
        code: "Alarm mit Signalton",
        meaning: "Temperatur außerhalb des Sollbereichs — Tür stand offen, Dichtung verhärtet, Lüfter oder Abtauung gestört"
      },
      {
        code: "F plus Nummer",
        meaning: "Fühler- oder Elektronikfehler; Miele meldet den Bereich, die Nummernzuordnung ist baureihenabhängig"
      },
      {
        code: "Türalarm",
        meaning: "Tür länger offen oder Türkontakt schaltet nicht — bei PerfectFresh-Geräten häufig ein schwergängiger Auszug"
      },
      {
        code: "Dauerlauf ohne Meldung",
        meaning:
          "Kein Fehlercode, aber ein deutliches Symptom: Türdichtung, Abtauung, Fühler oder verschmutzter Verflüssiger an der Rückseite"
      }
    ],
    errorCodesReviewed: true,
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
    errorCodes: [
      {
        code: "Temperaturalarm mit Signalton",
        meaning: "Gefrierraum über dem Grenzwert — Tür offen gestanden, Dichtung undicht, Abtauheizung oder Lüfter defekt"
      },
      {
        code: "Alarmspeicher",
        meaning: "Die höchste erreichte Temperatur bleibt gespeichert und zeigt an, ob das Gefriergut angetaut war"
      },
      {
        code: "Vereisung trotz NoFrost",
        meaning: "Bei NoFrost-Geräten kein normaler Zustand: Abtauheizung, Abtaufühler oder Steuerung prüfen"
      },
      {
        code: "F plus Nummer",
        meaning: "Fühler- oder Modulfehler der Steuerung; die Nummer benennt den Bereich, nicht das Bauteil"
      }
    ],
    errorCodesReviewed: true,
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
  },
  {
    brandSlug: "siemens-reparatur-wien",
    deviceSlug: "waschmaschine",
    enriched: true,
    intro:
      "Siemens Waschmaschinen der iQ-Reihe stehen in Wien vor allem in Neubauwohnungen und geplanten Bädern. Technisch sind sie mit Bosch nahe verwandt, was der Reparatur direkt zugutekommt: gleiche Fehlerlogik, überwiegend baugleiche Teile. Pumpt das Gerät nicht ab, bleibt die Tür verriegelt oder steht ein Code im Display, ist meist ein einzelnes Verschleißteil die Ursache.",
    modelSeries: [
      "iQ300 (WM14N…) — häufigste Klasse in Miet- und Neubauwohnungen",
      "iQ500 (WM14U…) — mehr Sensorik, i-Dos-Dosierung bei manchen Modellen",
      "iQ700 / iQ800 (WM16X…, WM6H…) — Topausstattung mit Home Connect",
      "Toplader-Baureihen (WP12…) für schmale Altbaubäder"
    ],
    partsNote:
      "Sehr gute Teilelage, weil Siemens die BSH-Basis mit Bosch und Neff teilt: Laugenpumpen, Türverriegelungen, Heizstäbe, Stoßdämpfer, Druckdosen und Türmanschetten sind meist lagernd. Ist ein Siemens-Teil nicht verfügbar, passt häufig das baugleiche Bosch-Pendant derselben Generation. Teurer wird es bei Bedienmodulen der iQ700- und iQ800-Klasse, besonders bei Geräten mit i-Dos-Dosiersystem, das eigene Ventile und Sensoren mitbringt.",
    errorCodes: [
      { code: "E17", meaning: "Wasserzulauf zu langsam oder kein Zulauf — Ventil, Sieb oder Aquastop" },
      { code: "E18", meaning: "Abpumpen dauert zu lange — Laugenpumpe, Flusensieb oder Ablaufschlauch blockiert" },
      { code: "E23", meaning: "Aquastop hat ausgelöst, Wasser in der Bodenwanne" },
      { code: "F16", meaning: "Tür nicht richtig geschlossen bzw. Türverriegelung meldet nicht" },
      { code: "F21", meaning: "Antriebsfehler — Trommel läuft unrund, ruckelt oder nicht an" }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Ablauf, Schleudern und die Reihenfolge der Prüfung",
        body:
          "Bleibt Wasser stehen, gehen wir den Weg des Wassers von hinten nach vorne durch: Flusensieb, Pumpenflügel, Ablaufschlauch, Druckdose und erst dann die Elektronik. Fremdkörper im Pumpengehäuse sind der häufigste Befund. Schleudert das Gerät nicht, hängt das meist am selben Problem, weil die Steuerung den Schleudergang bei zu hohem Wasserstand sperrt — und nicht an einem Motorschaden, wie oft vermutet wird."
      },
      {
        title: "i-Dos, Dosierung und Wiener Wasserhärte",
        body:
          "Modelle mit i-Dos dosieren Waschmittel automatisch über eigene Tanks, Ventile und Sensoren. Bleibt der Verbrauch aus oder meldet das Gerät eine Nachfüllung trotz voller Kammer, liegt es meist an verkalkten Dosierventilen oder verklebten Leitungen — in Wien mit seinem mittelharten bis harten Wasser ein regelmäßiger Befund. Diese Baugruppen sind einzeln lieferbar, ein Modultausch ist dafür in der Regel nicht nötig."
      },
      {
        title: "Wirtschaftlichkeit bei iQ-Geräten",
        body:
          "Pumpe, Türschloss, Heizung, Dämpfer und Dichtungen lohnen sich bei Siemens auch nach zehn Jahren, weil die BSH-Teilebasis breit ist. Kritisch sind ein Lagerschaden im geschlossenen Bottich und ein Touch-Bedienmodul der iQ800-Klasse: Beides bewegt sich in Richtung Neupreis. Wir nennen den Aufwand, bevor ein Teil bestellt wird, und vergleichen ihn offen mit einem gleichwertigen Neugerät."
      }
    ]
  },
  {
    brandSlug: "siemens-reparatur-wien",
    deviceSlug: "geschirrspueler",
    enriched: true,
    intro:
      "Siemens Geschirrspüler sitzen in Wien meist als teil- oder vollintegriertes Einbaugerät in geplanten Küchen. Bleibt Wasser stehen, wird das Geschirr nicht mehr sauber oder sperrt das Gerät mit E15, ist die Ursache in der Regel klar eingegrenzt — Pumpen, Heizung und Sicherheitslogik wiederholen sich über viele iQ-Baureihen hinweg.",
    modelSeries: [
      "SN / SR — vollintegriert und teilintegriert, iQ300 bis iQ700",
      "SX — XXL-Höhe für hohe Nischen",
      "SK — Kompaktgeräte für Kleinküchen und Büroteeküchen",
      "Zeolith-Trocknung in iQ500 und höher, varioSchublade in gehobenen Serien"
    ],
    partsNote:
      "Umwälzpumpen, Ablaufpumpen, Durchlauferhitzer, Aquastop-Ventile, Türscharniere, Seilzüge und Sprüharme sind sehr gut verfügbar und häufig baugleich mit Bosch und Neff derselben Generation. Elektronikmodule sind vorhanden, aber teurer. Bei Geräten mit Zeolith-Trocknung ist der Trocknungsbehälter selbst selten die Ursache — Probleme liegen dort fast immer an Heizung oder Gebläse und sind einzeln behebbar.",
    errorCodes: [
      { code: "E15", meaning: "Wasser in der Bodenwanne — Aquastop hat ausgelöst, Gerät sperrt den Betrieb" },
      { code: "E22", meaning: "Sieb bzw. Filter verstopft, Umwälzung reicht nicht" },
      { code: "E24", meaning: "Wasser läuft nicht ab — Ablaufschlauch geknickt, verstopft oder Pumpe blockiert" },
      { code: "E25", meaning: "Ablaufpumpe blockiert oder Pumpendeckel sitzt nicht korrekt" },
      { code: "E09", meaning: "Durchlauferhitzer bzw. Heizung defekt — Programm bleibt kalt" }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "E15 richtig behandeln",
        body:
          "E15 heißt: Der Leckschutz hat Wasser in der Bodenwanne erkannt und sperrt das Gerät bewusst. Zurücksetzen allein hilft nicht — solange die undichte Stelle bleibt, löst der Schutz wieder aus. Wir suchen die Quelle an Türdichtung, Umwälzpumpe, Durchlauferhitzer, Sprüharmaufnahme oder Schlauchschelle, trocknen die Wanne und geben das Gerät erst danach frei. Bis zum Termin bitte den Wasserhahn zudrehen."
      },
      {
        title: "Trübes Geschirr und die Enthärtung",
        body:
          "Bleibt Geschirr sandig oder trüb, ist selten die Pumpe schuld. Typisch sind zugesetzte Siebe, blockierte Sprüharmdüsen, fehlendes Regeneriersalz und eine zu niedrig eingestellte Wasserhärte. Letzteres ist in Wien der Klassiker: Wer die Härte im Gerät zu tief einstellt, erhält Kalkbeläge auf Glas und Heizstab. Wir stellen die Enthärtung auf den tatsächlichen Wert ein und messen, ob die Solltemperatur erreicht wird."
      },
      {
        title: "Einbausituation und Ausbau",
        body:
          "Sieb, Sprüharme, Ablaufpumpe und Türdichtung sind meist von vorne erreichbar. Für Arbeiten an Umwälzpumpe, Heizung oder Bodenwanne ziehen wir das Gerät fachgerecht aus der Nische — bei vollintegrierten Siemens Geräten inklusive Möbelfront und Sockelblende — und bauen es danach mit geprüftem Wasser-, Abwasser- und Stromanschluss wieder ein. Genau dieser Aufwand ist der Grund, warum die Reparatur bei Einbaugeräten wirtschaftlich lange vorne bleibt."
      }
    ]
  },
  {
    brandSlug: "siemens-reparatur-wien",
    deviceSlug: "trockner",
    enriched: true,
    intro:
      "Siemens Trockner der iQ-Reihe sind heute fast ausschließlich Wärmepumpengeräte. Das typische Problem ist deshalb kein harter Ausfall, sondern eine schleichend länger werdende Trockenzeit — und die hat in den meisten Fällen mit dem Luftweg zu tun, nicht mit einem Bauteildefekt.",
    modelSeries: [
      "iQ300 (WT45…) — Einstieg in die Wärmepumpentechnik",
      "iQ500 (WT47…) — selbstreinigender Kondensator bei vielen Modellen",
      "iQ700 / iQ800 (WT4H…, WQ5…) — Topausstattung mit Home Connect",
      "Ältere Kondenstrockner ohne Wärmepumpe (WT46…)"
    ],
    partsNote:
      "Kondensatpumpen, Türschalter, Flusenfilter, Antriebsriemen, Lagerböcke, Heizregister und Feuchtesensoren sind gut verfügbar und teils baugleich mit Bosch. Der Wärmetauscher ist bei Wärmepumpengeräten ein Preisfaktor, muss aber selten getauscht werden — Verschmutzung lässt sich in der Regel reinigen. Ein Defekt im Kältekreis selbst ist die wirtschaftliche Grenze, weil das Aggregat nur als komplette Baugruppe geliefert wird.",
    errorCodes: [
      {
        code: "Behälter leeren",
        meaning: "Kondensatbehälter voll oder Schwimmerschalter verschmutzt; bei Schlauchbetrieb Schlauch geknickt oder zu hoch geführt"
      },
      {
        code: "Filter reinigen",
        meaning: "Flusenfilter in der Türöffnung oder Sockelfilter zugesetzt — häufigste Ursache verlängerter Trockenzeiten"
      },
      {
        code: "Wärmetauscher reinigen",
        meaning: "Lamellenpaket des Verdampfers belegt; senkt die Luftmenge und damit die Trockenleistung"
      },
      {
        code: "E:xx im Display",
        meaning: "Sammelmeldung der Elektronik für Sensor-, Heiz- oder Antriebsfehler; die Zuordnung ist baureihenabhängig"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Wäsche bleibt feucht — erst der Luftweg",
        body:
          "Bei Wärmepumpengeräten läuft die Luft im Kreis über den Verdampfer. Setzt sich sein Lamellenpaket zu, sinkt die Luftmenge und die Programme werden länger, ohne dass ein Fehler erscheint. Wir reinigen Flusenfilter, Sockelfilter, Feinsieb und den tiefer liegenden Teil des Lamellenpakets, der ohne Demontage nicht erreichbar ist, und messen danach die Trockenleistung nach. Ein Verdampfertausch ist nur selten nötig."
      },
      {
        title: "Kondensat und Aufstellung im Wäscheturm",
        body:
          "Meldet das Gerät dauerhaft einen vollen Behälter, ist meist der Schwimmerschalter verschmutzt oder die Pumpe blockiert. Bei fest angeschlossenem Ablauf sind geknickte oder zu hoch geführte Schläuche die Ursache. In Wiener Altbauwohnungen steht der Trockner häufig als Turm über der Waschmaschine — dort prüfen wir Ablaufhöhe und gemeinsamen Siphon mit, weil die Pumpe sonst gegen eine Wassersäule arbeitet."
      },
      {
        title: "Selbstreinigender Kondensator — und seine Grenzen",
        body:
          "Viele iQ500-Modelle spülen den Kondensator während des Programms selbsttätig. Das ersetzt die Reinigung nicht vollständig: Feine Flusen bilden über Jahre einen Belag, den die Spülung nicht löst. Nimmt die Trockenleistung ab, obwohl das Gerät als selbstreinigend beworben ist, ist genau das meist der Befund — und eine Reinigung bringt die Laufzeit ohne Bauteiltausch zurück."
      }
    ]
  },
  {
    brandSlug: "siemens-reparatur-wien",
    deviceSlug: "backofen-herd",
    enriched: true,
    intro:
      "Siemens Backöfen und Kochfelder fallen selten komplett aus. Häufiger arbeitet eine einzelne Funktion nicht mehr: Oberhitze fehlt, die Temperatur weicht ab, das Touch-Bedienfeld reagiert nicht oder die Pyrolyse bricht ab. Diese Teilausfälle lassen sich gezielt reparieren, ohne die Einbauküche anzutasten.",
    modelSeries: [
      "HB / HR — Einbaubacköfen iQ300 bis iQ700",
      "HM / CM — Backöfen mit Mikrowelle bzw. Dampfunterstützung",
      "EH / ED — Induktionskochfelder, ET — Elektrokochfelder",
      "Reinigungssysteme: activeClean Pyrolyse und Hydrolyse-Reinigung"
    ],
    partsNote:
      "Heizkörper für Ober-, Unter- und Heißluft, Temperaturfühler, Türdichtungen, Scharniere, Lampen, Lüftermotoren und Thermostate sind gut verfügbar und häufig mit Bosch baugleich. Teuer sind Bedienmodule und Touch-Displays der iQ700-Klasse, bei sehr alten Geräten gelegentlich auch nicht mehr lieferbar. Bei Induktionsfeldern sind einzelne Spulen und Sensortasten oft gezielt tauschbar, während die komplette Leistungselektronik ein echter Preisfaktor ist.",
    errorCodes: [
      {
        code: "E011",
        meaning: "Taste oder Sensorfeld dauerhaft betätigt — meist Feuchtigkeit, Fett oder ein abgelegter Gegenstand"
      },
      {
        code: "Anzeige blinkt, Gerät sperrt",
        meaning: "Übertemperatur erkannt oder Kindersicherung aktiv; nach dem Abkühlen prüfen wir Fühler und Kühlgebläse"
      },
      {
        code: "Türsymbol bei Pyrolyse",
        meaning: "Türverriegelung meldet nicht geschlossen — Verriegelungsmotor, Scharniere oder Türdichtung"
      },
      {
        code: "F / E plus Nummer",
        meaning: "Sammelmeldung für Fühler-, Heiz- und Modulfehler; die Nummernzuordnung ist baureihenabhängig"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Heizt nicht oder Temperatur weicht ab",
        body:
          "Wir prüfen die Heizkörper auf Durchgang, dann Fühler, Thermostat und Ansteuerung. Das häufigste Bild ist ein Ofen, der heizt, aber deutlich zu heiß oder zu kalt wird — dann ist der Fühler gealtert, nicht die Heizung. Nach dem Tausch messen wir mit eigenem Fühler nach, statt der Anzeige zu vertrauen. Bei Heißluftbetrieb kommt der Umluftmotor als eigene Ursache hinzu."
      },
      {
        title: "Touch-Bedienfeld und Feuchtigkeit",
        body:
          "Siemens setzt in den höheren Serien fast durchgehend auf Sensortasten und Displays. Reagieren sie nicht oder springt die Anzeige, ist häufig Feuchtigkeit oder Fett im Bedienbereich die Ursache — nicht das Modul selbst. Wir reinigen die Kontaktbereiche, prüfen Flachbandleitungen und Steckverbinder und tauschen erst danach Bauteile. Das ist der Unterschied zwischen einer günstigen Reparatur und dem teuersten Ersatzteil des Geräts."
      },
      {
        title: "Pyrolyse, Türdichtung und Kochfeld",
        body:
          "Bei activeClean arbeitet die Tür bei sehr hoher Temperatur. Eine spröde Dichtung oder ausgeschlagene Scharniere führen zu Hitzeaustritt, Programmabbruch oder Sperre — beides sind gut verfügbare Verschleißteile. Bei Induktionsfeldern prüfen wir Spulen, Sensortasten und Kühllüfter einzeln, bevor die Leistungselektronik in Frage kommt. Ein gesprungenes Glaskeramikfeld bleibt dagegen unwirtschaftlich, weil das Glas als komplette Baugruppe kommt."
      }
    ]
  },
  {
    brandSlug: "siemens-reparatur-wien",
    deviceSlug: "kuehlschrank",
    enriched: true,
    intro:
      "Siemens Kühlgeräte begegnen uns in Wien häufig als Einbaugerät in geplanten Küchen und als freistehende Kühl-Gefrierkombination. Kühlt das Gerät zu schwach, vereist die Rückwand oder läuft der Kompressor durchgehend, prüfen wir zuerst die günstigen Ursachen — Dichtung, Abtauung, Luftführung und Verflüssiger.",
    modelSeries: [
      "KI / KU — Einbau-Kühlgeräte für feste Nischenmaße",
      "KG / KA — freistehende Kühl-Gefrierkombinationen und Side-by-Side",
      "hyperFresh und hyperFresh Premium — Frischezonen mit eigener Klappensteuerung",
      "noFrost und lowFrost — automatische bzw. reduzierte Abtauung"
    ],
    partsNote:
      "Türdichtungen, Thermostate, Fühler, Innenlüfter, Abtauheizungen, Abtauelektronik, Scharniere sowie Glas- und Kunststoffablagen sind gut lieferbar und häufig mit Bosch baugleich. Auszüge und Klappen der hyperFresh-Zonen sind einzeln erhältlich, statt gleich die Baugruppe zu tauschen. Ein Kompressortausch oder eine Reparatur am Kältekreis ist die wirtschaftliche Grenze — bei Geräten über zehn Jahren empfehlen wir dann in der Regel den Austausch.",
    errorCodes: [
      {
        code: "Alarm-Symbol mit Signalton",
        meaning: "Temperatur über dem Grenzwert — Tür offen gestanden, Dichtung undicht, Lüfter oder Abtauheizung gestört"
      },
      {
        code: "Temperaturanzeige blinkt",
        meaning: "Gespeicherte Temperaturüberschreitung; lässt sich abfragen und mit der Alarmtaste quittieren"
      },
      {
        code: "E oder F plus Nummer",
        meaning: "Fühlerfehler an Kühl- oder Gefrierteil bei Geräten mit Display; Zuordnung je Baureihe unterschiedlich"
      },
      {
        code: "Dauerlauf ohne Anzeige",
        meaning: "Kein Code, aber ein klares Symptom: Dichtung, Abtauung, Fühler oder verstaubter Verflüssiger"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Vereiste Rückwand und Wasser im Innenraum",
        body:
          "Eine vereiste Rückwand im Kühlteil zeigt einen blockierten Tauwasserablauf oder eine gestörte Abtauung an. Wir reinigen Ablaufloch und Rinne, prüfen Dichtung, Türschließung und Luftführung. Stehendes Wasser im Gemüsefach kommt fast immer aus demselben verstopften Ablauf — bleibt das länger unbemerkt, entsteht Geruch und Feuchtigkeit zieht in die Isolierung. Früh behandelt ist es eine kurze Arbeit, spät ein echter Schaden."
      },
      {
        title: "Einbaunische, Luftspalt und Dauerlauf",
        body:
          "Schaltet der Kompressor nicht mehr ab, prüfen wir Dichtung, Abtauung, Fühler und den Verflüssiger. Bei Siemens Einbaugeräten kommt ein spezifischer Punkt dazu: Der Luftweg hinter dem Gerät und im Sockelbereich muss frei sein. Wird beim Küchenumbau ein Lüftungsgitter verschlossen oder der Sockel dicht ausgeführt, staut sich die Wärme — das Gerät läuft durch, obwohl technisch alles in Ordnung ist."
      },
      {
        title: "hyperFresh-Zonen und Wirtschaftlichkeit",
        body:
          "Die Frischezonen arbeiten mit eigener Klappen- und Feuchtesteuerung. Vereisen sie oder werden sie zu kalt, liegt meist ein Fühler- oder Klappenproblem vor, selten ein Elektronikdefekt. Bei Einbaugeräten spricht ohnehin viel für die Reparatur, weil ein Austausch Arbeit an Nische, Front und Befestigung nach sich zieht. Solange der Kältekreis dicht ist, sind Dichtung, Lüfter, Fühler und Abtauung klar wirtschaftlich."
      }
    ]
  },
  {
    brandSlug: "siemens-reparatur-wien",
    deviceSlug: "tiefkuehlgeraet",
    enriched: true,
    intro:
      "Bei Siemens Tiefkühlgeräten und den Gefrierteilen der KG-Kombinationen zählt im Störfall die Zeit: Zuerst geht es um das Gefriergut, dann um die Reparatur. Wir behandeln solche Anfragen in Wien vorrangig, weil der Warenwert im Gerät die Reparatur häufig übersteigt.",
    modelSeries: [
      "GS — freistehende Stand-Tiefkühlschränke",
      "GI — Einbau-Tiefkühlgeräte für feste Nischenmaße",
      "GT — Tiefkühltruhen",
      "noFrost mit Alarmfunktion bei Temperaturanstieg, bigBox für hohes Gefriergut"
    ],
    partsNote:
      "Abtauheizungen, Abtaufühler, Innenlüfter, Türdichtungen, Scharniere, Schubladen und Elektronikmodule sind gut beschaffbar, vielfach baugleich mit Bosch. Wie bei Kühlgeräten ist der Kältekreis die wirtschaftliche Grenze. Bei Einbau-Tiefkühlgeräten rechnet sich die Reparatur länger als beim freistehenden Gerät, weil ein Austausch Anpassungen an der Nische und an der Möbelfront nach sich zieht.",
    errorCodes: [
      {
        code: "Alarm-Symbol mit Signalton",
        meaning: "Temperaturgrenze überschritten — Tür offen gestanden, Dichtung verhärtet, Abtauheizung oder Lüfter defekt"
      },
      {
        code: "Alarmspeicher blinkt",
        meaning: "Die höchste erreichte Temperatur ist gespeichert und zeigt, ob das Gefriergut angetaut war"
      },
      {
        code: "Vereisung trotz noFrost",
        meaning: "Bei noFrost kein normaler Zustand: Abtauheizung, Abtaufühler oder Steuerung prüfen"
      },
      {
        code: "E oder F plus Nummer",
        meaning: "Fühler- oder Modulfehler bei Geräten mit Display; die Nummer benennt den Bereich, nicht das Bauteil"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Sofortmaßnahmen bei Alarm",
        body:
          "Tür geschlossen halten — ein gut gefülltes Gefriergerät hält die Temperatur mehrere Stunden, ein halb leeres deutlich kürzer. Notieren Sie die angezeigte Temperatur und den Beginn des Alarms; Siemens Geräte speichern die höchste erreichte Temperatur, was zeigt, ob die Ware angetaut war. Öffnen Sie nicht zur Kontrolle, sondern rufen Sie an: Mit diesen Angaben schätzen wir die Dringlichkeit ein."
      },
      {
        title: "Vereisung und blockierter Luftweg",
        body:
          "Ein noFrost-Gerät sollte nicht vereisen. Tritt Eis auf, liegt meist ein Defekt an Abtauheizung, Abtaufühler oder Steuerung vor — oder die Tür dichtet wegen verhärteter Dichtung nicht mehr ab. Starkes Eis am Verdampfer blockiert zusätzlich den Luftweg: Einzelne Fächer werden zu warm, während das Gerät durchläuft. Wir tauen fachgerecht ab und prüfen den Abtaukreis, statt nur das Eis zu entfernen."
      },
      {
        title: "KG-Kombinationen mit getrennten Kreisen",
        body:
          "Bei Kombinationen mit zwei Kältekreisen kann der Gefrierteil ausfallen, während der Kühlteil normal arbeitet — oder umgekehrt. Das ist diagnostisch wertvoll, weil es die Suche sofort auf einen Kreis eingrenzt. Bitte notieren Sie, welcher Bereich betroffen ist und ob beide Zonen ihre Temperatur halten; damit kommen wir mit deutlich höherer Wahrscheinlichkeit mit dem richtigen Teil."
      }
    ]
  },
  {
    brandSlug: "aeg-reparatur-wien",
    deviceSlug: "waschmaschine",
    enriched: true,
    intro:
      "AEG Waschmaschinen begegnen uns in Wien vor allem in Wohnungen der 2000er- und 2010er-Jahre, häufig als Einbau- oder Unterbaugerät. Die Marke gehört zu Electrolux und teilt Bauteile mit Electrolux und Zanussi — das erweitert die Teilebasis merkbar und hält Reparaturen länger wirtschaftlich.",
    modelSeries: [
      "Serie 6000 (L6F…) — ProSense-Mengenautomatik, Einstiegsklasse",
      "Serie 7000 (L7F…) — häufigste Klasse in Mietobjekten",
      "Serie 8000 (L8F…) — ÖKOMix mit Vorvermischung von Waschmittel",
      "Ältere Lavamat-Baureihen mit Kohlebürstenmotor"
    ],
    partsNote:
      "Gute Teilelage über die Electrolux-Gruppe: Laugenpumpen, Türschlösser, Heizstäbe, Kohlebürsten, Stoßdämpfer, Riemen und Dichtungen sind für die Serien 6000 bis 8000 zügig lieferbar, häufig auch als baugleiches Electrolux- oder Zanussi-Teil. Elektronikmodule mit markenspezifischer Software sind dagegen nicht frei tauschbar. Bei sehr alten Lavamat-Geräten entscheidet die Verfügbarkeit oft darüber, ob die Reparatur sinnvoll bleibt.",
    errorCodes: [
      { code: "E10", meaning: "Problem beim Wasserzulauf — Ventil, Sieb, Hahn oder Zulaufschlauch" },
      { code: "E20", meaning: "Problem beim Ablauf — Laugenpumpe, Flusensieb oder Ablaufschlauch blockiert" },
      { code: "E40", meaning: "Türverriegelung meldet die Tür nicht als geschlossen" },
      { code: "E50", meaning: "Antriebsbereich — Motor, Kohlebürsten oder Drehzahlerfassung" },
      { code: "E60", meaning: "Heizkreis gestört — Programm bleibt kalt" }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Ablauf, Türschloss und Kohlebürsten",
        body:
          "Die drei häufigsten Befunde bei AEG sind ein blockierter Ablaufweg, ein Türschloss, das nicht mehr sauber verriegelt, und verschlissene Kohlebürsten an älteren Motoren. Letzteres zeigt sich typisch als Gerät, das wäscht, aber nicht mehr schleudert, oder als ruckelnder Anlauf. Kohlebürsten sind ein günstiges Verschleißteil — vorausgesetzt, der Kollektor ist noch in Ordnung. Genau das prüfen wir mit, bevor wir tauschen."
      },
      {
        title: "ÖKOMix, Dosierung und Kalk",
        body:
          "Geräte der Serie 8000 vermischen Waschmittel vor dem Einlauf in die Trommel. Das dafür nötige Ventil- und Kammersystem verkalkt in Wien schneller als in weichen Wassergebieten und führt dann zu Rückständen in der Schublade oder zu Dosierfehlern. Die Baugruppe ist zerlegbar und einzeln lieferbar — ein Modultausch ist selten nötig, wenn die Ursache Kalk und nicht Elektronik ist."
      },
      {
        title: "Teilebasis der Electrolux-Gruppe nutzen",
        body:
          "Der Vorteil bei AEG liegt in der gemeinsamen Plattform: Wird eine AEG-Teilenummer nicht mehr geführt, finden wir häufig das baugleiche Electrolux- oder Zanussi-Bauteil. Das verlängert die reparierbare Lebensdauer deutlich. Unwirtschaftlich wird es bei Lagerschäden im geschlossenen Bottich und bei Kombinationen aus Motor- und Elektronikschaden — dann rechnen wir offen gegen ein Neugerät."
      }
    ]
  },
  {
    brandSlug: "aeg-reparatur-wien",
    deviceSlug: "geschirrspueler",
    enriched: true,
    intro:
      "AEG Geschirrspüler sind in Wien häufig als vollintegriertes Einbaugerät verbaut, oft mit ComfortLift oder AirDry. Bleibt Wasser stehen, reinigt das Gerät schlecht oder meldet es einen i-Code, ist die Ursache meist gut eingegrenzt — die Electrolux-Plattform verwendet dieselbe Fehlerlogik über viele Baureihen.",
    modelSeries: [
      "Serie 6000 / 7000 — häufigste Klassen, teil- und vollintegriert",
      "Serie 8000 mit ComfortLift — anhebbarer Unterkorb",
      "AirDry — Türöffnung am Programmende zur Trocknung",
      "MaxiFlex-Schublade und SatelliteClean-Sprüharm in gehobenen Serien"
    ],
    partsNote:
      "Umwälzpumpen, Ablaufpumpen, Heizungen, Zulaufventile mit Wasserschutz, Türscharniere, Seilzüge, Sprüharme und Dichtungen sind über die Electrolux-Gruppe gut verfügbar. Bei ComfortLift-Geräten kommt die Hebemechanik des Unterkorbs als eigene Baugruppe dazu — Seile, Führungen und Federn sind einzeln erhältlich. Elektronikmodule sind lieferbar, aber der teuerste Posten und bei günstigen Geräten schnell der Grund gegen eine Reparatur.",
    errorCodes: [
      { code: "i10", meaning: "Kein oder zu geringer Wasserzulauf — Hahn, Sieb oder Zulaufventil" },
      { code: "i20", meaning: "Wasser läuft nicht ab — Filter, Ablaufpumpe oder Ablaufschlauch blockiert" },
      { code: "i30", meaning: "Leckschutz hat ausgelöst, Wasser im Bodenblech" },
      { code: "i50", meaning: "Umwälzpumpe bzw. ihre Ansteuerung gestört" },
      { code: "i60", meaning: "Heizkreis gestört — Programm bleibt kalt" }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "i20 und i30 richtig unterscheiden",
        body:
          "i20 heißt: Das Wasser läuft nicht ab — meist Filter, Pumpenrad oder Ablaufschlauch. i30 dagegen ist der Leckschutz, der Wasser im Bodenblech erkannt hat und das Gerät sperrt. Der Unterschied ist wichtig, weil i30 nicht durch Reinigen behoben wird: Solange die undichte Stelle bleibt, löst der Schutz erneut aus. Bis zum Termin bitte den Wasserhahn zudrehen."
      },
      {
        title: "ComfortLift: mehr Mechanik, mehr Verschleiß",
        body:
          "Der anhebbare Unterkorb ist ein Komfortgewinn und gleichzeitig eine zusätzliche mechanische Fehlerquelle. Typisch sind gelängte oder gerissene Seile, klemmende Führungen und eine Mechanik, die den Korb nur noch einseitig hebt. Diese Teile sind einzeln lieferbar; ein kompletter Korbtausch ist meist nicht nötig. Wichtig ist, den Korb nicht mit Gewalt zu bewegen, sobald er hakt — das reißt die Seile vollständig."
      },
      {
        title: "AirDry, Reinigungsergebnis und Enthärtung",
        body:
          "AirDry-Geräte öffnen die Tür am Programmende einen Spalt. Öffnet sie nicht mehr, bleibt Geschirr feucht — die Ursache liegt im Öffnungsmechanismus, nicht in der Heizung. Bleibt Geschirr dagegen sandig oder trüb, prüfen wir Siebe, Sprüharmdüsen, Salzstand und die Enthärtereinstellung. In Wien ist eine zu niedrig eingestellte Wasserhärte der häufigste Grund für Kalkbeläge auf Glas und Heizung."
      }
    ]
  },
  {
    brandSlug: "aeg-reparatur-wien",
    deviceSlug: "trockner",
    enriched: true,
    intro:
      "AEG Trockner sind heute überwiegend Wärmepumpengeräte mit AbsoluteCare oder ProSense. Das typische Problem ist eine schleichend länger werdende Trockenzeit, nicht ein harter Ausfall — und die Ursache liegt in den meisten Fällen im Luftweg oder in der Kondensatführung.",
    modelSeries: [
      "Serie 6000 / 7000 (T6D…, T7D…) — Wärmepumpentrockner, verbreitete Klassen",
      "Serie 8000 (T8D…) — AbsoluteCare-Programme für Wolle und Seide",
      "ProSense-Mengenautomatik zur automatischen Programmanpassung",
      "Ältere Lavatherm-Kondenstrockner ohne Wärmepumpe"
    ],
    partsNote:
      "Kondensatpumpen, Türschalter, Filter, Antriebsriemen, Lagerböcke, Lüfterräder, Feuchtesensoren und Heizregister sind über die Electrolux-Gruppe gut verfügbar. Der Verdampfer ist ein Preisfaktor, muss aber selten getauscht werden — Verschmutzung lässt sich in der Regel reinigen. Ein defekter Kältekreis ist die wirtschaftliche Grenze, weil das Aggregat nur komplett geliefert wird und der Aufwand bei Haushaltsgeräten nahe am Neupreis liegt.",
    errorCodes: [
      {
        code: "Behälter leeren",
        meaning: "Kondensatbehälter voll oder Schwimmerschalter verschmutzt; bei Schlauchbetrieb Schlauch geknickt"
      },
      {
        code: "Filter reinigen",
        meaning: "Flusenfilter oder Sockelfilter zugesetzt — häufigste Ursache verlängerter Trockenzeiten"
      },
      {
        code: "Kondensator reinigen",
        meaning: "Lamellenpaket des Verdampfers belegt; reduziert die Luftmenge und damit die Trockenleistung"
      },
      {
        code: "E oder EF plus Nummer",
        meaning: "Sammelmeldung der Steuerung für Sensor-, Heiz- oder Antriebsfehler; Zuordnung je Baureihe"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Luftweg vor Bauteiltausch",
        body:
          "Wir reinigen Flusenfilter, Sockelfilter, Feinsieb und den tiefer liegenden Teil des Lamellenpakets, der ohne Demontage nicht erreichbar ist. Danach messen wir die Trockenleistung nach. In vielen Fällen erreicht das Gerät damit wieder seine ursprüngliche Laufzeit, ohne dass ein Bauteil getauscht werden muss. Erst wenn die Werte danach nicht stimmen, kommen Heizregister, Feuchtesensor oder Kältekreis in Betracht."
      },
      {
        title: "Kondensatpumpe und Aufstellung",
        body:
          "Meldet das Gerät dauerhaft einen vollen Behälter, ist meist der Schwimmer verschmutzt oder das Pumpenrad blockiert — häufig durch Flusen, die den Weg über das Sieb genommen haben. Bei fest angeschlossenem Ablauf prüfen wir Höhe und Verlauf des Schlauchs mit. Im Wäscheturm über der Waschmaschine kommt der gemeinsame Siphon dazu, gegen dessen Wassersäule die Pumpe sonst fördern muss."
      },
      {
        title: "ProSense und scheinbar falsche Programme",
        body:
          "Die Mengenautomatik passt Zeit und Temperatur an die Beladung an. Ein verschmutzter oder verkalkter Feuchtesensor führt dazu, dass das Gerät zu früh trocken meldet — für den Nutzer sieht das nach einem Heizungsproblem aus, ist aber ein günstig behebbarer Sensorfall. Wir reinigen oder tauschen den Sensor und prüfen danach mit einer definierten Beladung nach."
      }
    ]
  },
  {
    brandSlug: "aeg-reparatur-wien",
    deviceSlug: "backofen-herd",
    enriched: true,
    intro:
      "AEG Backöfen und Kochfelder sind in Wien oft als Einbaugerät in Küchen der 2000er- und 2010er-Jahre verbaut. Fällt eine Heizart aus, weicht die Temperatur ab oder reagiert das Bedienfeld nicht, lässt sich das in der Regel gezielt reparieren, ohne die Küche anzutasten.",
    modelSeries: [
      "SenseCook — Backöfen mit Kerntemperaturfühler",
      "SteamBake und SteamPro — Dampfunterstützung bzw. Volldampfgeräte",
      "Pyrolyse- und Katalyse-Reinigungssysteme",
      "MaxiSense und SenseBoil Induktionskochfelder"
    ],
    partsNote:
      "Heizkörper, Temperaturfühler, Türdichtungen, Scharniere, Lampen, Lüftermotoren und Thermostate sind über die Electrolux-Gruppe gut verfügbar. Bei SteamBake- und SteamPro-Geräten kommen Wassertank, Dosierventil und Dampferzeuger als eigene Baugruppen dazu — dort ist Verkalkung die häufigste Ursache, nicht Elektronik. Bedienmodule und Displays sind der teuerste Posten und bei älteren Baureihen gelegentlich nicht mehr lieferbar.",
    errorCodes: [
      {
        code: "F plus Nummer",
        meaning: "Steuerungsmeldung für Fühler-, Heiz- oder Verriegelungsfehler; die Nummer ist je Baureihe eigen vergeben"
      },
      {
        code: "Gerät sperrt nach Übertemperatur",
        meaning: "Sicherheitsabschaltung hat gegriffen: Fühler, Kühlgebläse oder Heizungsansteuerung prüfen"
      },
      {
        code: "Türsymbol bei Pyrolyse",
        meaning: "Türverriegelung meldet nicht geschlossen — Verriegelungsmotor, Scharniere oder Dichtung"
      },
      {
        code: "Entkalken bei Dampfgeräten",
        meaning: "Aufforderung nach Betriebsdauer und Wasserhärte — in Wien wegen des harten Wassers merkbar häufiger"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Heizarten einzeln prüfen",
        body:
          "Fällt nur Oberhitze, Unterhitze oder Heißluft aus, ist das eine gute Nachricht: Die Heizkörper sind einzeln tauschbar und gut verfügbar. Wir messen den Durchgang, prüfen Fühler und Ansteuerung und kontrollieren die Temperatur nach dem Tausch mit eigenem Fühler. Weicht die Temperatur bei allen Heizarten gleichmäßig ab, ist meist der Fühler gealtert und nicht die Heizung defekt."
      },
      {
        title: "SteamBake, Dampf und Kalk",
        body:
          "Bei Geräten mit Dampfunterstützung ist Verkalkung die Hauptursache für Störungen: Der Dampferzeuger setzt zu, das Dosierventil klemmt oder das Gerät fordert dauernd zum Entkalken auf. In Wien tritt das früher auf als in weichen Wassergebieten. Entkalkung, Ventilreinigung und ein Tausch der Dichtungen lösen das in den meisten Fällen — eine Elektronikreparatur ist dafür selten nötig."
      },
      {
        title: "Kochfeld und Sicherheit",
        body:
          "Bei MaxiSense-Induktionsfeldern sind Spulen, Sensortasten und Kühllüfter oft gezielt tauschbar, während die komplette Leistungselektronik teuer ist. Ein gesprungenes Glaskeramikfeld bleibt unwirtschaftlich. Löst die Sicherung aus, riecht es verschmort oder sind Klemmen sichtbar erhitzt, bitte das Gerät nicht weiter betreiben — im Altbau prüfen wir dabei auch die Anschlussdose, nicht nur das Gerät selbst."
      }
    ]
  },
  {
    brandSlug: "aeg-reparatur-wien",
    deviceSlug: "kuehlschrank",
    enriched: true,
    intro:
      "AEG Kühlgeräte sind in Wien häufig als Einbaugerät verbaut, oft mit CustomFlex-Innentür oder TwinTech-Kühlung. Kühlt das Gerät zu schwach, vereist es oder läuft der Kompressor durchgehend, prüfen wir zuerst die günstigen Ursachen: Dichtung, Abtauung, Luftführung und Verflüssiger.",
    modelSeries: [
      "Serie 6000 / 7000 — Einbau- und freistehende Kühl-Gefrierkombinationen",
      "TwinTech — getrennte Kühlkreise für Kühl- und Gefrierteil",
      "CustomFlex — variable Innentürausstattung",
      "FreshZone bzw. LongFresh-Fächer mit eigener Temperaturzone"
    ],
    partsNote:
      "Türdichtungen, Thermostate, Fühler, Innenlüfter, Abtauheizungen, Abtauelektronik, Scharniere und Ablagen sind über die Electrolux-Gruppe gut lieferbar, häufig auch als baugleiches Electrolux- oder Zanussi-Teil. Auszüge und Klappen der Frischezonen sind einzeln erhältlich. Kältekreis und Kompressor sind wie bei allen Marken die wirtschaftliche Grenze — bei Geräten über zehn Jahren empfehlen wir dann in der Regel den Austausch.",
    errorCodes: [
      {
        code: "Alarm mit Signalton",
        meaning: "Temperatur außerhalb des Sollbereichs — Tür offen gestanden, Dichtung undicht, Lüfter oder Abtauung gestört"
      },
      {
        code: "Temperaturanzeige blinkt",
        meaning: "Gespeicherte Temperaturüberschreitung; wird mit der Alarmtaste quittiert"
      },
      {
        code: "F oder E plus Nummer",
        meaning: "Fühler- oder Elektronikfehler bei Geräten mit Display; Zuordnung je Baureihe unterschiedlich"
      },
      {
        code: "Dauerlauf ohne Meldung",
        meaning: "Kein Code, aber ein klares Symptom: Dichtung, Abtauung, Fühler oder verstaubter Verflüssiger"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Vereisung, Ablauf und Geruch",
        body:
          "Eine vereiste Rückwand oder Wasser im Gemüsefach kommt fast immer aus einem blockierten Tauwasserablauf. Wir reinigen Ablaufloch und Rinne, prüfen Dichtung, Türschließung und Luftführung im Innenraum. Bleibt das länger unbemerkt, entsteht Geruch und Feuchtigkeit zieht in die Isolierung — dann wird aus einer kurzen Arbeit ein echter Schaden. Deshalb lohnt es, dieses Bild früh anzusehen."
      },
      {
        title: "TwinTech: zwei Kreise, klarere Diagnose",
        body:
          "Bei TwinTech-Geräten arbeiten Kühl- und Gefrierteil mit getrennter Kälteerzeugung. Fällt eine Zone aus, während die andere normal arbeitet, grenzt das die Suche sofort ein — und es bedeutet, dass ein defekter Bereich nicht zwangsläufig das ganze Gerät erledigt. Bitte notieren Sie, welche Zone betroffen ist und welche Temperaturen angezeigt werden; das verkürzt die Diagnose vor Ort deutlich."
      },
      {
        title: "Nische, Luftspalt und Wirtschaftlichkeit",
        body:
          "Läuft der Kompressor durch, prüfen wir Dichtung, Abtauung, Fühler und Verflüssiger — und bei Einbaugeräten den Luftweg hinter dem Gerät. Ein beim Küchenumbau verschlossenes Lüftungsgitter oder ein dicht ausgeführter Sockel reichen für Dauerlauf ohne technischen Defekt. Solange der Kältekreis dicht ist, sind Dichtung, Lüfter, Fühler und Abtauung klar wirtschaftliche Reparaturen, gerade bei Einbaugeräten."
      }
    ]
  },
  {
    brandSlug: "aeg-reparatur-wien",
    deviceSlug: "tiefkuehlgeraet",
    enriched: true,
    intro:
      "Bei AEG Tiefkühlgeräten und den Gefrierteilen der Kombinationen geht es im Störfall zuerst um das Gefriergut. Wir behandeln Temperaturalarme und Ausfälle vorrangig, weil der Warenwert im Gerät die Reparatur häufig übersteigt — für Haushalte in Wien wie für Betriebe mit sensibler Ware.",
    modelSeries: [
      "Stand-Tiefkühlschränke der Serien 6000 und 7000",
      "Einbau-Tiefkühlgeräte für feste Nischenmaße",
      "Tiefkühltruhen mit Deckelbauweise",
      "FrostMatic-Schnellgefrierfunktion und NoFrost-Abtauautomatik"
    ],
    partsNote:
      "Abtauheizungen, Abtaufühler, Innenlüfter, Türdichtungen, Scharniere, Schubladen und Elektronikmodule sind über die Electrolux-Gruppe gut beschaffbar. Der Kältekreis ist die wirtschaftliche Grenze. Bei Einbau-Tiefkühlgeräten rechnet sich die Reparatur länger als beim freistehenden Gerät, weil ein Austausch Anpassungen an Nische und Möbelfront nach sich zieht — das gilt besonders für Geräte in geplanten Küchen.",
    errorCodes: [
      {
        code: "Temperaturalarm mit Signalton",
        meaning: "Gefrierraum über dem Grenzwert — Tür offen gestanden, Dichtung verhärtet, Abtauheizung oder Lüfter defekt"
      },
      {
        code: "Alarmspeicher",
        meaning: "Die höchste erreichte Temperatur bleibt gespeichert und zeigt, ob die Ware angetaut war"
      },
      {
        code: "Vereisung trotz NoFrost",
        meaning: "Bei NoFrost kein normaler Zustand: Abtauheizung, Abtaufühler oder Steuerung prüfen"
      },
      {
        code: "F oder E plus Nummer",
        meaning: "Fühler- oder Modulfehler der Steuerung; die Nummer benennt den Bereich, nicht das Bauteil"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Erste Schritte bei Temperaturanstieg",
        body:
          "Tür geschlossen halten und die angezeigte Temperatur mit dem Beginn des Alarms notieren. AEG Geräte speichern die höchste erreichte Temperatur — das ist die verlässlichste Auskunft darüber, ob das Gefriergut angetaut war. Bitte nicht zur Kontrolle öffnen: Jedes Öffnen kostet Reserve. Mit diesen Angaben können wir am Telefon einschätzen, wie eilig der Termin ist und welches Teil wir mitnehmen."
      },
      {
        title: "Abtausystem und blockierter Luftweg",
        body:
          "Vereist ein NoFrost-Gerät, liegt meist ein Defekt an Abtauheizung, Abtaufühler oder Steuerung vor — oder die Türdichtung ist verhärtet und lässt feuchte Raumluft ein. Starkes Eis am Verdampfer blockiert zusätzlich den Luftweg: Einzelne Fächer werden zu warm, während das Gerät durchläuft. Wir tauen fachgerecht ab und prüfen den Abtaukreis, damit sich das Bild nicht wiederholt."
      },
      {
        title: "FrostMatic und Dauerlauf richtig deuten",
        body:
          "Eine aktive Schnellgefrierfunktion lässt das Gerät bewusst durchlaufen und kühlt tiefer als eingestellt. Bleibt FrostMatic versehentlich aktiv, sieht das wie ein Defekt aus, ist aber Bedienung. Wir prüfen deshalb zuerst den Betriebszustand, dann Dichtung, Abtauung und Fühler — und erst danach den Kältekreis. Diese Reihenfolge verhindert, dass ein intaktes Gerät als Schadensfall behandelt wird."
      }
    ]
  },
  {
    brandSlug: "beko-reparatur-wien",
    deviceSlug: "waschmaschine",
    enriched: true,
    intro:
      "Beko Waschmaschinen sind in Wien weit verbreitet — häufig in Mietwohnungen und als Erstausstattung. Bei der Reparatur steht deshalb die Wirtschaftlichkeit besonders im Vordergrund: Verschleißteile lohnen sich fast immer, bei Elektronik- und Lagerschäden ist die Grenze zum Neupreis schneller erreicht als bei Premiummarken.",
    modelSeries: [
      "ProSmart Inverter — bürstenlose Antriebe ohne Kohlebürstenverschleiß",
      "AquaFusion und SteamCure — Ausstattungsmerkmale neuerer Baureihen",
      "Schwestermarken mit geteilter Technik: Grundig, Elektra Bregenz, Blomberg",
      "Aktionsmodelle des Handels mit abweichender Ausstattung trotz ähnlicher Typbezeichnung"
    ],
    partsNote:
      "Bei aktuellen Baureihen solide Teilelage: Laugenpumpen, Türschlösser, Heizstäbe, Riemen, Stoßdämpfer und Dichtungen sind meist beschaffbar, teils über die Schwestermarken der Arçelik-Gruppe. Bei älteren oder für den Aktionshandel gebauten Modellen ist die Beschaffung mühsamer, und Elektronikmodule sind im Verhältnis zum Gerätewert teuer. Deshalb prüfen wir die Teilelage über die Modellnummer, bevor eine Anfahrt vereinbart wird.",
    errorCodes: [
      { code: "E01", meaning: "Türverriegelung meldet die Tür nicht als geschlossen" },
      { code: "E02", meaning: "Kein oder zu geringer Wasserzulauf — Hahn, Sieb oder Zulaufventil" },
      { code: "E03", meaning: "Wasser wird nicht abgepumpt — Laugenpumpe oder Flusensieb blockiert" },
      { code: "E04", meaning: "Zu viel Wasser im Bottich — Zulaufventil schließt nicht dicht" },
      { code: "Blinkmuster statt Code", meaning: "Geräte ohne Display melden über die Programmleuchten; die Zählweise unterscheidet sich je Baureihe" }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Ablauf, Türschloss und Riemen",
        body:
          "Die häufigsten Befunde bei Beko sind ein blockierter Ablaufweg, ein defektes Türschloss und ein gelängter oder gerissener Antriebsriemen. Letzteres zeigt sich als Trommel, die sich frei drehen lässt, während der Motor läuft. Alle drei sind günstige Verschleißteile mit guter Verfügbarkeit. Lagergeräusche prüfen wir mit, weil sie über die Wirtschaftlichkeit der gesamten Reparatur entscheiden."
      },
      {
        title: "ProSmart Inverter — was das für die Reparatur heißt",
        body:
          "Neuere Beko Geräte arbeiten mit bürstenlosen Inverter-Motoren. Der klassische Kohlebürstenverschleiß fällt damit weg, dafür rückt die Ansteuerelektronik in den Vordergrund. Läuft die Trommel gar nicht oder nur ruckelnd an, prüfen wir Motorwicklung, Hallgeber und Leistungsteil getrennt — nicht jeder Antriebsfehler ist ein Motorschaden, und die Elektronik ist bei diesen Geräten der teuerste Einzelposten."
      },
      {
        title: "Wirtschaftlichkeit ehrlich rechnen",
        body:
          "Unsere Faustregel bei Beko: Pumpe, Türschloss, Heizung, Riemen und Dichtung lohnen sich fast immer. Bei Motor-, Elektronik- oder Lagerschäden an älteren Geräten kann die Rechnung schnell die Hälfte des Neupreises erreichen. Wir sagen das vor der Teilebestellung — und im Zweifel schon am Telefon anhand der Modellnummer, damit keine Anfahrt für ein wirtschaftlich aussichtsloses Gerät entsteht."
      }
    ]
  },
  {
    brandSlug: "beko-reparatur-wien",
    deviceSlug: "geschirrspueler",
    enriched: true,
    intro:
      "Beko Geschirrspüler finden wir in Wien häufig in Mietwohnungen und Kleinküchen, oft als teilintegriertes Einbaugerät. Bleibt Wasser stehen, wird das Geschirr nicht sauber oder heizt das Gerät nicht mehr, sind die Ursachen überschaubar — wichtig ist bei dieser Marke der Kostenvergleich vor dem Teiletausch.",
    modelSeries: [
      "60 cm Einbau- und Standgeräte als verbreitetste Bauform",
      "45 cm Schmalgeräte für Wiener Kleinküchen und Altbaunischen",
      "AquaIntense und Steam-Programme in gehobenen Baureihen",
      "Schwestermarken mit geteilter Technik: Grundig, Elektra Bregenz, Blomberg"
    ],
    partsNote:
      "Umwälzpumpen, Ablaufpumpen, Heizungen, Zulaufventile, Türscharniere, Seilzüge, Sprüharme und Dichtungen sind für aktuelle Baureihen beschaffbar, häufig auch über die Schwestermarken. Elektronikmodule sind im Verhältnis zum Gerätewert teuer — bei einem günstigen Gerät kann ein Modul samt Arbeitszeit die Hälfte des Neupreises erreichen. Bei Schmalgeräten sind einzelne Korb- und Sprüharmteile seltener lagernd und brauchen etwas Vorlauf.",
    errorCodes: [
      { code: "E01", meaning: "Heizkreis gestört — Programm bleibt kalt (am Geschirrspüler eigene Zuordnung, nicht wie an der Waschmaschine)" },
      { code: "E02", meaning: "Temperaturfühler unplausibel" },
      { code: "E04", meaning: "Überlauf erkannt, Leckschutz greift" },
      { code: "E05", meaning: "Kein oder zu geringer Wasserzulauf — Hahn, Sieb oder Zulaufventil" },
      { code: "E06", meaning: "Wasser läuft nicht ab — Ablaufpumpe, Sieb oder Ablaufschlauch blockiert" }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Codes nicht mit der Waschmaschine verwechseln",
        body:
          "Bei Beko sind die E-Codes je Gerätegattung eigenständig vergeben. E01 bedeutet am Geschirrspüler den Heizkreis, an der Waschmaschine die Türverriegelung. Wer einen Code aus einem allgemeinen Suchergebnis übernimmt, landet deshalb schnell beim falschen Bauteil. Wir lesen den Fehler am Gerät aus, ordnen ihn über die Modellnummer der Baureihe zu und messen nach, statt auf die Nummer hin zu tauschen."
      },
      {
        title: "Heizt nicht und reinigt schlecht",
        body:
          "Bleibt das Programm kalt, prüfen wir Heizung, Fühler und Ansteuerung — ohne Wärme löst kein Reiniger das Fett, das Ergebnis wirkt dann wie ein Pumpenproblem. Bleibt Geschirr sandig, sind Siebe, Sprüharmdüsen, Salzstand und Enthärtereinstellung die ersten Kandidaten. In Wien ist eine zu niedrig eingestellte Wasserhärte ein regelmäßiger Grund für Kalkbeläge auf Glas und Heizstab."
      },
      {
        title: "Vor der Anfahrt: Modellnummer prüfen",
        body:
          "Weil sich Beko Baureihen technisch stärker unterscheiden als bei Konzernmarken mit langlebigen Plattformen, ist die exakte Modellnummer hier besonders wichtig. Ein Foto des Typenschilds an der Türinnenseite genügt uns, um Teilelage und Preisrahmen vorab zu klären. Bei Geräten aus Aktionsserien sagen wir offen, wenn die Beschaffung länger dauert oder sich die Reparatur nicht rechnet."
      }
    ]
  },
  {
    brandSlug: "beko-reparatur-wien",
    deviceSlug: "trockner",
    enriched: true,
    intro:
      "Beko Trockner sind als Kondens- und Wärmepumpengeräte im Einsatz, häufig in Mietwohnungen. Das typische Bild ist eine länger werdende Trockenzeit oder eine dauerhafte Behältermeldung — beides in den meisten Fällen ein Luftweg- oder Kondensatthema und keine teure Reparatur.",
    modelSeries: [
      "Wärmepumpentrockner mit Kondensatorbauweise",
      "Kondenstrockner älterer Baureihen ohne Wärmepumpe",
      "Modelle mit Kondensatablauf statt Behälter",
      "Schwestermarken mit geteilter Technik: Grundig, Elektra Bregenz, Blomberg"
    ],
    partsNote:
      "Kondensatpumpen, Türschalter, Filter, Antriebsriemen, Lagerböcke, Lüfterräder und Heizregister sind für aktuelle Baureihen beschaffbar. Der Verdampfer ist bei Wärmepumpengeräten der teuerste Einzelposten, muss aber selten getauscht werden — Belag lässt sich in der Regel reinigen. Ein Defekt im Kältekreis ist bei Geräten dieser Preisklasse praktisch immer das wirtschaftliche Ende, weil das Aggregat nur komplett geliefert wird.",
    errorCodes: [
      {
        code: "Behälter voll",
        meaning: "Kondensatbehälter voll oder Schwimmerschalter verschmutzt; bei Ablaufbetrieb Schlauch geknickt"
      },
      {
        code: "Filter reinigen",
        meaning: "Flusenfilter oder Sockelfilter zugesetzt — die häufigste Ursache langer Programme"
      },
      {
        code: "Kondensator reinigen",
        meaning: "Lamellenpaket belegt, Luftmenge sinkt; bei Wärmepumpengeräten regelmäßig fällig"
      },
      {
        code: "E plus Nummer oder Blinkmuster",
        meaning: "Sammelmeldung für Sensor-, Heiz- und Antriebsfehler; Zuordnung und Blinkzählweise je Baureihe"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Trockenzeit wird länger",
        body:
          "Wir reinigen Flusenfilter, Sockelfilter und den tiefer liegenden Teil des Lamellenpakets, das ohne Demontage nicht erreichbar ist, und messen die Trockenleistung danach nach. In den meisten Fällen erreicht das Gerät damit wieder normale Laufzeiten, ohne Bauteiltausch. Erst wenn die Werte nach der Reinigung nicht stimmen, kommen Heizregister, Feuchtesensor oder Kältekreis in Betracht."
      },
      {
        title: "Kondensat, Pumpe und Ablauf",
        body:
          "Eine dauerhafte Behältermeldung geht meist auf einen verschmutzten Schwimmerschalter oder ein blockiertes Pumpenrad zurück. Bei Geräten mit fester Ableitung sind geknickte oder zu hoch geführte Schläuche die häufigste Ursache. Steht der Trockner im Turm über der Waschmaschine — in Wiener Altbaubädern die Regel —, prüfen wir Ablaufhöhe und gemeinsamen Siphon mit."
      },
      {
        title: "Geräusche, Riemen und Wirtschaftlichkeit",
        body:
          "Quietschen und Schleifen deuten auf Antriebsriemen, Filzringe oder Lagerböcke hin; alle drei sind günstige Verschleißteile. Reinigung, Pumpe, Türschalter, Riemen, Lager und Sensoren lohnen sich bei Beko klar. Die Grenze ist der Kältekreis: Bei einem Wärmepumpengerät dieser Preisklasse liegt der Aufwand dann über dem Neupreis, und wir sagen das offen statt Teile zu bestellen."
      }
    ]
  },
  {
    brandSlug: "beko-reparatur-wien",
    deviceSlug: "backofen-herd",
    enriched: true,
    intro:
      "Beko Backöfen und Herde sind in Wien häufig in Mietwohnungen und Erstausstattungen verbaut, oft als Einbaugerät mit Kochfeld. Fällt eine Heizart aus, weicht die Temperatur ab oder löst die Sicherung aus, lässt sich das in der Regel gezielt beheben — mit einem Blick auf die Wirtschaftlichkeit.",
    modelSeries: [
      "Einbaubacköfen 60 cm als verbreitetste Bauform",
      "Herd-Sets aus Backofen und Kochfeld, häufig als Paket verbaut",
      "Steam- und AeroPerfect-Programme in gehobenen Baureihen",
      "Standherde mit Glaskeramik- oder Gusskochfeld"
    ],
    partsNote:
      "Heizkörper, Temperaturfühler, Türdichtungen, Scharniere, Lampen, Lüftermotoren und Thermostate sind für aktuelle Baureihen beschaffbar, teils über die Schwestermarken der Arçelik-Gruppe. Bedienmodule und Displays sind im Verhältnis zum Gerätewert teuer und bei älteren Modellen nicht immer lieferbar. Türdichtungen und Scharniere sind dagegen günstige Verschleißteile — genau die Teile, die bei diesen Geräten am häufigsten gebraucht werden.",
    errorCodes: [
      {
        code: "F plus Nummer",
        meaning: "Steuerungsmeldung für Fühler-, Heiz- oder Modulfehler; die Zuordnung ist je Baureihe eigen vergeben"
      },
      {
        code: "Anzeige blinkt, Gerät sperrt",
        meaning: "Sicherheitsabschaltung nach Übertemperatur; Fühler und Kühlgebläse prüfen"
      },
      {
        code: "Sicherung löst aus",
        meaning: "Kein Displaycode, sondern ein Warnsignal: Masseschluss am Heizkörper oder Problem an der Anschlussdose"
      },
      {
        code: "Bedienfeld reagiert nicht",
        meaning: "Feuchtigkeit oder Fett im Bedienbereich, klemmende Taste oder defektes Modul"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Heizt nicht oder Temperatur weicht ab",
        body:
          "Wir messen die Heizkörper auf Durchgang und prüfen dann Fühler, Thermostat und Ansteuerung. Fällt nur eine Heizart aus, ist das der günstige Fall: Heizkörper sind einzeln tauschbar. Weicht die Temperatur bei allen Betriebsarten gleichmäßig ab, ist meist der Fühler gealtert. Nach dem Tausch messen wir mit eigenem Fühler nach, weil die Anzeige des Geräts bei diesem Fehlerbild nicht als Referenz taugt."
      },
      {
        title: "Sicherung, Anschluss und Sicherheit",
        body:
          "Löst der FI oder die Sicherung aus, riecht es verschmort oder sind Klemmen erhitzt, bitte das Gerät nicht weiter betreiben und die Sicherung nicht wiederholt zurücksetzen. Ursache ist meist ein Masseschluss am Heizkörper oder ein Problem an der Anschlussdose. Im Wiener Altbau prüfen wir den Anschluss mit — dort hängen Herde häufig noch an alten Dosen und teils an Provisorien aus früheren Umbauten."
      },
      {
        title: "Wirtschaftlichkeit und Kochfeld",
        body:
          "Heizkörper, Fühler, Dichtung, Scharniere und Lampen lohnen sich bei Beko klar. Ein Bedienmodul kann bei einem günstigen Gerät dagegen die Hälfte des Neupreises erreichen — dann rechnen wir offen gegen ein Neugerät. Bei Glaskeramikfeldern sind Kochplatten, Schalter und Anschlussleitungen tauschbar, ein gesprungenes Glas dagegen nicht wirtschaftlich, weil es als komplette Baugruppe kommt."
      }
    ]
  },
  {
    brandSlug: "beko-reparatur-wien",
    deviceSlug: "kuehlschrank",
    enriched: true,
    intro:
      "Beko Kühlgeräte sind in Wien besonders häufig als freistehende Kühl-Gefrierkombination im Einsatz. Kühlt das Gerät zu schwach, vereist es oder steht Wasser im Innenraum, sind die Ursachen meist günstig zu beheben — Abtauablauf, Dichtung, Lüfter und Fühler stehen ganz vorne.",
    modelSeries: [
      "NeoFrost Dual Cooling — getrennte Kreise für Kühl- und Gefrierteil",
      "HarvestFresh — Beleuchtungszyklus im Gemüsefach",
      "Freistehende Kühl-Gefrierkombinationen als verbreitetste Bauform",
      "Einbau- und Unterbaugeräte für Küchennischen"
    ],
    partsNote:
      "Türdichtungen, Thermostate, Fühler, Innenlüfter, Abtauheizungen, Scharniere und Ablagen sind für aktuelle Baureihen beschaffbar, teils über die Schwestermarken der Arçelik-Gruppe. Elektronikmodule sind im Verhältnis zum Gerätewert teuer. Der Kältekreis ist die klare wirtschaftliche Grenze: Bei einem Gerät dieser Preisklasse mit Kompressorschaden empfehlen wir in der Regel den Austausch statt einer Reparatur.",
    errorCodes: [
      {
        code: "Alarm mit Signalton",
        meaning: "Temperatur außerhalb des Sollbereichs — Tür offen gestanden, Dichtung undicht, Lüfter oder Abtauung gestört"
      },
      {
        code: "Temperaturanzeige blinkt",
        meaning: "Temperaturüberschreitung gespeichert; wird über die Bedientaste quittiert"
      },
      {
        code: "E plus Nummer",
        meaning: "Fühler- oder Elektronikfehler bei Geräten mit Display; Zuordnung je Baureihe unterschiedlich"
      },
      {
        code: "Dauerlauf ohne Meldung",
        meaning: "Kein Code, aber ein klares Symptom: Dichtung, Abtauung, Fühler oder verstaubter Verflüssiger"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Wasser im Gerät und Vereisung",
        body:
          "Stehendes Wasser im Gemüsefach und eine vereiste Rückwand haben dieselbe Hauptursache: einen blockierten Tauwasserablauf. Wir reinigen Ablaufloch und Rinne, prüfen Dichtung, Türschließung und Luftführung. Bei NeoFrost-Geräten kontrollieren wir zusätzlich den Umluftlüfter, weil ohne ihn warme Zonen entstehen, während der Kompressor durchläuft — ein Bild, das häufig für einen Kältemittelschaden gehalten wird."
      },
      {
        title: "Aufstellung: Wärme muss weg",
        body:
          "Ein häufiger Befund bei freistehenden Geräten ist gar kein Defekt, sondern die Aufstellung: Gerät in einer engen Nische, Verflüssiger an der Rückseite verstaubt, kein Abstand zur Wand oder direkte Sonneneinstrahlung. Dann läuft der Kompressor durch und die Temperatur wird trotzdem nicht gehalten. Wir prüfen das zuerst, weil es kostenlos zu beheben ist und den Verbrauch messbar senkt."
      },
      {
        title: "Reparatur oder Austausch",
        body:
          "Dichtung, Abtauheizung, Fühler, Lüfter, Thermostat, Scharniere und Ablagen lohnen sich klar und halten das Gerät oft Jahre länger im Betrieb. Bei einem Kompressor- oder Kältekreisschaden ist bei Beko dagegen meist der Austausch die vernünftigere Wahl — auch wegen des Stromverbrauchs eines dauerlaufenden Altgeräts. Diese Einschätzung geben wir vor der Teilebestellung, nicht danach."
      }
    ]
  },
  {
    brandSlug: "beko-reparatur-wien",
    deviceSlug: "tiefkuehlgeraet",
    enriched: true,
    intro:
      "Bei Beko Tiefkühlgeräten und den Gefrierteilen der Kombinationen zählt im Störfall zuerst das Gefriergut. Wir behandeln Temperaturalarme vorrangig — bei einem vollen Gefrierschrank übersteigt der Warenwert die Reparatur häufig deutlich, unabhängig von der Preisklasse des Geräts.",
    modelSeries: [
      "Stand-Tiefkühlschränke in verschiedenen Höhen",
      "Tiefkühltruhen mit Deckelbauweise",
      "NoFrost-Geräte mit automatischer Abtauung",
      "Gefrierteile der NeoFrost-Kombinationen mit eigenem Kreis"
    ],
    partsNote:
      "Abtauheizungen, Abtaufühler, Innenlüfter, Türdichtungen, Scharniere und Schubladen sind für aktuelle Baureihen beschaffbar, teils über die Schwestermarken. Schubladen und Klappen sind bei älteren Modellen die häufigste Beschaffungslücke, weil sie als Sichtteile baureihenspezifisch sind. Der Kältekreis ist die wirtschaftliche Grenze — dort empfehlen wir bei dieser Preisklasse in der Regel den Austausch.",
    errorCodes: [
      {
        code: "Temperaturalarm mit Signalton",
        meaning: "Gefrierraum über dem Grenzwert — Tür offen gestanden, Dichtung verhärtet, Abtauheizung oder Lüfter defekt"
      },
      {
        code: "Alarmspeicher",
        meaning: "Höchste erreichte Temperatur gespeichert; zeigt an, ob die Ware angetaut war"
      },
      {
        code: "Vereisung trotz NoFrost",
        meaning: "Bei NoFrost kein normaler Zustand: Abtauheizung, Abtaufühler oder Steuerung prüfen"
      },
      {
        code: "E plus Nummer",
        meaning: "Fühler- oder Modulfehler bei Geräten mit Display; die Nummer benennt den Bereich"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Erste Schritte bei Alarm",
        body:
          "Tür geschlossen halten, angezeigte Temperatur und Beginn des Alarms notieren, nicht zur Kontrolle öffnen. Ein gut gefülltes Gerät hält die Temperatur mehrere Stunden, ein halb leeres deutlich kürzer. Mit diesen Angaben schätzen wir am Telefon ein, wie eilig der Termin ist — und ob es sinnvoll ist, das Gefriergut vorübergehend anderweitig unterzubringen."
      },
      {
        title: "Abtausystem und Türdichtung",
        body:
          "Vereist ein NoFrost-Gerät, liegt meist ein Defekt an Abtauheizung, Abtaufühler oder Steuerung vor — oder die Türdichtung ist verhärtet und lässt feuchte Raumluft ein. Bei Truhen kommt die Deckeldichtung dazu, die durch Auflast und Alterung ihre Spannkraft verliert. Beide Dichtungsarten sind günstige Verschleißteile und in der Regel gut beschaffbar."
      },
      {
        title: "Wirtschaftlichkeit bei Truhen und Schränken",
        body:
          "Abtauheizung, Fühler, Lüfter, Dichtungen und Thermostate lohnen sich klar. Der Kältekreis ist die Grenze: Bei einem Gerät dieser Preisklasse liegt ein Kompressortausch nahe am Neupreis. Bei Truhen kommt ein praktischer Punkt dazu — der Transport eines vollen Geräts ist aufwendig, weshalb wir Reparaturen dort möglichst vor Ort erledigen und die Ware im Gerät belassen können."
      }
    ]
  },
  {
    brandSlug: "gorenje-reparatur-wien",
    deviceSlug: "waschmaschine",
    enriched: true,
    intro:
      "Gorenje Waschmaschinen gehören zur Hisense-Gruppe und teilen ihre Technik teilweise mit Asko. In Wien treffen wir sie häufig in Wohnungen mit Küchen- oder Badnische an. Die typischen Befunde sind Ablauf-, Türschloss- und Lagerthemen — bei den Elektronikteilen entscheidet die Wirtschaftlichkeit.",
    modelSeries: [
      "WaveActive und SteamTech — Ausstattungsmerkmale aktueller Baureihen",
      "Inverter-Antriebe ohne Kohlebürstenverschleiß in neueren Modellen",
      "Slim-Geräte mit geringer Tiefe für schmale Wiener Nischen",
      "Technische Verwandtschaft zu Asko innerhalb der Hisense-Gruppe"
    ],
    partsNote:
      "Laugenpumpen, Türschlösser, Heizstäbe, Riemen, Stoßdämpfer, Federn und Dichtungen sind für aktuelle Baureihen beschaffbar. Bei Modellen aus der Zeit vor der Hisense-Übernahme dauert die Beschaffung länger, weil sich Lieferwege und Teilenummern geändert haben. Elektronikmodule sind spürbar teurer als Verschleißteile — bei älteren Geräten prüfen wir die Verfügbarkeit deshalb vor der Terminvereinbarung anhand der Modellnummer.",
    errorCodes: [
      { code: "F1 bis F4", meaning: "Sensor- und Regelkreisfehler: Temperaturfühler, Niveauschalter oder Drehzahlerfassung" },
      { code: "F5", meaning: "Kein oder zu geringer Wasserzulauf — Hahn, Sieb oder Zulaufventil" },
      { code: "F6", meaning: "Wasser wird nicht abgepumpt — Laugenpumpe oder Flusensieb blockiert" },
      { code: "F7", meaning: "Türverriegelung meldet die Tür nicht als geschlossen" },
      { code: "Blinkmuster statt Code", meaning: "Geräte ohne Display melden über die Programmleuchten; die Zählweise unterscheidet sich je Baureihe" }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Pumpt nicht ab oder schleudert nicht",
        body:
          "Bleibt Wasser stehen oder bricht der Schleudergang ab, prüfen wir Flusensieb, Pumpenrad, Ablaufschlauch und Siphon, dann den Niveauschalter samt Druckdose. Ein häufiger Fall in Wiener Altbauten ist ein zu hoch geführter oder verkalkter Ablauf — dann ist das Gerät in Ordnung und die Installation der Grund. Erst danach kommt die Pumpe selbst in Betracht."
      },
      {
        title: "Lager, Federn und Stoßdämpfer",
        body:
          "Wandert das Gerät beim Schleudern oder wird es sehr laut, prüfen wir Stoßdämpfer, Trommelfedern und Lagerspiel getrennt. Dämpfer und Federn sind günstige Verschleißteile und lohnen sich fast immer. Ein Lagerschaden dagegen bedeutet die Demontage des Bottichs — bei Gorenje ist das je Baureihe unterschiedlich aufwendig, und wir nennen die Kosten vorab, statt sie am Gerät zu entdecken."
      },
      {
        title: "Türschloss, Heizung und Kalk",
        body:
          "Ein defektes Türschloss zeigt sich als F7 oder als Programm, das nicht startet — ein günstiges Teil mit guter Verfügbarkeit. Heizt das Gerät nicht, messen wir Heizstab und Fühler. Bei Wiener Leitungswasser mit mittlerer bis harter Härte ist ein verkalkter Heizstab ein regelmäßiger Befund, besonders bei Geräten, die überwiegend in kalten Programmen laufen."
      }
    ]
  },
  {
    brandSlug: "gorenje-reparatur-wien",
    deviceSlug: "geschirrspueler",
    enriched: true,
    intro:
      "Gorenje Geschirrspüler sind in Wien häufig als teilintegriertes Einbaugerät verbaut, oft in 45 cm Breite. Bleibt Wasser stehen, wird das Geschirr nicht sauber oder meldet das Gerät einen Wasserfehler, sind die Ursachen überschaubar und meist ohne teure Ersatzteile behebbar.",
    modelSeries: [
      "60 cm Einbau- und Standgeräte",
      "45 cm Schmalgeräte für Wiener Kleinküchen",
      "TotalDry und SpeedWash — Ausstattungsmerkmale aktueller Baureihen",
      "Technische Verwandtschaft zu Asko innerhalb der Hisense-Gruppe"
    ],
    partsNote:
      "Umwälzpumpen, Ablaufpumpen, Heizungen, Zulaufventile, Türscharniere, Seilzüge, Sprüharme und Dichtungen sind für aktuelle Baureihen beschaffbar. Bei älteren Modellen aus der Zeit vor der Übernahme dauert die Beschaffung länger. Türscharniere und Seilzüge sind bei Einbaugeräten die häufigsten Teile — sie sind günstig, verlangen aber den Ausbau aus der Nische, was wir bei der Terminplanung berücksichtigen.",
    errorCodes: [
      { code: "F1", meaning: "Überlauf erkannt, Leckschutz greift — Zulaufventil oder Niveauerfassung" },
      { code: "F2", meaning: "Kein oder zu geringer Wasserzulauf — Hahn, Sieb oder Zulaufventil" },
      { code: "F4", meaning: "Wasser läuft nicht ab — Ablaufpumpe, Sieb oder Ablaufschlauch blockiert" },
      { code: "F6", meaning: "Heizkreis oder Temperaturfühler gestört, Programm bleibt kalt" },
      { code: "Programmleuchten blinken", meaning: "Geräte ohne Display melden über die Kontrollleuchten; Zählweise je Baureihe" }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Wasserfehler zuerst außen prüfen",
        body:
          "Bei F2 prüfen wir Eckventil, Zulaufsieb und Aquastop, bevor das Zulaufventil in Verdacht kommt — in Wiener Altbauten ist ein teilweise geschlossener oder verkalkter Hahn ein regelmäßiger Grund. Bei F4 sind Feinsieb, Pumpenrad, Ablaufschlauch und der oft mit der Spüle geteilte Siphon die ersten Stellen. Beides ist in vielen Fällen ohne Ersatzteil erledigt."
      },
      {
        title: "Reinigt schlecht oder trocknet nicht",
        body:
          "Bleibt Geschirr sandig, prüfen wir Siebe, Sprüharmdüsen, Salz- und Klarspülerstand sowie die eingestellte Wasserhärte. Bei Geräten mit TotalDry hängt das Trocknungsergebnis zusätzlich an Klarspülerdosierung und Türöffnungsmechanik. Heizt das Gerät nicht, löst kein Reiniger das Fett — das wirkt dann wie ein Pumpenproblem, ist aber ein Heizkreisthema."
      },
      {
        title: "Einbaugerät und Wirtschaftlichkeit",
        body:
          "Pumpen, Ventile, Heizung, Scharniere, Seilzüge, Sprüharme und Dichtungen lohnen sich klar. Ein Elektronikmodul kann bei einem günstigen Gerät die Hälfte des Neupreises erreichen — dann rechnen wir offen gegen ein Neugerät. Bei Einbaugeräten in engen Nischen prüfen wir außerdem vorab, ob sich das Gerät ohne Beschädigung der Möbelfront ausbauen lässt."
      }
    ]
  },
  {
    brandSlug: "gorenje-reparatur-wien",
    deviceSlug: "trockner",
    enriched: true,
    intro:
      "Gorenje Trockner sind überwiegend Wärmepumpengeräte. Das häufigste Bild ist eine länger werdende Trockenzeit — meist ein Luftweg- oder Kondensatthema und keine teure Reparatur. Wichtig ist, das früh zu prüfen, weil ein belegter Verdampfer den Stromverbrauch deutlich anhebt.",
    modelSeries: [
      "Wärmepumpentrockner mit Kondensatorbauweise",
      "Kondenstrockner älterer Baureihen ohne Wärmepumpe",
      "Modelle mit Kondensatablauf statt Behälter",
      "Technische Verwandtschaft zu Asko innerhalb der Hisense-Gruppe"
    ],
    partsNote:
      "Kondensatpumpen, Türschalter, Filter, Antriebsriemen, Lagerböcke, Lüfterräder, Feuchtesensoren und Heizregister sind für aktuelle Baureihen beschaffbar. Der Verdampfer ist bei Wärmepumpengeräten der teuerste Einzelposten, muss aber selten getauscht werden — Belag lässt sich in der Regel reinigen. Ein Defekt im geschlossenen Kältekreis ist praktisch immer das wirtschaftliche Ende, weil das Aggregat nur komplett geliefert wird.",
    errorCodes: [
      {
        code: "Behälter voll",
        meaning: "Kondensatbehälter voll oder Schwimmerschalter verschmutzt; bei Ablaufbetrieb Schlauch geknickt"
      },
      {
        code: "Filter reinigen",
        meaning: "Flusenfilter oder Sockelfilter zugesetzt — die häufigste Ursache langer Programme"
      },
      {
        code: "Kondensator reinigen",
        meaning: "Lamellenpaket belegt, Luftmenge sinkt; bei Wärmepumpengeräten regelmäßig fällig"
      },
      {
        code: "F plus Nummer oder Blinkmuster",
        meaning: "Sammelmeldung für Sensor-, Heiz- und Antriebsfehler; Zuordnung und Blinkzählweise je Baureihe"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Wäsche bleibt feucht",
        body:
          "Wir reinigen Flusenfilter, Sockelfilter und den tiefer liegenden Teil des Lamellenpakets, der ohne Demontage nicht erreichbar ist, und messen die Trockenleistung danach nach. In den meisten Fällen erreicht das Gerät wieder normale Laufzeiten, ohne Bauteiltausch. Bleiben die Werte schlecht, prüfen wir Feuchtesensor, Heizregister und Luftführung getrennt, bevor der Kältekreis in Betracht kommt."
      },
      {
        title: "Kondensat und Aufstellung",
        body:
          "Eine dauerhafte Behältermeldung geht meist auf einen verschmutzten Schwimmerschalter oder ein blockiertes Pumpenrad zurück. Bei fester Ableitung sind geknickte oder zu hoch geführte Schläuche die häufigste Ursache. Steht das Gerät im Turm über der Waschmaschine oder in einem kleinen, schlecht belüfteten Bad — in Wien der Normalfall —, prüfen wir Ablaufhöhe, Siphon und Frischluftzufuhr mit."
      },
      {
        title: "Geräusche und wirtschaftliche Grenze",
        body:
          "Quietschen, Schleifen oder ein rhythmisches Schlagen deuten auf Antriebsriemen, Filzringe, Lagerböcke oder ein unwuchtiges Lüfterrad hin. Alle vier sind günstige Verschleißteile. Reinigung, Pumpe, Türschalter, Riemen, Lager und Sensoren lohnen sich bei Gorenje klar; ein Schaden im Kältekreis dagegen nicht — das sagen wir offen, statt Teile zu bestellen."
      }
    ]
  },
  {
    brandSlug: "gorenje-reparatur-wien",
    deviceSlug: "backofen-herd",
    enriched: true,
    intro:
      "Gorenje Backöfen und Herde sind in Wien häufig als Einbaugerät in Küchenzeilen verbaut, teils mit passendem Kochfeld als Set. Fällt eine Heizart aus, weicht die Temperatur ab oder löst die Sicherung aus, lässt sich das mit gezielter Messung eingrenzen.",
    modelSeries: [
      "Einbaubacköfen 60 cm als verbreitetste Bauform",
      "SuperSize und Steam-Baureihen mit größerem Garraum bzw. Dampfunterstützung",
      "Herd-Sets aus Backofen und Kochfeld",
      "Standherde mit Glaskeramikkochfeld"
    ],
    partsNote:
      "Heizkörper, Temperaturfühler, Türdichtungen, Scharniere, Lampen, Lüftermotoren und Thermostate sind für aktuelle Baureihen beschaffbar. Bedienmodule und Displays sind teurer und bei älteren Modellen aus der Zeit vor der Hisense-Übernahme nicht immer lieferbar. Türglas und Scharniere prüfen wir bei jedem Einsatz mit, weil ein ausgeschlagenes Scharnier die Dichtung mechanisch belastet und so einen scheinbaren Heizfehler erzeugt.",
    errorCodes: [
      {
        code: "F plus Nummer",
        meaning: "Steuerungsmeldung für Fühler-, Heiz- oder Modulfehler; Zuordnung je Baureihe eigen vergeben"
      },
      {
        code: "Anzeige blinkt, Gerät sperrt",
        meaning: "Sicherheitsabschaltung nach Übertemperatur; Fühler und Kühlgebläse prüfen"
      },
      {
        code: "Sicherung löst aus",
        meaning: "Kein Displaycode, sondern ein Warnsignal: Masseschluss am Heizkörper oder Problem an der Anschlussdose"
      },
      {
        code: "Uhr blinkt, Ofen startet nicht",
        meaning: "Nach Stromausfall ist die Zeitschaltung nicht quittiert oder eine Zeitvorwahl aktiv"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Heizt nicht oder ungleichmäßig",
        body:
          "Wir messen Ober-, Unterhitze und Heißluft getrennt auf Durchgang und prüfen dann Fühler, Thermostat und Ansteuerung. Fällt nur eine Heizart aus, ist das der günstige Fall. Weicht die Temperatur in allen Betriebsarten gleichmäßig ab, ist meist der Fühler gealtert; nach dem Tausch messen wir mit eigenem Fühler nach, weil die Geräteanzeige bei diesem Fehlerbild keine Referenz ist."
      },
      {
        title: "Tür, Dichtung und Scharniere",
        body:
          "Eine verhärtete Dichtung oder ein ausgeschlagenes Scharnier lassen Hitze entweichen: Der Ofen braucht länger, backt ungleichmäßig und die Front wird heiß. Beide Teile sind günstig und meist gut verfügbar. Bei Geräten mit Vollglastür prüfen wir zusätzlich, ob sich zwischen den Scheiben Beschlag oder Fettfilm gebildet hat — das wird oft für einen Defekt gehalten und ist reinigungsfähig."
      },
      {
        title: "Sicherheit und Wirtschaftlichkeit",
        body:
          "Löst der FI aus, riecht es verschmort oder sind Klemmen erhitzt, bitte das Gerät nicht weiter betreiben. Im Wiener Altbau prüfen wir die Anschlussdose mit, weil dort noch alte Klemmstellen und Umbauprovisorien vorkommen. Heizkörper, Fühler, Dichtung, Scharniere und Lampen lohnen sich klar; bei einem teuren Bedienmodul an einem älteren Gerät rechnen wir offen gegen ein Neugerät."
      }
    ]
  },
  {
    brandSlug: "gorenje-reparatur-wien",
    deviceSlug: "kuehlschrank",
    enriched: true,
    intro:
      "Gorenje Kühlgeräte sind in Wien als freistehende Kombination und als Einbaugerät in Küchennischen verbreitet. Kühlt das Gerät zu schwach, vereist es oder steht Wasser im Innenraum, liegt die Ursache meist bei Abtauablauf, Dichtung, Lüfter oder Fühler — alles günstige Positionen.",
    modelSeries: [
      "NoFrost- und NoFrost-Plus-Geräte mit automatischer Abtauung",
      "IonAir und AdaptTech — Ausstattungsmerkmale aktueller Baureihen",
      "Einbau- und Unterbaugeräte für Küchennischen",
      "Retro-Baureihen mit eigenen Sicht- und Türteilen"
    ],
    partsNote:
      "Türdichtungen, Thermostate, Fühler, Innenlüfter, Abtauheizungen, Scharniere und Ablagen sind für aktuelle Baureihen beschaffbar. Bei den Retro-Baureihen sind Sicht- und Türteile baureihenspezifisch und deshalb die häufigste Beschaffungslücke. Der Kältekreis ist die wirtschaftliche Grenze: Bei einem Kompressorschaden an einem älteren Gerät empfehlen wir in der Regel den Austausch statt einer Reparatur.",
    errorCodes: [
      {
        code: "Alarm mit Signalton",
        meaning: "Temperatur außerhalb des Sollbereichs — Tür offen gestanden, Dichtung undicht, Lüfter oder Abtauung gestört"
      },
      {
        code: "Temperaturanzeige blinkt",
        meaning: "Temperaturüberschreitung gespeichert; wird über die Bedientaste quittiert"
      },
      {
        code: "E oder F plus Nummer",
        meaning: "Fühler- oder Elektronikfehler bei Geräten mit Display; Zuordnung je Baureihe unterschiedlich"
      },
      {
        code: "Dauerlauf ohne Meldung",
        meaning: "Kein Code, aber ein klares Symptom: Dichtung, Abtauung, Fühler oder verstaubter Verflüssiger"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Wasser im Gerät und vereiste Rückwand",
        body:
          "Stehendes Wasser im Gemüsefach und eine vereiste Rückwand haben dieselbe Hauptursache: einen blockierten Tauwasserablauf. Wir reinigen Ablaufloch und Rinne, prüfen Dichtung, Türschließung und Luftführung. Bei NoFrost-Geräten kontrollieren wir zusätzlich Umluftlüfter und Abtauheizung, weil ohne sie warme Zonen entstehen, während der Kompressor durchläuft."
      },
      {
        title: "Einbaugerät: Belüftung der Nische",
        body:
          "Bei Einbaugeräten ist ein häufiger Befund kein Defekt, sondern die Nische: fehlende Lüftungsgitter im Sockel oder oben, ein verstaubter Verflüssiger oder ein zu geringer Wandabstand. Dann läuft der Kompressor durch und die Temperatur wird trotzdem nicht gehalten. Wir prüfen das zuerst, weil es ohne Ersatzteil zu beheben ist und den Stromverbrauch messbar senkt."
      },
      {
        title: "Reparatur oder Austausch",
        body:
          "Dichtung, Abtauheizung, Fühler, Lüfter, Thermostat, Scharniere und Ablagen lohnen sich klar und halten das Gerät oft Jahre länger im Betrieb. Bei einem Kältekreisschaden nennen wir den Aufwand offen und vergleichen ihn mit einem Neugerät — auch der Stromverbrauch eines dauerlaufenden Altgeräts gehört in diese Rechnung. Diese Einschätzung kommt vor der Teilebestellung."
      }
    ]
  },
  {
    brandSlug: "gorenje-reparatur-wien",
    deviceSlug: "tiefkuehlgeraet",
    enriched: true,
    intro:
      "Bei Gorenje Tiefkühlgeräten und den Gefrierteilen der Kombinationen hat im Störfall das Gefriergut Vorrang. Temperaturalarme behandeln wir vorrangig, weil der Warenwert eines vollen Geräts die Reparaturkosten meist deutlich übersteigt.",
    modelSeries: [
      "Stand-Tiefkühlschränke in verschiedenen Höhen",
      "Tiefkühltruhen mit Deckelbauweise",
      "NoFrost-Geräte mit automatischer Abtauung",
      "Gefrierteile der Kühl-Gefrierkombinationen"
    ],
    partsNote:
      "Abtauheizungen, Abtaufühler, Innenlüfter, Türdichtungen, Deckeldichtungen, Scharniere und Schubladen sind für aktuelle Baureihen beschaffbar. Schubladen und Klappen sind bei älteren Modellen die häufigste Lücke, weil sie als Sichtteile baureihenspezifisch sind. Der Kältekreis ist die wirtschaftliche Grenze — dort empfehlen wir bei älteren Geräten in der Regel den Austausch.",
    errorCodes: [
      {
        code: "Temperaturalarm mit Signalton",
        meaning: "Gefrierraum über dem Grenzwert — Tür offen gestanden, Dichtung verhärtet, Abtauheizung oder Lüfter defekt"
      },
      {
        code: "Alarmspeicher",
        meaning: "Höchste erreichte Temperatur gespeichert; zeigt an, ob die Ware angetaut war"
      },
      {
        code: "Vereisung trotz NoFrost",
        meaning: "Bei NoFrost kein normaler Zustand: Abtauheizung, Abtaufühler oder Steuerung prüfen"
      },
      {
        code: "F plus Nummer",
        meaning: "Fühler- oder Modulfehler bei Geräten mit Display; die Nummer benennt den Bereich"
      }
    ],
    errorCodesReviewed: true,
    sections: [
      {
        title: "Erste Schritte bei Alarm",
        body:
          "Tür oder Deckel geschlossen halten, angezeigte Temperatur und Beginn des Alarms notieren, nicht zur Kontrolle öffnen. Ein gut gefülltes Gerät hält die Temperatur mehrere Stunden, ein halb leeres deutlich kürzer. Mit diesen Angaben schätzen wir am Telefon ein, wie eilig der Termin ist und ob das Gefriergut vorübergehend anderweitig untergebracht werden sollte."
      },
      {
        title: "Abtausystem und Dichtungen",
        body:
          "Vereist ein NoFrost-Gerät, liegt meist ein Defekt an Abtauheizung, Abtaufühler oder Steuerung vor — oder die Dichtung ist verhärtet und lässt feuchte Raumluft ein. Bei Truhen kommt die Deckeldichtung dazu, die durch Auflast und Alterung ihre Spannkraft verliert. Beide Dichtungsarten sind günstige Verschleißteile mit guter Verfügbarkeit."
      },
      {
        title: "Vor Ort statt Werkstatt",
        body:
          "Abtauheizung, Fühler, Lüfter, Dichtungen und Thermostate lohnen sich klar. Weil der Transport eines gefüllten Geräts aufwendig ist, erledigen wir Reparaturen möglichst vor Ort und lassen die Ware im Gerät. Bei einem Kältekreisschaden nennen wir den Aufwand offen und vergleichen ihn mit einem Neugerät, statt eine Reparatur zu beginnen, die sich nicht mehr rechnet."
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

import type { HubFaqItem } from "../HubBlocks";
import { linzAppliancePages } from "./linzAppliancePages";

export type AppliancePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  h1: string;
  category: string;
  /** Teaser für Hub-Übersicht und Cross-Links. */
  short: string;
  intro: string;
  sections: {
    title: string;
    body: string;
  }[];
  checklist: string[];
  /** Wird als FAQPage-JSON-LD und Akkordeon auf der Detailseite ausgegeben. */
  faq: HubFaqItem[];
};

export const appliancePages: AppliancePage[] = [
  {
    slug: "waschmaschine-reparatur-wien",
    title: "Waschmaschine Reparatur Wien",
    metaTitle: "Waschmaschine Reparatur Wien | MONTER Service",
    description:
      "Waschmaschine Reparatur Wien: pumpt nicht ab, schleudert nicht oder zeigt E18? In der Nähe vor Ort, klar kalkuliert inkl. MwSt.",
    h1: "Waschmaschine Reparatur Wien.",
    category: "Waschmaschine",
    short:
      "Pumpt nicht ab, schleudert nicht, verliert Wasser oder zeigt einen Fehlercode.",
    intro:
      "Waschmaschine Reparatur in Wien: Wenn das Gerät nicht abpumpt, nicht schleudert, Wasser verliert oder einen Fehlercode zeigt, zählt eine schnelle Einschätzung. Wir reparieren markenoffen in allen Bezirken und im nahen Umland — Bosch, Miele, Siemens, AEG und weitere. In den meisten Fällen steckt hinter dem Fehlerbild ein einzelnes Verschleißteil.",
    sections: [
      {
        title: "Pumpt nicht ab, schleudert nicht",
        body:
          "Bleibt Wasser in der Trommel stehen, ist fast immer der Ablaufweg betroffen: Flusensieb, Laugenpumpe, Ablaufschlauch oder der Drucksensor, der den Wasserstand meldet. Bosch und Siemens Geräte zeigen dann E18 oder E23, Miele meldet F11, AEG und Zanussi geben E20 aus. Schleudert die Maschine nicht, obwohl sie abpumpt, prüfen wir zusätzlich Drehzahlgeber, Kohlebürsten älterer Motoren und die Unwuchterkennung — eine falsch beladene Trommel bricht den Schleudergang genauso ab wie ein technischer Fehler.",
      },
      {
        title: "Tür bleibt zu, Wasser tritt aus",
        body:
          "Eine verriegelte Tür nach Programmende deutet auf die Türverriegelung oder ein noch nicht abgepumptes Restwasser hin; der Code lautet bei BSH-Geräten meist F16. Wasser am Boden kommt in Wiener Wohnungen häufiger vom Zulaufschlauch und der Anschlussstelle als vom Gerät selbst — gerade dort, wo die Maschine im Altbaubad an einer alten Eckventil-Situation hängt. Wir prüfen Türmanschette, Laugenbehälter, Schläuche und Anschluss, bevor wir Teile bestellen.",
      },
      {
        title: "Wiener Wasserhärte, Altbau und Stiegenhaus",
        body:
          "Wiener Hochquellwasser ist mittelhart, in Teilen der Stadt mit Grundwasseranteil deutlich härter. Das schlägt sich auf Heizstäbe nieder: Verkalkung ist bei uns eine der häufigeren Ursachen dafür, dass ein Programm kalt bleibt. Im Altbau kommt die Aufstellung dazu — schwingende Holzböden verstärken Vibrationen, ausgeschlagene Stoßdämpfer fallen dort früher auf. Für die Terminplanung ist außerdem relevant, ob ein Lift vorhanden ist: Ein Gerätetausch über fünf Stockwerke ohne Aufzug rechnet sich anders als eine Reparatur vor Ort.",
      },
      {
        title: "Wann sich die Reparatur rechnet",
        body:
          "Als Orientierung: Pumpe, Türschloss, Heizstab, Stoßdämpfer, Dichtungen und Riemen lohnen sich fast immer, auch nach zehn Jahren. Kritisch wird es bei Trommellagern in geschlossenen Bottichen und bei Elektronikschäden an günstigen Geräten — dort liegt der Aufwand schnell bei der Hälfte eines Neupreises. Wir nennen den Aufwand vor der Teilebestellung und sagen offen, wenn ein Austausch die vernünftigere Wahl ist.",
      }
    ],
    checklist: ["Fehlercode notieren", "Typenschild fotografieren", "Wasserstand prüfen", "Standort nennen", "Telefonisch Termin klären"],
    faq: [
      {
        question: "Was kostet eine Waschmaschinen-Reparatur in Wien?",
        answer:
          "Die Anfahrt inklusive Diagnose liegt bei einem festen Betrag, danach kommen Arbeitszeit und Ersatzteil dazu. Verschleißteile wie Pumpe oder Türschloss bewegen sich üblicherweise im niedrigen dreistelligen Bereich inklusive Arbeit. Sie erfahren den Aufwand vor Ort, bevor wir ein Teil bestellen — die aktuellen Positionen stehen auf unserer Preisseite."
      },
      {
        question: "Lohnt sich die Reparatur bei einer zehn Jahre alten Maschine?",
        answer:
          "Meistens ja, solange Bottich, Lager und Gehäuse in Ordnung sind. Bei Marken mit langer Teileversorgung wie Bosch, Siemens oder Miele sind Verschleißteile auch nach zehn bis fünfzehn Jahren verfügbar. Unwirtschaftlich wird es bei einem Lagerschaden im geschlossenen Bottich oder wenn Elektronik und Motor gleichzeitig betroffen sind."
      },
      {
        question: "Kommen Sie auch am selben Tag?",
        answer:
          "Bei akuten Ausfällen mit Wasseraustritt versuchen wir, einen Termin am selben oder am nächsten Werktag zu legen. Rufen Sie dafür bitte direkt an, statt das Formular zu nutzen — telefonisch können wir sofort einschätzen, wie dringend der Fall ist und welches Teil wir vorsorglich mitnehmen."
      },
      {
        question: "Wer repariert Waschmaschinen in der Nähe?",
        answer:
          "Wir kommen zu Ihnen nach Hause in ganz Wien und ins nähere Niederösterreich. Die Reparatur findet vor Ort statt — Sie müssen das Gerät nicht in eine Werkstatt bringen. Rufen Sie an, dann sagen wir den nächsten freien Termin in Ihrem Bezirk."
      },
      {
        question: "Reparieren Sie auch AEG Waschmaschinen in Wien?",
        answer:
          "Ja. AEG Waschmaschinen der Serien 6000 bis 9000 gehören zum Alltag: Ablauf, Türschloss, Kohlebürsten älterer Motoren und Heizung sind gut über die Electrolux-Gruppe beschaffbar. Die Modellnummer vom Typenschild reicht für eine erste Einschätzung."
      }
    ]
  },
  {
    slug: "geschirrspueler-reparatur-wien",
    title: "Geschirrspüler Reparatur Wien",
    metaTitle: "Geschirrspüler Reparatur Wien | MONTER Service",
    description:
      "Geschirrspüler Reparatur Wien und Spülmaschine: reinigt schlecht, bleibt nass oder zieht kein Wasser? Vor Ort, inkl. MwSt.",
    h1: "Geschirrspüler Reparatur in Wien",
    category: "Geschirrspüler",
    short:
      "Wasser bleibt stehen, Gerät heizt nicht, reinigt schlecht oder läuft aus.",
    intro:
      "Geschirrspüler Reparatur in Wien — umgangssprachlich oft Spülmaschine: Wenn Wasser stehen bleibt, das Programm kalt bleibt, das Geschirr nicht sauber wird oder Wasser unter dem Gerät austritt, steht bei Einbaugeräten zusätzlich die Küche auf dem Spiel. Wir grenzen die Ursache ein, statt auf Verdacht zu tauschen. Markenoffen, auch AEG und Bauknecht, in Wien und im nahen Niederösterreich.",
    sections: [
      {
        title: "Wasser bleibt stehen oder läuft nicht ab",
        body:
          "Steht Wasser im Bodenblech, ist der Ablaufweg betroffen: Sieb, Ablaufpumpe, Pumpendeckel oder ein geknickter Ablaufschlauch. Bosch und Siemens melden dafür E24 oder E25, Miele F11. Häufig ist die Ursache banal — ein Etikett oder Glasbruch blockiert das Pumpenrad. In Küchen mit hoch geführtem Ablauf oder gemeinsamem Siphon mit der Spüle prüfen wir zusätzlich, ob Abwasser zurückläuft; das gehört im Altbau zu den häufigeren Nebenwirkungen einer nachträglich eingebauten Küche.",
      },
      {
        title: "E15: Wasser in der Bodenwanne",
        body:
          "Der bekannteste Code bei BSH-Geräten sperrt das Gerät bewusst, weil der Leckschutz Wasser in der Bodenwanne erkannt hat. Das Zurücksetzen allein hilft nicht: Solange die undichte Stelle bleibt, löst der Schutz wieder aus. Wir suchen die Quelle — Türdichtung, Umwälzpumpe, Durchlauferhitzer, Sprüharmaufnahme oder eine gerissene Schlauchschelle — und trocknen die Wanne, bevor das Gerät wieder freigegeben wird.",
      },
      {
        title: "Reinigungsergebnis wird schlechter",
        body:
          "Bleibt Geschirr trüb oder sandig, ist selten die Pumpe schuld. Typisch sind zugesetzte Siebe, blockierte Sprüharmdüsen, ein leerer Salzbehälter und eine falsch eingestellte Enthärtung. Genau letzteres ist in Wien relevant: Wer die Wasserhärte im Gerät zu niedrig einstellt, bekommt Kalkbeläge auf Glas und Heizung. Wir stellen die Enthärtung auf den tatsächlichen Wert ein und prüfen, ob der Durchlauferhitzer die Solltemperatur noch erreicht — ohne Wärme löst kein Reiniger das Fett.",
      },
      {
        title: "Einbaugeräte und Wirtschaftlichkeit",
        body:
          "Bei Einbaugeräten ist die Reparatur wirtschaftlich deutlich länger vorne als bei freistehenden: Ein Austausch bringt oft Anpassungen an Front, Nische oder Sockel mit sich. Pumpen, Ventile, Heizung, Scharniere und Seilzüge sind bei BSH-, Electrolux- und Miele-Geräten gut verfügbar. Bei Elektronikschäden an Aktionsgeräten rechnen wir vorher durch und sagen ehrlich, wenn sich der Aufwand nicht mehr lohnt.",
      }
    ],
    checklist: ["Siebe prüfen", "Fehlercode fotografieren", "Undichtigkeit dokumentieren", "Modellnummer bereithalten", "Anruf vorbereiten"],
    faq: [
      {
        question: "Mein Geschirrspüler zeigt E15 — kann ich das selbst zurücksetzen?",
        answer:
          "Zurücksetzen lässt sich der Code, aber er kommt wieder, solange die Undichtigkeit besteht. E15 heißt, dass der Leckschutz Wasser in der Bodenwanne erkannt hat. Bitte drehen Sie den Wasserhahn zu und nutzen Sie das Gerät nicht weiter, bis die Quelle gefunden ist — sonst zieht Feuchtigkeit in die Küchenmöbel."
      },
      {
        question: "Warum wird mein Geschirr trotz Reiniger nicht sauber?",
        answer:
          "Am häufigsten liegt es an zugesetzten Sieben, blockierten Sprüharmdüsen, fehlendem Regeneriersalz oder einer zu niedrig eingestellten Wasserhärte. Erst danach kommen Heizung und Umwälzpumpe in Frage. Wenn Reinigen von Sieb und Sprüharmen nichts bringt, messen wir die Temperatur im Programm nach."
      },
      {
        question: "Muss das Einbaugerät für die Reparatur ausgebaut werden?",
        answer:
          "Oft nicht — Sieb, Sprüharme, Ablaufpumpe und Türdichtung sind von vorne erreichbar. Für Arbeiten an Umwälzpumpe, Heizung oder Bodenwanne ziehen wir das Gerät fachgerecht aus der Nische und bauen es danach wieder mit Wasser-, Abwasser- und Stromanschluss ein."
      },
      {
        question: "Wer repariert Geschirrspüler bzw. die Spülmaschine in der Nähe?",
        answer:
          "Wir reparieren Geschirrspüler und Spülmaschinen vor Ort in Wien und im Umland. Sie müssen das Einbaugerät nicht selbst ausbauen. Rufen Sie an — wir sagen den nächsten Termin in Ihrem Bezirk und welche Teile wir mitbringen."
      },
      {
        question: "Reparieren Sie AEG- und Bauknecht-Geschirrspüler?",
        answer:
          "Ja. AEG-Geräte teilen sich viele Teile mit Electrolux und Zanussi; Bauknecht hängt an der Whirlpool-Teilewelt. Beides ist bei Pumpen, Ventilen, Heizung und Türdichtung in der Regel gut beschaffbar. Die Modellnummer vom Typenschild klärt die Lage vorab."
      }
    ]
  },
  {
    slug: "backofen-herd-reparatur-wien",
    title: "Backofen & Herd Reparatur Wien",
    metaTitle: "Backofen Herd Reparatur Wien | MONTER Service",
    description:
      "Backofen oder Herd bleibt kalt, heizt ungleichmäßig oder löst die Sicherung? Reparatur in Wien. Jetzt anrufen.",
    h1: "Backofen und Herd Reparatur in Wien",
    category: "Backofen & Herd",
    short:
      "Keine Heizleistung, ausgefallene Funktionen oder ausgelöste Sicherung.",
    intro:
      "Backöfen und Herde fallen selten komplett aus — häufiger arbeitet eine einzelne Funktion nicht mehr: Oberhitze fehlt, die Temperatur stimmt nicht, das Bedienfeld reagiert nicht oder die Sicherung löst aus. Genau diese Teilausfälle lassen sich gezielt reparieren, ohne die Einbauküche anzutasten. Bei elektrischen Symptomen steht dabei die Sicherheit vor allem anderen.",
    sections: [
      {
        title: "Heizt nicht oder Temperatur stimmt nicht",
        body:
          "Bäckt das Gerät oben oder unten nicht mehr, prüfen wir zuerst die Heizkörper auf Durchgang, dann Thermostat, Temperaturfühler und Ansteuerung. Ein häufiges Bild: Der Ofen heizt, aber deutlich zu heiß oder zu kalt — dann ist meist der Fühler verstellt oder gealtert, nicht die Heizung. Wir messen die Temperatur nach dem Tausch mit einem eigenen Fühler nach, statt sich auf die Anzeige zu verlassen. Bei Heißluftgeräten kommt der Umluftmotor als eigene Ursache dazu.",
      },
      {
        title: "Sicherung löst aus — bitte nicht weiter betreiben",
        body:
          "Ein Heizkörper mit Masseschluss, verschmorte Klemmen an der Anschlussdose oder Feuchtigkeit im Bedienmodul lösen den FI oder die Sicherung aus. Geruch, Funken, geschmolzene Isolierung oder eine wiederholt fallende Sicherung sind ein klares Stopp-Signal: Gerät vom Netz nehmen und prüfen lassen. Im Wiener Altbau kommt dazu, dass Herde häufig noch an alten Anschlussdosen und teils an 230-Volt-Provisorien hängen — wir prüfen deshalb den Anschluss mit, nicht nur das Gerät.",
      },
      {
        title: "Bedienfeld, Pyrolyse und Türdichtung",
        body:
          "Reagieren Sensortasten nicht oder springt die Anzeige, ist häufig Feuchtigkeit oder Fett im Bedienfeld die Ursache; BSH-Geräte melden das teils als E011. Bei Pyrolysegeräten arbeitet die Tür bei sehr hohen Temperaturen: Eine spröde Dichtung oder ausgeschlagene Scharniere führen dazu, dass Hitze austritt und das Reinigungsprogramm abbricht oder das Gerät sperrt. Dichtung und Scharniere sind Verschleißteile, gut verfügbar und deutlich günstiger als jede Elektronikarbeit.",
      },
      {
        title: "Kochfeld und Wirtschaftlichkeit",
        body:
          "Bei Induktionsfeldern sind einzelne Spulen, Sensortasten und Lüfter oft gezielt tauschbar, während die komplette Leistungselektronik ein echter Preisfaktor ist. Ein gesprungenes Glaskeramikfeld bleibt dagegen fast immer unwirtschaftlich. Bei Einbaugeräten fällt die Rechnung häufiger für die Reparatur aus, weil ein Austausch Anpassungen am Möbel nach sich zieht. Wir nennen den Aufwand vor der Teilebestellung.",
      }
    ],
    checklist: ["Sicherung prüfen", "Betriebsart notieren", "Fehlerbild beschreiben", "Gerät nicht öffnen", "Telefonisch abklären"],
    faq: [
      {
        question: "Mein Backofen löst die Sicherung aus — was soll ich tun?",
        answer:
          "Gerät nicht weiter einschalten und die Sicherung nicht wiederholt zurücksetzen. Meist liegt ein Masseschluss am Heizkörper oder ein Problem an der Anschlussdose vor. Beides ist reparierbar, gehört aber gemessen — bitte rufen Sie an und beschreiben Sie, ob die Sicherung sofort oder erst im Betrieb fällt."
      },
      {
        question: "Der Ofen backt ungleichmäßig — ist die Elektronik defekt?",
        answer:
          "Selten. Ungleichmäßiges Backen kommt meist von einem gealterten Temperaturfühler, einem ausgefallenen Heizkreis oder einem schwachen Umluftmotor. Wir messen die tatsächliche Temperatur und vergleichen sie mit der Anzeige — das grenzt die Ursache in wenigen Minuten ein."
      },
      {
        question: "Reparieren Sie auch Glaskeramik- und Induktionskochfelder?",
        answer:
          "Ja, wenn die Ursache in Elektronik, Sensortasten, Spulen oder Lüfter liegt. Ein gesprungenes oder gebrochenes Glaskeramikfeld ist dagegen fast immer unwirtschaftlich, weil das Glas als komplette Baugruppe geliefert wird."
      },
      {
        question: "Gibt es eine Backofen-Reparatur in der Nähe?",
        answer:
          "Ja — wir kommen zu Ihnen nach Hause in ganz Wien und ins nähere Niederösterreich. Einbaubacköfen bleiben in der Küche; wir arbeiten in der Nische oder bauen das Gerät fachgerecht aus, wenn der Zugang es verlangt. Rufen Sie an, dann legen wir den Termin in Ihrem Bezirk."
      }
    ]
  },
  {
    slug: "trockner-reparatur-wien",
    title: "Trockner Reparatur Wien",
    metaTitle: "Trockner Reparatur Wien | MONTER Service",
    description:
      "Trockner Reparatur Wien: Wäsche bleibt feucht oder das Programm dauert zu lang? Filter, Sensor und Wärmepumpe prüfen. Jetzt anrufen.",
    h1: "Trockner Reparatur in Wien",
    category: "Trockner",
    short:
      "Wäsche bleibt feucht, Wärmetauscher zugesetzt oder Sensorik defekt.",
    intro:
      "Wenn der Trockner läuft, aber die Wäsche feucht bleibt, steigen Zeitaufwand und Stromkosten deutlich. Meist ist die Ursache kein Defekt, sondern ein zugesetzter Luftweg — nur zeigt das Gerät das nicht als Fehler an, sondern über schleichend längere Programme. Wir unterscheiden Filterprobleme von echten Bauteilschäden und sagen, was sich lohnt.",
    sections: [
      {
        title: "Wäsche bleibt feucht — zuerst der Luftweg",
        body:
          "Bei Wärmepumpentrocknern läuft die Luft im Kreis über den Verdampfer. Setzt sich dessen Lamellenpaket zu, sinkt die Luftmenge und die Trockenzeit verlängert sich, ohne dass ein Fehlercode erscheint. Gleiches gilt für Flusenfilter, Sockelfilter und das Feinsieb. Bosch und Siemens weisen mit den Anzeigen für Filter und Wärmetauscher darauf hin, Miele meldet es im Klartext. Wir reinigen den gesamten Luftweg und messen danach die Trockenleistung nach — ein Verdampfertausch ist nur selten nötig.",
      },
      {
        title: "Kondensat, Behälter und Ablauf",
        body:
          "Meldet das Gerät dauerhaft einen vollen Behälter, ist entweder der Schwimmerschalter verschmutzt oder die Kondensatpumpe blockiert. Bei fest angeschlossenem Ablauf sind ein geknickter oder zu hoch geführter Schlauch die häufigste Ursache. In Wiener Altbauwohnungen steht der Trockner oft als Turm über der Waschmaschine — dort prüfen wir zusätzlich die Ablaufhöhe und den gemeinsamen Siphon, weil die Pumpe sonst gegen eine Wassersäule arbeitet.",
      },
      {
        title: "Heizung, Sensorik und Antrieb",
        body:
          "Bleibt die Wäsche kalt und feucht, kommen bei Kondenstrocknern Heizregister und Sicherheitsthermostat in Frage, bei Wärmepumpengeräten der Kältekreis. Feuchtesensoren im Trommelbereich verkalken oder verschmutzen und melden dann zu früh trocken — das ist ein häufiger und günstig zu behebender Fall. Quietschen und Schleifen deuten auf Antriebsriemen, Filzringe oder Lagerböcke hin; alle drei sind Verschleißteile mit guter Verfügbarkeit.",
      },
      {
        title: "Wann sich die Reparatur nicht mehr rechnet",
        body:
          "Reinigung, Pumpe, Türschalter, Riemen, Lager, Sensoren und Heizregister lohnen sich in der Regel klar. Die wirtschaftliche Grenze ist der defekte Kältekreis eines Wärmepumpentrockners: Diese Reparatur rechnet sich praktisch nie, weil das Aggregat als Baugruppe kommt. Sinnvoll ist dann der Austausch — und dabei zählt bei Trocknern auch der Verbrauch, weil neue Wärmepumpengeräte deutlich sparsamer laufen als alte Kondensmodelle.",
      }
    ],
    checklist: ["Flusenfilter reinigen", "Wärmetauscher prüfen", "Programm notieren", "Marke und Modell bereithalten", "Anrufen"],
    faq: [
      {
        question: "Mein Trockner braucht immer länger — ist er kaputt?",
        answer:
          "In den meisten Fällen nicht. Länger werdende Trockenzeiten sind das typische Bild eines zugesetzten Luftwegs: Flusenfilter, Sockelfilter und vor allem das Lamellenpaket des Verdampfers. Nach einer gründlichen Reinigung erreichen die Geräte üblicherweise wieder ihre normale Laufzeit."
      },
      {
        question: "Lohnt sich die Reparatur eines Wärmepumpentrockners?",
        answer:
          "Bei Pumpe, Sensorik, Riemen, Lager, Türschalter und Reinigung ja. Ist der Kältekreis selbst defekt — erkennbar an fehlender Wärme trotz sauberer Luftwege — wird es unwirtschaftlich, weil das Aggregat nur als komplette Baugruppe geliefert wird."
      },
      {
        question: "Kann ich den Wärmetauscher selbst reinigen?",
        answer:
          "Den vorderen Bereich bei Geräten mit Wartungsklappe ja, vorsichtig und ohne die Lamellen zu verbiegen. Der tiefer liegende Teil des Pakets ist ohne Demontage nicht erreichbar — dort setzt sich der Belag aber gerade fest. Diesen Teil übernehmen wir beim Termin mit."
      },
      {
        question: "Ich brauche einen neuen Trockner mit Lieferung, Installation und Altgeräte-Mitnahme.",
        answer:
          "Wenn die Reparatur sich nicht mehr rechnet, übernehmen wir Lieferung, Anschluss und Mitnahme des alten Geräts in Wien. Die Details stehen auf der Seite Lieferung & Montage — für die Reparatur selbst rufen Sie zuerst an, oft reicht eine Reinigung."
      }
    ]
  },
  {
    slug: "kuehlschrank-reparatur-wien",
    title: "Kühlschrank Reparatur Wien",
    metaTitle: "Kühlschrank Reparatur Wien | MONTER Service",
    description:
      "Kühlschrank Reparatur Wien: kühlt zu schwach, vereist oder tropft? Dichtung, Abtauung und Kältekreis vor Ort prüfen. In der Nähe anrufen.",
    h1: "Kühlschrank Reparatur in Wien",
    category: "Kühlschrank",
    short:
      "Kühlt zu schwach, vereist stark oder der Kompressor läuft ungewöhnlich.",
    intro:
      "Kühlschrank Reparatur in Wien: Wenn das Gerät nicht richtig kühlt, geht es zuerst um die Lebensmittel. Wichtig ist eine schnelle Einordnung — Temperatur, Türdichtung, Vereisung, Laufverhalten des Kompressors. Vieles davon lässt sich am Telefon vorab eingrenzen, damit wir mit dem passenden Teil kommen. In allen Bezirken und im nahen Niederösterreich, auch AEG.",
    sections: [
      {
        title: "Kühlt zu schwach oder vereist",
        body:
          "Eine vereiste Rückwand im Kühlteil deutet auf einen blockierten Tauwasserablauf oder eine gestörte Abtauung hin. Wir prüfen Ablaufloch und Ablaufrinne, Türdichtung, Türschließung und die Luftführung im Innenraum. Bei NoFrost- und MultiAirflow-Geräten reicht schon eine zu dichte Beladung direkt vor dem Luftauslass, damit einzelne Zonen zu warm werden. Ist die Elektronik betroffen, melden Geräte mit Display einen Fühlerfehler, andere zeigen nur Temperaturabweichungen.",
      },
      {
        title: "Wasser im Gerät und Geruch",
        body:
          "Stehendes Wasser im Gemüsefach kommt fast immer aus einem verstopften Tauwasserablauf. Bleibt das länger unbemerkt, entsteht Geruch und Feuchtigkeit zieht in die Isolierung — dann wird aus einer Zehn-Minuten-Arbeit ein echter Schaden. Wir reinigen den Ablaufweg, prüfen die Standfestigkeit und Neigung des Geräts und tauschen poröse Dichtungen gleich mit, damit sich das Bild nicht in wenigen Wochen wiederholt.",
      },
      {
        title: "Kompressor läuft dauerhaft oder gar nicht",
        body:
          "Schaltet der Kompressor nicht mehr ab, sind meist Türdichtung, Abtauung, Fühler oder ein verstaubter Verflüssiger an der Rückseite die Ursache — im Altbau oft, weil das Gerät in einer engen Nische ohne Luftspalt steht und die Wärme nicht wegkommt. Diese Punkte prüfen wir zuerst, weil sie günstig zu beheben sind. Läuft der Kompressor nicht an, kommen Anlaufrelais und Elektronik in Frage; der Kältekreis selbst ist kein Bereich für Provisorien.",
      },
      {
        title: "Reparatur oder Austausch",
        body:
          "Dichtungen, Fühler, Abtauheizung, Lüfter, Thermostate, Scharniere und Ablagen sind bei den gängigen Marken gut verfügbar und lohnen sich klar. Die wirtschaftliche Grenze ist der Kältekreis: Bei einem Gerät über zehn Jahren empfehlen wir dann meist den Austausch — auch, weil ein dauerlaufendes Altgerät im Jahr deutlich mehr Strom zieht als ein aktuelles. Bei Einbaugeräten fällt die Rechnung häufiger für die Reparatur aus, weil ein Austausch die Nische betrifft.",
      }
    ],
    checklist: ["Temperatur messen", "Dichtung prüfen", "Vereisung fotografieren", "Geräusche notieren", "Lebensmittel sichern"],
    faq: [
      {
        question: "Wie schnell können Sie bei einem Kühlschrankausfall kommen?",
        answer:
          "Ausfälle mit Verderbrisiko behandeln wir vorrangig und versuchen einen Termin am selben oder nächsten Werktag. Rufen Sie dafür bitte an: Am Telefon klären wir Temperatur, Laufverhalten und Gerätealter und können abschätzen, welches Teil wir mitnehmen."
      },
      {
        question: "Warum steht Wasser unter dem Gemüsefach?",
        answer:
          "Fast immer ist der Tauwasserablauf an der Rückwand verstopft. Das Wasser läuft dann nicht in die Verdunstungsschale über dem Kompressor, sondern in den Innenraum. Der Ablauf lässt sich reinigen — wichtig ist, das früh zu machen, bevor Feuchtigkeit in die Isolierung zieht."
      },
      {
        question: "Der Kühlschrank läuft ohne Pause. Ist der Kompressor defekt?",
        answer:
          "Nicht zwangsläufig. Häufiger sind eine verhärtete Türdichtung, eine gestörte Abtauung, ein defekter Fühler oder ein verstaubter Verflüssiger — bei Geräten in engen Nischen auch einfach fehlende Luftzufuhr. Diese Punkte prüfen wir zuerst, weil sie günstig zu beheben sind."
      },
      {
        question: "Gibt es Kühlschrank-Reparatur in der Nähe?",
        answer:
          "Ja. Wir kommen zu Ihnen nach Hause in Wien und ins Umland — das Gerät bleibt stehen, der Transport entfällt. Ausfälle mit Verderbrisiko behandeln wir vorrangig. Rufen Sie an, dann sagen wir den nächsten Termin in Ihrem Bezirk."
      },
      {
        question: "Reparieren Sie auch AEG Kühlschränke?",
        answer:
          "Ja. AEG Kühlgeräte teilen Plattformen mit Electrolux; Dichtungen, Fühler, Lüfter und Abtauheizung sind in der Regel gut verfügbar. Den Kältekreis rechnen wir vorher ehrlich — bei älteren Geräten ist der Austausch oft die bessere Wahl."
      }
    ]
  },
  {
    slug: "tiefkuehl-reparatur-wien",
    title: "Gefrierschrank & Tiefkühl Reparatur Wien",
    metaTitle: "Gefrierschrank Reparatur Wien | Tiefkühl | MONTER",
    description:
      "Gefrierschrank Reparatur Wien: Tiefkühlschrank oder -truhe alarmiert oder taut an? Abtauung und Dichtung vorrangig prüfen. Jetzt anrufen.",
    h1: "Gefrierschrank- und Tiefkühl-Reparatur in Wien",
    category: "Gefrierschrank & Tiefkühl",
    short:
      "Temperatur steigt, Alarm meldet sich oder das Gerät fällt ganz aus.",
    intro:
      "Gefrierschrank-Reparatur in Wien: Steigt die Temperatur oder meldet das Tiefkühlgerät Alarm, geht es zuerst um das Gefriergut. Wir behandeln Anfragen zu Gefrierschrank, Gefriertruhe und Einbau-Tiefkühl vorrangig, weil der Warenwert oft höher ist als die Reparatur — für Haushalte in Wien wie für Gastronomie und Ordinationen.",
    sections: [
      {
        title: "Sofortmaßnahmen bei Temperaturanstieg",
        body:
          "Halten Sie die Tür geschlossen — ein gut gefülltes Gefriergerät hält die Temperatur mehrere Stunden, ein halb leeres deutlich kürzer. Notieren Sie die angezeigte Temperatur und wann der Alarm begonnen hat; viele Geräte speichern die höchste erreichte Temperatur, was zeigt, ob die Ware angetaut war. Öffnen Sie das Gerät nicht zur Kontrolle, sondern melden sich telefonisch: Mit diesen Angaben schätzen wir ein, wie dringend der Termin ist.",
      },
      {
        title: "Vereisung trotz NoFrost",
        body:
          "Ein NoFrost-Gerät sollte nicht vereisen. Passiert es doch, liegt meist ein Defekt an Abtauheizung, Abtaufühler oder Steuerung vor — oder die Tür schließt wegen einer verhärteten Dichtung nicht mehr dicht. Bei starker Eisbildung am Verdampfer wird zusätzlich der Luftweg blockiert: Dann werden einzelne Fächer zu warm, während der Kompressor durchläuft. Wir tauen fachgerecht ab, prüfen den Abtaukreis und dichten die Tür wieder ab.",
      },
      {
        title: "Alarm, Fühler und Elektronik",
        body:
          "Ein Temperaturalarm ohne erkennbare Ursache geht häufig auf einen gealterten Fühler zurück, der eine zu hohe Temperatur meldet. Umgekehrt gibt es den stillen Fall: Das Gerät zeigt korrekte Werte an, kühlt aber nicht mehr richtig, weil der Fühler an der falschen Stelle misst. Deshalb messen wir die Innentemperatur unabhängig von der Anzeige und prüfen Türkontakt, Lüfter und Abtausteuerung mit.",
      },
      {
        title: "Reparatur oder Austausch",
        body:
          "Abtauheizung, Fühler, Lüfter, Dichtungen, Scharniere, Schubladen und Elektronikmodule sind bei den gängigen Marken gut beschaffbar; solche Reparaturen lohnen sich in der Regel. Der Kältekreis ist die wirtschaftliche Grenze. Bei Einbau-Tiefkühlgeräten rechnet sich eine Reparatur länger als beim freistehenden Gerät, weil ein Austausch Anpassungen an der Nische nach sich zieht. Wir nennen den Aufwand vor der Teilebestellung.",
      }
    ],
    checklist: ["Temperatur prüfen", "Alarm notieren", "Dichtung ansehen", "Gerätealter schätzen", "Sofort anrufen"],
    faq: [
      {
        question: "Wie lange hält ein Tiefkühlgerät ohne Strom die Temperatur?",
        answer:
          "Ein gut gefülltes Gerät hält bei geschlossener Tür üblicherweise mehrere Stunden, ein halb leeres deutlich weniger. Entscheidend ist, die Tür nicht zu öffnen. Notieren Sie den Beginn des Alarms — daraus lässt sich abschätzen, ob die Ware noch tiefgekühlt ist."
      },
      {
        question: "Warum vereist mein NoFrost-Gerät?",
        answer:
          "Vereisung ist bei NoFrost kein normaler Zustand. Ursache ist meist die Abtauheizung, der Abtaufühler oder die Steuerung — oder eine verhärtete Türdichtung, durch die feuchte Raumluft eintritt. Alle diese Teile sind einzeln tauschbar."
      },
      {
        question: "Übernehmen Sie auch Gefriertruhen in Gastronomie und Ordinationen?",
        answer:
          "Ja. Gewerbliche Geräte laufen mit höherer Taktung und haben oft eine eigene Teilenummerlogik. Für Betriebe mit sensibler Ware stimmen wir auf Wunsch Wartungsintervalle ab, statt auf den Ausfall zu warten."
      },
      {
        question: "Reparieren Sie Gefrierschränke und Gefriertruhen?",
        answer:
          "Ja — freistehenden Gefrierschrank, Einbau-Tiefkühl und Truhe. Das Vorgehen ist dasselbe: Temperatur sichern, Ursache eingrenzen, dann Dichtung, Abtauung oder Kältekreis. Rufen Sie bei Alarm sofort an, nicht erst wenn die Ware angetaut ist."
      }
    ]
  },
  {
    slug: "waschtrockner-reparatur-wien",
    title: "Waschtrockner Reparatur Wien",
    metaTitle: "Waschtrockner Reparatur Wien | MONTER Service",
    description:
      "Waschtrockner wäscht, trocknet aber nicht? Pumpe, Kondensat und Heizung in Wien prüfen. Jetzt Termin anfragen.",
    h1: "Waschtrockner Reparatur in Wien",
    category: "Waschtrockner",
    short:
      "Kombigerät mit Fehlern beim Waschen, Schleudern oder Trocknen.",
    intro:
      "Ein Waschtrockner vereint zwei Geräte in einem — und damit auch die Fehlerquellen aus beiden Bereichen in einem Gehäuse. Genau deshalb ist die Eingrenzung hier wichtiger als bei Einzelgeräten: Ob Pumpe, Heizung, Sensorik oder Elektronik betroffen ist, entscheidet über Aufwand und Wirtschaftlichkeit. Wir prüfen Wasch- und Trockenfunktion getrennt.",
    sections: [
      {
        title: "Wasch- und Trockenfunktion getrennt prüfen",
        body:
          "Zuerst klären wir, in welchem Betrieb das Problem auftritt. Pumpt das Gerät nicht ab oder schleudert es nicht, geht es um Laugenpumpe, Sieb, Drucksensor oder Antrieb — dieselben Kandidaten wie bei einer Waschmaschine. Bleibt die Wäsche nach dem Trockengang feucht, betrifft es Kondensationskreis, Heizung, Feuchtesensor oder den Luftweg. Läuft beides schlecht, prüfen wir vor allem Ablauf und Wasserstandserkennung, weil die Trocknung bei diesen Geräten Wasser zur Kondensation nutzt.",
      },
      {
        title: "Kondensation, Luftwege und Kalk",
        body:
          "Waschtrockner kondensieren die Feuchtigkeit meist mit Kaltwasser statt über eine Wärmepumpe. Ist die Kondensationsdüse verkalkt oder der Luftweg belegt, bleibt die Wäsche feucht, obwohl Heizung und Trommel arbeiten. In Wien spielt die Wasserhärte dabei mit: Kalkbelag an Düse und Heizung ist bei uns eine der häufigeren Ursachen. Wir entkalken, reinigen den Luftweg und prüfen anschließend die tatsächliche Trockenleistung.",
      },
      {
        title: "Belastung, Aufstellung und typische Folgeschäden",
        body:
          "Kombigeräte arbeiten in einem Gehäuse mit doppelter thermischer Last. Das zeigt sich an Lagern, Stoßdämpfern und Dichtungen früher als bei getrennten Geräten — besonders, wenn das Gerät in einer engen Nische ohne Luftzufuhr steht oder auf einem schwingenden Altbau-Holzboden. Wir prüfen Aufstellung, Standfestigkeit und Belüftung mit, weil sonst dieselbe Reparatur in kurzer Zeit wieder ansteht.",
      },
      {
        title: "Wirtschaftlichkeit bei Kombigeräten",
        body:
          "Verschleißteile wie Pumpe, Türschloss, Heizung, Dichtungen, Riemen und Sensoren lohnen sich klar. Kritisch wird es, wenn Trommellager oder Elektronik betroffen sind: Bei Waschtrocknern liegt der Zerlegeaufwand höher als bei Einzelgeräten, weil beide Funktionsbereiche im selben Gehäuse verschachtelt sind. Wir rechnen den Aufwand vor Ort durch und vergleichen ihn offen mit einem Neugerät.",
      }
    ],
    checklist: ["Fehlercode notieren", "Typenschild fotografieren", "Sieb & Filter prüfen", "Programm notieren", "Telefonisch Termin klären"],
    faq: [
      {
        question: "Der Waschtrockner wäscht sauber, trocknet aber nicht mehr — woran liegt das?",
        answer:
          "Meist an der Kondensation: verkalkte Kondensationsdüse, belegter Luftweg, defekter Feuchtesensor oder eine schwache Heizung. Weil diese Geräte zum Trocknen Kaltwasser nutzen, prüfen wir zusätzlich Zulauf und Wasserstandserkennung."
      },
      {
        question: "Ist ein Waschtrockner teurer zu reparieren als ein Einzelgerät?",
        answer:
          "Bei Verschleißteilen liegt der Aufwand ähnlich. Bei Arbeiten an Lager, Bottich oder Elektronik ist er höher, weil beide Funktionsbereiche im selben Gehäuse verschachtelt sind und mehr demontiert werden muss. Wir nennen den Unterschied vorab."
      },
      {
        question: "Was hilft gegen wiederkehrende Probleme?",
        answer:
          "Sieb und Filter regelmäßig reinigen, das Gerät nicht in eine geschlossene Nische ohne Luftzufuhr stellen und die Beladung für den Trockengang reduzieren. Kombigeräte trocknen nur eine Teilmenge der Waschladung — Überladung ist die häufigste Ursache für schlechte Ergebnisse."
      }
    ]
  },
  {
    slug: "dunstabzug-reparatur-wien",
    title: "Dunstabzug Reparatur Wien",
    metaTitle: "Dunstabzug Reparatur Wien | MONTER Service",
    description:
      "Dunstabzug saugt schwach, rauscht oder die Beleuchtung fällt aus? Motor und Filter in Wien reparieren. Jetzt anrufen.",
    h1: "Dunstabzug Reparatur in Wien",
    category: "Dunstabzug",
    short:
      "Schwache Saugleistung, laute Motoren, Beleuchtung oder Bedienfeld defekt.",
    intro:
      "Wenn die Dunstabzugshaube kaum noch Saugleistung bringt, laut wird oder Beleuchtung und Bedienung ausfallen, lohnt sich eine gezielte Prüfung von Motor, Filtern, Luftführung und Elektronik. Häufig ist die Haube technisch in Ordnung und die Ursache liegt im Abluftweg — gerade in Wiener Altbauküchen, wo nachträglich in bestehende Schächte gearbeitet wurde.",
    sections: [
      {
        title: "Saugleistung, Filter und Luftweg",
        body:
          "Fettfilter und Aktivkohlefilter setzen sich mit der Zeit zu; bei Umluftbetrieb ist der Kohlefilter ein Verbrauchsteil und nach etwa sechs bis zwölf Monaten fällig. Bleibt die Leistung trotz frischer Filter schwach, prüfen wir den Luftweg: gequetschte Flexschläuche, zu viele Umlenkungen, eine klemmende Rückstauklappe oder ein zu enger Mauerkasten kosten mehr Leistung als jeder Motorverschleiß. Erst danach kommen Lüfterrad und Motor in Frage.",
      },
      {
        title: "Geräusche und Vibrationen",
        body:
          "Ein pfeifender oder dröhnender Betrieb hat meist zwei Ursachen: ein unwuchtiges, mit Fett belegtes Lüfterrad oder ein Lagerschaden am Motor. Beides lässt sich unterscheiden, sobald die Haube geöffnet ist. Bei Inselhauben kommt die Aufhängung dazu — lose Befestigungen übertragen Vibrationen in die Decke und machen aus einem leisen Gerät ein laut wirkendes. Reinigung, Auswuchten und Nachziehen bringen hier oft mehr als ein Bauteiltausch.",
      },
      {
        title: "Beleuchtung, Schalter und Elektronik",
        body:
          "Ausgefallene Leuchten, klemmende Schiebeschalter und nicht reagierende Touch-Felder lassen sich in der Regel gezielt instand setzen, ohne die Haube zu tauschen. Bei älteren Hauben mit Halogenlampen prüfen wir Trafo und Fassungen mit, bei LED-Modulen das Netzteil. Feuchtigkeit und Fett sind die häufigsten Gegner der Bedienelektronik — deshalb reinigen wir Kontaktbereiche mit, statt nur das Modul zu wechseln.",
      },
      {
        title: "Abluft oder Umluft — verschiedene Fehlerbilder",
        body:
          "Im Abluftbetrieb entscheidet der Weg nach außen über die Leistung, im Umluftbetrieb der Kohlefilter und die freie Ausblasöffnung im Oberschrank. Wir prüfen, welche Betriebsart tatsächlich vorliegt — in der Praxis laufen viele Hauben als Umluft, obwohl der Eigentümer von Abluft ausgeht, weil der Kanal beim Küchenumbau nie angeschlossen wurde. Das erklärt schwache Leistung und Geruch, ohne dass ein Bauteil defekt ist.",
      }
    ],
    checklist: ["Filter prüfen", "Betriebsart nennen", "Geräusche notieren", "Marke & Modell bereithalten", "Anrufen"],
    faq: [
      {
        question: "Wie oft muss der Aktivkohlefilter gewechselt werden?",
        answer:
          "Bei Umluftbetrieb üblicherweise alle sechs bis zwölf Monate, abhängig davon, wie oft und wie fettreich gekocht wird. Der Fettfilter aus Metall ist dagegen spülmaschinenfest und wird nicht getauscht, sondern regelmäßig gereinigt."
      },
      {
        question: "Die Haube saugt schlecht, obwohl die Filter neu sind. Was noch?",
        answer:
          "Dann liegt es meist am Luftweg: gequetschter Flexschlauch, zu viele Umlenkungen, klemmende Rückstauklappe oder ein zu enger Mauerkasten. Auch ein nie angeschlossener Abluftkanal aus einem früheren Küchenumbau kommt häufiger vor als ein Motorschaden."
      },
      {
        question: "Lohnt sich die Reparatur oder besser eine neue Haube?",
        answer:
          "Beleuchtung, Schalter, Elektronikmodul, Lüfterrad und Motor sind meist wirtschaftlich reparierbar, gerade bei Einbau- und Inselhauben, deren Austausch Möbelarbeiten nach sich zieht. Bei günstigen Unterbauhauben kann ein Motorschaden dagegen schon in der Nähe des Neupreises liegen."
      }
    ]
  },
  {
    slug: "fernseher-reparatur-wien",
    title: "Fernseher Reparatur Wien",
    metaTitle: "Fernseher Reparatur Wien | TV Service | MONTER",
    description:
      "Fernseher bleibt schwarz, hat Streifen oder keinen Ton? Netzteil und Anschlüsse in Wien prüfen. Jetzt anrufen.",
    h1: "Fernseher Reparatur in Wien",
    category: "Fernseher",
    short:
      "Schwarzes Bild, Streifen, fehlender Ton oder Gerät startet nicht mehr.",
    intro:
      "Bleibt der Bildschirm schwarz, zeigt das Bild Streifen oder Flecken, fehlt der Ton oder startet das Gerät ständig neu? Wir prüfen Netzteil, Elektronik, Panel-Ansteuerung und Anschlüsse und sagen offen, ob sich die Reparatur rechnet. Bei Fernsehern hängt genau das an einer einzigen Frage: Ist das Panel betroffen oder die Elektronik davor?",
    sections: [
      {
        title: "Kein Bild, aber Ton",
        body:
          "Ton ohne Bild ist ein aussagekräftiges Symptom: Meist arbeitet die Hintergrundbeleuchtung nicht mehr, weil LED-Leisten oder deren Treiber ausgefallen sind, oder das Netzteil liefert die Spannung für das Backlight nicht. Ein einfacher Test hilft bei der Vorabeinschätzung: Wer im dunklen Raum mit einer Taschenlampe schräg auf den Bildschirm leuchtet und ein schwaches Bild erkennt, hat sehr wahrscheinlich ein Backlight-Problem — und damit einen Fall, der gut reparierbar ist.",
      },
      {
        title: "Startprobleme und Elektronik",
        body:
          "Geht das Gerät nicht mehr an, startet in einer Endlosschleife oder blinkt nur die Standby-LED, prüfen wir Netzteil, Hauptplatine und Spannungsversorgung gezielt. Aufgeblähte Elektrolytkondensatoren im Netzteil sind ein klassischer und günstig behebbarer Befund. Die Blinkcodes der Standby-LED helfen bei der Eingrenzung — notieren Sie deshalb, wie oft sie blinkt, bevor das Gerät aufgibt.",
      },
      {
        title: "Streifen, Flecken und Panel-Schäden",
        body:
          "Senkrechte oder waagrechte Streifen, ausgefallene Bildbereiche und Farbfehler zeigen oft ein Problem in der Panel-Ansteuerung. Manche dieser Fehler liegen an Verbindungsleitungen und Treiberplatinen und sind reparierbar. Ein mechanisch beschädigtes Display — Sprung, Druckstelle, Spinnennetzmuster — ist dagegen praktisch immer ein Fall für den Austausch des Geräts, weil ein Panel als komplette Baugruppe kommt und den Gerätewert übersteigt.",
      },
      {
        title: "Ton, Anschlüsse und Wirtschaftlichkeit",
        body:
          "Ausgefallene Lautsprecher, defekte HDMI-Buchsen, Empfangsprobleme am Tuner und nicht reagierende Fernbedienungen lassen sich meist gezielt beheben. Bei modernen Geräten kommt Software als Ursache dazu: Nach fehlgeschlagenen Updates hilft häufig ein Reset, bevor Hardware getauscht wird. Unsere Faustregel: Netzteil, Backlight, Anschlüsse und Elektronik lohnen sich, ein defektes Panel nicht. Diese Einschätzung geben wir vorab, damit keine Anfahrt für ein wirtschaftlich aussichtsloses Gerät entsteht.",
      }
    ],
    checklist: [
      "Marke & Modellnummer notieren",
      "Bild- oder Tonfehler beschreiben",
      "Standby-LED beobachten",
      "Displaybruch prüfen",
      "Telefonisch abklären"
    ],
    faq: [
      {
        question: "Mein Fernseher hat Ton, aber kein Bild. Ist er noch zu retten?",
        answer:
          "In vielen Fällen ja. Ton ohne Bild deutet auf Hintergrundbeleuchtung oder Netzteil hin, nicht auf das Panel. Leuchten Sie im dunklen Raum schräg mit einer Taschenlampe auf den Bildschirm: Erkennen Sie ein schwaches Bild, ist die Bildverarbeitung intakt und die Reparatur meist sinnvoll."
      },
      {
        question: "Lohnt sich eine TV-Reparatur überhaupt noch?",
        answer:
          "Das hängt am Bauteil. Netzteil, LED-Backlight, Anschlüsse und Hauptplatine sind wirtschaftlich reparierbar, besonders bei größeren und hochwertigeren Geräten. Ein gebrochenes oder defektes Panel ist es nicht — dessen Preis liegt in der Regel über dem Restwert des Fernsehers."
      },
      {
        question: "Reparieren Sie bei mir zu Hause oder nehmen Sie das Gerät mit?",
        answer:
          "Wenn möglich vor Ort, weil das Transportrisiko bei großen Panels erheblich ist. Bei Arbeiten, die eine Werkstatt brauchen, sprechen wir das vorher ab und klären den Transport gemeinsam — inklusive der Frage, ob die Originalverpackung noch vorhanden ist."
      }
    ]
  }
];

/** Inklusive Linz — die Linzer Seiten bleiben aus Menü und Wiener Hub, sind aber eigene Routen. */
export const allAppliancePages: AppliancePage[] = [...appliancePages, ...linzAppliancePages];

export function getAppliancePage(slug: string) {
  return allAppliancePages.find((page) => page.slug === slug);
}

export function isLinzAppliancePage(slug: string) {
  return linzAppliancePages.some((page) => page.slug === slug);
}

export const applianceWashingNavLinks = appliancePages
  .filter((page) =>
    ["waschmaschine-reparatur-wien", "geschirrspueler-reparatur-wien", "trockner-reparatur-wien", "waschtrockner-reparatur-wien"].includes(
      page.slug
    )
  )
  .map((page) => ({ label: page.category, href: `/haushaltsgeraete/${page.slug}` }));

export const applianceKitchenNavLinks = appliancePages
  .filter((page) => !applianceWashingNavLinks.some((link) => link.href.endsWith(page.slug)))
  .map((page) => ({ label: page.category, href: `/haushaltsgeraete/${page.slug}` }));

export const applianceHubLinks = appliancePages.map((page) => ({
  label: page.category,
  href: `/haushaltsgeraete/${page.slug}`,
  text: page.short
}));

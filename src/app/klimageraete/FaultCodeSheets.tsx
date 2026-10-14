const faultCodes = [
  {
    brand: "Daikin",
    how: "Zweistelliger Code über die Fernbedienung.",
    tilt: "lg:-rotate-1",
    codes: [
      { code: "U4", meaning: "Keine Übertragung zwischen Innen- und Außengerät." },
      { code: "U0", meaning: "Kältemittelmangel. Der Kreis ist undicht, nicht leer verbraucht." },
      { code: "A5", meaning: "Hochdruck oder Vereisungsschutz. Oft zuerst die Luftmenge." },
      { code: "C9", meaning: "Fühler der Ansaugluft am Innengerät." },
      { code: "E7", meaning: "Lüftermotor am Außengerät." }
    ]
  },
  {
    brand: "Mitsubishi Electric",
    how: "Mr. Slim mit Codeanzeige. Viele Wandgeräte blinken nur.",
    tilt: "lg:mt-10 lg:rotate-1",
    codes: [
      { code: "P1", meaning: "Ansaugfühler am Innengerät." },
      { code: "P5", meaning: "Kondensatpumpe oder Überlaufschutz." },
      { code: "P6", meaning: "Vereisungsschutz im Kühlen, Überhitzungsschutz im Heizen." },
      { code: "E6", meaning: "Kommunikation zwischen Innen- und Außengerät. E7 gehört dazu." }
    ]
  },
  {
    brand: "LG",
    how: "Anzeige CH am Innengerät oder in der App.",
    tilt: "lg:mt-4 lg:-rotate-2",
    codes: [
      { code: "CH05", meaning: "Kommunikation zwischen Innen- und Außengerät." },
      { code: "CH01", meaning: "Fühlerfehler. Welcher Fühler, hängt von der Baureihe ab. CH02 ebenso." },
      { code: "CH10", meaning: "Lüfter am Innengerät." },
      { code: "CH21", meaning: "Verdichter oder Steuerkreis am Außengerät." }
    ]
  }
];

export function FaultCodeSheets() {
  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--bg-muted)] py-16 sm:py-24">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <h2 className="font-display max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
          Die Zuordnung, Marke für Marke.
        </h2>
        <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
          {faultCodes.map((group) => (
            <article key={group.brand} className={`bg-white px-6 py-7 shadow-[0_18px_40px_rgba(10,10,10,0.06)] ${group.tilt}`}>
              <h3 className="font-display text-3xl font-light tracking-tight">{group.brand}</h3>
              <p className="mt-2 text-sm font-light text-[color:var(--muted)]">{group.how}</p>
              <dl className="mt-6">
                {group.codes.map((entry) => (
                  <div key={entry.code} className="grid grid-cols-[4.5rem_1fr] gap-3 border-t border-[color:var(--border)] py-3">
                    <dt className="font-display text-xl font-light tracking-tight text-[color:var(--accent)]">{entry.code}</dt>
                    <dd className="text-sm font-light leading-relaxed">{entry.meaning}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm font-light leading-relaxed text-[color:var(--muted)]">
          Zuordnung nach den Betriebsunterlagen der Hersteller für gängige Split-Baureihen. Ältere Geräte und Multi-Split
          können abweichen.
        </p>
      </div>
    </section>
  );
}

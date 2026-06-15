"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Privatkunde aus Wien",
    text: "Schnelle telefonische Einschätzung, klare Terminabstimmung und ehrliche Aussage, ob sich die Reparatur lohnt."
  },
  {
    name: "Hausverwaltung",
    text: "Für unsere Objekte zählt schnelle Kommunikation. Gerät, Fehlerbild und Priorität wurden sauber aufgenommen."
  },
  {
    name: "Gewerbekunde",
    text: "Unkomplizierte Abwicklung bei einem Geräteausfall im Büro. Besonders gut war die transparente Empfehlung."
  },
  {
    name: "Familie aus Niederösterreich",
    text: "Unsere Waschmaschine wurde schnell eingeschätzt. Wir wussten sofort, welche nächsten Schritte sinnvoll sind."
  },
  {
    name: "Vermieter",
    text: "Gute Kommunikation und klare Rückmeldung zum Zustand des Geräts. Genau das braucht man bei vermieteten Wohnungen."
  },
  {
    name: "Bürokunde",
    text: "Der Ausfall in der Teeküche wurde rasch aufgenommen. Die Abstimmung war einfach und professionell."
  }
];

const visibleCount = 3;

export default function ReviewsCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleReviews = Array.from({ length: visibleCount }, (_, index) => {
    return reviews[(startIndex + index) % reviews.length];
  });

  const showPrevious = () => {
    setStartIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const showNext = () => {
    setStartIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <div>
      <div className="grid gap-px bg-[color:var(--border)] md:grid-cols-3">
        {visibleReviews.map((review, index) => (
          <article
            key={`${review.name}-${review.text}-${index}`}
            className={`flex h-full flex-col justify-between bg-white p-8 lg:p-10 ${
              index > 0 ? "hidden md:flex" : ""
            }`}
          >
            <div>
              <span className="font-display text-3xl font-light leading-none text-[color:var(--accent)]">
                &ldquo;
              </span>
              <p className="font-display mt-4 text-[1.2rem] font-normal italic leading-snug tracking-tight text-[color:var(--ink)] sm:text-[1.35rem]">
                {review.text}
              </p>
            </div>
            <div className="mt-10 border-t border-[color:var(--border)] pt-5">
              <p className="tracking-eyebrow text-[color:var(--muted)]">Bewertung</p>
              <p className="mt-2 text-sm font-medium tracking-tight text-[color:var(--ink)]">
                {review.name}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-[color:var(--border)] pt-8">
        <p className="tracking-eyebrow text-[color:var(--muted)]">
          <span className="font-medium text-[color:var(--ink)]">
            {String(startIndex + 1).padStart(2, "0")}
          </span>
          <span className="px-2 text-[color:var(--border-strong)]">/</span>
          <span>{String(reviews.length).padStart(2, "0")}</span>
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            className="group grid h-12 w-12 place-items-center border border-[color:var(--border)] text-[color:var(--ink)] transition hover:border-[color:var(--ink)]"
            onClick={showPrevious}
            aria-label="Vorherige Bewertungen anzeigen"
          >
            <span className="transition group-hover:-translate-x-0.5">←</span>
          </button>
          <button
            type="button"
            className="group grid h-12 w-12 place-items-center border border-[color:var(--ink)] bg-[color:var(--ink)] text-white transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]"
            onClick={showNext}
            aria-label="Weitere Bewertungen anzeigen"
          >
            <span className="transition group-hover:translate-x-0.5">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

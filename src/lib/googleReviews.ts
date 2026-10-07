import { cache } from "react";
import { unstable_cache } from "next/cache";
import { siteConfig } from "../app/siteConfig";

/** Bewertungen stehen fest im Code. Der Wert hält die bestehende Cache-Signatur. */
export const GOOGLE_REVIEWS_REVALIDATE_SECONDS = 60 * 60;

export type Review = {
  name: string;
  text: string;
  rating?: number;
  relativeTime?: string;
  photoUrl?: string;
};

export type GoogleReviewsData = {
  rating: number;
  ratingDisplay: string;
  totalCount: number;
  reviews: Review[];
  source: "google" | "fallback";
};

/** Letzter bekannter Stand von Google — nur längere, gute Rezensionen, ähnlich lang. */
const fallbackReviews: Review[] = [
  {
    name: "Jonathan Schreiber",
    text: "Sehr zu empfehlen. Guter Service und vor allem sehr umfangreiche Beratung davor. Meine Reparatur wurde sachgemäß durchgeführt und alles läuft wieder. Hoffe nicht, dass bald wieder etwas kaputt ist - falls schon komme ich aber sicher wieder hier her!",
    rating: 5
  },
  {
    name: "Markus Hofmann",
    text: "Hatte eine dringende Reparatur und wurde von Anfang bis Ende hier top beraten. Wirklich umfangreiches Know-How und gute Arbeit bei der Ausführung. Funktioniert alles wieder wie gewohnt :) Die nächste Reparatur sicher wieder hier!",
    rating: 5
  },
  {
    name: "Edin Müller",
    text: "Kann mich den anderen Bewertungen anschließen - sehr gute Beratung und die Ausführung war mehr als zufriedenstellend. Immer wieder gerne - auch wenn ich hoffe, dass so schnell nichts mehr kaputt geht.",
    rating: 5
  },
  {
    name: "Michaela Boxberg",
    text: "Sehr freundlicher und kompetenter Monteur! Jedenfalls weiterzuempfehlen! Wenn wir wieder eine Reparatur eines Gerätes brauchen, rufen wir sicher wieder diese Firma an! Danke!",
    rating: 5
  }
];

export function getFallbackGoogleReviews(): GoogleReviewsData {
  return {
    rating: 4.6,
    ratingDisplay: "4,6",
    totalCount: 59,
    reviews: fallbackReviews,
    source: "fallback"
  };
}

async function loadGoogleReviews(): Promise<GoogleReviewsData> {
  return getFallbackGoogleReviews();
}

const getCachedGoogleReviews = unstable_cache(loadGoogleReviews, ["google-reviews"], {
  revalidate: GOOGLE_REVIEWS_REVALIDATE_SECONDS,
  tags: ["google-reviews"]
});

/** Dieselben gespeicherten Bewertungen für alle Aufrufe in einem Request. */
export const getGoogleReviews = cache(getCachedGoogleReviews);

export type GoogleRatingSummary = {
  rating: number;
  ratingDisplay: string;
  totalCount: number;
};

export function toGoogleRatingSummary(data: GoogleReviewsData): GoogleRatingSummary {
  return {
    rating: data.rating,
    ratingDisplay: data.ratingDisplay,
    totalCount: data.totalCount
  };
}

export function getGoogleReviewsUrl(): string {
  return siteConfig.googleReviewsUrl;
}

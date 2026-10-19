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
    name: "demim ajdini",
    text: "Von der Terminvereinbarung bis zur Reparatur hat alles perfekt geklappt. Sehr freundliches Team und top Arbeit. 100% Weiterempfehlung!",
    rating: 5
  },
  {
    name: "Jani Hofbauej",
    text: "Super und schnelle Hilfe in der Not. Freundliche, verständnisvolle Dame bei der telefonische Aufnahme. Monteur rasch, kompeten, alles gut und schnell behoben. Kann jetzt auch den Geräte-Retter-Bon einlösen. Hab mich gut aufgehoben und endlich nicht abgezockt gefühlt.DANKE! Kann ich empfehlen!",
    rating: 5
  },
  {
    name: "Jonathan Schreiber",
    text: "Sehr zu empfehlen. Guter Service und vor allem sehr umfangreiche Beratung davor. Meine Reparatur wurde sachgemäß durchgeführt und alles läuft wieder. Hoffe nicht, dass bald wieder etwas kaputt ist - falls schon komme ich aber sicher wieder hier her!",
    rating: 5
  },
  {
    name: "Markus Hofmann",
    text: "Hatte eine dringende Reparatur und wurde von Anfang bis Ende hier top beraten. Wirklich umfangreiches Know-How und gute Arbeit bei der Ausführung. Funktioniert alles wieder wie gewohnt :) Die nächste Reparatur sicher wieder hier!",
    rating: 5
  }
];

export function getFallbackGoogleReviews(): GoogleReviewsData {
  return {
    rating: 4.6,
    ratingDisplay: "4,6",
    totalCount: 92,
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

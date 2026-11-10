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
    name: "Amir Aliev",
    text: "Ich bin wirklich begeistert und positiv überrascht, was für eine tolle Firma das ist. Absolut empfehlenswert! Ein ganz großes Lob geht an den Techniker Antonio, der sehr hilfsbereit, freundlich und entgegenkommend war. Ebenso möchte ich dem Kundenservice ein großes Lob aussprechen. Vielen Dank für den hervorragenden Service! Weiter so!",
    rating: 5
  },
  {
    name: "Yasmina Yasmina",
    text: "Ich bin sehr zufrieden mit dem Reparaturservice! Da ich kleine Kinder zu Hause habe, war es für mich ein echter Notfall, als mein Geschirrspüler plötzlich nicht mehr funktioniert hat. Ich habe noch am selben Tag einen Termin bekommen, und Service war schnell vor Ort. Das Problem wurde sofort behoben und mein Geschirrspüler funktioniert wieder einwandfrei. Vielen herzlichen Dank für die schnelle, zuverlässige und unkomplizierte Hilfe! Ich kann den Reparaturservice auf jeden Fall weiterempfehlen",
    rating: 5
  },
  {
    name: "Malik_1210",
    text: "Der Geschirrspüler wurde schnell und fachgerecht repariert. Der Preis war wirklich super und alles funktioniert wieder einwandfrei. Ich bin sehr zufrieden mit dem Service und kann ihn auf jeden Fall weiterempfehlen. Vielen Dank!",
    rating: 5
  }
];

export function getFallbackGoogleReviews(): GoogleReviewsData {
  return {
    rating: 4.6,
    ratingDisplay: "4,6",
    totalCount: 132,
    reviews: fallbackReviews,
    source: "fallback"
  };
}

async function loadGoogleReviews(): Promise<GoogleReviewsData> {
  return getFallbackGoogleReviews();
}

const getCachedGoogleReviews = unstable_cache(loadGoogleReviews, ["google-reviews-v2"], {
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

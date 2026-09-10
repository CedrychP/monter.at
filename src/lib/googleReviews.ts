import { cache } from "react";
import { unstable_cache } from "next/cache";
import { siteConfig } from "../app/siteConfig";

/** Google-Werte höchstens stündlich neu laden — reicht für Sterne und Anzahl. */
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

const MIN_GOOD_RATING = 4;
const MIN_REVIEW_CHARS = 120;
const MAX_REVIEWS = 6;
const LENGTH_BAND = 0.28;

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

function formatRating(rating: number): string {
  return rating.toFixed(1).replace(".", ",");
}

function fallbackData(): GoogleReviewsData {
  return {
    rating: 4.6,
    ratingDisplay: "4,6",
    totalCount: 59,
    reviews: fallbackReviews,
    source: "fallback"
  };
}

type LocalizedText = {
  text?: string;
  languageCode?: string;
};

type GooglePlaceReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: LocalizedText;
  originalText?: LocalizedText;
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
};

type GooglePlaceResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: GooglePlaceReview[];
};

function normalizeReviewText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function pickReviewText(review: GooglePlaceReview): string {
  const original = normalizeReviewText(review.originalText?.text ?? "");
  const translated = normalizeReviewText(review.text?.text ?? "");

  if (review.originalText?.languageCode === "de" && original) return original;
  if (review.text?.languageCode === "de" && translated) return translated;
  return original || translated;
}

function pickEvenLengthReviews(reviews: Review[]): Review[] {
  const good = reviews.filter(
    (review) => (review.rating ?? 0) >= MIN_GOOD_RATING && review.text.length >= MIN_REVIEW_CHARS
  );

  if (good.length <= MAX_REVIEWS) {
    return [...good].sort((a, b) => b.text.length - a.text.length);
  }

  const byLength = [...good].sort((a, b) => a.text.length - b.text.length);
  const median = byLength[Math.floor(byLength.length / 2)]?.text.length ?? MIN_REVIEW_CHARS;
  const minLen = median * (1 - LENGTH_BAND);
  const maxLen = median * (1 + LENGTH_BAND);
  const clustered = good.filter((review) => review.text.length >= minLen && review.text.length <= maxLen);
  const pool = clustered.length >= 3 ? clustered : good;

  return [...pool]
    .sort((a, b) => Math.abs(a.text.length - median) - Math.abs(b.text.length - median))
    .slice(0, MAX_REVIEWS)
    .sort((a, b) => b.text.length - a.text.length);
}

async function loadGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackData();
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=de`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "rating,userRatingCount,reviews.rating,reviews.text,reviews.originalText,reviews.relativePublishTimeDescription,reviews.authorAttribution"
        },
        cache: "no-store"
      }
    );

    if (!response.ok) {
      console.error("Google Places API error:", response.status, await response.text());
      return fallbackData();
    }

    const data = (await response.json()) as GooglePlaceResponse;
    const apiReviews = pickEvenLengthReviews(
      (data.reviews ?? []).map((review) => ({
        name: review.authorAttribution?.displayName?.trim() || "Google-Nutzer:in",
        text: pickReviewText(review),
        rating: typeof review.rating === "number" ? review.rating : 5,
        relativeTime: review.relativePublishTimeDescription,
        photoUrl: review.authorAttribution?.photoUri
      }))
    );

    const rating = typeof data.rating === "number" ? data.rating : fallbackData().rating;

    return {
      rating,
      ratingDisplay: formatRating(rating),
      totalCount: data.userRatingCount ?? fallbackData().totalCount,
      reviews: apiReviews.length > 0 ? apiReviews : fallbackData().reviews,
      source: "google"
    };
  } catch (error) {
    console.error("Failed to fetch Google reviews", error);
    return fallbackData();
  }
}

const getCachedGoogleReviews = unstable_cache(loadGoogleReviews, ["google-reviews"], {
  revalidate: GOOGLE_REVIEWS_REVALIDATE_SECONDS,
  tags: ["google-reviews"]
});

/** Dedupliziert pro Request, dazwischen stündlich von Google neu. */
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

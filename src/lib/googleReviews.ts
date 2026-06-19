import { siteConfig } from "../app/siteConfig";

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

const fallbackReviews: Review[] = [
  {
    name: "Privatkunde aus Wien",
    text: "Schnelle telefonische Einschätzung, klare Terminabstimmung und ehrliche Aussage, ob sich die Reparatur lohnt.",
    rating: 5
  },
  {
    name: "Hausverwaltung",
    text: "Für unsere Objekte zählt schnelle Kommunikation. Gerät, Fehlerbild und Priorität wurden sauber aufgenommen.",
    rating: 5
  },
  {
    name: "Gewerbekunde",
    text: "Unkomplizierte Abwicklung bei einem Geräteausfall im Büro. Besonders gut war die transparente Empfehlung.",
    rating: 5
  },
  {
    name: "Familie aus Niederösterreich",
    text: "Unsere Waschmaschine wurde schnell eingeschätzt. Wir wussten sofort, welche nächsten Schritte sinnvoll sind.",
    rating: 5
  },
  {
    name: "Vermieter",
    text: "Gute Kommunikation und klare Rückmeldung zum Zustand des Geräts. Genau das braucht man bei vermieteten Wohnungen.",
    rating: 5
  },
  {
    name: "Bürokunde",
    text: "Der Ausfall in der Teeküche wurde rasch aufgenommen. Die Abstimmung war einfach und professionell.",
    rating: 5
  }
];

function formatRating(rating: number): string {
  return rating.toFixed(1).replace(".", ",");
}

function fallbackData(): GoogleReviewsData {
  return {
    rating: 4.9,
    ratingDisplay: "4,9",
    totalCount: 0,
    reviews: fallbackReviews,
    source: "fallback"
  };
}

type GooglePlaceReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
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

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackData();
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "rating,userRatingCount,reviews.rating,reviews.text,reviews.relativePublishTimeDescription,reviews.authorAttribution"
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      console.error("Google Places API error:", response.status, await response.text());
      return fallbackData();
    }

    const data = (await response.json()) as GooglePlaceResponse;
    const apiReviews = (data.reviews ?? [])
      .map((review) => ({
        name: review.authorAttribution?.displayName?.trim() || "Google-Nutzer:in",
        text: review.text?.text?.trim() || "",
        rating: typeof review.rating === "number" ? review.rating : 5,
        relativeTime: review.relativePublishTimeDescription,
        photoUrl: review.authorAttribution?.photoUri
      }))
      .filter((review) => review.text.length > 0);

    if (apiReviews.length === 0) {
      return fallbackData();
    }

    const rating = data.rating ?? 4.9;

    return {
      rating,
      ratingDisplay: formatRating(rating),
      totalCount: data.userRatingCount ?? apiReviews.length,
      reviews: apiReviews,
      source: "google"
    };
  } catch (error) {
    console.error("Failed to fetch Google reviews", error);
    return fallbackData();
  }
}

export function getGoogleReviewsUrl(): string {
  return siteConfig.googleReviewsUrl;
}

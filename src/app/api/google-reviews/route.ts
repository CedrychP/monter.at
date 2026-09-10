import { NextResponse } from "next/server";
import {
  GOOGLE_REVIEWS_REVALIDATE_SECONDS,
  getGoogleReviews,
  toGoogleRatingSummary
} from "../../../lib/googleReviews";

export const revalidate = GOOGLE_REVIEWS_REVALIDATE_SECONDS;

export async function GET() {
  const data = await getGoogleReviews();

  return NextResponse.json(toGoogleRatingSummary(data), {
    headers: {
      "Cache-Control": `public, s-maxage=${GOOGLE_REVIEWS_REVALIDATE_SECONDS}, stale-while-revalidate=86400`
    }
  });
}

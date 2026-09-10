import ReviewsCarousel from "./ReviewsCarousel";
import {
  GoogleRatingBadge,
  GoogleReviewsCountLink
} from "./GoogleRatingLive";
import { getGoogleReviews, getGoogleReviewsUrl, toGoogleRatingSummary } from "../lib/googleReviews";

export default async function ReviewsSection() {
  const data = await getGoogleReviews();
  const googleUrl = getGoogleReviewsUrl();
  const summary = toGoogleRatingSummary(data);

  return (
    <section id="bewertungen" className="border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="cap-line tracking-eyebrow">Bewertungen</p>
            <h2 className="font-display mt-6 text-balance text-3xl font-normal leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
              Vertrauen entsteht durch klare Arbeit.
            </h2>
          </div>

          <GoogleRatingBadge initial={summary} href={googleUrl} />
        </div>

        <div className="reveal mt-8 sm:mt-10">
          <ReviewsCarousel reviews={data.reviews} />
        </div>

        <div className="reveal mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8">
          <GoogleReviewsCountLink initial={summary} href={googleUrl} />
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow text-sm text-[color:var(--muted)]"
          >
            Bewertung schreiben
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

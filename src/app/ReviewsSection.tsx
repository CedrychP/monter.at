import Link from "next/link";
import ReviewsCarousel from "./ReviewsCarousel";
import { getGoogleReviews, getGoogleReviewsUrl } from "../lib/googleReviews";

function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="16"
      height="16"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function StarRow({ size = 14 }: { size?: number }) {
  return (
    <span className="flex items-center gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6L12 3Z" />
        </svg>
      ))}
    </span>
  );
}

export default async function ReviewsSection() {
  const data = await getGoogleReviews();
  const googleUrl = getGoogleReviewsUrl();

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

          <Link
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-3.5 rounded-sm border border-[color:var(--border)] bg-white px-5 py-3 transition hover:border-[color:var(--ink)]"
          >
            {data.source === "google" ? (
              <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-[color:var(--bg-muted)]">
                <GoogleMark />
              </span>
            ) : null}
            <span className="text-left">
              <span className="flex items-center gap-2.5">
                <span className="font-display text-2xl font-normal tracking-tight text-[color:var(--ink)] sm:text-3xl">
                  {data.ratingDisplay}
                </span>
                <StarRow />
              </span>
              <span className="mt-0.5 block text-xs font-light text-[color:var(--muted)]">
                {data.totalCount > 0
                  ? `${data.totalCount} Bewertungen auf Google`
                  : "Weiterempfehlung unserer Kund:innen"}
              </span>
            </span>
          </Link>
        </div>

        <div className="reveal mt-8 sm:mt-10">
          <ReviewsCarousel reviews={data.reviews} source={data.source} />
        </div>

        <div className="reveal mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8">
          <Link
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow text-sm"
          >
            {data.totalCount > 0
              ? `Alle ${data.totalCount} Bewertungen ansehen`
              : "Google-Profil ansehen"}
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
          </Link>
          <Link
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow text-sm text-[color:var(--muted)]"
          >
            Bewertung schreiben
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

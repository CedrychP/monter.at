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

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} width="16" height="16" viewBox="0 0 24 24" className="text-amber-400">
          <path
            fill="currentColor"
            d="M12 3l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6L12 3Z"
          />
        </svg>
      ))}
    </div>
  );
}

function RatingSummary({
  ratingDisplay,
  totalCount,
  source
}: {
  ratingDisplay: string;
  totalCount: number;
  source: "google" | "fallback";
}) {
  return (
    <div className="w-full max-w-[20rem] shrink-0 rounded-sm border border-[color:var(--border)] bg-white p-5 shadow-[0_18px_40px_-28px_rgba(10,10,10,0.35)] sm:p-6 lg:ml-auto">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {source === "google" ? <GoogleMark /> : null}
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[color:var(--muted)]">
            {source === "google" ? "Google" : "Kund:innen"}
          </span>
        </div>
        <StarRow />
      </div>

      <div className="mt-5 flex items-end gap-3">
        <p className="font-display text-[3.25rem] font-normal leading-none tracking-tight text-[color:var(--accent)] sm:text-[3.75rem]">
          {ratingDisplay}
        </p>
        <div className="pb-1">
          <p className="text-sm font-medium text-[color:var(--ink)]">von 5</p>
          <p className="mt-0.5 text-xs font-light leading-relaxed text-[color:var(--muted)]">
            Durchschnitt
          </p>
        </div>
      </div>

      <p className="mt-5 border-t border-[color:var(--border)] pt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]">
        {totalCount > 0 ? (
          <>
            <span className="font-medium text-[color:var(--ink)]">{totalCount}</span>
            {" Bewertungen auf Google"}
          </>
        ) : (
          "Weiterempfehlung unserer Kund:innen"
        )}
      </p>
    </div>
  );
}

export default async function ReviewsSection() {
  const data = await getGoogleReviews();
  const googleUrl = getGoogleReviewsUrl();

  return (
    <section id="bewertungen" className="border-y border-[color:var(--border)] bg-[color:var(--bg-muted)] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="reveal flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-2xl flex-1">
            <p className="cap-line tracking-eyebrow">Bewertungen</p>
            <h2 className="font-display mt-6 text-balance text-3xl font-normal leading-[1.05] tracking-tight sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
              Vertrauen entsteht durch klare Arbeit.
            </h2>
            <p className="mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-[color:var(--muted)]">
              {data.source === "google"
                ? "Echte Rückmeldungen von Kund:innen — direkt aus unserem Google-Profil."
                : "Was unsere Kund:innen an Reparatur, Service und Beratung schätzen."}
            </p>
          </div>

          <RatingSummary
            ratingDisplay={data.ratingDisplay}
            totalCount={data.totalCount}
            source={data.source}
          />
        </div>

        <div className="mt-10 sm:mt-16">
          <ReviewsCarousel reviews={data.reviews} source={data.source} />
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 border-t border-[color:var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-2.5 text-sm font-medium text-[color:var(--ink)] transition hover:text-[color:var(--accent)]"
          >
            <GoogleMark />
            {data.totalCount > 0
              ? `Alle ${data.totalCount} Bewertungen auf Google ansehen`
              : "Unser Google-Profil ansehen"}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M1 8h13M9 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow text-sm"
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

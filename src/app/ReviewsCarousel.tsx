"use client";

import { useState } from "react";
import type { Review } from "../lib/googleReviews";

type ReviewsCarouselProps = {
  reviews: Review[];
  source: "google" | "fallback";
};

const visibleCount = 3;

function formatReviewRating(rating: number): string {
  return Number.isInteger(rating) ? String(rating) : rating.toFixed(1).replace(".", ",");
}

function StarRating({ rating }: { rating: number }) {
  const filled = Math.round(rating);

  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          className={index < filled ? "text-amber-400" : "text-[color:var(--border-strong)]"}
        >
          <path
            fill="currentColor"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-2.5"
      aria-label={`${formatReviewRating(rating)} von 5 Sternen`}
    >
      <div className="flex items-baseline gap-0.5">
        <span className="font-display text-2xl font-normal leading-none tracking-tight text-[color:var(--accent)]">
          {formatReviewRating(rating)}
        </span>
        <span className="text-xs font-light text-[color:var(--muted)]">/5</span>
      </div>
      <StarRating rating={rating} />
    </div>
  );
}

function ReviewCard({
  review,
  source,
  className = ""
}: {
  review: Review;
  source: "google" | "fallback";
  className?: string;
}) {
  const rating = review.rating ?? 5;

  return (
    <article className={`flex h-full flex-col justify-between bg-white p-6 sm:p-8 lg:p-10 ${className}`}>
      <div>
        <div className="flex items-start justify-between gap-3">
          <span className="font-display text-3xl font-light leading-none text-[color:var(--accent)]">
            &ldquo;
          </span>
          <ReviewRating rating={rating} />
        </div>
        <p className="font-display mt-4 text-[1.05rem] font-normal italic leading-snug tracking-tight text-[color:var(--ink)] sm:text-[1.2rem] lg:text-[1.35rem]">
          {review.text}
        </p>
      </div>
      <div className="mt-8 border-t border-[color:var(--border)] pt-5 sm:mt-10">
        <p className="tracking-eyebrow text-[color:var(--muted)]">
          {source === "google" ? "Google-Bewertung" : "Bewertung"}
        </p>
        <div className="mt-2 flex items-center gap-3">
          {review.photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={review.photoUrl}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
          ) : null}
          <div className="min-w-0">
            <p className="truncate text-sm font-medium tracking-tight text-[color:var(--ink)]">
              {review.name}
            </p>
            {review.relativeTime ? (
              <p className="text-xs font-light text-[color:var(--muted)]">{review.relativeTime}</p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReviewsCarousel({ reviews, source }: ReviewsCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);

  if (reviews.length === 0) {
    return null;
  }

  const visibleReviews = Array.from({ length: Math.min(visibleCount, reviews.length) }, (_, index) => {
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
      {/* Mobile & Tablet: horizontal swipe */}
      <div className="md:hidden -mx-5 px-5 sm:-mx-8 sm:px-8">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reviews.map((review) => (
            <ReviewCard
              key={`${review.name}-${review.text.slice(0, 24)}-mobile`}
              review={review}
              source={source}
              className="w-[min(88vw,22rem)] flex-none snap-center border border-[color:var(--border)]"
            />
          ))}
        </div>
        <p className="mt-4 text-center text-xs font-light text-[color:var(--muted)]">
          Wischen für weitere Bewertungen
        </p>
      </div>

      {/* Desktop: 3-up grid with navigation */}
      <div className="hidden md:block">
        <div className="grid gap-px bg-[color:var(--border)] md:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${review.text.slice(0, 24)}-${index}`}
              review={review}
              source={source}
            />
          ))}
        </div>

        {reviews.length > 1 ? (
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
        ) : null}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import type { Review } from "../lib/googleReviews";

type ReviewsCarouselProps = {
  reviews: Review[];
  source: "google" | "fallback";
};

const visibleCount = 3;

function StarRating({ rating, size = 12 }: { rating: number; size?: number }) {
  const filled = Math.round(rating);

  return (
    <span
      className="flex items-center gap-px text-amber-400"
      aria-label={`${filled} von 5 Sternen`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={index < filled ? "text-amber-400" : "text-[color:var(--border-strong)]"}
        >
          <path
            fill="currentColor"
            d="M12 3l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6L12 3Z"
          />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({
  review,
  className = ""
}: {
  review: Review;
  source: "google" | "fallback";
  className?: string;
}) {
  const rating = review.rating ?? 5;

  return (
    <article className={`flex h-full flex-col bg-white p-5 sm:p-6 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <StarRating rating={rating} />
        <span className="text-xs font-medium tabular-nums tracking-tight text-[color:var(--muted)]">
          {rating}/5
        </span>
      </div>

      <p className="mt-3.5 line-clamp-5 text-sm font-normal leading-relaxed text-[color:var(--ink)] sm:line-clamp-6 sm:text-[0.95rem]">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="mt-auto flex items-center gap-2.5 border-t border-[color:var(--border)] pt-4">
        {review.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.photoUrl}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 flex-none rounded-full object-cover"
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
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reviews.map((review) => (
            <ReviewCard
              key={`${review.name}-${review.text.slice(0, 24)}-mobile`}
              review={review}
              source={source}
              className="w-[min(82vw,20rem)] flex-none snap-center border border-[color:var(--border)]"
            />
          ))}
        </div>
        <p className="mt-3 text-center text-xs font-light text-[color:var(--muted)]">
          Wischen für weitere Bewertungen
        </p>
      </div>

      {/* Desktop: 3-up grid with navigation */}
      <div className="hidden md:block">
        <div className="grid gap-px overflow-hidden rounded-sm bg-[color:var(--border)] md:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${review.text.slice(0, 24)}-${index}`}
              review={review}
              source={source}
            />
          ))}
        </div>

        {reviews.length > visibleCount ? (
          <div className="mt-6 flex items-center justify-between border-t border-[color:var(--border)] pt-5">
            <p className="tracking-eyebrow text-[color:var(--muted)]">
              <span className="font-medium text-[color:var(--ink)]">
                {String(startIndex + 1).padStart(2, "0")}
              </span>
              <span className="px-2 text-[color:var(--border-strong)]">/</span>
              <span>{String(reviews.length).padStart(2, "0")}</span>
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                className="group grid h-10 w-10 place-items-center border border-[color:var(--border)] text-[color:var(--ink)] transition hover:border-[color:var(--ink)]"
                onClick={showPrevious}
                aria-label="Vorherige Bewertungen anzeigen"
              >
                <span className="transition group-hover:-translate-x-0.5">←</span>
              </button>
              <button
                type="button"
                className="group grid h-10 w-10 place-items-center border border-[color:var(--ink)] bg-[color:var(--ink)] text-white transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]"
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

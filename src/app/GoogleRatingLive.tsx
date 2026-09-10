"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import type { GoogleRatingSummary } from "../lib/googleReviews";

function isRatingSummary(value: unknown): value is GoogleRatingSummary {
  if (!value || typeof value !== "object") return false;
  const candidate = value as GoogleRatingSummary;
  return (
    typeof candidate.rating === "number" &&
    Number.isFinite(candidate.rating) &&
    typeof candidate.ratingDisplay === "string" &&
    typeof candidate.totalCount === "number" &&
    Number.isFinite(candidate.totalCount)
  );
}

let inflight: Promise<GoogleRatingSummary | null> | null = null;

function fetchLiveRating(): Promise<GoogleRatingSummary | null> {
  if (!inflight) {
    inflight = fetch("/api/google-reviews")
      .then((response) => (response.ok ? response.json() : null))
      .then((json) => (isRatingSummary(json) ? json : null))
      .catch(() => null)
      .finally(() => {
        window.setTimeout(() => {
          inflight = null;
        }, 60_000);
      });
  }

  return inflight;
}

function useLiveGoogleRating(initial: GoogleRatingSummary): GoogleRatingSummary {
  const [data, setData] = useState(initial);

  useEffect(() => {
    let cancelled = false;

    fetchLiveRating().then((live) => {
      if (!cancelled && live) setData(live);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return data;
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
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

type LiveRatingProps = {
  initial: GoogleRatingSummary;
  href: string;
};

export function GoogleRatingBadge({ initial, href }: LiveRatingProps) {
  const data = useLiveGoogleRating(initial);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit shrink-0 items-center gap-3.5 rounded-sm border border-[color:var(--border)] bg-white px-5 py-3 transition hover:border-[color:var(--ink)]"
    >
      <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-[color:var(--bg-muted)]">
        <GoogleMark />
      </span>
      <span className="text-left">
        <span className="flex items-center gap-2.5">
          <span className="font-display text-2xl font-normal tracking-tight text-[color:var(--ink)] sm:text-3xl">
            {data.ratingDisplay}
          </span>
          <StarRating rating={data.rating} size={14} />
        </span>
        <span className="mt-0.5 block text-xs font-light text-[color:var(--muted)]">
          {data.totalCount > 0
            ? `${data.totalCount} Bewertungen auf Google`
            : "Bewertungen auf Google"}
        </span>
      </span>
    </Link>
  );
}

export function GoogleRatingStat({ initial, href }: LiveRatingProps) {
  const data = useLiveGoogleRating(initial);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex flex-col"
    >
      <span className="flex items-center gap-2.5">
        <span className="font-display text-3xl font-normal tracking-tight text-[color:var(--ink)] sm:text-4xl">
          {data.ratingDisplay}
        </span>
        <StarRating rating={data.rating} size={16} />
      </span>
      <span className="mt-1 text-sm font-normal text-[color:var(--muted)] transition group-hover:text-[color:var(--ink)]">
        Bewertung auf Google
      </span>
    </Link>
  );
}

export function GoogleRatingPlain({ initial }: { initial: GoogleRatingSummary }) {
  const data = useLiveGoogleRating(initial);

  return <span>{data.ratingDisplay} / 5</span>;
}

export function GoogleReviewsCountLink({ initial, href }: LiveRatingProps) {
  const data = useLiveGoogleRating(initial);

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="link-arrow text-sm">
      {data.totalCount > 0
        ? `Alle ${data.totalCount} Bewertungen ansehen`
        : "Google-Profil ansehen"}
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    </Link>
  );
}

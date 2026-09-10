type StarRatingProps = {
  rating: number;
  size?: number;
  className?: string;
};

function clampRating(rating: number): number {
  if (!Number.isFinite(rating)) return 0;
  return Math.min(5, Math.max(0, rating));
}

export function formatStarLabel(rating: number): string {
  return `${clampRating(rating).toFixed(1).replace(".", ",")} von 5 Sternen`;
}

/** Füllt Sterne anteilig — 4,6 zeigt vier volle Sterne und den fünften zu 60 %. */
export default function StarRating({ rating, size = 14, className = "" }: StarRatingProps) {
  const safe = clampRating(rating);

  return (
    <span
      className={`inline-flex items-center gap-px ${className}`}
      aria-label={formatStarLabel(safe)}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.min(1, Math.max(0, safe - index));

        return (
          <span
            key={index}
            className="relative inline-flex shrink-0"
            style={{ width: size, height: size }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-[color:var(--border-strong)]"
            >
              <path
                fill="currentColor"
                d="M12 3l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6L12 3Z"
              />
            </svg>
            {fill > 0 ? (
              <span
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <svg
                  width={size}
                  height={size}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="text-amber-400"
                >
                  <path
                    fill="currentColor"
                    d="M12 3l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6L12 3Z"
                  />
                </svg>
              </span>
            ) : null}
          </span>
        );
      })}
    </span>
  );
}

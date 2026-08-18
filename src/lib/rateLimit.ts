/**
 * Einfacher In-Memory-Limiter für die Formular-Routen.
 *
 * Einschränkung: Der Zähler lebt im Prozessspeicher. Bei mehreren Serverless-
 * Instanzen begrenzt er also pro Instanz, nicht global. Für den Zweck — das
 * Zuschütten des Postfachs durch einfache Bots verhindern — genügt das; wer ein
 * belastbares globales Limit braucht, muss auf einen externen Store (Redis,
 * Upstash, Vercel KV) wechseln.
 */

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

const DEFAULT_LIMIT = 5;
const DEFAULT_WINDOW_MS = 10 * 60 * 1000;

/** Verhindert unbegrenztes Wachstum der Map bei vielen unterschiedlichen IPs. */
const MAX_BUCKETS = 5000;

function pruneExpired(now: number) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) {
      buckets.delete(key);
    }
  }
}

/**
 * Liest die Client-IP aus den Proxy-Headern. Fällt auf "unknown" zurück — dann
 * teilen sich alle anonymen Anfragen ein Budget, was in der Praxis nur bei
 * lokaler Entwicklung vorkommt.
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export type RateLimitResult = {
  allowed: boolean;
  /** Sekunden bis zum Zurücksetzen — für den Retry-After-Header. */
  retryAfterSeconds: number;
};

export function checkRateLimit(
  key: string,
  { limit = DEFAULT_LIMIT, windowMs = DEFAULT_WINDOW_MS } = {}
): RateLimitResult {
  const now = Date.now();

  if (buckets.size > MAX_BUCKETS) {
    pruneExpired(now);
  }

  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  existing.count += 1;

  if (existing.count > limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000))
    };
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

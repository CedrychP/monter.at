const PRODUCES = ["text/html", "text/markdown"] as const;

export type ProducedType = (typeof PRODUCES)[number];

type AcceptEntry = { type: string; q: number; specificity: number };

export function parseAccept(header: string): AcceptEntry[] {
  return header.split(",").flatMap((raw) => {
    const parts = raw
      .trim()
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean);
    const type = parts[0]?.toLowerCase();
    if (!type) return [];

    let q = 1;
    for (const param of parts.slice(1)) {
      const [name, value] = param.split("=").map((part) => part.trim());
      if (name === "q") {
        const parsed = Number(value);
        if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
      }
    }

    const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
    return [{ type, q, specificity }];
  });
}

function matches(entry: AcceptEntry, candidate: string) {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*")) return candidate.startsWith(entry.type.slice(0, -1));
  return entry.type === candidate;
}

/** Höchste passende Darstellung. Ohne Accept-Header bleibt HTML die Voreinstellung. */
export function preferredType(header: string | null): ProducedType | null {
  if (!header?.trim()) return "text/html";

  const entries = parseAccept(header);
  if (entries.length === 0) return "text/html";

  let bestType: ProducedType | null = null;
  let bestQ = -1;
  let bestPosition = Infinity;

  for (const candidate of PRODUCES) {
    let matched: AcceptEntry | null = null;
    let matchedPosition = Infinity;

    for (let index = 0; index < entries.length; index += 1) {
      const entry = entries[index];
      if (!matches(entry, candidate)) continue;
      if (
        matched === null ||
        entry.specificity > matched.specificity ||
        (entry.specificity === matched.specificity && index < matchedPosition)
      ) {
        matched = entry;
        matchedPosition = index;
      }
    }

    if (!matched || matched.q <= 0) continue;

    if (matched.q > bestQ || (matched.q === bestQ && matchedPosition < bestPosition)) {
      bestQ = matched.q;
      bestPosition = matchedPosition;
      bestType = candidate;
    }
  }

  return bestType;
}

export const MARKDOWN_CONTENT_TYPE = "text/markdown; charset=utf-8";

export function markdownHeaders(status: 200 | 404) {
  const headers = new Headers({
    "Content-Type": MARKDOWN_CONTENT_TYPE,
    Vary: "Accept",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Frame-Options": "SAMEORIGIN",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Cache-Control": status === 200 ? "public, max-age=300" : "no-store"
  });

  if (status === 404) headers.set("X-Robots-Tag", "noindex");
  return headers;
}

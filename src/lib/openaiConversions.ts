import { createHash } from "node:crypto";
import { OPENAI_PIXEL_ID } from "../app/openaiAds";
import { siteConfig } from "../app/siteConfig";

const OPENAI_EVENTS_URL = `https://bzr.openai.com/v1/events?pid=${OPENAI_PIXEL_ID}`;

export type OpenAiConversionInput = {
  eventId: string;
  eventType: "appointment_scheduled" | "page_viewed";
  sourceUrl: string;
  timestampMs: number;
  oppref?: string;
  obref?: string;
  email?: string;
  phone?: string;
  ipAddress?: string;
  userAgent?: string;
};

const EVENT_DATA_TYPE = {
  appointment_scheduled: "customer_action",
  page_viewed: "contents"
} as const;

function sha256Hex(value: string): string {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

function hashEmail(value: string): string | undefined {
  const normalized = value.trim().toLowerCase();
  if (!normalized || !normalized.includes("@")) return undefined;
  return sha256Hex(normalized);
}

function hashPhone(value: string): string | undefined {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  digits = digits.replace(/^0+/, "");
  if (digits.length < 8 || digits.length > 15) return undefined;
  return sha256Hex(digits);
}

export function isAllowedSourceUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return false;

    const host = parsed.hostname.toLowerCase();
    const siteHost = new URL(siteConfig.siteUrl).hostname.toLowerCase();

    return (
      host === siteHost ||
      host === "localhost" ||
      host === "127.0.0.1" ||
      host.endsWith(".monter.at") ||
      host.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
}

export async function sendOpenAiEvent(input: OpenAiConversionInput): Promise<void> {
  const apiKey = process.env.OPENAI_CONVERSIONS_API_KEY?.trim();
  if (!apiKey) return;

  const emails = input.email ? hashEmail(input.email) : undefined;
  const phones = input.phone ? hashPhone(input.phone) : undefined;

  const user: Record<string, unknown> = {
    countries: ["AT"]
  };

  if (input.obref) user.obref = input.obref;
  if (emails) user.emails_sha256 = [emails];
  if (phones) user.phone_numbers_sha256 = [phones];
  if (input.ipAddress && input.ipAddress !== "unknown") user.ip_address = input.ipAddress;
  if (input.userAgent) user.user_agent = input.userAgent;

  const event: Record<string, unknown> = {
    id: input.eventId,
    type: input.eventType,
    timestamp_ms: input.timestampMs,
    source_url: input.sourceUrl,
    action_source: "web",
    data: {
      type: EVENT_DATA_TYPE[input.eventType]
    },
    user
  };

  if (input.oppref) event.oppref = input.oppref;

  const response = await fetch(OPENAI_EVENTS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      validate_only: false,
      events: [event]
    })
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`OpenAI CAPI ${response.status}${detail ? `: ${detail.slice(0, 200)}` : ""}`);
  }
}

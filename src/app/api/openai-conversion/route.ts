import { NextResponse } from "next/server";
import { isAllowedSourceUrl, sendOpenAiEvent } from "../../../lib/openaiConversions";
import { checkRateLimit, getClientIp } from "../../../lib/rateLimit";

const EVENT_TYPES = ["appointment_scheduled", "page_viewed"] as const;
type EventType = (typeof EVENT_TYPES)[number];

type ConversionPayload = {
  event_id?: unknown;
  type?: unknown;
  source_url?: unknown;
  oppref?: unknown;
  obref?: unknown;
  email?: unknown;
  phone?: unknown;
};

const asShortText = (value: unknown, max = 512) => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
};

function parseEventType(value: unknown): EventType | null {
  return EVENT_TYPES.find((type) => type === value) ?? null;
}

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(`openai-capi:${getClientIp(request)}`, {
    limit: 80,
    windowMs: 10 * 60 * 1000
  });

  if (!rateLimit.allowed) {
    return new NextResponse(null, { status: 204 });
  }

  if (!process.env.OPENAI_CONVERSIONS_API_KEY?.trim()) {
    return new NextResponse(null, { status: 204 });
  }

  let payload: ConversionPayload;
  try {
    payload = (await request.json()) as ConversionPayload;
  } catch {
    return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
  }

  const eventId = asShortText(payload.event_id, 128);
  const sourceUrl = asShortText(payload.source_url, 2000);
  const eventType = parseEventType(payload.type);
  if (!eventId || !eventType || !isAllowedSourceUrl(sourceUrl)) {
    return NextResponse.json({ message: "Invalid event" }, { status: 400 });
  }

  try {
    await sendOpenAiEvent({
      eventId,
      eventType,
      sourceUrl,
      timestampMs: Date.now(),
      oppref: asShortText(payload.oppref, 512) || undefined,
      obref: asShortText(payload.obref, 128) || undefined,
      email: asShortText(payload.email, 320) || undefined,
      phone: asShortText(payload.phone, 32) || undefined,
      ipAddress: getClientIp(request),
      userAgent: request.headers.get("user-agent")?.slice(0, 512) || undefined
    });
  } catch (error) {
    console.error(
      "OpenAI Conversions API failed",
      error instanceof Error ? error.message : "unknown error"
    );
  }

  return new NextResponse(null, { status: 204 });
}

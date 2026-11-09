import { NextResponse, type NextRequest } from "next/server";
import {
  AD_PHONE_COOKIE,
  AD_PHONE_COOKIE_MAX_AGE,
  detectAdSource,
  parseAdSource,
  type AdPhoneSource
} from "./app/adPhone";
import { OPPREF_COOKIE } from "./app/openaiAds";
import { markdownHeaders } from "./lib/contentNegotiation";
import { negotiateAgentRequest } from "./lib/negotiateAgentRequest";

function persistSource(response: NextResponse, source: AdPhoneSource) {
  response.cookies.set({
    name: AD_PHONE_COOKIE,
    value: source,
    path: "/",
    maxAge: AD_PHONE_COOKIE_MAX_AGE,
    sameSite: "lax"
  });
}

function persistOppref(response: NextResponse, oppref: string) {
  response.cookies.set({
    name: OPPREF_COOKIE,
    value: oppref,
    path: "/",
    maxAge: AD_PHONE_COOKIE_MAX_AGE,
    sameSite: "lax"
  });
}

function withTracking(
  response: NextResponse,
  source: AdPhoneSource | null,
  oppref: string,
  shouldSetSource: boolean,
  shouldSetOppref: boolean
) {
  if (shouldSetSource && source) persistSource(response, source);
  if (shouldSetOppref) persistOppref(response, oppref);
  return response;
}

export function proxy(request: NextRequest) {
  const oppref = request.nextUrl.searchParams.get("oppref")?.trim() ?? "";
  const detected = detectAdSource({
    searchParams: request.nextUrl.searchParams
  });
  const existing = parseAdSource(request.cookies.get(AD_PHONE_COOKIE)?.value);
  const existingOppref = request.cookies.get(OPPREF_COOKIE)?.value ?? "";

  const shouldSetSource = Boolean(detected && detected !== existing);
  const shouldSetOppref = Boolean(oppref && oppref !== existingOppref);

  const decision = negotiateAgentRequest({
    pathname: request.nextUrl.pathname,
    method: request.method,
    accept: request.headers.get("accept")
  });

  if (decision.action === "markdown") {
    return withTracking(
      new NextResponse(request.method === "HEAD" ? null : decision.body, {
        status: decision.status,
        headers: markdownHeaders(decision.status)
      }),
      detected,
      oppref,
      shouldSetSource,
      shouldSetOppref
    );
  }

  if (!shouldSetSource && !shouldSetOppref) {
    return NextResponse.next();
  }

  return withTracking(NextResponse.next(), detected, oppref, shouldSetSource, shouldSetOppref);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|assets/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|woff2?)$).*)"
  ]
};

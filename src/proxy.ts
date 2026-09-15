import { NextResponse, type NextRequest } from "next/server";
import {
  AD_PHONE_COOKIE,
  AD_PHONE_COOKIE_MAX_AGE,
  detectAdSource,
  parseAdSource,
  type AdPhoneSource
} from "./app/adPhone";
import { OPPREF_COOKIE } from "./app/openaiAds";

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

export function proxy(request: NextRequest) {
  const oppref = request.nextUrl.searchParams.get("oppref")?.trim() ?? "";
  const detected = detectAdSource({
    searchParams: request.nextUrl.searchParams
  });
  const existing = parseAdSource(request.cookies.get(AD_PHONE_COOKIE)?.value);
  const existingOppref = request.cookies.get(OPPREF_COOKIE)?.value ?? "";

  const shouldSetSource = Boolean(detected && detected !== existing);
  const shouldSetOppref = Boolean(oppref && oppref !== existingOppref);

  if (!shouldSetSource && !shouldSetOppref) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  if (shouldSetSource && detected) persistSource(response, detected);
  if (shouldSetOppref) persistOppref(response, oppref);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|assets/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|woff2?)$).*)"
  ]
};

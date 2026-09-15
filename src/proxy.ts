import { NextResponse, type NextRequest } from "next/server";
import {
  AD_PHONE_COOKIE,
  AD_PHONE_COOKIE_MAX_AGE,
  detectAdSource,
  parseAdSource,
  type AdPhoneSource
} from "./app/adPhone";

function persistSource(response: NextResponse, source: AdPhoneSource) {
  response.cookies.set({
    name: AD_PHONE_COOKIE,
    value: source,
    path: "/",
    maxAge: AD_PHONE_COOKIE_MAX_AGE,
    sameSite: "lax"
  });
}

export function proxy(request: NextRequest) {
  const detected = detectAdSource({
    searchParams: request.nextUrl.searchParams
  });

  const existing = parseAdSource(request.cookies.get(AD_PHONE_COOKIE)?.value);

  if (!detected || detected === existing) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  persistSource(response, detected);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|assets/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|woff2?)$).*)"
  ]
};

import { NextResponse } from "next/server";
import { graphRequiredEnvVars, sendMail } from "../../../lib/graphMailer";
import { checkRateLimit, getClientIp } from "../../../lib/rateLimit";

type NewsletterPayload = {
  email?: unknown;
  website?: unknown;
};

const requiredEnvVars = graphRequiredEnvVars;

// Eigenes Postfach für Newsletter-Anmeldungen, mit Fallback auf CONTACT_TO.
const newsletterRecipient = process.env.CONTACT_TO_NEWSLETTER || process.env.CONTACT_TO;

const sanitize = (value: unknown) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, 320);
};

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(`newsletter:${getClientIp(request)}`);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { message: "Zu viele Anfragen in kurzer Zeit. Bitte später erneut versuchen." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } }
    );
  }

  let payload: NewsletterPayload;

  try {
    payload = (await request.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json({ message: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot: nach außen ein Erfolg, damit der Bot nichts lernt. `tracked: false`
  // verhindert, dass der Client daraus eine Conversion macht.
  if (sanitize(payload.website)) {
    return NextResponse.json({
      message: "Danke — wir halten Sie über Neuigkeiten und Aktionen auf dem Laufenden.",
      tracked: false
    });
  }

  const email = sanitize(payload.email);

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

  if (missingEnvVars.length > 0 || !newsletterRecipient) {
    const missing: string[] = [...missingEnvVars];
    if (!newsletterRecipient) missing.push("CONTACT_TO_NEWSLETTER (oder CONTACT_TO)");
    console.error(`Missing mail configuration: ${missing.join(", ")}`);
    return NextResponse.json(
      { message: "Der Mailversand ist noch nicht konfiguriert. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }

  const subject = "Neue Newsletter-Anmeldung";
  const text = ["Neue Newsletter-Anmeldung über die Website:", "", `E-Mail: ${email}`].join("\n");

  try {
    await sendMail({
      to: newsletterRecipient,
      replyTo: email,
      subject,
      text
    });

    return NextResponse.json({
      message: "Danke — wir halten Sie über Neuigkeiten und Aktionen auf dem Laufenden."
    });
  } catch (error) {
    console.error("Failed to send newsletter signup email", error);
    return NextResponse.json(
      { message: "Die Anmeldung konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}

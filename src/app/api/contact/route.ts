import { NextResponse } from "next/server";
import { graphRequiredEnvVars, sendMail } from "../../../lib/graphMailer";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  customerType?: unknown;
  company?: unknown;
  position?: unknown;
  street?: unknown;
  city?: unknown;
  device?: unknown;
  model?: unknown;
  message?: unknown;
  requestType?: unknown;
  urgency?: unknown;
  preferredTime?: unknown;
  website?: unknown;
};

type RequestType = "reparatur" | "anliegen" | "ersatzteile" | "firmenkunden" | "karriere";

const requiredEnvVars = graphRequiredEnvVars;

const recipientByType: Record<RequestType, string> = {
  reparatur: process.env.CONTACT_TO_SERVICE || "service@monter.at",
  anliegen: process.env.CONTACT_TO_INFO || "info@monter.at",
  ersatzteile: process.env.CONTACT_TO_PARTS || "ersatzteile@monter.at",
  firmenkunden: process.env.CONTACT_TO_SALES || "sales@monter.at",
  karriere: process.env.CONTACT_TO_KARRIERE || "karriere@monter.at"
};

const labelByType: Record<RequestType, string> = {
  reparatur: "Reparaturtermin",
  anliegen: "Allgemeines Anliegen",
  ersatzteile: "Ersatzteil-Anfrage",
  firmenkunden: "Firmenkunden-Anfrage",
  karriere: "Bewerbung"
};

const subjectByType: Record<RequestType, (name: string) => string> = {
  reparatur: (name) => `Neue Reparaturanfrage von ${name}`,
  anliegen: (name) => `Neues Anliegen von ${name}`,
  ersatzteile: (name) => `Neue Ersatzteil-Anfrage von ${name}`,
  firmenkunden: (name) => `Neue Firmenkunden-Anfrage von ${name}`,
  karriere: (name) => `Neue Bewerbung von ${name}`
};

const sanitize = (value: unknown) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, 2000);
};

const resolveRequestType = (value: unknown): RequestType => {
  const normalized = sanitize(value).toLowerCase();
  if (
    normalized === "anliegen" ||
    normalized === "ersatzteile" ||
    normalized === "firmenkunden" ||
    normalized === "karriere"
  ) {
    return normalized;
  }
  return "reparatur";
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Ungültige Anfrage." }, { status: 400 });
  }

  if (sanitize(payload.website)) {
    return NextResponse.json({ message: "Danke, Ihre Anfrage wurde gesendet." });
  }

  const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

  if (missingEnvVars.length > 0) {
    console.error(`Missing mail configuration: ${missingEnvVars.join(", ")}`);
    return NextResponse.json(
      { message: "Der Mailversand ist noch nicht konfiguriert. Bitte rufen Sie uns direkt an." },
      { status: 500 }
    );
  }

  const requestType = resolveRequestType(payload.requestType);
  const name = sanitize(payload.name);
  const phone = sanitize(payload.phone);
  const email = sanitize(payload.email);
  const customerType = sanitize(payload.customerType) || "Nicht angegeben";
  const company = sanitize(payload.company);
  const position = sanitize(payload.position);
  const street = sanitize(payload.street);
  const city = sanitize(payload.city);
  const device = sanitize(payload.device);
  const model = sanitize(payload.model) || "Nicht angegeben";
  const urgency = sanitize(payload.urgency) || "Nicht angegeben";
  const preferredTime = sanitize(payload.preferredTime) || "Nicht angegeben";
  const message = sanitize(payload.message);

  const deviceRequired = requestType === "reparatur" || requestType === "ersatzteile";

  if (!name || !phone || !email) {
    return NextResponse.json(
      { message: "Bitte Name, Telefonnummer und E-Mail-Adresse ausfüllen." },
      { status: 400 }
    );
  }

  if (!message || (deviceRequired && (!device || !street || !city))) {
    return NextResponse.json(
      {
        message: deviceRequired
          ? "Bitte Gerät, Adresse und Beschreibung ausfüllen."
          : "Bitte Ihre Nachricht ausfüllen."
      },
      { status: 400 }
    );
  }

  const recipient = recipientByType[requestType] || process.env.CONTACT_TO || recipientByType.reparatur;
  const subject = subjectByType[requestType](name);

  const lines = [
    `Neue Anfrage über die Website — ${labelByType[requestType]}:`,
    "",
    `Name: ${name}`,
    `Telefon: ${phone}`,
    `E-Mail: ${email}`
  ];

  if (company) lines.push(`Firma: ${company}`);
  if (position) lines.push(`Position / Stelle: ${position}`);
  if (requestType !== "karriere") lines.push(`Kundentyp: ${customerType}`);

  if (deviceRequired) {
    lines.push(`Adresse: ${street}, ${city}`, `Gerät: ${device}`, `Marke / Modell: ${model}`);
  }

  if (requestType === "reparatur") {
    lines.push(`Dringlichkeit: ${urgency}`, `Wunschtermin: ${preferredTime}`);
  }

  const messageLabel =
    requestType === "anliegen"
      ? "Anliegen:"
      : requestType === "karriere"
        ? "Anschreiben / Nachricht:"
        : "Beschreibung:";

  lines.push("", messageLabel, message);

  const text = lines.join("\n");

  try {
    await sendMail({
      to: recipient,
      replyTo: email,
      subject,
      text
    });

    return NextResponse.json({
      message: "Danke, Ihre Anfrage wurde gesendet. Wir melden uns schnellstmöglich."
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { message: "Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns direkt an." },
      { status: 500 }
    );
  }
}

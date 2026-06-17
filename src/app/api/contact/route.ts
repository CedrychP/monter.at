import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  customerType?: unknown;
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

type RequestType = "reparatur" | "anliegen" | "ersatzteile";

const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

const recipientByType: Record<RequestType, string> = {
  reparatur: process.env.CONTACT_TO_SERVICE || "service@monter.at",
  anliegen: process.env.CONTACT_TO_INFO || "info@monter.at",
  ersatzteile: process.env.CONTACT_TO_PARTS || "ersatzteile@monter.at"
};

const labelByType: Record<RequestType, string> = {
  reparatur: "Reparaturtermin",
  anliegen: "Allgemeines Anliegen",
  ersatzteile: "Ersatzteil-Anfrage"
};

const subjectByType: Record<RequestType, (name: string) => string> = {
  reparatur: (name) => `Neue Reparaturanfrage von ${name}`,
  anliegen: (name) => `Neues Anliegen von ${name}`,
  ersatzteile: (name) => `Neue Ersatzteil-Anfrage von ${name}`
};

const sanitize = (value: unknown) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, 2000);
};

const resolveRequestType = (value: unknown): RequestType => {
  const normalized = sanitize(value).toLowerCase();
  if (normalized === "anliegen" || normalized === "ersatzteile") {
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
  const street = sanitize(payload.street);
  const city = sanitize(payload.city);
  const device = sanitize(payload.device);
  const model = sanitize(payload.model) || "Nicht angegeben";
  const urgency = sanitize(payload.urgency) || "Nicht angegeben";
  const preferredTime = sanitize(payload.preferredTime) || "Nicht angegeben";
  const message = sanitize(payload.message);

  const deviceRequired = requestType !== "anliegen";

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
          : "Bitte Ihr Anliegen ausfüllen."
      },
      { status: 400 }
    );
  }

  const smtpPort = Number(process.env.SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.isFinite(smtpPort) ? smtpPort : 465,
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const recipient = recipientByType[requestType] || process.env.CONTACT_TO || recipientByType.reparatur;
  const subject = subjectByType[requestType](name);

  const lines = [
    `Neue Anfrage über die Website — ${labelByType[requestType]}:`,
    "",
    `Name / Firma: ${name}`,
    `Telefon: ${phone}`,
    `E-Mail: ${email}`,
    `Kundentyp: ${customerType}`
  ];

  if (deviceRequired) {
    lines.push(`Adresse: ${street}, ${city}`, `Gerät: ${device}`, `Marke / Modell: ${model}`);
  }

  if (requestType === "reparatur") {
    lines.push(`Dringlichkeit: ${urgency}`, `Wunschtermin: ${preferredTime}`);
  }

  lines.push("", requestType === "anliegen" ? "Anliegen:" : "Beschreibung:", message);

  const text = lines.join("\n");

  try {
    await transporter.sendMail({
      from: `"MONTER Website" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email || process.env.CONTACT_REPLY_TO || process.env.SMTP_USER,
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

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  customerType?: unknown;
  device?: unknown;
  model?: unknown;
  message?: unknown;
  website?: unknown;
};

const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO"] as const;

const sanitize = (value: unknown) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, 2000);
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

  const name = sanitize(payload.name);
  const phone = sanitize(payload.phone);
  const email = sanitize(payload.email) || "Nicht angegeben";
  const customerType = sanitize(payload.customerType) || "Nicht angegeben";
  const device = sanitize(payload.device);
  const model = sanitize(payload.model) || "Nicht angegeben";
  const message = sanitize(payload.message);

  if (!name || !phone || !device || !message) {
    return NextResponse.json(
      { message: "Bitte Name, Telefonnummer, Gerät und Fehlerbeschreibung ausfüllen." },
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

  const subject = `Neue Reparaturanfrage von ${name}`;
  const text = [
    "Neue Anfrage über die Website:",
    "",
    `Name / Firma: ${name}`,
    `Telefon: ${phone}`,
    `E-Mail: ${email}`,
    `Kundentyp: ${customerType}`,
    `Gerät: ${device}`,
    `Marke / Modell: ${model}`,
    "",
    "Fehlerbeschreibung:",
    message
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"MONTER Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email !== "Nicht angegeben" ? email : process.env.CONTACT_REPLY_TO || process.env.SMTP_USER,
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

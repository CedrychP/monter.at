"use client";

import { useState } from "react";
import { trackConversion } from "./analytics";

type ContactFormProps = {
  title?: string;
  eyebrow?: string;
  includeCustomerType?: boolean;
  includeModel?: boolean;
  className?: string;
  phoneHref: string;
};

type SubmitState = {
  status: "idle" | "success" | "error";
  message: string;
};

export default function ContactForm({
  title = "Anfrage vorbereiten",
  eyebrow = "Anfrageformular",
  includeCustomerType = true,
  includeModel = false,
  className = "",
  phoneHref
}: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Die Anfrage konnte nicht gesendet werden.");
      }

      form.reset();
      trackConversion("form", { source: "contact_form" });
      setSubmitState({
        status: "success",
        message: result.message || "Danke, Ihre Anfrage wurde gesendet. Wir melden uns schnellstmöglich."
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns direkt an."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="border-b border-[color:var(--border)] pb-8">
        <p className="cap-line tracking-eyebrow">{eyebrow}</p>
        <h3 className="font-display mt-7 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-sm font-light text-[color:var(--muted)]">
          Wir antworten in der Regel innerhalb eines Werktags. Bei dringenden Ausfällen bitte
          direkt anrufen.
        </p>
      </div>

      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="mt-8 grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="tracking-eyebrow text-[color:var(--muted)]">Name / Firma</span>
          <input className="input-edge" name="name" placeholder="Max Mustermann GmbH" required />
        </label>
        <label className="block">
          <span className="tracking-eyebrow text-[color:var(--muted)]">Telefon</span>
          <input className="input-edge" name="phone" type="tel" placeholder="+43 ..." required />
        </label>
        <label className="block">
          <span className="tracking-eyebrow text-[color:var(--muted)]">E-Mail · optional</span>
          <input className="input-edge" name="email" type="email" placeholder="name@example.at" />
        </label>
        {includeCustomerType ? (
          <label className="block">
            <span className="tracking-eyebrow text-[color:var(--muted)]">Kundentyp</span>
            <select className="input-edge" name="customerType">
              <option>Privatkunde</option>
              <option>Geschäftskunde</option>
              <option>Hausverwaltung</option>
            </select>
          </label>
        ) : null}
        <label className={`block ${includeModel ? "" : "sm:col-span-2"}`}>
          <span className="tracking-eyebrow text-[color:var(--muted)]">Gerät</span>
          <input
            className="input-edge"
            name="device"
            placeholder="Waschmaschine, Geschirrspüler ..."
            required
          />
        </label>
        {includeModel ? (
          <label className="block">
            <span className="tracking-eyebrow text-[color:var(--muted)]">Marke / Modell</span>
            <input className="input-edge" name="model" placeholder="Bosch, Miele, Siemens ..." />
          </label>
        ) : null}
      </div>

      <label className="mt-8 block">
        <span className="tracking-eyebrow text-[color:var(--muted)]">Fehlerbeschreibung</span>
        <textarea
          className="input-edge resize-y"
          name="message"
          rows={includeModel ? 6 : 5}
          placeholder="Was passiert? Gibt es einen Fehlercode? Wo steht das Gerät?"
          required
        />
      </label>

      <div className="mt-10 flex flex-col gap-4 border-t border-[color:var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-light leading-relaxed text-[color:var(--muted)] sm:max-w-sm">
          Ihre Anfrage wird per E-Mail übermittelt. Bei dringenden Ausfällen bitte direkt
          anrufen.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${phoneHref}`}
            onClick={() => trackConversion("call", { source: "contact_form" })}
            className="btn-ghost"
          >
            Lieber anrufen
          </a>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Wird gesendet …" : "Anfrage senden"}
          </button>
        </div>
      </div>

      {submitState.message ? (
        <p
          className={`mt-6 border px-5 py-4 text-sm font-light leading-relaxed ${
            submitState.status === "success"
              ? "border-[color:var(--ink)] bg-[color:var(--bg-muted)] text-[color:var(--ink)]"
              : "border-[color:var(--accent)] bg-[color:var(--accent-soft)] text-[color:var(--accent-hover)]"
          }`}
          role="status"
        >
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}

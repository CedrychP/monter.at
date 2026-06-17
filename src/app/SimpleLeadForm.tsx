"use client";

import { useState } from "react";
import { trackConversion } from "./analytics";

type SimpleLeadFormProps = {
  requestType: "firmenkunden" | "karriere" | "anliegen";
  eyebrow?: string;
  title?: string;
  description?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  includeCompany?: boolean;
  companyLabel?: string;
  includePosition?: boolean;
  positionLabel?: string;
  positionOptions?: string[];
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  phoneHref: string;
  className?: string;
};

type SubmitState = {
  status: "idle" | "success" | "error";
  message: string;
};

const fieldClass =
  "mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-muted)] px-4 py-3 text-[0.95rem] text-[color:var(--ink)] outline-none transition focus:border-[color:var(--ink)] focus:bg-white focus:ring-2 focus:ring-[color:var(--ink)]/10 placeholder:font-light placeholder:text-[color:var(--muted-soft)]";

const labelClass = "block text-sm font-medium text-[color:var(--ink)]";

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 4h3l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6v3a2 2 0 0 1-2.1 2A15 15 0 0 1 3 6.1 2 2 0 0 1 5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export default function SimpleLeadForm({
  requestType,
  eyebrow = "Anfrageformular",
  title = "Anfrage senden",
  description = "Wir antworten in der Regel innerhalb eines Werktags.",
  nameLabel = "Name",
  namePlaceholder = "Max Mustermann",
  includeCompany = false,
  companyLabel = "Firma",
  includePosition = false,
  positionLabel = "Stelle / Bereich",
  positionOptions,
  messageLabel = "Nachricht",
  messagePlaceholder = "Ihre Nachricht an uns …",
  submitLabel = "Anfrage senden",
  phoneHref,
  className = ""
}: SimpleLeadFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = { ...Object.fromEntries(formData.entries()), requestType };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Die Anfrage konnte nicht gesendet werden.");
      }

      form.reset();
      trackConversion("form", { source: "lead_form", request_type: requestType });
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
      <div>
        <p className="cap-line tracking-eyebrow">{eyebrow}</p>
        <h3 className="font-display mt-6 text-3xl font-normal leading-tight tracking-tight sm:text-[2.1rem]">
          {title}
        </h3>
        <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">{description}</p>
      </div>

      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className={`block ${includeCompany ? "" : "sm:col-span-2"}`}>
          <span className={labelClass}>{nameLabel}</span>
          <input className={fieldClass} name="name" placeholder={namePlaceholder} required />
        </label>
        {includeCompany ? (
          <label className="block">
            <span className={labelClass}>{companyLabel}</span>
            <input className={fieldClass} name="company" placeholder="Musterfirma GmbH" required />
          </label>
        ) : null}
        <label className="block">
          <span className={labelClass}>Telefonnummer</span>
          <input className={fieldClass} name="phone" type="tel" placeholder="01 234 56 78" required />
        </label>
        <label className="block">
          <span className={labelClass}>E-Mail-Adresse</span>
          <input className={fieldClass} name="email" type="email" placeholder="name@example.at" required />
        </label>
        {includePosition ? (
          <label className="block sm:col-span-2">
            <span className={labelClass}>{positionLabel}</span>
            {positionOptions && positionOptions.length > 0 ? (
              <select className={fieldClass} name="position" defaultValue="">
                <option value="" disabled>
                  Bitte wählen …
                </option>
                {positionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input className={fieldClass} name="position" placeholder="Gewünschte Position" />
            )}
          </label>
        ) : null}
      </div>

      <label className="mt-5 block">
        <span className={labelClass}>{messageLabel}</span>
        <textarea
          className={`${fieldClass} resize-y`}
          name="message"
          rows={6}
          placeholder={messagePlaceholder}
          required
        />
      </label>

      <div className="mt-7 flex flex-col gap-5">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[color:var(--accent)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet …" : submitLabel}
          {!isSubmitting ? <ArrowIcon /> : null}
        </button>

        <div className="flex flex-col gap-3 border-t border-[color:var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-light leading-relaxed text-[color:var(--muted)] sm:max-w-[18rem]">
            Übermittlung per E-Mail. Wir behandeln Ihre Angaben vertraulich.
          </p>
          <a
            href={`tel:${phoneHref}`}
            onClick={() => trackConversion("call", { source: "lead_form" })}
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--ink)] transition hover:text-[color:var(--accent)]"
          >
            <PhoneIcon />
            Lieber anrufen
          </a>
        </div>
      </div>

      {submitState.message ? (
        <p
          className={`mt-6 rounded-lg border px-5 py-4 text-sm font-light leading-relaxed ${
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

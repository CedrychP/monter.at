"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type NavNewsletterSignupProps = {
  variant?: "dark" | "light";
  className?: string;
};

type SubmitState = {
  status: "idle" | "success" | "error";
  message: string;
};

export default function NavNewsletterSignup({
  variant = "dark",
  className = ""
}: NavNewsletterSignupProps) {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isDark = variant === "dark";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Die Anmeldung konnte nicht gesendet werden.");
      }

      form.reset();
      setSubmitState({
        status: "success",
        message: result.message || "Danke — wir halten Sie über Neuigkeiten und Aktionen auf dem Laufenden."
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Die Anmeldung konnte nicht gesendet werden. Bitte versuchen Sie es später erneut."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {isDark ? (
        <>
          <p className="nav-dropdown-eyebrow">Newsletter</p>
          <p className="nav-dropdown-title mt-0 normal-case">Neuigkeiten zuerst erhalten.</p>
          <p className="nav-dropdown-body mt-3">
            Melden Sie sich an — bei jedem Launch informieren wir Sie über neue Services und
            exklusive Kundengeschenke.
          </p>
        </>
      ) : (
        <>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
            Newsletter
          </p>
          <p className="mt-2 text-sm font-semibold tracking-tight text-[color:var(--ink)]">
            Neuigkeiten zuerst erhalten.
          </p>
          <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Bei jedem Launch informieren wir Sie über neue Services und exklusive Kundengeschenke.
          </p>
        </>
      )}

      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className={`nav-newsletter-field ${isDark ? "nav-newsletter-field--dark" : "nav-newsletter-field--light"}`}>
        <label className="sr-only" htmlFor={`newsletter-email-${variant}`}>
          E-Mail-Adresse
        </label>
        <input
          id={`newsletter-email-${variant}`}
          className="nav-newsletter-input"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Ihre E-Mail-Adresse"
          required
        />
        <button
          type="submit"
          className={`nav-newsletter-button ${isDark ? "nav-newsletter-button--dark" : "nav-newsletter-button--light"}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet …" : "Anmelden"}
        </button>
      </div>

      {submitState.message ? (
        <p
          className={`nav-newsletter-status ${
            submitState.status === "success"
              ? "nav-newsletter-status--success"
              : "nav-newsletter-status--error"
          } ${isDark ? "nav-newsletter-status--dark" : "nav-newsletter-status--light"}`}
          role="status"
        >
          {submitState.message}
        </p>
      ) : null}

      <p className={`nav-newsletter-note ${isDark ? "nav-newsletter-note--dark" : "nav-newsletter-note--light"}`}>
        Mit der Anmeldung stimmen Sie dem Erhalt von E-Mails zu. Abmeldung jederzeit möglich.{" "}
        <Link href="/dsgvo">Datenschutz</Link>
      </p>
    </form>
  );
}

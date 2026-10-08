"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { buildUserData, trackConversion } from "../analytics";

type SubmitState = {
  status: "idle" | "success" | "error";
  message: string;
};

export default function GoldSignup() {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const userData = buildUserData({ email: formData.get("email") });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });
      const result = (await response.json()) as { message?: string; tracked?: boolean };

      if (!response.ok) {
        throw new Error(result.message || "Die Anmeldung konnte nicht gesendet werden.");
      }

      form.reset();
      setSubmitState({
        status: "success",
        message:
          result.message ||
          "Sie stehen auf der ersten Liste. Wir schreiben Ihnen, bevor der Club offen ist."
      });
      if (result.tracked !== false) {
        trackConversion("newsletter", { source: "monter-gold", user_data: userData });
      }
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
    <form
      onSubmit={handleSubmit}
      id="liste"
      className="relative scroll-mt-28 border border-[color:var(--gold-on-dark)] bg-[#14120e] px-6 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-9"
    >
      <span className="absolute -top-3 left-6 bg-[color:var(--ink)] px-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-on-dark)]">
        Newsletter
      </span>

      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="source" value="monter-gold" />

      <h2 className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl">
        Die erste Liste.
      </h2>
      <p className="mt-3 text-sm font-light leading-relaxed text-white/75 sm:mt-4">
        Diese Adressen bekommen beim Start Dinge, die danach nicht mehr verfügbar sind.
      </p>

      <label htmlFor="gold-newsletter-email" className="mt-6 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--gold-on-dark)] sm:mt-8">
        E-Mail-Adresse
      </label>
      <input
        id="gold-newsletter-email"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        placeholder="name@example.at"
        aria-describedby="gold-newsletter-note"
        className="mt-3 w-full border border-[color:var(--gold-on-dark)]/70 bg-transparent px-4 py-3.5 text-base text-white outline-none placeholder:text-white/55 focus:border-[color:var(--gold-on-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gold-on-dark)]"
      />

      <p id="gold-newsletter-note" className="mt-4 text-[0.78rem] font-light leading-relaxed text-white/70">
        Mit der Anmeldung stimmen Sie E-Mails zum Start von MONTER GOLD zu. Abmeldung jederzeit
        möglich.{" "}
        <Link href="/dsgvo" className="text-[color:var(--gold-on-dark)] underline underline-offset-2">
          Datenschutz
        </Link>
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 inline-flex w-full items-center justify-center bg-[color:var(--gold-on-dark)] px-6 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white disabled:cursor-wait disabled:opacity-65"
      >
        {isSubmitting ? "Wird gesendet …" : "Eintragen"}
      </button>

      {submitState.message ? (
        <p
          className={`mt-4 text-sm font-normal leading-relaxed ${
            submitState.status === "success" ? "text-[color:var(--gold-on-dark)]" : "text-[color:var(--accent-on-dark)]"
          }`}
          role="status"
        >
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}

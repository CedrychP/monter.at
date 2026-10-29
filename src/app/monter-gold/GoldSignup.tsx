"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

import { buildUserData, trackConversion } from "../analytics";
import { goldPlans, type GoldPlan } from "./goldPlans";

type SubmitState = {
  status: "idle" | "success" | "error";
  message: string;
};

export default function GoldSignup() {
  const searchParams = useSearchParams();
  const [planId, setPlanId] = useState<GoldPlan["id"]>("gold");
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selected = goldPlans.find((plan) => plan.id === planId) ?? goldPlans[1];

  useEffect(() => {
    const tarif = searchParams.get("tarif");
    if (tarif === "silber" || tarif === "gold" || tarif === "platinum") {
      setPlanId(tarif);
    }
  }, [searchParams]);

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
        message: `Sie stehen auf der Liste für ${selected.name}. Es geht noch kein Beitrag ab. Die 12 Monate beginnen erst nach schriftlicher Zustimmung.`
      });
      setPlanId("gold");
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
      className="scroll-mt-28 border border-[color:var(--gold-on-dark)] bg-[#14120e] px-6 pb-7 pt-7 sm:px-8 sm:pb-8 sm:pt-8"
    >
      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="source" value="monter-gold" />

      <h2 className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl">
        Tarif wählen.
      </h2>
      <p className="mt-3 text-sm font-light leading-relaxed text-white/75">
        Die Liste ist noch kein Vertrag. Die 12 Monate und die erste Lastschrift beginnen erst nach
        schriftlicher Zustimmung. Die Anfrage ist noch kein Auftrag.
      </p>

      <fieldset className="mt-6">
        <legend className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--gold-on-dark)]">
          Mitgliedschaft
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {goldPlans.map((plan) => {
            const active = plan.id === planId;
            return (
              <label
                key={plan.id}
                className={`cursor-pointer border px-3 py-3 ${
                  active
                    ? "border-[color:var(--gold-on-dark)] bg-[color:var(--gold-on-dark)] text-[color:var(--ink)]"
                    : "border-white/25 text-white"
                }`}
              >
                <input
                  type="radio"
                  name="tarif"
                  value={plan.id}
                  checked={active}
                  onChange={() => setPlanId(plan.id)}
                  className="sr-only"
                />
                <span className="block text-[0.68rem] font-medium uppercase tracking-[0.16em]">
                  {plan.name}
                </span>
                <span className="mt-1 block font-display text-2xl font-light tracking-tight">
                  {plan.price} €
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <label
        htmlFor="gold-newsletter-email"
        className="mt-6 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--gold-on-dark)]"
      >
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
        Mit der Anmeldung stimmen Sie E-Mails zu {selected.name} und zum Start von MONTER GOLD zu.
        Abmeldung jederzeit möglich.{" "}
        <Link href="/dsgvo" className="text-[color:var(--gold-on-dark)] underline underline-offset-2">
          <span>Datenschutz</span>
        </Link>.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 inline-flex w-full items-center justify-center bg-[color:var(--gold-on-dark)] px-6 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white disabled:cursor-wait disabled:opacity-65"
      >
        {isSubmitting ? "Wird gesendet …" : `Liste für ${selected.name}`}
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

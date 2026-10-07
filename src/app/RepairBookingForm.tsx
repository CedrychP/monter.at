"use client";

import { useMemo, useState } from "react";
import { buildUserData, trackConversion } from "./analytics";

type RepairBookingFormProps = {
  phoneHref: string;
  className?: string;
};

type SubmitState = {
  status: "idle" | "success" | "error";
  message: string;
};

type FormValues = {
  device: string;
  model: string;
  message: string;
  street: string;
  city: string;
  urgency: string;
  preferredTime: string;
  name: string;
  phone: string;
  email: string;
  customerType: string;
  /** Honeypot — von echten Besuchern nie gefüllt. */
  website: string;
};

const initialValues: FormValues = {
  device: "",
  model: "",
  message: "",
  street: "",
  city: "",
  urgency: "Akuter Ausfall – möglichst schnell",
  preferredTime: "",
  name: "",
  phone: "",
  email: "",
  customerType: "Privatkunde",
  website: ""
};

const deviceOptions = [
  "Waschmaschine",
  "Geschirrspüler",
  "Trockner",
  "Kühlschrank / Gefrierschrank",
  "Backofen / Herd",
  "Klimagerät / Klimaanlage",
  "Garagentor",
  "Fernseher",
  "Anderes Gerät"
];

const fieldClass =
  "mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-muted)] px-4 py-3 text-[0.95rem] text-[color:var(--ink)] outline-none transition focus:border-[color:var(--ink)] focus:bg-white focus:ring-2 focus:ring-[color:var(--ink)]/10 placeholder:font-light placeholder:text-[color:var(--muted-soft)]";

const labelClass = "block text-sm font-medium text-[color:var(--ink)]";
const optionalClass = "font-normal text-[color:var(--muted-soft)]";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function RepairBookingForm({ phoneHref, className = "" }: RepairBookingFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle", message: "" });

  const update = (key: keyof FormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const formValid = useMemo(
    () =>
      Boolean(values.device) &&
      values.message.trim().length > 3 &&
      values.street.trim().length > 1 &&
      values.city.trim().length > 1 &&
      values.name.trim().length > 1 &&
      values.phone.trim().length > 4 &&
      isEmail(values.email),
    [values]
  );

  const missing = {
    device: !values.device,
    message: values.message.trim().length <= 3,
    street: values.street.trim().length <= 1,
    city: values.city.trim().length <= 1,
    name: values.name.trim().length <= 1,
    phone: values.phone.trim().length <= 4,
    email: !isEmail(values.email)
  };

  const fieldClassFor = (invalid: boolean) =>
    `${fieldClass}${invalid ? " border-[color:var(--accent)] bg-white" : ""}`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formValid) {
      setAttempted(true);
      const firstInvalid = (
        ["device", "message", "street", "city", "name", "phone", "email"] as const
      ).find((key) => missing[key]);
      if (firstInvalid) {
        document.getElementById(`repair-${firstInvalid}`)?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, requestType: "reparatur" })
      });
      const result = (await response.json()) as { message?: string; tracked?: boolean };

      if (!response.ok) {
        throw new Error(result.message || "Die Anfrage konnte nicht gesendet werden.");
      }

      if (result.tracked !== false) {
        trackConversion("form", {
          source: "repair_booking",
          request_type: "reparatur",
          user_data: buildUserData({ email: values.email, phone: values.phone })
        });
      }
      setValues(initialValues);
      setAttempted(false);
      setSubmitState({
        status: "success",
        message: result.message || "Danke, Ihre Reparaturanfrage wurde gesendet. Wir melden uns schnellstmöglich."
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
    <form className={className} onSubmit={handleSubmit} noValidate>
      <div>
        <p className="cap-line tracking-eyebrow">Etwa eine Minute</p>
        <h3 className="font-display mt-5 text-2xl font-normal leading-tight tracking-tight sm:mt-6 sm:text-3xl lg:text-[2.1rem]">
          Termin anfragen.
        </h3>
        <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
          Wir rufen zurück und stimmen den Termin ab, meist innerhalb eines Werktags. Die Anfrage
          ist noch kein Auftrag.
        </p>
      </div>

      <input
        className="hidden"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={values.website}
        onChange={update("website")}
      />

      <div className="mt-8 grid gap-8">
        <fieldset className="grid gap-5">
          <legend className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
            1 · Das Gerät
          </legend>
          <div>
            <span className={labelClass} id="repair-device-label">
              Welches Gerät?
            </span>
            <div
              id="repair-device"
              role="radiogroup"
              aria-labelledby="repair-device-label"
              tabIndex={-1}
              className={`mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 ${
                attempted && missing.device ? "rounded-lg ring-2 ring-[color:var(--accent)]" : ""
              }`}
            >
              {deviceOptions.map((option) => {
                const selected = values.device === option;
                return (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setValues((prev) => ({ ...prev, device: option }))}
                    className={`rounded-lg border px-3 py-2.5 text-left text-sm leading-snug transition ${
                      selected
                        ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white"
                        : "border-[color:var(--border)] bg-[color:var(--bg-muted)] text-[color:var(--ink)] hover:border-[color:var(--ink)]"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <label className="block">
            <span className={labelClass}>Was ist das Problem?</span>
            <textarea
              id="repair-message"
              className={`${fieldClassFor(attempted && missing.message)} resize-y`}
              rows={3}
              value={values.message}
              onChange={update("message")}
              placeholder="Was passiert? Gibt es einen Fehlercode?"
              aria-invalid={attempted && missing.message}
              required
            />
          </label>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>
                Marke &amp; Modell <span className={optionalClass}>· optional</span>
              </span>
              <input
                className={fieldClass}
                value={values.model}
                onChange={update("model")}
                placeholder="Bosch, Miele, Siemens …"
              />
            </label>
            <label className="block">
              <span className={labelClass}>Dringlichkeit</span>
              <select className={fieldClass} value={values.urgency} onChange={update("urgency")}>
                <option>Akuter Ausfall – möglichst schnell</option>
                <option>In den nächsten Tagen</option>
                <option>Zeitlich flexibel</option>
              </select>
            </label>
          </div>
        </fieldset>

        <fieldset className="grid gap-5">
          <legend className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
            2 · Wo wir hinkommen
          </legend>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Straße &amp; Nr.</span>
              <input
                id="repair-street"
                className={fieldClassFor(attempted && missing.street)}
                value={values.street}
                onChange={update("street")}
                placeholder="Musterstraße 1/6"
                autoComplete="street-address"
                aria-invalid={attempted && missing.street}
                required
              />
            </label>
            <label className="block">
              <span className={labelClass}>PLZ &amp; Ort</span>
              <input
                id="repair-city"
                className={fieldClassFor(attempted && missing.city)}
                value={values.city}
                onChange={update("city")}
                placeholder="1210 Wien"
                autoComplete="address-level2"
                aria-invalid={attempted && missing.city}
                required
              />
            </label>
          </div>

          <label className="block">
            <span className={labelClass}>
              Wunschtermin <span className={optionalClass}>· optional</span>
            </span>
            <input
              className={fieldClass}
              value={values.preferredTime}
              onChange={update("preferredTime")}
              placeholder="z. B. werktags vormittags"
            />
          </label>
        </fieldset>

        <fieldset className="grid gap-5">
          <legend className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
            3 · Wie wir Sie erreichen
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Name</span>
              <input
                id="repair-name"
                className={fieldClassFor(attempted && missing.name)}
                value={values.name}
                onChange={update("name")}
                placeholder="Vor- und Nachname"
                autoComplete="name"
                aria-invalid={attempted && missing.name}
                required
              />
            </label>
            <label className="block">
              <span className={labelClass}>Telefonnummer</span>
              <input
                id="repair-phone"
                className={fieldClassFor(attempted && missing.phone)}
                type="tel"
                value={values.phone}
                onChange={update("phone")}
                placeholder="01 234 56 78"
                autoComplete="tel"
                aria-invalid={attempted && missing.phone}
                required
              />
            </label>
            <label className="block">
              <span className={labelClass}>E-Mail-Adresse</span>
              <input
                id="repair-email"
                className={fieldClassFor(attempted && missing.email)}
                type="email"
                value={values.email}
                onChange={update("email")}
                placeholder="name@example.at"
                autoComplete="email"
                aria-invalid={attempted && missing.email}
                required
              />
            </label>
            <label className="block">
              <span className={labelClass}>Kundentyp</span>
              <select className={fieldClass} value={values.customerType} onChange={update("customerType")}>
                <option>Privatkunde</option>
                <option>Geschäftskunde</option>
                <option>Hausverwaltung</option>
              </select>
            </label>
          </div>
        </fieldset>
      </div>

      <div className="mt-8 border-t border-[color:var(--border)] pt-6">
        {attempted && !formValid ? (
          <p className="mb-4 text-sm font-medium text-[color:var(--accent)]" role="alert">
            Bitte Gerät, Problem, Adresse, Name, Telefon und E-Mail ausfüllen.
          </p>
        ) : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[color:var(--ink)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[color:var(--accent)] disabled:cursor-wait"
        >
          {isSubmitting ? "Wird gesendet …" : "Termin anfragen"}
          {!isSubmitting ? <ArrowIcon /> : null}
        </button>
        <p className="mt-3 text-center text-sm font-light leading-relaxed text-[color:var(--muted)]">
          Unverbindlich. Wir bestätigen den Termin am Telefon.
          <a
            href={`tel:${phoneHref}`}
            data-tel-source="repair_booking"
            className="ml-1 border-b border-current text-[color:var(--ink)]"
          >
            Bei einem Ausfall direkt anrufen.
          </a>
        </p>
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

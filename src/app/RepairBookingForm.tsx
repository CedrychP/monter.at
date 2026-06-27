"use client";

import { useMemo, useState } from "react";
import { trackConversion } from "./analytics";

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
  customerType: "Privatkunde"
};

const deviceOptions = [
  "Waschmaschine",
  "Geschirrspüler",
  "Kühlschrank / Gefrierschrank",
  "Backofen / Herd",
  "Trockner",
  "Garagentor",
  "Anderes Gerät",
  "Klimagerät / Klimaanlage"
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formValid) return;

    setIsSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, requestType: "reparatur" })
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Die Anfrage konnte nicht gesendet werden.");
      }

      trackConversion("form", { source: "repair_booking", request_type: "reparatur" });
      setValues(initialValues);
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
        <p className="cap-line tracking-eyebrow">Reparatur buchen</p>
        <h3 className="font-display mt-5 text-2xl font-normal leading-tight tracking-tight sm:mt-6 sm:text-3xl lg:text-[2.1rem]">
          Termin anfragen.
        </h3>
        <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
          Gerät, Standort und Erreichbarkeit — wir melden uns telefonisch zur Terminabstimmung,
          meist innerhalb eines Werktags.
        </p>
      </div>

      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="mt-8 grid gap-5">
        <label className="block">
          <span className={labelClass}>Welches Gerät?</span>
          <select className={fieldClass} value={values.device} onChange={update("device")} required>
            <option value="" disabled>
              Bitte wählen …
            </option>
            {deviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
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

        <label className="block">
          <span className={labelClass}>Was ist das Problem?</span>
          <textarea
            className={`${fieldClass} resize-y`}
            rows={4}
            value={values.message}
            onChange={update("message")}
            placeholder="Was passiert? Gibt es einen Fehlercode? Seit wann tritt der Fehler auf?"
            required
          />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Straße &amp; Nr.</span>
            <input
              className={fieldClass}
              value={values.street}
              onChange={update("street")}
              placeholder="Musterstraße 1/6"
              required
            />
          </label>
          <label className="block">
            <span className={labelClass}>PLZ &amp; Ort</span>
            <input
              className={fieldClass}
              value={values.city}
              onChange={update("city")}
              placeholder="1210 Wien"
              required
            />
          </label>
        </div>

        <label className="block sm:max-w-[calc(50%-0.625rem)]">
          <span className={labelClass}>
            Wunschtermin <span className={optionalClass}>· optional</span>
          </span>
          <input
            className={fieldClass}
            value={values.preferredTime}
            onChange={update("preferredTime")}
            placeholder="z. B. werktags vormittags …"
          />
        </label>

        <div className="grid gap-5 border-t border-[color:var(--border)] pt-6 sm:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Name oder Firma</span>
            <input
              className={fieldClass}
              value={values.name}
              onChange={update("name")}
              placeholder="Max Mustermann GmbH"
              required
            />
          </label>
          <label className="block">
            <span className={labelClass}>Telefonnummer</span>
            <input
              className={fieldClass}
              type="tel"
              value={values.phone}
              onChange={update("phone")}
              placeholder="01 234 56 78"
              required
            />
          </label>
          <label className="block">
            <span className={labelClass}>E-Mail-Adresse</span>
            <input
              className={fieldClass}
              type="email"
              value={values.email}
              onChange={update("email")}
              placeholder="name@example.at"
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
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-[color:var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={`tel:${phoneHref}`}
          onClick={() => trackConversion("call", { source: "repair_booking" })}
          className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--ink)] transition hover:text-[color:var(--accent)]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 4h3l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6v3a2 2 0 0 1-2.1 2A15 15 0 0 1 3 6.1 2 2 0 0 1 5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          Lieber anrufen
        </a>

        <button
          type="submit"
          disabled={!formValid || isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[color:var(--accent)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {isSubmitting ? "Wird gesendet …" : "Reparaturtermin anfragen"}
          {!isSubmitting ? <ArrowIcon /> : null}
        </button>
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

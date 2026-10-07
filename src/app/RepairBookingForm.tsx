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
  { value: "Waschmaschine", label: "Waschmaschine" },
  { value: "Geschirrspüler", label: "Geschirrspüler" },
  { value: "Trockner", label: "Trockner" },
  { value: "Kühlschrank / Gefrierschrank", label: "Kühl & Gefrier" },
  { value: "Backofen / Herd", label: "Backofen / Herd" },
  { value: "Klimagerät / Klimaanlage", label: "Klimagerät" },
  { value: "Garagentor", label: "Garagentor" },
  { value: "Fernseher", label: "Fernseher" },
  { value: "Anderes Gerät", label: "Anderes Gerät" }
];

const fieldClass =
  "mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-muted)] px-4 py-3 text-[0.95rem] text-[color:var(--ink)] outline-none transition focus:border-[color:var(--ink)] focus:bg-white focus:ring-2 focus:ring-[color:var(--ink)]/10 placeholder:font-light placeholder:text-[color:var(--muted-soft)]";

const labelClass = "block text-sm font-medium text-[color:var(--ink)]";
const optionalClass = "font-normal text-[color:var(--muted-soft)]";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

type FieldKey = "device" | "message" | "street" | "city" | "name" | "phone" | "email";

const problemText = (key: FieldKey, values: FormValues): string | null => {
  const text = (value: string) => value.trim();
  switch (key) {
    case "device":
      return values.device ? null : "Bitte ein Gerät auswählen.";
    case "message":
      if (!text(values.message)) return "Bitte beschreiben, was nicht funktioniert.";
      if (text(values.message).length <= 3) return "Bitte das Problem etwas genauer beschreiben.";
      return null;
    case "street":
      return text(values.street).length > 1 ? null : "Bitte Straße und Hausnummer angeben.";
    case "city":
      return text(values.city).length > 1 ? null : "Bitte PLZ und Ort angeben.";
    case "name":
      return text(values.name).length > 1 ? null : "Bitte Ihren Namen angeben.";
    case "phone":
      if (!text(values.phone)) return "Bitte eine Telefonnummer angeben.";
      if (text(values.phone).length <= 4) return "Die Telefonnummer ist zu kurz.";
      return null;
    case "email":
      if (!text(values.email)) return "Bitte eine E-Mail-Adresse angeben.";
      if (!isEmail(values.email)) return "Diese E-Mail-Adresse ist ungültig.";
      return null;
  }
};

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function RepairBookingForm({ phoneHref, className = "" }: RepairBookingFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle", message: "" });

  const update = (key: keyof FormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const problems = useMemo(
    () =>
      ({
        device: problemText("device", values),
        message: problemText("message", values),
        street: problemText("street", values),
        city: problemText("city", values),
        name: problemText("name", values),
        phone: problemText("phone", values),
        email: problemText("email", values)
      }) satisfies Record<FieldKey, string | null>,
    [values]
  );

  const formValid = Object.values(problems).every((problem) => problem === null);

  const showProblem = (key: FieldKey) => Boolean((attempted || touched[key]) && problems[key]);

  const markTouched = (key: FieldKey) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const invalidFieldStyle = {
    borderColor: "var(--accent)",
    backgroundColor: "var(--accent-soft)",
    boxShadow: "0 0 0 1px var(--accent)"
  };

  const invalidLabelStyle = { color: "var(--accent)" };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formValid) {
      setAttempted(true);
      const firstInvalid = (
        ["device", "message", "street", "city", "name", "phone", "email"] as const
      ).find((key) => problems[key]);
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
      setTouched({});
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
            <span
              className={labelClass}
              style={showProblem("device") ? invalidLabelStyle : undefined}
              id="repair-device-label"
            >
              Welches Gerät?
            </span>
            <div
              id="repair-device"
              role="radiogroup"
              aria-labelledby="repair-device-label"
              aria-invalid={showProblem("device")}
              aria-describedby={showProblem("device") ? "repair-device-error" : undefined}
              tabIndex={-1}
              className={`mt-2 grid grid-cols-2 gap-2 rounded-lg sm:grid-cols-3 ${
                showProblem("device") ? "ring-2 ring-[color:var(--accent)]" : ""
              }`}
            >
              {deviceOptions.map((option) => {
                const selected = values.device === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setValues((prev) => ({ ...prev, device: option.value }))}
                    className={`rounded-lg border px-3 py-2.5 text-left text-sm leading-snug transition ${
                      selected
                        ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white"
                        : "border-[color:var(--border)] bg-[color:var(--bg-muted)] text-[color:var(--ink)] hover:border-[color:var(--ink)]"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
            {showProblem("device") ? (
              <p id="repair-device-error" className="mt-2 text-sm font-medium text-[color:var(--accent)]">
                {problems.device}
              </p>
            ) : null}
          </div>

          <label className="block">
            <span className={labelClass} style={showProblem("message") ? invalidLabelStyle : undefined}>
              Was ist das Problem?
            </span>
            <textarea
              id="repair-message"
              className={`${fieldClass} resize-y`}
              style={showProblem("message") ? invalidFieldStyle : undefined}
              rows={3}
              value={values.message}
              onChange={update("message")}
              onBlur={markTouched("message")}
              placeholder="Was passiert? Gibt es einen Fehlercode?"
              aria-invalid={showProblem("message")}
              aria-describedby={showProblem("message") ? "repair-message-error" : undefined}
              required
            />
            {showProblem("message") ? (
              <p id="repair-message-error" className="mt-1.5 text-sm font-medium text-[color:var(--accent)]">
                {problems.message}
              </p>
            ) : null}
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
              <span className={labelClass} style={showProblem("street") ? invalidLabelStyle : undefined}>
                Straße &amp; Nr.
              </span>
              <input
                id="repair-street"
                className={fieldClass}
                style={showProblem("street") ? invalidFieldStyle : undefined}
                value={values.street}
                onChange={update("street")}
                onBlur={markTouched("street")}
                placeholder="Musterstraße 1/6"
                autoComplete="street-address"
                aria-invalid={showProblem("street")}
                aria-describedby={showProblem("street") ? "repair-street-error" : undefined}
                required
              />
              {showProblem("street") ? (
                <p id="repair-street-error" className="mt-1.5 text-sm font-medium text-[color:var(--accent)]">
                  {problems.street}
                </p>
              ) : null}
            </label>
            <label className="block">
              <span className={labelClass} style={showProblem("city") ? invalidLabelStyle : undefined}>
                PLZ &amp; Ort
              </span>
              <input
                id="repair-city"
                className={fieldClass}
                style={showProblem("city") ? invalidFieldStyle : undefined}
                value={values.city}
                onChange={update("city")}
                onBlur={markTouched("city")}
                placeholder="1210 Wien"
                autoComplete="address-level2"
                aria-invalid={showProblem("city")}
                aria-describedby={showProblem("city") ? "repair-city-error" : undefined}
                required
              />
              {showProblem("city") ? (
                <p id="repair-city-error" className="mt-1.5 text-sm font-medium text-[color:var(--accent)]">
                  {problems.city}
                </p>
              ) : null}
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
              <span className={labelClass} style={showProblem("name") ? invalidLabelStyle : undefined}>
                Name
              </span>
              <input
                id="repair-name"
                className={fieldClass}
                style={showProblem("name") ? invalidFieldStyle : undefined}
                value={values.name}
                onChange={update("name")}
                onBlur={markTouched("name")}
                placeholder="Vor- und Nachname"
                autoComplete="name"
                aria-invalid={showProblem("name")}
                aria-describedby={showProblem("name") ? "repair-name-error" : undefined}
                required
              />
              {showProblem("name") ? (
                <p id="repair-name-error" className="mt-1.5 text-sm font-medium text-[color:var(--accent)]">
                  {problems.name}
                </p>
              ) : null}
            </label>
            <label className="block">
              <span className={labelClass} style={showProblem("phone") ? invalidLabelStyle : undefined}>
                Telefonnummer
              </span>
              <input
                id="repair-phone"
                className={fieldClass}
                style={showProblem("phone") ? invalidFieldStyle : undefined}
                type="tel"
                value={values.phone}
                onChange={update("phone")}
                onBlur={markTouched("phone")}
                placeholder="01 234 56 78"
                autoComplete="tel"
                aria-invalid={showProblem("phone")}
                aria-describedby={showProblem("phone") ? "repair-phone-error" : undefined}
                required
              />
              {showProblem("phone") ? (
                <p id="repair-phone-error" className="mt-1.5 text-sm font-medium text-[color:var(--accent)]">
                  {problems.phone}
                </p>
              ) : null}
            </label>
            <label className="block">
              <span className={labelClass} style={showProblem("email") ? invalidLabelStyle : undefined}>
                E-Mail-Adresse
              </span>
              <input
                id="repair-email"
                className={fieldClass}
                style={showProblem("email") ? invalidFieldStyle : undefined}
                type="email"
                value={values.email}
                onChange={update("email")}
                onBlur={markTouched("email")}
                placeholder="name@example.at"
                autoComplete="email"
                aria-invalid={showProblem("email")}
                aria-describedby={showProblem("email") ? "repair-email-error" : undefined}
                required
              />
              {showProblem("email") ? (
                <p id="repair-email-error" className="mt-1.5 text-sm font-medium text-[color:var(--accent)]">
                  {problems.email}
                </p>
              ) : null}
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
            Bitte die rot markierten Felder prüfen.
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

"use client";

import Link from "next/link";
import { useState } from "react";
import { trackConversion } from "./analytics";

type RequestType = "reparatur" | "anliegen" | "ersatzteile";

type ContactFormProps = {
  title?: string;
  eyebrow?: string;
  includeCustomerType?: boolean;
  includeModel?: boolean;
  className?: string;
  phoneHref: string;
  defaultRequestType?: RequestType;
  lockRequestType?: boolean;
};

type SubmitState = {
  status: "idle" | "success" | "error";
  message: string;
};

const fieldClass =
  "mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-muted)] px-4 py-3 text-[0.95rem] text-[color:var(--ink)] outline-none transition focus:border-[color:var(--ink)] focus:bg-white focus:ring-2 focus:ring-[color:var(--ink)]/10 placeholder:font-light placeholder:text-[color:var(--muted-soft)]";

const labelClass = "block text-sm font-medium text-[color:var(--ink)]";
const optionalClass = "font-normal text-[color:var(--muted-soft)]";

const requestOptions: { value: RequestType; label: string; icon: React.ReactNode }[] = [
  {
    value: "reparatur",
    label: "Reparatur",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.5 5.5a3.5 3.5 0 0 0-4.8 4.3l-5 5a1.8 1.8 0 0 0 2.5 2.5l5-5a3.5 3.5 0 0 0 4.3-4.8l-2 2-2-2 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    value: "anliegen",
    label: "Anliegen",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5h16v11H8l-4 3V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    value: "ersatzteile",
    label: "Ersatzteile",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M4 7.5 12 12l8-4.5M12 12v9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )
  }
];

const copyByType: Record<
  RequestType,
  { description: string; messageLabel: string; messagePlaceholder: string; submit: string }
> = {
  reparatur: {
    description:
      "Buchen Sie einen Reparaturtermin. Wir melden uns telefonisch zur Abstimmung — meist innerhalb eines Werktags.",
    messageLabel: "Fehlerbeschreibung",
    messagePlaceholder: "Was passiert? Gibt es einen Fehlercode? Wo steht das Gerät?",
    submit: "Reparaturtermin anfragen"
  },
  anliegen: {
    description:
      "Fragen, Anliegen oder Beschwerden — schreiben Sie uns, wir melden uns zeitnah zurück.",
    messageLabel: "Ihr Anliegen",
    messagePlaceholder: "Ihre Frage, Ihr Anliegen oder Ihre Rückmeldung …",
    submit: "Anliegen senden"
  },
  ersatzteile: {
    description:
      "Nennen Sie Gerät, Marke und das benötigte Teil — wir identifizieren das passende Originalteil.",
    messageLabel: "Benötigtes Teil / Fehlerbild",
    messagePlaceholder: "Welches Teil benötigen Sie? Marke, Modell, Fehlerbild …",
    submit: "Ersatzteil anfragen"
  }
};

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

export default function ContactForm({
  title = "Anfrage senden",
  eyebrow = "Anfrageformular",
  includeCustomerType = true,
  includeModel = false,
  className = "",
  phoneHref,
  defaultRequestType = "reparatur",
  lockRequestType = false
}: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestType, setRequestType] = useState<RequestType>(defaultRequestType);

  const copy = copyByType[requestType];
  const isParts = requestType === "ersatzteile";
  const showDevice = requestType !== "anliegen";
  const forwardToParts = isParts && !lockRequestType;

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
      trackConversion("form", { source: "contact_form", request_type: requestType });
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
        <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]">
          {copy.description}
        </p>
      </div>

      {!lockRequestType ? (
        <div className="mt-8">
          <span className="block text-sm font-medium text-[color:var(--ink)]">Worum geht es?</span>
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {requestOptions.map((option) => {
              const active = option.value === requestType;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setRequestType(option.value);
                    setSubmitState({ status: "idle", message: "" });
                  }}
                  aria-pressed={active}
                  className={`flex flex-col items-center gap-2.5 rounded-xl border p-3.5 text-center transition-colors duration-200 ${
                    active
                      ? "border-[color:var(--ink)] bg-[color:var(--accent-soft)]"
                      : "border-[color:var(--border)] bg-white hover:border-[color:var(--border-strong)]"
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-lg transition-colors duration-200 ${
                      active
                        ? "bg-[color:var(--accent)] text-white"
                        : "bg-[color:var(--bg-muted)] text-[color:var(--muted)]"
                    }`}
                  >
                    {option.icon}
                  </span>
                  <span
                    className={`text-[0.82rem] font-medium leading-none ${
                      active ? "text-[color:var(--ink)]" : "text-[color:var(--muted)]"
                    }`}
                  >
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {forwardToParts ? (
        <div className="mt-7 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-muted)] p-6 sm:p-8">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--accent)] text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M4 7.5 12 12l8-4.5M12 12v9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="font-display mt-5 text-xl font-normal tracking-tight text-[color:var(--ink)]">
            Ersatzteil bestellen?
          </p>
          <p className="mt-2 text-sm font-light leading-relaxed text-[color:var(--muted)]">
            Für Ersatzteile geht es auf unserer Ersatzteile-Seite weiter. Dort nennen Sie Gerät,
            Marke und das benötigte Teil — wir kümmern uns um die Beschaffung.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/ersatzteile"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--accent)]"
            >
              Zur Ersatzteile-Seite
              <ArrowIcon />
            </Link>
            <a
              href={`tel:${phoneHref}`}
              onClick={() => trackConversion("call", { source: "contact_form" })}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[color:var(--border)] px-5 py-3 text-sm font-medium text-[color:var(--ink)] transition hover:border-[color:var(--ink)]"
            >
              <PhoneIcon />
              Lieber anrufen
            </a>
          </div>
        </div>
      ) : (
        <>
          <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <input type="hidden" name="requestType" value={requestType} />

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Name oder Firma</span>
              <input className={fieldClass} name="name" placeholder="Max Mustermann GmbH" required />
            </label>
            <label className="block">
              <span className={labelClass}>Telefonnummer</span>
              <input className={fieldClass} name="phone" type="tel" placeholder="01 234 56 78" required />
            </label>
            <label className={`block ${includeCustomerType ? "" : "sm:col-span-2"}`}>
              <span className={labelClass}>E-Mail-Adresse</span>
              <input className={fieldClass} name="email" type="email" placeholder="name@example.at" required />
            </label>
            {includeCustomerType ? (
              <label className="block">
                <span className={labelClass}>Kundentyp</span>
                <select className={fieldClass} name="customerType">
                  <option>Privatkunde</option>
                  <option>Geschäftskunde</option>
                  <option>Hausverwaltung</option>
                </select>
              </label>
            ) : null}
            {showDevice ? (
              <>
                <label className="block">
                  <span className={labelClass}>Straße &amp; Nr.</span>
                  <input className={fieldClass} name="street" placeholder="Musterstraße 1/6" required />
                </label>
                <label className="block">
                  <span className={labelClass}>PLZ &amp; Ort</span>
                  <input className={fieldClass} name="city" placeholder="1210 Wien" required />
                </label>
              </>
            ) : null}
            {showDevice ? (
              <label className={`block ${includeModel ? "" : "sm:col-span-2"}`}>
                <span className={labelClass}>Gerät</span>
                <input
                  className={fieldClass}
                  name="device"
                  placeholder="Waschmaschine, Geschirrspüler ..."
                  required
                />
              </label>
            ) : null}
            {showDevice && includeModel ? (
              <label className="block">
                <span className={labelClass}>
                  Marke &amp; Modell <span className={optionalClass}>· optional</span>
                </span>
                <input className={fieldClass} name="model" placeholder="Bosch, Miele, Siemens ..." />
              </label>
            ) : null}
            {requestType === "reparatur" ? (
              <>
                <label className="block">
                  <span className={labelClass}>Dringlichkeit</span>
                  <select className={fieldClass} name="urgency">
                    <option>Akuter Ausfall – möglichst schnell</option>
                    <option>In den nächsten Tagen</option>
                    <option>Zeitlich flexibel</option>
                  </select>
                </label>
                <label className="block">
                  <span className={labelClass}>
                    Wunschtermin <span className={optionalClass}>· optional</span>
                  </span>
                  <input
                    className={fieldClass}
                    name="preferredTime"
                    placeholder="z. B. werktags vormittags ..."
                  />
                </label>
              </>
            ) : null}
          </div>

          <label className="mt-5 block">
            <span className={labelClass}>{copy.messageLabel}</span>
            <textarea
              className={`${fieldClass} resize-y`}
              name="message"
              rows={includeModel ? 6 : 5}
              placeholder={copy.messagePlaceholder}
              required
            />
          </label>

          <div className="mt-7 flex flex-col gap-5">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[color:var(--accent)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird gesendet …" : copy.submit}
              {!isSubmitting ? <ArrowIcon /> : null}
            </button>

            <div className="flex flex-col gap-3 border-t border-[color:var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-light leading-relaxed text-[color:var(--muted)] sm:max-w-[18rem]">
                Übermittlung per E-Mail. Bei dringenden Ausfällen bitte direkt anrufen.
              </p>
              <a
                href={`tel:${phoneHref}`}
                onClick={() => trackConversion("call", { source: "contact_form" })}
                className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--ink)] transition hover:text-[color:var(--accent)]"
              >
                <PhoneIcon />
                Lieber anrufen
              </a>
            </div>
          </div>
        </>
      )}

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

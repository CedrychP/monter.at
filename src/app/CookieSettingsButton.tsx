"use client";

import { OPEN_CONSENT_SETTINGS_EVENT } from "./consentMode";

type CookieSettingsButtonProps = {
  className?: string;
};

export default function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_SETTINGS_EVENT))}
    >
      Cookie Einstellungen
    </button>
  );
}

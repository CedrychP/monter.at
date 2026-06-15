"use client";

type CookieSettingsButtonProps = {
  className?: string;
};

export default function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("tcc:open-cookie-settings"))}
    >
      Cookie Einstellungen
    </button>
  );
}

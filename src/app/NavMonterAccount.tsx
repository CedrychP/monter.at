"use client";

import Link from "next/link";

type NavMonterAccountProps = {
  variant?: "dark" | "light";
  className?: string;
  onNavigate?: () => void;
};

const accountLinks = [
  { label: "Anmelden", href: "/kontakt" },
  { label: "Registrieren", href: "/kontakt" }
];

export default function NavMonterAccount({
  variant = "dark",
  className = "",
  onNavigate
}: NavMonterAccountProps) {
  const isDark = variant === "dark";

  return (
    <div className={className}>
      {isDark ? (
        <>
          <p className="nav-dropdown-eyebrow">Monter Konto</p>
          <div className="nav-dropdown-list">
            {accountLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onNavigate}
                className="nav-dropdown-link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
            Monter Konto
          </p>
          <div className="mt-2 grid gap-1">
            {accountLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onNavigate}
                className="block py-2 text-sm font-medium tracking-tight text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

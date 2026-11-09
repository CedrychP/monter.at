import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "../siteConfig";

export function EnglishFrame({
  eyebrow,
  title,
  lede,
  children
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <section className="border-b border-[color:var(--border)] bg-white">
        <div className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20">
          <p className="cap-line tracking-eyebrow text-[color:var(--accent)]">{eyebrow}</p>
          <h1 className="font-display mt-6 max-w-4xl text-balance text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] font-light leading-relaxed text-[color:var(--muted)]">{lede}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary">
              <span data-phone-number>{siteConfig.phoneDisplay}</span>
            </a>
            <Link href="/en/contact" className="btn-ghost">
              Request a visit
            </Link>
          </div>
          <p className="mt-4 text-sm font-light text-[color:var(--muted)]">A request is not yet an order.</p>
        </div>
      </section>
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">{children}</div>
    </main>
  );
}

export function EnglishProse({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl space-y-5 text-[1.05rem] font-light leading-relaxed text-[color:var(--ink)]">{children}</div>;
}

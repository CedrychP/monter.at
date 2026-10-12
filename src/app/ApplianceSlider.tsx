"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ApplianceItem = {
  title: string;
  image: string;
  href: string;
};

export default function ApplianceSlider({
  items,
  variant = "portrait"
}: {
  items: ApplianceItem[];
  variant?: "portrait" | "landscape";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isLandscape = variant === "landscape";

  const scrollByCard = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const cardWidth = isLandscape
    ? "w-[86%] sm:w-[58%] lg:w-[42%] xl:w-[32%]"
    : "w-[82%] sm:w-[46%] lg:w-[31%] xl:w-[23.5%]";
  const cardAspect = isLandscape ? "aspect-[4/3]" : "aspect-[3/4]";
  const sizes = isLandscape
    ? "(min-width: 1280px) 32vw, (min-width: 1024px) 42vw, (min-width: 640px) 58vw, 86vw"
    : "(min-width: 1280px) 24vw, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 78vw";

  return (
    <div className="relative -mx-5 px-5 sm:mx-0 sm:px-0">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            data-card
            className={`group relative ${cardAspect} ${cardWidth} flex-none snap-start overflow-hidden rounded-sm bg-[color:var(--ink)]`}
          >
            <Image
              src={item.image}
              alt={`${item.title} Reparatur`}
              fill
              sizes={sizes}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            {isLandscape && (
              <span className="absolute left-5 top-4 font-display text-sm font-medium tracking-[0.18em] text-[color:var(--accent-on-dark)]">
                0{index + 1}
              </span>
            )}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
              <h3 className="font-display text-lg font-medium tracking-tight text-white sm:text-xl">
                {item.title}
              </h3>
              <span className="grid h-9 w-9 flex-none place-items-center rounded-full border border-white/45 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[color:var(--ink)]">
                <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Zurück"
          className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--ink)] transition-all duration-300 hover:scale-[1.06] hover:border-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white active:scale-95"
        >
          <svg width="17" height="17" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Weiter"
          className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--ink)] transition-all duration-300 hover:scale-[1.06] hover:border-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white active:scale-95"
        >
          <svg width="17" height="17" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

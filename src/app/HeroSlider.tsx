"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { trackConversion } from "./analytics";
import NavNewsletterSignup from "./NavNewsletterSignup";
import { siteConfig } from "./siteConfig";

const phoneHref = siteConfig.phoneHref;

const SLIDE_DURATION = 6500;

const applianceImage =
  "https://images.unsplash.com/photo-1580253249119-e953161ee30d?auto=format&fit=crop&w=2400&q=85";
const garageImage =
  "https://images.unsplash.com/photo-1696992812596-3c0d4d2d1299?auto=format&fit=crop&w=2400&q=85";
const premiumImage =
  "https://images.unsplash.com/photo-1604242693257-8c3348cd7fb1?auto=format&fit=crop&w=2400&q=85";
const partsImage =
  "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=2400&q=85";
const newsletterImage =
  "https://images.unsplash.com/photo-1634549709262-508c47d4c229?auto=format&fit=crop&w=2400&q=85";

type SlideAction = {
  label: string;
  href: string;
  variant: "primary" | "ghost";
};

type Slide = {
  id: string;
  image: string;
  alt: string;
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  actions?: SlideAction[];
  newsletter?: boolean;
};

const slides: Slide[] = [
  {
    id: "haushalt",
    image: applianceImage,
    alt: "Haushaltsgeräte-Reparatur in Wien",
    eyebrow: "Haushaltsgeräte",
    title: (
      <>
        Haushaltsgeräte
        <span className="mt-1 block font-bold text-white">
          professionell <span className="hero-highlight">repariert.</span>
        </span>
      </>
    ),
    text: "Waschmaschine, Geschirrspüler, Kühl- und Gefriergeräte, Backofen, Herd und Trockner — markenoffen instand gesetzt mit klarer Diagnose und fairen Pauschalen.",
    actions: [
      { label: "Jetzt anrufen", href: `tel:${phoneHref}`, variant: "primary" },
      { label: "Geräte ansehen", href: "/#leistungen", variant: "ghost" }
    ]
  },
  {
    id: "garage",
    image: garageImage,
    alt: "Garagentor-Reparatur und Wartung in Wien",
    eyebrow: "Garagentore",
    title: (
      <>
        Garagentore,
        <span className="mt-1 block font-bold text-white">
          sicher in <span className="hero-highlight">Bewegung.</span>
        </span>
      </>
    ),
    text: "Federwechsel, Antriebsreparatur, Laufrollen und Wartung — für sichere, leise und zuverlässige Tore. Schnell vor Ort in Wien und Niederösterreich.",
    actions: [
      { label: "Jetzt anrufen", href: `tel:${phoneHref}`, variant: "primary" },
      { label: "Garagenservice ansehen", href: "/#garage", variant: "ghost" }
    ]
  },
  {
    id: "praemie",
    image: premiumImage,
    alt: "Geräte-Retter-Prämie von MONTER",
    eyebrow: "Geräte-Retter-Prämie",
    title: (
      <>
        Reparieren,
        <span className="mt-1 block font-bold text-white">
          bis&nbsp;zu <span className="hero-highlight">130&nbsp;€ zurück.</span>
        </span>
      </>
    ),
    text: "Mit der Geräte-Retter-Prämie sichern Sie sich 50 % Ihrer Reparaturkosten zurück — bis zu 130 € pro Reparatur. So lohnt sich Reparieren statt Neukauf, für Ihr Budget und die Umwelt.",
    actions: [
      { label: "Prämie sichern", href: "/kontakt", variant: "primary" },
      { label: "Mehr erfahren", href: "/#kontakt", variant: "ghost" }
    ]
  },
  {
    id: "ersatzteile",
    image: partsImage,
    alt: "Ersatzteile für Haushaltsgeräte",
    eyebrow: "Ersatzteile",
    title: (
      <>
        Ersatzteile,
        <span className="mt-1 block font-bold text-white">
          passend <span className="hero-highlight">verbaut.</span>
        </span>
      </>
    ),
    text: "Pumpe, Heizstab, Dichtung, Laufrolle oder Elektronik — wir besorgen und verbauen das passende Originalteil für Ihr Gerät oder Garagentor.",
    actions: [
      { label: "Zu den Ersatzteilen", href: "/ersatzteile", variant: "primary" },
      { label: "Teil anfragen", href: "/kontakt", variant: "ghost" }
    ]
  },
  {
    id: "newsletter",
    image: newsletterImage,
    alt: "MONTER GOLD Club — bald verfügbar",
    eyebrow: "Exklusiv · Demnächst",
    title: (
      <>
        Bald exklusiv
        <span className="mt-1 block font-bold text-gold-shimmer">
          MONTER GOLD Club
        </span>
      </>
    ),
    text: "Mitglieder-Vorteile, exklusive Prämien und Vorab-Zugang zum kommenden Gerätekauf — sichern Sie sich frühzeitig Ihren Platz.",
    newsletter: true
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotionRef = useRef(false);
  const count = slides.length;

  const goTo = useCallback(
    (next: number) => setIndex((current) => (next + count) % count),
    [count]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = media.matches;
    const update = () => {
      reducedMotionRef.current = media.matches;
    };
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotionRef.current) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % count);
    }, SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [index, paused, count]);

  return (
    <section
      className="relative isolate min-h-[580px] overflow-hidden bg-[color:var(--ink)] text-white max-lg:-mt-[3.75rem] sm:min-h-[720px] lg:min-h-[820px]"
      aria-roledescription="Karussell"
      aria-label="MONTER Leistungen"
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative min-h-[580px] sm:min-h-[720px] lg:min-h-[820px]">
        {slides.map((slide, slideIndex) => {
          const isActive = slideIndex === index;
          const Heading = slideIndex === 0 ? "h1" : "h2";
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="Folie"
              aria-label={`${slideIndex + 1} von ${count}`}
            >
              <div className="absolute inset-0 -z-10">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={slideIndex === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
              </div>

              <div className="mx-auto flex h-full min-h-[580px] w-full max-w-[88rem] items-end px-4 pb-28 pt-24 sm:min-h-[720px] sm:px-8 sm:pb-36 sm:pt-32 lg:min-h-[820px] lg:pb-40">
                <div className={`max-w-2xl ${isActive ? "reveal" : ""}`} key={`${slide.id}-${isActive}`}>
                  <p
                    className={`tracking-eyebrow ${
                      slide.newsletter
                        ? "cap-line-gold text-[color:var(--gold-on-dark)]"
                        : "cap-line-light text-white/75"
                    }`}
                  >
                    {slide.eyebrow}
                  </p>

                  <Heading
                    className="mt-5 text-balance text-[clamp(1.85rem,7.5vw,2.65rem)] font-medium leading-[1.06] tracking-[-0.03em] sm:mt-7 sm:text-[clamp(2.35rem,5.5vw,3.75rem)] lg:text-[clamp(3rem,4.5vw,5.1rem)]"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    {slide.title}
                  </Heading>

                  <p className="mt-4 max-w-xl text-pretty text-[0.98rem] font-normal leading-relaxed text-white/85 sm:mt-6 sm:text-[1.08rem] lg:text-[1.15rem]">
                    {slide.text}
                  </p>

                  {slide.newsletter ? (
                    <div className="mt-8 max-w-md">
                      <NavNewsletterSignup variant="dark" compact />
                      <p className="mt-3 text-xs font-normal leading-relaxed text-white/55">
                        Kostenlos anmelden — exklusiver Vorab-Zugang, jederzeit abbestellbar.
                      </p>
                    </div>
                  ) : slide.actions ? (
                    <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-4 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:gap-x-8 sm:gap-y-5">
                      {slide.actions.map((action, actionIndex) => {
                        const isPrimary = action.variant === "primary";
                        const className = isPrimary
                          ? "btn-on-dark"
                          : "link-arrow link-arrow--on-dark";
                        const content = isPrimary ? (
                          action.label
                        ) : (
                          <>
                            {action.label}
                            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                            </svg>
                          </>
                        );
                        return action.href.startsWith("tel:") ? (
                          <a
                            key={action.label}
                            href={action.href}
                            onClick={() => trackConversion("call", { source: "hero_slider" })}
                            className={className}
                            tabIndex={isActive ? 0 : -1}
                            style={{ animationDelay: `${actionIndex * 60}ms` }}
                          >
                            {content}
                          </a>
                        ) : (
                          <Link
                            key={action.label}
                            href={action.href}
                            className={className}
                            tabIndex={isActive ? 0 : -1}
                            style={{ animationDelay: `${actionIndex * 60}ms` }}
                          >
                            {content}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}

      </div>

      {/* Slider controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30">
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-4 pb-6 sm:px-8 sm:pb-10">
          <div className="pointer-events-auto flex min-w-0 flex-1 items-center gap-3 sm:gap-5">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/90 tabular-nums">
              {String(index + 1).padStart(2, "0")}
              <span className="text-white/40"> / {String(count).padStart(2, "0")}</span>
            </span>
            <div className="flex items-center gap-1" role="tablist" aria-label="Folien">
              {slides.map((slide, dotIndex) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={dotIndex === index}
                  aria-label={`${slide.eyebrow} anzeigen`}
                  onClick={() => goTo(dotIndex)}
                  className="group flex h-7 cursor-pointer items-center px-1"
                >
                  <span
                    className={`block h-[3px] rounded-full transition-all duration-300 ${
                      dotIndex === index
                        ? "w-9 bg-white"
                        : "w-4 bg-white/35 group-hover:bg-white/70"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="pointer-events-auto hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Vorherige Folie"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/25 bg-white/[0.06] text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.06] hover:border-white hover:bg-white hover:text-[color:var(--ink)] active:scale-95"
            >
              <svg width="17" height="17" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Nächste Folie"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/25 bg-white/[0.06] text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.06] hover:border-white hover:bg-white hover:text-[color:var(--ink)] active:scale-95"
            >
              <svg width="17" height="17" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
];

const comingSoonNoindex = { key: "X-Robots-Tag", value: "noindex, follow" };
const comingSoonPaths = ["/monter-gold", "/geraetekauf"];

const nextConfig: NextConfig = {
  experimental: {
    // CSS steckt im HTML, damit kein extra Stylesheet den ersten Render blockiert.
    inlineCss: true
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Das Logo traegt einen Cache-Buster (?v=mtime), deshalb muss der Pfad mit
    // Query-String ausdruecklich erlaubt sein, damit next/image ihn optimiert.
    localPatterns: [
      {
        pathname: "/assets/**"
      }
    ]
  },
  async headers() {
    return [
      ...comingSoonPaths.map((source) => ({
        source,
        headers: [...securityHeaders, comingSoonNoindex]
      })),
      {
        source: "/",
        headers: securityHeaders
      },
      {
        source: "/:path*",
        headers: securityHeaders
      }
    ];
  },
  async redirects() {
    return [
      // statusCode 301 statt permanent:true — Next würde sonst 308 senden.
      { source: "/leistungen", destination: "/haushaltsgeraete", statusCode: 301 },
      { source: "/leistungen/:slug", destination: "/haushaltsgeraete/:slug", statusCode: 301 },
      { source: "/garagentor-reparatur-wien", destination: "/garagentore", statusCode: 301 },
      { source: "/klimageraete-reparatur-wien", destination: "/klimageraete", statusCode: 301 },
      {
        source: "/einsatzgebiete/oberoesterreich/linz/:stadtteil",
        destination: "/einsatzgebiete/linz/:stadtteil",
        statusCode: 301
      },
      { source: "/einsatzgebiete/oberoesterreich/linz", destination: "/einsatzgebiete/linz", statusCode: 301 },
      { source: "/einsatzgebiete/oberoesterreich", destination: "/einsatzgebiete/linz", statusCode: 301 },
      { source: "/einsatzgebiete/oberoesterreich/:ort", destination: "/einsatzgebiete", statusCode: 301 },
      { source: "/einsatzgebiete/burgenland", destination: "/einsatzgebiete", statusCode: 301 },
      { source: "/einsatzgebiete/burgenland/:ort", destination: "/einsatzgebiete", statusCode: 301 },
      { source: "/einsatzgebiete/steiermark", destination: "/einsatzgebiete", statusCode: 301 },
      { source: "/einsatzgebiete/steiermark/:ort", destination: "/einsatzgebiete", statusCode: 301 },
      { source: "/einsatzgebiete/salzburg", destination: "/einsatzgebiete", statusCode: 301 },
      { source: "/einsatzgebiete/salzburg/:ort", destination: "/einsatzgebiete", statusCode: 301 },
      // Linz-Geräte vor den Hauptseiten, Marken-Kinder vor der Markenseite.
      { source: "/haushaltsgeraete/waschmaschine-reparatur-linz", destination: "/haushaltsgeraete/waschmaschine/linz", statusCode: 301 },
      { source: "/haushaltsgeraete/geschirrspueler-reparatur-linz", destination: "/haushaltsgeraete/geschirrspueler/linz", statusCode: 301 },
      { source: "/haushaltsgeraete/backofen-herd-reparatur-linz", destination: "/haushaltsgeraete/backofen-herd/linz", statusCode: 301 },
      { source: "/haushaltsgeraete/trockner-reparatur-linz", destination: "/haushaltsgeraete/trockner/linz", statusCode: 301 },
      { source: "/haushaltsgeraete/kuehlschrank-reparatur-linz", destination: "/haushaltsgeraete/kuehlschrank/linz", statusCode: 301 },
      { source: "/haushaltsgeraete/tiefkuehl-reparatur-linz", destination: "/haushaltsgeraete/tiefkuehl/linz", statusCode: 301 },
      { source: "/haushaltsgeraete/waschtrockner-reparatur-linz", destination: "/haushaltsgeraete/waschtrockner/linz", statusCode: 301 },
      { source: "/haushaltsgeraete/dunstabzug-reparatur-linz", destination: "/haushaltsgeraete/dunstabzug/linz", statusCode: 301 },
      { source: "/haushaltsgeraete/fernseher-reparatur-linz", destination: "/haushaltsgeraete/fernseher/linz", statusCode: 301 },
      { source: "/haushaltsgeraete/waschmaschine-reparatur-wien", destination: "/haushaltsgeraete/waschmaschine", statusCode: 301 },
      { source: "/haushaltsgeraete/geschirrspueler-reparatur-wien", destination: "/haushaltsgeraete/geschirrspueler", statusCode: 301 },
      { source: "/haushaltsgeraete/backofen-herd-reparatur-wien", destination: "/haushaltsgeraete/backofen-herd", statusCode: 301 },
      { source: "/haushaltsgeraete/trockner-reparatur-wien", destination: "/haushaltsgeraete/trockner", statusCode: 301 },
      { source: "/haushaltsgeraete/kuehlschrank-reparatur-wien", destination: "/haushaltsgeraete/kuehlschrank", statusCode: 301 },
      { source: "/haushaltsgeraete/tiefkuehl-reparatur-wien", destination: "/haushaltsgeraete/tiefkuehl", statusCode: 301 },
      { source: "/haushaltsgeraete/waschtrockner-reparatur-wien", destination: "/haushaltsgeraete/waschtrockner", statusCode: 301 },
      { source: "/haushaltsgeraete/dunstabzug-reparatur-wien", destination: "/haushaltsgeraete/dunstabzug", statusCode: 301 },
      { source: "/haushaltsgeraete/fernseher-reparatur-wien", destination: "/haushaltsgeraete/fernseher", statusCode: 301 },
      { source: "/marken/bosch-reparatur-wien/:geraet", destination: "/marken/bosch/:geraet", statusCode: 301 },
      { source: "/marken/miele-reparatur-wien/:geraet", destination: "/marken/miele/:geraet", statusCode: 301 },
      { source: "/marken/siemens-reparatur-wien/:geraet", destination: "/marken/siemens/:geraet", statusCode: 301 },
      { source: "/marken/aeg-reparatur-wien/:geraet", destination: "/marken/aeg/:geraet", statusCode: 301 },
      { source: "/marken/beko-reparatur-wien/:geraet", destination: "/marken/beko/:geraet", statusCode: 301 },
      { source: "/marken/gorenje-reparatur-wien/:geraet", destination: "/marken/gorenje/:geraet", statusCode: 301 },
      { source: "/marken/bauknecht-reparatur-wien/:geraet", destination: "/marken/bauknecht/:geraet", statusCode: 301 },
      { source: "/marken/bosch-reparatur-wien", destination: "/marken/bosch", statusCode: 301 },
      { source: "/marken/miele-reparatur-wien", destination: "/marken/miele", statusCode: 301 },
      { source: "/marken/siemens-reparatur-wien", destination: "/marken/siemens", statusCode: 301 },
      { source: "/marken/aeg-reparatur-wien", destination: "/marken/aeg", statusCode: 301 },
      { source: "/marken/beko-reparatur-wien", destination: "/marken/beko", statusCode: 301 },
      { source: "/marken/gorenje-reparatur-wien", destination: "/marken/gorenje", statusCode: 301 },
      { source: "/marken/bauknecht-reparatur-wien", destination: "/marken/bauknecht", statusCode: 301 },
      { source: "/garagentore/sektionaltor-reparatur-wien", destination: "/garagentore/sektionaltor", statusCode: 301 },
      { source: "/garagentore/schwingtor-rolltor-reparatur-wien", destination: "/garagentore/schwingtor-rolltor", statusCode: 301 },
      { source: "/garagentore/torantrieb-motor-reparatur-wien", destination: "/garagentore/torantrieb-motor", statusCode: 301 },
      { source: "/garagentore/federwechsel-wien", destination: "/garagentore/federwechsel", statusCode: 301 },
      { source: "/garagentore/laufrollen-schienen-wien", destination: "/garagentore/laufrollen-schienen", statusCode: 301 },
      { source: "/garagentore/wartung-sicherheitspruefung-wien", destination: "/garagentore/wartung-sicherheitspruefung", statusCode: 301 },
      { source: "/klimageraete/split-klimaanlage-wien", destination: "/klimageraete/split-klimaanlage", statusCode: 301 },
      { source: "/klimageraete/multi-split-anlage-wien", destination: "/klimageraete/multi-split-anlage", statusCode: 301 },
      { source: "/klimageraete/monoblock-klimageraet-wien", destination: "/klimageraete/monoblock-klimageraet", statusCode: 301 },
      { source: "/klimageraete/wartung-service-wien", destination: "/klimageraete/wartung-service", statusCode: 301 },
      { source: "/klimageraete/kaeltemittel-dichtheit-wien", destination: "/klimageraete/kaeltemittel-dichtheit", statusCode: 301 },
      { source: "/klimageraete/kompressor-reparatur-wien", destination: "/klimageraete/kompressor-reparatur", statusCode: 301 },
      { source: "/klimageraete/steuerung-elektronik-wien", destination: "/klimageraete/steuerung-elektronik", statusCode: 301 },
      { source: "/klimageraete/reinigung-entlueftung-wien", destination: "/klimageraete/reinigung-entlueftung", statusCode: 301 },
      { source: "/klimageraete/montage-installation-wien", destination: "/klimageraete/montage-installation", statusCode: 301 }
    ];
  }
};

export default nextConfig;

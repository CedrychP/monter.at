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
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
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
      { source: "/klimageraete-reparatur-wien", destination: "/klimageraete", statusCode: 301 }
    ];
  }
};

export default nextConfig;

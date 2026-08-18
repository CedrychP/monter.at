import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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

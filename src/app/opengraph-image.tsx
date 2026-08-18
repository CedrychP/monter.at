import { ImageResponse } from "next/og";
import { siteConfig } from "./siteConfig";

export const alt = "MONTER Reparatur & Service — Haushaltsgeräte, Klima und Garagentore in Wien";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#0a0a0a";
const accent = "#a8112a";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: ink,
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 6, backgroundColor: accent }} />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)"
            }}
          >
            Reparatur &amp; Service
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
            MONTER
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 40,
              lineHeight: 1.25,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 900
            }}
          >
            Haushaltsgeräte, Klimageräte und Garagentore — repariert in Wien und
            Niederösterreich.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: 28,
            fontSize: 28,
            color: "rgba(255,255,255,0.72)"
          }}
        >
          <div style={{ display: "flex" }}>monter.at</div>
          <div style={{ display: "flex", color: "#ffffff" }}>{siteConfig.phoneDisplay}</div>
        </div>
      </div>
    ),
    size
  );
}

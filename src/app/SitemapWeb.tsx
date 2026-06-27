"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { SitemapGroup, SitemapLink } from "./sitemapTree";

type SitemapWebProps = {
  groups: SitemapGroup[];
  home: SitemapLink;
};

const VIEW = 1000;
const CENTER = VIEW / 2;
const RING_RADII = [110, 195, 280, 350];
const NODE_RADIUS = 280;
const SPOKE_END = 350;

function polar(angleRad: number, radius: number) {
  return {
    x: CENTER + Math.cos(angleRad) * radius,
    y: CENTER + Math.sin(angleRad) * radius
  };
}

export default function SitemapWeb({ groups, home }: SitemapWebProps) {
  const [activeId, setActiveId] = useState(groups[0]?.id ?? "");

  const geometry = useMemo(() => {
    const count = groups.length;
    const sector = (Math.PI * 2) / count;

    return groups.map((group, index) => {
      const angle = -Math.PI / 2 + index * sector;
      const dir = polar(angle, 1);
      const node = polar(angle, NODE_RADIUS);
      const spokeEnd = polar(angle, SPOKE_END);
      const labelPoint = polar(angle, NODE_RADIUS + 30);

      const cos = Math.cos(angle);
      const anchor: "start" | "end" | "middle" =
        cos > 0.35 ? "start" : cos < -0.35 ? "end" : "middle";

      // Satelliten (Seiten des Bereichs) fächern sich entlang der Speiche auf.
      const satelliteCount = Math.min(group.links.length, 9);
      const span = sector * 0.42;
      const satellites = Array.from({ length: satelliteCount }, (_, i) => {
        const t = satelliteCount === 1 ? 0.5 : i / (satelliteCount - 1);
        const a = angle - span + t * span * 2;
        return polar(a, NODE_RADIUS + 56);
      });

      return { group, angle, dir, node, spokeEnd, labelPoint, anchor, satellites };
    });
  }, [groups]);

  const ringPolygons = useMemo(
    () =>
      RING_RADII.map((radius) =>
        geometry
          .map((g) => {
            const p = polar(g.angle, radius);
            return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
          })
          .join(" ")
      ),
    [geometry]
  );

  const active = groups.find((group) => group.id === activeId) ?? groups[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
      {/* Spinnennetz */}
      <div className="relative">
        <svg
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          className="h-auto w-full select-none"
          role="img"
          aria-label="Seitenstruktur als Netzdiagramm"
        >
          {/* Dekorative Netzfäden */}
          <g stroke="rgba(255,255,255,0.12)" fill="none" strokeWidth={1}>
            {ringPolygons.map((points, i) => (
              <polygon key={i} points={points} />
            ))}
            {geometry.map((g) => (
              <line key={g.group.id} x1={CENTER} y1={CENTER} x2={g.spokeEnd.x} y2={g.spokeEnd.y} />
            ))}
          </g>

          {/* Aktiver Bereich: hervorgehobene Speiche + Satellitenfäden */}
          {geometry
            .filter((g) => g.group.id === active?.id)
            .map((g) => (
              <g key={`active-${g.group.id}`}>
                <line
                  x1={CENTER}
                  y1={CENTER}
                  x2={g.node.x}
                  y2={g.node.y}
                  stroke="var(--accent)"
                  strokeWidth={1.6}
                />
                {g.satellites.map((s, i) => (
                  <g key={i}>
                    <line
                      x1={g.node.x}
                      y1={g.node.y}
                      x2={s.x}
                      y2={s.y}
                      stroke="rgba(255,96,115,0.5)"
                      strokeWidth={1}
                    />
                    <circle cx={s.x} cy={s.y} r={5} fill="var(--accent-on-dark)" />
                  </g>
                ))}
              </g>
            ))}

          {/* Gruppen-Knoten */}
          {geometry.map((g) => {
            const isActive = g.group.id === active?.id;
            return (
              <g key={`node-${g.group.id}`} className="cursor-pointer">
                <circle
                  cx={g.node.x}
                  cy={g.node.y}
                  r={isActive ? 13 : 9}
                  fill={isActive ? "var(--accent-on-dark)" : "#ffffff"}
                  stroke={isActive ? "var(--accent)" : "rgba(255,255,255,0.4)"}
                  strokeWidth={isActive ? 4 : 2}
                  onMouseEnter={() => setActiveId(g.group.id)}
                  onClick={() => setActiveId(g.group.id)}
                />
                <text
                  x={g.labelPoint.x}
                  y={g.labelPoint.y}
                  textAnchor={g.anchor}
                  dominantBaseline="middle"
                  fontSize={23}
                  fontWeight={isActive ? 600 : 400}
                  fill={isActive ? "#ffffff" : "rgba(255,255,255,0.62)"}
                  className="pointer-events-auto cursor-pointer"
                  onMouseEnter={() => setActiveId(g.group.id)}
                  onClick={() => setActiveId(g.group.id)}
                >
                  {g.group.label}
                </text>
              </g>
            );
          })}

          {/* Zentrum / Startseite */}
          <g>
            <circle cx={CENTER} cy={CENTER} r={40} fill="var(--accent)" />
            <circle cx={CENTER} cy={CENTER} r={40} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth={2} />
            <text
              x={CENTER}
              y={CENTER}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={22}
              fontWeight={600}
              fill="#ffffff"
            >
              Start
            </text>
          </g>
        </svg>

        {/* Unsichtbare Buttons für Tastatur-/Screenreader-Bedienung */}
        <div className="sr-only">
          <Link href={home.href}>{home.label}</Link>
          {groups.map((group) => (
            <button key={group.id} type="button" onClick={() => setActiveId(group.id)}>
              {group.label} anzeigen
            </button>
          ))}
        </div>
      </div>

      {/* Detailpanel des aktiven Bereichs */}
      <div aria-live="polite">
        {active ? (
          <div className="rounded-sm border border-white/12 bg-white/[0.03] p-6 sm:p-7">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-on-dark)]">
              Bereich
            </p>
            <h3 className="font-display mt-3 text-2xl font-normal tracking-tight text-white sm:text-3xl">
              {active.label}
            </h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-white/60">
              {active.description}
            </p>

            <div className="mt-6 grid gap-1.5">
              {active.links.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-3 rounded-sm border border-transparent px-3 py-2 text-sm font-normal text-white/85 transition hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
                  >
                    <span className="min-w-0 truncate">{link.label}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="flex-none text-white/35 transition group-hover:translate-x-0.5 group-hover:text-[color:var(--accent-on-dark)]"
                    >
                      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  {link.children && link.children.length > 0 ? (
                    <div className="ml-3 mt-1 flex flex-wrap gap-x-3 gap-y-1 border-l border-white/10 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-xs font-light text-white/45 transition hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

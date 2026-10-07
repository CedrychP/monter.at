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
const NODE_RADIUS = 248;
const LABEL_RADIUS = 330;
const RINGS = [82, 164, NODE_RADIUS];

function polar(angleRad: number, radius: number) {
  return {
    x: CENTER + Math.cos(angleRad) * radius,
    y: CENTER + Math.sin(angleRad) * radius
  };
}

export default function SitemapWeb({ groups, home }: SitemapWebProps) {
  const [activeId, setActiveId] = useState(groups[0]?.id ?? "");

  const geometry = useMemo(() => {
    const sector = (Math.PI * 2) / groups.length;

    return groups.map((group, index) => {
      const angle = -Math.PI / 2 + index * sector;
      const cos = Math.cos(angle);
      const anchor: "start" | "middle" | "end" =
        cos > 0.4 ? "start" : cos < -0.4 ? "end" : "middle";

      return {
        group,
        angle,
        node: polar(angle, NODE_RADIUS),
        label: polar(angle, LABEL_RADIUS),
        anchor
      };
    });
  }, [groups]);

  const rings = useMemo(
    () =>
      RINGS.map((radius) =>
        geometry
          .map((item) => {
            const point = polar(item.angle, radius);
            return `${point.x.toFixed(1)},${point.y.toFixed(1)}`;
          })
          .join(" ")
      ),
    [geometry]
  );

  const active = groups.find((group) => group.id === activeId) ?? groups[0];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div>
        <svg
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          className="mx-auto h-auto w-full max-w-[40rem] select-none"
          role="img"
          aria-label="Bereiche der Website"
          style={{ fontFamily: "inherit" }}
        >
          <g fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth={1}>
            {rings.map((points) => (
              <polygon key={points} points={points} />
            ))}
            {geometry.map((item) => (
              <line
                key={item.group.id}
                x1={CENTER}
                y1={CENTER}
                x2={item.node.x}
                y2={item.node.y}
              />
            ))}
          </g>

          {geometry
            .filter((item) => item.group.id === active?.id)
            .map((item) => (
              <line
                key={`active-${item.group.id}`}
                x1={CENTER}
                y1={CENTER}
                x2={item.node.x}
                y2={item.node.y}
                stroke="var(--accent)"
                strokeWidth={1.6}
              />
            ))}

          {geometry.map((item) => {
            const isActive = item.group.id === active?.id;
            return (
              <g key={item.group.id} className="cursor-pointer" onMouseEnter={() => setActiveId(item.group.id)}>
                <circle
                  cx={item.node.x}
                  cy={item.node.y}
                  r={36}
                  fill="transparent"
                  onClick={() => setActiveId(item.group.id)}
                />
                <circle
                  cx={item.node.x}
                  cy={item.node.y}
                  r={isActive ? 11 : 7}
                  fill={isActive ? "var(--accent-on-dark)" : "#ffffff"}
                  stroke={isActive ? "var(--accent)" : "rgba(255,255,255,0.45)"}
                  strokeWidth={isActive ? 4 : 2}
                  className="pointer-events-none"
                />
                <text
                  x={item.label.x}
                  y={item.label.y}
                  textAnchor={item.anchor}
                  dominantBaseline="middle"
                  fontSize={22}
                  fontWeight={isActive ? 600 : 400}
                  fill={isActive ? "#ffffff" : "rgba(255,255,255,0.62)"}
                  onClick={() => setActiveId(item.group.id)}
                >
                  {item.group.label}
                </text>
              </g>
            );
          })}

          <Link href={home.href} aria-label={home.label}>
            <circle cx={CENTER} cy={CENTER} r={42} fill="var(--accent)" />
            <text
              x={CENTER}
              y={CENTER}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={20}
              fontWeight={600}
              fill="#ffffff"
              className="pointer-events-none"
            >
              Start
            </text>
          </Link>
        </svg>

        <div className="sr-only">
          {groups.map((group) => (
            <button key={group.id} type="button" onClick={() => setActiveId(group.id)}>
              {group.label} anzeigen
            </button>
          ))}
        </div>
      </div>

      <div aria-live="polite">
        {active ? (
          <div className="border border-white/12 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent-on-dark)]">
              Bereich
            </p>
            <h2 className="font-display mt-3 text-3xl font-light tracking-tight text-white sm:text-4xl">
              <Link href={active.href} className="transition hover:text-[color:var(--accent-on-dark)]">
                {active.label}
              </Link>
            </h2>
            <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/60">
              {active.description}
            </p>
            <ul className="mt-7 grid gap-1">
              {active.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-4 border border-transparent px-3 py-2 text-sm text-white/85 transition hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
                  >
                    <span className="min-w-0">{link.label}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0 text-white/35 transition group-hover:translate-x-0.5 group-hover:text-[color:var(--accent-on-dark)]"
                    >
                      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

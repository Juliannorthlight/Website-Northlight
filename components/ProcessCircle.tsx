"use client";

import { useEffect, useRef, useState } from "react";
import { processCycle } from "@/lib/content";

// --- Geometry (SVG viewBox 0..100, container is square so % == viewBox units) ---
const CENTER = 50;
const R = 32; // ring radius
const N = processCycle.length; // 5
const DEG = Math.PI / 180;
const angle = (i: number) => (-90 + (360 / N) * i) * DEG; // start top, clockwise
const posX = (a: number) => CENTER + R * Math.cos(a);
const posY = (a: number) => CENTER + R * Math.sin(a);

const nodes = processCycle.map((_, i) => {
  const a = angle(i);
  return { x: posX(a), y: posY(a) };
});

const SEG_LEN = (2 * Math.PI * R) / N;

// One arc segment (minor arc, clockwise) between each node and the next.
const segments = nodes.map((n, i) => {
  const next = nodes[(i + 1) % N];
  return `M ${n.x.toFixed(2)} ${n.y.toFixed(2)} A ${R} ${R} 0 0 1 ${next.x.toFixed(2)} ${next.y.toFixed(2)}`;
});

// Arrowhead at the midpoint of each segment, rotated to the clockwise tangent.
const arrows = nodes.map((_, i) => {
  const am = angle(i) + (360 / N / 2) * DEG;
  const x = posX(am);
  const y = posY(am);
  const rot = (Math.atan2(Math.cos(am), -Math.sin(am)) * 180) / Math.PI;
  return { x, y, rot };
});

// Label placement per node (fixed 5), positioned OUTSIDE the ring so nothing
// crosses the line: top above, sides beside, bottom two below-and-outward.
const LABELS = [
  { left: "50%", top: "8%", cls: "-translate-x-1/2 -translate-y-1/2 w-32 text-center" },
  { left: "83%", top: "39.4%", cls: "-translate-y-1/2 w-24 text-left" },
  { left: "72%", top: "90%", cls: "-translate-x-1/2 w-32 text-center" },
  { left: "28%", top: "90%", cls: "-translate-x-1/2 w-32 text-center" },
  { left: "17%", top: "39.4%", cls: "-translate-x-full -translate-y-1/2 w-24 text-right" },
];

export function ProcessCircle() {
  const [active, setActive] = useState(0);
  const [drawn, setDrawn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDrawn(true);
      return;
    }
    const el = ref.current;
    if (!el) {
      setDrawn(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setDrawn(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    const t = setTimeout(() => setDrawn(true), 1600); // safety net
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, []);

  const stage = processCycle[active];

  return (
    <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
      {/* ---- Circle diagram (the star) ---- */}
      <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[520px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          {/* faint full-circle track */}
          <circle cx={CENTER} cy={CENTER} r={R} fill="none" stroke="#E7EBF0" strokeWidth="0.5" />
          {/* animated navy arcs, drawn one after another on scroll */}
          {segments.map((d, i) => (
            <path
              key={d}
              d={d}
              fill="none"
              stroke="#0B1B2E"
              strokeWidth="1.4"
              strokeLinecap="round"
              style={{
                strokeDasharray: SEG_LEN,
                strokeDashoffset: drawn ? 0 : SEG_LEN,
                transition: `stroke-dashoffset 620ms ease-out ${i * 240}ms`,
              }}
            />
          ))}
          {/* arrowheads forming after each arc */}
          {arrows.map((h, i) => (
            <path
              key={`${h.x}-${h.y}`}
              d="M -1.9 -1.7 L 1.9 0 L -1.9 1.7 Z"
              fill="#0B1B2E"
              transform={`translate(${h.x.toFixed(2)} ${h.y.toFixed(2)}) rotate(${h.rot.toFixed(1)})`}
              style={{
                opacity: drawn ? 1 : 0,
                transition: `opacity 300ms ease-out ${i * 240 + 380}ms`,
              }}
            />
          ))}
        </svg>

        {/* Centre — big faint active number (changes on click) */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="font-serif text-[72px] font-semibold leading-none text-ink/10">
            {stage.n}
          </span>
        </div>

        {/* Number nodes */}
        {nodes.map((n, i) => {
          const isActive = i === active;
          return (
            <button
              key={processCycle[i].title}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              aria-label={processCycle[i].title}
              className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 font-serif text-[15px] font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-steel"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                ...(isActive
                  ? { background: "#3F6C94", borderColor: "#3F6C94", color: "#fff", transform: "translate(-50%,-50%) scale(1.12)", boxShadow: "0 0 0 6px rgba(63,108,148,0.16)" }
                  : { background: "#0B1B2E", borderColor: "#0B1B2E", color: "#fff" }),
              }}
            >
              {processCycle[i].n}
            </button>
          );
        })}

        {/* Labels (outside the ring) */}
        {processCycle.map((s, i) => {
          const L = LABELS[i];
          const isActive = i === active;
          return (
            <button
              key={`lbl-${s.title}`}
              type="button"
              onClick={() => setActive(i)}
              tabIndex={-1}
              className={`absolute text-[12.5px] font-medium leading-tight transition-colors ${L.cls} ${
                isActive ? "text-ink" : "text-inksoft hover:text-ink"
              }`}
              style={{ left: L.left, top: L.top }}
            >
              {s.title}
            </button>
          );
        })}
      </div>

      {/* ---- Detail panel (lighter, secondary to the circle) ---- */}
      <div className="border-l-2 border-l-steel pl-6 md:pl-7">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-steeldeep">
          Stage {stage.n}
        </span>
        <h3 className="mt-2 text-2xl text-ink md:text-[26px]">{stage.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-inksoft">{stage.summary}</p>
        <ul className="mt-5 space-y-3">
          {stage.detail.map((d) => (
            <li key={d} className="relative pl-5 text-[14px] leading-relaxed text-inksoft">
              <span className="absolute left-0 top-[9px] h-px w-2.5 bg-steel" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

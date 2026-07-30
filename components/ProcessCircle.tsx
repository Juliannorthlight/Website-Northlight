"use client";

import { useEffect, useRef, useState } from "react";
import { processCycle } from "@/lib/content";

// Node centre positions as a percentage of the square container.
// Five stages evenly spaced around a ring, starting at the top, going clockwise.
const NODES = [
  { left: 50, top: 16 },
  { left: 82.3, top: 39.5 },
  { left: 70, top: 77.5 },
  { left: 30, top: 77.5 },
  { left: 17.7, top: 39.5 },
];

const RING_R = 34; // radius in the 100x100 SVG viewBox
const CIRC = 2 * Math.PI * RING_R;

export function ProcessCircle() {
  const [active, setActive] = useState(0);
  const [drawn, setDrawn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reduced motion → reveal immediately, no draw.
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
    // Safety net: never leave the diagram hidden if the observer doesn't fire.
    const t = setTimeout(() => setDrawn(true), 1400);
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, []);

  const stage = processCycle[active];

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      {/* Circle diagram */}
      <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[440px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          {/* Track */}
          <circle cx="50" cy="50" r={RING_R} fill="none" stroke="#DCE2E8" strokeWidth="0.5" />
          {/* Drawn ring — animates clockwise from the top on scroll into view */}
          <circle
            cx="50"
            cy="50"
            r={RING_R}
            fill="none"
            stroke="#5E8DB8"
            strokeWidth="1"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            style={{
              strokeDasharray: CIRC,
              strokeDashoffset: drawn ? 0 : CIRC,
              transition: "stroke-dashoffset 1300ms ease-out",
            }}
          />
        </svg>

        {/* Centre cycle mark */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="block text-2xl leading-none text-steel">&#8635;</span>
          <span className="mt-1.5 block text-[10px] uppercase tracking-[0.14em] text-muted">
            Continuous
            <br />
            cycle
          </span>
        </div>

        {/* Stage nodes */}
        {processCycle.map((s, i) => {
          const pos = NODES[i];
          const isActive = i === active;
          return (
            <button
              key={s.title}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className="absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center focus:outline-none"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                opacity: drawn ? 1 : 0,
                transition: `opacity 500ms ease-out ${250 + i * 130}ms`,
              }}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-[13px] font-semibold transition-colors ${
                  isActive
                    ? "border-steel bg-steel text-white"
                    : "border-line bg-white text-steeldeep group-hover:border-steel"
                }`}
              >
                {s.n}
              </span>
              <span
                className={`text-[12px] font-medium leading-tight transition-colors ${
                  isActive ? "text-ink" : "text-inksoft"
                }`}
              >
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="border-l-2 border-l-steel bg-mist p-7 md:p-9">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-steeldeep">
          Stage {stage.n}
        </span>
        <h3 className="mt-2 text-2xl text-ink md:text-[28px]">{stage.title}</h3>
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

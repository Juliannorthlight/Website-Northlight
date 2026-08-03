"use client";

import { useEffect, useRef, useState } from "react";

// A per-section accent rail pinned to one edge of the content column. Its blue
// fill draws from the top of the section toward its bottom as that section scrolls
// up past a fixed line on the screen — so, section by section, the accent traces
// the scroll down the page, alternating sides. There is NO background track: the
// rail only exists where it has been drawn, so nothing shows before you scroll.
// Sections that should have no rail (e.g. the dark numbers band) simply omit it.
export function SectionRail({ side = "left" }: { side?: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const update = () => {
      const section = ref.current?.parentElement;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // The tip tracks a line ~60% down the viewport: the fill grows as the section
      // passes that line. Tied to scroll position, not speed.
      const anchor = vh * 0.6;
      const p = reduce ? 1 : (anchor - rect.top) / rect.height;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden md:block"
    >
      <div className="container-nl relative h-full">
        <div
          className={`absolute top-0 h-full w-px ${side === "right" ? "right-0" : "left-0"}`}
        >
          <div
            className="w-px bg-steeldeep transition-[height] duration-150 ease-out"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

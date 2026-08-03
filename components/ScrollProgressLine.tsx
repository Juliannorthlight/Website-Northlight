"use client";

import { useEffect, useRef, useState } from "react";

// A vertical line pinned to the left of its (relative) parent section. A steel
// fill grows top-to-bottom in step with how far the section has scrolled through
// the viewport — giving the section a sense of structure and movement.
export function ScrollProgressLine() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const update = () => {
      const parent = ref.current?.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      if (reduce) {
        setProgress(1);
        return;
      }
      // 0 as the section's top reaches mid-viewport, 1 as its bottom passes mid-viewport
      const start = vh * 0.85;
      const end = vh * 0.15;
      const p = (start - rect.top) / (start - end + rect.height);
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
      className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-line md:block"
    >
      <div
        className="w-px bg-steel transition-[height] duration-150 ease-out"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  );
}

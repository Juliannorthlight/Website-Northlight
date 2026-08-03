"use client";

import { useEffect, useRef, useState } from "react";

// Counts from `start` up to `end` the first time it scrolls into view. `start`
// lets the number begin part-way up (so a low "0" is never shown). Falls back to
// the final value immediately when reduced motion is requested or IO is missing.
export function CountUp({
  end,
  start = 0,
  suffix = "",
  prefix = "",
  duration = 1500,
  className = "",
}: {
  end: number;
  start?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(start);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setValue(end);
      return;
    }
    let timer: ReturnType<typeof setInterval> | undefined;
    let safety: ReturnType<typeof setTimeout> | undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const t0 = Date.now();
            timer = setInterval(() => {
              const p = Math.min(1, (Date.now() - t0) / duration);
              // easeOutCubic — moves immediately and glides to the target, so the
              // number never appears to sit still at the start before climbing.
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(start + eased * (end - start)));
              if (p >= 1 && timer) clearInterval(timer);
            }, 20);
            // safety net: never leave it stuck below the target
            safety = setTimeout(() => setValue(end), duration + 400);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timer) clearInterval(timer);
      if (safety) clearTimeout(safety);
    };
  }, [end, start, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

// Counts up to `end` the first time it scrolls into view. Falls back to the
// final value immediately when reduced motion is requested or IO is missing.
export function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 1500,
  className = "",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
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
            const start = Date.now();
            timer = setInterval(() => {
              const p = Math.min(1, (Date.now() - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
              setValue(Math.round(eased * end));
              if (p >= 1 && timer) clearInterval(timer);
            }, 20);
            // safety net: never leave it stuck below the target
            safety = setTimeout(() => setValue(end), duration + 400);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timer) clearInterval(timer);
      if (safety) clearTimeout(safety);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

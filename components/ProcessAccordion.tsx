"use client";

import { useState } from "react";
import { process } from "@/lib/content";

// Expandable process steps — a headline + short teaser you can click to reveal
// the full detail. Smooth height transition via the grid-rows 0fr→1fr trick.
export function ProcessAccordion() {
  const [open, setOpen] = useState<number[]>([0]);
  const toggle = (i: number) =>
    setOpen((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]));

  return (
    <div className="border border-line bg-white">
      {process.map((step, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={step.title} className="border-b border-line last:border-b-0">
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start gap-5 px-6 py-6 text-left md:px-9"
            >
              <span
                className={`mt-1 border-l-2 pl-3 font-serif text-lg font-semibold transition-colors ${
                  isOpen ? "border-steel text-ink" : "border-line text-steel"
                }`}
              >
                {step.n}
              </span>
              <span className="flex-1">
                <span className="block text-xl text-ink md:text-2xl">{step.title}</span>
                <span className="mt-1.5 block max-w-2xl text-[15px] leading-relaxed text-inksoft">
                  {step.body}
                </span>
              </span>
              <span
                className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center border text-lg transition-all ${
                  isOpen
                    ? "rotate-45 border-steel text-steel"
                    : "border-line text-graphite group-hover:border-graphite"
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <ul className="space-y-3 px-6 pb-7 pl-[3.4rem] md:px-9 md:pl-[4.9rem]">
                  {step.detail.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-[15px] leading-relaxed text-inksoft"
                    >
                      <span className="absolute left-0 top-[10px] h-px w-2.5 bg-steel" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

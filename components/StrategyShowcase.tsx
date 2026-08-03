"use client";

import { useEffect, useState } from "react";
import { CableField } from "@/components/CableField";
import { Reveal } from "@/components/Reveal";
import { strategies, type Strategy } from "@/lib/content";

// Strategies, presented as a vertical journey rather than a tab switcher.
// The flagship fund (index 0) is shown in full at the top — it's the one that
// matters most. The remaining vehicles sit below as full-width rows the visitor
// scrolls through; clicking a row unfolds its full detail inline (an accordion),
// so nothing ever navigates away. Everything is light with dark text.

const flagship = strategies[0];
const others = strategies.slice(1);

// The core specs — the meta facts minus the one already featured in the headline
// callout. Shown as a single row (the Structure · Track record · Liquidity trio).
function specFacts(s: Strategy) {
  return s.meta.filter((m) => m.label !== s.headline.label);
}

// A compact share-class summary, shown on its own second row where it applies.
// (The full ISIN table lives behind its own toggle.)
function summaryFacts(s: Strategy) {
  if (!s.shareClasses) return [];
  const currencies = [...new Set(s.shareClasses.map((c) => c.currency))];
  const hasRetail = s.shareClasses.some((c) => c.investorType === "Retail");
  return [
    { label: "Currencies", value: currencies.join(" · ") },
    { label: "Share classes", value: hasRetail ? "Institutional & retail" : "Institutional" },
  ];
}

// Specs on one row (the Structure · Track record · Liquidity trio), with any
// share-class summary on a tidy second row.
function FactBlock({ strategy }: { strategy: Strategy }) {
  const specs = specFacts(strategy);
  const summary = summaryFacts(strategy);
  return (
    <>
      <FactList facts={specs} />
      {summary.length > 0 && (
        <div className="mt-6">
          <FactList facts={summary} />
        </div>
      )}
    </>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-steel" />
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-steeldeep">
        {children}
      </span>
    </div>
  );
}

function Characteristics({ points }: { points: string[] }) {
  return (
    <ul className="space-y-4">
      {points.map((point) => (
        <li key={point} className="relative pl-5 text-[16px] leading-relaxed text-inksoft">
          <span className="absolute left-0 top-[11px] h-px w-2.5 bg-steel" />
          {point}
        </li>
      ))}
    </ul>
  );
}

// Facts laid out with a fixed, equal gap between each item (flex, not a grid), so
// the spacing between them reads as identical regardless of how wide each value is.
function FactList({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <dl className="flex flex-wrap gap-x-12 gap-y-6">
      {facts.map((f) => (
        <div key={f.label}>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            {f.label}
          </dt>
          <dd className="mt-1.5 font-serif text-[19px] text-ink">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ShareClassTable({ strategy }: { strategy: Strategy }) {
  if (!strategy.shareClasses) return null;
  return (
    <>
      <div className="overflow-x-auto border border-line">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-steel bg-mist2 text-left text-inksoft">
              {["Class", "Ccy", "ISIN", "Bloomberg"].map((h) => (
                <th
                  key={h}
                  className="px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {strategy.shareClasses.map((sc) => (
              <tr key={sc.isin} className="border-t border-line">
                <td className="px-4 py-2.5 font-medium text-ink">{sc.investorType}</td>
                <td className="px-4 py-2.5 text-ink">{sc.currency}</td>
                <td className="px-4 py-2.5 font-mono text-[13px] text-muted">{sc.isin}</td>
                <td className="px-4 py-2.5 font-mono text-[13px] text-muted">{sc.bbg ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[12px] text-muted">
        All share classes are accumulating and currency-hedged.
      </p>
    </>
  );
}

// One "other vehicle" row: click the header to unfold its detail inline. The full
// share-class / ISIN table is tucked behind a second, nested toggle so an open row
// stays compact until that detail is explicitly asked for.
function VehicleRow({
  s,
  index,
  isOpen,
  onToggle,
}: {
  s: Strategy;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [showClasses, setShowClasses] = useState(false);

  // Collapsing the row also resets its nested share-class table.
  useEffect(() => {
    if (!isOpen) setShowClasses(false);
  }, [isOpen]);

  return (
    <li
      id={s.slug}
      className={`scroll-mt-28 border-b border-line transition-colors duration-300 ${
        isOpen ? "bg-white" : ""
      }`}
    >
      <Reveal variant="left" delay={index * 70}>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="group relative grid w-full items-center gap-4 py-7 pl-5 pr-2 text-left md:grid-cols-[1fr_1.2fr_auto] md:gap-10 md:py-8 md:pl-8"
        >
          {/* accent bar that grows on hover / open */}
          <span
            className={`absolute left-0 top-1/2 w-[3px] -translate-y-1/2 bg-steel transition-all duration-500 ${
              isOpen ? "h-[72%]" : "h-0 group-hover:h-7"
            }`}
          />
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-steeldeep">
              {s.tag}
            </span>
            <h3 className="mt-2 font-serif text-[22px] leading-snug text-ink md:text-[26px]">
              {s.name}
            </h3>
            <p className="mt-1 text-[14px] font-medium text-muted">{s.structure}</p>
          </div>
          <p className="text-[16px] leading-relaxed text-inksoft">{s.summary}</p>
          <span className="inline-flex items-center gap-2.5 justify-self-start text-[13px] font-semibold text-steeldeep md:justify-self-end">
            {isOpen ? "Close" : "View details"}
            <span
              className={`grid h-8 w-8 place-items-center rounded-full border text-[17px] font-normal leading-none transition-all duration-500 ${
                isOpen
                  ? "rotate-[135deg] border-steel bg-steel/10"
                  : "border-steel/40 group-hover:border-steel group-hover:bg-steel/10"
              }`}
              aria-hidden="true"
            >
              +
            </span>
          </span>
        </button>

        {/* Unfolding detail — grid-rows 0fr→1fr animates to the exact height */}
        <div
          className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div
              className={`pb-10 pl-5 pr-2 transition-all duration-500 md:pl-8 ${
                isOpen ? "translate-y-0 opacity-100 delay-100" : "-translate-y-2 opacity-0"
              }`}
            >
              <div className="grid gap-10 border-t border-line pt-8 md:grid-cols-2 md:gap-16">
                <div>
                  <div className="border-l-2 border-steel pl-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                      {s.headline.label}
                    </p>
                    <p className="mt-1.5 font-serif text-2xl font-semibold text-ink md:text-[28px]">
                      {s.headline.value}
                    </p>
                  </div>
                  <div className="mt-8">
                    <FactBlock strategy={s} />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-navy">Characteristics</h4>
                  <div className="mt-5">
                    <Characteristics points={s.points} />
                  </div>
                </div>
              </div>

              {/* Nested toggle — the full ISIN table only when asked for */}
              {s.shareClasses && (
                <div className="mt-8 border-t border-line pt-6">
                  <button
                    type="button"
                    onClick={() => setShowClasses((v) => !v)}
                    aria-expanded={showClasses}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-steeldeep transition-colors hover:text-ink"
                  >
                    <span
                      className={`inline-block text-[15px] transition-transform duration-300 ${
                        showClasses ? "rotate-90" : ""
                      }`}
                      aria-hidden="true"
                    >
                      &rsaquo;
                    </span>
                    {showClasses ? "Hide share classes & ISINs" : "View share classes & ISINs"}
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ gridTemplateRows: showClasses ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-5">
                        <ShareClassTable strategy={s} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </li>
  );
}

export function StrategyShowcase() {
  // One row unfolds at a time (accordion) — opening one closes the last, which
  // keeps the section lively and always in motion.
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (slug: string) => setOpen((cur) => (cur === slug ? null : slug));

  // Deep links from the home page: /strategies#slug. The flagship simply scrolls
  // into view; the other vehicles scroll into view and unfold.
  useEffect(() => {
    const applyHash = () => {
      const slug = window.location.hash.replace("#", "");
      if (!slug) return;
      const target = strategies.find((s) => s.slug === slug);
      if (!target) return;
      if (target.slug !== flagship.slug) setOpen(target.slug);
      window.requestAnimationFrame(() =>
        document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <>
      {/* ---------- Flagship — shown in full ---------- */}
      <section
        id={flagship.slug}
        className="relative scroll-mt-28 overflow-hidden border-b border-line bg-white"
      >
        <CableField className="pointer-events-none absolute -right-16 top-0 hidden h-full w-1/2 opacity-[0.07] md:block" />
        <div className="container-nl relative py-20 md:py-28">
          <Reveal variant="left">
            <Kicker>{flagship.tag}</Kicker>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-[1.1] text-ink md:text-[42px]">
              {flagship.name}
            </h2>
            <p className="mt-3 text-[15px] font-semibold text-steeldeep">{flagship.structure}</p>
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
            <Reveal variant="left" delay={80}>
              <p className="text-[19px] leading-relaxed text-inksoft">{flagship.summary}</p>
              <div className="mt-10 border-l-2 border-steel pl-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                  {flagship.headline.label}
                </p>
                <p className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink md:text-[34px]">
                  {flagship.headline.value}
                </p>
              </div>
              <div className="mt-10">
                <FactBlock strategy={flagship} />
              </div>
            </Reveal>

            <Reveal variant="right" delay={80}>
              <h3 className="font-serif text-xl font-semibold text-navy">Characteristics</h3>
              <div className="mt-6">
                <Characteristics points={flagship.points} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- The other vehicles — unfold inline on click ---------- */}
      <section className="border-b border-line bg-mist">
        <div className="container-nl py-20 md:py-24">
          <Reveal>
            <Kicker>More ways to invest with us</Kicker>
            <h2 className="mt-4 font-serif text-3xl text-ink md:text-[34px]">
              The same philosophy, other vehicles
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-inksoft">
              The flagship approach, expressed in structures designed for different investors and
              objectives. Open any vehicle to unfold the detail.
            </p>
          </Reveal>

          <ul className="mt-12 border-t border-line">
            {others.map((s, i) => (
              <VehicleRow
                key={s.slug}
                s={s}
                index={i}
                isOpen={open === s.slug}
                onToggle={() => toggle(s.slug)}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

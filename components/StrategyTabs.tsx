"use client";

import { useEffect, useState } from "react";
import { CableField } from "@/components/CableField";
import { strategies } from "@/lib/content";

// Tabbed strategy switcher. Plain navy identity band per strategy; light content
// lifted into an overlapping card for a clean seam. Facts shown once, in a
// compact divided list; the full share-class table is tucked behind a toggle.
export function StrategyTabs() {
  const [active, setActive] = useState(0);
  const [showClasses, setShowClasses] = useState(false);
  const s = strategies[active];

  const select = (i: number) => {
    setActive(i);
    setShowClasses(false);
  };

  // Open the strategy named in the URL hash (e.g. /strategies#european-credit-opportunities),
  // so the compact links on the home page deep-link to the right tab.
  useEffect(() => {
    const applyHash = () => {
      const slug = window.location.hash.replace("#", "");
      const idx = strategies.findIndex((s) => s.slug === slug);
      if (idx >= 0) {
        setActive(idx);
        setShowClasses(false);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  // Each fact appears exactly once. Start from the specs, minus the one already
  // featured in the callout, then fold the share-class summary in compactly.
  const facts = s.meta.filter((m) => m.label !== s.headline.label);
  if (s.shareClasses) {
    const currencies = [...new Set(s.shareClasses.map((c) => c.currency))];
    const hasRetail = s.shareClasses.some((c) => c.investorType === "Retail");
    facts.push({ label: "Currencies", value: currencies.join(" · ") });
    facts.push({
      label: "Share classes",
      value: hasRetail ? "Institutional & retail" : "Institutional",
    });
  }

  return (
    <>
      <style>{`
        @keyframes draftb-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: none; }
        }
        .draftb-panel { animation: draftb-in 0.45s ease both; }
        @media (prefers-reduced-motion: reduce) {
          .draftb-panel { animation: none; }
        }
      `}</style>

      {/* Sticky tab bar */}
      <nav
        aria-label="Strategies"
        className="sticky top-[68px] z-40 border-b border-navyline bg-ink"
      >
        <div className="container-nl flex gap-2 overflow-x-auto">
          {strategies.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => select(i)}
              aria-current={i === active}
              className={`whitespace-nowrap border-b-[3px] px-1 py-5 text-[15px] tracking-tight transition-colors md:text-[19px] ${
                i === active
                  ? "border-steel font-semibold text-white"
                  : "border-transparent font-medium text-[#8695A6] hover:text-white"
              } ${i > 0 ? "ml-7 md:ml-11" : ""}`}
            >
              {item.short}
            </button>
          ))}
        </div>
      </nav>

      {/* Panel */}
      <div key={active} className="draftb-panel">
        {/* Navy identity band */}
        <section className="relative overflow-hidden bg-ink text-white">
          <CableField className="absolute right-0 top-0 h-full w-2/3 opacity-30" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
          <div className="container-nl relative z-10 pb-28 pt-16 md:pb-32 md:pt-20">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-silver">
              {s.tag}
            </span>
            <h2 className="mt-4 text-3xl leading-[1.1] md:text-[40px]">{s.name}</h2>
            <p className="mt-3 text-[15px] font-medium text-steel">{s.structure}</p>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#C8D4DF]">
              {s.summary}
            </p>
          </div>
        </section>

        {/* Light content — lifted into an overlapping card for a clean seam */}
        <section className="bg-mist">
          <div className="container-nl">
            <div className="relative z-10 -mt-16 border border-line bg-white p-8 shadow-[0_16px_50px_-28px_rgba(11,27,46,0.55)] md:-mt-20 md:p-12">
              <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
                {/* Left — featured metric + key facts */}
                <div>
                  <div className="border-l-2 border-steel pl-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      {s.headline.label}
                    </p>
                    <p className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink md:text-[34px]">
                      {s.headline.value}
                    </p>
                  </div>

                  <dl className="mt-8 border-t border-line">
                    {facts.map((f) => (
                      <div
                        key={f.label}
                        className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
                      >
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                          {f.label}
                        </dt>
                        <dd className="text-right font-serif text-[17px] text-ink">{f.value}</dd>
                      </div>
                    ))}
                  </dl>

                  {/* Click-to-reveal full share-class detail */}
                  {s.shareClasses && (
                    <div className="mt-5">
                      <button
                        type="button"
                        onClick={() => setShowClasses((v) => !v)}
                        aria-expanded={showClasses}
                        className="inline-flex items-center gap-2 text-[13px] font-semibold text-steeldeep transition-colors hover:text-ink"
                      >
                        <span
                          className={`inline-block transition-transform ${
                            showClasses ? "rotate-90" : ""
                          }`}
                          aria-hidden="true"
                        >
                          &rsaquo;
                        </span>
                        {showClasses ? "Hide share classes & ISINs" : "View share classes & ISINs"}
                      </button>
                    </div>
                  )}
                </div>

                {/* Right — characteristics */}
                <div className="md:border-l md:border-line md:pl-16">
                  <h3 className="font-serif text-xl font-semibold text-navy">Characteristics</h3>
                  <ul className="mt-5 space-y-4">
                    {s.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-5 text-[16px] leading-relaxed text-inksoft"
                      >
                        <span className="absolute left-0 top-[11px] h-px w-2.5 bg-steel" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Full share-class table — revealed on demand */}
              {s.shareClasses && showClasses && (
                <div style={{ animation: "draftb-in 0.35s ease both" }}>
                  <div>
                    <div className="mt-8 overflow-x-auto border border-line">
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
                          {s.shareClasses.map((sc) => (
                            <tr key={sc.isin} className="border-t border-line">
                              <td className="px-4 py-2.5 font-medium text-ink">
                                {sc.investorType}
                              </td>
                              <td className="px-4 py-2.5 text-ink">{sc.currency}</td>
                              <td className="px-4 py-2.5 font-mono text-[13px] text-muted">
                                {sc.isin}
                              </td>
                              <td className="px-4 py-2.5 font-mono text-[13px] text-muted">
                                {sc.bbg ?? "—"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-2 text-[12px] text-muted">
                      All share classes are accumulating and currency-hedged.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="pb-16 md:pb-20" />
          </div>
        </section>
      </div>
    </>
  );
}

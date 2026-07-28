import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { ContactCTA } from "@/components/ContactCTA";
import { process, riskManagement } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process & Risk",
  description:
    "Northlight's investment process and risk management — fundamental, bottom-up credit research with liquidity-led risk control and a systematic macro-overlay.",
};

export default function ProcessRiskPage() {
  return (
    <>
      <PageHero
        eyebrow="Process & Risk"
        title="A repeatable process, built around risk"
        intro="A disciplined, repeatable process is what turns experience into consistent outcomes — with risk management running through every stage, not bolted on at the end."
        image="/heroes/span.jpg"
        imagePosition="center"
      />

      {/* Investment process — high level */}
      <section className="border-b border-line bg-white">
        <div className="container-nl py-20">
          <Reveal className="mb-10 max-w-2xl">
            <Eyebrow>Investment process</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink">Fundamental, bottom-up, catalyst-driven</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-inksoft">
              From idea generation through to active monitoring — four connected stages, applied
              consistently across the European credit spectrum.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 80}
                className="border-l-2 border-l-steel bg-mist p-6"
              >
                <span className="block h-px w-8 bg-steel" />
                <h3 className="mt-4 text-lg text-ink">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-inksoft">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Risk management */}
      <section className="border-b border-line bg-mist">
        <div className="container-nl py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <Eyebrow>Risk management</Eyebrow>
              <h2 className="mt-4 text-3xl text-ink">Liquidity-led, capital-preservation first</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-inksoft">{riskManagement.intro}</p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
                {riskManagement.points.map((point) => (
                  <li key={point} className="bg-white p-5 text-[14px] leading-relaxed text-inksoft">
                    <span className="mb-2 block h-px w-6 bg-steel" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Across the credit spectrum */}
          <Reveal className="mt-14 max-w-xl">
            <p className="text-[13px] uppercase tracking-[0.12em] text-muted">
              Across the credit spectrum
            </p>
            <div className="mt-3 flex overflow-hidden border border-line text-center">
              {[
                { label: "Inv. grade", bg: "#E4EAF0", fg: "#42566A" },
                { label: "BB", bg: "#B9C7D6", fg: "#22384F" },
                { label: "B", bg: "#6E93B6", fg: "#FFFFFF" },
                { label: "CCC", bg: "#3C6489", fg: "#FFFFFF" },
                { label: "Stressed", bg: "#14314F", fg: "#FFFFFF" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex-1 px-2 py-2.5 text-[10px] font-semibold uppercase tracking-[0.09em]"
                  style={{ background: s.bg, color: s.fg }}
                >
                  {s.label}
                </div>
              ))}
            </div>
            <div className="mt-2.5 flex justify-between text-[10px] uppercase tracking-[0.1em] text-muted">
              <span>Lower risk</span>
              <span>Higher risk</span>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

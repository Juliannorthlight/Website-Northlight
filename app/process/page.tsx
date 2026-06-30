import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { ContactCTA } from "@/components/ContactCTA";
import { process } from "@/lib/content";

export const metadata: Metadata = {
  title: "Investment Process",
  description:
    "Northlight's repeatable four-stage process: research, portfolio construction, risk management and monitoring.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Process"
        title="Discipline is the product"
        intro="For a credit manager, a repeatable process is what turns experience into consistent outcomes. Ours runs in four connected stages, underpinned by a systematic macro-overlay."
      />

      <section className="border-b border-line bg-white">
        <div className="container-nl py-20">
          <div className="space-y-px overflow-hidden border border-line bg-line">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <div className="grid gap-6 bg-white p-8 md:grid-cols-[140px_1fr] md:p-10">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-sm font-semibold tracking-[0.1em] text-graphite">
                      {step.n}
                    </span>
                    <span className="hidden h-px w-10 translate-y-2.5 bg-line md:block" />
                  </div>
                  <div>
                    <h2 className="text-2xl text-ink">{step.title}</h2>
                    <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-inksoft">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Macro overlay band */}
      <section className="border-b border-line bg-mist">
        <div className="container-nl py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <Eyebrow>Across the spectrum</Eyebrow>
              <h2 className="mt-4 text-3xl text-ink">A systematic macro-overlay</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[17px] leading-relaxed text-inksoft">
                Allocation is driven by our market outlook, the business cycle and the opportunity
                set — with the flexibility to invest across the entire credit spectrum, from
                investment grade through high yield to stressed situations. A systematic macro-overlay
                sits above bottom-up positioning, intended to preserve capital and manage exposure
                through changing conditions.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                {["Investment grade", "BB", "B", "CCC", "Stressed"].map((label, idx, arr) => (
                  <span key={label} className="flex items-center gap-2">
                    <span className="border border-line bg-white px-3 py-1.5 text-graphite">
                      {label}
                    </span>
                    {idx < arr.length - 1 && <span className="text-line">/</span>}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

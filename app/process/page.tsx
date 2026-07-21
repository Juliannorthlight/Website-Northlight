import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { ProcessAccordion } from "@/components/ProcessAccordion";
import { ContactCTA } from "@/components/ContactCTA";

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
        image="/heroes/span.jpg"
        imagePosition="center"
      />

      <section className="border-b border-line bg-white">
        <div className="container-nl py-20">
          <Reveal className="mb-8">
            <Eyebrow>How we invest</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink">A repeatable, four-stage discipline</h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              Select any stage to expand the detail.
            </p>
          </Reveal>
          <Reveal>
            <ProcessAccordion />
          </Reveal>
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
              <div className="mt-8 max-w-xl">
                <div className="flex overflow-hidden border border-line text-center">
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
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

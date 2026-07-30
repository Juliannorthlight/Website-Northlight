import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { ProcessCircle } from "@/components/ProcessCircle";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Northlight's investment process — a continuous cycle from idea generation through research, portfolio construction, risk management and monitoring.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Process"
        title="A continuous, disciplined cycle"
        intro="From idea generation through to active monitoring, our process runs as a repeatable cycle — each stage feeding the next, with risk management at its core."
        image="/heroes/span.jpg"
        imagePosition="center"
      />

      <section className="border-b border-line bg-white">
        <div className="container-nl py-20">
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow>How we invest</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink">Five connected stages</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-inksoft">
              Select any stage to see what it means at Northlight.
            </p>
          </Reveal>
          <Reveal>
            <ProcessCircle />
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

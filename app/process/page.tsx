import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, ArrowRight } from "@/components/ui";
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
            <h2 className="mt-4 text-3xl leading-tight text-ink text-balance md:text-[34px]">
              Consistent, positive, uncorrelated returns — through disciplined repetition.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-inksoft">
              From idea to exit and back again — one continuous loop, with capital preservation
              built into every turn.
            </p>
          </Reveal>
          <Reveal>
            <ProcessCircle />
          </Reveal>
          <Reveal className="mt-16 border-t border-line pt-8">
            <Link
              href="/strategies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-steeldeep hover:text-ink"
            >
              See how this process shapes our funds <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

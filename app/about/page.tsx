import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { ContactCTA } from "@/components/ContactCTA";
import { firmFacts } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2009 by Cyril Armleder and Shahar Zer, Northlight Group is a London-based investment manager specialising in European corporate credit.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Northlight"
        title="A European asset manager with its own ethos"
        intro="Founded in 2009 with a focus on liquidity-adjusted risk and return."
        image="/heroes/pylon.jpg"
        imagePosition="center"
      />

      {/* Founding story */}
      <section className="border-b border-line bg-white">
        <div className="container-nl grid gap-12 py-20 md:grid-cols-[1.35fr_1fr]">
          <Reveal variant="left">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink">Built by credit specialists, for credit investing</h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-inksoft">
              Northlight was founded in 2009 by portfolio managers Cyril Armleder and Shahar Zer,
              following their multi-decade sell-side and buy-side careers, with the goal of
              establishing a European asset manager with its own ethos — one with a focus on
              liquidity-adjusted risk and return.
            </p>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-inksoft">
              The team invests across the entire credit spectrum, with its primary focus on the
              European high-yield markets. The firm seeks to generate consistent, positive and
              uncorrelated returns across all market environments, with an emphasis on liquidity and
              capital preservation.
            </p>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <ul className="ml-1 space-y-8 border-l-2 border-line pl-8">
              {firmFacts.map((fact) => (
                <li key={fact.label} className="relative">
                  <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-steel ring-4 ring-white" />
                  <div className="font-serif text-3xl font-semibold leading-none text-ink">
                    {fact.value}
                  </div>
                  <div className="mt-2 text-[12px] uppercase tracking-[0.12em] text-muted">
                    {fact.label}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Office / 33 Glasshouse Street */}
      <section className="border-b border-line bg-mist">
        <div className="container-nl grid items-center gap-10 py-20 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            {/* Placeholder photo (Regent Street quadrant, licence-free) — swap for
                a real 33 Glasshouse Street shot when supplied. */}
            <div className="relative overflow-hidden border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/office.jpg"
                alt="Regent Street, London — near Northlight's office at 33 Glasshouse Street"
                className="block aspect-[4/3] w-full object-cover"
                style={{ filter: "grayscale(100%) contrast(1.05) brightness(1.06)" }}
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 mix-blend-multiply"
                style={{ background: "linear-gradient(155deg,#2a6aa8 0%,#0B1B2E 95%)", opacity: 0.4 }}
              />
              <span className="absolute bottom-3 right-3 bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/80">
                Regent Street, London W1
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Our home</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink">In the heart of London&apos;s West End</h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-inksoft">
              Northlight is based at 33 Glasshouse Street, just off Piccadilly Circus — at the centre
              of London&apos;s investment-management community and a short walk from the city&apos;s
              principal counterparties and advisers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Regulation */}
      <section className="border-b border-line bg-white">
        <div className="container-nl py-20">
          <Reveal>
            <Eyebrow>Regulation &amp; governance</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl text-ink">
              An institutional framework allocators can rely on
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              // FCA/SEC regulatory cards removed per pre-launch feedback (2026-07-22) — kept for easy restore:
              // {
              //   h: "FCA-regulated full-scope AIFM",
              //   p: "Authorised and regulated by the Financial Conduct Authority in the United Kingdom.",
              // },
              // {
              //   h: "SEC Exempt Reporting Adviser",
              //   p: "Registered with the US Securities and Exchange Commission as an Exempt Reporting Adviser.",
              // },
              {
                h: "Established service providers",
                p: "Supported by tier-one prime brokers, fund administrators, auditors and legal counsel across the fund range.",
              },
              {
                h: "Institutional operating framework",
                p: "Independent governance, oversight and controls across the fund range, built to the standards institutional allocators expect.",
              },
            ].map((item) => (
              <Reveal key={item.h} className="border-l-2 border-graphite bg-mist p-6">
                <h3 className="text-base text-ink">{item.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-inksoft">{item.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

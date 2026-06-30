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
      />

      {/* Founding story */}
      <section className="border-b border-line bg-white">
        <div className="container-nl grid gap-12 py-20 md:grid-cols-[1.35fr_1fr]">
          <Reveal>
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
          <Reveal delay={120}>
            <dl className="border-t border-line">
              {firmFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between gap-4 border-b border-line py-4"
                >
                  <dt className="font-serif text-xl font-bold text-ink">{fact.value}</dt>
                  <dd className="text-right font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Office / 33 Glasshouse Street */}
      <section className="border-b border-line bg-mist">
        <div className="container-nl grid items-center gap-10 py-20 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            {/* Placeholder for a photograph of 33 Glasshouse Street.
                Replace this block with the building image when supplied. */}
            <div
              className="relative flex aspect-[4/3] items-end overflow-hidden border border-line"
              style={{ background: "linear-gradient(160deg,#16324f 0%,#0B1B2E 100%)" }}
              aria-label="33 Glasshouse Street, London"
            >
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 h-full w-full opacity-40"
                aria-hidden="true"
              >
                <g stroke="#34618C" strokeWidth="0.8" opacity="0.6">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={i} x1={40 + i * 42} y1="40" x2={40 + i * 42} y2="300" />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={`h${i}`} x1="40" y1={60 + i * 40} x2="380" y2={60 + i * 40} />
                  ))}
                </g>
              </svg>
              <span className="relative m-5 bg-white/90 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-graphite">
                Photograph · 33 Glasshouse Street
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
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                h: "FCA-regulated full-scope AIFM",
                p: "Authorised and regulated by the Financial Conduct Authority in the United Kingdom.",
              },
              {
                h: "SEC Exempt Reporting Adviser",
                p: "Registered with the US Securities and Exchange Commission as an Exempt Reporting Adviser.",
              },
              {
                h: "Established service providers",
                p: "Supported by tier-one prime brokers, fund administrators, auditors and legal counsel across the fund range.",
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

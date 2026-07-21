import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Eyebrow } from "@/components/ui";
import { ContactCTA } from "@/components/ContactCTA";
import { team } from "@/lib/content";

// Team stats — the two metrics count up on first view; the year stays static.
const teamStatsAnim: { value: React.ReactNode; label: string }[] = [
  { value: <CountUp end={90} suffix="+" />, label: "Years of combined credit experience" },
  { value: <CountUp end={7} />, label: "Languages spoken across the team" },
  { value: "2009", label: "Investing together since" },
];

export const metadata: Metadata = {
  title: "Team",
  description:
    "Northlight is led by founding portfolio managers Cyril Armleder and Shahar Zer, with a team carrying 90+ years of combined credit experience.",
};

function Portrait({ initials, photo, name }: { initials: string; photo?: string; name: string }) {
  if (photo) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden border border-line bg-mist">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div
      className="relative flex aspect-[4/5] items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg,#1d3b58,#0E2138)" }}
    >
      <svg viewBox="0 0 100 125" className="absolute inset-0 h-full w-full opacity-50" aria-hidden="true">
        <g stroke="#34618C" strokeWidth="0.6" opacity="0.6">
          <line x1="80" y1="0" x2="10" y2="125" />
          <line x1="80" y1="0" x2="45" y2="125" />
          <line x1="80" y1="0" x2="80" y2="125" />
        </g>
      </svg>
      <span className="relative font-serif text-3xl font-semibold text-white/85">{initials}</span>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Led by its founders"
        intro="Northlight is led by founding portfolio managers Cyril Armleder and Shahar Zer, supported by a diverse, experienced investment team."
        image="/heroes/viaduct.jpg"
        imagePosition="center 42%"
      />

      {/* Founders */}
      <section className="border-b border-line bg-white">
        <div className="container-nl space-y-14 py-20">
          {team.map((m, i) => {
            const initials = m.name
              .split(" ")
              .map((p) => p[0])
              .join("");
            return (
              <Reveal key={m.name}>
                <article className="grid gap-8 md:grid-cols-[260px_1fr] md:gap-12">
                  <div className="max-w-[260px]">
                    <Portrait initials={initials} photo={m.photo} name={m.name} />
                  </div>
                  <div>
                    <h2 className="text-2xl text-ink md:text-[28px]">{m.name}</h2>
                    <p className="mt-1 text-[15px] font-medium text-steeldeep">{m.role}</p>
                    <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-inksoft">{m.bio}</p>
                    <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
                      {m.languages}
                    </p>
                  </div>
                </article>
                {i < team.length - 1 && <div className="mt-14 h-px w-full bg-line" />}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Team stats — Sona-style connected rail */}
      <section className="border-b border-line bg-mist">
        <div className="container-nl grid gap-12 py-16 md:grid-cols-[1fr_1fr] md:items-center md:py-20">
          <Reveal>
            <Eyebrow>The team in numbers</Eyebrow>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-inksoft">
              Northlight&apos;s founding portfolio managers are supported by a wider team across
              research, risk, operations and investor relations.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Full team details are available to prospective investors on request.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="ml-1 space-y-9 border-l-2 border-line pl-9">
              {teamStatsAnim.map((stat) => (
                <li key={stat.label} className="relative">
                  <span className="absolute -left-[43px] top-1.5 h-3 w-3 rounded-full bg-steel ring-4 ring-mist" />
                  <div className="font-serif text-4xl font-semibold leading-none text-ink md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2.5 text-[13px] uppercase tracking-[0.12em] text-muted">
                    {stat.label}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

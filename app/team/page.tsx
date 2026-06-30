import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { team, teamStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Northlight is led by founding portfolio managers Cyril Armleder and Shahar Zer, with a team carrying 90+ years of combined credit experience.",
};

function Portrait({ initials }: { initials: string }) {
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
                    <Portrait initials={initials} />
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

      {/* Team stats */}
      <section className="border-b border-line bg-mist">
        <div className="container-nl py-16">
          <dl className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {teamStats.map((stat) => (
              <div key={stat.label} className="bg-white p-8">
                <dt className="font-serif text-3xl font-semibold text-ink">{stat.value}</dt>
                <dd className="mt-2 text-sm text-inksoft">{stat.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            Northlight&apos;s portfolio managers are supported by a wider team across research, risk,
            operations and investor relations. Full team details are available to prospective
            investors on request.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

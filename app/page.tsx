import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Eyebrow, ButtonLink, ArrowRight } from "@/components/ui";
import { ContactCTA } from "@/components/ContactCTA";
import { process, strategies } from "@/lib/content";

// Home statement numbers — the two headline metrics count up on first view.
const bandStats: {
  value: React.ReactNode;
  label: string;
}[] = [
  { value: "2009", label: "Founded in London" },
  { value: <CountUp end={16} suffix="yr" />, label: "Flagship track record" },
  { value: <CountUp end={90} suffix="+" />, label: "Years of combined credit experience" },
];

// Home team teaser — same connected rail + count-up as the Team page.
const homeTeamStats: { value: React.ReactNode; label: string }[] = [
  { value: <CountUp end={90} suffix="+" />, label: "Years of combined credit experience" },
  { value: <CountUp end={7} />, label: "Languages spoken across the team" },
  { value: "2009", label: "Investing together since" },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 28%",
            filter: "grayscale(100%) contrast(1.04) brightness(1.12)",
          }}
        />
        {/* Lighter duotone so the bridge stays recognisable */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{ background: "linear-gradient(160deg,#1f5793 0%,#0B1B2E 92%)", opacity: 0.62 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,rgba(8,21,36,0.9) 0%,rgba(8,21,36,0.52) 44%,rgba(11,27,46,0.08) 100%)",
          }}
        />
        <div className="container-nl relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <Eyebrow light>Northlight Group · European Credit Investing</Eyebrow>
            <h1 className="mt-5 text-4xl leading-[1.08] md:text-[52px] md:leading-[1.06]">
              A London-based investment manager specialising in European corporate credit.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#D2DCE5]">
              Consistent, positive and uncorrelated returns through every market environment — with an
              emphasis on liquidity and capital preservation.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-[14px] font-medium text-[#CDD8E2]">
              {["Investing since 2009", "European high-yield focus"].map(
                (item) => (
                  <span key={item} className="relative pl-4">
                    <span className="absolute left-0 top-[8px] h-1.5 w-1.5 rounded-full bg-steel" />
                    {item}
                  </span>
                )
              )}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/about" variant="ondark-solid">
                Learn more <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/strategies" variant="ondark">
                Our strategies
              </ButtonLink>
            </div>
          </div>
        </div>
        <span className="absolute bottom-4 right-5 z-10 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60">
          Vasco da Gama Bridge
        </span>
      </section>

      {/* ---------- Who we are (navy accent block) ---------- */}
      <section className="border-b border-line bg-white">
        <div className="container-nl py-20 md:py-24">
          <div className="grid overflow-hidden border border-line md:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col justify-center bg-ink p-8 text-white md:p-12">
            <Eyebrow light>Who we are</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight md:text-[36px]">
              A European asset manager with its own ethos
            </h2>
          </Reveal>
          <Reveal delay={120} className="bg-white p-8 md:p-12">
            <p className="text-[18px] leading-relaxed text-inksoft">
              Northlight was founded in 2009 by portfolio managers Cyril Armleder and Shahar Zer,
              after multi-decade sell-side and buy-side careers, with the goal of building a European
              asset manager with a distinct ethos — one focused on liquidity-adjusted risk and return.
            </p>
            <p className="mt-5 text-[18px] leading-relaxed text-inksoft">
              The team invests across the entire credit spectrum, with its primary focus on the
              European high-yield markets, seeking consistent, positive and uncorrelated returns in
              all market environments.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-steeldeep hover:text-ink"
              >
                About Northlight <ArrowRight />
              </Link>
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Statement numbers (full-width band) ---------- */}
      <section className="border-b border-navyline bg-ink text-white">
        <div className="container-nl py-14 md:py-16">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
            {bandStats.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 80}>
                <dt className="font-serif text-4xl font-medium leading-none text-white md:text-5xl">
                  {fact.value}
                </dt>
                <dd className="mt-3 text-[13px] uppercase tracking-[0.12em] text-silver">
                  {fact.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Strategies (compact teaser) ---------- */}
      <section className="border-b border-line bg-white">
        <div className="container-nl py-20 md:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-4 text-3xl text-ink md:text-[34px]">Our strategies</h2>
            </div>
            <Link
              href="/strategies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-steeldeep hover:text-ink"
            >
              All strategies <ArrowRight />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {strategies.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/strategies#${s.slug}`}
                  className="group flex items-center justify-between gap-4 border border-line border-l-2 border-l-steel bg-mist px-7 py-6 transition-colors hover:bg-mist2"
                >
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-steeldeep">
                      {s.tag}
                    </span>
                    <h3 className="mt-2 text-[19px] leading-snug text-ink">{s.name}</h3>
                    <p className="mt-1 text-[13px] font-medium text-muted">{s.structure}</p>
                  </div>
                  <span className="shrink-0 text-graphite transition-transform group-hover:translate-x-1">
                    <ArrowRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process (navy accent, teaser) ----------
           Removed per pre-launch feedback (2026-07-22). Kept but disabled for easy restore:
           change `false` to `true` below to bring the section back. */}
      {false && (
      <section className="border-b border-navyline bg-ink text-white">
        <div className="container-nl py-20 md:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <Eyebrow light>Investment process</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-[34px]">A repeatable, four-stage discipline</h2>
            </div>
            <ButtonLink href="/process" variant="ondark">
              Explore our process <ArrowRight />
            </ButtonLink>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-navyline bg-navyline sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} className="bg-ink p-7">
                <span className="block h-px w-8 bg-steel" />
                <h3 className="mt-4 text-lg text-white">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#9DB0C2]">{step.short}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ---------- Team ---------- */}
      <section className="border-b border-line bg-mist">
        <div className="container-nl grid items-center gap-10 py-20 md:grid-cols-[1fr_1fr] md:py-24">
          <Reveal>
            <Eyebrow>Our team</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink md:text-[34px]">
              Led by its founders, Cyril Armleder and Shahar Zer
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-inksoft">
              Northlight is led by its two founding portfolio managers, whose careers span senior
              roles at GLG Partners, Goldman Sachs, JP Morgan and Lehman Brothers — supported by a
              diverse team with more than ninety years of combined credit experience.
            </p>
            <div className="mt-8">
              <ButtonLink href="/team" variant="ghost">
                Meet the team <ArrowRight />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="ml-1 space-y-8 border-l-2 border-line pl-9 md:pl-10">
              {homeTeamStats.map((stat) => (
                <li key={stat.label} className="relative">
                  <span className="absolute -left-[43px] top-1.5 h-3 w-3 rounded-full bg-steel ring-4 ring-mist md:-left-[47px]" />
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

      {/* ---------- Our home ---------- */}
      <section className="border-b border-line bg-white">
        <div className="container-nl grid items-center gap-10 py-20 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:py-24">
          <Reveal>
            <div className="relative overflow-hidden border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/office.jpg"
                alt="Regent Street, London — Northlight is based nearby at 33 Glasshouse Street"
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
            <h2 className="mt-4 text-3xl leading-tight text-ink md:text-[34px]">
              In the heart of London&apos;s West End
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-inksoft">
              Northlight is based at 33 Glasshouse Street, just off Piccadilly Circus — at the centre
              of London&apos;s investment-management community.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="ghost">
                Get in touch <ArrowRight />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <ContactCTA />
    </>
  );
}

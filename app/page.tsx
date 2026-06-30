import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, ButtonLink, ArrowRight } from "@/components/ui";
import { ContactCTA } from "@/components/ContactCTA";
import { firmFacts, process, strategies, teamStats } from "@/lib/content";

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
            <div className="h-0.5 w-16 bg-silver" />
            <Eyebrow light className="mt-6">
              Northlight Group · European Credit Investing
            </Eyebrow>
            <h1 className="mt-5 text-4xl leading-[1.08] md:text-[52px] md:leading-[1.06]">
              A London-based investment manager specialising in European corporate credit.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#D2DCE5]">
              Consistent, positive and uncorrelated returns through every market environment — with an
              emphasis on liquidity and capital preservation.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-[14px] font-medium text-[#CDD8E2]">
              {["Investing since 2009", "FCA & SEC regulated", "European high-yield focus"].map(
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

      {/* ---------- Who we are ---------- */}
      <section className="border-b border-line bg-white">
        <div className="container-nl grid gap-10 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-24">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-ink md:text-[36px]">
              A European asset manager with its own ethos
            </h2>
          </Reveal>
          <Reveal delay={120}>
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
      </section>

      {/* ---------- Statement numbers (full-width band) ---------- */}
      <section className="border-b border-navyline bg-ink text-white">
        <div className="container-nl py-14 md:py-16">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {firmFacts.map((fact, i) => (
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

      {/* ---------- Process ---------- */}
      <section className="border-b border-line bg-mist">
        <div className="container-nl py-20 md:py-24">
          <Reveal>
            <Eyebrow>Investment process</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink md:text-[34px]">
              A repeatable, four-stage discipline
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} className="bg-white p-7">
                <h3 className="text-lg text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-inksoft">{step.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm font-semibold text-steeldeep hover:text-ink"
            >
              Explore our process <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Strategies ---------- */}
      <section className="border-b border-line bg-white">
        <div className="container-nl py-20 md:py-24">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 text-3xl text-ink md:text-[34px]">Our strategies</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {strategies.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/strategies#${s.slug}`}
                  className="group flex h-full flex-col border border-line bg-white p-8 transition-colors hover:border-graphite"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-steeldeep">
                    {s.tag}
                  </span>
                  <h3 className="mt-3 text-[22px] leading-snug text-ink">{s.name}</h3>
                  <p className="mt-2 text-[13px] font-medium text-muted">{s.structure}</p>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-inksoft">{s.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 border-t border-line pt-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink">
                    View strategy <ArrowRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
            <dl className="grid grid-cols-3 gap-px overflow-hidden border border-line bg-line">
              {teamStats.map((stat) => (
                <div key={stat.label} className="bg-white p-5">
                  <dt className="font-serif text-2xl font-semibold text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-[12px] leading-snug text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <ContactCTA />
    </>
  );
}

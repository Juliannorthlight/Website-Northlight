import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { strategies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Strategies",
  description:
    "Northlight's strategies: the European Fundamental Credit Fund, the MFM European Credit Opportunities UCITS, insurance long-only mandates and co-investments.",
};

export default function StrategiesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Our strategies"
        intro="A single fundamental, event-driven approach to European credit, expressed across vehicles designed for different investors and objectives."
      />

      <section className="bg-white">
        <div className="container-nl py-20">
          <div className="space-y-5">
            {strategies.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <article
                  id={s.slug}
                  className="scroll-mt-24 border border-line bg-white p-8 md:p-10"
                >
                  <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-steeldeep">
                        {s.tag}
                      </span>
                      <h2 className="mt-3 text-2xl text-ink md:text-[30px]">{s.name}</h2>
                      <p className="mt-2 text-[13px] font-medium text-graphite">
                        {s.structure}
                      </p>
                      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-inksoft">
                        {s.summary}
                      </p>
                      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5">
                        {s.meta.map((m) => (
                          <div key={m.label}>
                            <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                              {m.label}
                            </dt>
                            <dd className="mt-0.5 text-[14px] font-medium text-ink">{m.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div className="md:border-l md:border-line md:pl-8">
                      <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                        Characteristics
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {s.points.map((point) => (
                          <li
                            key={point}
                            className="relative pl-5 text-[15px] leading-relaxed text-inksoft"
                          >
                            <span className="absolute left-0 top-[10px] h-px w-2.5 bg-steel" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {s.shareClasses && (
                        <div className="mt-7">
                          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                            Share classes
                          </h3>
                          <div className="mt-3 overflow-x-auto border border-line">
                            <table className="w-full border-collapse text-sm">
                              <thead>
                                <tr className="bg-mist2 text-left">
                                  <th className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-inksoft">
                                    Class
                                  </th>
                                  <th className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-inksoft">
                                    ISIN
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {s.shareClasses.map((sc) => (
                                  <tr key={sc.class} className="border-t border-line">
                                    <td className="px-4 py-2.5 font-medium text-ink">{sc.class}</td>
                                    <td className="px-4 py-2.5 font-mono text-[13px] text-muted">
                                      {sc.isin}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 border-t border-line pt-8">
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              Target returns are objectives only, are not guaranteed, and may not be achieved. Past
              performance is not a reliable indicator of future results. The information on this page
              is a summary and does not constitute an offer or solicitation to invest, or investment
              advice. Fund documentation is available to qualified investors on request.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

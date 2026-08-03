import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StrategyShowcase } from "@/components/StrategyShowcase";
import { ContactCTA } from "@/components/ContactCTA";

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
        image="/heroes/aerial.jpg"
        imagePosition="center"
      />

      <StrategyShowcase />

      <section className="bg-white">
        <div className="container-nl py-10">
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            Target returns are objectives only, are not guaranteed, and may not be achieved. Past
            performance is not a reliable indicator of future results. The information on this page
            is a summary and does not constitute an offer or solicitation to invest, or investment
            advice. Fund documentation is available to qualified investors on request.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

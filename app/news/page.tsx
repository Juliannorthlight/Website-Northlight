import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { news } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description: "News and announcements from Northlight Group.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="News & announcements"
        intro="Firm news, fund milestones and recognition. Detailed commentary is shared directly with investors."
      />

      <section className="bg-white">
        <div className="container-nl py-20">
          {news.length === 0 ? (
            <Reveal>
              <p className="text-[17px] leading-relaxed text-inksoft">
                There are no public announcements at this time. Please check back, or contact
                Investor Relations for the latest information.
              </p>
            </Reveal>
          ) : (
            <div className="grid gap-5 md:grid-cols-3">
              {news.map((item, i) => (
                <Reveal key={item.title + i} delay={i * 80}>
                  <article className="flex h-full flex-col border border-line bg-white p-7">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-steeldeep">
                        {item.tag}
                      </span>
                      <span className="font-mono text-[11px] text-muted">{item.date}</span>
                    </div>
                    <h2 className="mt-4 text-xl leading-snug text-ink">{item.title}</h2>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-inksoft">
                      {item.excerpt}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

          <Reveal className="mt-12 border-t border-line pt-8">
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              Items shown are placeholders. This page is ready to be populated with approved firm
              announcements; detailed performance and commentary continue to be shared directly with
              investors.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

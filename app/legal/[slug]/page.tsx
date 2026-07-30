import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegalDoc, legalDocs } from "@/lib/legal";
import { firm } from "@/lib/content";

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const doc = getLegalDoc(params.slug);
  if (!doc) return { title: "Not found" };
  return {
    title: doc.title,
    description: `${doc.title} — Northlight Group LLP regulatory disclosure.`,
  };
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const doc = getLegalDoc(params.slug);
  if (!doc) notFound();

  return (
    <section className="bg-white">
      <div className="container-nl pb-14 pt-[116px] md:pb-20 md:pt-[140px]">
        <div className="grid gap-12 md:grid-cols-[230px_1fr] lg:gap-16">
          {/* Left index — mirrors the firm's previous disclosures menu */}
          <aside className="md:border-r md:border-line md:pr-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-steeldeep">
              Disclosures
            </p>
            <nav className="mt-4 flex flex-col gap-px" aria-label="Legal documents">
              {legalDocs.map((d) => {
                const active = d.slug === doc.slug;
                return (
                  <Link
                    key={d.slug}
                    href={`/legal/${d.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`border-l-2 py-2 pl-3 text-[14px] leading-snug transition-colors ${
                      active
                        ? "border-ink font-semibold text-ink"
                        : "border-transparent text-inksoft hover:border-line hover:text-ink"
                    }`}
                  >
                    {d.title}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Document */}
          <article className="min-w-0 max-w-prose">
            <h1 className="text-3xl text-ink md:text-[38px]">{doc.title}</h1>
            {doc.updated && (
              <p className="mt-3 text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                Last updated · {doc.updated}
              </p>
            )}
            <div className="mt-8 space-y-5">
              {doc.blocks.map((block, i) => {
                if (block.type === "h") {
                  return (
                    <h2 key={i} className="!mt-10 text-xl text-ink first:!mt-0">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "p") {
                  return (
                    <p key={i} className="text-[16px] leading-relaxed text-inksoft">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="space-y-2.5 pl-1">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="relative pl-5 text-[16px] leading-relaxed text-inksoft"
                        >
                          <span className="absolute left-0 top-[11px] h-px w-2.5 bg-steel" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                // dl — purpose / lawful basis pairs
                return (
                  <div key={i} className="overflow-hidden border border-line">
                    <div className="grid grid-cols-1 bg-mist2 sm:grid-cols-2">
                      <div className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-inksoft">
                        Purpose
                      </div>
                      <div className="hidden px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-inksoft sm:block">
                        Lawful basis for processing
                      </div>
                    </div>
                    {block.rows.map((row, j) => (
                      <div
                        key={j}
                        className="grid grid-cols-1 border-t border-line sm:grid-cols-2"
                      >
                        <div className="px-4 py-4 text-[15px] leading-relaxed text-ink sm:border-r sm:border-line">
                          {row.term}
                        </div>
                        <div className="px-4 py-4 text-[15px] leading-relaxed text-inksoft">
                          {row.def}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 border-t border-line pt-6 text-[13px] leading-relaxed text-muted">
              <p>
                {firm.legalName} · {firm.address.join(", ")}
              </p>
              <p className="mt-1">
                Questions? Contact{" "}
                <a href="mailto:compliance@northlight.co.uk" className="text-steeldeep hover:text-ink">
                  compliance@northlight.co.uk
                </a>
                .
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { firm } from "@/lib/content";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with Investor Relations"
        intro="For information on our strategies, due-diligence materials or portal access, we welcome your enquiry."
      />

      <section className="bg-white">
        <div className="container-nl grid gap-12 py-20 md:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <div>
            <Eyebrow>Northlight Group LLP</Eyebrow>
            <address className="mt-5 space-y-1 text-[17px] not-italic leading-relaxed text-inksoft">
              {firm.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>

            <dl className="mt-8 space-y-4 border-t border-line pt-8">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Telephone
                </dt>
                <dd className="mt-1 text-[17px] text-ink">{firm.tel}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Email
                </dt>
                <dd className="mt-1 text-[17px]">
                  <a href={`mailto:${firm.email}`} className="text-steeldeep hover:text-ink">
                    {firm.email}
                  </a>
                </dd>
              </div>
            </dl>

            {/* Google Maps embed — no API key required */}
            <div className="mt-8 overflow-hidden border border-line">
              <iframe
                title={`Map of ${firm.legalName}, ${firm.mapsQuery}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(firm.mapsQuery)}&output=embed`}
                className="block h-[320px] w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Enquiry form */}
          <div className="border border-line bg-mist p-8 md:p-10">
            {sent ? (
              <div>
                <h2 className="text-2xl text-ink">Thank you for your enquiry</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-inksoft">
                  This is a preview form. In production it routes to Investor Relations. In the
                  meantime, please email{" "}
                  <a href={`mailto:${firm.email}`} className="text-steeldeep hover:text-ink">
                    {firm.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-steeldeep hover:text-ink"
                >
                  &larr; Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h2 className="text-xl text-ink">Make an enquiry</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" />
                  <Field label="Organisation" name="org" />
                  <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                  <div className="sm:col-span-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      Investor type
                    </span>
                    <select
                      required
                      defaultValue=""
                      className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm text-inktext outline-none focus:border-steel"
                    >
                      <option value="" disabled>
                        Please select…
                      </option>
                      <option>Institutional investor</option>
                      <option>Wealth manager</option>
                      <option>Family office</option>
                      <option>Pension fund</option>
                      <option>Consultant</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <label className="block sm:col-span-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      Message
                    </span>
                    <textarea
                      rows={4}
                      className="mt-2 w-full resize-none border border-line bg-white px-4 py-3 text-sm text-inktext outline-none focus:border-steel"
                      placeholder="How can we help?"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy sm:w-auto sm:px-8"
                >
                  Submit enquiry
                </button>
                <p className="mt-5 text-[11px] leading-relaxed text-muted">
                  By submitting you agree that Northlight may contact you regarding your enquiry. We
                  handle your information in line with our Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{label}</span>
      <input
        type={type}
        name={name}
        required
        className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm text-inktext outline-none focus:border-steel"
      />
    </label>
  );
}

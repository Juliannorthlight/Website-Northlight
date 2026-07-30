"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { firm } from "@/lib/content";

// Leaflet needs the browser — load the map client-side only.
const LocationMap = dynamic(() => import("@/components/LocationMap"), { ssr: false });

// Formspree endpoint — delivers submissions to Investor Relations.
const FORM_ENDPOINT = "https://formspree.io/f/xvzjwzbd";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with Investor Relations"
        intro="For information on our strategies, due-diligence materials or any other enquiry, we welcome you to get in touch."
        image="/heroes/walkway.jpg"
        imagePosition="center"
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
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Telephone
                </dt>
                <dd className="mt-1 text-[17px] text-ink">{firm.tel}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Email
                </dt>
                <dd className="mt-1 text-[17px]">
                  <a href={`mailto:${firm.email}`} className="text-steeldeep hover:text-ink">
                    {firm.email}
                  </a>
                </dd>
              </div>
            </dl>

            {/* CARTO Positron map via Leaflet — interactive, no tracking cookies */}
            <div className="mt-8 overflow-hidden border border-line">
              <LocationMap />
            </div>
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(firm.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-steeldeep hover:text-ink"
            >
              Open in Google Maps ↗
            </a>
          </div>

          {/* Enquiry form */}
          <div className="border border-line bg-mist p-8 md:p-10">
            {status === "sent" ? (
              <div>
                <h2 className="text-2xl text-ink">Thank you for your enquiry</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-inksoft">
                  Your message has been sent to our Investor Relations team and we will be in touch
                  shortly. For anything urgent, you can reach us directly at{" "}
                  <a href={`mailto:${firm.email}`} className="text-steeldeep hover:text-ink">
                    {firm.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-steeldeep hover:text-ink"
                >
                  &larr; Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl text-ink">Make an enquiry</h2>

                {/* Subject line for the delivered email + spam honeypot */}
                <input type="hidden" name="_subject" value="New enquiry — northlight.co.uk" />
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" />
                  <Field label="Organisation" name="organisation" />
                  <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="investorType"
                      className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted"
                    >
                      Investor type
                    </label>
                    <select
                      id="investorType"
                      name="investor type"
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
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Message
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="mt-2 w-full resize-none border border-line bg-white px-4 py-3 text-sm text-inktext outline-none focus:border-steel"
                      placeholder="How can we help?"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-6 w-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
                >
                  {status === "submitting" ? "Sending…" : "Submit enquiry"}
                </button>

                {status === "error" && (
                  <p className="mt-4 text-[13px] leading-relaxed text-[#B4402E]">
                    Something went wrong sending your enquiry. Please try again, or email us directly
                    at{" "}
                    <a href={`mailto:${firm.email}`} className="font-semibold underline">
                      {firm.email}
                    </a>
                    .
                  </p>
                )}

                <p className="mt-5 text-[11px] leading-relaxed text-muted">
                  By submitting you agree that Northlight may contact you regarding your enquiry. We
                  handle your information in line with our{" "}
                  <a href="/legal/privacy-policy" className="underline hover:text-ink">
                    Privacy Policy
                  </a>
                  .
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
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required
        className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm text-inktext outline-none focus:border-steel"
      />
    </label>
  );
}

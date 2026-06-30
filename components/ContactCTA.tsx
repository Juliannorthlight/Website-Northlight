import { Eyebrow, ButtonLink, ArrowRight } from "./ui";
import { firm } from "@/lib/content";

export function ContactCTA() {
  return (
    <section className="bg-ink text-white">
      <div className="container-nl grid items-center gap-10 py-16 md:grid-cols-[1.2fr_1fr] md:py-20">
        <div>
          <Eyebrow light>Contact</Eyebrow>
          <h2 className="mt-4 text-3xl text-white md:text-[34px]">
            Speak with our Investor Relations team
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#C8D4DF]">
            For information on our strategies, due-diligence materials or any other enquiry, we
            welcome you to get in touch.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="ondark-solid">
              Contact us <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/strategies" variant="ondark">
              Our strategies
            </ButtonLink>
          </div>
        </div>
        <div className="border border-navyline bg-navy2 p-7">
          <p className="font-semibold text-white">{firm.legalName}</p>
          <div className="mt-3 space-y-1 text-sm text-[#C8D4DF]">
            {firm.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-4 space-y-1 text-sm text-[#C8D4DF]">
            <p>{firm.tel}</p>
            <p>
              <a href={`mailto:${firm.email}`} className="text-steel hover:text-white">
                {firm.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

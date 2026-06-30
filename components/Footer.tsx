import Link from "next/link";
import { Logo } from "./Logo";
import { firm, mainNav, legalNav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy2 text-[#A9BAC8]">
      <div className="container-nl py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-6 w-auto text-white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              A London-based investment manager specialising in European credit since 2009.
            </p>
            <address className="mt-5 text-sm not-italic leading-relaxed">
              {firm.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-silver">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-silver">
              Disclosures
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-navyline pt-7">
          <p className="max-w-4xl text-xs leading-relaxed text-[#7E92A4]">
            {firm.regulatory} This website is provided for information only and does not constitute
            an offer or solicitation to buy or sell any investment. Past performance is not a
            reliable indicator of future results.
          </p>
          <p className="mt-5 text-xs text-[#6A7E90]">
            &copy; {new Date().getFullYear()} {firm.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { mainNav } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Switch the bar from transparent (blended into the hero) to solid navy on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));
  // Pages that open with a dark hero — the bar can start transparent over them.
  // (Legal pages have a white top, so they keep the solid navy bar.)
  const HERO_ROUTES = ["/", "/about", "/strategies", "/process", "/team", "/contact"];
  const transparent = HERO_ROUTES.includes(pathname) && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ease-out ${
        transparent ? "translate-y-6 bg-transparent" : "translate-y-0 bg-ink shadow-sm shadow-black/20"
      }`}
    >
      <div className="container-nl flex h-[84px] items-center justify-between">
        <Link href="/" aria-label="Northlight Group — home" className="shrink-0">
          <Logo
            className={`w-auto text-white transition-all duration-300 ${
              transparent ? "h-14" : "h-11"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex lg:gap-8" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b-2 pb-0.5 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "border-steel text-white"
                  : "border-transparent text-[#C8D4DF] hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-navyline bg-ink md:hidden" aria-label="Mobile">
          <div className="container-nl flex flex-col py-2">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-navyline py-3 text-[15px] ${
                  isActive(item.href) ? "text-white" : "text-[#C8D4DF]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

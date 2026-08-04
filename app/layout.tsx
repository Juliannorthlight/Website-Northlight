import type { Metadata } from "next";
import { Libre_Franklin, Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Body / UI: a clean grotesque (Franklin Gothic heritage).
const sans = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

// Display: Archivo — a confident, contemporary grotesque for headlines and
// figures. A deliberate move away from the serif (which read as generic/AI),
// toward the clean bold-sans headline used by institutional credit peers.
// The CSS var stays --font-serif so existing `font-serif` utilities pick it up.
const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northlight.co.uk"),
  title: {
    default: "Northlight Group — European Credit Investing",
    template: "%s · Northlight Group",
  },
  description:
    "Northlight Group is a London-based investment manager specialising in European credit. Fundamental research, risk discipline and consistent returns since 2009.",
  // Draft: keep it out of search engines until ready to go public.
  robots: { index: false, follow: false },
  // TEMP deploy-pipeline check — removed right after verifying.
  other: { "deploy-check": "nl-deploycheck-8f3a2c" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

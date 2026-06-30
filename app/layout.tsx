import type { Metadata } from "next";
import { Libre_Franklin, Spectral } from "next/font/google";
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

// Display: a transitional serif used for headlines only — the gravitas of an
// established asset manager, and a deliberate step away from the all-sans look.
const serif = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

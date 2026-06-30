import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// One institutional grotesque used throughout — Franklin Gothic heritage,
// the register established asset managers use. No serif, no monospace.
const sans = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
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
    <html lang="en" className={sans.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

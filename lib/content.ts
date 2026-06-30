// Central content store for the Northlight site.
// Copy reflects the firm-approved website brief (Sean / May 2026 deck).

export const firm = {
  name: "Northlight Group",
  legalName: "Northlight Group LLP",
  address: ["33 Glasshouse Street", "London W1B 5DG", "United Kingdom"],
  tel: "+44 (0)20 7518 9235",
  email: "IR@northlight.co.uk",
  mapsQuery: "33 Glasshouse Street, London W1B 5DG",
  regulatory:
    "Northlight Group LLP is authorised and regulated by the Financial Conduct Authority (FCA) in the UK as a full-scope AIFM and is registered as an Exempt Reporting Adviser with the US Securities and Exchange Commission (SEC).",
};

export const mainNav = [
  { href: "/about", label: "About" },
  { href: "/strategies", label: "Strategies" },
  { href: "/process", label: "Process" },
  { href: "/team", label: "Team" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const legalNav = [
  { href: "/legal/uk-stewardship-code", label: "UK Stewardship Code" },
  { href: "/legal/sfdr-disclosure", label: "SFDR Disclosure" },
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/financial-promotions-disclaimer", label: "Financial Promotions Disclaimer" },
  { href: "/legal/email-disclaimer", label: "Email Disclaimer" },
];

export const firmFacts = [
  { value: "2009", label: "Founded in London" },
  { value: "16yr", label: "Flagship track record" },
  { value: "90+", label: "Years of combined credit experience" },
  { value: "FCA · SEC", label: "Regulated — full-scope AIFM" },
];

export const process = [
  {
    n: "01",
    title: "Research",
    body: "Fundamental, bottom-up analysis of issuers across the European credit spectrum, focused on identifying clear catalysts and asymmetric, often event-driven opportunities.",
  },
  {
    n: "02",
    title: "Portfolio Construction",
    body: "Conviction-weighted positions — balanced long and short — sized to liquidity and the asymmetry of expected return.",
  },
  {
    n: "03",
    title: "Risk Management",
    body: "Liquidity-led risk control with a systematic macro-overlay to preserve capital and protect the downside in all market conditions.",
  },
  {
    n: "04",
    title: "Monitoring",
    body: "Active surveillance and trading of positions around catalysts and changing conditions through the cycle.",
  },
];

export type ShareClass = { class: string; isin: string };

export type Strategy = {
  slug: string;
  tag: string;
  name: string;
  structure: string;
  summary: string;
  meta: { label: string; value: string }[];
  points: string[];
  shareClasses?: ShareClass[];
};

export const strategies: Strategy[] = [
  {
    slug: "european-fundamental-credit",
    tag: "Flagship · Cayman",
    name: "Northlight European Fundamental Credit Fund",
    structure: "Long / short · monthly liquidity",
    summary:
      "Long/short European credit fund offering monthly liquidity, targeting double-digit returns with a focus on capital preservation.",
    meta: [
      { label: "Structure", value: "Cayman" },
      { label: "Liquidity", value: "Monthly" },
      { label: "Track record", value: "16-year" },
      { label: "Target", value: "Double-digit returns" },
    ],
    points: [
      "Long/short investing across European high-yield bonds, loans and credit derivatives",
      "Idiosyncratic, catalyst-driven opportunities sourced bottom-up",
      "Systematic macro-overlay intended to preserve capital",
      "Monthly liquidity",
    ],
  },
  {
    slug: "european-credit-opportunities",
    tag: "UCITS",
    name: "MFM Northlight European Credit Opportunities Fund",
    structure: "Long / short · weekly liquidity",
    summary:
      "Long/short European credit fund offering weekly liquidity, targeting high single-digit returns with a focus on capital preservation.",
    meta: [
      { label: "Structure", value: "UCITS" },
      { label: "Liquidity", value: "Weekly" },
      { label: "Target", value: "High single-digit returns" },
    ],
    points: [
      "The flagship philosophy delivered in a regulated UCITS structure",
      "Primarily bonds, with the same fundamental, event-driven approach",
      "Weekly dealing and daily transparency",
      "Suitable for investors requiring a regulated European vehicle",
    ],
    // Currency share classes — ISINs to be confirmed before launch.
    shareClasses: [
      { class: "USD I (Acc)", isin: "[ISIN to confirm]" },
      { class: "EUR I (Acc)", isin: "[ISIN to confirm]" },
      { class: "EUR M (Acc)", isin: "[ISIN to confirm]" },
      { class: "EUR Z (Acc)", isin: "[ISIN to confirm]" },
      { class: "GBP I (Acc)", isin: "[ISIN to confirm]" },
      { class: "CHF I (Acc)", isin: "[ISIN to confirm]" },
    ],
  },
  {
    slug: "insurance-long-only",
    tag: "Bespoke · Insurance",
    name: "Insurance Long-Only Mandates",
    structure: "Long-only · segregated",
    summary:
      "Long-only insurance portfolio benefiting from income and short duration to maximise capital efficiency.",
    meta: [
      { label: "Style", value: "Long-only" },
      { label: "Format", value: "Segregated mandate" },
      { label: "Focus", value: "Income · short duration" },
    ],
    points: [
      "Designed for regulated insurance capital",
      "Income generation with a short-duration profile",
      "Structured to maximise capital efficiency",
      "Customised reporting and governance",
    ],
  },
  {
    slug: "co-investments",
    tag: "Bespoke",
    name: "Co-Investments",
    structure: "Multi-year · highest conviction",
    summary:
      "Best ideas targeting a 1.5–2.0x multiple over a multi-year investment period.",
    meta: [
      { label: "Horizon", value: "Multi-year" },
      { label: "Target", value: "1.5–2.0x multiple" },
      { label: "Selection", value: "Highest conviction" },
    ],
    points: [
      "Concentrated exposure to the team's highest-conviction ideas",
      "Targeting a 1.5–2.0x multiple over the investment period",
      "Multi-year horizon",
      "Offered selectively to aligned investors",
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  languages: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Cyril Armleder",
    role: "Partner & Portfolio Manager",
    languages: "Fluent in French and English",
    bio: "Cyril is a Partner of Northlight Group and a member of the Investment and Management Committees for the Northlight funds. He was previously a Partner at GLG Partners (2005–2009), where he co-managed the GLG Credit Fund and advised on credit strategies across other GLG funds. At Goldman Sachs (2001–2005) he established and headed the iTraxx credit index and derivatives trading desk, having co-run the European TMT credit sectors and helped set up the European Credit Trading Desk. He began his career at Commerzbank (1993–2001) as a credit derivatives trader during the emergence of the CDS market. Cyril holds an MSc in Mathematical Finance from Birkbeck College, University of London, and a degree in Macroeconomics from HEC Lausanne.",
  },
  {
    name: "Shahar Zer",
    role: "Partner & Portfolio Manager",
    languages: "Fluent in English and Hebrew",
    bio: "Shahar is a Partner of Northlight Group and a member of the Investment and Management Committees for the Northlight funds. He was previously at JP Morgan Private Bank (2008–2009), where he led the establishment of the European Global Sales Trading desk. At Lehman Brothers Europe (1998–2008) he ran the Leveraged Loan Trading Desk, managed Syndicate Desk risk (2007–2008) and built out the European high-yield trading desk, after earlier working as a high-yield and distressed credit analyst. He began his Lehman Brothers career in the M&A group of the Investment Bank. Shahar holds a BA in Economics and Political Science from the University of Rochester and an MSc in Finance and Accounting from the London School of Economics.",
  },
];

export const teamStats = [
  { value: "90+", label: "Years of combined credit experience" },
  { value: "7", label: "Languages spoken across the team" },
  { value: "2009", label: "Investing together since" },
];

export type NewsItem = {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
};

// Placeholder entries — structure ready to populate with approved announcements.
export const news: NewsItem[] = [
  {
    date: "2026",
    tag: "Firm",
    title: "[News headline placeholder]",
    excerpt: "A short summary of the announcement or update will appear here once published.",
  },
  {
    date: "2026",
    tag: "Funds",
    title: "[News headline placeholder]",
    excerpt: "A short summary of the announcement or update will appear here once published.",
  },
  {
    date: "2025",
    tag: "Recognition",
    title: "[News headline placeholder]",
    excerpt: "A short summary of the announcement or update will appear here once published.",
  },
];

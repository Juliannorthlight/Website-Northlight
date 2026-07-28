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
  { href: "/process-risk", label: "Process & Risk" },
  // { href: "/process", label: "Process" }, // old detailed process page — replaced by /process-risk (concise); code kept in app/_process
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
];

export type ProcessStep = {
  n: string;
  title: string;
  short: string;
  body: string;
  detail: string[];
};

export const process: ProcessStep[] = [
  {
    n: "01",
    title: "Research",
    short: "Fundamental, bottom-up credit analysis.",
    body: "Fundamental, bottom-up analysis of issuers across the European credit spectrum, focused on identifying clear catalysts and asymmetric, often event-driven opportunities.",
    detail: [
      "Free-cash-flow generation modelled with revenue and cost sensitivity analysis.",
      "Peer comparables, transaction multiples, loan-to-value and recovery analysis.",
      "Security-level work on covenants, capital structure and country-specific legal points.",
      "Direct dialogue with management to understand strategy and the objectives of primary shareholders.",
      "Market analysis of relative value, dealer positioning and liquidity to gauge opportunity cost.",
    ],
  },
  {
    n: "02",
    title: "Portfolio Construction",
    short: "Conviction-weighted, sized to liquidity.",
    body: "Conviction-weighted positions — balanced long and short — sized to liquidity and the asymmetry of expected return.",
    detail: [
      "Every position must be compelling on both a standalone and a portfolio basis.",
      "Typically around two-thirds long and one-third short.",
      "Five return drivers — long, short, relative value, event and trading — for flexibility across conditions.",
      "Quantified downside and upside scenarios with explicit probability analysis.",
    ],
  },
  {
    n: "03",
    title: "Risk Management",
    short: "Liquidity-led, with a macro-overlay.",
    body: "Liquidity-led risk control with a systematic macro-overlay to preserve capital and protect the downside in all market conditions.",
    detail: [
      "The overlay is expressed through CDS and index or equity options as a portfolio hedge.",
      "Gross and net exposure actively managed to the prevailing market environment.",
      "Position sizing constrained by liquidity and expected time-to-exit.",
      "Positioning stress-tested against historical drawdown scenarios.",
    ],
  },
  {
    n: "04",
    title: "Monitoring",
    short: "Actively traded around catalysts.",
    body: "Active surveillance and trading of positions around catalysts and changing conditions through the cycle.",
    detail: [
      "Positions revisited as catalysts play out or the original thesis changes.",
      "Continuous reassessment as valuations, conditions and liquidity move.",
      "Actively traded through the cycle rather than held passively.",
    ],
  },
];

// Risk-management summary for the public Process & Risk page.
// Sources: firm's May 2026 deck (macro-overlay, exposure/liquidity sizing, stress-testing)
// + Nicolas's approved public-content list (independent oversight, daily monitoring, limits/drawdown controls).
export const riskManagement = {
  intro:
    "Risk management is integral to the strategy, not a separate step. The approach is liquidity-led, with a systematic macro-overlay designed to preserve capital and protect the downside through all market conditions.",
  points: [
    "Independent risk oversight of the portfolio",
    "Daily monitoring of exposures and liquidity",
    "Gross and net exposure actively managed to the prevailing market environment",
    "Position sizing constrained by liquidity and expected time-to-exit",
    "A systematic macro-overlay expressed through CDS and index or equity options",
    "Positioning stress-tested against historical drawdown scenarios",
    "Defined position limits and drawdown controls",
  ],
};

export type ShareClass = {
  investorType: "Institutional" | "Retail";
  currency: string;
  isin: string;
  bbg?: string;
};

export type Strategy = {
  slug: string;
  tag: string;
  short: string;
  name: string;
  structure: string;
  summary: string;
  headline: { label: string; value: string };
  meta: { label: string; value: string }[];
  points: string[];
  shareClasses?: ShareClass[];
};

export const strategies: Strategy[] = [
  {
    slug: "european-fundamental-credit",
    tag: "Flagship · Cayman",
    short: "Flagship",
    name: "Northlight European Fundamental Credit Fund",
    structure: "Long / short",
    summary:
      "Our flagship strategy — a long/short book across European credit, run for consistent, positive returns with a firm emphasis on capital preservation.",
    headline: { label: "Focus", value: "Absolute, uncorrelated returns" },
    meta: [
      { label: "Structure", value: "Cayman" },
      { label: "Liquidity", value: "Monthly" },
      { label: "Track record", value: "16-year" },
    ],
    points: [
      "Invests across European high-yield bonds, loans and credit derivatives",
      "Idiosyncratic, catalyst-driven opportunities sourced bottom-up",
      "Systematic macro-overlay intended to preserve capital",
      "Balanced long and short — roughly two-thirds long, one-third short",
      "Positive calendar-year performance in 15 of the last 16 years",
      "Historically lower drawdowns than the European High Yield market",
    ],
  },
  {
    slug: "european-credit-opportunities",
    tag: "UCITS",
    short: "UCITS",
    name: "MFM Northlight European Credit Opportunities Fund",
    structure: "Long / short",
    summary:
      "The flagship philosophy in a regulated, onshore UCITS wrapper — the same fundamental, event-driven approach, more widely accessible.",
    headline: { label: "Target", value: "High single-digit returns" },
    meta: [
      { label: "Structure", value: "UCITS" },
      { label: "Liquidity", value: "Weekly" },
      { label: "Track record", value: "Since 2019" },
      { label: "Target", value: "High single-digit returns" },
    ],
    points: [
      "The flagship philosophy delivered in a regulated UCITS structure",
      "Primarily bonds, with the same fundamental, event-driven approach",
      "Daily position transparency",
      "Suitable for investors requiring a regulated European vehicle",
    ],
    // Share classes per the MFM Funds (Lux) DDQ (Sept 2025).
    // All classes are accumulating (Acc) and fully currency-hedged.
    shareClasses: [
      { investorType: "Institutional", currency: "EUR", isin: "LU1340030060", bbg: "MFMECIE LX" },
      { investorType: "Retail", currency: "EUR", isin: "LU1340031464", bbg: "JAEUCRE LX" },
      { investorType: "Institutional", currency: "CHF", isin: "LU1989157695", bbg: "MFMECIC LX" },
      { investorType: "Retail", currency: "CHF", isin: "LU1340031548", bbg: "MFMECRC LX" },
      { investorType: "Institutional", currency: "GBP", isin: "LU1989157778", bbg: "MFMECIG LX" },
      { investorType: "Institutional", currency: "USD", isin: "LU1340030144", bbg: "MFMECIU LX" },
      { investorType: "Retail", currency: "USD", isin: "LU1340031209", bbg: "JAECRUH LX" },
      { investorType: "Institutional", currency: "JPY", isin: "LU3058829923", bbg: "MFMNECI LX" },
      { investorType: "Retail", currency: "JPY", isin: "LU3058830004" },
    ],
  },
  {
    slug: "insurance-long-only",
    tag: "Bespoke · Insurance",
    short: "Insurance",
    name: "Insurance Long-Only Mandates",
    structure: "Segregated mandate",
    summary:
      "A portfolio built for insurance capital, drawing on income and short duration to work capital efficiently.",
    headline: { label: "Style", value: "Long-only" },
    meta: [
      { label: "Style", value: "Long-only" },
      { label: "Format", value: "Segregated mandate" },
      { label: "Focus", value: "Income · short duration" },
    ],
    points: [
      "Designed for regulated insurance capital",
      "Income generation with a short-duration profile",
      "Customised reporting and governance",
      "Aligned with each mandate's capital constraints",
    ],
  },
  {
    slug: "co-investments",
    tag: "Bespoke",
    short: "Co-Investments",
    name: "Co-Investments",
    structure: "By invitation",
    summary:
      "The team's highest-conviction ideas, offered selectively to aligned investors alongside the funds.",
    headline: { label: "Approach", value: "Concentrated & high-conviction" },
    meta: [
      { label: "Horizon", value: "Multi-year" },
      { label: "Selection", value: "Highest conviction" },
    ],
    points: [
      "Concentrated exposure across a small number of positions",
      "Structured around specific catalysts and events",
      "Offered selectively to aligned investors",
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Cyril Armleder",
    role: "Partner & Portfolio Manager",
    photo: "/team/cyril-armleder.jpg",
    bio: "Cyril is a Partner of Northlight Group and a member of the Investment and Management Committees for the Northlight funds. He was previously a Partner at GLG Partners (2005–2009), where he co-managed the GLG Credit Fund and advised on credit strategies across other GLG funds. At Goldman Sachs (2001–2005) he established and headed the iTraxx credit index and derivatives trading desk, having co-run the European TMT credit sectors and helped set up the European Credit Trading Desk. He began his career at Commerzbank (1993–2001) as a credit derivatives trader during the emergence of the CDS market. Cyril holds an MSc in Mathematical Finance from Birkbeck College, University of London, and a degree in Macroeconomics from HEC Lausanne.",
  },
  {
    name: "Shahar Zer",
    role: "Partner & Portfolio Manager",
    photo: "/team/shahar-zer.jpg",
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

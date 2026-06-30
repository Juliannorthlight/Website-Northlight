import Link from "next/link";

type Variant = "primary" | "ghost" | "ondark" | "ondark-solid";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white border border-ink hover:bg-navy",
  ghost:
    "bg-transparent text-ink border border-[#B7C1CB] hover:border-ink",
  ondark:
    "bg-transparent text-white border border-white/45 hover:border-white hover:bg-white/5",
  "ondark-solid":
    "bg-white text-ink border border-white hover:bg-mist",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-[0.01em] transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p className={`${light ? "eyebrow-light" : "eyebrow"} ${className}`}>
      {children}
    </p>
  );
}

export function ArrowRight() {
  return <span aria-hidden="true">&rarr;</span>;
}

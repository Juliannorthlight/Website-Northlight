// Northlight brand mark, recreated as a scalable, theme-aware SVG.
// The wordmark uses currentColor (navy on light grounds, white on navy).
// The triangle sits close in tone to the disc so it reads as an embossed
// beacon rather than a high-contrast shape.

export function Logo({
  className = "",
  title = "Northlight Group",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 140"
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="nl-triangle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F1F3F4" />
          <stop offset="0.4" stopColor="#CBCFD2" />
          <stop offset="1" stopColor="#969BA0" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="70" r="60" fill="#B6BBBF" />
      <polygon points="64,24 108,114 20,114" fill="url(#nl-triangle)" />
      <text
        x="150"
        y="103"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-sans), system-ui, sans-serif",
          fontWeight: 800,
          fontSize: "92px",
          letterSpacing: "-2px",
        }}
      >
        Northlight
      </text>
    </svg>
  );
}

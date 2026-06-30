// Abstract cable-stay motif — a quiet nod to the firm's bridge photography,
// used as a decorative backdrop on navy grounds. Purely presentational.

const targets = [80, 220, 360, 500, 640, 780, 920, 1060, 1200];

export function CableField({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="#34618C" strokeWidth="0.8" opacity="0.4">
        {targets.map((x) => (
          <line key={x} x1="960" y1="-30" x2={x} y2="620" />
        ))}
      </g>
      <line x1="960" y1="-30" x2="960" y2="620" stroke="#5E8DB8" strokeWidth="1.4" opacity="0.5" />
    </svg>
  );
}

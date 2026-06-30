import { CableField } from "./CableField";
import { Eyebrow } from "./ui";

// Standard navy header for interior pages.
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <CableField className="absolute inset-0 h-full w-full opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="container-nl relative z-10 py-20 md:py-24">
        <div className="h-0.5 w-16 bg-silver" />
        <Eyebrow light className="mt-6">
          {eyebrow}
        </Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] md:text-5xl">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C8D4DF]">{intro}</p>
        )}
      </div>
    </section>
  );
}

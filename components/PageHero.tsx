import { CableField } from "./CableField";
import { Eyebrow } from "./ui";

// Standard navy header for interior pages. Pass `image` to show a bridge photo
// (navy duotone, dimmer than the homepage) behind the heading; otherwise the
// abstract cable-stay motif is used.
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageCaption,
  imagePosition = "center 40%",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageCaption?: string;
  imagePosition?: string;
}) {
  return (
    <section className="sticky top-0 -z-10 min-h-[62vh] overflow-hidden bg-ink text-white">
      {image ? (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: imagePosition,
              filter: "grayscale(100%) contrast(1.05) brightness(1.12)",
            }}
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{ background: "linear-gradient(150deg,#2a6aa8 0%,#0B1B2E 92%)", opacity: 0.64 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg,rgba(8,21,36,0.86) 0%,rgba(8,21,36,0.55) 55%,rgba(11,27,46,0.28) 100%)",
            }}
          />
        </>
      ) : (
        <>
          <CableField className="absolute inset-0 h-full w-full opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        </>
      )}

      <div className="nl-hero-in container-nl relative z-10 pb-20 pt-[124px] md:pb-24 md:pt-[148px]">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] md:text-5xl">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C8D4DF]">{intro}</p>
        )}
      </div>

      {image && imageCaption && (
        <span className="absolute bottom-3 right-5 z-10 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
          {imageCaption}
        </span>
      )}
    </section>
  );
}

import { hero, links } from "../data/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark pt-28 pb-24 text-stone-300 lg:min-h-[88svh] lg:pt-36 lg:pb-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[76rem] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="text-[13px] tracking-wide text-dark-muted">
              Bangalore · Frontend Developer
            </p>

            <h1 className="mt-8 font-serif text-[clamp(3rem,7.5vw,5.5rem)] leading-[0.95] tracking-tight text-white">
              Ashirwad
              <br />
              Kumar Jha
            </h1>

            <div className="mt-8 h-px w-16 bg-accent" aria-hidden="true" />

            <p className="mt-8 max-w-xl text-lg leading-snug text-stone-200 lg:text-[1.35rem]">
              {hero.headline}
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-dark-muted lg:text-base">
              {hero.subheadline}
            </p>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4 lg:items-end lg:pb-1">
            <div className="w-full border-t border-dark-border pt-6 lg:max-w-xs lg:border-t-0 lg:pt-0 lg:text-right">
              <p className="text-[11px] uppercase tracking-[0.2em] text-dark-muted">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow text-sm text-stone-200 transition-colors hover:text-white"
                  >
                    <span>GitHub</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow text-sm text-stone-200 transition-colors hover:text-white"
                  >
                    <span>LinkedIn</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${links.email}`}
                    className="link-arrow text-sm text-stone-200 transition-colors hover:text-white"
                  >
                    <span>Email</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { links } from "../data/content";

export function Hero() {
  return (
    <section className="border-b border-border pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-8">
          <h1 className="font-serif text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-ink">
            Ashirwad Kumar Jha
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted lg:text-xl">
            Frontend-focused full-stack developer. I build interfaces and the
            APIs behind them — warehouse ops, billing systems, and the glue
            that keeps them running.
          </p>
        </div>

        <div className="flex flex-col justify-end lg:col-span-4 lg:items-end lg:pb-2">
          <ul className="flex flex-col gap-2 text-sm lg:text-right">
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                github.com/Ashirwad2004
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                linkedin.com/in/ashiwadjha2004
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

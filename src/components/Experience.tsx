import { experience } from "../data/content";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">
        <SectionHeader index="04" title="Experience" />

        <ul className="relative">
          <div
            className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-border lg:block"
            aria-hidden="true"
          />

          {experience.map(({ company, role, period, bullets }, i) => (
            <li
              key={company}
              className="relative grid gap-6 border-b border-border py-10 last:border-b-0 lg:grid-cols-12 lg:gap-8 lg:py-12"
            >
              <div
                className="absolute left-0 top-12 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-white lg:block"
                aria-hidden="true"
              />

              <div className="lg:col-span-3 lg:pl-10">
                <p className="font-serif text-2xl tracking-tight text-ink">
                  {company}
                </p>
                <p className="mt-2 text-sm tabular-nums text-muted">{period}</p>
              </div>

              <div className="lg:col-span-9">
                <p className="text-[15px] font-medium text-ink">{role}</p>
                <ul className="mt-5 space-y-3">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 32)}
                      className="relative pl-0 text-sm leading-relaxed text-muted lg:pl-0"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <span
                className="absolute right-0 top-10 hidden font-serif text-6xl text-border lg:block"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

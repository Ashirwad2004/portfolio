import { experience } from "../data/content";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="mb-12 font-serif text-3xl tracking-tight text-ink lg:mb-16 lg:text-4xl">
          Experience
        </h2>

        <ul className="divide-y divide-border">
          {experience.map(({ company, role, period, description }) => (
            <li
              key={company}
              className="grid gap-2 py-8 first:pt-0 last:pb-0 sm:grid-cols-12 sm:gap-6"
            >
              <div className="sm:col-span-3">
                <p className="font-serif text-xl text-ink">{company}</p>
                <p className="mt-1 text-sm text-muted">{period}</p>
              </div>
              <div className="sm:col-span-9">
                <p className="text-[15px] text-ink">{role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

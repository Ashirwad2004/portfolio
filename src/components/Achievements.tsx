import { achievements, education } from "../data/content";
import { SectionHeader } from "./SectionHeader";

export function Achievements() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader index="05" title="Achievements" className="mb-10" />

            <ul className="space-y-8">
              {achievements.map(({ title, period, description }) => (
                <li
                  key={title}
                  className="border-l-2 border-accent pl-5"
                >
                  <p className="text-[15px] text-ink">
                    {title}
                    <span className="text-muted"> · {period}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-end">
            <SectionHeader index="06" title="Education" className="mb-10" />
            <div className="border border-border p-8 lg:p-10">
              <p className="font-serif text-2xl tracking-tight text-ink">
                {education.degree}
              </p>
              <p className="mt-3 text-sm text-muted">{education.school}</p>
              <p className="mt-1 text-sm tabular-nums text-muted">
                {education.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

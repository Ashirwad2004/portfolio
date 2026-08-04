import { skillGroups } from "../data/content";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">
        <SectionHeader index="03" title="Skills" />

        <dl className="divide-y divide-border border-y border-border">
          {skillGroups.map(({ label, items }) => (
            <div
              key={label}
              className="grid gap-3 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-6"
            >
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted sm:col-span-3">
                {label}
              </dt>
              <dd className="text-[15px] leading-relaxed text-ink sm:col-span-9">
                {items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

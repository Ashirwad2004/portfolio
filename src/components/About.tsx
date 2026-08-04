import { about } from "../data/content";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const [lead, ...rest] = about;

  return (
    <section id="about" className="border-y border-border py-24 lg:py-32">
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">
        <SectionHeader index="02" title="About" />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <blockquote className="font-serif text-[clamp(1.35rem,2.5vw,1.75rem)] leading-snug tracking-tight text-ink lg:col-span-5">
            {lead}
          </blockquote>

          <div className="space-y-5 border-t border-border pt-8 text-[15px] leading-relaxed text-muted lg:col-span-6 lg:col-start-7 lg:border-t-0 lg:pt-0">
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

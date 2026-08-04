import { links } from "../data/content";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="bg-dark py-24 text-stone-300 lg:py-32">
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">
        <SectionHeader
          index="07"
          title="Contact"
          description="Open to frontend and full-stack developer roles."
          dark
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <a
            href={`mailto:${links.email}`}
            className="link-arrow font-serif text-[clamp(1.5rem,4vw,2.75rem)] leading-tight tracking-tight text-white transition-colors hover:text-accent lg:col-span-8"
          >
            <span>{links.email}</span>
            <span aria-hidden="true">↗</span>
          </a>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm lg:col-span-4 lg:justify-end">
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow text-dark-muted transition-colors hover:text-white"
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
                className="link-arrow text-dark-muted transition-colors hover:text-white"
              >
                <span>LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <footer className="mx-auto mt-24 flex max-w-[76rem] items-center justify-between border-t border-dark-border px-6 pt-8 text-xs text-dark-muted lg:px-12">
        <p>© {new Date().getFullYear()} Ashirwad Kumar Jha</p>
        <p className="hidden sm:block">Built with React + TypeScript</p>
      </footer>
    </section>
  );
}

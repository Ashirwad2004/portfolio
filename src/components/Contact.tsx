import { links } from "../data/content";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-3xl tracking-tight text-ink lg:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-sm text-muted">
            Open to developer roles. Reach out directly.
          </p>
        </div>

        <ul className="space-y-4 lg:col-span-7">
          <li>
            <a
              href={`mailto:${links.email}`}
              className="text-[15px] text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {links.email}
            </a>
          </li>
          <li>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              GitHub — Ashirwad2004
            </a>
          </li>
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              LinkedIn — ashiwadjha2004
            </a>
          </li>
        </ul>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-border px-6 pt-8 lg:px-10">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Ashirwad Kumar Jha
        </p>
      </footer>
    </section>
  );
}

const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-dark-border bg-dark/95 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-[76rem] items-center justify-between px-6 py-4 lg:px-12"
        aria-label="Primary"
      >
        <a
          href="#"
          className="font-serif text-base tracking-tight text-white transition-opacity hover:opacity-70"
        >
          Ashirwad Jha
        </a>
        <ul className="flex items-center gap-5 text-[13px] text-dark-muted sm:gap-8">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="hidden sm:block">
            <a
              href="#contact"
              className="text-white transition-colors hover:text-accent"
            >
              Email
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-surface/90 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10"
        aria-label="Primary"
      >
        <a
          href="#"
          className="font-serif text-lg tracking-tight text-ink transition-colors hover:text-accent"
        >
          AKJ
        </a>
        <ul className="flex gap-4 text-xs text-muted sm:gap-6 sm:text-sm">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="transition-colors hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

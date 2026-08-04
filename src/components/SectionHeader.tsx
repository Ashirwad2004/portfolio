type SectionHeaderProps = {
  index: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  index,
  title,
  description,
  className = "",
  dark = false,
}: SectionHeaderProps) {
  return (
    <header className={`mb-14 lg:mb-20 ${className}`}>
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <p
          className={`font-sans text-xs tabular-nums tracking-widest lg:col-span-2 ${
            dark ? "text-dark-muted" : "text-muted"
          }`}
        >
          {index}
        </p>
        <div className="lg:col-span-10">
          <h2
            className={`font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-tight ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mt-4 max-w-lg text-sm leading-relaxed ${
                dark ? "text-dark-muted" : "text-muted"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}

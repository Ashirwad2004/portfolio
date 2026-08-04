type ProjectCardProps = {
  name: string;
  problem: string;
  description: string;
  stack: string;
  detail: string;
  href: string;
  className?: string;
};

export function ProjectCard({
  name,
  problem,
  description,
  stack,
  detail,
  href,
  className = "",
}: ProjectCardProps) {
  const isPlaceholder = href === "#";

  return (
    <article
      className={`group flex flex-col border border-border p-8 transition-colors hover:border-ink/20 lg:p-10 ${className}`}
    >
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Also built
      </p>
      <h3 className="mt-4 font-serif text-3xl tracking-tight text-ink">
        {name}
      </h3>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        {problem}
      </p>
      <p className="mt-5 text-[15px] leading-relaxed text-ink/80">
        {description}
      </p>

      <div className="mt-auto pt-10">
        <p className="text-[11px] tracking-wide text-muted">{stack}</p>
        <p className="mt-3 text-sm text-accent">{detail}</p>
        {isPlaceholder ? (
          <span className="mt-6 inline-block text-sm text-muted">
            Link soon
          </span>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow mt-6 inline-flex text-sm text-ink transition-colors hover:text-accent"
          >
            <span>View project</span>
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  );
}

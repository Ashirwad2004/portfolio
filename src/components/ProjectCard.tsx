type ProjectCardProps = {
  name: string;
  problem: string;
  description: string;
  stack: string;
  detail: string;
  href: string;
  className?: string;
  layout?: "vertical" | "horizontal";
};

export function ProjectCard({
  name,
  problem,
  description,
  stack,
  detail,
  href,
  className = "",
  layout = "vertical",
}: ProjectCardProps) {
  const isPlaceholder = href === "#";

  return (
    <article
      className={`group flex flex-col border border-border bg-white p-6 transition-colors hover:border-accent/40 lg:p-8 ${
        layout === "horizontal" ? "lg:flex-row lg:items-start lg:gap-16" : ""
      } ${className}`}
    >
      <div
        className={`flex flex-1 flex-col ${
          layout === "horizontal" ? "lg:max-w-xl" : ""
        }`}
      >
        <h3 className="font-serif text-2xl tracking-tight text-ink">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{problem}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
          {description}
        </p>
        <p className="mt-6 text-xs uppercase tracking-widest text-muted">
          {stack}
        </p>
        <p className="mt-3 text-sm text-accent">{detail}</p>
      </div>

      {isPlaceholder ? (
        <span className="mt-8 inline-block text-sm text-muted">Link soon</span>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm text-ink underline decoration-border underline-offset-4 transition-colors group-hover:text-accent group-hover:decoration-accent"
        >
          View project →
        </a>
      )}
    </article>
  );
}

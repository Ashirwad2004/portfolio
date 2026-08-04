import { featuredProject } from "../data/content";

export function FeaturedProject() {
  const { name, subtitle, description, features, stack, href } =
    featuredProject;

  return (
    <article className="group grid overflow-hidden border border-border lg:grid-cols-12">
      <div className="flex flex-col justify-between bg-dark p-8 text-stone-300 lg:col-span-5 lg:p-12">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-dark-muted">
            Flagship project
          </p>
          <h3 className="mt-4 font-serif text-4xl tracking-tight text-white lg:text-[2.75rem]">
            {name}
          </h3>
          <p className="mt-2 text-sm text-dark-muted">{subtitle}</p>
          <p className="mt-8 text-[15px] leading-relaxed text-stone-400">
            {description}
          </p>
        </div>

        <div className="mt-10 lg:mt-0">
          <p className="text-[11px] leading-relaxed tracking-wide text-dark-muted">
            {stack}
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow mt-6 inline-flex border border-dark-border px-4 py-2.5 text-sm text-white transition-colors hover:border-accent hover:text-accent"
          >
            <span>finflow.vercel.app</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:col-span-7 [&>div]:border-border [&>div]:p-6 [&>div]:transition-colors [&>div]:group-hover:bg-white lg:[&>div]:p-8 [&>div:nth-child(-n+2)]:border-b sm:[&>div:nth-child(odd)]:border-r">
        {features.map(({ title, description: detail }) => (
          <div key={title}>
            <p className="font-serif text-lg text-ink">{title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{detail}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

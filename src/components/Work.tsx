import { projects } from "../data/content";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  const [first, second, third] = projects;

  return (
    <section id="work" className="border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-serif text-3xl tracking-tight text-ink lg:text-4xl">
            Selected work
          </h2>
          <p className="max-w-sm text-sm text-muted lg:text-right">
            Three products I've built end to end — frontend, backend, and
            deployment.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          <ProjectCard {...first} className="lg:col-span-7" />
          <ProjectCard {...second} className="lg:col-span-5" />
          <ProjectCard
            {...third}
            layout="horizontal"
            className="lg:col-span-12"
          />
        </div>
      </div>
    </section>
  );
}

import { secondaryProject } from "../data/content";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function Work() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[76rem] px-6 lg:px-12">
        <SectionHeader
          index="01"
          title="Selected work"
          description="Production apps shipped end to end — UI, backend integration, and deployment."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <FeaturedProject />
          </div>
          <ProjectCard
            {...secondaryProject}
            className="lg:col-span-6 lg:col-start-7"
          />
        </div>
      </div>
    </section>
  );
}

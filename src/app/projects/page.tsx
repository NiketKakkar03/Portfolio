import type { Metadata } from "next";
import { projectFields, projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects - Niket Kakkar",
};

export default function ProjectsPage() {
  const groupedProjects = projectFields
    .map((field) => ({
      ...field,
      projects: projects.filter((project) => project.field === field.id),
    }))
    .filter((field) => field.projects.length > 0);

  return (
    <div className="flex flex-col gap-12">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="text-muted mt-3 max-w-xl">
          Things I&apos;ve built across software systems, ML/AI, robotics, and
          hardware: MCP servers, streaming pipelines, computer vision, FPGA
          designs, and embedded builds.
        </p>
      </Reveal>

      {groupedProjects.map((field) => (
        <section key={field.id} className="flex flex-col gap-5">
          <Reveal>
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-semibold">{field.label}</h2>
              <p className="text-sm text-muted mt-2 max-w-2xl">
                {field.summary}
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {field.projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

import type { Metadata } from "next";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects — Niket Kakkar",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="text-muted mt-3 max-w-xl">
          Things I&apos;ve built — mostly where machine learning meets real
          systems: MCP servers, streaming pipelines, computer vision, and
          robots.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

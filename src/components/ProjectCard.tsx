"use client";

import { motion } from "motion/react";
import { projectFields, type Project } from "@/lib/data";
import Tag from "@/components/Tag";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const field = projectFields.find((item) => item.id === project.field);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group rounded-xl border border-border bg-card p-6 flex flex-col gap-3 transition-colors hover:border-accent/40"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          {field && (
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
              {field.label}
            </p>
          )}
          <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
            {project.name}
          </h3>
        </div>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="text-muted hover:text-accent transition-colors shrink-0 font-mono text-sm"
          >
            code -&gt;
          </a>
        )}
      </div>
      <p className="text-sm text-muted">{project.oneLiner}</p>
      <ul className="text-sm text-foreground/80 space-y-1.5 list-disc list-inside marker:text-accent/60">
        {project.description.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </motion.article>
  );
}

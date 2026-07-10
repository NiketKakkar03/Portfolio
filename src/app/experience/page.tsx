import type { Metadata } from "next";
import { experience } from "@/lib/data";
import Reveal from "@/components/Reveal";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "Experience — Niket Kakkar",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-10">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Experience
        </h1>
        <p className="text-muted mt-3 max-w-xl">
          BASc Computer Engineering (ML specialization), Queen&apos;s
          University, April 2026. International Engineering Award ($40,000).
        </p>
      </Reveal>

      <ol className="relative border-l border-border ml-2 flex flex-col gap-12">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.role}`} className="pl-8 relative">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <Reveal delay={i * 0.05}>
              <p className="font-mono text-xs text-muted">{job.period}</p>
              <h2 className="text-xl font-semibold mt-1">{job.role}</h2>
              <p className="text-muted text-sm">
                {job.company} · {job.location}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80 list-disc list-inside marker:text-accent/60">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

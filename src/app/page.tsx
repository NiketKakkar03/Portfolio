"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { profile, projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="flex flex-col gap-24">
      {/* Hero */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="pt-16 flex flex-col gap-5"
      >
        <motion.p variants={item} className="font-mono text-sm text-accent">
          {profile.location} - open to SWE / ML / robotics roles
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl font-bold tracking-tight"
        >
          {profile.name}
        </motion.h1>
        <motion.h2 variants={item} className="text-xl sm:text-2xl text-muted">
          {profile.title}
        </motion.h2>
        <motion.p variants={item} className="max-w-xl text-foreground/80 leading-relaxed">
          {profile.tagline} Most recently: built production MCP servers
          connecting LLMs to enterprise compliance data, and led the autonomy
          subsystem of a Mars-rover team.
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="rounded-lg bg-accent text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See projects
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-accent/50 px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent-dim transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 text-sm hover:border-accent/50 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-border px-5 py-2.5 text-sm hover:border-accent/50 hover:text-accent transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.section>

      {/* Featured projects */}
      <section className="flex flex-col gap-8">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold">Featured work</h2>
            <Link
              href="/projects"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              all projects -&gt;
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* Pointers */}
      <section className="grid sm:grid-cols-2 gap-5">
        <Reveal>
          <Link
            href="/experience"
            className="block h-full rounded-xl border border-border bg-card p-6 hover:border-accent/40 transition-colors group"
          >
            <h3 className="font-semibold group-hover:text-accent transition-colors">
              Experience -&gt;
            </h3>
            <p className="text-sm text-muted mt-2">
              MCP servers in production, autonomous rovers, security ML, and
              teaching digital systems.
            </p>
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/about"
            className="block h-full rounded-xl border border-border bg-card p-6 hover:border-accent/40 transition-colors group"
          >
            <h3 className="font-semibold group-hover:text-accent transition-colors">
              About / Now -&gt;
            </h3>
            <p className="text-sm text-muted mt-2">
              Currently going deep on physical AI: VLA models, LeRobot, and
              robots with LLM brains.
            </p>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

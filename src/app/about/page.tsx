import type { Metadata } from "next";
import { now, profile } from "@/lib/data";
import Reveal from "@/components/Reveal";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "About — Niket Kakkar",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-14">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h1>
        <div className="text-foreground/80 mt-4 max-w-xl leading-relaxed space-y-4">
          <p>
            I&apos;m a computer engineer from Queen&apos;s University
            (Class of 2026, ML specialization) based in Toronto. I like
            building the plumbing that lets intelligent systems touch the real
            world — whether that&apos;s an MCP server giving an LLM live access
            to enterprise data, or a perception stack letting a rover drive
            itself.
          </p>
          <p>
            The thread through my work: take a model that works in a notebook
            and make it a system — with real latency budgets, honest
            evaluations, monitoring, and failure modes that fail loudly instead
            of silently.
          </p>
        </div>
      </Reveal>

      <section className="flex flex-col gap-6">
        <Reveal>
          <h2 className="text-2xl font-semibold">{now.heading}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-5">
          {now.items.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-accent">{n.title}</h3>
                <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
                  {n.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <Reveal>
          <h2 className="text-2xl font-semibold">Outside the terminal</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-wrap gap-2">
            {now.interests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal>
        <div className="rounded-xl border border-border bg-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-semibold">Let&apos;s talk</h2>
            <p className="text-sm text-muted mt-1">
              Hiring for software, ML, or robotics roles in Canada? I&apos;d
              love to hear from you.
            </p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-accent text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            {profile.email}
          </a>
        </div>
      </Reveal>
    </div>
  );
}

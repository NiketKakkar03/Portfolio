"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { experience, now, profile, projects, type Project } from "@/lib/data";

const featuredDetails = [
  {
    project: projects.find((project) => project.slug === "tsx-mcp-server")!,
    outcome: "90% fewer redundant API calls",
    responsibility: "MCP server, agent orchestration, search, and caching",
    flow: ["Market data", "FastMCP", "Research agents", "Sourced report"],
    tone: "sage",
  },
  {
    project: projects.find((project) => project.slug === "feature-store")!,
    outcome: "18 ms fastest measured variant",
    responsibility: "Streaming architecture, feature serving, and A/B routing",
    flow: ["Kafka", "Feast", "Redis", "FastAPI"],
    tone: "clay",
  },
  {
    project: projects.find((project) => project.slug === "lift-analysis")!,
    outcome: "14 body keypoints tracked",
    responsibility: "Pose pipeline, bar-path tracking, and confidence gating",
    flow: ["Camera", "YOLOv8 Pose", "Quality gate", "Verdict"],
    tone: "slate",
  },
] as const;

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function ProjectScene({
  detail,
  index,
  onActive,
}: {
  detail: (typeof featuredDetails)[number];
  index: number;
  onActive: (index: number) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.58 });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <article ref={ref} className="project-scene">
      <motion.div {...reveal}>
        <p className="scene-kicker">Featured system · 0{index + 1}</p>
        <h3>{detail.project.name}</h3>
        <p className="scene-intro">{detail.project.oneLiner}</p>

        <dl className="project-proof">
          <div><dt>Outcome</dt><dd>{detail.outcome}</dd></div>
          <div><dt>Responsibility</dt><dd>{detail.responsibility}</dd></div>
        </dl>

        <div className="system-flow" aria-label={`${detail.project.name} system flow`}>
          {detail.flow.map((step, stepIndex) => (
            <div key={step}>
              <span>{step}</span>
              {stepIndex < detail.flow.length - 1 && <i aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="scene-footer">
          <div>{detail.project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
          {detail.project.repo && <a href={detail.project.repo} target="_blank" rel="noreferrer">View source <span>↗</span></a>}
        </div>
      </motion.div>
    </article>
  );
}

function ProjectIndex({ project, index }: { project: Project; index: number }) {
  return (
    <li>
      <span>0{index + 1}</span>
      <strong>{project.name}</strong>
      <span>{project.tech.slice(0, 2).join(" · ")}</span>
      {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`}>↗</a> : <span>—</span>}
    </li>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const threadScale = useTransform(scrollYProgress, [0.02, 0.94], [0, 1]);
  const [activeProject, setActiveProject] = useState(0);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const threadX = useSpring(pointerX, { stiffness: 90, damping: 22 });
  const threadY = useSpring(pointerY, { stiffness: 90, damping: 22 });

  function moveHeroThread(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left - rect.width / 2) * 0.035);
    pointerY.set((event.clientY - rect.top - rect.height / 2) * 0.025);
  }

  return (
    <div className={`editorial-home project-tone-${featuredDetails[activeProject].tone}`}>
      <div className="story-thread" aria-hidden="true"><motion.span style={{ scaleY: threadScale }} /></div>

      <section id="intro" className="story-section hero-section" onPointerMove={moveHeroThread} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
        <motion.div className="hero-signature" style={{ x: threadX, y: threadY }} aria-hidden="true"><span /><i /></motion.div>
        <div className="story-inner hero-editorial">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="hero-meta">
            <span>Toronto, Canada</span><span>Software · ML · Robotics</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
            Building intelligence<br />from <em>models</em> to machines.
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="hero-bottom">
            <p>I&apos;m {profile.name}, a software and machine learning engineer interested in the systems that let intelligence move beyond the screen.</p>
            <div className="hero-links"><a href="#work">Selected work</a><a href={`mailto:${profile.email}`}>Let&apos;s talk</a></div>
          </motion.div>
          <a className="scroll-note" href="#trajectory"><span /> Scroll to follow the story</a>
        </div>
      </section>

      <section id="trajectory" className="story-section trajectory-section">
        <div className="story-inner two-column-story">
          <motion.div {...reveal} className="chapter-label burgundy"><span>01</span> Trajectory</motion.div>
          <div className="trajectory-copy">
            <motion.p {...reveal} className="lead-serif">I followed intelligence from an idea on a screen toward something that can understand and act in the physical world.</motion.p>
            <div className="trajectory-path" aria-label="Machine learning to robotics trajectory">
              {["Machine learning", "Language models", "Systems", "Robotics"].map((stage, index) => (
                <motion.div key={stage} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-15%" }} transition={{ duration: .55, delay: index * .1 }}>
                  <span>0{index + 1}</span><strong>{stage}</strong>{index < 3 && <i aria-hidden="true" />}
                </motion.div>
              ))}
            </div>
            <motion.p {...reveal}>That path has taken me through model training, production infrastructure, real-time systems, computer vision, and autonomous machines. I care about the engineering between a promising model and something people can actually trust and use.</motion.p>
            <motion.div {...reveal}><Link href="/about" className="editorial-link">More about the direction <span>↗</span></Link></motion.div>
          </div>
        </div>
      </section>

      <section id="experience" className="story-section dark-chapter experience-section">
        <div className="story-inner experience-story-grid">
          <motion.div {...reveal} className="experience-sticky">
            <div className="chapter-label"><span>02</span> Experience</div>
            <h2>Learning by building<br />under real constraints.</h2>
            <Link href="/experience">View full experience <span>↗</span></Link>
          </motion.div>
          <div className="experience-list">
            {experience.slice(0, 3).map((job, index) => (
              <motion.article key={`${job.company}-${job.role}`} {...reveal}>
                <span className="experience-index">0{index + 1}</span>
                <div><p className="experience-period">{job.period}</p><h3>{job.role}</h3><p className="experience-company">{job.company} · {job.location}</p><p className="experience-summary">{job.points[0]}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="story-section sticky-work-section">
        <div className="story-inner sticky-work-grid">
          <div className="work-sticky">
            <div className="chapter-label forest"><span>03</span> Selected work</div>
            <h2>Systems designed to<br /><em>do something real.</em></h2>
            <div className="project-progress" aria-live="polite"><span>0{activeProject + 1}</span><i /><span>0{featuredDetails.length}</span></div>
          </div>
          <div className="project-scenes">
            {featuredDetails.map((detail, index) => <ProjectScene key={detail.project.slug} detail={detail} index={index} onActive={setActiveProject} />)}
          </div>
        </div>

        <div className="story-inner all-work-index">
          <div className="index-heading"><h3>Complete project index</h3><Link href="/projects">Project archive <span>↗</span></Link></div>
          <ol>{projects.map((project, index) => <ProjectIndex key={project.slug} project={project} index={index} />)}</ol>
        </div>
      </section>

      <section id="now" className="story-section now-section">
        <div className="story-inner now-grid">
          <motion.div {...reveal}><div className="chapter-label forest"><span>04</span> Now</div><h2>Moving toward<br />physical intelligence.</h2></motion.div>
          <motion.div {...reveal} className="now-copy"><p>{now.items[0].body}</p><div className="interest-line">{now.interests.slice(0, 3).map((interest) => <span key={interest}>{interest}</span>)}</div></motion.div>
        </div>
      </section>

      <section id="contact" className="story-section contact-section">
        <div className="story-inner contact-inner">
          <motion.div {...reveal}><div className="chapter-label"><span>05</span> Contact</div><h2>Have a difficult system<br />worth building?</h2></motion.div>
          <motion.div {...reveal} className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email}<span>↗</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<span>↗</span></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub<span>↗</span></a></motion.div>
        </div>
      </section>
    </div>
  );
}

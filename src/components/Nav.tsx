"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { profile } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm text-accent hover:opacity-80 transition-opacity"
        >
          nk<span className="text-muted">.</span>
        </Link>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href} className="relative">
                  <Link
                    href={href}
                    className={`px-3 py-2 text-sm transition-colors ${
                      active
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
          <div className="hidden sm:flex items-center gap-2 border-l border-border pl-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground hover:border-accent/50 hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

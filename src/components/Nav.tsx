"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { anchor: "trajectory", label: "About" },
  { anchor: "experience", label: "Experience" },
  { anchor: "work", label: "Work" },
  { anchor: "contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link
          href="/"
          className="nav-mark"
        >
          Niket Kakkar<span>.</span>
        </Link>
        <ul className="nav-links">
          {links.map(({ anchor, label }) => {
            const href = pathname === "/" ? `#${anchor}` : `/#${anchor}`;
            return (
              <li key={anchor}>
                <Link
                  href={href}
                  className="nav-link"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

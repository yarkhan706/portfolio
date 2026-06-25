"use client";

import Link from "next/link";

const LINKS = [
  { href: "mailto:asfandyarkhan.dev@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/yarkhan706", label: "LinkedIn" },
  { href: "https://www.instagram.com/yarkhan706/", label: "Instagram" },
  { href: "https://github.com/yarkhan706", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-6 md:px-10 pt-6 pb-10 mt-10 border-t-2 border-[var(--ink)] flex items-end justify-between flex-wrap gap-5">
      <div className="flex flex-wrap gap-[22px]">
        {LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-[11px] tracking-[0.1em] uppercase text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>
      <span className="text-[11px] tracking-[0.08em] text-[var(--muted)]">
        © 2026 Asfand Yar Khan
      </span>
    </footer>
  );
}

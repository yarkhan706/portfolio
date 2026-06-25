"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/work", num: "01", label: "work" },
  { href: "/aboutme", num: "02", label: "about" },
  { href: "/gallery", num: "03", label: "instagram" },
];

// Mobile menu: pages + socials in one oversized numbered list.
const MENU_ITEMS = [
  { href: "/work", num: "01", label: "work" },
  { href: "/aboutme", num: "02", label: "about" },
  { href: "/gallery", num: "03", label: "instagram" },
  { href: "mailto:asfandyarkhan.dev@gmail.com", num: "04", label: "email" },
  { href: "https://www.linkedin.com/in/yarkhan706", num: "05", label: "linkedin" },
  { href: "https://github.com/yarkhan706", num: "06", label: "github" },
];

function isActive(pathname: string, href: string) {
  if (href === "/work") return pathname === "/" || pathname.startsWith("/work");
  return pathname.startsWith(href);
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Vertical rotated sidebar label */}
      <div
        aria-hidden
        className="hidden lg:block fixed left-4 top-1/2 z-40 pointer-events-none text-[10.5px] tracking-[0.22em] uppercase text-[var(--muted)]"
        style={{
          transform: "translateY(-50%) rotate(180deg)",
          writingMode: "vertical-rl",
        }}
      >
        Asfand Yar Khan — Portfolio &rsquo;26
      </div>

      <header className="sticky top-0 z-50 flex items-end justify-between px-6 md:px-10 pt-[22px] pb-4 bg-[var(--paper)] border-b-2 border-[var(--ink)]">
        <Link
          href="/work"
          className="font-bold text-[13px] md:text-[15px] tracking-[0.06em] uppercase text-[var(--ink)]"
        >
          Asfand Yar Khan
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-end gap-[26px]">
          {LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] tracking-[0.04em] lowercase pb-0.5 border-b-2 transition-colors duration-150"
                style={{
                  color: active ? "var(--accent)" : "var(--ink)",
                  borderColor: active ? "var(--accent)" : "transparent",
                }}
              >
                <span className="text-[9px] align-top tracking-normal">
                  {l.num}
                </span>
                &nbsp;{l.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle — three-line hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-[30px] h-6"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-[26px] h-0.5 bg-[var(--ink)]" />
          <span className="block w-[26px] h-0.5 bg-[var(--ink)]" />
          <span className="block w-[26px] h-0.5 bg-[var(--ink)]" />
        </button>
      </header>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-[var(--paper)] flex flex-col px-5 pt-4 pb-6 overflow-y-auto">
          {/* Name + close */}
          <div className="flex items-center justify-between pb-2.5 border-b-2 border-[var(--ink)]">
            <span className="font-bold text-[15px] tracking-[0.06em] uppercase text-[var(--ink)]">
              Asfand Yar Khan
            </span>
            <button
              className="text-[var(--ink)] text-[28px] leading-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Oversized numbered links — pages + socials together */}
          <nav className="flex flex-col">
            {MENU_ITEMS.map((l) => {
              const external = l.href.startsWith("http") || l.href.startsWith("mailto:");
              const className =
                "flex items-baseline gap-4 border-b border-[var(--line-soft)] py-5 text-[var(--ink)] active:text-[var(--accent)]";
              const inner = (
                <>
                  <span className="text-[13px] font-bold text-[var(--accent)] w-7 shrink-0">
                    {l.num}
                  </span>
                  <span className="font-bold uppercase text-[clamp(36px,10vw,68px)] leading-[0.9] tracking-[-0.035em]">
                    {l.label}
                  </span>
                </>
              );
              return external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={className}
                  onClick={() => setMenuOpen(false)}
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className={className}
                  onClick={() => setMenuOpen(false)}
                >
                  {inner}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}

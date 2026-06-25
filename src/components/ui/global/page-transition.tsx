"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

function labelFor(pathname: string) {
  // Project detail route → show that project's name in the curtain.
  const detail = pathname.match(/^\/work\/(\d+)/);
  if (detail) {
    const project = projects[parseInt(detail[1])];
    if (project) return project.name;
  }
  if (pathname.startsWith("/work")) return "Work";
  if (pathname.startsWith("/aboutme")) return "About";
  if (pathname.startsWith("/gallery")) return "Instagram";
  return "";
}

/**
 * Swiss page transition — a red curtain wipes in from the left carrying the
 * page name, then exits to the right. translateX-based, no animation library.
 */
export default function PageTransition() {
  const pathname = usePathname();
  const curtainRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    const curtain = curtainRef.current;
    const label = labelRef.current;
    if (!curtain || !label) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    label.textContent = labelFor(pathname);
    window.scrollTo(0, 0);
    curtain.style.pointerEvents = "auto";

    const ease = "cubic-bezier(0.45, 0, 0.55, 1)";

    const wipeIn = curtain.animate(
      [{ transform: "translateX(-100%)" }, { transform: "translateX(0%)" }],
      { duration: 420, easing: ease, fill: "forwards" }
    );

    wipeIn.onfinish = () => {
      const wipeOut = curtain.animate(
        [{ transform: "translateX(0%)" }, { transform: "translateX(100%)" }],
        { duration: 480, easing: ease, fill: "forwards", delay: 90 }
      );
      wipeOut.onfinish = () => {
        curtain.style.transform = "translateX(-100%)";
        curtain.style.pointerEvents = "none";
      };
    };
  }, [pathname]);

  return (
    <div
      ref={curtainRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "var(--accent)",
        transform: "translateX(-100%)",
        pointerEvents: "none",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "48px",
      }}
    >
      <span
        ref={labelRef}
        style={{
          fontWeight: 700,
          fontSize: "clamp(40px, 9vw, 128px)",
          lineHeight: 0.85,
          letterSpacing: "-0.04em",
          textTransform: "uppercase",
          color: "var(--ink)",
        }}
      >
        Work
      </span>
    </div>
  );
}

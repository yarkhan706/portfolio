import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

/** Faint 12-column grid rules behind the content — a Swiss signature. */
function GridOverlay() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 hidden md:grid grid-cols-12 gap-6 border-r border-[var(--grid-line)] z-0 pointer-events-none"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="border-l border-[var(--grid-line)]" />
      ))}
    </div>
  );
}

export default function WorkPage() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);
  const featuredIndex = projects.indexOf(featured);

  return (
    <main className="relative max-w-[1440px] mx-auto px-6 md:px-10">
      <GridOverlay />
      <div className="relative z-[1] pf-page">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-6 items-end pt-[52px] pb-7">
          <h1 className="col-span-12 md:col-span-8 m-0 font-bold uppercase text-[clamp(64px,13vw,184px)] leading-[0.84] tracking-[-0.035em]">
            Work
          </h1>
          <div className="col-span-12 md:col-span-4 md:pb-2.5">
            <div className="swiss-label mb-2.5">Index — {String(projects.length).padStart(2, "0")}</div>
            <p className="m-0 text-sm leading-[1.5] text-[var(--ink)]">
              Selected web applications, SaaS products and storefronts. Designed
              and built 2024—2026.
            </p>
          </div>
        </div>

        <div className="border-t-2 border-[var(--ink)]" />

        {/* Featured */}
        <article className="grid grid-cols-12 gap-6 py-11 border-b border-[var(--ink)] items-start">
          <Link
            href={`/work/${featuredIndex}`}
            className="col-span-12 md:col-span-7 aspect-[16/10] bg-[var(--slot)] overflow-hidden group block border-2 border-[var(--ink)]"
          >
            <Image
              src={featured.cover}
              alt={featured.name}
              width={900}
              height={563}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
          </Link>
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-baseline gap-3.5 mb-[18px]">
              <span className="font-bold text-[46px] leading-[0.8] tracking-[-0.03em] text-[var(--accent)]">
                01
              </span>
              <span className="swiss-label">Featured / {featured.year}</span>
            </div>
            <h2 className="m-0 mb-3.5 font-bold text-[30px] leading-[1.0] tracking-[-0.02em]">
              {featured.name}
            </h2>
            <p className="m-0 mb-[22px] text-sm leading-[1.55] text-[var(--body)]">
              {featured.tagline}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-[22px]">
              {featured.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] tracking-[0.08em] uppercase text-[var(--ink)] border border-[var(--ink)] px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              href={`/work/${featuredIndex}`}
              className="group inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase text-[var(--ink)] no-underline border-b-2 border-[var(--accent)] pb-[3px] hover:text-[var(--accent)] transition-colors"
            >
              View project
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </article>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-6 py-11 pb-[60px]">
          {rest.map((project) => {
            const index = projects.indexOf(project);
            return (
              <Link
                key={index}
                href={`/work/${index}`}
                className="col-span-12 sm:col-span-6 md:col-span-4 group block"
              >
                <div className="aspect-[4/3] bg-[var(--slot)] overflow-hidden mb-4">
                  <Image
                    src={project.cover}
                    alt={project.name}
                    width={460}
                    height={345}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="font-bold text-[22px] tracking-[-0.02em] text-[var(--ink)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 font-bold text-lg tracking-[-0.01em]">
                    {project.name}
                  </h3>
                </div>
                <p className="m-0 mb-2.5 text-[13px] leading-[1.5] text-[var(--body-soft)]">
                  {project.tagline}
                </p>
                <div className="text-[10px] tracking-[0.1em] uppercase text-[var(--muted)]">
                  {project.category.replace(/·/g, "/")}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

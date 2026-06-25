import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

function MetaCell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] mb-1.5">
        {label}
      </div>
      <div className="text-sm text-[var(--ink)]">{children}</div>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectIndex = parseInt(id);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <main className="max-w-[1440px] mx-auto px-6 md:px-10 py-20">
        <p className="text-[var(--body)]">Project not found.</p>
        <Link
          href="/work"
          className="text-[11px] tracking-[0.12em] uppercase border-b-2 border-[var(--accent)] pb-[3px] mt-5 inline-block"
        >
          ← Index / Work
        </Link>
      </main>
    );
  }

  const total = projects.length;
  const next = projects[(projectIndex + 1) % total];
  const nextIndex = (projectIndex + 1) % total;
  const isLive = !project.link.includes("github.com");
  // Gallery = every screenshot that isn't the cover. Single-image projects
  // end up with an empty gallery and the section is hidden entirely.
  const gallery = (project.screenshots ?? []).filter((s) => s !== project.cover);

  return (
    <main className="max-w-[1440px] mx-auto px-6 md:px-10">
      <article className="pf-page">
        {/* Top bar */}
        <div className="flex items-baseline justify-between pt-[34px] pb-5">
          <Link
            href="/work"
            className="text-[11px] tracking-[0.12em] uppercase text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
          >
            ← Index / Work
          </Link>
          <span className="text-[11px] tracking-[0.12em] uppercase text-[var(--muted)]">
            {String(projectIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="border-t-2 border-[var(--ink)]" />

        {/* Title + kicker */}
        <div className="grid grid-cols-12 gap-6 items-end pt-10 pb-[26px]">
          <h1 className="col-span-12 md:col-span-9 m-0 font-bold uppercase text-[clamp(48px,8vw,116px)] leading-[0.86] tracking-[-0.035em]">
            {project.name}
          </h1>
          <div className="col-span-12 md:col-span-3 md:pb-2.5 text-[13px] leading-[1.5] text-[var(--body-soft)]">
            {project.kicker}
          </div>
        </div>

        {/* Meta row */}
        <div className="grid grid-cols-12 gap-6 pb-6 border-b border-[var(--ink)]">
          <div className="col-span-6 md:col-span-3">
            <MetaCell label="Role">{project.role}</MetaCell>
          </div>
          <div className="col-span-6 md:col-span-3">
            <MetaCell label="Year">{project.year}</MetaCell>
          </div>
          <div className="col-span-6 md:col-span-3">
            <MetaCell label="Stack">{project.stack.slice(0, 3).join(" · ")}</MetaCell>
          </div>
          <div className="col-span-6 md:col-span-3">
            <MetaCell label={isLive ? "Live Site" : "Repository"}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] no-underline border-b-2 border-[var(--accent)] pb-0.5 hover:text-[var(--accent)] transition-colors"
              >
                {isLive ? "Visit ↗" : "GitHub ↗"}
              </a>
            </MetaCell>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-[var(--slot)] overflow-hidden my-[34px] border-2 border-[var(--ink)]">
          <Image
            src={project.cover}
            alt={project.name}
            width={1400}
            height={788}
            className="w-full h-auto object-cover block"
            priority
          />
        </div>

        {/* Overview */}
        <div className="grid grid-cols-12 gap-6 pb-12">
          <div className="col-span-12 md:col-span-3 text-[11px] tracking-[0.14em] uppercase text-[var(--muted)] pt-1.5">
            Overview
          </div>
          <p className="col-span-12 md:col-span-7 m-0 text-lg leading-[1.55] text-[var(--ink-soft)]">
            {project.tagline}
          </p>
        </div>

        {/* Detail (rich HTML from data) */}
        <div className="grid grid-cols-12 gap-6 pb-12">
          <div className="col-span-12 md:col-span-3 text-[11px] tracking-[0.14em] uppercase text-[var(--muted)] pt-1.5">
            Details
          </div>
          <div
            className="col-span-12 md:col-span-8 prose-portfolio max-w-none"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>

        {/* Screenshots — all remaining images, two per row, shown in full
            (no crop) so detail stays crisp. Hidden when the project has only
            the cover image. */}
        {gallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            {gallery.map((src, i) => (
              <div
                key={src + i}
                className="bg-[var(--slot)] overflow-hidden border border-[var(--line-soft)]"
              >
                <Image
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  width={1000}
                  height={750}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {/* Next project */}
        <Link
          href={`/work/${nextIndex}`}
          className="group w-full flex items-baseline justify-between gap-5 border-t-2 border-[var(--ink)] pt-[22px] pb-[60px] text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
        >
          <span className="text-[11px] tracking-[0.14em] uppercase text-[var(--muted)] whitespace-nowrap">
            Next project
          </span>
          <span className="font-bold uppercase text-[clamp(24px,3.4vw,44px)] tracking-[-0.02em] text-right">
            {next.name}{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
      </article>
    </main>
  );
}

import { projects } from "@/data/projects";
import Link from "next/link";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectIndex = parseInt(id);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-gray-500">Project not found.</p>
        <Link href="/work" className="link-underline pb-0.5 text-gray-900 mt-4 inline-block">
          ← Back to work
        </Link>
      </div>
    );
  }

  const isLive = project.link.includes("github.com") === false;

  return (
    <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      {/* Back */}
      <Link
        href="/work"
        className="group inline-flex items-center gap-1.5 text-xs tracking-wide text-gray-400 hover:text-gray-900 mb-10"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
        Back to work
      </Link>

      {/* Title */}
      <header className="reveal mb-10">
        <h1 className="font-serif-display text-4xl md:text-5xl font-light text-gray-900 leading-tight">
          {project.name}
        </h1>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Description (rich HTML from data) */}
      <div
        className="reveal prose-portfolio max-w-none text-gray-600"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />

      {/* CTA */}
      <div className="reveal mt-8">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm text-white hover:bg-gray-700"
        >
          {isLive ? "Visit live site" : "View source"}
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
        </a>
      </div>

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mt-16">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-6">
            Screenshots
          </p>
          <div className="space-y-6">
            {project.screenshots.map((src, index) => (
              <div key={index} className="relative aspect-[10/7] overflow-hidden rounded-xl bg-gray-50">
                <ImageWithSkeleton
                  src={src}
                  alt={`${project.name} screenshot ${index + 1}`}
                  width={1000}
                  height={700}
                  wrapperClassName="h-full w-full"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

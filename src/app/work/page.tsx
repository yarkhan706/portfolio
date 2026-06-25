import Link from "next/link";
import { projects } from "@/data/projects";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";

export default function WorkPage() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      {/* Editorial header */}
      <header className="mb-12 md:mb-16 reveal">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-3">
          Selected Work
        </p>
        <h1 className="font-serif-display text-4xl md:text-5xl font-light text-gray-900 leading-tight">
          Things I&apos;ve <span className="italic">built<span className="accent-amber">.</span></span>
        </h1>
        <p className="mt-4 max-w-md text-sm text-gray-500 leading-relaxed">
          A selection of AI products and web experiences — each one a study in
          pairing clean interfaces with intelligent behaviour.
        </p>
      </header>

      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/work/${index}`}
            className="group block reveal"
          >
            {/* Image frame */}
            <div className="relative overflow-hidden rounded-xl bg-gray-50 aspect-[16/10]">
              <ImageWithSkeleton
                src={project.cover}
                alt={project.name}
                width={640}
                height={400}
                wrapperClassName="h-full w-full"
                className="h-full w-full object-cover object-top saturate-[0.9] transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:saturate-100"
              />
            </div>

            {/* Caption */}
            <div className="mt-3.5 flex items-baseline justify-between">
              <div>
                <h2 className="font-serif-display text-lg text-gray-900 leading-snug">
                  {project.name}
                </h2>
                <p className="mt-0.5 text-xs text-gray-400">
                  {project.stack.slice(0, 3).join(" · ")}
                </p>
              </div>
              <span
                aria-hidden
                className="text-sm text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gray-900"
              >
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

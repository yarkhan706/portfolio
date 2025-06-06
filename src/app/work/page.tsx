import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/work/${index}`}
            className="block group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-sm">
              {/* Project Image */}
              <Image
                src={project.cover}
                alt={project.name}
                width={600}
                height={400}
                className="w-full aspect-auto h-auto object-cover transition-transform duration-200 group-hover:scale-105"
              />
              
              {/* Hover Mask */}
              <div className="absolute inset-0 bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="text-lg font-normal text-gray-900">{project.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

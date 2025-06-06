import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const id = parseInt(params.id);
  const project = projects[id];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-600">Project not found.</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <Link href="/work" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Work
      </Link>

      <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
      <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: project.description }} />

      {/* Tech Stack */}
      <div className="mb-4">
        <span className="font-semibold">Tech Stack:</span>
        <ul className="list-disc list-inside text-gray-600">
          {project.stack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <>
          <h1 className="text-2xl font-bold mb-2">Project Screenshots</h1>
          <div className="flex flex-wrap gap-4 space-y-2 ">
            {project.screenshots.map((src, index) => (
              <Image
                key={index}
                src={src}
              alt={`${project.name} screenshot ${index + 1}`}
              width={600}
              height={400}
              className="rounded-lg"
            />
          ))}
        </div>
        </>
      )}

      {/* GitHub Link */}
      <div className="mt-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}

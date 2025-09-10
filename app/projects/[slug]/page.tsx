import { projects } from "../../data/projects";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Await the params because Next.js types it as a Promise
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-10 text-center">Project not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-2xl shadow mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.details}</p>

      <div className="flex items-center justify-between mb-6">
        <span
          className={`px-4 py-2 text-sm font-semibold rounded-full ${
            project.status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {project.status}
        </span>
        <span className="text-sm text-gray-500">{project.date}</span>
      </div>

      <Link
        href="/#projects"
        className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow hover:scale-105 transition"
      >
        ← Back to Projects
      </Link>
    </div>
  );
}

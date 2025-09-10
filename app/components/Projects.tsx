"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.slug}`}>
            <motion.div
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-xs text-gray-500">{project.date}</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

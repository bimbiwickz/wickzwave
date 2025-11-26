"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Restaurant Management System",
    desc: "Full-stack system with table booking & digital menu.",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    git: "https://github.com/your-repo",
    live: "",
  },
  {
    title: "Portfolio Website (WickzWave)",
    desc: "Modern animated portfolio built with Next.js & Tailwind.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    git: "https://github.com/your-portfolio",
    live: "",
  },
  {
    title: "E-commerce Storefront",
    desc: "Scalable store with Stripe integration.",
    tech: ["React", "Node.js", "MongoDB"],
    git: "https://github.com/your-store",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition cursor-pointer"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-xs text-blue-400 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {p.git && (
                <a
                  href={p.git}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 transition"
                >
                  <Github size={18} /> GitHub
                </a>
              )}

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 transition"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

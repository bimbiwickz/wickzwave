"use client";

import { motion } from "framer-motion";
import { Code, Palette, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Code size={40} />,
    title: "Web Development",
    desc: "Full-stack development with modern frameworks and clean architecture."
  },
  {
    icon: <Palette size={40} />,
    title: "UI/UX Design",
    desc: "Responsive, intuitive, and accessible designs using Tailwind CSS & modern trends."
  },
  {
    icon: <Smartphone size={40} />,
    title: "Mobile Development",
    desc: "Cross-platform Android apps using C# and clean MVVM architecture."
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Services</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4 text-blue-400">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

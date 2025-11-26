export default function TechStack() {
  const tech = [
    "Java", "Spring Boot", "React.js", "Next.js",
    "TypeScript", "Node.js", "Tailwind CSS", "MySQL",
  ];

  return (
    <section id="tech" className="py-24 px-6 bg-[#0A0F1F] text-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {tech.map((item) => (
            <div
              key={item}
              className="p-4 bg-black/40 rounded-xl border border-gray-700 hover:border-blue-500 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

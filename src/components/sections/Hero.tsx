"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-800/20 to-black"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating blurred shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-600/40 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/40 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Text Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, Welcome to <span className="text-blue-400">WickzWave</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          Full Stack Developer | Next.js | Java | Spring Boot | Cloud | Freelance Solutions  
        </motion.p>

        <motion.a
          href="#projects"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium inline-block transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}

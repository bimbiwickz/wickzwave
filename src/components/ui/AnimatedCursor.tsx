"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-blue-500/40 pointer-events-none mix-blend-screen z-[999]"
      animate={{ x: pos.x - 12, y: pos.y - 12 }}
      transition={{ type: "spring", mass: 0.3 }}
    />
  );
}

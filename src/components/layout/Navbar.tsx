"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Tech", href: "#tech" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
        <Image src="/logo.png" alt="WickzWave Logo" width={60} height={60} />
        {/* Wickz<span className="text-blue-500">Wave</span> */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-6 py-4 text-gray-300 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

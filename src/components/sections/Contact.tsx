"use client";

import { Mail, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>
      <p className="text-gray-400 max-w-xl mb-12">
        Feel free to reach out to me through email, LinkedIn, or WhatsApp for
        collaboration, freelance projects, or general inquiries.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Email */}
        <a
          href="mailto:bimbi2254@gmail.com"
          className="flex items-center gap-3 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
        >
          <Mail />
          <span>Email Me</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/bimbi-wickz/"
          target="_blank"
          className="flex items-center gap-3 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
        >
          <Linkedin />
          <span>LinkedIn</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/94771950342"
          target="_blank"
          className="flex items-center gap-3 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
        >
          <Phone />
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  );
}

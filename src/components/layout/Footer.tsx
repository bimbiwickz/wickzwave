export default function Footer() {
  return (
    <footer className="py-10 bg-black border-t border-white/10 text-center text-gray-400">
      <p className="mb-2">© {new Date().getFullYear()} WickzWave. All rights reserved.</p>

      <div className="flex justify-center gap-6 text-sm">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#services" className="hover:text-white">Services</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
    </footer>
  );
}

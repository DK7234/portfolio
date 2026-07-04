import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-white">
          David<span className="text-cyan-400">.</span>
        </Link>

        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <Link href="#about" className="hover:text-cyan-400">About</Link>
          <Link href="#projects" className="hover:text-cyan-400">Projects</Link>
          <Link href="/resume/resume.pdf" className="hover:text-cyan-400">Resume</Link>
          <Link href="#contact" className="hover:text-cyan-400">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
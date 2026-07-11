import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-white">
          David<span className="text-cyan-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <Link href="#about" className="transition hover:text-cyan-400">
            About
          </Link>

          <Link href="#skills" className="transition hover:text-cyan-400">
            Skills
          </Link>

          <Link href="#projects" className="transition hover:text-cyan-400">
            Projects
          </Link>

          <Link href="#experience" className="transition hover:text-cyan-400">
            Experience
          </Link>

          <Link href="#contact" className="transition hover:text-cyan-400">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
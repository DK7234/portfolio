import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-xl font-bold text-white">
            David<span className="text-cyan-400">.</span>
          </Link>

          <p className="mt-3 max-w-md text-sm text-gray-300">
            Computer Engineering student focused on systems, networks, cloud,
            cybersecurity, and full-stack development.
          </p>
        </div>

        <div className="flex gap-5 text-gray-300">
          <a
            href="mailto:david12khoury@hotmail.com"
            aria-label="Email David Khoury"
            className="hover:text-cyan-400"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://github.com/DK7234"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="David Khoury GitHub profile"
            className="hover:text-cyan-400"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/davidkhoury-engineer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="David Khoury LinkedIn profile"
            className="hover:text-cyan-400"
          >
            <FaLinkedin size={20} />
          </a>

          <a
  href="/resume/david-khoury-us-resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Open David Khoury U.S. resume"
  className="transition hover:text-cyan-400"
>
  <FileText size={20} aria-hidden="true" />
</a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-300 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} David Khoury. All rights reserved.</p>

        <a href="#" className="hover:text-cyan-400">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
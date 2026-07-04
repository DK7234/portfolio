"use client";

import { motion } from "framer-motion";
import { Mail, FileText, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "david12khoury@hotmail.com",
    href: "mailto:david12khoury@hotmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "davidkhoury-engineer",
    href: "https://linkedin.com/in/davidkhoury-engineer",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "DK7234",
    href: "https://github.com/DK7234",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download CV",
    href: "/resume/resume.pdf",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#030712] px-4 py-20 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 md:p-12"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </p>

          <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Let&apos;s build something together.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            I&apos;m open to internship and part-time opportunities in software
            engineering, cloud computing, networking, and cybersecurity.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {contacts.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={`${item.label}: ${item.value}`}
                  className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 sm:p-5"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <Icon size={22} />
                    </div>

                     <div className="min-w-0">
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="break-all font-semibold text-white group-hover:text-cyan-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-3 text-gray-300">
            <MapPin size={18} className="shrink-0" />
            <span>Zahle, Lebanon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
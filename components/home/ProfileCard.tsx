"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.15}
      scale={1.02}
      transitionSpeed={2000}
    >
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-800/80 to-slate-900/95 p-8 backdrop-blur-xl xl:-translate-y-4"
      >
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-sm text-cyan-300/90">
            <span
              aria-hidden="true"
              className="status-dot h-2 w-2 shrink-0"
            />
            Available for Internships &amp; Part-Time
          </span>
        </div>

        <div className="flex justify-center">
          <div className="profile-glow relative h-36 w-36 overflow-hidden rounded-full bg-cyan-400/10 ring-4 ring-cyan-400/10">
            <Image
              src="/images/profile/profile.png"
              alt="David Khoury"
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h2 className="mt-6 text-center text-2xl font-bold text-white">
          David Khoury
        </h2>

        <p className="mt-2 text-center text-gray-300">
          Systems &amp; Networks Engineering Student
        </p>

        <div className="mt-8 space-y-4 text-gray-300">
          <div className="flex items-center gap-3">
            <GraduationCap
              size={18}
              aria-hidden="true"
              className="shrink-0 text-cyan-400"
            />
            <span>Antonine University</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin
              size={18}
              aria-hidden="true"
              className="shrink-0 text-cyan-400"
            />
            <span>Lebanon • New Jersey, USA</span>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}
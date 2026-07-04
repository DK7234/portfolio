"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";
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
        transition={{ duration: .8 }}
        className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
      >
        <div className="mb-6 flex justify-center">
  <span className="status-dot rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
    ● Available for Internships & Part-Time
  </span>
</div>
        <div className="flex justify-center">
  <div className="relative h-36 w-36 overflow-hidden rounded-full bg-cyan-400/10 ring-4 ring-cyan-400/10 profile-glow">
    <Image
      src="/images/profile/profile.png"
      alt="David Khoury"
      fill
      className="object-cover"
    />
  </div>
</div>

        <h2 className="mt-6 text-center text-2xl font-bold">
          David Khoury
        </h2>

        <p className="mt-2 text-center text-gray-300">
          Systems & Networks Engineering Student
        </p>

        <div className="mt-8 space-y-4 text-gray-300">

          <div className="flex items-center gap-3">
            <GraduationCap size={18}/>
            Antonine University
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18}/>
            Lebanon • New Jersey, USA
          </div>

          

        </div>
      </motion.div>
    </Tilt>
  );
}
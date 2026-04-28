"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "Swift", "SwiftUI", "iOS", "App Store", "Next.js",
  "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm text-[#00f5d4] tracking-[0.2em] uppercase mb-3 font-medium">
              About
            </p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Builder, not just a coder.
            </h2>
            <div className="space-y-4 text-white/55 leading-relaxed">
              <p>
                I&apos;m Jake — husband, father, and Product Manager at a large
                tech and financial firm by day. On the side, I design and build
                apps and websites from scratch and ship them into the real world.
              </p>
              <p>
                I know what good software looks like from the inside. That
                perspective shapes everything I build — fast, clean, and designed
                for actual people, not just other developers.
              </p>
              <p>
                My mission with small businesses is simple: give them an
                outstanding online presence without the outrageous price tag.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow ring behind photo */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#00f5d4]/30 to-transparent blur-xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-[#00f5d4]/20">
                <Image
                  src="/PortfolioPic.png"
                  alt="Jake Forcier"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

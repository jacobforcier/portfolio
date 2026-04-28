"use client";

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
                I&apos;m Jake — an independent developer who builds things from scratch
                and ships them. I&apos;ve taken an iOS app from idea to the App Store,
                designed and launched a website for a local business, and I&apos;m
                currently deep in building a second app.
              </p>
              <p>
                I care about the whole picture: fast load times, clean design, and
                an experience that makes sense to real people — not just other
                developers.
              </p>
              <p>
                Now I&apos;m looking to bring that same attention to local businesses
                that deserve a great online presence.
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

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Outer glowing ring */}
              <div className="absolute inset-0 rounded-full border border-[#00f5d4]/15 animate-spin-slow" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-4 rounded-full border border-[#00f5d4]/8" />

              {/* Center card */}
              <div className="absolute inset-8 rounded-2xl bg-white/4 border border-white/8 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-6 text-center">
                <div className="text-4xl font-[family-name:var(--font-space-grotesk)] font-bold gradient-text">
                  3
                </div>
                <div className="text-xs text-white/40 leading-relaxed">
                  Projects shipped<br />& in progress
                </div>

                <div className="w-8 h-px bg-[#00f5d4]/30 my-1" />

                <div className="text-4xl font-[family-name:var(--font-space-grotesk)] font-bold gradient-text">
                  1
                </div>
                <div className="text-xs text-white/40 leading-relaxed">
                  App live on the<br />App Store
                </div>
              </div>

              {/* Floating dots */}
              {[0, 72, 144, 216, 288].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-2 h-2 rounded-full bg-[#00f5d4]/40"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateY(-144px) translateX(-4px)`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

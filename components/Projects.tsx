"use client";

import { motion, type Variants } from "framer-motion";

const projects = [
  {
    title: "CoachSkip",
    description:
      "A pitch-count and player management app for Little League coaches. Log pitches with a single tap, track limits, and get instant warnings — right from the dugout.",
    tags: ["Swift", "iOS", "SwiftUI", "App Intents"],
    link: "https://apps.apple.com/us/app/coach-skip/id6760717798",
    linkLabel: "App Store",
    status: "live" as const,
  },
  {
    title: "Easy Way LLC",
    description:
      "A clean, fast marketing website for a local small business. Built for mobile-first performance and easy to find on Google.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://easyway30.com",
    linkLabel: "Visit Site",
    status: "live" as const,
  },
  {
    title: "CurbFile",
    description:
      "A home improvement tracker app that helps homeowners log renovations, store receipts, and build a maintenance record for their property.",
    tags: ["React Native", "Expo", "Supabase"],
    link: "#",
    linkLabel: "Coming Soon",
    status: "wip" as const,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-[#00f5d4] tracking-[0.2em] uppercase mb-3 font-medium">
            Work
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Things I&apos;ve shipped
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative group flex flex-col rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-7 glow-border transition-all duration-300 hover:border-[#00f5d4]/25"
            >
              {project.status === "wip" && (
                <span className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full bg-[#00f5d4]/10 text-[#00f5d4] border border-[#00f5d4]/20 font-medium">
                  In Development
                </span>
              )}
              {project.status === "live" && (
                <span className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              )}

              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-3 mt-1">
                {project.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/6 text-white/50 border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.status === "live" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#00f5d4] hover:underline underline-offset-4 flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200"
                >
                  {project.linkLabel}
                  <span>→</span>
                </a>
              ) : (
                <span className="text-sm text-white/25">{project.linkLabel}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

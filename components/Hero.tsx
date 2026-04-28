"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = ["iOS Apps", "Business Websites", "Digital Products"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-dot-grid">
      {/* Radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(0,245,212,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl"
      >
        <p className="text-sm text-[#00f5d4] tracking-[0.2em] uppercase mb-6 font-medium">
          Developer · Designer
        </p>

        <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          I build{" "}
          <span className="gradient-text">
            {displayed}
            <span className="animate-pulse text-[#00f5d4]">|</span>
          </span>
          <br />
          <span className="text-white/90">that actually work.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed mb-10">
          From App Store launches to local business websites — I design and ship
          things people actually use.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-[#00f5d4] text-[#080808] font-semibold text-sm tracking-wide hover:bg-white transition-colors duration-200"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-white/15 text-white/80 text-sm tracking-wide hover:border-[#00f5d4]/50 hover:text-[#00f5d4] transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>

    </section>
  );
}

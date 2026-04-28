"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight text-white hover:text-[#00f5d4] transition-colors"
        >
          Jake Forcier
        </a>

        <nav className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-[#00f5d4] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-full border border-[#00f5d4]/40 text-[#00f5d4] hover:bg-[#00f5d4]/10 transition-all duration-200"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile: just the hire me button */}
        <a
          href="#contact"
          className="sm:hidden text-sm px-4 py-2 rounded-full border border-[#00f5d4]/40 text-[#00f5d4] hover:bg-[#00f5d4]/10 transition-all duration-200"
        >
          Hire Me
        </a>
      </div>
    </motion.header>
  );
}

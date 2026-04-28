"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/jacob.forcier@gmail.com", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-[#00f5d4] tracking-[0.2em] uppercase mb-3 font-medium">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-white/50 text-lg mb-12">
            Let&apos;s talk. I&apos;m open to website projects, app ideas, and
            anything in between.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 rounded-2xl border border-[#00f5d4]/20 bg-[#00f5d4]/5"
          >
            <div className="text-4xl mb-4">✓</div>
            <p className="text-[#00f5d4] font-semibold text-lg">Message sent!</p>
            <p className="text-white/40 text-sm mt-2">I&apos;ll get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/40 uppercase tracking-widest mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#00f5d4]/40 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 uppercase tracking-widest mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#00f5d4]/40 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-white/40 uppercase tracking-widest mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#00f5d4]/40 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-[#00f5d4] text-[#080808] font-semibold text-sm tracking-wide hover:bg-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

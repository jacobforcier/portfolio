"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$750",
    description: "Perfect for businesses that just need a clean, professional presence online.",
    features: [
      "1–3 pages",
      "Mobile-friendly design",
      "Contact form",
      "Deployed & live",
      "1 round of revisions",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Standard",
    price: "$1,500",
    description: "For businesses that want to be found on Google and make a real impression.",
    features: [
      "5+ pages",
      "SEO basics included",
      "Google Business setup",
      "Contact form",
      "2 rounds of revisions",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Ongoing Care",
    price: "$75/mo",
    description: "Keep your site fast, secure, and up to date without lifting a finger.",
    features: [
      "Hosting managed",
      "Content updates",
      "Performance monitoring",
      "Priority support",
      "Cancel anytime",
    ],
    cta: "Add to Any Plan",
    highlight: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm text-[#00f5d4] tracking-[0.2em] uppercase mb-3 font-medium">
            Pricing
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Straightforward pricing.
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            No agency markups. No surprises. Just a great site at a price that makes sense for a small business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlight
                  ? "border-[#00f5d4]/40 bg-[#00f5d4]/5 glow-border"
                  : "border-white/8 bg-white/4 hover:border-white/15"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00f5d4] text-[#080808] text-xs font-bold tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm text-white/50 font-medium mb-1">{plan.name}</p>
                <div className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white mb-3">
                  {plan.price}
                </div>
                <p className="text-sm text-white/40 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/60">
                    <span className="text-[#00f5d4] text-base leading-none">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3.5 rounded-xl text-sm font-semibold text-center tracking-wide transition-all duration-200 ${
                  plan.highlight
                    ? "bg-[#00f5d4] text-[#080808] hover:bg-white"
                    : "border border-white/15 text-white/70 hover:border-[#00f5d4]/40 hover:text-[#00f5d4]"
                }`}
              >
                {plan.highlight ? "Get Started" : plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          Not sure which is right for you? <a href="#contact" className="text-[#00f5d4] hover:underline underline-offset-4">Send me a message</a> and we&apos;ll figure it out together.
        </motion.p>
      </div>
    </section>
  );
}

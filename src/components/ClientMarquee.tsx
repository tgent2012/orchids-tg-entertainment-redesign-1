"use client";

import { motion } from "framer-motion";

const clients = [
  "Routes 4 Media",
  "TechNexus",
  "Aura Luxury",
  "Velocity Motors",
  "Horizon Tech",
  "Zenith Media",
  "Nexa Global",
  "Artisan Boutique",
  "Prime Video",
  "Red Bull",
  "Netflix",
  "Tesla",
  "Apple",
  "Samsung"
];

export default function ClientMarquee() {
  return (
    <section className="py-20 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-white/40">
          Trusted by Industry Leaders
        </h2>
      </div>
      
      <div className="relative flex">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-16 items-center pr-16"
        >
          {[...clients, ...clients].map((client, index) => (
            <span
              key={index}
              className="text-3xl md:text-5xl font-bold text-white/20 hover:text-[#c8ff00] transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import { portfolioItems } from "@/lib/portfolio-data";
import { Sparkles } from "lucide-react";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#c8ff00]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/70 mb-6"
          >
            <Sparkles size={14} className="text-[#c8ff00]" />
            Portfolio
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
          >
            Our <span className="font-serif italic text-[#c8ff00]">Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-12"
          >
            A collection of high-impact creative production, cinematic storytelling, 
            and strategic branding delivered with AI-augmented efficiency.
          </motion.p>
        </div>

        {/* Cover Flow Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[700px]"
        >
          <PortfolioCarousel items={portfolioItems} />
        </motion.div>
      </div>

      {/* Footer CTA */}
      <section className="mt-32 border-t border-white/5 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Next Project: <span className="text-[#c8ff00]">Yours</span>?
          </h2>
          <p className="text-xl text-white/60 mb-10">
            Let's blend human creativity with AI efficiency for your brand.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(200, 255, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[#c8ff00] text-[#0a0a0a] font-bold rounded-full text-lg"
          >
            Start a Conversation
          </motion.button>
        </div>
      </section>
    </main>
  );
}

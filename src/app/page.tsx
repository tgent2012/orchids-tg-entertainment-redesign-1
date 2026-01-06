"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles, Zap, Globe, Film, Palette, Target } from "lucide-react";
import ClientMarquee from "@/components/ClientMarquee";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const PlexusBackground = dynamic(() => import("@/components/PlexusBackground"), { ssr: false });

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const brands = [
  {
    name: "TG Entertainment",
    tagline: "The Parent Agency",
    description: "Full-service creative & production agency delivering strategy, branding, advertising, and digital experiences with AI-augmented workflows.",
    color: "#c8ff00",
    href: "/about"
  },
  {
    name: "Social Spot",
    tagline: "For Startups & SMEs",
    description: "Energetic, playful, and growth-focused creative solutions designed specifically for startups and young businesses ready to stand out.",
    color: "#ff6b35",
    href: "/social-spot"
  },
  {
    name: "Cosmic Monkey Studios",
    tagline: "High-End Production",
    description: "Cinematic, premium production for luxury brands, automotive, hospitality, and enterprise clients. Time to let the ape out of the cage.",
    color: "#8b5cf6",
    href: "/cosmic-monkey"
  }
];

const capabilities = [
  { icon: Target, label: "Strategy", description: "Brand positioning, market research, creative direction" },
  { icon: Palette, label: "Design", description: "Visual identity, UI/UX, motion graphics" },
  { icon: Film, label: "Production", description: "Film, photography, CGI, VFX" },
  { icon: Globe, label: "Digital", description: "Websites, apps, digital experiences" },
  { icon: Zap, label: "AI Integration", description: "AI-augmented workflows, smart automation" },
  { icon: Sparkles, label: "Content", description: "Social media, campaigns, branded content" }
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "3x", label: "Faster Delivery" },
  { value: "100%", label: "Human-Led Creative" }
];

function FloatingElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={targetRef} className="bg-[#0a0a0a] min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <PlexusBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-[1]" />

        <motion.div 
          style={{ opacity, scale, y }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <FloatingElement delay={0}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/70">
                  <Sparkles size={14} className="text-[#c8ff00]" />
                  AI-Augmented Creative Agency
                </span>
              </FloatingElement>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
            >
              <motion.span 
                className="text-white inline-block"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: -2,
                  color: "#c8ff00",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                Human Creativity
              </motion.span>
              <br />
              <motion.span 
                className="text-[#c8ff00] inline-block mx-4"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                ×
              </motion.span>
              <motion.span 
                className="text-white inline-block"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 2,
                  color: "#c8ff00",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                AI Efficiency
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              We blend human creative ingenuity with AI augmentation to deliver 
              high-end content, campaigns, and visuals—
              <span className="text-white font-medium">faster, smarter, and more efficiently</span> 
              {" "}than traditional agencies.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(200, 255, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-[#c8ff00] text-[#0a0a0a] font-semibold rounded-full flex items-center gap-2 hover:bg-[#d4ff33] transition-colors"
                >
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "#c8ff00" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div 
            className="flex flex-col items-center gap-2 text-white/40"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#c8ff00] to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #c8ff00 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #c8ff00 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, #c8ff00 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ filter: "blur(100px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-[#c8ff00] mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111]/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              One Agency, <span className="font-serif italic text-[#c8ff00]">Three</span> Specialized Wings
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              From startups to luxury brands, we have a dedicated team for every stage of your growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={brand.href}>
                  <motion.div
                    whileHover={{ 
                      y: -12, 
                      scale: 1.02,
                      rotateY: 5,
                      boxShadow: `0 25px 50px -12px ${brand.color}30`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative h-full p-8 rounded-2xl border border-white/10 bg-[#111]/50 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        background: `radial-gradient(circle at 50% 0%, ${brand.color}20, transparent 70%)`
                      }}
                    />
                    <div className="relative z-10">
                      <motion.div 
                        className="w-3 h-3 rounded-full mb-6"
                        style={{ backgroundColor: brand.color }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">{brand.name}</h3>
                      <p className="text-sm font-medium mb-4" style={{ color: brand.color }}>
                        {brand.tagline}
                      </p>
                      <p className="text-white/60 leading-relaxed mb-6">
                        {brand.description}
                      </p>
                      <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          <ArrowRight size={16} />
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full-Spectrum <span className="font-serif italic text-[#c8ff00]">Capabilities</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              From strategy to execution, we cover every aspect of creative production with AI-enhanced efficiency.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.label}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 30, scale: 0.95 },
                  animate: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { delay: index * 0.1, duration: 0.6 }
                  },
                  hover: {
                    y: -8,
                    scale: 1.02,
                    borderColor: "rgba(200, 255, 0, 0.5)",
                    transition: { duration: 0.3 }
                  }
                }}
                className="group p-6 rounded-xl border border-white/5 bg-[#111]/30 transition-all duration-300"
              >
                <motion.div
                  variants={{
                    hover: { rotate: 360, scale: 1.1 }
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <capability.icon className="w-10 h-10 text-[#c8ff00] mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{capability.label}</h3>
                <p className="text-white/50">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientMarquee />

      <TestimonialCarousel />

      <section className="py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(200,255,0,0.1) 0%, transparent 50%, rgba(139,92,246,0.1) 100%)",
              "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, transparent 50%, rgba(200,255,0,0.1) 100%)",
              "linear-gradient(135deg, rgba(200,255,0,0.1) 0%, transparent 50%, rgba(139,92,246,0.1) 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why <span className="text-[#c8ff00]">TG Entertainment</span>?
              </h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                We are not just another creative agency. We are a new breed of creative 
                partner—one that leverages AI as a force multiplier while keeping human 
                creativity at the helm.
              </p>
              <ul className="space-y-4">
                {[
                  "Human creativity leads, AI enhances",
                  "Premium output with intelligent execution",
                  "3x faster delivery without compromising quality",
                  "Dedicated teams for startups & enterprises"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-[#c8ff00]"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div 
                className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10 p-12 flex items-center justify-center"
                whileHover={{ rotateY: 10, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-8xl font-bold text-[#c8ff00] mb-4"
                    animate={{ 
                      textShadow: [
                        "0 0 20px rgba(200,255,0,0.5)",
                        "0 0 40px rgba(200,255,0,0.8)",
                        "0 0 20px rgba(200,255,0,0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    AI
                  </motion.div>
                  <motion.div 
                    className="text-2xl text-white/60 font-serif italic"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    ×
                  </motion.div>
                  <div className="text-4xl font-bold text-white mt-4">Human</div>
                  <div className="text-white/40 mt-2">The Perfect Balance</div>
                </div>
              </motion.div>
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-[#c8ff00]/30 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#8b5cf6]/30 rounded-full blur-2xl"
                animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-8"
              whileInView={{
                textShadow: [
                  "0 0 0px rgba(200,255,0,0)",
                  "0 0 30px rgba(200,255,0,0.3)",
                  "0 0 0px rgba(200,255,0,0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to Create <span className="font-serif italic text-[#c8ff00]">Something</span> Extraordinary?
            </motion.h2>
            <p className="text-xl text-white/60 mb-12">
              Let us show you what happens when human creativity meets AI efficiency.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 60px rgba(200, 255, 0, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-[#c8ff00] text-[#0a0a0a] text-lg font-semibold rounded-full flex items-center gap-3 mx-auto hover:bg-[#d4ff33] transition-colors"
              >
                Start Your Project
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Film, Clapperboard, Sparkles, Layers, Volume2, Eye, Lightbulb, CheckCircle2, Play } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Visualize",
    description: "Every great project starts with a vision. We dive deep into your brand, objectives, and audience to craft concepts that resonate and inspire.",
    items: ["Creative concepting", "Storyboarding", "Art direction", "Mood boards"]
  },
  {
    number: "02",
    title: "Plan",
    description: "Meticulous planning ensures flawless execution. We handle every detail from casting to locations, schedules to logistics.",
    items: ["Production planning", "Talent sourcing", "Location scouting", "Budget management"]
  },
  {
    number: "03",
    title: "Execute",
    description: "World-class production with cutting-edge technology. Our experienced crews bring visions to life with precision and artistry.",
    items: ["Principal photography", "Direction", "Cinematography", "On-set supervision"]
  }
];

const preProduction = [
  "Creative Strategy & Concept Development",
  "Scriptwriting & Storyboarding",
  "Art Direction & Visual Development",
  "Casting & Talent Management",
  "Location Scouting & Management",
  "Production Planning & Scheduling"
];

const production = [
  "Commercial & Brand Film Production",
  "Cinematography & Lighting",
  "Live Action Direction",
  "Product Photography & Videography",
  "On-Location & Studio Shoots",
  "Virtual Production & LED Volumes"
];

const postProduction = [
  "Editorial & Assembly",
  "Color Grading & Finishing",
  "CGI & 3D Animation",
  "VFX & Compositing",
  "Sound Design & Mixing",
  "Motion Graphics & Titles"
];

const specialties = [
  { icon: Layers, title: "CGI & 3D", description: "Photorealistic 3D visualization and animation" },
  { icon: Sparkles, title: "VFX", description: "Seamless visual effects integration" },
  { icon: Eye, title: "AR/VR", description: "Immersive experiences and virtual production" },
  { icon: Volume2, title: "Sound Design", description: "Premium audio production and mixing" },
  { icon: Film, title: "Virtual Production", description: "LED wall and real-time environments" },
  { icon: Clapperboard, title: "Cinematic Ads", description: "TV, cinema, and large-format advertising" }
];

export default function CosmicMonkeyPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/10 via-transparent to-[#0a0a0a]" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#8b5cf6]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#c084fc]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#8b5cf6]" />
              <span className="text-[#8b5cf6] text-sm font-medium uppercase tracking-wider">Cosmic Monkey Studios</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Time to Let the <span className="font-serif italic text-[#8b5cf6]">Ape</span> Out of the Cage
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-8 max-w-3xl">
              High-end production meets bold, original ideas. We create cinematic, 
              memorable, timeless work for luxury brands and enterprise clients 
              who refuse to settle for ordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-[#8b5cf6] text-white font-semibold rounded-full flex items-center gap-2 hover:bg-[#9d6eff] transition-colors"
                >
                  Start Your Production
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="#capabilities">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-[#8b5cf6]/30 text-white font-medium rounded-full hover:bg-[#8b5cf6]/10 transition-colors flex items-center gap-2"
                >
                  <Play size={18} />
                  View Capabilities
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our <span className="font-serif italic text-[#8b5cf6]">Manifesto</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p className="text-2xl text-white/90 font-medium">
                No copy-paste creativity. No cookie-cutter campaigns. No playing it safe.
              </p>
              <p>
                At Cosmic Monkey Studios, we believe advertising should be memorable—the kind 
                that makes people stop, think, and feel. We draw inspiration from the boldest 
                Western and European advertising traditions to create work that stands apart.
              </p>
              <p>
                Every frame we shoot, every effect we craft, every sound we design is in service 
                of one goal: creating something that hasn&apos;t been seen before. Something that 
                elevates your brand above the noise.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Original Ideas", value: "100%" },
              { label: "Western-Standard Quality", value: "Premium" },
              { label: "Timeless Work", value: "Always" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 text-center"
              >
                <div className="text-4xl font-bold text-[#8b5cf6] mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111]/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Three <span className="font-serif italic text-[#8b5cf6]">Pillars</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Our proven approach to delivering world-class production.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="p-10 rounded-2xl border border-white/10 bg-[#111]/30 hover:border-[#8b5cf6]/30 transition-all duration-300 h-full">
                  <div className="text-7xl font-bold text-[#8b5cf6]/20 mb-6">{pillar.number}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-white/60 mb-8 leading-relaxed">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/70">
                        <CheckCircle2 size={16} className="text-[#8b5cf6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full Production <span className="font-serif italic text-[#8b5cf6]">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-white/10 bg-[#111]/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-[#8b5cf6]" />
                <h3 className="text-2xl font-bold text-white">Pre-Production</h3>
              </div>
              <ul className="space-y-3">
                {preProduction.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border border-[#8b5cf6]/30 bg-gradient-to-b from-[#8b5cf6]/10 to-transparent"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clapperboard className="w-8 h-8 text-[#8b5cf6]" />
                <h3 className="text-2xl font-bold text-white">Production</h3>
              </div>
              <ul className="space-y-3">
                {production.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl border border-white/10 bg-[#111]/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-[#8b5cf6]" />
                <h3 className="text-2xl font-bold text-white">Post-Production</h3>
              </div>
              <ul className="space-y-3">
                {postProduction.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Specialized <span className="font-serif italic text-[#8b5cf6]">Expertise</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Cutting-edge technology meets creative excellence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 rounded-xl border border-white/5 bg-[#111]/30 hover:bg-[#111]/50 hover:border-[#8b5cf6]/30 transition-all duration-300"
              >
                <specialty.icon className="w-12 h-12 text-[#8b5cf6] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{specialty.title}</h3>
                <p className="text-white/50">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We <span className="font-serif italic text-[#8b5cf6]">Serve</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Luxury Brands",
              "Automotive",
              "Fashion",
              "Hospitality",
              "Technology",
              "Enterprise",
              "Real Estate",
              "Finance",
              "Healthcare",
              "Entertainment"
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-full border border-white/10 bg-[#111]/30 text-white/70 hover:border-[#8b5cf6]/30 hover:text-white transition-all duration-300"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#c084fc]/10 border border-[#8b5cf6]/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for <span className="font-serif italic text-[#8b5cf6]">Cinematic</span> Excellence?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Let&apos;s create something the world hasn&apos;t seen before.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-[#8b5cf6] text-white text-lg font-semibold rounded-full inline-flex items-center gap-3 hover:bg-[#9d6eff] transition-colors"
              >
                Let&apos;s Create Together
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, Heart, Zap, Users, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Human-First",
    description: "Creativity starts with people. AI amplifies our capabilities but never replaces the human touch that makes work resonate."
  },
  {
    icon: Cpu,
    title: "AI-Augmented",
    description: "We leverage cutting-edge AI tools to accelerate production, enhance quality, and deliver faster than traditional agencies."
  },
  {
    icon: Lightbulb,
    title: "Original Ideas",
    description: "No cookie-cutter solutions. Every project gets fresh thinking, bold concepts, and ideas that haven't been seen before."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Beautiful work that performs. We measure success by the impact we create for our clients' businesses."
  },
  {
    icon: Zap,
    title: "Efficient Execution",
    description: "Premium quality doesn't have to mean long timelines. Our AI-augmented workflow delivers excellence at speed."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We don't just work for clients—we work with them. True collaboration produces the best creative outcomes."
  }
];

const timeline = [
  { year: "2018", title: "Founded", description: "TG Entertainment was born with a vision to blend creativity with technology." },
  { year: "2020", title: "Social Spot Launch", description: "Launched our startup-focused wing to democratize premium creative services." },
  { year: "2022", title: "Cosmic Monkey Studios", description: "Established our high-end production division for luxury and enterprise brands." },
  { year: "2024", title: "AI Integration", description: "Became one of the first agencies to fully integrate AI into our creative workflow." }
];

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c8ff00]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-[#c8ff00] text-sm font-medium uppercase tracking-wider mb-4 block">About Us</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              The Future of <span className="font-serif italic text-[#c8ff00]">Creative</span> is Here
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
              TG Entertainment is a next-generation creative agency that combines human 
              artistic vision with AI-powered execution. We believe the best work happens 
              when human creativity leads and technology amplifies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our <span className="text-[#c8ff00]">Vision</span>
              </h2>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  In a world where AI is transforming every industry, we see an opportunity 
                  to redefine what a creative agency can be. Not by replacing human creativity, 
                  but by supercharging it.
                </p>
                <p>
                  Our vision is simple: deliver premium creative work with unprecedented speed 
                  and efficiency, making world-class creative accessible to businesses of all sizes.
                </p>
                <p>
                  From <span className="text-white">startups</span> launching their first brand to 
                  <span className="text-white"> enterprise clients</span> seeking cinematic production, 
                  we have the expertise, tools, and passion to bring any creative vision to life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                  alt="Creative team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 bg-[#111] border border-white/10 rounded-xl">
                <div className="text-5xl font-bold text-[#c8ff00]">6+</div>
                <div className="text-white/60 text-sm">Years of Excellence</div>
              </div>
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
              What We <span className="font-serif italic text-[#c8ff00]">Believe</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Our values guide every decision we make and every project we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/5 bg-[#111]/30 hover:bg-[#111]/50 hover:border-[#c8ff00]/20 transition-all duration-300 group"
              >
                <value.icon className="w-10 h-10 text-[#c8ff00] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/50 leading-relaxed">{value.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="font-serif italic text-[#c8ff00]">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="p-6 rounded-xl bg-[#111]/50 border border-white/5 inline-block">
                      <div className="text-[#c8ff00] font-bold text-2xl mb-2">{item.year}</div>
                      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/50">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#c8ff00] relative z-10 hidden md:block" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
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
              How AI <span className="font-serif italic text-[#c8ff00]">Transforms</span> Our Work
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              AI isn&apos;t a gimmick for us—it&apos;s a fundamental part of how we work. 
              Here&apos;s how we use it to deliver better results, faster.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Research & Strategy",
                items: ["Market analysis at scale", "Trend identification", "Competitor insights", "Audience research"]
              },
              {
                title: "Creative Production",
                items: ["Rapid concept iteration", "Asset generation", "Copy variations", "Visual exploration"]
              },
              {
                title: "Quality & Delivery",
                items: ["Automated QA checks", "Faster turnaround", "Consistent quality", "Smart optimization"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 rounded-2xl border border-white/10 bg-[#111]/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]" />
                      {item}
                    </li>
                  ))}
                </ul>
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
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work <span className="font-serif italic text-[#c8ff00]">Together</span>?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Let&apos;s discuss how TG Entertainment can help bring your creative vision to life.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-[#c8ff00] text-[#0a0a0a] text-lg font-semibold rounded-full inline-flex items-center gap-3 hover:bg-[#d4ff33] transition-colors"
              >
                Get in Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

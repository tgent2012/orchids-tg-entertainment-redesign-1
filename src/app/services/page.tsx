"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Palette, Film, Globe, Target, Megaphone, Code, Camera, PenTool, BarChart3, Cpu } from "lucide-react";

const serviceCategories = [
  {
    id: "strategy",
    title: "Strategy & Branding",
    description: "Build foundations that last. We craft brand identities and strategies that resonate with your audience and stand the test of time.",
    icon: Target,
    color: "#c8ff00",
    services: [
      { name: "Brand Strategy", desc: "Positioning, messaging, and brand architecture" },
      { name: "Market Research", desc: "AI-powered insights and competitive analysis" },
      { name: "Brand Identity", desc: "Visual identity systems and brand guidelines" },
      { name: "Creative Direction", desc: "Overarching creative vision and campaign direction" },
      { name: "Naming & Verbal Identity", desc: "Brand names, taglines, and tone of voice" }
    ]
  },
  {
    id: "design",
    title: "Design & Creative",
    description: "Visual excellence that captures attention. From digital interfaces to print collateral, we create designs that communicate and convert.",
    icon: Palette,
    color: "#00d4ff",
    services: [
      { name: "UI/UX Design", desc: "User-centered digital experiences" },
      { name: "Graphic Design", desc: "Print, packaging, and visual communications" },
      { name: "Motion Graphics", desc: "Animated content and dynamic visuals" },
      { name: "Illustration", desc: "Custom illustrations and iconography" },
      { name: "Presentation Design", desc: "Pitch decks and corporate presentations" }
    ]
  },
  {
    id: "production",
    title: "Production & Film",
    description: "Cinematic storytelling that moves people. From concept to final cut, we produce world-class video content for any platform.",
    icon: Film,
    color: "#8b5cf6",
    services: [
      { name: "Commercial Production", desc: "TV, digital, and social video ads" },
      { name: "Corporate Films", desc: "Brand films, documentaries, and testimonials" },
      { name: "Photography", desc: "Product, lifestyle, and editorial photography" },
      { name: "CGI & VFX", desc: "Computer-generated imagery and visual effects" },
      { name: "Sound Design", desc: "Audio production and music supervision" }
    ]
  },
  {
    id: "digital",
    title: "Digital & Technology",
    description: "Digital experiences that engage and convert. We build websites, apps, and digital products that deliver results.",
    icon: Globe,
    color: "#ff6b35",
    services: [
      { name: "Website Development", desc: "Custom websites and web applications" },
      { name: "E-commerce", desc: "Online stores and shopping experiences" },
      { name: "Mobile Apps", desc: "iOS and Android applications" },
      { name: "Digital Products", desc: "SaaS and digital product design" },
      { name: "AR/VR Experiences", desc: "Immersive and interactive experiences" }
    ]
  },
  {
    id: "marketing",
    title: "Marketing & Campaigns",
    description: "Campaigns that cut through the noise. We create integrated marketing that builds awareness and drives action.",
    icon: Megaphone,
    color: "#ff4d6d",
    services: [
      { name: "Campaign Strategy", desc: "Integrated marketing campaigns" },
      { name: "Social Media", desc: "Content strategy and community management" },
      { name: "Influencer Marketing", desc: "Creator partnerships and collaborations" },
      { name: "Performance Marketing", desc: "Paid media and conversion optimization" },
      { name: "Content Marketing", desc: "Editorial content and thought leadership" }
    ]
  },
  {
    id: "ai",
    title: "AI-Powered Services",
    description: "The future of creative, today. We leverage AI to enhance every aspect of our work—from research to production.",
    icon: Cpu,
    color: "#c8ff00",
    services: [
      { name: "AI Content Generation", desc: "AI-assisted copy and visual creation" },
      { name: "AI Research & Insights", desc: "Data analysis and trend prediction" },
      { name: "AI Workflow Integration", desc: "Custom AI tools for your business" },
      { name: "AI Training & Consulting", desc: "Help your team leverage AI effectively" },
      { name: "AI-Enhanced Production", desc: "Faster, smarter creative production" }
    ]
  }
];

const processSteps = [
  { number: "01", title: "Discover", description: "We immerse ourselves in your brand, market, and objectives to understand the full picture." },
  { number: "02", title: "Strategize", description: "Using AI-powered insights, we develop a strategic framework that guides all creative decisions." },
  { number: "03", title: "Create", description: "Our team brings ideas to life with human creativity enhanced by AI efficiency." },
  { number: "04", title: "Refine", description: "We iterate based on feedback and data, ensuring the final output exceeds expectations." },
  { number: "05", title: "Deliver", description: "Assets are delivered on time, optimized for every platform and use case." }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c8ff00]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-[#c8ff00] text-sm font-medium uppercase tracking-wider mb-4 block">Our Services</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Full-Spectrum <span className="font-serif italic text-[#c8ff00]">Creative</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
              From strategy to execution, we offer everything you need to build, launch, 
              and grow your brand—all enhanced by AI-powered efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="scroll-mt-32"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-32">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: `${category.color}15` }}
                      >
                        <category.icon size={28} style={{ color: category.color }} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {category.title}
                      </h2>
                      <p className="text-white/60 text-lg leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {category.services.map((service, serviceIndex) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: serviceIndex * 0.05 }}
                          className="group p-6 rounded-xl border border-white/5 bg-[#111]/30 hover:bg-[#111]/50 hover:border-white/10 transition-all duration-300"
                        >
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#c8ff00] transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-white/50 text-sm">{service.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {categoryIndex < serviceCategories.length - 1 && (
                  <div className="mt-24 border-t border-white/5" />
                )}
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
              Our <span className="font-serif italic text-[#c8ff00]">Process</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A proven approach that delivers results, every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-[#c8ff00]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-8 h-px bg-white/20" />
                )}
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
              Choose Your <span className="font-serif italic text-[#c8ff00]">Path</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We have specialized teams for different client needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/social-spot">
                <div className="group relative p-10 rounded-2xl border border-[#ff6b35]/30 bg-gradient-to-br from-[#ff6b35]/10 to-transparent hover:border-[#ff6b35]/50 transition-all duration-300 h-full">
                  <div className="w-4 h-4 rounded-full bg-[#ff6b35] mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-2">Social Spot</h3>
                  <p className="text-[#ff6b35] font-medium mb-4">For Startups & SMEs</p>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    Energetic, playful creative solutions designed specifically for startups 
                    and young businesses. Affordable packages that don&apos;t compromise on quality.
                  </p>
                  <div className="flex items-center gap-2 text-white group-hover:text-[#ff6b35] transition-colors">
                    <span className="font-medium">Explore Social Spot</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/cosmic-monkey">
                <div className="group relative p-10 rounded-2xl border border-[#8b5cf6]/30 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent hover:border-[#8b5cf6]/50 transition-all duration-300 h-full">
                  <div className="w-4 h-4 rounded-full bg-[#8b5cf6] mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-2">Cosmic Monkey Studios</h3>
                  <p className="text-[#8b5cf6] font-medium mb-4">High-End Production</p>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    Cinematic, premium production for luxury brands and enterprise clients. 
                    Original ideas, world-class execution. Time to let the ape out of the cage.
                  </p>
                  <div className="flex items-center gap-2 text-white group-hover:text-[#8b5cf6] transition-colors">
                    <span className="font-medium">Explore Cosmic Monkey</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
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
              Let&apos;s Build Something <span className="font-serif italic text-[#c8ff00]">Amazing</span>
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Tell us about your project and we&apos;ll recommend the best approach.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-[#c8ff00] text-[#0a0a0a] text-lg font-semibold rounded-full inline-flex items-center gap-3 hover:bg-[#d4ff33] transition-colors"
              >
                Start a Conversation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

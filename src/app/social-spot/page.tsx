"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Image, Video, Camera, Layout, Palette, Calendar, MessageSquare, TrendingUp, Check } from "lucide-react";

const services = [
  { icon: Image, name: "Swipe-Worthy Designs", desc: "Scroll-stopping graphics that capture attention and drive engagement" },
  { icon: Video, name: "Reels & Short-Form Video", desc: "Trending video content optimized for Instagram, TikTok, and YouTube Shorts" },
  { icon: Camera, name: "Photography", desc: "Product, lifestyle, and brand photography that tells your story" },
  { icon: Layout, name: "Branded Templates", desc: "Consistent, on-brand templates for stories, posts, and highlights" },
  { icon: Palette, name: "Polished UGC", desc: "User-generated style content that feels authentic and converts" },
  { icon: Sparkles, name: "Motion Graphics", desc: "Eye-catching animations that bring your brand to life" },
  { icon: Calendar, name: "Content Strategy", desc: "Monthly content calendars aligned with your business goals" },
  { icon: MessageSquare, name: "Posting & Engagement", desc: "Scheduling, publishing, and community management" }
];

const packages = [
  {
    name: "Starter",
    price: "₹15,000",
    period: "/month",
    description: "Perfect for new businesses just getting started with social media",
    features: [
      "12 static posts per month",
      "4 story designs",
      "Basic content calendar",
      "1 platform focus",
      "Monthly performance report"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    price: "₹35,000",
    period: "/month",
    description: "For businesses ready to scale their social presence",
    features: [
      "20 posts per month (static + motion)",
      "8 story designs",
      "4 reels/month",
      "2 platform management",
      "Content strategy sessions",
      "Bi-weekly performance reports",
      "Community engagement"
    ],
    cta: "Most Popular",
    popular: true
  },
  {
    name: "Premium",
    price: "₹60,000",
    period: "/month",
    description: "Full-service social media management for ambitious brands",
    features: [
      "30 posts per month (all formats)",
      "Unlimited stories",
      "8 reels/month",
      "3 platform management",
      "Dedicated content strategist",
      "Weekly performance reports",
      "Influencer collaboration support",
      "Paid ads management"
    ],
    cta: "Go Premium",
    popular: false
  },
  {
    name: "Curated",
    price: "Custom",
    period: "",
    description: "Tailored solutions for unique requirements",
    features: [
      "Custom content volume",
      "Multi-platform management",
      "Brand shoots included",
      "Campaign planning",
      "Dedicated team",
      "Priority support",
      "Everything in Premium, plus more"
    ],
    cta: "Contact Us",
    popular: false
  }
];

const problems = [
  "Struggling to stand out in a sea of sameness?",
  "Can't keep up with content demands?",
  "Generic templates not reflecting your brand?",
  "No time for social media strategy?",
  "Inconsistent posting schedule?"
];

export default function SocialSpotPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#ff6b35]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#f7931e]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#ff6b35]" />
              <span className="text-[#ff6b35] text-sm font-medium uppercase tracking-wider">Social Spot</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              The Creative <span className="font-serif italic text-[#ff6b35]">Spark</span> Startups Need
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-8">
              Stand out in a sea of sameness. We create energetic, scroll-stopping 
              content that helps startups and SMEs build authentic connections with their audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-[#ff6b35] text-white font-semibold rounded-full flex items-center gap-2 hover:bg-[#ff8555] transition-colors"
                >
                  Get Your Spark
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="#packages">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-[#ff6b35]/30 text-white font-medium rounded-full hover:bg-[#ff6b35]/10 transition-colors"
                >
                  View Packages
                </motion.button>
              </Link>
            </div>
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
                Sound <span className="text-[#ff6b35]">Familiar</span>?
              </h2>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#111]/50 border border-white/5"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#ff6b35]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#ff6b35] text-sm">?</span>
                    </div>
                    <p className="text-white/70 text-lg">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-10 rounded-2xl bg-gradient-to-br from-[#ff6b35]/20 to-[#f7931e]/10 border border-[#ff6b35]/30">
                <h3 className="text-3xl font-bold text-white mb-6">
                  We&apos;ve Got You <span className="text-[#ff6b35]">Covered</span>
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Social Spot is your dedicated creative partner, designed specifically 
                  for startups and young businesses who want premium content without the 
                  enterprise price tag.
                </p>
                <ul className="space-y-3">
                  {[
                    "Original, non-cookie-cutter designs",
                    "Consistent brand presence",
                    "Growth-focused strategy",
                    "Flexible, affordable packages"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <Check size={18} className="text-[#ff6b35]" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              What We <span className="font-serif italic text-[#ff6b35]">Deliver</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Everything you need to build a magnetic social media presence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 rounded-xl border border-white/5 bg-[#111]/30 hover:bg-[#111]/50 hover:border-[#ff6b35]/30 transition-all duration-300"
              >
                <service.icon className="w-10 h-10 text-[#ff6b35] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-white/50 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-24 scroll-mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111]/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="font-serif italic text-[#ff6b35]">Package</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Flexible plans designed to grow with your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  pkg.popular 
                    ? "border-[#ff6b35] bg-gradient-to-b from-[#ff6b35]/10 to-transparent" 
                    : "border-white/10 bg-[#111]/30"
                } hover:border-[#ff6b35]/50 transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#ff6b35] text-white text-xs font-semibold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#ff6b35]">{pkg.price}</span>
                    <span className="text-white/50">{pkg.period}</span>
                  </div>
                </div>
                <p className="text-white/60 text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-white/70 text-sm">
                      <Check size={16} className="text-[#ff6b35] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <button className={`w-full py-3 rounded-full font-semibold transition-colors ${
                    pkg.popular 
                      ? "bg-[#ff6b35] text-white hover:bg-[#ff8555]" 
                      : "border border-[#ff6b35]/50 text-white hover:bg-[#ff6b35]/10"
                  }`}>
                    {pkg.cta}
                  </button>
                </Link>
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
              Why <span className="font-serif italic text-[#ff6b35]">Startups</span> Love Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Startup-Friendly Pricing",
                description: "Premium creative doesn't have to break the bank. Our packages are designed for startup budgets."
              },
              {
                title: "Quick Turnaround",
                description: "We know startups move fast. Get your content delivered on time, every time."
              },
              {
                title: "Growth-Focused",
                description: "Every piece of content is designed to help you grow your audience and convert followers to customers."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <TrendingUp className="w-12 h-12 text-[#ff6b35] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
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
            className="p-12 rounded-3xl bg-gradient-to-br from-[#ff6b35]/20 to-[#f7931e]/10 border border-[#ff6b35]/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="font-serif italic text-[#ff6b35]">Stand Out</span>?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Let&apos;s create content that makes your brand impossible to ignore.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-[#ff6b35] text-white text-lg font-semibold rounded-full inline-flex items-center gap-3 hover:bg-[#ff8555] transition-colors"
              >
                Get Your Spark Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

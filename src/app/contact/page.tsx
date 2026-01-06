"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

const services = [
  "Brand Strategy",
  "Creative Production",
  "Social Media Management",
  "Website Development",
  "Video Production",
  "CGI & VFX",
  "Photography",
  "Digital Marketing",
  "Other"
];

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹2,00,000",
  "₹2,00,000 - ₹5,00,000",
  "₹5,00,000 - ₹10,00,000",
  "₹10,00,000+",
  "Not Sure Yet"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <div className="w-20 h-20 rounded-full bg-[#c8ff00]/20 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} className="text-[#c8ff00]" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Message Sent!</h1>
          <p className="text-white/60 text-lg mb-8">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
            }}
            className="px-8 py-3 bg-[#c8ff00] text-[#0a0a0a] font-semibold rounded-full hover:bg-[#d4ff33] transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#c8ff00]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[#c8ff00] text-sm font-medium uppercase tracking-wider mb-4 block">Contact Us</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Let&apos;s Create <span className="font-serif italic text-[#c8ff00]">Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
              Ready to start your next project? Tell us about your vision and we&apos;ll 
              show you what&apos;s possible when human creativity meets AI efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="sticky top-32 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <a 
                      href="mailto:hello@tgen.in" 
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#111]/50 border border-white/5 hover:border-[#c8ff00]/30 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#c8ff00]/10 flex items-center justify-center group-hover:bg-[#c8ff00]/20 transition-colors">
                        <Mail size={20} className="text-[#c8ff00]" />
                      </div>
                      <div>
                        <div className="text-white/50 text-sm">Email</div>
                        <div className="text-white font-medium">hello@tgen.in</div>
                      </div>
                    </a>
                    
                    <a 
                      href="tel:+919876543210" 
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#111]/50 border border-white/5 hover:border-[#c8ff00]/30 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#c8ff00]/10 flex items-center justify-center group-hover:bg-[#c8ff00]/20 transition-colors">
                        <Phone size={20} className="text-[#c8ff00]" />
                      </div>
                      <div>
                        <div className="text-white/50 text-sm">Phone</div>
                        <div className="text-white font-medium">+91 98765 43210</div>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111]/50 border border-white/5">
                      <div className="w-12 h-12 rounded-full bg-[#c8ff00]/10 flex items-center justify-center">
                        <MapPin size={20} className="text-[#c8ff00]" />
                      </div>
                      <div>
                        <div className="text-white/50 text-sm">Location</div>
                        <div className="text-white font-medium">Mumbai, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#111]/50 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={20} className="text-[#c8ff00]" />
                    <h3 className="text-lg font-semibold text-white">Response Time</h3>
                  </div>
                  <p className="text-white/60">
                    We typically respond within 24 hours. For urgent inquiries, 
                    give us a call directly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Looking for something specific?</h3>
                  <div className="flex flex-wrap gap-3">
                    <a href="/social-spot" className="px-4 py-2 rounded-full border border-[#ff6b35]/30 text-[#ff6b35] text-sm hover:bg-[#ff6b35]/10 transition-colors">
                      Social Spot for Startups
                    </a>
                    <a href="/cosmic-monkey" className="px-4 py-2 rounded-full border border-[#8b5cf6]/30 text-[#8b5cf6] text-sm hover:bg-[#8b5cf6]/10 transition-colors">
                      Cosmic Monkey for Enterprise
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/70 text-sm mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#111]/50 border border-white/10 text-white placeholder-white/30 focus:border-[#c8ff00]/50 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/70 text-sm mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#111]/50 border border-white/10 text-white placeholder-white/30 focus:border-[#c8ff00]/50 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-white/70 text-sm mb-2">Company / Brand</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#111]/50 border border-white/10 text-white placeholder-white/30 focus:border-[#c8ff00]/50 focus:outline-none transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-white/70 text-sm mb-2">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#111]/50 border border-white/10 text-white focus:border-[#c8ff00]/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#111]">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-[#111]">{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-white/70 text-sm mb-2">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#111]/50 border border-white/10 text-white focus:border-[#c8ff00]/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#111]">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-[#111]">{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/70 text-sm mb-2">Tell Us About Your Project *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#111]/50 border border-white/10 text-white placeholder-white/30 focus:border-[#c8ff00]/50 focus:outline-none transition-colors resize-none"
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 py-4 bg-[#c8ff00] text-[#0a0a0a] font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#d4ff33] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="font-serif italic text-[#c8ff00]">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What makes TG Entertainment different from other agencies?",
                a: "We blend human creativity with AI augmentation to deliver premium work faster and more efficiently. This means you get world-class creative without the traditional agency timelines or overhead."
              },
              {
                q: "How does your AI-augmented workflow work?",
                a: "AI handles research, initial concepts, and production acceleration while our human creative team leads strategy, direction, and final execution. The result is faster delivery without compromising on quality or originality."
              },
              {
                q: "What's the typical project timeline?",
                a: "Timelines vary by project scope, but our AI-augmented workflow typically delivers 2-3x faster than traditional agencies. A social media package might take 1-2 weeks, while a full brand identity could be 4-6 weeks."
              },
              {
                q: "Do you work with international clients?",
                a: "Yes! While we're based in Mumbai, we work with clients globally. Our digital-first approach makes remote collaboration seamless."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#111]/30 border border-white/5"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-white/60 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

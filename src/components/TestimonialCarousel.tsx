"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO, TechNexus",
    content: "Quite pleased with their understanding of project based client needs and deliverables. Proactive and sincere with good understanding of international markets and brands.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director, Aura Luxury",
    content: "Extremely creative while creating avant-garde customer experiences. All that you want and much more from a Media partner. Their AI-augmented workflow is a game changer.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, Social Spot Client",
    content: "One stop solution for all your Media requirements. Great creativity and execution. They helped us scale our startup content 10x in just a few months.",
    rating: 5
  },
  {
    name: "David Ross",
    role: "Producer, Horizon Tech",
    content: "The AI integration has changed how we look at production. Faster, smarter, and still high quality. They truly understand the future of content creation.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Brand Manager, Artisan Boutique",
    content: "Cosmic Monkey Studios produced a cinematic campaign that exceeded our luxury brand's expectations. Original, bold, and perfectly executed.",
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false })
  ]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client <span className="font-serif italic text-[#c8ff00]">Testimonials</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              Don&apos;t just take our word for it. Here&apos;s what our partners say about our AI-augmented creative process.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/40 text-sm font-medium uppercase tracking-widest">
              <span>Automatic Scroll Active</span>
              <motion.div 
                className="w-2 h-2 rounded-full bg-[#c8ff00]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="embla overflow-hidden cursor-grab active:cursor-grabbing" 
        ref={emblaRef}
      >
        <div className="embla__container flex gap-6 px-6 lg:px-8">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 w-[350px] md:w-[450px] p-8 rounded-2xl bg-gradient-to-br from-[#111] to-[#0d0d0d] border border-white/5 hover:border-[#c8ff00]/30 transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#c8ff00] text-[#c8ff00]" />
                ))}
              </div>
              
              <Quote className="text-[#c8ff00]/20 w-10 h-10 mb-4 group-hover:text-[#c8ff00]/40 transition-colors" />
              
              <p className="text-lg text-white/80 leading-relaxed mb-8 min-h-[120px]">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c8ff00]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#c8ff00] font-bold"
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/40 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


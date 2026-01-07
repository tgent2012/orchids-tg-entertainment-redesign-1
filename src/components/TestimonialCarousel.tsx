"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const testimonials = [
  {
    name: "Divya Kumar",
    role: "Marketing Manager - Hilton Garden Inn",
    title: "A team of talent, skill & attitude",
    content: "We appreciate the entire TG team for their thoughtful approach and helping us to elevate Hilton’s branding to a better way every time. We are incredibly grateful to have you as our agency partner. And, looking forward to working with you for more exciting campaigns.",
    rating: 5
  },
  {
    name: "Rishabh Bhargava",
    role: "General Manager - Hilton Garden Inn, Trivandrum",
    title: "Very Committed Team led by Suvin",
    content: "We have been working with TG entertainment for last one year now, and it has been a great experience partnering with them as they are always willing to commit themselves and that brings the best out of our joint efforts where my team and TGE team work as one, with one goal in mind. Very satisfying partnership so far. thank you.",
    rating: 5
  },
  {
    name: "Roshni Laura",
    role: "General Manager - Rasula Cosmetics",
    title: "Talented bunch of creatives",
    content: "Having signed on Tgentertainment for a project recently I am quite pleased with their understanding of project based client needs and deliverables. Proactive and sincere. Have a good understanding of international markets and brands and have good insight into the luxury segment too. Overall very happy to have worked with them.",
    rating: 5
  },
  {
    name: "Murali Chand",
    role: "Producer & GM of Chand Creations",
    title: "MEANING OF TRUST REDEFINED",
    content: "TG Entertainment has evolved over time and does an illustrious job at what they do. I would recommend any brands worldwide to choose TG Entertainment to be heard.",
    rating: 5
  },
  {
    name: "Anonymous",
    role: "Deputy CEO - Apex Energy | Executive Director - Zenith Drilling",
    title: "Exceeds Expectations Everytime!",
    content: "TG Entertainment is your one stop solution for all your Media requirements. They are extremely creative while creating avant-garde customer experiences! They are all that you want and much more from a Media partner. Highly Recommended!",
    rating: 5
  },
  {
    name: "Vinoo George",
    role: "General Manager - Naichu International SA, UAE",
    title: "Design Support Company",
    content: "TG Entertainment is the Support design company of Naichu International SA. Dubai. They design swimming pools and Water features, in addition to design of our Brochures. Excellent work. We are extremely happy to have long term continous business relationship. Great talents united.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Global Brand Lead - Nike",
    title: "Unmatched Speed & Precision",
    content: "The speed and precision of TG's AI-augmented production is unmatched. They've redefined how we approach digital-first campaigns for our global audience. Human led, AI powered.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Founder - Lumina (EdTech Startup)",
    title: "Record Time Delivery",
    content: "As a fast-growing startup, we needed an agency that could keep up with our pace. TG Entertainment delivered premium branding in record time without compromising on depth or quality.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "CTO - Orbit AI (AI Infrastructure)",
    title: "Perfect Tech Partner",
    content: "Their deep understanding of both high-end design and technical AI integration makes them the perfect partner for a tech-heavy brand like ours. They speak our language.",
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
              Don&apos;t just take our word for it. Here&apos;s what our partners say about our creative ingenuity and AI-augmented process.
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
                  <Star key={i} size={14} className="fill-[#c8ff00] text-[#c8ff00]" />
                ))}
              </div>
              
              <Quote className="text-[#c8ff00]/20 w-10 h-10 mb-4 group-hover:text-[#c8ff00]/40 transition-colors" />
              
              {testimonial.title && (
                <h5 className="text-[#c8ff00] font-bold text-sm uppercase tracking-widest mb-3">
                  {testimonial.title}
                </h5>
              )}
              
              <p className="text-lg text-white/80 leading-relaxed mb-8 min-h-[140px]">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c8ff00]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#c8ff00] font-bold"
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold line-clamp-1">{testimonial.name}</h4>
                  <p className="text-white/40 text-xs line-clamp-2">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

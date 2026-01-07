"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioItem } from "@/lib/portfolio-data";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

interface CardStackProps {
  items: PortfolioItem[];
}

export default function CardStack({ items: initialItems }: CardStackProps) {
  const [items, setItems] = useState<PortfolioItem[]>(initialItems);

  const moveToEnd = (from: number) => {
    setItems((prev) => {
      const newItems = [...prev];
      const item = newItems.splice(from, 1)[0];
      newItems.push(item);
      return newItems;
    });
  };

  const next = () => moveToEnd(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[700px] w-full flex items-center justify-center">
      <div className="relative w-full max-w-4xl h-full perspective-[1000px]">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            // Only render the first 4 items for performance and clarity
            if (index > 3) return null;

            return (
              <motion.div
                key={item.id}
                style={{
                  zIndex: 10 - index,
                  transformOrigin: "top center",
                }}
                animate={{
                  top: index * -20,
                  scale: 1 - index * 0.05,
                  opacity: 1 - index * 0.2,
                  rotateX: index * -5,
                }}
                exit={{
                  x: 500,
                  opacity: 0,
                  scale: 0.5,
                  transition: { duration: 0.4 }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                  {/* Content Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-[#c8ff00] text-[#0a0a0a] text-[10px] font-black uppercase tracking-widest">
                          {item.category}
                        </span>
                        <span className="text-white/40 text-sm font-medium">/ {item.client}</span>
                      </div>
                      
                      <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                        {item.title}
                      </h3>
                      
                      <p className="text-lg text-white/60 max-w-xl font-serif italic">
                        {item.description}
                      </p>

                      <div className="pt-6">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold flex items-center gap-3 group hover:bg-[#c8ff00] hover:text-[#0a0a0a] transition-all"
                        >
                          View Case Study
                          <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-8">
        <button
          onClick={() => {
            setItems((prev) => {
              const newItems = [...prev];
              const item = newItems.pop();
              if (item) newItems.unshift(item);
              return newItems;
            });
          }}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="flex gap-2">
          {initialItems.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === initialItems.indexOf(items[0]) ? "bg-[#c8ff00] w-8" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

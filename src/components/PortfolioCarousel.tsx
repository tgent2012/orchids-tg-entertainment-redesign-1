"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, X, Info, ExternalLink } from "lucide-react";
import { PortfolioItem } from "@/lib/portfolio-data";

interface PortfolioCarouselProps {
  items: PortfolioItem[];
}

export default function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isHoveringIndex, setIsHoveringIndex] = useState<number | null>(null);
  
  const dragX = useMotionValue(0);
  const xSpring = useSpring(dragX, { stiffness: 300, damping: 30 });

  // Handle drag to change index
  const handleDragEnd = (_: any, info: any) => {
    const threshold = 100;
    if (info.offset.x < -threshold && activeIndex < items.length - 1) {
      setActiveIndex(prev => prev + 1);
    } else if (info.offset.x > threshold && activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
    dragX.set(0);
  };

  const next = () => setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative w-full max-w-full overflow-visible py-10">
      {/* Navigation Arrows - Moved outside perspective container to ensure clickability */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-10 pointer-events-none z-[120]">
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          disabled={activeIndex === 0}
          className={`p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all pointer-events-auto relative z-[130] ${activeIndex === 0 ? 'opacity-0' : 'hover:bg-[#c8ff00] hover:text-[#0a0a0a]'}`}
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          disabled={activeIndex === items.length - 1}
          className={`p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all pointer-events-auto relative z-[130] ${activeIndex === items.length - 1 ? 'opacity-0' : 'hover:bg-[#c8ff00] hover:text-[#0a0a0a]'}`}
        >
          <ArrowRight size={24} />
        </button>
      </div>

      <div className="relative h-[650px] flex items-center justify-center perspective-[1500px]">
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ x: xSpring }}
        >
          {items.map((item, index) => {
            const diff = index - activeIndex;
            const isCenter = index === activeIndex;
            const isLeft = index < activeIndex;
            const isRight = index > activeIndex;

            // Cover Flow spacing and rotation
            let xPos = diff * 180; // Default spacing
            if (isLeft) xPos -= 100; // Extra gap for left items
            if (isRight) xPos += 100; // Extra gap for right items

            const rotateY = isCenter ? 0 : (isLeft ? 45 : -45);
            const z = isCenter ? 100 : -200;
            const opacity = Math.max(0.1, 1 - Math.abs(diff) * 0.3);
            const scale = isCenter ? 1.1 : 0.85;

            // Hover "pop up" logic
            const isHovered = isHoveringIndex === index;
            const hoverZ = isHovered ? 50 : 0;
            const hoverScale = isHovered ? 1.05 : 1;

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: xPos,
                  z: z + hoverZ,
                  rotateY: rotateY,
                  scale: scale * hoverScale,
                  opacity: opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 1
                }}
                style={{
                  position: "absolute",
                  width: "350px",
                  height: "500px",
                  zIndex: 100 - Math.abs(diff),
                  transformStyle: "preserve-3d",
                  cursor: isCenter ? "pointer" : "default",
                }}
                onMouseEnter={() => setIsHoveringIndex(index)}
                onMouseLeave={() => setIsHoveringIndex(null)}
                onClick={() => isCenter && setSelectedItem(item)}
                className="group"
              >
                {/* Reflection effect below the card */}
                <div 
                  className="absolute -bottom-[60%] left-0 right-0 h-full scale-y-[-0.6] opacity-10 pointer-events-none blur-sm"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: 'cover',
                    maskImage: 'linear-gradient(to top, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to top, black, transparent)'
                  }}
                />

                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#111]">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay for inactive items */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  
                  {/* Content - only visible/clear when center */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-8"
                    animate={{ opacity: isCenter ? 1 : 0, y: isCenter ? 0 : 20 }}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-[#c8ff00] text-[#0a0a0a] text-[10px] font-black uppercase tracking-widest mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 text-xs line-clamp-1">{item.client}</p>
                  </motion.div>

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md">
                      <Info className="text-white w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Item Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-12 h-1 rounded-full transition-all duration-500 ${i === activeIndex ? "bg-[#c8ff00]" : "bg-white/10 hover:bg-white/20"}`}
          />
        ))}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-black/95 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl h-full max-h-[800px] bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-8 right-8 z-10 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-2/3 h-1/2 md:h-full relative overflow-hidden">
                <motion.img 
                  layoutId={`img-${selectedItem.id}`}
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>

              <div className="w-full md:w-1/3 p-10 md:p-16 flex flex-col justify-center">
                <div className="space-y-10">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/20 text-[#c8ff00] text-xs font-bold uppercase tracking-[0.2em]">
                      {selectedItem.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
                      {selectedItem.title}
                    </h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[#c8ff00] text-[10px] font-black uppercase tracking-[0.3em] mb-3">Client</h4>
                      <p className="text-xl text-white font-medium">{selectedItem.client}</p>
                    </div>
                    <div>
                      <h4 className="text-[#c8ff00] text-[10px] font-black uppercase tracking-[0.3em] mb-3">The Brief</h4>
                      <p className="text-lg text-white/70 leading-relaxed font-serif italic">
                        "{selectedItem.description}"
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#c8ff00] text-[10px] font-black uppercase tracking-[0.3em] mb-3">Department</h4>
                      <p className="text-white/60 leading-relaxed text-sm">
                        {selectedItem.category === "Social Spot" ? "TG Social Division" : selectedItem.category === "Cosmic Monkey" ? "CGI & Animation Wing" : "TG Creative Studio"}
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#c8ff00", color: "#000" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-colors group"
                  >
                    Launch Case Study 
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
          >
            <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-32 h-32 mx-auto mb-12"
                >
                <Image
                  src="/tg-logo.png"
                  alt="TG Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-[12vw] font-bold leading-none tracking-tighter text-center"
              >
                {Math.round(count)}%
              </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 left-0 h-[2px] bg-[#c8ff00]"
              initial={{ width: 0 }}
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-white/40 text-sm uppercase tracking-[0.2em] text-center"
            >
              TG Entertainment <span className="text-[#c8ff00]">×</span> AI
            </motion.div>
          </div>

          <div className="absolute top-10 left-10 overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#c8ff00] text-xs font-mono uppercase"
            >
              Initialising_Systems...
            </motion.div>
          </div>

          <div className="absolute bottom-10 right-10 overflow-hidden text-right">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/20 text-xs font-mono uppercase"
            >
              Creative_Engine_Active
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

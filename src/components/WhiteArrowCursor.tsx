"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function WhiteArrowCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: springX,
          top: springY,
          translateX: "-2px", // Slight offset to align the tip
          translateY: "-2px",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M8 4V24.5858L12.5858 20L13.2929 19.2929L14.2929 19.2929H22.5858L8 4Z" 
            fill="white" 
            stroke="black" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}

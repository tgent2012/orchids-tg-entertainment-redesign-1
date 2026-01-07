"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({ 
  children, 
  className = "", 
  glowColor = "rgba(200, 255, 0, 0.3)" 
}: GlowCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Create a brighter version for the border
  const borderGlowColor = glowColor.replace(/0\.\d+\)/, "0.8)");

  return (
    <div
      className="group relative rounded-xl bg-white/10 p-[1px] transition-all duration-300 h-full"
      onMouseMove={handleMouseMove}
    >
      {/* Border Glow Layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              120px circle at ${mouseX}px ${mouseY}px,
              ${borderGlowColor},
              transparent 100%
            )
          `,
        }}
      />
      
      {/* Content Container with Background Glow */}
      <div className={`relative h-full w-full rounded-[11px] bg-[#0a0a0a] overflow-hidden ${className}`}>
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                ${glowColor},
                transparent 80%
              )
            `,
          }}
        />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export const TypewriterEffect = ({
  text,
  className = "",
  speed = 0.03,
  delay = 0,
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }
      }, speed * 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isInView, text, speed]);

  // Helper to render text with highlights
  const renderHighlightedText = (content: string) => {
    const highlight = "faster, smarter, and more efficiently";
    if (content.includes(highlight)) {
      const parts = content.split(highlight);
      return (
        <>
          {parts[0]}
          <span className="text-white font-medium">{highlight}</span>
          {parts[1]}
        </>
      );
    }
    
    // Partial highlight check
    if (highlight.startsWith(content.split("—")[1] || "")) {
       // This is complex for a simple character-by-character typewriter.
       // Let's use a word-based reveal for better control over styling if needed,
       // but character-by-character is more "typewriter".
    }

    return content;
  };

  return (
    <motion.p
      ref={ref}
      className={className}
    >
      {renderHighlightedText(displayText)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[2px] h-[1em] bg-[#c8ff00] ml-1 align-middle"
      />
    </motion.p>
  );
};

export default TypewriterEffect;

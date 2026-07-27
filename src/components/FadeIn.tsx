"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // Avoid horizontal offsets — they cause mobile overflow
  const offsetY =
    direction === "down" ? -24 : direction === "none" ? 0 : 24;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offsetY }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: offsetY }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // seconds — handy to stagger a list of cards
  as?: "div" | "section" | "li";
};

// wrap anything in this and it fades up into place the first time it scrolls
// into view. i use it for basically every section on the home page.
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  // motion.div / motion.section / motion.li depending on what i pass in
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      // reduced-motion on -> skip the offset, just let it appear
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      // once: true so it doesn't re-fire every time you scroll past it.
      // the -80px margin starts it a little before it's fully on screen.
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

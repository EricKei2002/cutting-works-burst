"use client";

import { motion, useAnimation, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

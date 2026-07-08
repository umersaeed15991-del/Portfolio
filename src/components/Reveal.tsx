"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal className="mb-10 text-center sm:mb-14">
      <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    </Reveal>
  );
}

"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-accent-2/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="My Skills" title="Technologies I work with" />

        <div className="grid gap-6 md:grid-cols-3">
          {profile.skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.1}>
              <div className="glass glow-border h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="mb-6 text-lg font-bold">
                  <span className="text-gradient">{group.category}</span>
                </h3>
                <div className="space-y-5">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="font-mono text-xs text-muted">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

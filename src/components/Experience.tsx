"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";

function TimelineCard({
  title,
  subtitle,
  period,
  description,
  tags,
}: {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags?: string[];
}) {
  return (
    <div className="glass glow-border rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-accent-2">{subtitle}</p>
        </div>
        <span className="glass rounded-full px-3 py-1 font-mono text-xs text-muted">
          {period}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="My Journey" title="Experience & Education" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Experience column */}
          <div>
            <Reveal className="mb-8 flex items-center gap-3">
              <span className="rounded-xl bg-gradient-to-br from-accent to-accent-2 p-2.5 text-white">
                <Briefcase size={18} />
              </span>
              <h3 className="text-xl font-bold">Work Experience</h3>
            </Reveal>
            <div className="relative space-y-6 border-l border-white/10 pl-7">
              {profile.experience.map((exp, i) => (
                <Reveal key={exp.role + exp.period} delay={i * 0.1}>
                  <span className="absolute -left-[5px] mt-7 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-accent to-accent-2 ring-4 ring-background" />
                  <TimelineCard
                    title={exp.role}
                    subtitle={exp.company}
                    period={exp.period}
                    description={exp.description}
                    tags={exp.tags}
                  />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education column */}
          <div>
            <Reveal className="mb-8 flex items-center gap-3">
              <span className="rounded-xl bg-gradient-to-br from-accent-2 to-accent p-2.5 text-white">
                <GraduationCap size={18} />
              </span>
              <h3 className="text-xl font-bold">Education</h3>
            </Reveal>
            <div className="relative space-y-6 border-l border-white/10 pl-7">
              {profile.education.map((edu, i) => (
                <Reveal key={edu.degree} delay={i * 0.1}>
                  <span className="absolute -left-[5px] mt-7 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-accent-2 to-accent ring-4 ring-background" />
                  <TimelineCard
                    title={edu.degree}
                    subtitle={edu.institute}
                    period={edu.period}
                    description={edu.description}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

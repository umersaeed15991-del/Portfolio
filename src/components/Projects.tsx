"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight, Layers } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";

/* Card jo mouse ki taraf 3D tilt hota hai aur cursor ke saath spotlight glow chalti hai */
function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // 0..1 mouse position (card ke andar)
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), {
    stiffness: 220,
    damping: 22,
  });

  // Spotlight cursor ke pixel position par
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${px}px ${py}px, rgba(139,92,246,0.18), rgba(34,211,238,0.08) 45%, transparent 70%)`;

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
    px.set(e.clientX - rect.left);
    py.set(e.clientY - rect.top);
  };

  const onMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20"
      >
        {/* Mouse-follow spotlight */}
        <motion.div
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        {children}
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="My Work" title="Featured projects" />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1} className="h-full">
              <TiltCard>
                {/* Image / placeholder area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-8 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-1"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/25 via-fuchsia-500/15 to-accent-2/25">
                      <span className="text-gradient text-6xl font-extrabold opacity-80">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* shine sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                  {/* bottom fade into card */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/90 to-transparent" />

                  {/* Visit button on image */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.title}`}
                      className="glass absolute right-4 top-4 z-20 flex translate-y-2 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gradient-to-r hover:from-accent hover:to-accent-2 hover:text-white"
                    >
                      Live <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-accent-2">
                      {project.title}
                    </h3>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="glass rounded-full p-2 text-muted transition-all duration-300 group-hover:rotate-45 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-2 group-hover:text-white"
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <span className="glass rounded-full p-2 text-muted">
                        <Layers size={15} />
                      </span>
                    )}
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-4">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* bottom gradient line on hover */}
                <span className="absolute inset-x-6 bottom-0 z-10 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 transition-transform duration-500 group-hover:scale-x-100" />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Award, X, ZoomIn } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";

type Certificate = (typeof profile.certificates)[number];

export function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  // Esc se lightbox band ho aur background scroll lock rahe
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="certificates" className="relative py-28">
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-accent-2/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Achievements" title="Certificates & awards" />

        <div className="mx-auto grid max-w-4xl gap-7 sm:grid-cols-2">
          {profile.certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.1}>
              <button
                onClick={() => setSelected(cert)}
                className="glass glow-border group block w-full cursor-pointer overflow-hidden rounded-3xl text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <span className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
                      <ZoomIn size={16} className="text-accent-2" /> View Certificate
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5">
                  <span className="shrink-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 p-3 text-accent">
                    <Award size={22} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate font-bold transition-colors group-hover:text-accent-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="glass absolute -top-12 right-0 rounded-full p-2.5 text-muted transition-colors hover:text-foreground"
              >
                <X size={20} />
              </button>
              <div className="glass glow-border overflow-hidden rounded-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="max-h-[75vh] w-full object-contain"
                />
                <div className="border-t border-white/5 bg-white/[0.03] px-6 py-4 text-center">
                  <span className="font-bold">{selected.title}</span>
                  <span className="text-muted"> — {selected.issuer} · {selected.year}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

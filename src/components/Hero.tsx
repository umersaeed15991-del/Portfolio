"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Sparkles, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";
import { profile } from "@/data/profile";

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const speed = deleting ? 40 : 90;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Floating gradient orbs */}
      <div className="animate-float absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-accent/25 blur-[140px]" />
      <div
        className="animate-float absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-accent-2/20 blur-[140px]"
        style={{ animationDelay: "-4s" }}
      />
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          Available for new projects
          <span className="mx-1 text-white/20">|</span>
          <MapPin size={13} /> {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl break-words text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          {/* min-h taake typing ke waqt mobile par layout jump na ho */}
          <span className="block min-h-[2.3em] text-foreground/90 sm:min-h-[1.2em]">
            {typed}
            <span className="animate-blink text-accent">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-105 sm:flex-none sm:px-7"
          >
            View My Work
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="glass flex-1 whitespace-nowrap rounded-full px-6 py-3.5 text-center font-semibold transition-colors hover:bg-white/10 sm:flex-none sm:px-7"
          >
            Contact Me
          </a>

          <div className="ml-1 flex items-center gap-2">
            {[
              { Icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
              { Icon: LinkedinIcon, href: profile.socials.linkedin, label: "LinkedIn" },
              { Icon: InstagramIcon, href: profile.socials.instagram, label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass rounded-full p-3 text-muted transition-all hover:-translate-y-1 hover:text-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
          </div>

          {/* Photo — circular frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]"
          >
            {/* Glow behind photo */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-accent/40 to-accent-2/40 blur-3xl" />

            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30"
            />

            {/* Gradient ring + photo */}
            <div className="absolute inset-5 rounded-full bg-gradient-to-br from-accent via-fuchsia-500 to-accent-2 p-[4px] shadow-2xl shadow-accent/30">
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background">
                <Image
                  src="/umer-pic.jpeg"
                  alt={profile.name}
                  fill
                  sizes="380px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating badges */}
            
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="glass glow-border rounded-2xl p-4 text-center">
              <div className="text-gradient text-2xl font-extrabold sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  // Scroll par active section track karo
  useEffect(() => {
    const onScroll = () => {
      let current = "#home";
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && (el as HTMLElement).offsetTop <= window.scrollY + 140) {
          current = l.href;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress bar — sab se upar */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-[3px] w-full origin-left bg-gradient-to-r from-accent via-fuchsia-500 to-accent-2"
      />

      <div className="px-4 pt-3 sm:px-6">
        <motion.nav
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-[#0a0a15]/90 px-4 py-2.5 shadow-xl shadow-black/40 backdrop-blur-xl sm:px-5"
        >
          <a href="#home" className="pl-1 text-lg font-bold tracking-tight">
            <span className="text-gradient">Portfolio</span>
            <span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href} className="relative">
                  <a
                    href={l.href}
                    className={`relative z-10 block rounded-xl px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-xl border border-accent/40 bg-gradient-to-r from-accent/25 to-accent-2/25"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download="Umer-Saeed-CV.pdf"
              className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-105 lg:inline-flex"
            >
              <Download size={15} /> Resume
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a15]/95 p-3 shadow-xl shadow-black/40 backdrop-blur-xl lg:hidden"
          >
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      active === l.href
                        ? "border border-accent/40 bg-gradient-to-r from-accent/25 to-accent-2/25 text-white"
                        : "text-foreground/60 hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.resumeUrl}
              download="Umer-Saeed-CV.pdf"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white"
            >
              <Download size={15} /> Resume
            </a>
          </motion.div>
        )}
      </div>
    </header>
  );
}

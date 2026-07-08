"use client";

import { CheckCircle2, MapPin, Mail, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";

function CodeCard() {
  return (
    <div className="glass glow-border overflow-hidden rounded-3xl font-mono text-[13px] leading-7 sm:text-sm">
      {/* Window header */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs text-muted">umer.ts</span>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto p-6">
        <pre className="text-foreground/90">
          <code>
            <span className="text-fuchsia-400">const</span>{" "}
            <span className="text-accent-2">developer</span>{" "}
            <span className="text-muted">=</span>{" "}
            <span className="text-yellow-300">{"{"}</span>
            {"\n"}
            {"  "}name: <span className="text-emerald-300">&quot;{profile.name} Saeed&quot;</span>,
            {"\n"}
            {"  "}role: <span className="text-emerald-300">&quot;{profile.roles[0]}&quot;</span>,
            {"\n"}
            {"  "}location: <span className="text-emerald-300">&quot;{profile.location}&quot;</span>,
            {"\n"}
            {"  "}stack: <span className="text-yellow-300">[</span>
            <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;React&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Node.js&quot;</span>
            <span className="text-yellow-300">]</span>,
            {"\n"}
            {"  "}passion: <span className="text-emerald-300">&quot;Clean code & great design&quot;</span>,
            {"\n"}
            {"  "}available: <span className="text-fuchsia-400">true</span>,
            {"\n"}
            <span className="text-yellow-300">{"}"}</span>;
            <span className="animate-blink text-accent">▌</span>
          </code>
        </pre>
      </div>

      {/* Footer chips */}
      <div className="flex flex-wrap gap-2 border-t border-white/5 bg-white/[0.03] px-6 py-4">
        <span className="flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs text-accent">
          <MapPin size={12} /> {profile.location}
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-accent-2/25 bg-accent-2/10 px-3 py-1 text-xs text-accent-2">
          <Mail size={12} /> {profile.email}
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          <Sparkles size={12} /> Open to work
        </span>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About Me" title="A little bit about me" />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <CodeCard />
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted">{profile.about.intro}</p>
            </Reveal>

            <ul className="mt-8 space-y-4">
              {profile.about.highlights.map((h, i) => (
                <Reveal key={h} delay={0.15 + i * 0.08}>
                  <li className="glass flex items-start gap-3 rounded-xl px-5 py-4">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-accent-2" />
                    <span className="text-sm leading-relaxed sm:text-base">{h}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

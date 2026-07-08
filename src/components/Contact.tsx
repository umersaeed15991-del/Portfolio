"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";
import { profile } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute bottom-0 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Get In Touch" title="Let's work together" />

        <Reveal>
          <div className="glass glow-border mx-auto max-w-3xl rounded-[2rem] p-8 text-center sm:p-14">
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted">
              Have a project in mind or just want to say hello? My inbox is always
              open — I&apos;ll get back to you as soon as I can.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-105"
            >
              <Send size={19} className="transition-transform group-hover:rotate-12" />
              Say Hello
            </a>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              {[
                { Icon: Mail, label: "Email", value: profile.email },
                { Icon: Phone, label: "Phone", value: profile.phone },
                { Icon: MapPin, label: "Location", value: profile.location },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="glass rounded-2xl p-4">
                  <Icon size={18} className="mb-2 text-accent-2" />
                  <div className="text-xs uppercase tracking-wider text-muted">
                    {label}
                  </div>
                  <div className="mt-1 break-all text-sm font-medium">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-3">
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
                  className="glass rounded-full p-3.5 text-muted transition-all hover:-translate-y-1 hover:text-foreground"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

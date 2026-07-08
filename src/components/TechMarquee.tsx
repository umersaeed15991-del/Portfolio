import { profile } from "@/data/profile";

export function TechMarquee() {
  const items = [...profile.techStack, ...profile.techStack];

  return (
    <div className="relative border-y border-white/5 bg-surface/60 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-accent-2" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

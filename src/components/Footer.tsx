import { Heart } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground">{profile.name}</span>. All
          rights reserved.
        </span>
        <span className="flex items-center gap-1.5">
          Built with <Heart size={14} className="fill-accent text-accent" /> using
          Next.js & Tailwind
        </span>
      </div>
    </footer>
  );
}

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display font-bold text-lg">
            <span className="text-gradient">Pavan</span>.dev
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Building modern digital experiences with clean and scalable code.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Mail, href: "mailto:pavan@example.com" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer"
              className="rounded-full glass-card p-2.5 hover:text-[var(--accent-cyan)] hover:-translate-y-0.5 transition">
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} PavanKalyan M. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding */}
        <div>
          <div className="font-display font-bold text-lg">
            <span className="text-gradient">Pavan</span>{" "}
            <span className="text-foreground">Kalyan</span>
          </div>

          <p className="text-sm text-muted-foreground mt-1">
            Data Analyst Fresher | SQL • Excel • Python • Power BI
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {[
            {
              Icon: Github,
              href: "https://github.com/PavanKalyan-18",
              label: "GitHub",
            },
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/pavan-kalyan-m-1711b43a5/",
              label: "LinkedIn",
            },
            {
              Icon: Mail,
              href: "mailto:pavanklyn18@gmail.com",
              label: "Email",
            },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noreferrer"}
              aria-label={label}
              className="rounded-full glass-card p-2.5 hover:text-[var(--accent-cyan)] hover:-translate-y-0.5 transition"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pavan Kalyan M. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
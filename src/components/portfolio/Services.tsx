import {
  Code, Layout, Smartphone, Plug, Layers, Palette,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { Icon: Code, title: "Frontend Development", text: "Pixel-perfect, performant interfaces built with modern HTML, CSS and JavaScript." },
  { Icon: Layout, title: "React.js Applications", text: "Component-driven SPAs with clean architecture, state management and reusable UI." },
  { Icon: Smartphone, title: "Responsive Design", text: "Layouts that look and feel right on every screen — mobile, tablet and desktop." },
  { Icon: Plug, title: "REST API Integration", text: "Connecting frontends to backend services with secure, well-structured API calls." },
  { Icon: Layers, title: "Full Stack Solutions", text: "End-to-end features spanning UI, APIs, auth, and SQL databases." },
  { Icon: Palette, title: "UI Development", text: "Translating designs into accessible, polished, animated user interfaces." },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Services"
          title={<>What I <span className="text-gradient">do best</span></>}
          description="From UI to API — here's how I can help bring your product idea to life."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group relative glass-card rounded-3xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-violet)]/10" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-violet)] text-white mb-5 group-hover:rotate-6 transition-transform">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const timeline = [
  {
    Icon: Briefcase,
    tag: "Mar 2025 — Present",
    title: "Associate Software Engineer",
    org: "Serenus Technologies Solutions Pvt Ltd",
    points: [
      "Developing responsive frontend applications using React.js.",
      "Integrating REST APIs and handling authentication with JWT.",
      "Working with SQL databases for data-driven features.",
      "Contributing to full-stack web development across services.",
    ],
  },
  {
    Icon: GraduationCap,
    tag: "2019 — 2023",
    title: "B.E. Computer Science",
    org: "Computer Science Graduate",
    points: [
      "Strong foundation in data structures, algorithms and software engineering.",
      "Hands-on projects across web development, databases and systems.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Journey"
          title={<>Experience &amp; <span className="text-gradient">Education</span></>}
          description="A timeline of where I've learned, built, and contributed."
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent-blue)]/60 to-transparent" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="relative md:grid md:grid-cols-2 md:gap-12">
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-primary glow-primary border-4 border-background" />
                <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                  <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-cyan)] mb-2">
                      <item.Icon size={14} /> {item.tag}
                    </div>
                    <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    <div className="text-sm text-muted-foreground mb-3">{item.org}</div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground text-left">
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-[var(--accent-cyan)] mt-1">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
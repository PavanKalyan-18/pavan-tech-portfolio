import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "./resumeData";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title={<>My <span className="text-gradient">Tech Stack</span></>}
          description="Tools and technologies I work with to bring ideas to life."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div key={g.title} className="glass-card rounded-3xl p-7 hover:glow-primary transition-shadow">
              <h3 className="font-display text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)]" />
                {g.title}
              </h3>
              <div className="space-y-5">
                {g.items.map((it) => (
                  <div key={it.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{it.name}</span>
                      <span className="text-muted-foreground">{it.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full skill-bar-fill transition-all duration-1000"
                        style={{ width: `${it.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
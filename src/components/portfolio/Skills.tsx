import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "./resumeData";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              My <span className="text-gradient">Analytics Skills</span>
            </>
          }
          description="Tools and technologies I use to clean, analyze, visualize, and present data."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-card rounded-3xl p-7 hover:glow-primary transition-shadow"
            >
              <h3 className="font-display text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)]" />
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 rounded-xl bg-secondary/70 border border-border/50 text-sm font-medium hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { GraduationCap, Briefcase, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "2023", label: "CS Graduate" },
];

const highlights = [
  {
    Icon: GraduationCap,
    title: "Computer Science Graduate",
    text: "Class of 2023 — strong foundations in algorithms, systems and modern web development.",
  },
  {
    Icon: Briefcase,
    title: "Industry Experience",
    text: "Associate Software Engineer at Serenus Technologies — shipping production React apps.",
  },
  {
    Icon: Code2,
    title: "Full Stack Mindset",
    text: "Frontend, REST APIs, SQL, authentication — comfortable across the entire stack.",
  },
  {
    Icon: Rocket,
    title: "Continuous Learner",
    text: "Always exploring new tools, patterns and best practices to ship better software.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="About me"
          title={<>Building solutions, <span className="text-gradient">not just code</span></>}
          description="Motivated and detail-oriented developer crafting modern web experiences with React.js and the full-stack ecosystem."
        />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm <span className="text-foreground font-semibold">Pavan Kalyan M</span>, a Computer Science
              graduate from 2023 with around a year of professional experience as an
              Associate Software Engineer. My focus is on building interactive
              interfaces and scalable applications that feel great to use.
            </p>
            <p>
              I work daily with <span className="text-foreground">React.js, REST APIs, JWT
              authentication, and SQL</span> — bridging the frontend and backend to
              deliver complete, reliable features.
            </p>
            <p>
              I'm driven by clean code, thoughtful UX, and a problem-solving mindset.
              My goal is to grow into a well-rounded full-stack engineer who ships
              products that genuinely help people.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-5">
                  <div className="text-3xl font-bold text-gradient font-display">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:glow-primary transition-all group"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-[var(--accent-cyan)] mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
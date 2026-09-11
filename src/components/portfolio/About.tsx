import { SectionHeading } from "./SectionHeading";
import { aboutHighlights, aboutStats } from "./resumeData";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">

        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Turning data into{" "}
              <span className="text-gradient">meaningful insights</span>
            </>
          }
          description="Data Analyst focused on SQL, Advanced Excel, Python, and Power BI, with a foundation in software development."
        />

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* About Content */}
          <div className="space-y-5 text-muted-foreground leading-relaxed">

            <p>
              I'm{" "}
              <span className="text-foreground font-semibold">
                Pavan Kalyan M
              </span>
              , a Computer Science graduate with a strong interest in
              Data Analytics. I work with{" "}
              <span className="text-foreground font-medium">
                SQL, Advanced Excel, Python, and Power BI
              </span>{" "}
              to clean, analyze, transform, and visualize structured
              datasets.
            </p>

            <p>
              My data analytics experience comes through{" "}
              <span className="text-foreground font-medium">
                academic and self-driven projects
              </span>{" "}
              involving SQL-based analysis, Python data analysis, and
              interactive Power BI dashboards. I enjoy working with
              data to identify trends, track KPIs, and communicate
              useful insights through clear visualizations.
            </p>

            <p>
              I also have a foundation in software development, with
              exposure to{" "}
              <span className="text-foreground">
                React.js, JavaScript, Flask, REST APIs, SQL, Git, and
                GitHub
              </span>
              . This technical background gives me an understanding of
              applications, databases, and how data flows through
              software systems.
            </p>

            <p>
              I'm currently looking for an{" "}
              <span className="text-foreground font-semibold">
                entry-level Data Analyst opportunity
              </span>{" "}
              where I can apply my analytical skills, learn from
              experienced professionals, and contribute to
              data-driven decision-making.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {aboutStats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card rounded-2xl p-5"
                >
                  <div className="text-3xl font-bold text-gradient font-display">
                    {s.value}
                  </div>

                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-5">

            {aboutHighlights.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:glow-primary transition-all group"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-[var(--accent-cyan)] mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>

                <h3 className="font-semibold mb-2">
                  {title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
import { SectionHeading } from "./SectionHeading";
import { projects } from "./resumeData";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Data <span className="text-gradient">Analytics Projects</span>
            </>
          }
          description="Practical projects using SQL, Python, Excel, and Power BI to analyze data and generate meaningful insights."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-hero">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/80 font-display text-2xl">
                    Coming soon
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold mb-2">
                  {p.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import ecomImg from "@/assets/project-ecommerce.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A dynamic e-commerce platform built with Django on the backend and HTML/CSS on the frontend — interactive UI, product management, and order flows.",
    tags: ["Python", "Django", "HTML", "CSS", "SQL"],
    image: ecomImg,
  },
  {
    title: "Employee Management System (Full Stack)",
    description:
      "Employee management app with role-based access control. Built REST APIs integrated with a React frontend via Axios, SQLAlchemy ORM with MySQL, and JWT-based authentication. Optimized database queries for faster, more responsive data retrieval.",
    tags: ["React.js", "REST API", "Axios", "SQLAlchemy", "MySQL", "JWT"],
    image: null,
  },
  {
    title: "Intranet Page",
    description:
      "Multilingual intranet built with ReactJS and Redux. Integrated Google Translate API and i18n for real-time translation across languages, added a dark theme and custom routes, and improved UI performance using Context API and React Hooks. Fully responsive across devices.",
    tags: ["ReactJS", "Redux", "Google Translate API", "i18n", "HTML", "CSS"],
    image: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Selected <span className="text-gradient">Projects</span></>}
          description="A glimpse into the things I've been building and exploring lately."
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end gap-3 p-5">
                  <a href="#" className="rounded-full bg-primary text-primary-foreground p-2.5 hover:scale-110 transition">
                    <ExternalLink size={16} />
                  </a>
                  <a href="#" className="rounded-full glass-card p-2.5 hover:scale-110 transition">
                    <Github size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
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
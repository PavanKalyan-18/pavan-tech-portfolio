import {
  Briefcase,
  GraduationCap,
  Code2,
  Layout,
  Smartphone,
  Plug,
  Layers,
  Palette,
  Mail,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ecomImg from "@/assets/project-ecommerce.jpg";
import employeeImg from "@/assets/project-employee.jpg";
import intranetImg from "@/assets/project-intranet.jpg";

export type HighlightItem = {
  Icon: LucideIcon;
  title: string;
  text: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type TimelineItem = {
  Icon: LucideIcon;
  tag: string;
  title: string;
  org: string;
  points: string[];
};

export type SkillGroup = {
  title: string;
  items: { name: string; level: number }[];
};

export type ServiceItem = {
  Icon: LucideIcon;
  title: string;
  text: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export type ContactInfoItem = {
  Icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

export const aboutStats: StatItem[] = [
  { value: "1+", label: "Years Experience" },
  { value: "3+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "2023", label: "CS Graduate" },
];

export const aboutHighlights: HighlightItem[] = [
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
    Icon: Layers,
    title: "Continuous Learner",
    text: "Always exploring new tools, patterns and best practices to ship better software.",
  },
];

export const timeline: TimelineItem[] = [
  {
    Icon: Briefcase,
    tag: "Mar 2025 — Apr 2026",
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
    title: "B.E Computer Science",
    org: "Computer Science Graduate",
    points: [
      "Strong foundation in data structures, algorithms and software engineering.",
      "Hands-on projects across web development, databases and systems.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "REST APIs", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Authentication (JWT)", level: 82 },
      { name: "Backend Integration", level: 78 },
    ],
  },
  {
    title: "Tools & Concepts",
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "Responsive Design", level: 92 },
      { name: "API Integration", level: 85 },
      { name: "Full Stack Dev", level: 80 },
    ],
  },
];

export const services: ServiceItem[] = [
  {
    Icon: Code2,
    title: "Frontend Development",
    text: "Pixel-perfect, performant interfaces built with modern HTML, CSS and JavaScript.",
  },
  {
    Icon: Layout,
    title: "React.js Applications",
    text: "Component-driven SPAs with clean architecture, state management and reusable UI.",
  },
  {
    Icon: Smartphone,
    title: "Responsive Design",
    text: "Layouts that look and feel right on every screen — mobile, tablet and desktop.",
  },
  {
    Icon: Plug,
    title: "REST API Integration",
    text: "Connecting frontends to backend services with secure, well-structured API calls.",
  },
  {
    Icon: Layers,
    title: "Full Stack Solutions",
    text: "End-to-end features spanning UI, APIs, auth, and SQL databases.",
  },
  {
    Icon: Palette,
    title: "UI Development",
    text: "Translating designs into accessible, polished, animated user interfaces.",
  },
];

export const projects: ProjectItem[] = [
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
    image: employeeImg,
  },
  {
    title: "Intranet Page",
    description:
      "Multilingual intranet built with ReactJS and Redux. Integrated Google Translate API and i18n for real-time translation across languages, added a dark theme and custom routes, and improved UI performance using Context API and React Hooks. Fully responsive across devices.",
    tags: ["ReactJS", "Redux", "Google Translate API", "i18n", "HTML", "CSS"],
    image: intranetImg,
  },
];

export const contactInfo: ContactInfoItem[] = [
  {
    Icon: Mail,
    label: "Email",
    value: "pavanklyn18@gmail.com",
    href: "mailto:pavanklyn18@gmail.com",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Whitefield, Bangalore, Karnataka, India",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/pavan-kalyan-1711b43a5/",
    href: "https://www.linkedin.com/in/pavankalyan-m-1711b43a5/",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "@PavanKalyan-18",
    href: "https://github.com/PavanKalyan-18",
  },
];

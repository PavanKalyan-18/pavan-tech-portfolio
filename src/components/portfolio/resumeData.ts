import {
  Briefcase,
  GraduationCap,
  Database,
  BarChart3,
  FileSpreadsheet,
  Code2,
  LineChart,
  Brain,
  Mail,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import loanImg from "@/assets/project-bank-loan.jpg";
import libraryImg from "@/assets/project-library.jpg";
import iplImg from "@/assets/project-ipl.jpg";

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


/* =========================================================
   ABOUT
   ========================================================= */

export const aboutStats: StatItem[] = [
  { value: "3", label: "Analytics Projects" },
  { value: "4+", label: "Core Analytics Tools" },
  { value: "2023", label: "CS Graduate" },
  { value: "SQL", label: "Database Analysis" },
];

export const aboutHighlights: HighlightItem[] = [
  {
    Icon: BarChart3,
    title: "Data Analysis",
    text: "Analyzing structured datasets to identify trends, patterns, KPIs, and actionable insights.",
  },
  {
    Icon: Database,
    title: "SQL & MySQL",
    text: "Hands-on experience with joins, aggregations, subqueries, CTEs, window functions, and relational data analysis.",
  },
  {
    Icon: FileSpreadsheet,
    title: "Excel & Power Query",
    text: "Using Advanced Excel, Pivot Tables, Power Query, lookups, charts, and dashboards for data analysis.",
  },
  {
    Icon: LineChart,
    title: "Power BI",
    text: "Building interactive dashboards using Power Query, data modeling, DAX, KPIs, filters, and visualizations.",
  },
];


/* =========================================================
   EXPERIENCE / EDUCATION
   ========================================================= */

export const timeline: TimelineItem[] = [
  {
    Icon: Briefcase,
    tag: "Mar 2025 — Aug 2025",
    title: "Software Engineer Trainee",
    org: "Serenus Technologies Solutions Pvt Ltd",
    points: [
      "Completed structured training covering frontend development, backend fundamentals, databases, REST APIs, and version control.",
      "Gained hands-on practice with React.js, JavaScript, HTML, CSS, Flask, SQL, REST APIs, Git, and GitHub.",
      "Built training projects including an Employee Management System and E-commerce application.",
    ],
  },
  {
    Icon: GraduationCap,
    tag: "2019 — 2023",
    title: "B.E. Computer Science & Engineering",
    org: "Rajiv Gandhi Institute of Technology",
    points: [
      "Bachelor of Engineering in Computer Science and Engineering with a CGPA of 7.5/10.",
      "Developed foundations in programming, databases, algorithms, software engineering, and computer science.",
    ],
  },
];


/* =========================================================
   DATA ANALYTICS SKILLS
   ========================================================= */

export const skillGroups: SkillGroup[] = [
  {
    title: "Data Analysis",
    items: [
      { name: "SQL", level: 85 },
      { name: "Python", level: 82 },
      { name: "Excel", level: 88 },
      { name: "Power BI", level: 85 },
    ],
  },

  {
    title: "Data & BI Tools",
    items: [
      { name: "Power Query", level: 85 },
      { name: "DAX", level: 78 },
      { name: "Pandas", level: 82 },
      { name: "NumPy", level: 78 },
    ],
  },

  {
    title: "Visualization & Tools",
    items: [
      { name: "Data Visualization", level: 85 },
      { name: "Dashboard Development", level: 85 },
      { name: "Matplotlib", level: 75 },
      { name: "MySQL Workbench", level: 82 },
    ],
  },
];


/* =========================================================
   SERVICES / WHAT I DO
   ========================================================= */

export const services: ServiceItem[] = [
  {
    Icon: Database,
    title: "SQL Data Analysis",
    text: "Querying and analyzing relational datasets using joins, aggregations, subqueries, CTEs, and window functions.",
  },

  {
    Icon: FileSpreadsheet,
    title: "Excel Analysis",
    text: "Cleaning and analyzing data using Advanced Excel, Pivot Tables, Power Query, lookups, charts, and dashboards.",
  },

  {
    Icon: Code2,
    title: "Python Data Analysis",
    text: "Using Python, Pandas, NumPy, and Matplotlib for data cleaning, exploration, transformation, and visualization.",
  },

  {
    Icon: BarChart3,
    title: "Power BI Dashboards",
    text: "Creating interactive Power BI dashboards with data modeling, DAX measures, KPIs, slicers, and business-focused visuals.",
  },

  {
    Icon: LineChart,
    title: "Data Visualization",
    text: "Transforming analyzed data into clear visualizations that highlight trends, comparisons, and useful insights.",
  },

  {
    Icon: Brain,
    title: "Business Insights",
    text: "Exploring structured datasets to identify patterns, performance indicators, and insights that support data-driven decisions.",
  },
];


/* =========================================================
   DATA ANALYTICS PROJECTS
   ========================================================= */

export const projects: ProjectItem[] = [
  {
    title: "Bank Loan Analysis Dashboard",
    description:
      "Interactive Power BI dashboard analyzing bank loan applications, funded and received amounts, average interest rates, loan status, loan purposes, and borrower characteristics. Data was cleaned and transformed using Power Query and analyzed using DAX measures and interactive dashboard visuals.",
    tags: [
      "Power BI",
      "DAX",
      "Power Query",
      "Excel",
      "Data Analysis",
    ],
    image: loanImg,
  },

  {
    title: "Library Management System",
    description:
      "MySQL-based relational database project analyzing books, members, issued and returned books, availability, rental pricing, and overdue records. Used joins, GROUP BY, HAVING, aggregate functions, subqueries, and date-based filtering for analysis.",
    tags: [
      "SQL",
      "MySQL",
      "Joins",
      "Subqueries",
      "Data Analysis",
    ],
    image: libraryImg ,
  },

  {
    title: "IPL Cricket Data Analytics",
    description:
      "Python data analysis project using Pandas, NumPy, and Matplotlib to analyze a structured cricket dataset. Explored player runs, strike rates, rankings, season comparisons, grouping, aggregation, filtering, sorting, and data visualization.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "EDA",
    ],
    image: iplImg,
  },
];


/* =========================================================
   CONTACT
   ========================================================= */

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
    value: "Bengaluru, Karnataka, India",
  },

  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/pavan-kalyan-m-1711b43a5/",
    href: "https://www.linkedin.com/in/pavan-kalyan-m-1711b43a5/",
  },

  {
    Icon: Github,
    label: "GitHub",
    value: "@PavanKalyan-18",
    href: "https://github.com/PavanKalyan-18",
  },
];
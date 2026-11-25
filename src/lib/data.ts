// All portfolio content lives here, taken from Vidya's resume.
// Edit this file to update the site; components only handle layout.

export const profile = {
  name: "Vidya Piske",
  firstName: "Vidya",
  role: "Frontend Engineer",
  location: "Hyderabad, India",
  years: "4.8",
  email: "vidyapiske123@gmail.com",
  linkedin: "https://linkedin.com/in/vidyapiske",
  github: "https://github.com/vidya-piske",
  resume: "/Vidya_Piske_Resume.pdf",
} as const;

export const stats = [
  { value: "4.8", label: "years building UI" },
  { value: "15+", label: "production features shipped" },
  { value: "80+", label: "bugs caught before release" },
] as const;

export type Pastel = "peach" | "lilac" | "mint" | "sun" | "sky";

export type Job = {
  role: string;
  company: string;
  period: string;
  color: Pastel;
  emoji: string;
  points: string[];
  stack: string[];
};

export const jobs: Job[] = [
  {
    role: "Software Engineer",
    company: "Modelia",
    period: "Dec 2024 – Jul 2026",
    color: "peach",
    emoji: "✨",
    points: [
      "Owned 15+ production features from Figma to release across the AI generation flow, customer dashboard, and onboarding.",
      "Built the AI image-generation experience: image upload with preview, configurable generation settings, real-time progress and loading states, and a results gallery for viewing and downloading outputs.",
      "Improved Lighthouse performance scores across 10+ responsive landing pages through image optimization, lazy loading, route-level code splitting, fewer re-renders, and a shared component library.",
      "Caught and fixed 80+ frontend defects through end-to-end testing before production; received internal recognition for quality.",
      "Used AI coding assistants daily to speed up feature development, refactoring, and debugging.",
    ],
    stack: ["React.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    role: "Software Engineer",
    company: "Nu10 Technologies India Pvt Ltd",
    period: "Jul 2023 – Dec 2023",
    color: "lilac",
    emoji: "🧩",
    points: [
      "Built 8+ responsive React modules with Redux state management and REST API integration for customer-facing web applications.",
      "Improved application load times and resolved 50+ UI defects in Agile/Scrum sprints with cross-functional teams.",
    ],
    stack: ["React.js", "Redux", "REST APIs"],
  },
  {
    role: "Software Engineer",
    company: "Vamstar",
    period: "May 2022 – Apr 2023",
    color: "mint",
    emoji: "🧱",
    points: [
      "Developed a library of reusable React UI components adopted across the product, standardizing the interface and speeding up feature delivery.",
      "Integrated REST APIs and managed frontend data flow in partnership with product and engineering teams.",
    ],
    stack: ["React.js", "Component Library", "REST APIs"],
  },
  {
    role: "Software Developer",
    company: "Bitcare Technologies",
    period: "Oct 2020 – May 2022",
    color: "sky",
    emoji: "🌱",
    points: [
      "Built 20+ responsive, cross-browser pages for customer-facing applications using React.js, JavaScript, HTML5, CSS3, and REST APIs.",
      "Created reusable UI components that improved consistency and development speed across releases.",
    ],
    stack: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
];

export const projects = [
  {
    kind: "Full-stack project",
    title: "Compliance Tracker",
    blurb:
      "A corrective-action management system with 4 role-based dashboards (Admin, Manager, HR, Employee) served by a shared REST API.",
    points: [
      "Rules engine that decides the corrective action from an employee's prior-offense history",
      "Multi-step approval workflow (Draft, Submitted, Approved, Acknowledged) with a complete audit trail",
      "Authentication from scratch: bcrypt hashing, HTTP-only cookie sessions, protected routes, RBAC, password-reset emails",
      "7-table PostgreSQL schema in hand-written SQL, deployed on Vercel, Render and Neon",
    ],
    stack: ["React.js", "TypeScript", "Redux Toolkit", "Node.js", "Express.js", "PostgreSQL"],
    image: "/projects/compliance-tracker.png",
    live: "https://compliance-tracker-wheat.vercel.app",
    code: "https://github.com/vidya-piske/compliance-tracker",
    color: "lilac" as Pastel,
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    color: "sun" as Pastel,
    items: ["React.js", "React Hooks", "Next.js (App Router)", "Redux", "Redux Toolkit", "React Router", "Tailwind CSS", "Vite", "Responsive Web Design", "Reusable Component Libraries"],
  },
  {
    title: "Languages",
    color: "lilac" as Pastel,
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Backend & Data",
    color: "mint" as Pastel,
    items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "Authentication", "Role-Based Access Control"],
  },
  {
    title: "Performance & Quality",
    color: "peach" as Pastel,
    items: ["Lighthouse", "Code Splitting", "Lazy Loading", "Image Optimization", "End-to-End Testing", "Cross-Browser Testing", "Debugging", "ESLint", "Agile/Scrum"],
  },
  {
    title: "Tools & Platforms",
    color: "sky" as Pastel,
    items: ["Git", "GitHub", "Vercel", "Render", "Neon", "Firebase", "Figma", "Chrome DevTools", "Claude Code"],
  },
];

// Draggable stickers in the hero playground
export const stickers: { label: string; color: Pastel | "white" }[] = [
  { label: "⚛️ React", color: "sun" },
  { label: "Next.js", color: "lilac" },
  { label: "TypeScript", color: "mint" },
  { label: "Tailwind 🎨", color: "peach" },
  { label: "Redux Toolkit", color: "white" },
  { label: "Node.js", color: "sky" },
  { label: "PostgreSQL 🐘", color: "mint" },
  { label: "Figma", color: "peach" },
  { label: "Lighthouse ⚡", color: "sun" },
  { label: "REST APIs", color: "lilac" },
];

export const education = {
  degree: "B.Tech, Electrical and Electronics Engineering",
  school: "Mahatma Gandhi University, Nalgonda",
  period: "2016 – 2020",
  gpa: "GPA 7.8/10",
};

export const certifications = [
  { name: "Claude 101", issuer: "Anthropic" },
  { name: "Claude Code in Action", issuer: "Anthropic" },
  { name: "Web Development Certification", issuer: "" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

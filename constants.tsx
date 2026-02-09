
import React from 'react';
import { Layout, Code, Zap, Search, PenTool, Rocket, MessageSquare } from 'lucide-react';
import { Project, Service, ProcessStep } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Finvera Dashboard",
    description: "UX/UI design and frontend development for a modern web application focused on usability and performance.",
    category: "Fintech",
    image: "https://picsum.photos/seed/finvera/800/600",
    tags: ["React", "Tailwind", "D3.js"]
  },
  {
    id: 2,
    title: "Havenly Real Estate",
    description: "Responsive dashboard design with scalable frontend architecture and clean UI components.",
    category: "Web App",
    image: "https://picsum.photos/seed/havenly/800/600",
    tags: ["Next.js", "Figma", "TypeScript"]
  },
  {
    id: 3,
    title: "Cluvia Learning Platform",
    description: "Landing page designed to improve conversion rate and user engagement.",
    category: "EdTech",
    image: "https://picsum.photos/seed/cluvia/800/600",
    tags: ["UX Research", "UI Design"]
  }
];

export const SERVICES: Service[] = [
  {
    title: "UX/UI Design",
    icon: "Layout",
    items: [
      "User research & usability analysis",
      "Wireframes & interactive prototypes",
      "Design systems & UI kits",
      "Mobile-first & responsive design"
    ]
  },
  {
    title: "Frontend Development",
    icon: "Code",
    items: [
      "HTML, CSS, JavaScript, TypeScript",
      "React, Next.js, Vue",
      "Tailwind CSS, SCSS, Material UI",
      "Pixel-perfect Figma-to-code conversion"
    ]
  },
  {
    title: "Optimization",
    icon: "Zap",
    items: [
      "UX audits & redesigns",
      "Performance optimization",
      "Accessibility (WCAG) improvements",
      "SEO-friendly frontend structure"
    ]
  }
];

export const PROCESS: ProcessStep[] = [
  {
    id: "01",
    title: "Discover",
    description: "I learn about your product, users, and business goals to ensure the solution solves the right problem."
  },
  {
    id: "02",
    title: "Design",
    description: "I create clean, intuitive interfaces using proven UX principles and modern UI trends."
  },
  {
    id: "03",
    title: "Build",
    description: "I translate designs into fast, responsive, and maintainable frontend code."
  },
  {
    id: "04",
    title: "Refine",
    description: "I iterate based on feedback and real usage to deliver the best possible result."
  }
];

export const BRANDS = [
  "FocalPoint", "Screentime", "Segment", "Shutterframe", "Lightspeed", "Masterma"
];

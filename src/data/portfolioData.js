import profileImage from '../assets/WhatsApp Image 2026-09-17 at 1.40.30 AM.jpeg';

export const personalInfo = {
  name: "Mehak Amin",
  role: "Software Developer",
  specialty: "Frontend Architecture & Real-Time Web Systems",
  phone: "+91 7889406043",
  email: "mehak.amin11@gmail.com",
  location: "Srinagar, J&K, India",
  experienceYears: "Nearly 3 Years",
  status: "Open to High-Impact Opportunities",
  image: profileImage,
  bio: "Software Developer with nearly 3 years of professional experience engineering responsive, scalable, and high-performance web applications using React.js, Next.js, JavaScript, Tailwind CSS, and Redux Toolkit. Specialized in seamless REST API integration, real-time Socket.IO communication, and Stripe payment workflows.",
  education: {
    degree: "B.Tech — Computer Science and Engineering",
    institution: "University of Kashmir",
    duration: "2019 – 2023",
    cgpa: "8.23",
    gradeType: "First Class with Distinction"
  }
};

export const stats = [
  { label: "Years Experience", value: "3", suffix: "+" },
  { label: "Production Platforms", value: "5", suffix: "+" },
  { label: "B.Tech CGPA", value: "8.23", suffix: "" },
  { label: "Client Satisfaction", value: "100", suffix: "%" }
];

export const skillsData = [
  {
    category: "Frontend Core",
    description: "Building responsive, modern, and accessible client interfaces",
    items: [
      { name: "React.js", level: 95, highlight: true },
      { name: "Next.js", level: 88, highlight: true },
      { name: "JavaScript (ES6+)", level: 92, highlight: true },
      { name: "Tailwind CSS", level: 95, highlight: true },
      { name: "Redux Toolkit", level: 90, highlight: true },
      { name: "Framer Motion", level: 85, highlight: false },
      { name: "HTML5 / Semantic Web", level: 96, highlight: false },
      { name: "CSS3 / Responsive Design", level: 94, highlight: false }
    ]
  },
  {
    category: "API & Real-Time Communication",
    description: "Architecting synchronized, reliable data flows and payment processing",
    items: [
      { name: "REST APIs & Integration", level: 94, highlight: true },
      { name: "Socket.IO (Real-Time Chat)", level: 88, highlight: true },
      { name: "Stripe Payment Workflows", level: 90, highlight: true },
      { name: "Postman API Testing", level: 86, highlight: false },
      { name: "Webhooks & Event Handlers", level: 84, highlight: false }
    ]
  },
  {
    category: "Backend & Database (Working Knowledge)",
    description: "Bridging frontend interfaces with backend services and schemas",
    items: [
      { name: "Node.js", level: 78, highlight: false },
      { name: "Express.js", level: 76, highlight: false },
      { name: "MongoDB", level: 72, highlight: false },
      { name: "Authentication / JWT", level: 82, highlight: false }
    ]
  },
  {
    category: "Tools, Version Control & SEO",
    description: "Modern engineering workflows, version control, and search visibility",
    items: [
      { name: "Git & GitHub", level: 90, highlight: true },
      { name: "Vite / Build Tools", level: 88, highlight: false },
      { name: "On-Page & Technical SEO", level: 80, highlight: false },
      { name: "Chrome DevTools & Profiling", level: 85, highlight: false }
    ]
  }
];

export const experienceData = [
  {
    role: "Software Developer — Frontend",
    company: "Raybit Technologies",
    location: "Srinagar, J&K",
    period: "Dec 2023 – Present",
    current: true,
    summary: "Leading frontend engineering across key client platforms and in-house products, architecting reusable UI systems, integrating complex REST/Socket.IO APIs, and implementing secure Stripe payment lifecycles.",
    highlights: [
      "Developed and maintained scalable web applications utilizing React.js, Next.js, Tailwind CSS, Redux Toolkit, and RESTful architectures.",
      "Engineered comprehensive Stripe payment integrations for project-based and milestone-based escrow payouts.",
      "Implemented real-time bidirectional communication using Socket.IO for live messaging between clients and freelancers.",
      "Standardized state management via Redux Toolkit slices, ensuring robust loading states, optimistic updates, and error handling.",
      "Collaborated closely with backend developers and product stakeholders to troubleshoot complex bugs, refine UI/UX, and ship production releases.",
      "Delivered major features across a Freelance Hiring Marketplace, Corporate Platform, Gaming Courses Portal, and Healthcare Departmental Forms."
    ],
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Socket.IO", "Stripe API", "REST APIs", "JavaScript"]
  },
  {
    role: "Software Developer Intern",
    company: "Graphic Weave",
    location: "Srinagar, J&K",
    period: "Nov 2023",
    current: false,
    summary: "Collaborated in an agile frontend team to implement interactive features and troubleshoot core user interface workflows.",
    highlights: [
      "Developed modular frontend features and completed application sprint tasks using JavaScript and React.js.",
      "Partnered with senior engineers to diagnose and resolve cross-browser UI glitches, achieving faster render times and responsive alignment.",
      "Engaged in code reviews and adopted best practices for maintainable code structure."
    ],
    techStack: ["JavaScript", "React.js", "CSS3", "HTML5", "Git"]
  }
];

export const projectsData = [
  {
    id: "freelance-marketplace",
    title: "Freelance Hiring Marketplace",
    tagline: "End-to-end talent marketplace with real-time Socket.IO chat and Stripe milestone payments",
    category: "Marketplace & Real-Time",
    featured: true,
    badges: ["React.js", "Redux Toolkit", "Socket.IO", "Stripe", "REST APIs", "Tailwind CSS"],
    metrics: [
      { label: "Milestone Escrow", value: "Stripe Powered" },
      { label: "Chat Latency", value: "<50ms Real-Time" },
      { label: "Core Flows", value: "8 Modules" }
    ],
    overview: "A comprehensive, production-grade freelance hiring marketplace connecting clients with top-tier freelancers. The platform covers the entire employment lifecycle from job posting and proposal bidding to milestone-based escrow payments, contract creation, real-time messaging, and review systems.",
    challenges: [
      "Handling synchronized real-time messaging with Socket.IO rooms while preserving message history and delivery status.",
      "Managing complex multi-step Stripe payment workflows with escrow verification and milestone release safeguards.",
      "Maintaining complex application state across multiple user roles (client vs. freelancer) without state leaks or redundant network calls."
    ],
    solutionPoints: [
      "Architected dedicated Redux Toolkit slices with async thunks, error boundaries, and optimistic UI updates for proposal submissions.",
      "Implemented a custom Socket.IO connection manager that handles automatic reconnection, presence tracking, and active conversation state.",
      "Integrated Stripe webhooks and client-side payment confirmation modals ensuring friction-free transactions for milestone completions.",
      "Constructed a modular design system using Tailwind CSS with fully responsive dashboards for both clients and talent."
    ],
    previewMock: "marketplace",
    image: "assets/img/freelance-marketplace.png",
    number: "01"
  },
  {
    id: "raybit-tech",
    title: "Raybit Technologies Platform",
    tagline: "Corporate presence and scalable UI component library for enterprise tech solutions",
    category: "Corporate",
    number: "02",
    image: "assets/img/raybit-technologies.png",
    featured: true,
    badges: ["Next.js", "Tailwind CSS", "REST APIs", "Responsive Architecture"],
    metrics: [
      { label: "Responsive Score", value: "100%" },
      { label: "Component Reuse", value: "85%" },
      { label: "Load Speed", value: "<1.2s" }
    ],
    overview: "The primary digital face of Raybit Technologies, designed to communicate the firm's software capabilities, client case studies, and enterprise solutions. Built using reusable React architecture for effortless marketing content updates.",
    challenges: [
      "Ensuring pixel-perfect consistency across diverse mobile, tablet, and ultrawide desktop viewports.",
      "Balancing rich visual typography and modern aesthetics with lightning-fast load times."
    ],
    solutionPoints: [
      "Developed a custom design system with reusable cards, headers, interactive grids, and service showcases.",
      "Implemented clean semantic HTML5 and on-page technical SEO optimizations to elevate organic search placement.",
      "Optimized asset delivery and layout shifts, yielding fluid 60fps scrolling performance."
    ],
    previewMock: "corporate"
  },
  {
    id: "ray-apps",
    title: "Ray Apps Showcase",
    tagline: "Dynamic interactive website enhanced with Framer Motion animations and fluid micro-interactions",
    category: "Web App",
    number: "03",
    image: "assets/img/project-1.png",
    featured: true,
    badges: ["React.js", "Framer Motion", "Tailwind CSS", "Micro-Interactions"],
    metrics: [
      { label: "Animation FPS", value: "60 FPS" },
      { label: "UX Delight", value: "High" },
      { label: "Layouts", value: "Multi-device" }
    ],
    overview: "A sleek, motion-driven portfolio website showcasing Ray Apps suite of digital applications. Focused on immersive user experiences, physical spring animations, and engaging interactive triggers.",
    challenges: [
      "Preventing layout thrashing and stutter during complex scroll-triggered multi-element animations.",
      "Crafting mobile gesture interactions that mirror native application feel."
    ],
    solutionPoints: [
      "Employed Framer Motion springs, staggered variants, and viewport enter/exit animations.",
      "Implemented hardware-accelerated transforms and opacity transitions for zero frame drops.",
      "Engineered touch-responsive interactive carousels and smooth collapsible accordions."
    ],
    previewMock: "rayapps"
  },
  {
    id: "gaming-courses",
    title: "Gaming Courses Platform",
    tagline: "Interactive e-learning portal for dynamic gaming curriculums and student checkout flows",
    category: "EdTech",
    number: "04",
    image: "assets/img/gaming-courses.png",
    featured: false,
    badges: ["React.js", "REST APIs", "State Management", "Dynamic Routing"],
    metrics: [
      { label: "Course Workflows", value: "Dynamic" },
      { label: "API Sync", value: "Real-Time" },
      { label: "Checkout", value: "Secured" }
    ],
    overview: "A specialized gaming education platform facilitating dynamic course browsing, video lecture tracking, user progression states, and seamless course enrollment workflows.",
    challenges: [
      "Managing complex client-side course state, progress bars, and dynamic price discount calculations.",
      "Structuring clean API response interceptors for dynamic course modules."
    ],
    solutionPoints: [
      "Integrated RESTful endpoints for real-time course metadata, syllabus rendering, and user enrollment status.",
      "Built clean loading skeletons and empty states to maintain premium UX even on slower network connections.",
      "Streamlined the checkout workflow with instant client-side validation and visual order summaries."
    ],
    previewMock: "gaming"
  },
  {
    id: "pre-surgery-forms",
    title: "Pre-Surgery Departmental Forms",
    tagline: "Mission-critical digital medical forms streamlining doctor-patient clinical data capture",
    category: "Healthcare & Enterprise",
    featured: false,
    badges: ["React.js", "JavaScript", "Medical Intake", "Form Validation", "REST Endpoints"],
    metrics: [
      { label: "Data Accuracy", value: "100%" },
      { label: "Intake Time", value: "-40%" },
      { label: "Validation Checks", value: "25+ Rules" }
    ],
    overview: "A digital medical intake application designed to replace paper-based pre-surgery documentation, facilitating structured clinical questionnaires, doctor review approvals, and compliant patient history collection.",
    challenges: [
      "Strict form validation rules where omission of clinical data could impact surgical preparations.",
      "Providing doctors and nurses with quick, digestible summaries of critical patient vitals and allergies."
    ],
    solutionPoints: [
      "Constructed a multi-stage wizard with branching clinical logic based on prior answers.",
      "Implemented real-time field validation, draft autosaving, and unambiguous alert prompts.",
      "Enhanced doctor-patient consultation flow through instant export and synchronized digital review."
    ],
    previewMock: "forms",
    image: "assets/img/project-3.png",
    number: "05",
    category: "Web"
  },



];

export const educationData = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "University of Kashmir",
    year: "2019 – 2023",
    score: "8.23 CGPA (Distinction)",
    description: "Graduated First Class with Distinction. Core coursework in Data Structures, Algorithms, Web Technologies, Database Management Systems, and Distributed Computing."
  },

];

export const servicesData = [
  {
    id: "skills",
    title: "Development Skills",
    description: "Engineering scalable client interfaces with React JS, Next.js, Redux Toolkit, and Node JS. High-performance web applications built with modern architectural standards.",
    subtitle: "Skills",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Redux Toolkit",
      "Socket.IO",
      "Stripe API",
      "REST APIs",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Framer Motion",
      "Git & GitHub"
    ]
  },
  {
    id: "tools",
    title: "Development Tools",
    description: "Leveraging modern industry-standard developer tooling to streamline delivery, diagnose bottlenecks, and guarantee high codebase reliability.",
    subtitle: "Tools",
    skills: [
      "VS Code",
      "Postman",
      "Chrome DevTools",
      "Vite",
      "Git",
      "GitHub",
      "Redux DevTools",
      "Claude",
      "ChatGPT",
      "Figma",
      "npm / yarn",
      "ESLint"
    ]
  },
  {
    id: "solutions",
    title: "Architectural Capabilities",
    description: "Specialized in real-time communication architectures, milestone-based escrow payment lifecycles, and resilient client-side state synchronization.",
    subtitle: "Specializations",
    skills: [
      "Real-Time Chat Systems",
      "Stripe Escrow Workflows",
      "WebSocket Connection Mgmt",
      "Performance Profiling",
      "On-Page Technical SEO",
      "Reusable Component Systems",
      "Cross-Browser Consistency"
    ]
  }
];




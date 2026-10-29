/* ============================================================
   Portfolio content — single source of truth.
   Synced with "Arione_Dauis_Resume.pdf" (Full Stack Web Developer).
   ============================================================ */

export const profile = {
  name: "Arione Dauis",
  fullName: "Arione John C. Dauis",
  role: "Full Stack Web Developer",
  location: "Cainta, Rizal, Philippines",
  phone: "+63 961 995 1286",
  phoneHref: "https://wa.me/639619951286",
  email: "dauis.arionejohn@gmail.com",
  linkedin: "https://www.linkedin.com/in/arione-dauis/",
  linkedinLabel: "linkedin.com/in/arione-dauis",
  github: "https://github.com/NarixenoAdaxius",
  githubLabel: "github.com/NarixenoAdaxius",
  resume: "/Arione_Dauis_Resume.pdf",
  summary:
    "Full stack web developer with experience shipping production applications using Next.js, React, Node.js, and TypeScript. Led a 10-person team to deliver an event ticketing platform and contributed to testing and release automation on a live US SaaS product. Computer Science graduate (Cum Laude) comfortable across frontend, REST APIs, databases, automated testing, and Linux/Docker deployments.",
};

export const heroStats = [
  { value: "10", unit: "devs", label: "Led on a production ticketing platform" },
  { value: "35", unit: "%", label: "Faster delivery via staging automation" },
  { value: "3+", unit: "yrs", label: "Freelancing for clients since 2023" },
  { value: "BS", unit: "CS", label: "Computer Science, Cum Laude" },
];

export type Experience = {
  period: string;
  role: string;
  org: string;
  place: string;
  points: string[];
  tags: string[];
  figure?: { src: string; caption: string };
};

export const experience: Experience[] = [
  {
    period: "2023 — Present",
    role: "Freelance Web Developer & IT Consultant",
    org: "Self-Employed",
    place: "Local & International",
    points: [
      "Deliver web projects independently from brief to launch, serving as a single point of accountability across design, development, QA, and cross-browser testing.",
      "Repeat-hire technician for local and international clients, resolving software and performance issues remotely and on-site with minimal downtime.",
    ],
    tags: ["Next.js", "React", "QA", "Client Advisory"],
  },
  {
    period: "Sep 2025 — Mar 2026",
    role: "Software Engineer",
    org: "American Sourcing Group (ASG Platform)",
    place: "Remote",
    points: [
      "Expanded automated test coverage for a live US SaaS system, reducing bug risk in production and tightening the feedback loop before each release.",
      "Built a staging pipeline automation system that eliminated repetitive manual steps and improved team delivery speed by 35%.",
      "Worked within a professional engineering workflow of branching, versioning, and sprint commitments, helping the team deploy on schedule every cycle.",
    ],
    tags: ["Jest", "Playwright", "CI/CD", "GitHub Actions", "Agile"],
    figure: {
      src: "/images/generated/pipeline-automation.jpg",
      caption: "Staging pipeline automation — manual steps out, 35% faster delivery in.",
    },
  },
  {
    period: "Mar 2025 — May 2025",
    role: "IT Intern",
    org: "Dream PC Builds & IT Solutions Inc.",
    place: "Philippines",
    points: [
      "Restructured and deployed a custom POS system for company operations.",
      "Planned and installed company server infrastructure on Ubuntu Server.",
    ],
    tags: ["Ubuntu Server", "POS", "Infrastructure"],
  },
  {
    period: "Jan 2024 — Dec 2024",
    role: "Full Stack Head Web Developer",
    org: "ALPHA — Alliance of Leading Programmers",
    place: "Cainta, Rizal",
    points: [
      "Led a 10-person engineering team in delivering a full event ticketing platform, owning both technical direction and team execution end-to-end.",
      "Architected a scalable data layer that maintained accuracy and reliability under production load as the platform grew.",
      "Wrote onboarding documentation and mentored developers within sprint cycles, reducing knowledge silos and keeping deployments free of bottlenecks.",
    ],
    tags: ["Team Lead", "Data Architecture", "Mentorship", "Sprints"],
  },
];

export const education = {
  degree: "BS in Computer Science",
  honors: "Cum Laude",
  school: "STI Colleges Ortigas-Cainta",
  period: "2021 — 2025",
};

export const skillGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "PHP", "SQL", "Python"] },
  { label: "Frontend", items: ["Next.js", "React", "HTML", "CSS", "Tailwind CSS", "ShadCN", "Radix UI", "Figma"] },
  { label: "Backend & APIs", items: ["Node.js", "REST APIs", "WebSockets", "JWT / OAuth 2.0", "Stripe API", "Google API", "OpenAI API"] },
  { label: "Databases", items: ["MongoDB", "MariaDB", "SQLite", "Redis"] },
  { label: "Testing & Monitoring", items: ["Jest", "Playwright", "Postman", "Unit Testing", "End-to-End Testing", "UAT", "Sentry"] },
  { label: "DevOps & Infra", items: ["Docker", "Linux (Debian, Ubuntu Server)", "GitHub Actions", "CI/CD", "AWS", "DigitalOcean", "Nginx"] },
  { label: "Tooling & Workflow", items: ["Git", "GitHub", "JIRA", "VS Code", "Cursor", "Claude Code", "Agile / Scrum"] },
];

export type Project = {
  slug: string;
  title: string;
  kind: string;
  category: "Product" | "Platform" | "Infrastructure" | "Tooling";
  stack: string[];
  summary: string;
  points?: string[];
  role?: string;
  cover: string;
  generated?: boolean;
  gallery?: string[];
  video?: string;
  link?: string;
};

/* Featured — straight from the resume's PROJECTS section */
export const featuredProjects: Project[] = [
  {
    slug: "palette-mail",
    title: "Palette Mail",
    kind: "Web-Based HTML Email Editor",
    category: "Product",
    stack: ["Next.js", "Radix UI", "MongoDB", "Nodemailer"],
    summary:
      "A full-stack email crafting and delivery platform for developers — a web-based code editor plus a Visual Builder for composing styled HTML emails.",
    points: [
      "Web-based code editor and a Visual Builder for composing styled HTML emails.",
      "Scheduled sending with MongoDB-backed persistence.",
      "Two-Factor Authentication (2FA) through authenticator apps.",
    ],
    cover: "/images/projects/palatte-mail/home.png",
    gallery: [
      "/images/projects/palatte-mail/home.png",
      "/images/projects/palatte-mail/EmailComposer.png",
      "/images/projects/palatte-mail/Settings.png",
      "/images/projects/palatte-mail/2FA.png",
    ],
    link: "https://github.com/NarixenoAdaxius",
  },
  {
    slug: "carisle-hrs",
    title: "Carisle Media HRS",
    kind: "Applicant Tracking System",
    category: "Platform",
    role: "Project Lead",
    stack: ["REST APIs", "Automated Email", "Rule-Based Scoring", "Dashboard"],
    summary:
      "A web-based ATS with automated email workflows, rule-based candidate scoring, and a centralized applicant dashboard.",
    points: [
      "Led the team building automated email workflows and rule-based candidate scoring.",
      "Centralized applicant dashboard for the hiring pipeline.",
      "Owned sprint planning, backend API development, and technical documentation across the full delivery cycle.",
    ],
    cover: "/images/generated/project-carisle-ats.jpg",
    generated: true,
  },
  {
    slug: "game-servers",
    title: "Self-Hosted Game Server Infrastructure",
    kind: "Multiplayer Server Ops",
    category: "Infrastructure",
    stack: ["Docker", "Debian", "DigitalOcean", "Firewall"],
    summary:
      "Multiple containerized multiplayer game servers deployed and managed with Docker on a Debian DigitalOcean droplet.",
    points: [
      "Secured with firewall rules to restrict unauthorized access.",
      "Mod integration, memory and storage management to optimize performance.",
      "Regular backups to keep live servers stable.",
    ],
    cover: "/images/generated/project-game-servers.jpg",
    generated: true,
  },
];

/* Archive — additional shipped work with real screenshots */
export const archiveProjects: Project[] = [
  {
    slug: "alpha-ticketing",
    title: "ALPHA Event Platform",
    kind: "Ticketing Dashboard + QR Check-in",
    category: "Platform",
    stack: ["Event Ticketing", "QR Check-in", "Admin Dashboard"],
    summary:
      "The event ticketing platform I led at ALPHA — a unified admin dashboard plus a responsive, camera-based QR reader for real-time ticket verification at registration.",
    cover: "/images/projects/AlphaEventDashboard/Dashboard.png",
    gallery: [
      "/images/projects/AlphaEventDashboard/Dashboard.png",
      "/images/projects/AlphaEventDashboard/Tables.png",
      "/images/projects/AlphaEventDashboard/Esports.png",
      "/images/projects/AlphaQRScanner/Scamner.png",
    ],
    video: "/videos/Event Attendance QR Scanner Video.mp4",
    link: "https://github.com/NarixenoAdaxius",
  },
  {
    slug: "bug-hunter",
    title: "Bug Hunter",
    kind: "VS Code Extension",
    category: "Tooling",
    stack: ["TypeScript", "VS Code API", "Static Analysis"],
    summary:
      "A VS Code extension that gamifies static code analysis — local parsing engines track achievements and coding metrics directly inside the IDE.",
    cover: "/images/projects/bug-hunter/screenshot-dashboard.png",
    gallery: [
      "/images/projects/bug-hunter/screenshot-dashboard.png",
      "/images/projects/bug-hunter/screenshot-fighting.png",
      "/images/projects/bug-hunter/screenshot-defeated-insights.png",
      "/images/projects/bug-hunter/screenshot-store-themes.png",
    ],
    link: "https://github.com/NarixenoAdaxius",
  },
  {
    slug: "alpha-landing",
    title: "ALPHA Landing Site",
    kind: "Organization Website",
    category: "Product",
    stack: ["Landing Page", "Responsive", "Forms"],
    summary:
      "A high-performance student organization landing site with mobile-responsive layouts and instant form submission handling.",
    cover: "/images/projects/AlphaWebsite/Landing01.png",
    gallery: [
      "/images/projects/AlphaWebsite/Landing01.png",
      "/images/projects/AlphaWebsite/Landing02.png",
      "/images/projects/AlphaWebsite/Landing03.png",
      "/images/projects/AlphaWebsite/Landing04.png",
    ],
    link: "https://github.com/NarixenoAdaxius",
  },
  {
    slug: "dpc-pos",
    title: "DPC Point of Sale",
    kind: "Intranet POS System",
    category: "Infrastructure",
    stack: ["POS", "Intranet", "Ubuntu Server"],
    summary:
      "A sales tracking and POS tool restructured and deployed for Dream PC Builds — running on a secure intranet server setup with local backups.",
    cover: "/images/projects/DPCPOS/Dashboard.png",
    gallery: [
      "/images/projects/DPCPOS/Dashboard.png",
      "/images/projects/DPCPOS/Login.png",
      "/images/projects/DPCPOS/mail.png",
    ],
  },
];

export const certifications = [
  {
    title: "Backend Head Certification",
    issuer: "ALPHA",
    img: "/images/certifications/Backend Head Certification.png",
    desc: "Leadership recognition as Full Stack Head Web Developer — database schemas and event architecture.",
  },
  {
    title: "Cybersecurity for Everyone",
    issuer: "DICT",
    img: "/images/certifications/Cybersecurity for Everyone DICT.png",
    desc: "Foundational network defense, secure system configuration, and endpoint protection.",
  },
  {
    title: "Cyber Awareness Challenge",
    issuer: "2024",
    img: "/images/certifications/Cyber Awareness Challenge 2024.png",
    desc: "Access management, operational security protocols, and secure administrative controls.",
  },
  {
    title: "Packet Hacks — Finalist",
    issuer: "Competition",
    img: "/images/certifications/Packet hacks Finalist Certificate of Participation.png",
    desc: "Finalist in competitive networking and systems problem-solving under tight timeframes.",
  },
];

export const testimonials = [
  {
    quote:
      "Following a security breach, Arione stepped in and gave me a clear, step-by-step recovery roadmap that immediately secured my system. His ongoing optimization work keeps my computer running faster than ever. He is approachable, clear, and extremely reliable.",
    name: "sauceages",
    context: "Security & Tech Advisory",
  },
  {
    quote:
      "I had a critical OS transition and some compatibility conflicts. Mr. Dauis set up a clean install, configured all drivers, and restored every single bit of my data without a hitch. I will definitely look to him again for any deployment or configuration work.",
    name: "irey.v",
    context: "System Configuration & Deployment",
  },
  {
    quote:
      "My system was crashing constantly when running heavy apps. Arione connected remotely, audited my privileges, and adjusted application modes to stabilize the setup. It has been solid ever since. He stays calm and resolves issues very smoothly.",
    name: "Scarlet Lucius",
    context: "Remote Technical Support",
  },
  {
    quote:
      "My laptop's keyboard was completely unresponsive. Arione diagnosed and replaced it, and it has functioned flawlessly ever since — quick, and at a very reasonable cost.",
    name: "Denimon",
    context: "Hardware Repair & Diagnostics",
  },
];

export const navItems = [
  { href: "#about", label: "About", no: "01" },
  { href: "#experience", label: "Experience", no: "02" },
  { href: "#work", label: "Work", no: "03" },
  { href: "#stack", label: "Stack", no: "04" },
  { href: "#credentials", label: "Credentials", no: "05" },
  { href: "#voices", label: "Voices", no: "06" },
  { href: "#contact", label: "Contact", no: "07" },
];

import Image from "next/image";
import { FolderGit2, Mail, Users, ShieldCheck, ExternalLink, Check } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface Project {
  name: string;
  tagline: string;
  desc: string;
  highlights: string[];
  tech: string[];
  screenshot: string | null;
  iconFallback: React.ReactNode;
  github: string;
  link: string;
  linkLabel: string;
  accentColor: string;
}

const projectsData: Project[] = [
  {
    name: "Bug Hunter",
    tagline: "VS Code Extension · TypeScript",
    desc: "A gamified static code-analysis VS Code extension. Bugs in your code become monsters you fight — making code quality fun and adoption frictionless.",
    highlights: [
      "Gamifies static analysis: code bugs become arena monsters to defeat",
      "Modular TypeScript analyzer engine — easy to extend with new rules",
      "Self-managed pipeline from development to publishing on VS Marketplace",
    ],
    tech: ["TypeScript", "VS Code API", "Node.js", "VSIX Packaging", "Git"],
    screenshot: "/images/projects/bug-hunter/screenshot-dashboard.png",
    iconFallback: <FolderGit2 size={32} />,
    github: "https://github.com/NarixenoAdaxius",
    link: "#",
    linkLabel: "VS Marketplace",
    accentColor: "var(--brand)",
  },
  {
    name: "Palette Mail",
    tagline: "Full-Stack Email Builder · Next.js",
    desc: "A professional email design and delivery platform with a browser-based Visual Builder, scheduled sending, 2FA login, and a rich component library.",
    highlights: [
      "Drag-and-drop Visual Builder for stylized, responsive HTML emails",
      "Two-Factor Authentication (2FA) via authenticator apps",
      "Scheduled mail queuing and delivery via Nodemailer",
    ],
    tech: ["Next.js", "Radix UI", "MongoDB", "Nodemailer", "JWT Auth"],
    screenshot: "/images/projects/palatte-mail/home.png",
    iconFallback: <Mail size={32} />,
    github: "https://github.com/NarixenoAdaxius",
    link: "#",
    linkLabel: "Live Demo",
    accentColor: "var(--accent)",
  },
  {
    name: "ALPHA Event Dashboard",
    tagline: "Event & Team Management · React",
    desc: "Full event management suite for a 10+ developer organization — ticketing, QR scanning, automated emails, analytics dashboards, and a public landing site.",
    highlights: [
      "Led 10-person team to deliver a complete end-to-end event platform",
      "MongoDB data model maintained accuracy under peak registration traffic",
      "Eliminated all third-party event tools by building proprietary systems",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "REST APIs", "Team Leadership"],
    screenshot: "/images/projects/AlphaEventDashboard/Dashboard.png",
    iconFallback: <Users size={32} />,
    github: "https://github.com/NarixenoAdaxius",
    link: "#",
    linkLabel: "Case Study",
    accentColor: "var(--brand)",
  },
  {
    name: "DPC Point of Sale",
    tagline: "Custom POS System · IT Consulting",
    desc: "Restructured and deployed a custom Point-of-Sale system for Dream PC Builds & IT Solutions. Includes Ubuntu Server infrastructure and secure admin access.",
    highlights: [
      "Re-architected legacy POS codebase to match modern operational needs",
      "Deployed company server infrastructure on Ubuntu Server from scratch",
      "Streamlined checkout, inventory, and reporting workflows",
    ],
    tech: ["Node.js", "MySQL", "Ubuntu Server", "Nginx", "System Admin"],
    screenshot: "/images/projects/DPCPOS/Dashboard.png",
    iconFallback: <ShieldCheck size={32} />,
    github: "https://github.com/NarixenoAdaxius",
    link: "#",
    linkLabel: "Project Notes",
    accentColor: "var(--accent)",
  },
];

export default function Projects() {
  return (
    <div className="projects-list">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className={`project-card${index % 2 === 1 ? " reverse" : ""}`}
        >
          {/* Screenshot / Visual Panel */}
          <div className="project-visual">
            {project.screenshot ? (
              <Image
                src={project.screenshot}
                alt={`${project.name} screenshot`}
                fill
                className="project-screenshot"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            ) : (
              <div className="project-screenshot-fallback">
                <div className="project-icon-box" style={{ color: project.accentColor }}>
                  {project.iconFallback}
                </div>
              </div>
            )}
          </div>

          {/* Detail Panel */}
          <div className="project-details">
            <div>
              <p className="project-tagline">{project.tagline}</p>
              <h3 className="project-name">{project.name}</h3>
            </div>

            <p className="project-desc">{project.desc}</p>

            <ul className="project-highlights">
              {project.highlights.map((h, hi) => (
                <li key={hi} className="project-highlight-item">
                  <Check size={14} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="project-tech-list">
              {project.tech.map((t, ti) => (
                <span key={ti} className="project-tech-tag">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <GithubIcon size={14} />
                Source
              </a>
              <a href={project.link} className="project-link">
                <ExternalLink size={14} />
                {project.linkLabel}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

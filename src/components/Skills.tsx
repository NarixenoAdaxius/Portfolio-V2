import { Code2, Layout, Server, Cpu, CheckSquare } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Core",
    icon: <Code2 size={18} />,
    skills: ["TypeScript", "JavaScript", "Java", "C#", "PHP", "SQL", "HTML5", "CSS3", "Bash"],
  },
  {
    title: "Frontend & UI",
    icon: <Layout size={18} />,
    skills: ["Next.js", "React", "Tailwind CSS", "CSS Modules", "Figma", "ShadCN / Radix UI"],
  },
  {
    title: "Backend & Databases",
    icon: <Server size={18} />,
    skills: ["Node.js", "REST APIs", "gRPC", "WebSockets", "MongoDB", "MariaDB", "SQLite", "Redis", "etcd"],
  },
  {
    title: "DevOps & Infrastructure",
    icon: <Cpu size={18} />,
    skills: ["Docker", "Linux (Debian/Ubuntu)", "Ubuntu Server", "GitHub Actions", "CI/CD", "Nginx", "OpenAI API"],
  },
  {
    title: "QA, Tools & AI Dev",
    icon: <CheckSquare size={18} />,
    skills: ["Jest", "Playwright", "Postman", "Git / GitHub", "JIRA", "Cursor", "Claude Code", "Antigravity IDE"],
  },
];

export default function Skills() {
  return (
    <div className="skills-grid">
      {skillCategories.map((cat, i) => (
        <div key={i} className="skills-category">
          <h3 className="category-title">
            {cat.icon}
            <span>{cat.title}</span>
          </h3>
          <div className="skills-tags">
            {cat.skills.map((s, si) => (
              <span key={si} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

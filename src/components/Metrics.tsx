import { Zap, Users, Code, Award } from "lucide-react";

const metricsData = [
  {
    value: "+35%",
    label: "Delivery Speed",
    desc: "Automated a staging pipeline that eliminated repetitive QA steps for a live US SaaS platform.",
    iconClass: "metric-icon-amber",
    icon: <Zap size={20} />,
  },
  {
    value: "~30%",
    label: "Dev Productivity",
    desc: "Built AI-integrated VS Code extensions used daily by engineering teams to ship features faster.",
    iconClass: "metric-icon-indigo",
    icon: <Code size={20} />,
  },
  {
    value: "10-Person",
    label: "Team Leadership",
    desc: "Led a full engineering team end-to-end: architecture, sprints, code review, and production release.",
    iconClass: "metric-icon-amber",
    icon: <Users size={20} />,
  },
  {
    value: "Cum Laude",
    label: "CS Graduate",
    desc: "BS in Computer Science, STI Colleges Ortigas-Cainta — graduated with academic honors in 2025.",
    iconClass: "metric-icon-green",
    icon: <Award size={20} />,
  },
];

export default function Metrics() {
  return (
    <div className="metrics-grid">
      {metricsData.map((m, i) => (
        <div key={i} className="metric-card">
          <div className={`metric-icon ${m.iconClass}`}>{m.icon}</div>
          <div className="metric-value gradient-text">{m.value}</div>
          <div className="metric-label">{m.label}</div>
          <p className="metric-desc">{m.desc}</p>
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import ContactForm from "@/components/ContactForm";
import HeroAvatar from "@/components/HeroAvatar";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import {
  Download, Mail, MapPin, Phone,
  Briefcase, GraduationCap, Smile, Layers, Headphones, Users,
  ChevronRight, ExternalLink,
} from "lucide-react";

/* ── Skills data ── */
const skills = [
  { name: "TypeScript / JavaScript", pct: 92 },
  { name: "Next.js / React",         pct: 90 },
  { name: "Node.js / REST APIs",      pct: 88 },
  { name: "MongoDB / MariaDB / Redis",pct: 83 },
  { name: "Docker / Linux / CI-CD",   pct: 78 },
  { name: "AI Tooling & Automation",  pct: 85 },
  { name: "System Design",            pct: 80 },
  { name: "TypeScript (strict)",      pct: 88 },
];

/* ── Portfolio items ── */
const portfolioItems = [
  {
    title: "Bug Hunter",
    category: "VS Code Extension",
    img: "/images/projects/bug-hunter/screenshot-dashboard.png",
    github: "https://github.com/NarixenoAdaxius",
    link: "#",
  },
  {
    title: "Palette Mail",
    category: "Full-Stack SaaS",
    img: "/images/projects/palatte-mail/home.png",
    github: "https://github.com/NarixenoAdaxius",
    link: "#",
  },
  {
    title: "ALPHA Event Dashboard",
    category: "Event Management",
    img: "/images/projects/AlphaEventDashboard/Dashboard.png",
    github: "https://github.com/NarixenoAdaxius",
    link: "#",
  },
  {
    title: "ALPHA Landing Site",
    category: "Landing Page",
    img: "/images/projects/AlphaWebsite/Landing01.png",
    github: "https://github.com/NarixenoAdaxius",
    link: "#",
  },
  {
    title: "DPC Point of Sale",
    category: "IT Consulting",
    img: "/images/projects/DPCPOS/Dashboard.png",
    github: "https://github.com/NarixenoAdaxius",
    link: "#",
  },
  {
    title: "Palette Mail – Composer",
    category: "UI / UX",
    img: "/images/projects/palatte-mail/EmailComposer.png",
    github: "https://github.com/NarixenoAdaxius",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="layout-root">
      <Sidebar />

      <main className="main-content">

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section id="hero" className="section-hero">
          <div className="hero-inner">
            {/* Left – text */}
            <div className="hero-text">
              <p style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--brand)", fontWeight: 700, marginBottom: "0.75rem" }}>
                Full Stack Engineer · IT Consultant
              </p>
              <h1 className="hero-name">Arione Dauis</h1>
              <p className="hero-typed">
                I&apos;m a{" "}
                <span className="hero-typed-highlight">Full Stack Software Engineer</span>
              </p>
              <p style={{ color: "rgba(255,255,255,0.60)", marginTop: "1rem", maxWidth: "480px", fontSize: "1rem", lineHeight: 1.65 }}>
                Building scalable web apps, developer tooling, and AI-powered
                workflows. Based in the Philippines — available for remote roles worldwide.
              </p>
              <div className="hero-cta-row">
                <a href="#portfolio" className="btn btn-primary">View My Work</a>
                <a href="/Arione_Dauis_Resume.pdf" download="Arione_Dauis_Resume.pdf" className="btn btn-outline">
                  <Download size={15} /> Download CV
                </a>
              </div>
            </div>

            {/* Right – Lottie circle avatar */}
            <div className="hero-visual">
              <HeroAvatar size={300} />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ABOUT
        ════════════════════════════════════════ */}
        <section id="about" className="section">
          <div className="section-heading">
            <h2>About</h2>
            <div className="section-heading-bar" />
            <p>
              Versatile Full Stack Engineer &amp; IT Consultant with 3+ years of
              experience building production-grade web systems, developer tools, and
              AI-assisted workflows.
            </p>
          </div>

          <div className="about-grid">
            {/* Photo */}
            <div style={{ display: "flex", justifyContent: "center", padding: "1rem 0" }}>
              <HeroAvatar size={260} />
            </div>

            {/* Info */}
            <div>
              <p className="about-role">
                Full Stack Software Engineer &amp; IT Consultant
              </p>
              <p className="about-intro-italic">
                I build web platforms and developer tooling that save teams time,
                reduce errors, and ship faster.
              </p>

              <div className="about-info-grid">
                <div className="about-info-item">
                  <ChevronRight size={14} color="var(--brand)" style={{ flexShrink: 0 }} />
                  <span className="about-info-label">Degree:&nbsp;</span>
                  <span className="about-info-value">BS Computer Science</span>
                </div>
                <div className="about-info-item">
                  <ChevronRight size={14} color="var(--brand)" style={{ flexShrink: 0 }} />
                  <span className="about-info-label">Graduated:&nbsp;</span>
                  <span className="about-info-value">July 2025 · Cum Laude</span>
                </div>
                <div className="about-info-item">
                  <ChevronRight size={14} color="var(--brand)" style={{ flexShrink: 0 }} />
                  <span className="about-info-label">City:&nbsp;</span>
                  <span className="about-info-value">Cainta, Rizal · PH</span>
                </div>
                <div className="about-info-item">
                  <ChevronRight size={14} color="var(--brand)" style={{ flexShrink: 0 }} />
                  <span className="about-info-label">Phone:&nbsp;</span>
                  <span className="about-info-value">+63 905 844 3808</span>
                </div>
                <div className="about-info-item">
                  <ChevronRight size={14} color="var(--brand)" style={{ flexShrink: 0 }} />
                  <span className="about-info-label">Email:&nbsp;</span>
                  <span className="about-info-value">dauis.arionejohn@gmail.com</span>
                </div>
                <div className="about-info-item">
                  <ChevronRight size={14} color="var(--brand)" style={{ flexShrink: 0 }} />
                  <span className="about-info-label">Available:&nbsp;</span>
                  <span className="about-info-value" style={{ color: "#16a34a", fontWeight: 600 }}>
                    Open to Remote Roles
                  </span>
                </div>
              </div>

              <p className="about-bio">
                I hold a <strong>BS in Computer Science (Cum Laude)</strong> from STI
                Colleges Ortigas-Cainta (July 2025), grounding my engineering in strong
                CS fundamentals. I have led 10-person engineering squads, built
                AI-integrated developer tooling that improved team productivity by
                ~30%, and automated staging pipelines that cut delivery time by 35%.
                I am passionate about clean architecture, AI-assisted development, and
                building systems that solve real operational problems.
              </p>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a
                  href="/Arione_Dauis_Resume.pdf"
                  download="Arione_Dauis_Resume.pdf"
                  className="about-download-btn"
                >
                  <Download size={14} /> Download CV
                </a>
                <a
                  href="https://github.com/NarixenoAdaxius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-download-btn"
                  style={{ background: "#1e2532" }}
                >
                  <GithubIcon size={14} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/arione-dauis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-download-btn"
                  style={{ background: "#0077b5" }}
                >
                  <LinkedinIcon size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-icon"><Smile size={28} /></div>
              <div className="stat-number">3+</div>
              <div className="stat-label"><strong>Years Experience</strong> in professional dev</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Layers size={28} /></div>
              <div className="stat-number">10+</div>
              <div className="stat-label"><strong>Projects Shipped</strong> end-to-end</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Users size={28} /></div>
              <div className="stat-number">10</div>
              <div className="stat-label"><strong>Developers Led</strong> at peak team size</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Headphones size={28} /></div>
              <div className="stat-number">35%</div>
              <div className="stat-label"><strong>Delivery Speedup</strong> via automation</div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SKILLS
        ════════════════════════════════════════ */}
        <section id="skills" className="section section-alt">
          <div className="section-heading">
            <h2>Skills</h2>
            <div className="section-heading-bar" />
            <p>
              My technical expertise spans frontend, backend, databases,
              infrastructure, and modern AI developer tooling.
            </p>
          </div>

          <div className="skills-columns">
            {skills.map((s) => (
              <div key={s.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.pct}%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            RESUME
        ════════════════════════════════════════ */}
        <section id="resume" className="section">
          <div className="section-heading">
            <h2>Resume</h2>
            <div className="section-heading-bar" />
            <p>
              My education, professional experience, and freelance work across
              full-stack development and IT consulting.
            </p>
          </div>

          <div className="resume-columns">
            {/* Left: Education & Summary */}
            <div>
              <h3 className="resume-col-title">
                <GraduationCap size={20} />
                Education &amp; Summary
              </h3>
              <div className="resume-timeline">
                <div className="resume-item">
                  <div className="resume-node" />
                  <span className="resume-date">2021 – 2025</span>
                  <div className="resume-title">BS in Computer Science</div>
                  <div className="resume-org">STI Colleges Ortigas-Cainta — Cum Laude</div>
                  <ul className="resume-points">
                    <li>Graduated with Latin Honors (Cum Laude) in July 2025</li>
                    <li>Specialization in software systems and data architecture</li>
                    <li>Led multiple capstone projects involving real deployments</li>
                  </ul>
                </div>


              </div>
            </div>

            {/* Right: Professional Experience */}
            <div>
              <h3 className="resume-col-title">
                <Briefcase size={20} />
                Professional Experience
              </h3>
              <div className="resume-timeline">
                <div className="resume-item">
                  <div className="resume-node" />
                  <span className="resume-date">Sept 2025 – Mar 2026</span>
                  <div className="resume-title">Software Engineer</div>
                  <div className="resume-org">American Sourcing Group (ASG Platform)</div>
                  <ul className="resume-points">
                    <li>Automated staging pipeline, improving delivery speed by <strong>35%</strong></li>
                    <li>Built AI-integrated VS Code extensions, boosting team productivity by <strong>~30%</strong></li>
                    <li>Translated PRDs into working POCs across tight sprint cycles</li>
                    <li>Built and evaluated AI-driven pipelines for rapid product iteration</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <div className="resume-node" />
                  <span className="resume-date">Jan 2024 – Dec 2024</span>
                  <div className="resume-title">Full Stack Head Web Developer</div>
                  <div className="resume-org">ALPHA — Alliance of Leading Programmers</div>
                  <ul className="resume-points">
                    <li>Led <strong>10-person engineering team</strong> end-to-end — architecture, sprints, release</li>
                    <li>Delivered event ticketing, automated email, and admin platform from scratch</li>
                    <li>MongoDB data model maintained accuracy under peak registration traffic</li>
                    <li>Eliminated all third-party event tools by building proprietary systems</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <div className="resume-node" />
                  <span className="resume-date">Mar 2025 – May 2025</span>
                  <div className="resume-title">IT Intern</div>
                  <div className="resume-org">Dream PC Builds &amp; IT Solutions Inc.</div>
                  <ul className="resume-points">
                    <li>Restructured and deployed a custom POS system for company operations</li>
                    <li>Planned and installed company server infrastructure on Ubuntu Server</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <div className="resume-node" />
                  <span className="resume-date">2021 – Present</span>
                  <div className="resume-title">Freelance IT Technician &amp; Web Consultant</div>
                  <div className="resume-org">Self-Employed</div>
                  <ul className="resume-points">
                    <li>Optimised software and network setups for small businesses</li>
                    <li>Built and deployed custom web projects from design to live</li>
                    <li>Delivered Ubuntu Server infrastructure for retail POS systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PORTFOLIO
        ════════════════════════════════════════ */}
        <section id="portfolio" className="section section-alt">
          <div className="section-heading">
            <h2>Portfolio</h2>
            <div className="section-heading-bar" />
            <p>
              A selection of platforms, tools, and systems I have designed,
              built, and shipped to production.
            </p>
          </div>

          <div className="portfolio-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Extensions</button>
            <button className="filter-btn">SaaS</button>
            <button className="filter-btn">Systems</button>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
              <div key={i} className="portfolio-card">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="portfolio-card-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="portfolio-card-overlay">
                  <p className="portfolio-card-cat">{item.category}</p>
                  <p className="portfolio-card-title">{item.title}</p>
                  <div className="portfolio-card-links">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-card-link"
                      aria-label="Source"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={item.link}
                      className="portfolio-card-link"
                      aria-label="Live link"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            CONTACT
        ════════════════════════════════════════ */}
        <section id="contact" className="section">
          <div className="section-heading">
            <h2>Contact</h2>
            <div className="section-heading-bar" />
            <p>
              Whether you&apos;re a recruiter or CEO — if you want to build something
              great or just have a technical conversation, reach out.
            </p>
          </div>

          <div className="contact-layout">
            {/* Info cards */}
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon"><MapPin size={20} /></div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">Cainta, Rizal, Philippines · Remote Friendly</div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon"><Mail size={20} /></div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">
                    <a href="mailto:dauis.arionejohn@gmail.com">dauis.arionejohn@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon"><Phone size={20} /></div>
                <div>
                  <div className="contact-info-label">Phone / WhatsApp</div>
                  <div className="contact-info-value">
                    <a href="https://wa.me/639619951286">+63 961 995 1286</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon"><LinkedinIcon size={20} /></div>
                <div>
                  <div className="contact-info-label">LinkedIn</div>
                  <div className="contact-info-value">
                    <a href="https://www.linkedin.com/in/arione-dauis/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/arione-dauis
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon"><GithubIcon size={20} /></div>
                <div>
                  <div className="contact-info-label">GitHub</div>
                  <div className="contact-info-value">
                    <a href="https://github.com/NarixenoAdaxius" target="_blank" rel="noopener noreferrer">
                      github.com/NarixenoAdaxius
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          &copy; {new Date().getFullYear()}{" "}
          <span>Arione John C. Dauis</span> · Built with Next.js
        </footer>

      </main>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import ContactForm from "@/components/ContactForm";
import HeroAvatar from "@/components/HeroAvatar";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import {
  Download, Mail, MapPin, Phone,
  Briefcase, GraduationCap, Smile, Layers, Headphones, Users,
  ChevronRight, ExternalLink, Quote, Cloud, ShieldCheck, Award, X,
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
    desc: "A custom VS Code extension designed to gamify static code analysis, using local parsing engines to track achievements and coding metrics directly inside the IDE.",
  },
  {
    title: "Palette Mail",
    category: "Full-Stack SaaS",
    img: "/images/projects/palatte-mail/home.png",
    github: "https://github.com/NarixenoAdaxius",
    desc: "A full-featured responsive email visual builder and automated distribution service integrated with secure multi-factor user authentication (2FA) and MongoDB persistence.",
  },
  {
    title: "ALPHA Event Dashboard",
    category: "Event Management",
    img: "/images/projects/AlphaEventDashboard/Dashboard.png",
    video: "/videos/Event Attendance QR Scanner Video.mp4",
    github: "https://github.com/NarixenoAdaxius",
    desc: "A unified administration dashboard and check-in system. Implements a responsive web-based camera QR code reader for real-time ticket scanner verification at registration.",
  },
  {
    title: "ALPHA Landing Site",
    category: "Landing Page",
    img: "/images/projects/AlphaWebsite/Landing01.png",
    github: "https://github.com/NarixenoAdaxius",
    desc: "A high-performance student organization landing site built with clean modern styling, mobile-responsive grid frameworks, and instant form submission handling.",
  },
  {
    title: "DPC Point of Sale",
    category: "IT Consulting",
    img: "/images/projects/DPCPOS/Dashboard.png",
    github: "https://github.com/NarixenoAdaxius",
    desc: "A local sales tracking and POS tool configured and deployed for Dream PC Builds. Built to run on secure intranet server setups with local backups.",
  },
  {
    title: "Palette Mail – Composer",
    category: "UI / UX",
    img: "/images/projects/palatte-mail/EmailComposer.png",
    github: "https://github.com/NarixenoAdaxius",
    desc: "An advanced drag-and-drop workspace layout built with Next.js and custom CSS grid layers, designed to let users compile custom email designs seamlessly.",
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Extensions") return item.category.toLowerCase().includes("extension");
    if (activeFilter === "SaaS") {
      return (
        item.category.toLowerCase().includes("saas") ||
        item.category.toLowerCase().includes("event") ||
        item.category.toLowerCase().includes("ui")
      );
    }
    if (activeFilter === "Systems") {
      return (
        item.category.toLowerCase().includes("system") ||
        item.category.toLowerCase().includes("consulting") ||
        item.category.toLowerCase().includes("landing")
      );
    }
    return true;
  });

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
                Software Engineer &amp; IT Consultant
              </p>
              <h1 className="hero-name">Arione Dauis</h1>
              <p className="hero-typed">
                I&apos;m a{" "}
                <span className="hero-typed-highlight">Software Engineer &amp; IT Consultant</span>
              </p>
              <p style={{ color: "rgba(255,255,255,0.60)", marginTop: "1rem", maxWidth: "480px", fontSize: "1rem", lineHeight: 1.65 }}>
                Building scalable web apps, developer tools, and automated AI
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
        <section id="about" className="section reveal">
          <div className="section-heading">
            <h2>About</h2>
            <div className="section-heading-bar" />
            <p>
              Versatile Software Engineer &amp; IT Consultant with 3+ years of
              experience building reliable web systems, developer tools, and
              automated workflows.
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
                Software Engineer &amp; IT Consultant
              </p>
              <p className="about-intro-italic">
                I build web platforms and developer tools that save teams time,
                reduce errors, and deploy faster.
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
                  <span className="about-info-value">+63 961 995 1286</span>
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
                Colleges Ortigas-Cainta (July 2025), grounding my work in strong
                CS fundamentals. I have led 10-person engineering teams, built
                AI-integrated developer tools that improved team productivity by
                ~30%, and automated staging pipelines that cut delivery time by 35%.
                I am passionate about clean code, AI-assisted development, and
                building systems that solve real business problems.
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

              {/* Philosophy Banner */}
              <div className="philosophy-banner">
                <Quote className="testimonial-quote-icon" size={24} style={{ color: "var(--brand)" }} />
                <p className="philosophy-quote">
                  &ldquo;Blending software engineering precision with responsive IT advisory to build scalable, secure, and production-grade client platforms.&rdquo;
                </p>
                <div className="philosophy-author">Arione Dauis — Software Engineer &amp; IT Consultant</div>
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
              <div className="stat-label"><strong>Projects Deployed</strong> end-to-end</div>
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
        <section id="skills" className="section section-alt reveal">
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

          {/* Certifications Showcase */}
          <div style={{ marginTop: "3.5rem", borderTop: "1px solid var(--border)", paddingTop: "2.5rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.5rem" }}>
              Core Technical Focus &amp; Certifications
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Key technologies and methods I use to build and optimize systems.
            </p>
            <div className="cert-grid">
              <div className="cert-card">
                <div style={{ position: "relative", width: "100%", height: "130px", marginBottom: "1rem", overflow: "hidden", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-alt)" }}>
                  <Image
                    src="/images/certifications/Backend Head Certification.png"
                    alt="Backend Head Certification"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h4 className="cert-title">Backend Head Certification</h4>
                <p className="cert-desc">
                  Leadership validation as Full Stack Head Web Developer for the ALPHA organization, managing database schemas and event architectures.
                </p>
              </div>

              <div className="cert-card">
                <div style={{ position: "relative", width: "100%", height: "130px", marginBottom: "1rem", overflow: "hidden", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-alt)" }}>
                  <Image
                    src="/images/certifications/Cybersecurity for Everyone DICT.png"
                    alt="Cybersecurity for Everyone"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h4 className="cert-title">Cybersecurity for Everyone</h4>
                <p className="cert-desc">
                  DICT certified credential validating foundational network defense, system configuration security, and endpoint protection.
                </p>
              </div>

              <div className="cert-card">
                <div style={{ position: "relative", width: "100%", height: "130px", marginBottom: "1rem", overflow: "hidden", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-alt)" }}>
                  <Image
                    src="/images/certifications/Cyber Awareness Challenge 2024.png"
                    alt="Cyber Awareness Challenge"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h4 className="cert-title">Cyber Awareness Challenge</h4>
                <p className="cert-desc">
                  Validation covering system access management, operational security protocols, and secure administrative controls.
                </p>
              </div>

              <div className="cert-card">
                <div style={{ position: "relative", width: "100%", height: "130px", marginBottom: "1rem", overflow: "hidden", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-alt)" }}>
                  <Image
                    src="/images/certifications/Packet hacks Finalist Certificate of Participation.png"
                    alt="Packet Hacks Finalist"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h4 className="cert-title">Packet Hacks Finalist</h4>
                <p className="cert-desc">
                  Finalist certificate in competitive networking and systems optimization, focusing on system administration under tight timeframes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            RESUME
        ════════════════════════════════════════ */}
        <section id="resume" className="section reveal">
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
                  <div className="resume-org">American Sourcing Group (ASG Platform) — Remote</div>
                  <ul className="resume-points">
                    <li>Expanded automated test coverage for a live US SaaS system, reducing bug risk in production and tightening the feedback loop before each release.</li>
                    <li>Built a staging pipeline automation system that eliminated repetitive manual steps and improved team delivery speed by <strong>35%</strong>.</li>
                    <li>Operated consistently within a professional engineering workflow covering branching, versioning, and sprint commitments, helping the team deploy on schedule every cycle.</li>
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
                  <span className="resume-date">Jan 2024 – Dec 2024</span>
                  <div className="resume-title">Full Stack Head Web Developer</div>
                  <div className="resume-org">ALPHA — Alliance of Leading Programmers</div>
                  <ul className="resume-points">
                    <li>Led a <strong>10-person engineering team</strong> in delivering a full event ticketing platform, owning both technical direction and team execution end-to-end.</li>
                    <li>Architected a scalable data layer that maintained accuracy and reliability under production load as the platform grew.</li>
                    <li>Built onboarding documentation and mentored developers within sprint cycles, reducing knowledge silos and enabling the team to deploy consistently without bottlenecks.</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <div className="resume-node" />
                  <span className="resume-date">2021 – Present</span>
                  <div className="resume-title">Freelance IT Technician &amp; Web Consultant</div>
                  <div className="resume-org">Self-Employed</div>
                  <ul className="resume-points">
                    <li>Served as a trusted, repeat-hire technician for local and international clients, resolving hardware, software, and performance issues remotely and on-site with minimal client downtime.</li>
                    <li>Extended device lifespans through targeted OS and performance optimization, saving clients the cost of premature hardware replacement.</li>
                    <li>Delivered web projects independently from brief to launch, serving as a single point of accountability across design, development, QA, and cross-browser testing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PORTFOLIO
        ════════════════════════════════════════ */}
        <section id="portfolio" className="section section-alt reveal">
          <div className="section-heading">
            <h2>Portfolio</h2>
            <div className="section-heading-bar" />
            <p>
              A selection of platforms, tools, and systems I have designed,
              built, and deployed to production.
            </p>
          </div>

          <div className="portfolio-filters">
            {["All", "Extensions", "SaaS", "Systems"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn${activeFilter === cat ? " active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredItems.map((item, i) => (
              <div
                key={i}
                className="portfolio-card"
                onClick={() => setSelectedProject(item)}
                style={{ cursor: "pointer" }}
              >
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
                  <span style={{ fontSize: "0.72rem", color: "var(--brand)", marginTop: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Click to view details
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            TESTIMONIALS
        ════════════════════════════════════════ */}
        <section id="testimonials" className="section section-alt reveal">
          <div className="section-heading">
            <h2>Testimonials</h2>
            <div className="section-heading-bar" />
            <p>
              Feedback from partners and client networks I have worked with on technical support, system configurations, and hardware maintenance.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-item">
              <div className="testimonial-content">
                <Quote className="testimonial-quote-icon" size={24} />
                <p>
                  Following a security breach, Arione stepped in and gave me a clear, step-by-step recovery roadmap that immediately secured my system. His ongoing optimization work keeps my computer running faster than ever. Whenever I need advice on gadget security or troubleshooting, he is the first person I ask. He is approachable, clear, and extremely reliable.
                </p>
              </div>
              <div className="testimonial-info">
                <h4>sauceages</h4>
                <span>Security &amp; Tech Advisory Client</span>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-content">
                <Quote className="testimonial-quote-icon" size={24} />
                <p>
                  I had a critical OS transition and some compatibility conflicts. Mr. Dauis set up a clean install of Windows 10, configured all drivers, and restored every single bit of my data without a hitch. The execution met all my expectations. I will definitely look to him again for any system deployment or configuration work.
                </p>
              </div>
              <div className="testimonial-info">
                <h4>irey.v</h4>
                <span>System Configuration &amp; Deployment Client</span>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-content">
                <Quote className="testimonial-quote-icon" size={24} />
                <p>
                  My system was crashing constantly when running heavy apps. Arione connected remotely via AnyDesk, audited my privileges, and adjusted application modes to stabilize the setup. The desktop environment has been solid ever since. He works directly, stays calm, and resolves issues very smoothly. Highly recommended!
                </p>
              </div>
              <div className="testimonial-info">
                <h4>Scarlet Lucius</h4>
                <span>Remote Technical Support Client</span>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-content">
                <Quote className="testimonial-quote-icon" size={24} />
                <p>
                  My laptop&apos;s keyboard was completely unresponsive. Arione diagnosed and replaced it, and it has functioned flawlessly ever since. The repair was completed quickly and at a very reasonable cost. If you need efficient hardware support, he&apos;s the professional to call.
                </p>
              </div>
              <div className="testimonial-info">
                <h4>Denimon</h4>
                <span>Hardware Repair &amp; Diagnostics Client</span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CONTACT
        ════════════════════════════════════════ */}
        <section id="contact" className="section reveal">
          <div className="section-heading">
            <h2>Contact</h2>
            <div className="section-heading-bar" />
            <p>
              Whether you&apos;re a potential partner — if you want to build something
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

        {/* Project Modal Lightbox */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close details">
                <X size={18} />
              </button>
              <div className="project-modal-body">
                {/* Media Showcase */}
                <div className="project-modal-media">
                  {selectedProject.video ? (
                    <video
                      src={selectedProject.video}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="project-modal-video"
                    />
                  ) : (
                    <div className="project-modal-img-container">
                      <Image
                        src={selectedProject.img}
                        alt={selectedProject.title}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  )}
                </div>
                {/* Info details */}
                <div className="project-modal-info">
                  <span className="project-modal-cat">{selectedProject.category}</span>
                  <h3 className="project-modal-title">{selectedProject.title}</h3>
                  <p className="project-modal-desc">{selectedProject.desc}</p>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <GithubIcon size={14} /> View Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

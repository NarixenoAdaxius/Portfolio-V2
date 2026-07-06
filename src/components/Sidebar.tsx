"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Home, User, FileText, Briefcase, Code, Mail, Menu, X, Download, MessageSquare, Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const navItems = [
  { href: "#hero",         label: "Home",         icon: <Home         size={16} /> },
  { href: "#about",        label: "About",        icon: <User         size={16} /> },
  { href: "#resume",       label: "Resume",       icon: <FileText     size={16} /> },
  { href: "#portfolio",    label: "Portfolio",    icon: <Briefcase    size={16} /> },
  { href: "#skills",       label: "Skills",       icon: <Code         size={16} /> },
  { href: "#testimonials", label: "Testimonials", icon: <MessageSquare size={16} /> },
  { href: "#contact",      label: "Contact",      icon: <Mail         size={16} /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="mobile-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar${open ? " open" : ""}`}>
        {/* Profile */}
        <div className="sidebar-profile">
          <div className="sidebar-avatar-wrapper">
            <div className="sidebar-avatar-ring" />
            <div className="sidebar-avatar">
              <Image
                src="/images/avatar.png"
                alt="Arione Dauis"
                fill
                sizes="100px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          <div className="sidebar-name">Arione Dauis</div>
          <div className="sidebar-title-line">Software Engineer &amp; IT Consultant</div>

          {/* Social icons */}
          <div className="sidebar-socials" style={{ marginBottom: "1rem" }}>
            <a
              href="https://github.com/NarixenoAdaxius"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-social-btn"
              aria-label="GitHub"
            >
              <GithubIcon size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/arione-dauis/"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-social-btn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={14} />
            </a>
            <a
              href="mailto:dauis.arionejohn@gmail.com"
              className="sidebar-social-btn"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
            <a
              href="https://wa.me/639619951286"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-social-btn"
              aria-label="WhatsApp"
            >
              <Phone size={14} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <ul className="sidebar-nav" role="navigation">
          {navItems.map((item) => (
            <li key={item.href} className="sidebar-nav-item">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}

          {/* Resume download */}
          <li className="sidebar-nav-item" style={{ marginTop: "1rem", padding: "0 1rem" }}>
            <a
              href="/Arione_Dauis_Resume.pdf"
              download="Arione_Dauis_Resume.pdf"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1rem",
                background: "var(--brand-dim)",
                border: "1px solid var(--brand)",
                borderRadius: "4px",
                color: "var(--brand)",
                fontSize: "0.85rem",
                fontWeight: 600,
                transition: "all 0.28s ease",
                justifyContent: "center",
              }}
            >
              <Download size={14} />
              Download CV
            </a>
          </li>
        </ul>

        <div className="sidebar-footer">
          &copy; {new Date().getFullYear()} Arione Dauis
        </div>
      </aside>
    </>
  );
}

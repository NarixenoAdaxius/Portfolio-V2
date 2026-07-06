"use client";

import { Download, Terminal } from "lucide-react";

export default function Header() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">
          <Terminal size={18} style={{ color: "var(--brand)" }} />
          <span>arione<span className="gradient-text">.dev</span></span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <ul className="nav-links">
            <li><a href="#about"      className="nav-link">About</a></li>
            <li><a href="#projects"   className="nav-link">Projects</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#contact"    className="nav-link">Contact</a></li>
          </ul>

          <a
            href="/Arione_Dauis_Resume.pdf"
            download="Arione_Dauis_Resume.pdf"
            className="btn btn-primary"
            style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem" }}
          >
            <Download size={13} />
            <span>Resume</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/resume";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  /* Border/blur once the page scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently in view */
  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-mark" aria-label="Back to top">
            <span className="nav-mark-glyph">AD</span>
            <span className="nav-mark-slash">/</span>
            <span className="nav-mark-name">Arione Dauis</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={active === item.href ? "is-active" : undefined}
              >
                <span className="nav-no">{item.no}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <span className="status-pill">
              <span className="status-dot" aria-hidden="true" />
              Open to remote
            </span>
            <a href={profile.resume} download="Arione_Dauis_Resume.pdf" className="nav-cv">
              CV <ArrowDownToLine size={14} />
            </a>
            <button
              className="nav-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-sheet${open ? " is-open" : ""}`} aria-hidden={!open}>
        <ul>
          {navItems.map((item, i) => (
            <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
              <a href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                <span className="nav-no">{item.no}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resume}
          download="Arione_Dauis_Resume.pdf"
          className="btn btn-signal"
          tabIndex={open ? 0 : -1}
        >
          Download CV <ArrowDownToLine size={16} />
        </a>
      </div>
    </>
  );
}


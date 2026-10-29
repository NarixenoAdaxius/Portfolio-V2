"use client";

import { useEffect, useState } from "react";

/**
 * Typographic boot screen. Shown once per session; when it finishes it sets
 * `data-loaded` on <html>, which releases the hero's staggered entrance.
 */
export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [statusText, setStatusText] = useState("Initializing");

  useEffect(() => {
    const root = document.documentElement;
    const markLoaded = () => root.setAttribute("data-loaded", "true");

    // Shown once per session. On repeat visits the inline script in layout.tsx
    // sets `data-skip-loader` before first paint, and CSS hides this overlay.
    if (root.hasAttribute("data-skip-loader")) {
      markLoaded();
      return;
    }

    // Status text cycle
    const messages = ["Compiling", "Linking assets", "Running tests", "Deploying", "Online"];

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < messages.length) {
        setStatusText(messages[currentIdx]);
        currentIdx++;
      }
    }, 240);

    // Fade out after ~1.4s
    let unmount: ReturnType<typeof setTimeout>;
    const timer = setTimeout(() => {
      setLoading(false);
      markLoaded();
      sessionStorage.setItem("portfolio-loader-shown", "true");
      // Unmount from DOM after fade-out transition finishes
      unmount = setTimeout(() => setVisible(false), 700);
    }, 1400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      clearTimeout(unmount);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader${!loading ? " is-done" : ""}`} aria-hidden="true">
      <div className="loader-inner">
        <div className="loader-mark">
          AD<span>/</span>
        </div>
        <div className="loader-track">
          <div className="loader-fill" />
        </div>
        <div className="loader-meta">
          <span>{statusText}</span>
          <span>arione.dev</span>
        </div>
      </div>
    </div>
  );
}

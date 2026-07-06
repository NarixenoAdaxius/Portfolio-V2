"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [statusText, setStatusText] = useState("Initializing portfolio...");

  useEffect(() => {
    // Session check to show only once per session
    const hasShown = sessionStorage.getItem("portfolio-loader-shown");
    if (hasShown) {
      setLoading(false);
      setVisible(false);
      return;
    }

    // Status text cycle
    const messages = [
      "Configuring environment...",
      "Resolving technical modules...",
      "Compiling skills matrix...",
      "Establishing connection...",
      "Online"
    ];

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < messages.length - 1) {
        setStatusText(messages[currentIdx]);
        currentIdx++;
      }
    }, 280);

    // Fade out after 1.6s
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("portfolio-loader-shown", "true");
      // Unmount from DOM after fade-out transition finishes
      setTimeout(() => {
        setVisible(false);
      }, 500);
    }, 1700);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader-wrapper${!loading ? " loaded" : ""}`}>
      <div className="loader-content">
        <div className="loader-spinner-container">
          <div className="loader-logo-ring" />
          <div className="loader-monogram">AD</div>
        </div>
        <div className="loader-bar-track">
          <div className="loader-bar-fill" />
        </div>
        <p className="loader-status">{statusText}</p>
      </div>
    </div>
  );
}

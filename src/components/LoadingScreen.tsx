"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
      "Setting up...",
      "Loading files...",
      "Loading skills...",
      "Connecting...",
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
          <div className="loader-monogram" style={{ position: "absolute", width: "52px", height: "52px", overflow: "hidden", borderRadius: "50%" }}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              sizes="52px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        <div className="loader-bar-track">
          <div className="loader-bar-fill" />
        </div>
        <p className="loader-status">{statusText}</p>
      </div>
    </div>
  );
}

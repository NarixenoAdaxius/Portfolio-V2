"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMsg(data.error || "An error occurred while sending the message.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Failed to connect to the server. Please check your network.");
      setStatus("error");
    }
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="contact-form-box">
      <h3>Send Me a Message</h3>

      {status === "success" && (
        <div className="form-success">
          <CheckCircle2 size={16} />
          Message sent successfully! I&apos;ll respond soon.
        </div>
      )}

      {status === "error" && (
        <div className="form-error" style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.75rem 1rem",
          background: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: "4px",
          color: "#dc2626",
          fontSize: "0.9rem",
          marginBottom: "1rem",
        }}>
          <AlertCircle size={16} />
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="cf-name">Your Name</label>
            <input className="form-input" id="cf-name" type="text"
              value={form.name} onChange={set("name")} required
              disabled={status === "sending"} placeholder="Jane Smith" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="cf-email">Email Address</label>
            <input className="form-input" id="cf-email" type="email"
              value={form.email} onChange={set("email")} required
              disabled={status === "sending"} placeholder="jane@company.com" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="cf-subject">Subject</label>
          <input className="form-input" id="cf-subject" type="text"
            value={form.subject} onChange={set("subject")} required
            disabled={status === "sending"} placeholder="Hiring enquiry / Project discussion" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="cf-message">Message</label>
          <textarea className="form-textarea" id="cf-message"
            value={form.message} onChange={set("message")} required
            disabled={status === "sending"}
            placeholder="Hi Arione, I came across your portfolio and would like to discuss..." />
        </div>

        <button type="submit" className="form-submit"
          disabled={status === "sending" || status === "success"}>
          <Send size={15} />
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

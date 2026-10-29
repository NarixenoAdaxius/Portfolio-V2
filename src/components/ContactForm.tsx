"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

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
    } catch {
      setErrorMsg("Failed to connect to the server. Please check your network.");
      setStatus("error");
    }
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const busy = status === "sending";

  return (
    <div className="form-box">
      <div className="form-head">
        <span className="mono-tag">Transmission</span>
        <span className="mono-note">Usually replies within 24h</span>
      </div>

      {status === "success" && (
        <div className="form-flash is-ok" role="status">
          <CheckCircle2 size={16} />
          Message sent successfully! I&apos;ll respond soon.
        </div>
      )}

      {status === "error" && (
        <div className="form-flash is-err" role="alert">
          <AlertCircle size={16} />
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field">
            <input className="field-input" id="cf-name" type="text" placeholder=" "
              value={form.name} onChange={set("name")} required disabled={busy} autoComplete="name" />
            <label className="field-label" htmlFor="cf-name">Your name</label>
          </div>
          <div className="field">
            <input className="field-input" id="cf-email" type="email" placeholder=" "
              value={form.email} onChange={set("email")} required disabled={busy} autoComplete="email" />
            <label className="field-label" htmlFor="cf-email">Email address</label>
          </div>
        </div>

        <div className="field">
          <input className="field-input" id="cf-subject" type="text" placeholder=" "
            value={form.subject} onChange={set("subject")} required disabled={busy} />
          <label className="field-label" htmlFor="cf-subject">Subject — hiring, project, collaboration</label>
        </div>

        <div className="field">
          <textarea className="field-input field-textarea" id="cf-message" placeholder=" "
            value={form.message} onChange={set("message")} required disabled={busy} />
          <label className="field-label" htmlFor="cf-message">Tell me about the idea…</label>
        </div>

        <button type="submit" className="btn btn-signal form-submit"
          disabled={busy || status === "success"}>
          {busy ? "Sending…" : status === "success" ? "Sent" : "Send message"}
          <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}

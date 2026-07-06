import { Mail, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <p style={{ fontSize: "0.88rem" }}>
            &copy; {year}{" "}
            <span style={{ color: "var(--brand)", fontWeight: 600 }}>Arione Dauis</span>.
            {" "}All rights reserved.
          </p>
          <p style={{ fontSize: "0.78rem", marginTop: "0.2rem" }}>
            Built with Next.js · Vanilla CSS · Deployed on Vercel
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/NarixenoAdaxius"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/arione-dauis/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={19} />
          </a>
          <a
            href="mailto:dauis.arionejohn@gmail.com"
            className="footer-social-link"
            aria-label="Email"
          >
            <Mail size={19} />
          </a>
          <a
            href="https://wa.me/639619951286"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="WhatsApp"
          >
            <MessageSquare size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}

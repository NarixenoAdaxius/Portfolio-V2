import Image from "next/image";
import { ArrowDownToLine, ArrowUpRight, ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import RevealObserver from "@/components/RevealObserver";
import WorkGallery from "@/components/WorkGallery";
import ContactForm from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import {
  profile,
  heroStats,
  experience,
  education,
  skillGroups,
  certifications,
  testimonials,
} from "@/data/resume";

/* Stagger helpers for CSS custom properties */
const d = (n: number) => ({ "--d": n }) as React.CSSProperties;
const idx = (n: number) => ({ "--i": n }) as React.CSSProperties;

/* Highlighted "core" technologies from the resume summary */
const core = new Set(["Next.js", "React", "Node.js", "TypeScript", "Docker", "Playwright"]);

const marquee = [
  "Next.js", "React", "Node.js", "TypeScript", "MongoDB", "Redis", "Docker",
  "Playwright", "Jest", "GitHub Actions", "Nginx", "WebSockets", "Stripe", "OpenAI API",
];

function SectionHead({ no, label, title, note }: {
  no: string; label: string; title: React.ReactNode; note?: string;
}) {
  return (
    <header className="section-head reveal">
      <div className="section-index">
        <span className="section-no">{no}</span>
        <span className="section-rule" />
        <span className="section-label">{label}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </header>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <SiteNav />
      <RevealObserver />

      <main id="top">
        {/* ════════════════ HERO ════════════════ */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="kicker load" style={d(0)}>
                <span className="kicker-dot" aria-hidden="true" />
                Field manual · Vol. {year} · Cainta, PH
              </p>

              <h1 id="hero-title" className="hero-title">
                <span className="hero-line"><span className="load" style={d(1)}>Arione</span></span>
                <span className="hero-line">
                  <em className="load" style={d(2)}>Dauis</em>
                  <span className="hero-slash load" style={d(3)} aria-hidden="true">/</span>
                </span>
              </h1>

              <p className="hero-role load" style={d(4)}>
                <span className="mono-tag is-signal">Role</span>
                Full Stack Web Developer
              </p>

              <p className="hero-lede load" style={d(5)}>
                I ship production web apps with <strong>Next.js, React, Node.js</strong> and{" "}
                <strong>TypeScript</strong> — from the data layer and REST APIs to the tests,
                containers and pipelines that get them live.
              </p>

              <div className="hero-cta load" style={d(6)}>
                <a href="#work" className="btn btn-signal">
                  See the work <ArrowDown size={16} />
                </a>
                <a href={profile.resume} download="Arione_Dauis_Resume.pdf" className="btn btn-ghost">
                  Download CV <ArrowDownToLine size={16} />
                </a>
              </div>
            </div>

            <figure className="plate hero-plate load" style={d(3)}>
              <div className="plate-img">
                <Image
                  src="/images/generated/hero-system.jpg"
                  alt="Risograph illustration of a full-stack system: browser windows piped into servers, a database and containers"
                  fill
                  preload
                  sizes="(max-width: 900px) 90vw, 40vw"
                  className="img-art"
                />
              </div>
              <span className="reg reg-tl" aria-hidden="true" />
              <span className="reg reg-br" aria-hidden="true" />
              <figcaption>
                <span>Fig. 01</span> A system, end to end.
              </figcaption>
            </figure>
          </div>

          <dl className="wrap spec-strip">
            {heroStats.map((s, i) => (
              <div key={s.label} className="spec load" style={d(7 + i)}>
                <dt className="spec-value">
                  {s.value}
                  <span>{s.unit}</span>
                </dt>
                <dd className="spec-label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Marquee band */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i}>
                {m}
                <i>✳</i>
              </span>
            ))}
          </div>
        </div>

        {/* ════════════════ 01 ABOUT ════════════════ */}
        <section id="about" className="section">
          <div className="wrap">
            <SectionHead
              no="01"
              label="About"
              title={<>Frontend to <em>failover</em> — I own the whole stack.</>}
            />

            <div className="about-grid">
              <div className="about-portrait reveal">
                <div className="stamp">
                  <svg className="stamp-ring" viewBox="0 0 200 200" aria-hidden="true">
                    <defs>
                      <path id="ring" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
                    </defs>
                    <text>
                      <textPath href="#ring">
                        FULL STACK WEB DEVELOPER ✳ CAINTA · RIZAL · PH ✳ CUM LAUDE ✳
                      </textPath>
                    </text>
                  </svg>
                  <div className="stamp-photo">
                    <Image src="/images/avatar.png" alt="Portrait of Arione Dauis" fill sizes="240px" />
                  </div>
                </div>
                <p className="mono-note about-caption">Plate II — Arione Dauis, Cainta, Rizal.</p>
              </div>

              <div className="about-body reveal">
                <p className="about-lead">
                  Full stack web developer shipping production applications. I&apos;ve{" "}
                  <mark>led a 10-person team</mark> to deliver an event ticketing platform and
                  contributed to <mark>testing &amp; release automation</mark> on a live US SaaS
                  product.
                </p>
                <p className="about-text">
                  A Computer Science graduate (Cum Laude) from STI Colleges Ortigas-Cainta, I&apos;m
                  comfortable across frontend, REST APIs, databases, automated testing, and
                  Linux/Docker deployments — and since 2021 I&apos;ve been the single point of
                  accountability for freelance clients from brief to launch.
                </p>

                <dl className="facts">
                  <div><dt>Based</dt><dd>{profile.location}</dd></div>
                  <div><dt>Degree</dt><dd>BS Computer Science · Cum Laude</dd></div>
                  <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
                  <div><dt>Phone</dt><dd><a href={profile.phoneHref}>{profile.phone}</a></dd></div>
                  <div><dt>Status</dt><dd className="is-ok"><span className="status-dot" /> Open to remote roles</dd></div>
                </dl>

                <div className="about-links">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    <GithubIcon size={15} /> GitHub <ArrowUpRight size={14} />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    <LinkedinIcon size={15} /> LinkedIn <ArrowUpRight size={14} />
                  </a>
                  <a href={profile.resume} download="Arione_Dauis_Resume.pdf" className="link-arrow">
                    <ArrowDownToLine size={15} /> Résumé PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ 02 EXPERIENCE ════════════════ */}
        <section id="experience" className="section section-band">
          <div className="wrap">
            <SectionHead
              no="02"
              label="Experience"
              title={<>The <em>logbook.</em></>}
              note="Where I've shipped, led, and automated — most recent first."
            />

            <ol className="ledger">
              {experience.map((job, i) => (
                <li key={job.role + job.org} className="ledger-row reveal" style={idx(i)}>
                  <div className="ledger-when">
                    <span className="ledger-period">{job.period}</span>
                    <span className="ledger-place">{job.place}</span>
                  </div>
                  <div className="ledger-what">
                    <h3 className="ledger-role">{job.role}</h3>
                    <p className="ledger-org">{job.org}</p>
                    <ul className="tick-list">
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <ul className="chips">
                      {job.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  {job.figure && (
                    <figure className="plate ledger-plate">
                      <div className="plate-img">
                        <Image src={job.figure.src} alt={job.figure.caption} fill sizes="(max-width: 900px) 100vw, 30vw" className="img-art" />
                      </div>
                      <figcaption>
                        <span>Fig. 02</span> {job.figure.caption}
                      </figcaption>
                    </figure>
                  )}
                </li>
              ))}

              <li className="ledger-row is-edu reveal">
                <div className="ledger-when">
                  <span className="ledger-period">{education.period}</span>
                  <span className="ledger-place">Education</span>
                </div>
                <div className="ledger-what">
                  <h3 className="ledger-role">
                    {education.degree} <em className="honors">— {education.honors}</em>
                  </h3>
                  <p className="ledger-org">{education.school}</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* ════════════════ 03 WORK ════════════════ */}
        <section id="work" className="section">
          <div className="wrap">
            <SectionHead
              no="03"
              label="Selected work"
              title={<>Things I&apos;ve <em>built</em> &amp; kept running.</>}
              note="Products, platforms and infrastructure — from the résumé, with a few extras from the archive."
            />
            <WorkGallery />
          </div>
        </section>

        {/* ════════════════ 04 STACK ════════════════ */}
        <section id="stack" className="section section-band">
          <div className="wrap">
            <SectionHead
              no="04"
              label="Stack"
              title={<>Spec <em>sheet.</em></>}
              note="Tools I reach for daily are marked in signal orange."
            />
            <div className="spec-table">
              {skillGroups.map((g, i) => (
                <div key={g.label} className="spec-row reveal" style={idx(i)}>
                  <div className="spec-row-label">
                    <span className="mono-tag is-muted">{String(i + 1).padStart(2, "0")}</span>
                    {g.label}
                  </div>
                  <ul className="chips chips-lg">
                    {g.items.map((s) => (
                      <li key={s} className={core.has(s) ? "is-core" : undefined}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ 05 CREDENTIALS ════════════════ */}
        <section id="credentials" className="section">
          <div className="wrap">
            <SectionHead
              no="05"
              label="Credentials"
              title={<>On <em>paper,</em> too.</>}
            />
            <div className="cert-grid">
              {certifications.map((c, i) => (
                <figure key={c.title} className="cert reveal" style={idx(i)}>
                  <div className="cert-img">
                    <Image src={c.img} alt={c.title} fill sizes="(max-width: 700px) 100vw, 25vw" />
                  </div>
                  <figcaption>
                    <span className="mono-tag is-muted">{c.issuer}</span>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ 06 VOICES ════════════════ */}
        <section id="voices" className="section section-band">
          <div className="wrap">
            <SectionHead
              no="06"
              label="Voices"
              title={<>What clients <em>say.</em></>}
              note="From freelance IT advisory and support engagements."
            />
            <div className="voices">
              {testimonials.map((t, i) => (
                <blockquote key={t.name} className={`voice reveal${i === 0 ? " is-lead" : ""}`} style={idx(i)}>
                  <span className="voice-mark" aria-hidden="true">&ldquo;</span>
                  <p>{t.quote}</p>
                  <footer>
                    <cite>{t.name}</cite>
                    <span>{t.context}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ 07 CONTACT ════════════════ */}
        <section id="contact" className="section">
          <div className="wrap">
            <SectionHead
              no="07"
              label="Contact"
              title={<>Let&apos;s build <em>your idea.</em></>}
              note="Hiring for a remote role, scoping a project, or just want a technical conversation — send a signal."
            />

            <div className="contact-grid">
              <div className="contact-side reveal">
                <figure className="plate contact-plate">
                  <div className="plate-img">
                    <Image src="/images/generated/signal-contact.jpg" alt="Risograph illustration of a satellite dish sending signal waves to a paper airplane" fill sizes="(max-width: 900px) 100vw, 35vw" className="img-art" />
                  </div>
                  <figcaption>
                    <span>Fig. 06</span> Signal sent. Awaiting reply.
                  </figcaption>
                </figure>

                <ul className="contact-list">
                  <li>
                    <Mail size={16} />
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </li>
                  <li>
                    <Phone size={16} />
                    <a href={profile.phoneHref} target="_blank" rel="noopener noreferrer">{profile.phone} · WhatsApp</a>
                  </li>
                  <li>
                    <LinkedinIcon size={16} />
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedinLabel}</a>
                  </li>
                  <li>
                    <GithubIcon size={16} />
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.githubLabel}</a>
                  </li>
                  <li>
                    <MapPin size={16} />
                    <span>{profile.location} · Remote-friendly (GMT+8)</span>
                  </li>
                </ul>
              </div>

              <div className="reveal">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ FOOTER ════════════════ */}
        <footer className="footer">
          <div className="wrap">
            <p className="footer-word" aria-hidden="true">
              Arione <em>Dauis</em>
            </p>
            <div className="footer-meta">
              <span>&copy; {year} {profile.fullName}</span>
              <span>Set in Instrument Serif, Bricolage Grotesque &amp; JetBrains Mono</span>
              <span>Built with Next.js · Illustrations generated for this site</span>
              <a href="#top" className="link-arrow">Back to top ↑</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

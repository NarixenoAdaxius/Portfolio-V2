"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play, X, Images } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { featuredProjects, archiveProjects, type Project } from "@/data/resume";

export default function WorkGallery() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      {/* ── Featured spreads ── */}
      <div className="spreads">
        {featuredProjects.map((p, i) => (
          <article key={p.slug} className={`spread reveal${i % 2 ? " is-flipped" : ""}`}>
            <figure className="plate spread-plate">
              <button
                type="button"
                className="plate-hit"
                onClick={() => setSelected(p)}
                aria-label={`Open ${p.title} details`}
              >
                <Image
                  src={p.cover}
                  alt={`${p.title} — ${p.kind}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className={p.generated ? "img-art" : "img-shot"}
                />
              </button>
              <span className="reg reg-tl" aria-hidden="true" />
              <span className="reg reg-br" aria-hidden="true" />
              <figcaption>
                <span>Fig. 0{i + 3}</span>
                {p.generated ? "Illustrated schematic" : "Production screenshot"}
              </figcaption>
            </figure>

            <div className="spread-copy">
              <div className="spread-meta">
                <span className="mono-tag">P—0{i + 1}</span>
                <span className="mono-tag is-muted">{p.kind}</span>
                {p.role && <span className="mono-tag is-signal">{p.role}</span>}
              </div>
              <h3 className="spread-title">{p.title}</h3>
              <p className="spread-summary">{p.summary}</p>
              {p.points && (
                <ul className="tick-list">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
              <ul className="chips" aria-label="Stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="spread-actions">
                <button type="button" className="link-arrow" onClick={() => setSelected(p)}>
                  Case details <ArrowUpRight size={16} />
                </button>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="link-arrow is-quiet">
                    <GithubIcon size={15} /> Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── Archive ── */}
      <div className="archive reveal">
        <div className="archive-head">
          <h3>
            From the <em>archive</em>
          </h3>
          <p className="mono-note">{archiveProjects.length} more shipped builds — tap any to open</p>
        </div>
        <div className="archive-grid">
          {archiveProjects.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              className="archive-card"
              onClick={() => setSelected(p)}
              style={{ "--i": i } as React.CSSProperties}
            >
              <span className="archive-img">
                <Image src={p.cover} alt={p.title} fill sizes="(max-width: 700px) 100vw, 25vw" />
                {p.video && (
                  <span className="archive-badge">
                    <Play size={11} /> Video
                  </span>
                )}
              </span>
              <span className="archive-body">
                <span className="mono-tag is-muted">{p.kind}</span>
                <span className="archive-title">
                  {p.title}
                  <ArrowUpRight size={16} />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

/* ────────────────────────────────────────────────────────── */

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const media = [
    ...(project.video ? [{ type: "video" as const, src: project.video }] : []),
    ...(project.gallery ?? [project.cover]).map((src) => ({ type: "image" as const, src })),
  ];
  const [index, setIndex] = useState(0);
  const current = media[index];

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % media.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + media.length) % media.length);
    },
    [onClose, media.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onKey]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={project.title} onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close details" autoFocus>
          <X size={18} />
        </button>

        <div className="modal-media">
          <div className="modal-stage">
            {current.type === "video" ? (
              <video key={current.src} src={current.src} controls autoPlay loop muted playsInline />
            ) : (
              <Image
                key={current.src}
                src={current.src}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: project.generated ? "cover" : "contain" }}
              />
            )}
          </div>
          {media.length > 1 && (
            <div className="modal-thumbs" role="tablist" aria-label="Media">
              {media.map((m, i) => (
                <button
                  key={m.src}
                  role="tab"
                  aria-selected={i === index}
                  className={i === index ? "is-active" : undefined}
                  onClick={() => setIndex(i)}
                  aria-label={m.type === "video" ? "Play video" : `Screenshot ${i + 1}`}
                >
                  {m.type === "video" ? (
                    <span className="thumb-video">
                      <Play size={14} />
                    </span>
                  ) : (
                    <Image src={m.src} alt="" fill sizes="96px" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="modal-info">
          <span className="mono-tag is-muted">{project.kind}</span>
          <h3>{project.title}</h3>
          {project.role && <span className="mono-tag is-signal">{project.role}</span>}
          <p>{project.summary}</p>
          {project.points && (
            <ul className="tick-list">
              {project.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          )}
          <ul className="chips">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="modal-foot">
            <span className="mono-note">
              <Images size={13} /> {index + 1} / {media.length}
            </span>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-signal btn-sm">
                <GithubIcon size={14} /> View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


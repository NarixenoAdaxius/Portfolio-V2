import { ImageResponse } from "next/og";
import { brand, loadBrandFonts, publicImage } from "@/lib/brand";

export const alt =
  "Arione Dauis — Full Stack Web Developer. Next.js, React, Node.js & TypeScript. Let's connect and build your ideas.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const mono = {
  fontFamily: "JetBrains Mono",
  fontSize: 17,
  letterSpacing: 2.4,
  textTransform: "uppercase" as const,
};

/* A printer's registration mark (+). Only defined offsets are emitted —
   the image renderer errors on `undefined` style values. */
function Reg(pos: { top?: number; left?: number; right?: number; bottom?: number }) {
  const offsets = Object.fromEntries(Object.entries(pos).filter(([, v]) => v !== undefined));
  return (
    <div style={{ position: "absolute", ...offsets, width: 22, height: 22, display: "flex" }}>
      <div style={{ position: "absolute", left: 10, top: 0, width: 2, height: 22, background: brand.signal }} />
      <div style={{ position: "absolute", top: 10, left: 0, width: 22, height: 2, background: brand.signal }} />
    </div>
  );
}

export default async function OpengraphImage() {
  const [fonts, art] = await Promise.all([
    loadBrandFonts(),
    publicImage("images/generated/hero-system.jpg"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: brand.ink,
          color: brand.paper,
          overflow: "hidden",
        }}
      >
        {/* Atmosphere: warm signal glow + blueprint column rules */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            display: "flex",
            backgroundImage:
              "radial-gradient(ellipse at 95% 0%, rgba(255,91,41,0.22) 0%, rgba(255,91,41,0) 55%)",
          }}
        />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{ flex: 1, borderLeft: `1px solid rgba(239,232,218,${i ? 0.035 : 0})` }} />
          ))}
        </div>

        {/* ── Left column: typography ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: 720,
            padding: "60px 0 0 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, color: brand.paper2, ...mono }}>
            <div style={{ width: 13, height: 13, background: brand.signal }} />
            Field manual · arione.dev
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 34,
              fontFamily: "Instrument Serif",
              fontSize: 178,
              lineHeight: 0.84,
              letterSpacing: -6,
            }}
          >
            <span>Arione</span>
            <div style={{ display: "flex" }}>
              <span style={{ fontStyle: "italic" }}>Dauis</span>
              <span style={{ fontStyle: "italic", color: brand.signal, marginLeft: 8 }}>/</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 40 }}>
            <div
              style={{
                display: "flex",
                ...mono,
                fontSize: 15,
                color: brand.signal,
                border: "1.5px solid rgba(255,91,41,0.55)",
                background: "rgba(255,91,41,0.12)",
                padding: "7px 12px",
              }}
            >
              Role
            </div>
            <span style={{ fontFamily: "Instrument Serif", fontSize: 46, lineHeight: 1 }}>
              Full Stack Web Developer
            </span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontFamily: "Instrument Serif",
              fontStyle: "italic",
              fontSize: 34,
              color: brand.paper2,
            }}
          >
            Let&apos;s connect &amp; build your ideas.
          </div>
        </div>

        {/* ── Right column: illustration plate ── */}
        <div
          style={{
            position: "absolute",
            top: 52,
            right: 78,
            display: "flex",
            flexDirection: "column",
            padding: 10,
            background: brand.ink2,
            border: `1.5px solid ${brand.lineStrong}`,
            transform: "rotate(2deg)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={art} width={318} height={409} alt="" style={{ objectFit: "cover" }} />
          <div style={{ display: "flex", gap: 12, padding: "12px 4px 2px", ...mono, fontSize: 12, letterSpacing: 1.4 }}>
            <span style={{ color: brand.signal }}>Fig. 01</span>
            <span style={{ color: brand.muted, textTransform: "none", letterSpacing: 0.4 }}>A system, end to end.</span>
          </div>
          <Reg top={-12} left={-12} />
          <Reg bottom={-12} right={-12} />
        </div>

        {/* ── Signal band ── */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 72px",
            background: brand.signal,
            color: brand.ink,
            ...mono,
            fontSize: 18,
          }}
        >
          <span>Next.js + React + Node.js + TypeScript + Docker</span>
          <span>Open to remote →</span>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}

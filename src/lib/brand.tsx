/* ============================================================
   Shared brand assets for code-generated images
   (favicon / app icons / Open Graph + Twitter cards).
   Mirrors the "Field Manual" tokens in globals.css.
   ============================================================ */
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const brand = {
  ink: "#0d0c0a",
  ink2: "#13110e",
  paper: "#efe8da",
  paper2: "#cfc7b7",
  muted: "#8f8778",
  signal: "#ff5b29",
  line: "rgba(239,232,218,0.14)",
  lineStrong: "rgba(239,232,218,0.28)",
};

const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));

/** Fonts in the format ImageResponse expects (TTF; satori can't read woff2). */
export async function loadBrandFonts() {
  const [serif, serifItalic, mono] = await Promise.all([
    font("InstrumentSerif-Regular.ttf"),
    font("InstrumentSerif-Italic.ttf"),
    font("JetBrainsMono-Medium.ttf"),
  ]);
  return [
    { name: "Instrument Serif", data: serif, style: "normal" as const, weight: 400 as const },
    { name: "Instrument Serif", data: serifItalic, style: "italic" as const, weight: 400 as const },
    { name: "JetBrains Mono", data: mono, style: "normal" as const, weight: 500 as const },
  ];
}

/** Reads a file from /public and returns it as a data URI for <img src>. */
export async function publicImage(path: string, mime = "image/jpeg") {
  const data = await readFile(join(process.cwd(), "public", path), "base64");
  return `data:${mime};base64,${data}`;
}

/**
 * The "AD/" monogram used for favicons and app icons.
 * `size` is the square edge in px; everything scales from it.
 */
export function Monogram({ size, radius = 0 }: { size: number; radius?: number }) {
  const s = size / 512;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: brand.ink,
        borderRadius: radius,
        position: "relative",
      }}
    >
      {/* Letters */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          fontFamily: "Instrument Serif",
          fontSize: 280 * s,
          lineHeight: 1,
          letterSpacing: -10 * s,
          color: brand.paper,
          marginTop: -40 * s,
          marginLeft: -6 * s,
        }}
      >
        <span>AD</span>
        <span style={{ fontStyle: "italic", color: brand.signal, marginLeft: 4 * s }}>/</span>
      </div>
      {/* Signal rule */}
      <div
        style={{
          position: "absolute",
          left: 88 * s,
          right: 88 * s,
          bottom: 112 * s,
          height: Math.max(2, 16 * s),
          background: brand.signal,
        }}
      />
    </div>
  );
}


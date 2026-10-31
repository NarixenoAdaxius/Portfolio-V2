import { ImageResponse } from "next/og";
import { loadBrandFonts, Monogram } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/* iOS applies its own rounded mask, so the square is left un-rounded. */
export default async function AppleIcon() {
  return new ImageResponse(<Monogram size={size.width} />, {
    ...size,
    fonts: await loadBrandFonts(),
  });
}


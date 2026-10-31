import { ImageResponse } from "next/og";
import { loadBrandFonts, Monogram } from "@/lib/brand";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(<Monogram size={size.width} radius={96} />, {
    ...size,
    fonts: await loadBrandFonts(),
  });
}


import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arione Dauis — Full Stack Web Developer",
    short_name: "Arione Dauis",
    description: "Portfolio of Arione Dauis, Full Stack Web Developer. Let's connect and build your ideas.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0c0a",
    theme_color: "#0d0c0a",
    icons: [
      { src: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}


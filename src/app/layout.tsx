import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

/* Display — editorial serif with a beautiful italic */
const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

/* Body — characterful grotesk */
const sans = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

/* Annotations — engineering mono */
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Arione Dauis | Full Stack Web Developer";
const description =
  "Full stack web developer shipping production apps with Next.js, React, Node.js & TypeScript. Let's connect and build your ideas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://arione.dev"),
  title: {
    default: title,
    template: "%s | Arione Dauis",
  },
  description,
  keywords: [
    "Arione Dauis",
    "Arione John Dauis",
    "Full Stack Web Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Philippines Developer",
    "Remote Developer",
    "Docker",
    "Playwright",
  ],
  authors: [{ name: "Arione Dauis", url: "https://arione.dev" }],
  creator: "Arione Dauis",
  openGraph: {
    title,
    description,
    url: "https://arione.dev",
    siteName: "Arione Dauis Portfolio",
    images: [
      {
        url: "/images/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Arione Dauis - Let's Connect and Build your Ideas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://arione.dev",
  },
};

const skipLoaderScript = `try{if(sessionStorage.getItem("portfolio-loader-shown")||matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.setAttribute("data-skip-loader","")}}catch(e){}`;

export const viewport: Viewport = {
  themeColor: "#0d0c0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Runs before first paint: skip the boot screen on repeat visits / reduced motion */}
        <script dangerouslySetInnerHTML={{ __html: skipLoaderScript }} />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

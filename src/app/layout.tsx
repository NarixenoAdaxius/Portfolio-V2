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

const siteUrl = "https://arione.dev";
const title = "Arione Dauis — Full Stack Web Developer";
const description =
  "Full stack web developer shipping production apps with Next.js, React, Node.js & TypeScript — from data layer and REST APIs to tests, containers and CI/CD. Based in the Philippines, open to remote roles. Let's connect and build your ideas.";
const shortDescription =
  "Full stack web developer shipping production apps with Next.js, React, Node.js & TypeScript. Let's connect and build your ideas.";

/* Open Graph / Twitter images, favicon and app icons come from the file
   conventions in this folder: opengraph-image.tsx, twitter-image.tsx,
   icon.tsx, apple-icon.tsx and favicon.ico. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Arione Dauis",
  },
  description,
  applicationName: "Arione Dauis",
  keywords: [
    "Arione Dauis",
    "Arione John Dauis",
    "Full Stack Web Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "REST APIs",
    "MongoDB",
    "Docker",
    "Playwright",
    "CI/CD",
    "Remote Developer",
    "Philippines Developer",
    "Cainta Rizal",
  ],
  authors: [{ name: "Arione Dauis", url: siteUrl }],
  creator: "Arione Dauis",
  publisher: "Arione Dauis",
  category: "technology",
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "profile",
    firstName: "Arione",
    lastName: "Dauis",
    url: siteUrl,
    siteName: "Arione Dauis — Field Manual",
    title,
    description: shortDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shortDescription,
  },
  appleWebApp: {
    title: "Arione Dauis",
    statusBarStyle: "black-translucent",
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
    canonical: siteUrl,
  },
};

/* Structured data so search engines understand who the site is about */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arione Dauis",
  alternateName: "Arione John C. Dauis",
  jobTitle: "Full Stack Web Developer",
  url: siteUrl,
  image: `${siteUrl}/images/avatar.png`,
  email: "mailto:dauis.arionejohn@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cainta",
    addressRegion: "Rizal",
    addressCountry: "PH",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "STI Colleges Ortigas-Cainta" },
  knowsAbout: ["Next.js", "React", "Node.js", "TypeScript", "REST APIs", "MongoDB", "Docker", "Playwright", "CI/CD"],
  sameAs: ["https://github.com/NarixenoAdaxius", "https://www.linkedin.com/in/arione-dauis/"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

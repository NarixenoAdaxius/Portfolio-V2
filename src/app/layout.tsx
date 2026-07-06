import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arione.dev"),
  title: {
    default: "Arione Dauis | Software Engineer & IT Consultant",
    template: "%s | Arione Dauis",
  },
  description: "Portfolio of Arione Dauis, a versatile full-stack software engineer & IT consultant. Specializing in Next.js, Node.js, automated AI workflows, and cloud systems.",
  keywords: [
    "Arione Dauis",
    "Arione John Dauis",
    "Software Engineer",
    "IT Consultant",
    "Full Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Philippines Developer",
    "System Security",
    "Cloud Systems Engineering",
  ],
  authors: [{ name: "Arione Dauis", url: "https://arione.dev" }],
  creator: "Arione Dauis",
  openGraph: {
    title: "Arione Dauis | Software Engineer & IT Consultant",
    description: "Versatile software engineer and IT consultant with 3+ years of experience building reliable web systems, developer tools, and automated AI workflows. Cum Laude Computer Science Graduate.",
    url: "https://arione.dev",
    siteName: "Arione Dauis Portfolio",
    images: [
      {
        url: "/images/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Arione Dauis Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arione Dauis | Software Engineer & IT Consultant",
    description: "Versatile software engineer and IT consultant with 3+ years of experience building reliable web systems, developer tools, and automated AI workflows.",
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

import LoadingScreen from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

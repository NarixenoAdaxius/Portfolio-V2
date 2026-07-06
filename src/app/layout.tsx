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
  title: "Arione Dauis | Software Engineer & IT Consultant",
  description: "Portfolio of Arione Dauis, a versatile full-stack software engineer & IT consultant. Experienced in Next.js, Node.js, AI automation, and leading development teams.",
  keywords: [
    "Arione Dauis",
    "Arione John Dauis",
    "Software Engineer",
    "IT Consultant",
    "Full Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Philippines Developer",
  ],
  authors: [{ name: "Arione Dauis" }],
  creator: "Arione Dauis",
  openGraph: {
    title: "Arione Dauis | Software Engineer & IT Consultant",
    description: "Versatile full stack developer with 3+ years experience building scalable web apps, internal tools, and AI workflows. Cum Laude CS Graduate.",
    url: "https://arione.tech",
    siteName: "Arione Dauis Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arione Dauis | Software Engineer & IT Consultant",
    description: "Versatile full stack developer with 3+ years experience building scalable web apps, internal tools, and AI workflows.",
  },
  robots: {
    index: true,
    follow: true,
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

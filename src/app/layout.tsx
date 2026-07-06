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
  description: "Let's Connect and Build your Ideas",
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
    description: "Let's Connect and Build your Ideas",
    url: "https://arione.dev",
    siteName: "Arione Dauis Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Arione Dauis | Software Engineer & IT Consultant",
    description: "Let's Connect and Build your Ideas",
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

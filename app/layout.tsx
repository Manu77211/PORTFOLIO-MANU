import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devmanu.tech'),
  title: "Manu S - Full Stack Developer & AI/ML Engineer | Portfolio",
  description: "Full Stack Developer specializing in AI/ML integration, Web Development, and Cloud Solutions. Explore projects in React, Next.js, Python, and AI-powered applications. NPTEL & IBM certified.",
  keywords: ["Full Stack Developer", "AI/ML Engineer", "React Developer", "Next.js", "Python", "Web Development", "Manu S", "Portfolio", "Bangalore Developer"],
  authors: [{ name: "Manu S" }],
  creator: "Manu S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devmanu.tech",
    title: "Manu S - Full Stack Developer & AI/ML Engineer",
    description: "Full Stack Developer specializing in AI/ML integration, Web Development, and Cloud Solutions. Explore projects in React, Next.js, Python, and AI-powered applications.",
    siteName: "Manu S Portfolio",
    images: [
      {
        url: "/manu2.jpeg",
        width: 1200,
        height: 630,
        alt: "Manu S - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manu S - Full Stack Developer & AI/ML Engineer",
    description: "Full Stack Developer specializing in AI/ML integration, Web Development, and Cloud Solutions.",
    images: ["/manu2.jpeg"],
    creator: "@ManuS",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <head>
        <meta name="google-site-verification" content="eUE4KizYAEU7FOC-jUqg6IqB7gmZnK5vi0wPBvTtxAo" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-linear-to-br from-slate-900 via-cyan-950 to-blue-950 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}

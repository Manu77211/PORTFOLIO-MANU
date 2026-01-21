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
  title: "Manu - Full Stack Engineer & AI Integration Specialist",
  description: "Portfolio of Manu, a full stack engineer specializing in AI integration. Explore my projects, skills, and experience in creating innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-linear-to-br from-slate-900 via-cyan-950 to-blue-950 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}

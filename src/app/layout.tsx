import Navbar from "@/components/navbar/navbar";
import ShutdownCountdown from "@/components/ShutdownCountdown";
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
  title: "SchoolBridge - Connecting Students & Schools",
  description: "The ultimate platform connecting students, educators, and institutions. Share knowledge, collaborate on projects, and build your academic future together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ShutdownCountdown />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

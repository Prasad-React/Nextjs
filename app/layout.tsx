
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page"; 
import NavBar from "@/components/NavBar/page";
import Slide from "@/components/Slide"; 
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import { usePathname } from "next/navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Show Slide and Services ONLY on homepage (/)
  const showHomeExtras = pathname === "/";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="p-2" >
          <Header />
        </header>

        <NavBar />

        {/* Conditionally render Slide & Services only on home */}
      {showHomeExtras ? (
          <>
            <Slide />
            <Services />
            <Gallery />
          </>
        ) : (
          // For non-home pages: apply min-height to main
          <main className="flex-grow min-h-[76vh] max-h-[1000vh]  px-4 py-6 overflow-auto">
            {children}
          </main>
        )}

        <footer className="bg-gray-200 text-center p-4">
          Copyright GSMT © 2025. All Rights Reserved.| Designed by Prasad. 
        </footer>
      </body>
    </html>
  );
}

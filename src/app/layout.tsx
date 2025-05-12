import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ServiceWorkerProvider } from "./service_worker_provider";
import { ThemeProvider } from 'next-themes';
import Footer from "../components/footer";
import { ClerkProvider } from '@clerk/nextjs';
import { ReactNode } from 'react';

const geist_sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geist_mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moikas Blog",
  description: "A modern, SEO-friendly, PWA-enabled blog with flat material design.",
};

function check_clerk_env() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || !process.env.CLERK_SECRET_KEY) {
    return false;
  }
  return true;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  if (!check_clerk_env()) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body>
            <div className="bg-red-100 text-red-800 p-6 rounded-lg m-8 text-center font-bold">
              Clerk environment variables are missing. Please set <code>CLERK_PUBLISHABLE_KEY</code> and <code>CLERK_SECRET_KEY</code> in your <code>.env.local</code> file.<br />
              See the Clerk documentation for setup instructions.
            </div>
          </body>
        </html>
      </ClerkProvider>
    );
  }
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#1976d2" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={`${geist_sans.variable} ${geist_mono.variable} antialiased bg-black text-white`}>
          <ThemeProvider attribute="data-theme" enableSystem={true} defaultTheme="bloglight">
            <ServiceWorkerProvider />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ServiceWorkerProvider } from "./service_worker_provider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1976d2" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geist_sans.variable} ${geist_mono.variable} antialiased`}>
        <ServiceWorkerProvider />
        {children}
      </body>
    </html>
  );
}

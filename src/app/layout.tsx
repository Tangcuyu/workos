import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "WorkOS — Your app, Enterprise Ready.",
  description: "Developer APIs/SDKs for Enterprise Ready features like Single Sign-On, Directory Sync, Audit Logging, and more. Get started for free.",
  openGraph: {
    title: "WorkOS — Your app, Enterprise Ready.",
    description: "Developer APIs/SDKs for Enterprise Ready features like Single Sign-On, Directory Sync, Audit Logging, and more. Get started for free.",
    images: ["https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/627321b887917b110d342e2b_homepage.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

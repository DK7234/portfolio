import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "David Khoury | Systems & Networks Engineer",
  description:
    "Computer Engineering student specializing in Systems & Networks, Cybersecurity, Cloud Computing, and Full-Stack Development.",

  keywords: [
    "David Khoury",
    "Computer Engineering",
    "Systems and Networks",
    "Cybersecurity",
    "Cloud",
    "Azure",
    "Full Stack",
    "React",
    "Next.js",
    "Portfolio",
  ],

  authors: [{ name: "David Khoury" }],
  creator: "David Khoury",

  metadataBase: new URL("https://david-khoury.vercel.app"),

  openGraph: {
    title: "David Khoury | Portfolio",
    description:
      "Systems & Networks Engineering student passionate about cloud, cybersecurity, networking, and full-stack development.",
    url: "https://david-khoury.vercel.app",
    siteName: "David Khoury Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "David Khoury Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "David Khoury | Portfolio",
    description:
      "Systems & Networks Engineering student specializing in Cloud, Networking and Cybersecurity.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navbar />

        <main className="min-h-screen overflow-x-clip">
          {children}
        </main>

        <Footer />

        {process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
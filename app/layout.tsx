import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";
import JsonLd from "@/components/seo/JsonLd";
export const metadata: Metadata = {
  metadataBase: new URL("https://david-khoury.vercel.app"),

  title: {
    default: "David Khoury | Computer Engineering Portfolio",
    template: "%s | David Khoury",
  },

  description:
    "Portfolio of David Khoury, a Computer Engineering student specializing in Systems and Network Engineering, software development, cloud computing, networking, and cybersecurity.",

  keywords: [
    "David Khoury",
    "Computer Engineering",
    "Systems Engineering",
    "Network Engineering",
    "Software Engineering",
    "Cybersecurity",
    "Cloud Computing",
    "Microsoft Azure",
    "Full-Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Portfolio",
  ],

  authors: [
    {
      name: "David Khoury",
      url: "https://david-khoury.vercel.app",
    },
  ],

  creator: "David Khoury",
  publisher: "David Khoury",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "David Khoury Portfolio",
    title: "David Khoury | Computer Engineering Portfolio",
    description:
      "Explore projects across software engineering, systems, networking, cloud computing, cybersecurity, IoT, and automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "David Khoury Computer Engineering Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "David Khoury | Computer Engineering Portfolio",
    description:
      "Projects across software engineering, systems, networking, cloud computing, cybersecurity, IoT, and automation.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  category: "technology",
};
const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Khoury",
  url: "https://david-khoury.vercel.app",
  image: "https://david-khoury.vercel.app/images/profile/profile.png",
  sameAs: [
    "https://github.com/DK7234",
    "https://linkedin.com/in/davidkhoury-engineer",
  ],
  jobTitle: "Computer Engineering Student and Full-Stack Developer Intern",
  description:
    "Computer Engineering student specializing in Systems and Network Engineering with experience in full-stack development, cloud computing, networking, and cybersecurity.",
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "Systems Engineering",
    "Computer Networks",
    "Cloud Computing",
    "Cybersecurity",
    "DevOps",
    "Microsoft Azure",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Antonine University",
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
         <JsonLd data={personStructuredData} />
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
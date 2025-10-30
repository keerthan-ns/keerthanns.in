import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Script from "next/script";
import { socials } from "@/data";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://keerthanns.in";
const SITE_NAME = "Keerthan NS - Portfolio";
const SITE_DESCRIPTION =
  "Personal portfolio website of Keerthan NS — showcasing projects, skills, and experience in full stack web development and UI design.";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

const metadata: Metadata = {
  metadataBase: new URL(
    SITE_URL
  ),
  title: {
    default: SITE_NAME,
    template: '%s | Keerthan NS',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Keerthan NS",
    "Full stack Developer",
    "Frontend Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Keerthan NS", url: SITE_URL }],
  creator: "Keerthan NS",
  publisher: "Keerthan NS",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/static/others/portfolio.png`,
        width: 1200,
        height: 630,
        alt: "Keerthan NS Portfolio Preview"
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/static/others/portfolio.png`],
    creator: "@keerthanns",
  },
  category: "Portfolio",
  robots: {
    index: true,
    follow: true,
  },
};

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Keerthan NS",
              url: SITE_URL,
              jobTitle: "Full Stack Developer",
              description:
                "Web developer specializing in Next.js, React, TypeScript, and UI design.",
              sameAs: [
                socials.github,
                socials.linkedin,
              ],
              image: `${SITE_URL}/static/others/portfolio.png`,
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}

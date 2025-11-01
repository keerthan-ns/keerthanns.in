import PageLayout from "../layout/PageLayout";
import CommandPalette from "@/components/common/CommandPalette";
import { Footer } from "@/components/common/Footer";
import Tabs from "@/components/ui/tabs";
import WorkSection from "@/components/work";
import { Suspense } from "react";
import { LoaderOne } from "@/components/ui/loader";
import BreadNavigation from "@/components/common/BreadNavigation";
import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://keerthanns.in";

export const metadata: Metadata = {
  title: "My Work",
  description:
    "Explore the projects and work of Keerthan NS — a Full Stack Developer skilled in Next.js, React, TypeScript, Java, Spring Boot, and modern DevOps tools.",
  alternates: {
    canonical: `${SITE_URL}/work`,
  },
  openGraph: {
    title: "Keerthan NS - My Work (Full Stack Developer)",
    description:
      "Showcase of projects and work by Keerthan NS, demonstrating expertise in full stack development with Next.js, React, TypeScript, and Spring Boot.",
    url: `${SITE_URL}/work`,
    siteName: "Keerthan NS - Portfolio",
    images: [
      {
        url: `${SITE_URL}/static/others/portfolio.png`,
        width: 1200,
        height: 630,
        alt: "Keerthan NS Portfolio - Work Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Work - Keerthan NS (Full Stack Developer)",
    description:
      "Discover the projects and work of Keerthan NS, showcasing full stack expertise and creative solutions.",
    images: [`${SITE_URL}/static/others/portfolio.png`],
  },
}

export default function WorkPage() {
  return (
    <PageLayout>
      <div className="mx-auto container max-w-[1100px] lg:px-6 lg:py-16">
        <BreadNavigation />
        <div className="bg-linear-to-b from-black/60 to-[#050505] border border-white/6 rounded-3xl p-3 md:p-8 shadow-2xl">
          <h1 className="text-xl lg:text-3xl font-semibold text-primary mb-4">My Work</h1>
          <div className="flex gap-3 items-center w-full justify-between">
            <Suspense fallback={null}>
              <Tabs />
            </Suspense>
          </div>
          <Suspense fallback={<div className="w-full h-screen inline-flex items-center justify-center"><LoaderOne /></div>}>
            <WorkSection />
          </Suspense>
        </div>
      </div>
      <Footer />
      <CommandPalette />
    </PageLayout>
  );
}
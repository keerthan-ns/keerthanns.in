import PageLayout from "../layout/PageLayout";
import CommandPalette from "@/components/common/CommandPalette";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/common/Footer";
import AboutInfo from "@/components/about";
import { Education } from "@/components/education";
import { TechStack } from "@/components/tech-stack";
import BreadNavigation from "@/components/common/BreadNavigation";
import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://keerthanns.in";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Keerthan NS — a Full Stack Developer skilled in Next.js, React, TypeScript, Java, Spring Boot, and modern DevOps tools. Discover his experience, education, and tech stack.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Keerthan NS - Full Stack Developer",
    description:
      "Explore the background, education, and work experience of Keerthan NS — a Full Stack Developer crafting modern digital experiences with Next.js, React, TypeScript, and Spring Boot.",
    url: `${SITE_URL}/about`,
    siteName: "Keerthan NS - Portfolio",
    images: [
      {
        url: `${SITE_URL}/static/others/portfolio.png`,
        width: 1200,
        height: 630,
        alt: "Keerthan NS - About Page",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Keerthan NS - Full Stack Developer",
    description:
      "Get to know Keerthan NS — a Full Stack Developer with expertise in Next.js, React, TypeScript, Java, and Spring Boot.",
    images: [`${SITE_URL}/static/others/portfolio.png`],
  },
};

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="mx-auto container max-w-[1100px] lg:px-6 lg:py-16">
        <BreadNavigation />
        <div className="bg-linear-to-b from-black/60 to-[#050505] border border-white/6 rounded-3xl p-3 md:p-8 shadow-2xl">
          <h1 className="text-xl lg:text-3xl font-semibold text-primary mb-4">About Me</h1>
          <AboutInfo />
          <hr className="border-t-4 border-primary mt-8 mx-auto w-54" />
          <section id="experience" className="mt-8 mb-12">
            <h2 className="text-xl lg:text-3xl font-semibold text-primary mb-4">Work Experience</h2>
            <Experience />
          </section>
          <section id="tech-stack" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg lg:text-2xl font-semibold text-primary">Education</h3>
              <Education />
            </div>
            <div className="md:border-l border-primary md:pl-6">
              <h3 className="text-lg lg:text-2xl font-semibold text-primary">Tech Stack</h3>
              <TechStack />
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <CommandPalette />
    </PageLayout>
  );
}

import BreadNavigation from "@/components/common/BreadNavigation";
import PageLayout from "../layout/PageLayout";
import BlogList from "@/components/common/BlogList";
import { getAllBlogs } from "@/lib/blog";
import redis from "@/lib/redis";
import { Footer } from "@/components/common/Footer";
import CommandPalette from "@/components/common/CommandPalette";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://keerthanns.in";

export const metadata: Metadata = {
  title: "Tech Blogs",
  description:
    "Explore in-depth technical articles by Keerthan NS on Next.js, React, Java, full-stack engineering, system design, and real-world software development.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Keerthan NS - Tech Blogs",
    description:
      "Read high-quality blog posts covering modern web development, full-stack engineering, system design, interview preparation, and scalable architecture.",
    url: `${SITE_URL}/blog`,
    siteName: "Keerthan NS - Portfolio",
    images: [
      {
        url: `${SITE_URL}/static/others/portfolio.png`,
        width: 1200,
        height: 630,
        alt: "Keerthan NS - Tech blogs page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blogs - Keerthan NS",
    description:
      "Technical articles covering Next.js, React, full-stack development, Java, system design, and engineering best practices.",
    images: [`${SITE_URL}/static/others/portfolio.png`],
  },
};

export default async function BlogPage() {
  const blogs = getAllBlogs();

  // Fetch all view counts in ONE round-trip
  const viewKeys = blogs.map((b) => `blog:views:${b.slug}`);
  const views = await redis.mget<number[]>(viewKeys);

  const blogsWithViews = blogs.map((blog, index) => ({
    ...blog,
    views: views[index] ?? 0,
  }));

  return (
    <PageLayout>
      <div className="mx-auto container max-w-[1100px] lg:px-6 lg:py-16">
        <BreadNavigation />

        <div className="bg-linear-to-b from-black/60 to-[#050505] border border-white/6 rounded-3xl p-3 md:p-8 shadow-2xl">
          <h1 className="text-xl lg:text-3xl font-semibold text-primary mb-4">
            Tech Blogs
          </h1>
          <BlogList blogs={blogsWithViews} />
        </div>
      </div>
      <Footer />
      <CommandPalette />
    </PageLayout>
  );
}

import BreadNavigation from "@/components/common/BreadNavigation";
import PageLayout from "../layout/PageLayout";
import BlogList from "@/components/common/BlogList";
import { getAllBlogs } from "@/lib/blog";
import redis from "@/lib/redis";
import { Footer } from "@/components/common/Footer";
import CommandPalette from "@/components/common/CommandPalette";

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

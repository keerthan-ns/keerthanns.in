import { getBlogBySlug, getAllBlogs } from "@/lib/blog";
import { getBlogViews } from "@/lib/blog-stats";
import ViewCounter from "@/components/common/ViewCounter";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXContent } from "@/components/mdx";
import PageLayout from "@/app/layout/PageLayout";
import BreadNavigation from "@/components/common/BreadNavigation";
import { Footer } from "@/components/common/Footer";
import CommandPalette from "@/components/common/CommandPalette";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

/* ---------- SSG ---------- */
export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({
    slug: blog.slug,
  }));
}

/* ---------- Metadata ---------- */
export async function generateMetadata(
  { params }: BlogPageProps
): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { data } = getBlogBySlug(slug);
    return {
      title: data.title,
      description: data.summary,
      openGraph: { images: [data.coverImage] },
    };
  } catch {
    return {};
  }
}

/* ---------- Page ---------- */
export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params;

  let blog;
  try {
    blog = getBlogBySlug(slug);
  } catch {
    notFound();
  }

  const { content, data } = blog;
  const initialViews = await getBlogViews(slug);

  return (
    <PageLayout>
      <div className="mx-auto container max-w-[1100px] lg:px-6 lg:py-16">
        <BreadNavigation />
        <div className="bg-linear-to-b from-black/60 to-[#050505] border border-white/6 rounded-3xl p-3 md:p-8 shadow-2xl">
          <h1 className="text-3xl font-semibold text-primary">
            {data.title}
          </h1>

          <div className="mt-2 flex items-center gap-4 text-muted-foreground text-sm">
            <span>{data.publishedAt}</span>
            <ViewCounter slug={slug} initialViews={initialViews} />
          </div>

          <div className="mt-8">
            <MDXContent source={content} />
          </div>
        </div>
      </div>
      <Footer />
      <CommandPalette />
    </PageLayout>
  );
}

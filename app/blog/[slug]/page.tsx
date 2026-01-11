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
import Link from "next/link";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://keerthanns.in";

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

    const canonicalUrl = `${SITE_URL}/blog/${slug}`;
    const ogImage = data.coverImage.startsWith("http")
      ? data.coverImage
      : `${SITE_URL}${data.coverImage}`;

    return {
      title: `${data.title} — Keerthan NS Blog`,
      description: data.summary,

      alternates: {
        canonical: canonicalUrl,
      },

      openGraph: {
        title: data.title,
        description: data.summary,
        url: canonicalUrl,
        siteName: "Keerthan NS - Portfolio & Blog",
        type: "article",
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: data.title,
        description: data.summary,
        images: [ogImage],
      },
    };
  } catch (err) {
    console.error(err);
    return {
      title: "Blog Not Found — Keerthan NS",
      description: "This blog post could not be found.",
    };
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
            <span className="flex items-center gap-1">
              <GoClockFill className="h-3.5 w-3.5" />
              {data.readTime}
            </span>
          </div>

          <div className="mt-8">
            <MDXContent source={content} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 mt-5">
          <Link
            href="/blog"
            className={`w-fit flex items-center gap-2 bg-slate-400/20 font-medium text-xs text-white rounded-md p-2 px-3 shadow-lg transition-opacity duration-500 hover:bg-primary/90 group`}
          >
            <FaAnglesLeft className="transform transition-transform duration-300 group-hover:-translate-x-1" />
            Go to Blogs
          </Link>
          <Link
            href="/blog"
            className={`w-fit flex items-center gap-2 bg-slate-400/20 font-medium text-xs text-white rounded-md p-2 px-3 shadow-lg transition-opacity duration-500 hover:bg-primary/90 group`}
          >
            Read Next
            <FaAnglesRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <Footer />
      <CommandPalette />
    </PageLayout>
  );
}

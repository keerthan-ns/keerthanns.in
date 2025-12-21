import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {readingTime} from "reading-time-estimator";
import { notFound } from "next/navigation";

const BLOG_PATH = path.join(process.cwd(), "content/blog");

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function getAllBlogs() {
  return fs
    .readdirSync(BLOG_PATH)
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(
        path.join(BLOG_PATH, file),
        "utf8"
      );

      const { data, content } = matter(source);

      const publishedDate = new Date(data.publishedAt);

      return {
        slug,
        title: data.title,
        summary: data.summary,
        publishedAt: formatDate(publishedDate),
        publishedAtRaw: publishedDate.getTime(),
        coverImage: data.coverImage,
        tags: data.tags ?? [],
        readTime: readingTime(content).text,
      };
    })
    .sort(
      (a, b) => b.publishedAtRaw - a.publishedAtRaw
    );
}


export function getBlogBySlug(slug: string) {
  const fullPath = path.join(BLOG_PATH, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
      notFound();
  }

  const source = fs.readFileSync(fullPath, "utf8");
  return matter(source);
}

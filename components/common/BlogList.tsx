"use client";

import { useState } from "react";
import BlogSearch from "@/components/common/BlogSearch";
import BlogItemCard from "@/components/cards/BlogItemCard";

type Blog = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  coverImage: string;
  tags: string[];
  readTime: string;
  views: number;
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const [query, setQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const q = query.toLowerCase();
    return (
      blog.title.toLowerCase().includes(q) ||
      blog.summary.toLowerCase().includes(q) ||
      blog.tags.join(" ").toLowerCase().includes(q)
    );
  });

  return (
    <>
      <BlogSearch onSearch={setQuery} />

      <div className="mt-6 space-y-6">
        {filteredBlogs.map((blog) => (
          <BlogItemCard key={blog.slug} blog={blog} />
        ))}

        {filteredBlogs.length === 0 && (
          <p className="text-sm text-muted-foreground mt-6">
            No blogs found.
          </p>
        )}
      </div>
    </>
  );
}

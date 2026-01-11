import Image from "next/image";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";
import { GoClockFill } from "react-icons/go";
import { BlogMeta } from "@/types";

export default function BlogItem({ blog }: { blog: BlogMeta }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="block group">
      <div
        className="
          flex flex-col md:flex-row gap-5
          bg-card/60 border border-white/6
          rounded-2xl p-1
          transition-all duration-300
           hover:shadow-xl
        "
      >
        {/* Poster */}
        <div className="relative w-full md:w-[260px] h-40 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between m-2 md:m-3">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-secondary">
              {blog.title}
            </h2>

            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {blog.summary}
            </p>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-accent/40 text-accent-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span>{blog.publishedAt}</span>

            <span className="flex items-center gap-1">
              <IoMdEye className="h-3.5 w-3.5" />
              {blog.views} views
            </span>

            <span className="flex items-center gap-1">
              <GoClockFill className="h-3.5 w-3.5" />
              {blog.readTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

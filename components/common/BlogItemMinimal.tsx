"use client";

import { IoMdEye } from "react-icons/io";
import { GoClockFill } from "react-icons/go";
import { BlogMeta } from "@/types";
import Link from "next/link";

export default function BlogItemMinimal({ blog }: { blog: BlogMeta }) {
    return (
        <Link href={`/blog/${blog.slug}`} className="block group">
            <div
                className="cursor-pointer select-none rounded-2xl border-2 border-light-text/10 p-3 mx-4 mt-2 bg-[#14141462] hover:bg-icon-background/50 transition-all duration-300 group"
            >
                <div className="relative flex flex-col justify-between gap-1">
                    <div className="flex justify-between">
                        <h3 className="font-medium text-primary/90 text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                            {blog.title}
                        </h3>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                        <span>{blog.publishedAt}</span>

                        <span className="flex items-center gap-1">
                            <IoMdEye className="h-3 w-3" />
                            {blog.views} views
                        </span>

                        <span className="flex items-center gap-1">
                            <GoClockFill className="h-2.5 w-2.5" />
                            {blog.readTime}
                        </span>
                    </div>

                    <p className="text-left font-normal text-xs text-neutral-300 line-clamp-2">
                        {blog.summary}
                    </p>
                </div>
            </div>
        </Link>
    );
}

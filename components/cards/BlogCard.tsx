"use client";

import { IconBadge } from "../common/IconBadge";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { FaBlog } from "react-icons/fa";
import { BlogMeta } from "@/types";
import BlogItemMinimal from "../common/BlogItemMinimal";

export default function BlogCard({blogs}: {blogs: BlogMeta[]}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  // const [showArrow, setShowArrow] = useState(false);
  const [showCheckoutMore, setShowCheckoutMore] = useState(false);

  // Determine if device is touch capable
  const isTouchDevice = typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
    // setShowArrow(!atBottom);
    setShowCheckoutMore(atBottom);
  };

  // Track scroll changes
  useEffect(() => {
    // If mobile/touch, immediately check scroll
    if (isTouchDevice) handleScroll();
  }, [isTouchDevice]);

  return (
    <div className="xl:col-span-2 xl:row-span-3 xl:col-start-6 relative overflow-hidden rounded-2xl border-2 border-light-text/10"
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
      onFocus={() => !isTouchDevice && setIsHovered(true)}
      onBlur={() => !isTouchDevice && setIsHovered(false)}
      tabIndex={0}
    >
      <div className="pt-4 pb-2 relative">
        <div className="border-b-2 border-light-text/10 pb-2">
          <IconBadge
            icon={<FaBlog className="text-primary" />}
            text={"Tech Blogs"}
            className="font-medium"
            iconSize={18}
          />
          <p className="text-sm text-neutral-400">Modern dev, simplified</p>
        </div>

        <div
          ref={scrollRef}
          className="relative h-50 md:h-68 lg:h-42 xl:h-50 overflow-y-auto scrollbar-hide mt-2"
          onScroll={handleScroll}
        >
          {
            blogs.map((blog, idx) => (
              <BlogItemMinimal key={idx} blog={blog} />
            ))

          }
        </div>

        <div className="pointer-events-none absolute left-0 bottom-0 w-full h-12 bg-linear-to-t from-black/60 to-transparent rounded-b-2xl z-10" />

        <button
          className={`cursor-pointer absolute bottom-4 right-4 z-20 bg-slate-400/30 text-white rounded-full p-2 shadow-lg transition-opacity duration-500 hover:bg-slate-700`}
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollBy({ top: 80, behavior: "smooth" });
            }
          }}
          aria-label="Scroll down"
          tabIndex={0}
        >
          <IoIosArrowDown />
        </button>
        <Link
          href="/blog"
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary font-medium text-xs text-white rounded p-2 shadow-lg transition-opacity duration-500 hover:bg-primary/90
                        ${(isHovered || isTouchDevice) && showCheckoutMore ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          Checkout More Blogs
        </Link>
      </div>
    </div>
  );
}

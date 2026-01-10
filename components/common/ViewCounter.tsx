"use client";

import { useEffect, useState, useRef } from "react";
import { IoMdEye } from "react-icons/io";

type Props = {
  slug: string;
  initialViews: number;
};

export default function ViewCounter({ slug, initialViews }: Props) {
  const [views, setViews] = useState(initialViews);
  const hasCalled = useRef(false);

  useEffect(() => {
    if (hasCalled.current) return;
    hasCalled.current = true;

    fetch("/api/blog/views", {
      method: "POST",
      body: JSON.stringify({ slug }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.views === "number") {
          setViews(data.views);
        }
      });
  }, [slug]);

  return (
    <div className="flex items-center gap-1 text-xs text-muted-foreground">
      <IoMdEye className="h-3.5 w-3.5" />
      <span>{views} views</span>
    </div>
  );
}

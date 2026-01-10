"use client";

import { useState } from "react";
import { SlLike } from "react-icons/sl";

export default function LikeButton({
  slug,
  initialLikes,
}: {
  slug: string;
  initialLikes: number;
}) {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = async () => {
    setLikes((prev) => prev + 1);

    await fetch("/api/blog/likes", {
      method: "POST",
      body: JSON.stringify({ slug }),
    });
  };

  return (
    <button onClick={handleLike} className="flex items-center gap-1">
      <SlLike className="h-4 w-4" />
      {likes}
    </button>
  );
}

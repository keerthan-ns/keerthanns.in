export const runtime = "edge";

import redis from "@/lib/redis";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { slug } = await req.json();

  if (!slug) {
    return Response.json({ error: "Missing slug" }, { status: 400 });
  }

  const cookieStore = await cookies();
  const cookieName = `blog_viewed_${slug}`;

  const hasViewed = cookieStore.get(cookieName);

  let views: number;

  if (!hasViewed) {
    // unique view
    views = await redis.incr(`blog:views:${slug}`);

    cookieStore.set({
      name: cookieName,
      value: "1",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
  } else {
    // Already viewed → just fetch count
    views = (await redis.get<number>(`blog:views:${slug}`)) ?? 0;
  }

  return Response.json({ views });
}

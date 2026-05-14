import redis from "@/lib/redis";

export async function getBlogViews(slug: string) {
  try {
    const views = await redis.get<number>(`blog:views:${slug}`);
    return Number(views ?? 0);
  } catch (err) {
    console.error("Upstash error:", err);
    return 0; // Graceful fallback — page still renders
  }
}

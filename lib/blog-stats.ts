import redis from "@/lib/redis";

export async function getBlogViews(slug: string) {
  const views = await redis.get<number>(`blog:views:${slug}`);
  return views ?? 0;
}

export const runtime = "edge";

import redis from "@/lib/redis";

export async function POST(req: Request) {
  const { slug } = await req.json();

  const likes = await redis.incr(`blog:likes:${slug}`);

  return Response.json({ likes });
}

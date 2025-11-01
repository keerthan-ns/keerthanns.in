import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      qualities: [50, 75],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "/**"
        }
      ]
    }
};

export default nextConfig;

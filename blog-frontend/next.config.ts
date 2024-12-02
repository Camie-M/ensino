import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com"],
  },
};

export default nextConfig;

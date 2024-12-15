import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'postech-images.s3.us-east-1.amazonaws.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
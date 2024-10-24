import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
        port: "",
        pathname: "/apod/**",
      },
      {
        protocol: 'https',
        hostname: '*.youtube.com'
      }
    ],
  }
};

export default nextConfig;

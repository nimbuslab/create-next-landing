import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera .next/standalone com um servidor autocontido, usado pelo Dockerfile.
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

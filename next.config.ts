import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  }
  
};

export default nextConfig;

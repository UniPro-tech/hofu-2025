import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/2025",
  typescript: {
    // type checkをbuild時にoff
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

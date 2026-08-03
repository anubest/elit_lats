import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/elit_lats",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

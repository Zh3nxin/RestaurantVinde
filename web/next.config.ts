import type { NextConfig } from "next";

const basePath = process.env.NEXT_BASE_PATH ?? "";
const prefix = basePath || undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: prefix,
  assetPrefix: prefix,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [{ pathname: "/*" }],
    contentDispositionType: "inline",
  },
};

export default nextConfig;

// cspell:ignore TURBOPACK
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { dev }) {
    if (!dev) {
      // Keep full source maps in production builds only
      config.devtool = "source-map";
    }

    return config;
  },
};

export default nextConfig;

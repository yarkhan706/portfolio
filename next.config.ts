import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable the parallel build worker — works around a Windows-only
  // "Cannot find module for page" error during the page-data collection
  // phase. No effect on Vercel/Linux builds.
  experimental: {
    webpackBuildWorker: false,
  },
};

export default nextConfig;

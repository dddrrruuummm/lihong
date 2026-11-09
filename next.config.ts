import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  agentRules: false,
  poweredByHeader: false,
  devIndicators: false,
  images: { unoptimized: true },
};

export default config;

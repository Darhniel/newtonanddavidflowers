import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images:{
    unoptimized: true,
    loader: 'custom',
    loaderFile: './loader.ts'
  },
};

export default nextConfig;

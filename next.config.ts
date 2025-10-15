import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
  images: {
    domains: [
      "maisonoffice.vn",
      "www.shutterstock.com",
      "cdn-icons-png.flaticon.com",'hoanghamobile.com','images2.thanhnien.vn', 'maisonoffice.vn', 'reeme.com.vn'
    ], // 👈 thêm dòng này
  },
};

export default nextConfig;

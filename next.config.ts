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
      "cdn-icons-png.flaticon.com",'hoanghamobile.com','images2.thanhnien.vn', 'maisonoffice.vn', 'reeme.com.vn', "congcutot.vn"
    ], // 👈 thêm dòng này
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "haiauint.vn",
      },
      {
        protocol: "https",
        hostname: "cdn2.iconfinder.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "png.pngtree.com",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
    ],
  },
};

export default nextConfig;

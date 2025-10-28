import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // ✅ Bật i18n để Next hiểu prefix /vi, /en
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
    localeDetection: true,
  },

  images: {
    domains: [
      "maisonoffice.vn",
      "www.shutterstock.com",
      "cdn-icons-png.flaticon.com",
      "hoanghamobile.com",
      "images2.thanhnien.vn",
      "reeme.com.vn",
      "congcutot.vn",
      "png.pngtree.com",
      "upload.wikimedia.org",
      "encrypted-tbn0.gstatic.com",
      "cdn2.iconfinder.com",
      "haiauint.vn",
      "static.vecteezy.com",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "static.vecteezy.com" },
      { protocol: "https", hostname: "haiauint.vn" },
      { protocol: "https", hostname: "cdn2.iconfinder.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "png.pngtree.com" },
    ],
  },
};

export default nextConfig;

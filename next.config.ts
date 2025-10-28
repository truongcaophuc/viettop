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
        protocol: 'https',
        hostname: 't4.ftcdn.net', // <-- Hostname causing the error
        port: '',
        pathname: '/**', // Allows any path on this host
      },
      // === Add ALL other external image hostnames you use ===
      {
        protocol: 'https',
        hostname: 'congcutot.vn', // From blog post images
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.pace.edu.vn',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drh.vn',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'png.pngtree.com', // From header logo
        port: '',
        pathname: '/**',
      },
      // Add any other domains like freepik, hidosport, vecteezy if you use those images
       {
         protocol: 'https',
         hostname: 'img.freepik.com',
         port: '',
         pathname: '/**',
       },
       {
         protocol: 'https',
         hostname: 'hidosport.vn',
         port: '',
         pathname: '/**',
       },
       {
         protocol: 'https',
         hostname: 'static.vecteezy.com',
         port: '',
         pathname: '/**',
       },
    ],
  },
};

export default nextConfig;

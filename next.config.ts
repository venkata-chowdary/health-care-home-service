import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    minimumCacheTTL: 86400,
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/home-nursing",
        destination: "/services/nursing-care-at-home",
        permanent: true,
      },
      {
        source: "/services/elder-care",
        destination: "/services/elder-care-at-home",
        permanent: true,
      },
      {
        source: "/services/critical-care-at-home",
        destination: "/services/critical-care-icu-at-home",
        permanent: true,
      },
      {
        source: "/services/vip-baby-care",
        destination: "/services/mother-baby-care-at-home",
        permanent: true,
      },
      {
        source: "/services/post-operative-care",
        destination: "/services/post-operative-care-at-home",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);


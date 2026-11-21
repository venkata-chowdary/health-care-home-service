import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
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

export default nextConfig;


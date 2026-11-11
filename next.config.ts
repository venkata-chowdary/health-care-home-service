import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
  },
  async redirects() {
    return [
      {
        source: "/services/post-operative-care",
        destination: "/services/home-nursing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    localPatterns: [
      { pathname: "/kamp6/intro/**" },
      { pathname: "/kamp6/activities/**" },
      { pathname: "/kamp6/**", search: "" },
    ],
  },
  async headers() {
    return [
      {
        source: "/kamp6/intro/:path*",
        has: [{ type: "query", key: "v" }],
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

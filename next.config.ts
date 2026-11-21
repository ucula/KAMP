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
};

export default nextConfig;

/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: !isProd,
})({
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["blob.v0.dev"],
    unoptimized: true,
  },
});

export default nextConfig;

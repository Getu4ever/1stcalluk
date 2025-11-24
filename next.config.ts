/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Allows build to pass even with lint warnings
  },
  images: {
    unoptimized: true, // ✅ Keeps your <img> tags working as-is
  },
};

module.exports = nextConfig;

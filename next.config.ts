/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "threebestrated.co.uk",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Modern browsers use only CSP for iframe permissions
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors http://localhost:3333 http://localhost:3000 https://*.sanity.build https://*.sanity.dev;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

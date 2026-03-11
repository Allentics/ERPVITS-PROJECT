import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression for all responses
  compress: true,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Experimental performance features
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-accordion",
      "@radix-ui/react-tabs",
    ],
  },

  // HTTP caching headers for static assets
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
      {
        // Cache static files (images, fonts, icons) for 1 year
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache fonts for 1 year
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/courses/ariba",
        destination: "/sap-ariba-training",
        permanent: true,
      },
      {
        source: "/courses/cpi",
        destination: "/sap-cpi-training",
        permanent: true,
      },
      {
        source: "/courses/abap-cloud",
        destination: "/sap-abap-on-cloud-online-training",
        permanent: true,
      },
      {
        source: "/courses/c4c-technical",
        destination: "/sap-c4c-technical-online-training",
        permanent: true,
      },
      {
        source: "/courses/fieldglass",
        destination: "/sap-fieldglass-training",
        permanent: true,
      },
      {
        source: "/courses/fico",
        destination: "/sap-fico-course",
        permanent: true,
      },
      {
        source: "/courses/sd",
        destination: "/sap-sd-training",
        permanent: true,
      },
      {
        source: "/courses/mm",
        destination: "/sap-s4hana-mm-training",
        permanent: true,
      },
      {
        source: "/courses/trm",
        destination: "/sap-treasury-and-risk-management-online-training",
        permanent: true,
      },
      {
        source: "/courses/python-aiml",
        destination: "/ai-and-machine-learning-with-python",
        permanent: true,
      },
      {
        source: "/courses/python-ai-ml",
        destination: "/ai-and-machine-learning-with-python",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


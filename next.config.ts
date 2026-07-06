import path from "node:path";
import bundleAnalyzer from "@next/bundle-analyzer";

// Run `ANALYZE=true pnpm build` to open the client/edge/nodejs bundle reports.
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // Pin the workspace root so build traces don't pick up a stray lockfile in the
  // home directory (silences the "inferred workspace root" warning).
  outputFileTracingRoot: path.join(__dirname),

  // Compression
  compress: true,

  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,

  // Build optimizations
  experimental: {
    optimizePackageImports: ["motion"],
    viewTransition: true,
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            // Two years, subdomains included, eligible for the HSTS preload list.
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            // Lock down powerful APIs the site never uses.
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);

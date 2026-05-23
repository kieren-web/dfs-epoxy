import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Fix /b/ blog URLs from previous site version — redirect to correct paths
      {
        source: "/b/top-10-benefits-of-epoxy-flooring-for-homes--businesses--central-coast",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/b/epoxy-flooring-maintenance-tips-to-keep-your-floors-looking-new",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/b/how-to-choose-the-best-epoxy-flooring-for-your-space",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/epoxy-flooring-maintenance-tips",
        destination: "/blog",
        permanent: true,
      },
      // Catch-all for any other /b/ paths
      {
        source: "/b/:slug",
        destination: "/blog",
        permanent: true,
      },
      // www → non-www canonical redirect
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dynamicflooringsolutions.com.au" }],
        destination: "https://dynamicflooringsolutions.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

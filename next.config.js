/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["taask.atwebpages.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "taask.atwebpages.com",
        pathname: "/wp-content/uploads/**/**",
      },
    ],
  },
};

module.exports = nextConfig;

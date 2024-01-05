/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "nucloud.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

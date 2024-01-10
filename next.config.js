/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "nucloud.com", "images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { ADMIN: process.env.ADMIN },
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com", "cdn.shopify.com"],
  },
};

module.exports = nextConfig;

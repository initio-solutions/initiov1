/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { ADMIN: process.env.ADMIN },
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "cdn.shopify.com",
      "acaa.org.uk",
      "media-exp1.licdn.com",
    ],
  },
};

module.exports = nextConfig;

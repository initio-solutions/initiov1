/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { ADMIN: process.env.ADMIN },
};

module.exports = nextConfig;

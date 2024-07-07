/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = withPWA({
  disable: true,
  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: process.env.IS_VERCEL_ENV === 'true'
  }
});

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: process.env.IS_VERCEL_ENV === 'true'
  },
};

module.exports = nextConfig;

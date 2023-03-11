/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // TODO: https://github.com/mswjs/msw/issues/1455 解決したら消す
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig

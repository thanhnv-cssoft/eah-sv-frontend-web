const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  transpilePackages: ['three', 'antd', '@ant-design', 'rc-util', '@rc-component'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;

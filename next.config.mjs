/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  optimizeFonts: false,
  swcMinify: true,
  images: {
    domains: ['irecommend.storage.yandexcloud.net'],
  },
};

export default nextConfig;

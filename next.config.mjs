const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/aceajdev-webpage/' : '',
  basePath: isProd ? '/DuckDonni' : '',
  output: 'export'
};

export default nextConfig;
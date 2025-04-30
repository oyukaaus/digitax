/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 👈 disables default image optimization
  },
};

module.exports = nextConfig;

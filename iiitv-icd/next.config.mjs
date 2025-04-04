/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['diu.iiitvadodara.ac.in', 'iiitvadodara.ac.in', 'assets.aceternity.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'diu.iiitvadodara.ac.in',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: 'http',
        hostname: 'iiitvadodara.ac.in',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};

export default nextConfig;

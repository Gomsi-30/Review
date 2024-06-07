/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
            pathname: '/free-vector/**',
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            port: '',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: ' encrypted-tbn0.gstatic.com',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
};

export default nextConfig;

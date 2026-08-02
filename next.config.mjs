/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/ice-maintenance',
        destination: '/services#ice-maintenance',
        permanent: true,
      },
      {
        source: '/services/consulting',
        destination: '/services#consulting',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

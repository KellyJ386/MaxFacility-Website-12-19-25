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
        // /software was the RinkReports page; RinkReports now lives in the
        // #rinkreports section of the ice rink page.
        source: '/software',
        destination: '/ice-rink#rinkreports',
        permanent: true,
      },
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

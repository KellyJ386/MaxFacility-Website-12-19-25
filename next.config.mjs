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
        // /software was the RinkReports page; RinkReports now lives on the
        // ice rink page and /custom-software is the software landing page.
        source: '/software',
        destination: '/custom-software',
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

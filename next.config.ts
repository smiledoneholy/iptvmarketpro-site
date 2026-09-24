import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/iptv-subscription', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/faq', destination: '/#faq', permanent: true },
      { source: '/channel-list', destination: '/channels', permanent: true },
    ];
  },
};

export default nextConfig;

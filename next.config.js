/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.errakui.dev',
          },
        ],
        destination: 'https://errakui.dev/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig


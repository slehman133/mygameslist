/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.rawg.io', 'images.igdb.com',
      'images5.alphacoders.com'],
  },
}

module.exports = nextConfig

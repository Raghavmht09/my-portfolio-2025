/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  eslint: {
    dirs: ['app', 'components', 'lib', 'hooks'],
  },
  output: 'standalone',
}

export default nextConfig
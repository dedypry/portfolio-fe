import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  experimental: {
    turbo: {
      resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json']
    }
  },
  eslint: {
    // Disabling specific rules
    ignoreDuringBuilds: true // Ignores ESLint errors during production build
  }
}

export default nextConfig

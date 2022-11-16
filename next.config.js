/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
// const withMDX = require('@next/mdx')()
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/resume' : ''
const path = require('path')
const withPlugins = require('next-compose-plugins')
// const ghPages = process.env.DEPLOY_TARGET === 'gh-pages'
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  basePath: basePath,
  assetPrefix: basePath + '/',
  // assetPrefix: ghPages ? '/resume/' : '',
  // assetPrefix: './',
  experimental: {
    // concurrentFeatures: true,
    // serverComponents: true,
  },
  images: {
    // formats: ['image/avif', 'image/webp'],
    // disableStaticImages: true,
    // minimumCacheTTL: 60,
    path: basePath,
    // path: process.env.NEXT_PUBLIC_BASE_PATH || '',
    // imagesPublicPath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    imagesPublicPath: basePath,
    domains: ['assets.vercel.com', 'github.io'],
  },
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  productionBrowserSourceMaps: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}

module.exports = withPlugins([withBundleAnalyzer], nextConfig)

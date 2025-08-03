/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Enable experimental features
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
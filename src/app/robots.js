import { MetadataRoute } from 'next'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://bluecompute.com/sitemap.xml',
  }
}
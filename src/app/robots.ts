import { MetadataRoute } from 'next';
import { host } from '@/src/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${host}/sitemap.xml`,
  }
}

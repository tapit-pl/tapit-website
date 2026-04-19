import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tapit.com.pl'

  const staticRoutes = [
    '',
    '/o-nas',
    '/audyt',
    '/kontakt',
    '/blog',
    '/uslugi',
    '/uslugi/google-ads',
    '/uslugi/seo',
    '/uslugi/marketing-lokalny',
    '/uslugi/pozycjonowanie-w-ai',
    '/uslugi/strony-internetowe',
    '/uslugi/analityka',
    '/sprawdz-wizytowke',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/uslugi') ? 0.8 : 0.7,
  }))

  const blogRoutes = getAllSlugs().map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}

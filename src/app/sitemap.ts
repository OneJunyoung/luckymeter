import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lucky-meter.com';

  // Core static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/games',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Game pages (Highest priority for SEO Game-focus strategy)
  const games = [
    'candy-match',
    'bubble-pop',
    'scooter-run',
    'dice-roll',
    'ghost-leg',
    'drawing-lots',
    'gomoku',
    'carrom',
  ].map((slug) => ({
    url: `${baseUrl}/games/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Blog pages
  const posts = [
    'why-we-built-luckymeter',
    'the-history-of-carrom',
    'strategies-for-gomoku',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...games, ...posts];
}

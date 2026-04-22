import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://mjbytech.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://mjbytech.com/#services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://mjbytech.com/#portfolio', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://mjbytech.com/#about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://mjbytech.com/#contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}

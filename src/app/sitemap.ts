import { MetadataRoute } from 'next'
import { swissCities } from '@/data/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://errakui.dev'
  const currentDate = new Date()

  // Pagine principali
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servizi`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termini-condizioni`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/citta`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Pagine città - priorità basata su popolazione e importanza
  const cityPages = swissCities.map((city) => {
    // Priorità più alta per città principali
    let priority = 0.7
    if (city.population && city.population > 100000) {
      priority = 0.9
    } else if (city.population && city.population > 50000) {
      priority = 0.8
    }

    return {
      url: `${baseUrl}/citta/${city.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority,
    }
  })

  return [...mainPages, ...cityPages]
}


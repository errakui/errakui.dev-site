import { Metadata } from 'next'
import { getCityBySlug } from '@/data/cities'

interface LayoutProps {
  children: React.ReactNode
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    return {}
  }

  return {
    title: {
      template: `%s | ERRAKUI.DEV — Software House ${city.name}`,
      default: `Software House ${city.name} | ERRAKUI.DEV`,
    },
  }
}

export default function CityLayout({ children }: LayoutProps) {
  return children
}

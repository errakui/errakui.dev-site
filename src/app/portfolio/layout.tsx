import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Progetti di sviluppo software che fanno la differenza. Case studies di siti web, app mobile e software gestionali di alta qualità.',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

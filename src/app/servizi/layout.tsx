import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servizi',
  description: 'Sviluppo siti web, app mobile, software gestionali e soluzioni personalizzate. Qualità svizzera, precisione e innovazione tecnologica.',
}

export default function ServiziLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

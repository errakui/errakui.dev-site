import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contattaci per una consulenza gratuita. Software house a Lugano, Svizzera. Telefono: +41 77 218 69 71 | Email: info@errakui.dev',
}

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

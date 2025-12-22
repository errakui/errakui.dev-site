import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Software house svizzera a Lugano. Eccellenza, precisione e innovazione nel software. Swiss Made Software con tradizione artigianale.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

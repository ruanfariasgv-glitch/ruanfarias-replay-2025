import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2025 - Photo Replay',
  description: 'Meu ano em retrospectiva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: `ts-scaffold`,
  description: `Full-stack TypeScript scaffold with Next.js, Tailwind, and Neon Postgres`,
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}

export default RootLayout

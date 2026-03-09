import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunitoSans = Nunito_Sans({ variable: `--font-sans` })

export const metadata: Metadata = {
  title: `ts-scaffold`,
  description: `Full-stack TypeScript scaffold with Next.js, Tailwind, and Neon Postgres`,
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={cn(`font-sans`, `font-sans`, nunitoSans.variable)}
    >
      <body className="font-sans">{children}</body>
    </html>
  )
}

export default RootLayout

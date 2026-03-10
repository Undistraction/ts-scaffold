import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

// eslint-disable-next-line quotes -- font loader requires plain string literals
const nunitoSans = Nunito_Sans({ variable: '--font-sans' })

export const metadata: Metadata = {
  title: `ts-scaffold`,
  description: `Full-stack TypeScript scaffold with Next.js, Tailwind, and Neon Postgres`,
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={cn(`font-sans`, nunitoSans.variable)}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout

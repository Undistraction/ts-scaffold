import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

// eslint-disable-next-line quotes -- font loader requires plain string literals
const nunitoSans = Nunito_Sans({ variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? `http://localhost:3000`,
  ),
  title: {
    default: `ts-scaffold`,
    template: `%s | ts-scaffold`,
  },
  description: `Full-stack TypeScript scaffold with Next.js, Tailwind, and Neon Postgres`,
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={cn(`font-sans`, nunitoSans.variable)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout

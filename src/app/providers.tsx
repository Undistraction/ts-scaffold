'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ClerkProvider>
  )
}

export { Providers }

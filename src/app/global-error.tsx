'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center font-sans">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="max-w-md text-neutral-500">
          A critical error occurred. You can try again or return to the home
          page.
        </p>
        <div className="flex gap-3">
          <button
            onClick={reset}
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
          >
            Try again
          </button>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Router context unavailable when root layout crashes */}
          <a
            href="/"
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100"
          >
            Go home
          </a>
        </div>
      </body>
    </html>
  )
}

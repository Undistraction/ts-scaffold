'use client'

import { pingAction } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { useAction } from 'next-safe-action/hooks'

const PingButton = () => {
  const { execute, result, status } = useAction(pingAction)
  const isPending = status === `executing`
  const hasResult = result.data ?? result.serverError

  return (
    <section className="flex items-center gap-2">
      <Button onClick={() => execute()} disabled={isPending}>
        {isPending ? `Pinging…` : `Ping server`}
      </Button>
      {hasResult && (
        <p
          role="status"
          className={result.serverError ? `text-destructive` : `text-black`}
        >
          {result.serverError ? `Server error` : `Pong!`}
        </p>
      )}
    </section>
  )
}

export { PingButton }

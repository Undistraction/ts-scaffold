import * as Sentry from '@sentry/nextjs'

export const register = async () => {
  await import(`../sentry.server.config`)
}

export const onRequestError = Sentry.captureRequestError

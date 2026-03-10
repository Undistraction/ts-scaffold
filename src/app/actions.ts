'use server'

import { ping } from '@/lib/ping'
import { actionClient } from '@/lib/safe-action'

export const pingAction = actionClient.action(async () => {
  await ping()
  return { success: true }
})

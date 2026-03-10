import { LOG_LEVEL } from '@/const/log-level'
import { db } from '@/db'
import { logEntries } from '@/db/schema'

export const ping = async () => {
  await db
    .insert(logEntries)
    .values({
      message: `Ping`,
      level: LOG_LEVEL.INFO,
    })
    .execute()
}

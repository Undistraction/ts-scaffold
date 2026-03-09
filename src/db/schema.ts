import type { LogLevel } from '@/const/log-level'
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const logEntries = pgTable(`log_entries`, {
  id: uuid(`id`).primaryKey().defaultRandom(),
  message: text(`message`).notNull(),
  level: text(`level`).notNull().$type<LogLevel>(),
  createdAt: timestamp(`created_at`).notNull().defaultNow(),
})

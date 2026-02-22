import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import type { LogLevel } from '../const/LOG_LEVEL'

// Naive implementation so we have something to test
export const logEntries = sqliteTable(`log_entries`, {
  id: text(`id`)
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  message: text(`message`).notNull(),
  level: text(`level`).notNull().$type<LogLevel>(),
  createdAt: integer(`created_at`, { mode: `timestamp` })
    .notNull()
    .$defaultFn(() => new Date()),
})

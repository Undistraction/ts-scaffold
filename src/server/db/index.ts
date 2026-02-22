import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import * as schema from './schema'
import { logEntries } from './schema'

// 1. Create our database
const sqlite = new Database(`:memory:`)

// 2. Create our database API
export const db = drizzle(sqlite, { schema })

// 3. Run migrations
migrate(db, { migrationsFolder: `./drizzle` })

export { logEntries }

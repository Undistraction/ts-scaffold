import { neon, type NeonQueryFunction } from '@neondatabase/serverless'
import { drizzle, type NeonHttpDatabase } from 'drizzle-orm/neon-http'
import * as schema from './schema'

let sql: NeonQueryFunction<false, false>
let db: NeonHttpDatabase<typeof schema>

if (process.env.DATABASE_URL) {
  sql = neon(process.env.DATABASE_URL)
  db = drizzle(sql, { schema })
}

export { db }

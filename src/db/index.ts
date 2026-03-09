import { env } from '@/env'
import { neon, type NeonQueryFunction } from '@neondatabase/serverless'
import { drizzle, type NeonHttpDatabase } from 'drizzle-orm/neon-http'
import * as schema from './schema'

let sql: NeonQueryFunction<false, false>
let db: NeonHttpDatabase<typeof schema>

if (env.DATABASE_URL) {
  sql = neon(env.DATABASE_URL)
  db = drizzle(sql, { schema })
}

export { db }

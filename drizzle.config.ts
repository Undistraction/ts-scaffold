import { defineConfig } from 'drizzle-kit'
import { loadEnv } from './load-env'

loadEnv()

export default defineConfig({
  schema: `./src/db/schema.ts`,
  dialect: `postgresql`,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})

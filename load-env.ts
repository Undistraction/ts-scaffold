import dotenv from 'dotenv'

/**
 * Load environment files following Next.js conventions:
 * 1. .env.{NODE_ENV} — environment-specific
 * 2. .env — shared base
 *
 * dotenv won't overwrite already-set vars, so earlier files take precedence.
 */
export const loadEnv = () => {
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
  dotenv.config({ path: `.env` })
}

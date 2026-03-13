import dotenv from 'dotenv'

/**
 * Load environment files:
 * 1. .env.test — loaded only when NODE_ENV=test, overrides .env values
 * 2. .env — base config for local development
 *
 * dotenv won't overwrite already-set vars, so earlier files take precedence.
 */
export const loadEnv = () => {
  if (process.env.NODE_ENV === `test`) {
    dotenv.config({ path: `.env.test` })
  }
  dotenv.config({ path: `.env` })
}

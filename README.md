# ts-scaffold

[https://github.com/Undistraction/ts-scaffold](https://github.com/Undistraction/ts-scaffold)

Full-stack TypeScript scaffold including [Claude Code](https://docs.anthropic.com/en/docs/claude-code) tooling. Next.js (App Router, Tailwind) + Neon Postgres (Drizzle ORM).

## Setup

1. [Use this template](https://github.com/Undistraction/ts-scaffold/generate) on GitHub to create your own repo, then clone it.
2. Create a [Neon](https://neon.tech) project:
   - Sign up / log in at [neon.tech](https://neon.tech)
   - Create a new project
   - Create two databases (e.g., `scaffold` and `scaffold_test`)
   - Copy each database's connection string from the Neon dashboard (found under **Connection Details**)
3. Copy `.env.example` to `.env.development` and paste the main database connection string.
4. Copy `.env.example` to `.env.test` and paste the test database connection string.
5. Open the project in Claude Code and run `/setup-dev` to install dependencies, plugins, MCP servers, and verify the environment.

## Quick-start

Start Next.js dev server (Port 3000):

```bash
npm run dev
```

## All Scripts

List all scripts in `package.json`:

```bash
npm run
```

Main scripts:

| Script                       | Description                  |
| ---------------------------- | ---------------------------- |
| `npm run dev`                | Start Next.js dev server     |
| `npm run build`              | Production build             |
| `npm run start`              | Start production server      |
| `npm run lint`               | Run ESLint + Prettier        |
| `npm run test:unit`          | Run tests in watch mode      |
| `npm run test:unit:no-watch` | Run tests once               |
| `npm run types:check`        | Type-check with tsc          |
| `npm run db:generate`        | Generate Drizzle migrations  |
| `npm run db:push`            | Push schema to dev database  |
| `npm run db:push:test`       | Push schema to test database |
| `npm run db:studio`          | Open Drizzle Studio          |
| `npm run styleguide`         | Start Storybook dev server   |
| `npm run styleguide:build`   | Build static Storybook site  |

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout
    page.tsx          # Home page
    globals.css       # Tailwind CSS entry point
    api/
      ping/
        route.ts      # API route handler
  db/
    index.ts          # Drizzle + Neon setup
    schema.ts         # Database schema
  lib/
    safe-action.ts    # next-safe-action client
  env.ts              # Type-safe env validation (@t3-oss/env-nextjs)
  const/              # Shared constants
  test/
    setup.ts          # Test setup
```

## Database

Neon Postgres via Drizzle ORM. Two databases, each with its own env file:

- `.env.development` — dev database (`DATABASE_URL`)
- `.env.test` — test database (`DATABASE_URL`)

Environment variables are validated via [`@t3-oss/env-nextjs`](https://env.t3.gg/docs/nextjs) in `src/env.ts`. Use `env.DATABASE_URL` (from `@/env`) instead of raw `process.env.DATABASE_URL` in application code.

After changing the schema, push to both databases:

```bash
npm run db:push && npm run db:push:test
```

## Code Quality

- **ESLint** includes Next.js rules (`@next/eslint-plugin-next`) and an accessibility plugin (`eslint-plugin-jsx-a11y`).
- **Prettier** uses the Tailwind plugin for consistent class ordering.
- **Commits** must follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by commit-lint).
- **Pre-commit hook** (Husky + lint-staged) runs linting, type-checking, unit tests, and `npm audit`.
- **Changelog** is auto-generated, and versions are auto-tagged when pulling upstream template changes.

## Environment Variables

The project uses multiple `.env` files for different contexts. All are gitignored except `.env.example`.

### Local Development

| Variable                            | File                       | Description                            | Source                                                                        |
| ----------------------------------- | -------------------------- | -------------------------------------- | ----------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SENTRY_DSN`            | `.env`                     | Sentry DSN (used client & server side) | [Sentry project keys](https://sentry.io/settings/projects/YOUR_PROJECT/keys/) |
| `SENTRY_ORG`                        | `.env`                     | Sentry organisation slug               | [Sentry settings](https://sentry.io/settings/)                                |
| `SENTRY_PROJECT`                    | `.env`                     | Sentry project slug                    | [Sentry settings](https://sentry.io/settings/)                                |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | `.env`                     | Clerk publishable key                  | [Clerk dashboard](https://dashboard.clerk.com/last-active?path=api-keys)      |
| `CLERK_SECRET_KEY`                  | `.env`                     | Clerk secret key                       | [Clerk dashboard](https://dashboard.clerk.com/last-active?path=api-keys)      |
| `SENTRY_AUTH_TOKEN`                 | `.env.sentry-build-plugin` | Sentry auth token for source maps      | [Sentry auth tokens](https://sentry.io/settings/auth-tokens/)                 |
| `DATABASE_URL`                      | `.env.development`         | Neon Postgres dev database             | [Neon console](https://console.neon.tech)                                     |
| `DATABASE_URL`                      | `.env.test`                | Neon Postgres test database            | [Neon console](https://console.neon.tech)                                     |
| `E2E_CLERK_USER_EMAIL`              | `.env.test`                | E2E test user email                    | Create user in Clerk dashboard                                                |
| `E2E_CLERK_USER_PASSWORD`           | `.env.test`                | E2E test user password                 | Create user in Clerk dashboard                                                |

### GitHub Actions (CI)

Add these as repository secrets in **Settings > Secrets and variables > Actions**:

| Secret                              | Maps to                    | Source                                                                        |
| ----------------------------------- | -------------------------- | ----------------------------------------------------------------------------- |
| `TEST_DATABASE_URL`                 | `DATABASE_URL` for test DB | [Neon console](https://console.neon.tech)                                     |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key      | [Clerk dashboard](https://dashboard.clerk.com/last-active?path=api-keys)      |
| `CLERK_SECRET_KEY`                  | Clerk secret key           | [Clerk dashboard](https://dashboard.clerk.com/last-active?path=api-keys)      |
| `NEXT_PUBLIC_SENTRY_DSN`            | Sentry DSN                 | [Sentry project keys](https://sentry.io/settings/projects/YOUR_PROJECT/keys/) |
| `SENTRY_ORG`                        | Sentry org slug            | [Sentry settings](https://sentry.io/settings/)                                |
| `SENTRY_PROJECT`                    | Sentry project slug        | [Sentry settings](https://sentry.io/settings/)                                |
| `SENTRY_AUTH_TOKEN`                 | Sentry auth token          | [Sentry auth tokens](https://sentry.io/settings/auth-tokens/)                 |
| `E2E_CLERK_USER_EMAIL`              | E2E test user email        | Create user in Clerk dashboard                                                |
| `E2E_CLERK_USER_PASSWORD`           | E2E test user password     | Create user in Clerk dashboard                                                |
| `VERCEL_TOKEN`                      | Vercel API token           | [Vercel tokens](https://vercel.com/account/tokens)                            |
| `VERCEL_ORG_ID`                     | Vercel team/org ID         | Run `vercel link` or check Vercel dashboard                                   |
| `VERCEL_PROJECT_ID`                 | Vercel project ID          | Run `vercel link` or check Vercel dashboard                                   |

## Claude Code

The `.claude/` directory contains project-specific agents, skills, and settings for use with [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Run `/claude-tooling` inside Claude Code to list all available skills, agents, and hooks.

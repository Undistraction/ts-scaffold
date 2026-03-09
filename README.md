# ts-scaffold

[https://github.com/Undistraction/ts-scaffold](https://github.com/Undistraction/ts-scaffold)

Full-stack TypeScript scaffold including [Claude Code](https://docs.anthropic.com/en/docs/claude-code) tooling. Next.js (App Router, Tailwind) + Neon Postgres (Drizzle ORM).

## Setup

1. [Use this template](https://github.com/Undistraction/ts-scaffold/generate) on GitHub to create your own repo, then clone it.
2. Create a [Neon](https://neon.tech) project with two databases (e.g., `scaffold` and `scaffold_test`).
3. Copy `.env.example` to `.env.local` and fill in your Neon connection strings.
4. Open the project in Claude Code and run `/setup-dev` to install dependencies, plugins, MCP servers, and verify the environment.

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

| Script                       | Description                 |
| ---------------------------- | --------------------------- |
| `npm run dev`                | Start Next.js dev server    |
| `npm run build`              | Production build            |
| `npm run start`              | Start production server     |
| `npm run lint`               | Run ESLint + Prettier       |
| `npm run test:unit`          | Run tests in watch mode     |
| `npm run test:unit:no-watch` | Run tests once              |
| `npm run types:check`        | Type-check with tsc         |
| `npm run db:generate`        | Generate Drizzle migrations |
| `npm run db:push`            | Push schema to database     |
| `npm run db:studio`          | Open Drizzle Studio         |

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
  const/              # Shared constants
  test/
    setup.ts          # Test setup
```

## Database

Neon Postgres via Drizzle ORM. Two databases: one for development (`DATABASE_URL`), one for tests (`DATABASE_URL_TEST`). Both connection strings go in `.env.local`.

After changing the schema, generate migrations with `npm run db:generate` and apply with `npm run db:push`.

## Code Quality

- **ESLint** includes Next.js rules (`@next/eslint-plugin-next`) and an accessibility plugin (`eslint-plugin-jsx-a11y`).
- **Prettier** uses the Tailwind plugin for consistent class ordering.
- **Commits** must follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by commit-lint).
- **Pre-commit hook** (Husky + lint-staged) runs linting, type-checking, unit tests, and `npm audit`.
- **Changelog** is auto-generated, and versions are auto-tagged when pulling upstream template changes.

## Claude Code

The `.claude/` directory contains project-specific agents, skills, and settings for use with [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Run `/claude-tooling` inside Claude Code to list all available skills, agents, and hooks.

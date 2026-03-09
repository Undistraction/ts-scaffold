# ts-scaffold

[https://github.com/Undistraction/ts-scaffold](https://github.com/Undistraction/ts-scaffold)

Full-stack TypeScript scaffold including [Claude Code](https://docs.anthropic.com/en/docs/claude-code) tooling. React client (Vite, Tailwind) + Express server + SQLite (Drizzle ORM).

## Setup

1. [Use this template](https://github.com/Undistraction/ts-scaffold/generate) on GitHub to create your own repo, then clone it.
2. Open the project in Claude Code and run `/setup-dev` to install dependencies, plugins, MCP servers, and verify the environment.

## Quick-start

Start Express server (Port 3001)

```bash
nvm run dev:server
```

Start React client (Port 3000)

```bash
nvm run dev:client
```

## All Scripts

List all scripts in `package.json`:

```bash
nvm run
```

Main scripts:

| Script                       | Description              |
| ---------------------------- | ------------------------ |
| `npm run dev:client`         | Start Vite dev server    |
| `npm run dev:server`         | Start Express dev server |
| `npm run lint`               | Run ESLint + Prettier    |
| `npm run test:unit`          | Run tests in watch mode  |
| `npm run test:unit:no-watch` | Run tests once           |
| `npm run types:check`        | Type-check with tsc      |

## Project Structure

```
src/
  client/
    main.tsx          # React entry point
    styles.css        # Tailwind CSS entry point
    app/              # App component
  server/
    index.ts          # Server entry point
    app/              # Express app + routes
    db/               # Drizzle ORM schema + database
    const/            # Shared constants
  test/
    setup.ts          # Test setup
drizzle/              # Generated migrations
```

## Database

SQLite via Drizzle ORM, running in-memory. Migrations are generated with `npx drizzle-kit generate`, and this should be done after any changes to the schema. Migrations are applied automatically on app and test startup.

## Code Quality

- **ESLint** includes an accessibility plugin (`eslint-plugin-jsx-a11y`).
- **Prettier** uses the Tailwind plugin for consistent class ordering.
- **Commits** must follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by commit-lint).
- **Pre-commit hook** (Husky + lint-staged) runs linting, type-checking, unit tests, and `npm audit`.
- **Changelog** is auto-generated, and versions are auto-tagged when pulling upstream template changes.

## Claude Code

The `.claude/` directory contains project-specific agents, skills, and settings for use with [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Run `/claude-tooling` inside Claude Code to list all available skills, agents, and hooks.

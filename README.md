# ts-scaffold

[https://github.com/Undistraction/ts-scaffold](https://github.com/Undistraction/ts-scaffold)

Minimal TypeScript project scaffold with React, Express, Vite, Vitest, Tailwind, Drizzle ORM, ESLint, Prettier, and Husky.

## Setup

If you are using NVM to manage Node versions:

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

## Quick-start

Start React client (Port 3000)

```bash
nvm run dev:client
```

Start Express server (Port 3001)

```bash
nvm run dev:server
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

SQLite via Drizzle ORM, running in-memory. Migrations are generated with `npx drizzle-kit generate` and applied automatically on startup.

## Husky

On commit, Husky runs linting and tests.

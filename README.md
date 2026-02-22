# ts-scaffold

Minimal TypeScript project scaffold with Vite, Vitest, React, Tailwind, ESLint, Prettier, and Husky.

## Setup

```bash
nvm use
npm install
```

## Scripts

| Script                | Description             |
| --------------------- | ----------------------- |
| `npm run dev`         | Start Vite dev server   |
| `npm run lint`        | Run ESLint + Prettier   |
| `npm run test:unit`   | Run tests in watch mode |
| `npm run types:check` | Type-check with tsc     |

## Project Structure

```
src/
  index.ts          # Entry point
  index.test.ts     # Placeholder test
```

## Pre-commit

Husky runs on commit: lint-staged, type-check, and unit tests.

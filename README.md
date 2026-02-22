# ts-scaffold

Minimal TypeScript + React project scaffold with Vite, Vitest, Tailwind CSS, ESLint, Prettier, and Husky.

## Setup

```bash
nvm use
npm install
```

## Scripts

| Script                       | Description              |
| ---------------------------- | ------------------------ |
| `npm run dev`                | Start Vite dev server    |
| `npm run lint`               | Run ESLint + Prettier    |
| `npm run lint:eslint`        | Run ESLint with auto-fix |
| `npm run lint:prettier`      | Run Prettier             |
| `npm run test:unit`          | Run tests in watch mode  |
| `npm run test:unit:no-watch` | Run tests once           |
| `npm run test:unit:coverage` | Run tests with coverage  |
| `npm run types:check`        | Type-check with tsc      |

## Project Structure

```
src/
  main.tsx          # React entry point
  app.tsx           # App component
  styles.css        # Tailwind CSS entry
  index.test.ts     # Placeholder test
```

## Pre-commit

Husky runs on commit: lint-staged, type-check, and unit tests.

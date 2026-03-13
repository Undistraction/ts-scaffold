# ts-scaffold

Full-stack TypeScript scaffold: Next.js (App Router, Tailwind) + Neon Postgres (Drizzle ORM).

## Gotchas

- Client-side test files (anything using jsdom/React) must start with `// @vitest-environment jsdom` as the very first line. API route tests do not need this.
- The database is Neon Postgres. Dev uses `.env.development`, tests use `.env.test` — both define `DATABASE_URL` pointing at separate databases. Shared config (Sentry DSN, etc.) lives in `.env`.
- Environment variables are validated via `@t3-oss/env-nextjs` in `src/env.ts`. Use `env.DATABASE_URL` (from `@/env`) instead of raw `process.env.DATABASE_URL` in application code.
- Pre-commit hook runs lint-staged, type checking, and all vitest tests (unit + UI). All must pass.
- Next.js page/layout components use `export default`. Other modules use named exports.
- Add `'use client'` directive to components that use hooks, event handlers, or browser APIs.
- Storybook story files (`*.stories.tsx`) must use single quotes for `title`, `tags`, and meta-level strings — Storybook v10's CSF static parser rejects template literals in these positions.
- Vitest has two projects: `unit` (jsdom) and `ui` (Storybook stories in headless Chromium via `@storybook/addon-vitest`). Both run together via `npm run test:vitest`.

## Accessibility

- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<button>`, `<header>`, `<footer>`, etc.) instead of generic `<div>`/`<span>`.
- All `<img>` elements must have meaningful `alt` text.
- Interactive elements must be keyboard-accessible.
- Form inputs must have associated `<label>` elements.
- Use ARIA attributes only when semantic HTML isn't sufficient.
- Ensure sufficient color contrast (WCAG AA minimum).
- Follow WCAG 2.1 AA guidelines.

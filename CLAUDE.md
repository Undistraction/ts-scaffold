# ts-scaffold

Full-stack TypeScript scaffold: Next.js (App Router, Tailwind) + Neon Postgres (Drizzle ORM).

## Gotchas

- Client-side test files (anything using jsdom/React) must start with `// @vitest-environment jsdom` as the very first line. API route tests do not need this.
- The database is Neon Postgres. Connection strings are in `.env.local` (`DATABASE_URL` for dev, `DATABASE_URL_TEST` for tests).
- Pre-commit hook runs lint-staged, type checking, and all unit tests. All three must pass.
- Next.js page/layout components use `export default`. Other modules use named exports.
- Add `'use client'` directive to components that use hooks, event handlers, or browser APIs.

## Accessibility

- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<button>`, `<header>`, `<footer>`, etc.) instead of generic `<div>`/`<span>`.
- All `<img>` elements must have meaningful `alt` text.
- Interactive elements must be keyboard-accessible.
- Form inputs must have associated `<label>` elements.
- Use ARIA attributes only when semantic HTML isn't sufficient.
- Ensure sufficient color contrast (WCAG AA minimum).
- Follow WCAG 2.1 AA guidelines.

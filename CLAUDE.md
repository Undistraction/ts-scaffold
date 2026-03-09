# ts-scaffold

Full-stack TypeScript scaffold: React client (Vite, Tailwind) + Express server + SQLite (Drizzle ORM).

## Gotchas

- Client-side test files (anything using jsdom/React) must start with `// @vitest-environment jsdom` as the very first line. Server tests do not need this.
- The SQLite database is intentionally in-memory (`:memory:`). This is by design — don't change it to a file path.
- Pre-commit hook runs lint-staged, type checking, and all unit tests. All three must pass.

## Accessibility

- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<button>`, `<header>`, `<footer>`, etc.) instead of generic `<div>`/`<span>`.
- All `<img>` elements must have meaningful `alt` text.
- Interactive elements must be keyboard-accessible.
- Form inputs must have associated `<label>` elements.
- Use ARIA attributes only when semantic HTML isn't sufficient.
- Ensure sufficient color contrast (WCAG AA minimum).
- Follow WCAG 2.1 AA guidelines.

---
name: gen-test
description: Generate a Vitest test file for a given source file, following project testing conventions
user-invocable: true
---

# gen-test

Generate a Vitest test file for the specified source file. The test file must be co-located with the source file (e.g., `foo.ts` -> `foo.test.ts`).

## Arguments

The user will provide a file path or describe the module to test.

## Client-side tests (anything under `src/client/`)

- The **very first line** must be `// @vitest-environment jsdom` — no blank lines above it
- Use `@testing-library/react` for rendering and querying (`render`, `screen`)
- Use `@testing-library/jest-dom` matchers (e.g., `toHaveTextContent`, `toBeInTheDocument`)
- Query by accessible roles (`getByRole`, `getByLabelText`) rather than test IDs

Example shape:

```tsx
// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { MyComponent } from './my-component'

describe(`MyComponent`, () => {
  it(`should render the heading`, () => {
    render(<MyComponent />)
    expect(screen.getByRole(`heading`)).toHaveTextContent(`Expected text`)
  })
})
```

## Server-side tests (anything under `src/server/`)

- Do NOT add the jsdom pragma
- Use `supertest` for HTTP endpoint tests
- Use the Drizzle `db` instance directly for database assertions
- Clean up database state in `beforeEach`
- Use `@/server/...` path aliases for imports

Example shape:

```ts
import { db, myTable } from '@/server/db'
import request from 'supertest'
import { app } from './app'

beforeEach(() => {
  db.delete(myTable).run()
})

describe(`/my-endpoint`, () => {
  it(`should return success`, async () => {
    const response = await request(app).get(`/my-endpoint`)
    expect(response.status).toBe(200)
  })
})
```

## General conventions

- Use backtick strings for `describe` and `it` labels (not single/double quotes)
- Follow AAA pattern: Arrange, Act, Assert (with blank lines separating each phase when all three are present)
- Use descriptive test names: `it('returns 404 when resource not found')`
- Named exports only — no default exports
- One `describe` block per logical unit; nest when testing sub-behaviors

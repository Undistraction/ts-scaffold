import { setupClerkTestingToken } from '@clerk/testing/playwright'
import { expect, test } from '@playwright/test'

// Set E2E_CLERK_USER_EMAIL and E2E_CLERK_USER_PASSWORD in .env.
// Create this user in the Clerk dashboard before running sign-in/sign-out tests.
const TEST_USER_EMAIL = process.env.E2E_CLERK_USER_EMAIL ?? ``
const TEST_USER_PASSWORD = process.env.E2E_CLERK_USER_PASSWORD ?? ``

test.beforeEach(async ({ page }) => {
  await setupClerkTestingToken({ page })
})

test(`shows sign-in and sign-up buttons when signed out`, async ({ page }) => {
  await page.goto(`/`)

  await expect(page.getByRole(`button`, { name: `Sign in` })).toBeVisible()
  await expect(page.getByRole(`button`, { name: `Sign up` })).toBeVisible()
})

test(`can sign in and see user button`, async ({ page }) => {
  await page.goto(`/`)

  await page.getByRole(`button`, { name: `Sign in` }).click()

  // Fill in the sign-in form
  await page.getByLabel(`Email address`).fill(TEST_USER_EMAIL)
  await page.getByRole(`button`, { name: `Continue` }).click()
  await page.getByPlaceholder(`Enter your password`).fill(TEST_USER_PASSWORD)
  await page.getByRole(`button`, { name: `Continue` }).click()

  // Should see the user button after signing in
  await expect(page.getByRole(`button`, { name: /open user/i })).toBeVisible({
    timeout: 10_000,
  })
  // Sign-in/sign-up buttons should be gone
  await expect(page.getByRole(`button`, { name: `Sign in` })).not.toBeVisible()
})

test(`can sign out after signing in`, async ({ page }) => {
  await page.goto(`/`)

  // Sign in first
  await page.getByRole(`button`, { name: `Sign in` }).click()
  await page.getByLabel(`Email address`).fill(TEST_USER_EMAIL)
  await page.getByRole(`button`, { name: `Continue` }).click()
  await page.getByPlaceholder(`Enter your password`).fill(TEST_USER_PASSWORD)
  await page.getByRole(`button`, { name: `Continue` }).click()
  await expect(page.getByRole(`button`, { name: /open user/i })).toBeVisible({
    timeout: 10_000,
  })

  // Open user menu and sign out
  await page.getByRole(`button`, { name: /open user/i }).click()
  await page.getByRole(`menuitem`, { name: `Sign out` }).click()

  // Should see sign-in button again
  await expect(page.getByRole(`button`, { name: `Sign in` })).toBeVisible()
})

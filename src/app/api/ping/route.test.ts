import { LOG_LEVEL } from '@/const/log-level'
import { db } from '@/db'
import { logEntries } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { GET } from './route'

beforeEach(async () => {
  await db.delete(logEntries)
})

describe(`/api/ping`, () => {
  it(`should return success`, async () => {
    const response = await GET()

    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ success: true })
  })

  it(`should insert a log entry`, async () => {
    await GET()

    const entries = await db
      .select()
      .from(logEntries)
      .where(eq(logEntries.message, `Ping`))

    expect(entries).toHaveLength(1)
    expect(entries[0]?.level).toBe(LOG_LEVEL.INFO)
  })
})

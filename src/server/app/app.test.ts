import { LOG_LEVEL } from '@/server/const/log-level'
import { db, logEntries } from '@/server/db'
import { eq } from 'drizzle-orm'
import request from 'supertest'
import { app } from './app'

// -----------------------------------------------------------------------------
// Test
// -----------------------------------------------------------------------------

beforeEach(() => {
  db.delete(logEntries).run()
})

describe(`/ping`, () => {
  it(`should return success`, async () => {
    const response = await request(app).get(`/ping`)

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ success: true })
  })

  it(`should insert a log entry`, async () => {
    await request(app).get(`/ping`)

    const entries = db
      .select()
      .from(logEntries)
      .where(eq(logEntries.message, `Ping`))
      .all()

    expect(entries).toHaveLength(1)
    expect(entries[0].level).toBe(LOG_LEVEL.INFO)
  })
})

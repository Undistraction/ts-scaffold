import { eq } from 'drizzle-orm'
import request from 'supertest'
import { LOG_LEVEL } from '../const/LOG_LEVEL'
import { db, logEntries } from '../db'
import { app } from './app'

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

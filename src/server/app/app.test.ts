import request from 'supertest'
import { app } from './app'

describe(`/ping`, () => {
  it(`should return success`, async () => {
    const response = await request(app).get(`/ping`)

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ success: true })
  })
})

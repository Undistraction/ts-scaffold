import express, { type Request } from 'express'
import { LOG_LEVEL } from '../const/LOG_LEVEL'
import { db } from '../db'
import { logEntries } from '../db/schema'

export const app = express()

// Middleware
app.use((_req, res, next) => {
  // So that we can connect from the client which is running on a different port
  res.setHeader(`Access-Control-Allow-Origin`, `*`)
  next()
})

// Routes
app.get(`/ping`, (req: Request<{ id: string }>, res) => {
  try {
    db.insert(logEntries)
      .values({
        message: `Ping`,
        level: LOG_LEVEL.INFO,
      })
      .run()
    res.json({ success: true })
  } catch {
    res.status(500).json({ success: false, error: `Internal server error` })
  }
})
